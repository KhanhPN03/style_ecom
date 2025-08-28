'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Heart, ShoppingCart, ArrowLeft, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/ecommerce/ProductCard'
import { useApp } from '@/contexts/AppContext'
import { toast } from 'sonner'

export default function WishlistPage() {
  const { wishlistItems, removeFromWishlist, addToCart, clearWishlist, isLoading } = useApp()
  const router = useRouter()

  const handleRemoveFromWishlist = (productId: string, productName: string) => {
    removeFromWishlist(productId)
    toast.success('Removed from wishlist', {
      description: `${productName} has been removed from your wishlist`
    })
  }

  const handleClearWishlist = () => {
    if (wishlistItems.length === 0) return
    
    clearWishlist()
    toast.success('Wishlist cleared', {
      description: 'All items have been removed from your wishlist'
    })
  }

  const addAllToCart = () => {
    if (wishlistItems.length === 0) return
    
    wishlistItems.forEach(product => {
      addToCart(product, 1)
    })
    
    toast.success('All items added to cart!', {
      description: `${wishlistItems.length} items added to your cart`,
      action: {
        label: 'View Cart',
        onClick: () => {
          // Add a small delay to ensure all state updates are completed
          setTimeout(() => router.push('/cart'), 150)
        }
      }
    })
  }

  // Show loading state while data is being loaded from localStorage
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="text-6xl mb-6">💝</div>
            <h1 className="text-2xl font-bold mb-4">Loading wishlist...</h1>
            <p className="text-muted-foreground mb-8">
              Please wait while we load your saved items.
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="text-6xl mb-6">💝</div>
            <h1 className="text-2xl font-bold mb-4">Your wishlist is empty</h1>
            <p className="text-muted-foreground mb-8">
              Save items you love to your wishlist. Review them anytime and easily move them to your cart.
            </p>
            <Link href="/products">
              <Button size="lg" className="group">
                <Heart className="mr-2 h-4 w-4" />
                Discover Products
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <Link href="/products">
              <Button variant="ghost" size="sm" className="mr-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold">My Wishlist</h1>
              <p className="text-muted-foreground mt-1">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={handleClearWishlist}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
            <Button onClick={addAllToCart}>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add All to Cart
            </Button>
          </div>
        </div>

        {/* Wishlist Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlistItems.map((product, index) => (
            <div
              key={product.id}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Custom Product Card with Wishlist Controls */}
              <div className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => handleRemoveFromWishlist(product.id, product.name)}
                  className="absolute top-3 right-3 z-10 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  title="Remove from wishlist"
                >
                  <Heart className="h-4 w-4 fill-current" />
                </button>

                {/* Use existing ProductCard component */}
                <ProductCard product={product} />
                
                {/* Quick Add to Cart Overlay */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="w-full bg-white/90 text-black hover:bg-white backdrop-blur-sm"
                    onClick={() => {
                      addToCart(product, 1)
                      toast.success('Added to cart!', {
                        description: `${product.name} has been added to your cart`,
                        action: {
                          label: 'View Cart',
                          onClick: () => {
                            // Add a small delay to ensure state is updated
                            setTimeout(() => router.push('/cart'), 100)
                          }
                        }
                      })
                    }}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Recommendations */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">You might also like</h2>
              <p className="text-muted-foreground mb-6">
                Discover more products based on your wishlist
              </p>
              <Link href="/products">
                <Button variant="outline" size="lg">
                  Browse Similar Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
