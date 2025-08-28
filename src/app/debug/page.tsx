'use client'

import { useApp } from '@/contexts/AppContext'
import { useEffect } from 'react'

export default function DebugPage() {
  const { cartItems, cartCount, addToCart } = useApp()

  useEffect(() => {
    console.log('Cart items:', cartItems)
    console.log('Cart count:', cartCount)
    console.log('localStorage cart:', localStorage.getItem('stylehub_cart'))
  }, [cartItems, cartCount])

  const testAddToCart = () => {
    const testProduct = {
      id: 'test-product',
      name: 'Test Product',
      slug: 'test-product',
      description: 'Test description',
      price: 29.99,
      originalPrice: 39.99,
      image: '/products/electronics/smartphone-x1.jpg',
      images: ['/products/electronics/smartphone-x1.jpg'],
      categoryId: 'electronics',
      stock: 10,
      rating: 4.5,
      reviewCount: 10,
      features: ['Feature 1'],
      tags: ['test']
    }
    
    console.log('Adding test product to cart...')
    addToCart(testProduct)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Debug Cart</h1>
      <div className="space-y-4">
        <p>Cart Count: {cartCount}</p>
        <p>Cart Items: {JSON.stringify(cartItems, null, 2)}</p>
        <button 
          onClick={testAddToCart}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Test Product
        </button>
      </div>
    </div>
  )
}
