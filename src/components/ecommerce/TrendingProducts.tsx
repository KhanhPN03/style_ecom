'use client'

import { useState } from 'react'
import { getTrendingProducts } from '@/data/products'
import ProductCard from './ProductCard'

export default function TrendingProducts() {
  const [products] = useState(() => getTrendingProducts().slice(0, 8))

  return (
    <section className="py-16 lg:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <span>🔥</span>
            <span>Trending Now</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-4">
            What's Trending
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular products that everyone is talking about
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
