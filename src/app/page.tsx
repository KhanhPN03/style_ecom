import Hero from '@/components/ecommerce/Hero'
import FeaturedCategories from '@/components/ecommerce/FeaturedCategories'
import TrendingProducts from '@/components/ecommerce/TrendingProducts'
import FeaturedProducts from '@/components/ecommerce/FeaturedProducts'
import Newsletter from '@/components/ecommerce/Newsletter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'StyleHub - Modern E-commerce Experience',
  description: 'Discover the latest trends in fashion, electronics, beauty, and lifestyle. Shop with confidence at StyleHub.',
  openGraph: {
    title: 'StyleHub - Modern E-commerce Experience',
    description: 'Discover the latest trends in fashion, electronics, beauty, and lifestyle.',
    images: ['/og-home.jpg'],
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedCategories />
      <TrendingProducts />
      <FeaturedProducts />
      <Newsletter />
    </div>
  )
}
