'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Product } from '@/data/products'

interface CartItem {
  id: string
  name: string
  image: string
  price: number
  quantity: number
  stock: number
  slug: string
}

interface Order {
  id: string
  items: CartItem[]
  total: number
  date: string
  status: 'completed' | 'processing' | 'shipped' | 'delivered'
  shippingAddress: {
    name: string
    address: string
    city: string
    zipCode: string
    country: string
  }
}

interface AppContextType {
  // Cart
  cartItems: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  removeFromCart: (productId: string) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  cartTotal: number
  cartCount: number

  // Wishlist
  wishlistItems: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  isInWishlist: (productId: string) => boolean
  clearWishlist: () => void
  wishlistCount: number

  // Orders
  orders: Order[]
  createOrder: (items: CartItem[], shippingAddress: Order['shippingAddress']) => void
  
  // Loading state
  isLoading: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load data from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('stylehub_cart')
      const savedWishlist = localStorage.getItem('stylehub_wishlist')
      const savedOrders = localStorage.getItem('stylehub_orders')

      if (savedCart) {
        try {
          setCartItems(JSON.parse(savedCart))
        } catch (error) {
          console.error('Error loading cart from localStorage:', error)
        }
      }

      if (savedWishlist) {
        try {
          setWishlistItems(JSON.parse(savedWishlist))
        } catch (error) {
          console.error('Error loading wishlist from localStorage:', error)
        }
      }

      if (savedOrders) {
        try {
          setOrders(JSON.parse(savedOrders))
        } catch (error) {
          console.error('Error loading orders from localStorage:', error)
        }
      }
      
      setIsLoading(false)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('stylehub_cart', JSON.stringify(cartItems))
    }
  }, [cartItems])

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('stylehub_wishlist', JSON.stringify(wishlistItems))
    }
  }, [wishlistItems])

  // Save orders to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('stylehub_orders', JSON.stringify(orders))
    }
  }, [orders])

  // Cart functions
  const addToCart = (product: Product, quantity = 1) => {
    setCartItems(items => {
      const existingItem = items.find(item => item.id === product.id)
      
      if (existingItem) {
        return items.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, product.stock) }
            : item
        )
      } else {
        return [...items, {
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: Math.min(quantity, product.stock),
          stock: product.stock,
          slug: product.slug
        }]
      }
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems(items => items.filter(item => item.id !== productId))
  }

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }
    
    setCartItems(items =>
      items.map(item =>
        item.id === productId
          ? { ...item, quantity: Math.min(quantity, item.stock) }
          : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  // Wishlist functions
  const addToWishlist = (product: Product) => {
    setWishlistItems(prevItems => {
      // Check if product is already in wishlist to prevent duplicates
      if (prevItems.some(item => item.id === product.id)) {
        return prevItems
      }
      return [...prevItems, product]
    })
  }

  const removeFromWishlist = (productId: string) => {
    setWishlistItems(prevItems => {
      return prevItems.filter(item => item.id !== productId)
    })
  }

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.id === productId)
  }

  const clearWishlist = () => {
    setWishlistItems([])
  }

  // Order functions
  const createOrder = (items: CartItem[], shippingAddress: Order['shippingAddress']) => {
    // Generate a unique ID using crypto.randomUUID for better client-side uniqueness
    const orderId = typeof window !== 'undefined' && window.crypto && window.crypto.randomUUID 
      ? window.crypto.randomUUID() 
      : `order-${Math.random().toString(36).substr(2, 9)}-${Date.now()}`
    
    const order: Order = {
      id: orderId,
      items: [...items],
      total: items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      date: new Date().toISOString(),
      status: 'completed',
      shippingAddress
    }
    
    setOrders(prevOrders => [order, ...prevOrders])
    clearCart()
  }

  // Computed values
  const cartTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const wishlistCount = wishlistItems.length

  const value: AppContextType = {
    // Cart
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartCount,

    // Wishlist
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    clearWishlist,
    wishlistCount,

    // Orders
    orders,
    createOrder,
    
    // Loading state
    isLoading
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
