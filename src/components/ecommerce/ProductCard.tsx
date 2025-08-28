'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react'
import { Product } from '@/data/products'
import { formatPrice, formatRating } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useApp } from '@/contexts/AppContext'
import { useWishlistToggle } from '@/hooks/useWishlistToggle'
import { toast } from 'sonner'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useApp()
  const [isHovered, setIsHovered] = useState(false)
  const router = useRouter()
  const { toggleWishlist, isInWishlist } = useWishlistToggle()

  // Check if product is in wishlist
  const isWishlistItem = isInWishlist(product.id)

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleWishlist(product)
  }

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    addToCart(product, 1)
    toast.success('Added to cart!', {
      description: `${product.name} - ${formatPrice(product.price)}`,
      action: {
        label: 'View Cart',
        onClick: () => {
          // Add a small delay to ensure state is updated
          setTimeout(() => router.push('/cart'), 100)
        }
      }
    })
  }

  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/products/${product.slug}`}>
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden bg-muted/10">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-green-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                New
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                Sale
              </span>
            )}
            {product.isTrending && (
              <span className="bg-purple-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                Trending
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistToggle}
            className={`absolute top-3 right-3 p-2 rounded-full transition-all duration-200 ${
              isWishlistItem
                ? 'bg-red-500 text-white'
                : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white hover:text-red-500'
            }`}
          >
            <Heart
              className={`h-4 w-4 transition-transform duration-200 ${
                isWishlistItem ? 'fill-current scale-110' : ''
              }`}
            />
          </button>

          {/* Quick Actions Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  onClick={handleAddToCart}
                  className="bg-white text-black hover:bg-gray-100"
                >
                  <ShoppingCart className="h-4 w-4 mr-1" />
                  Add to Cart
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="bg-white/80 backdrop-blur-sm border-white hover:bg-white"
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4 space-y-3">
          {/* Product Name */}
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {formatRating(product.rating)} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="flex items-center justify-between">
            <span className={`text-sm ${product.stock > 10 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
              {product.stock > 10 ? 'In Stock' : product.stock > 0 ? `Only ${product.stock} left` : 'Out of Stock'}
            </span>
            {product.stock <= 10 && product.stock > 0 && (
              <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Limited Stock
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  )
}
