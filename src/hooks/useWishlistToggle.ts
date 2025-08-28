import { useCallback, useRef } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useApp } from '@/contexts/AppContext'
import { Product } from '@/data/products'

export const useWishlistToggle = () => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useApp()
  const router = useRouter()
  const processingRef = useRef<Set<string>>(new Set())

  const toggleWishlist = useCallback((product: Product, showNavigationAction = true) => {
    // Prevent multiple rapid calls for the same product
    if (processingRef.current.has(product.id)) {
      return
    }

    processingRef.current.add(product.id)

    try {
      const currentlyInWishlist = isInWishlist(product.id)
      
      if (currentlyInWishlist) {
        removeFromWishlist(product.id)
        toast.success('Removed from wishlist', {
          description: `${product.name} has been removed`
        })
      } else {
        addToWishlist(product)
        toast.success('Added to wishlist!', {
          description: `${product.name} has been saved`,
          action: showNavigationAction ? {
            label: 'View Wishlist',
            onClick: () => {
              setTimeout(() => router.push('/wishlist'), 100)
            }
          } : undefined
        })
      }
    } finally {
      // Clear the processing flag after a short delay
      setTimeout(() => {
        processingRef.current.delete(product.id)
      }, 500)
    }
  }, [addToWishlist, removeFromWishlist, isInWishlist, router])

  return { toggleWishlist, isInWishlist }
}
