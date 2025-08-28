'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatPrice } from '@/lib/utils'
import { useApp } from '@/contexts/AppContext'
import { toast } from 'sonner'

interface CartItem {
  id: string
  name: string
  image: string
  price: number
  quantity: number
  stock: number
}

export default function CartPage() {
  const { cartItems, removeFromCart, updateCartQuantity, cartTotal, cartCount, isLoading } = useApp()
  
  const shipping = cartTotal > 100 ? 0 : 10
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  // Wrapper functions with toast notifications
  const handleUpdateQuantity = (id: string, newQuantity: number, itemName: string) => {
    updateCartQuantity(id, newQuantity)
    toast.success('Cart updated', {
      description: `Updated quantity for ${itemName}`
    })
  }

  const handleRemoveItem = (id: string, itemName: string) => {
    removeFromCart(id)
    toast.success('Item removed', {
      description: `${itemName} has been removed from your cart`
    })
  }

  // Show loading state while data is being loaded from localStorage
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-2xl font-bold mb-4">Loading cart...</h1>
            <p className="text-muted-foreground mb-8">
              Please wait while we load your cart items.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="text-6xl mb-6">🛒</div>
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link href="/products">
              <Button size="lg" className="group">
                <ShoppingBag className="mr-2 h-4 w-4" />
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center mb-8">
          <Link href="/products">
            <Button variant="ghost" size="sm" className="mr-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Continue Shopping
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-2xl font-bold text-primary mb-4">
                      {formatPrice(item.price)}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-muted-foreground">Quantity:</span>
                        <div className="flex items-center border border-input rounded-md">
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.name)}
                            className="p-2 hover:bg-muted transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2 min-w-12 text-center">{item.quantity}</span>
                          <button
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.name)}
                            className="p-2 hover:bg-muted transition-colors"
                            disabled={item.quantity >= item.stock}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleRemoveItem(item.id, item.name)}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Remove
                      </Button>
                    </div>

                    {/* Stock Warning */}
                    {item.quantity >= item.stock && (
                      <p className="text-sm text-yellow-600 mt-2">
                        Only {item.stock} items available
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? 'text-green-600' : ''}>
                    {shipping === 0 ? 'FREE' : formatPrice(shipping)}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                
                <hr className="border-border" />
                
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* Free Shipping Banner */}
              {shipping > 0 && (
                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    Add {formatPrice(100 - cartTotal)} more to get FREE shipping!
                  </p>
                </div>
              )}

              {/* Checkout Button */}
              <Link href="/checkout">
                <Button size="lg" className="w-full mb-4">
                  Proceed to Checkout
                </Button>
              </Link>

              {/* Security Info */}
              <div className="text-center text-sm text-muted-foreground">
                <p className="mb-2">🔒 Secure checkout</p>
                <p>Your payment information is safe and encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
