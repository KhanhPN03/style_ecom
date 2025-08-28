'use client'

import { useState, useEffect, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, Filter, X } from 'lucide-react'
import { searchProducts, products } from '@/data/products'
import { categories } from '@/data/categories'
import ProductCard from '@/components/ecommerce/ProductCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function SearchContent() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  
  const [searchQuery, setSearchQuery] = useState(initialQuery)
  const [selectedCategory, setSelectedCategory] = useState('')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [minRating, setMinRating] = useState(0)
  const [showFilters, setShowFilters] = useState(false)

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    
    let results = searchProducts(searchQuery)
    
    // Apply filters
    if (selectedCategory) {
      results = results.filter(product => product.categoryId === selectedCategory)
    }
    
    results = results.filter(product => 
      product.price >= priceRange[0] && 
      product.price <= priceRange[1] &&
      product.rating >= minRating
    )
    
    return results
  }, [searchQuery, selectedCategory, priceRange, minRating])

  const popularSearches = ['hoodie', 'headset', 'serum', 'sneakers', 'yoga mat', 'book']

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-muted/20 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-poppins font-bold mb-6 text-center">
            Search Products
          </h1>
          
          {/* Search Input */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="search"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg rounded-full border-2 border-input focus:border-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Popular Searches */}
            {!searchQuery && (
              <div className="mt-6">
                <p className="text-sm text-muted-foreground mb-3">Popular searches:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((term) => (
                    <button
                      key={term}
                      onClick={() => setSearchQuery(term)}
                      className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-muted/80 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {searchQuery ? (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card rounded-lg p-6 shadow-sm sticky top-24">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    <option value="">All Categories</option>
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Price Range</label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <label className="block text-sm font-medium mb-2">Minimum Rating</label>
                  <select
                    value={minRating}
                    onChange={(e) => setMinRating(parseInt(e.target.value))}
                    className="w-full p-2 border border-input rounded-md bg-background"
                  >
                    <option value={0}>All Ratings</option>
                    <option value={4}>4+ Stars</option>
                    <option value={4.5}>4.5+ Stars</option>
                  </select>
                </div>

                {/* Clear Filters */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory('')
                    setPriceRange([0, 1000])
                    setMinRating(0)
                  }}
                  className="w-full"
                >
                  Clear Filters
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1">
              {/* Search Controls */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    Search results for "{searchQuery}"
                  </h2>
                  <p className="text-muted-foreground">
                    {searchResults.length} {searchResults.length === 1 ? 'product' : 'products'} found
                  </p>
                </div>

                {/* Mobile Filter Toggle */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Search Results */}
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {searchResults.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-6">
                    We couldn't find any products matching "{searchQuery}". Try adjusting your search terms or browse our categories.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={() => setSearchQuery('')}
                      variant="outline"
                    >
                      Clear Search
                    </Button>
                    <Button asChild>
                      <a href="/categories">Browse Categories</a>
                    </Button>
                  </div>
                </div>
              )}
            </main>
          </div>
        ) : (
          /* No Search Query - Show Categories and Suggestions */
          <div className="text-center py-12">
            <div className="text-6xl mb-6">🛍️</div>
            <h2 className="text-2xl font-bold mb-4">What are you looking for?</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Start typing to search our catalog of premium products, or browse by category.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSearchQuery(category.name.toLowerCase())}
                  className="p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="text-2xl mb-2">
                    {category.id === '1' ? '👕' : 
                     category.id === '2' ? '📱' : 
                     category.id === '3' ? '💄' : 
                     category.id === '4' ? '🏠' : 
                     category.id === '5' ? '⚽' : '📚'}
                  </div>
                  <div className="font-medium text-sm">{category.name}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold">Loading search...</h1>
          </div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
