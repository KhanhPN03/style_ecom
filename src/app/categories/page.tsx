import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package } from 'lucide-react'
import { categories } from '@/data/categories'
import { getProductsByCategory } from '@/data/products'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Categories - StyleHub',
  description: 'Browse all product categories at StyleHub. Find fashion, electronics, beauty, lifestyle products and more.',
}

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/20 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
            Shop by Category
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collections across all categories. From fashion to electronics, 
            beauty to lifestyle - find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const categoryProducts = getProductsByCategory(category.id)
            
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group"
              >
                <div 
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Category Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    
                    {/* Product Count Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                      <div className="flex items-center space-x-1 text-sm font-medium">
                        <Package className="h-4 w-4" />
                        <span>{categoryProducts.length} items</span>
                      </div>
                    </div>

                    {/* Category Name Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {category.name}
                      </h2>
                      <p className="text-white/90 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Category Details */}
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                          Explore {category.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {categoryProducts.length} products available
                        </p>
                      </div>
                      
                      <div className="flex items-center text-primary group-hover:translate-x-1 transition-transform duration-200">
                        <ArrowRight className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Price Range */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Price range:</span>
                        <span className="font-medium">
                          ${Math.min(...categoryProducts.map(p => p.price)).toFixed(0)} - 
                          ${Math.max(...categoryProducts.map(p => p.price)).toFixed(0)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Can't decide which category?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Browse all our products or use our search feature to find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <button className="btn-primary group inline-flex items-center">
                  <span>Browse All Products 

                  </span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
              <Link href="/search">
                <button className="btn-secondary group inline-flex items-center">
                  <span>Search Products</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
