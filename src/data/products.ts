export interface Product {
  id: string
  name: string
  slug: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  categoryId: string
  description: string
  features: string[]
  image: string
  images: string[]
  stock: number
  isNew?: boolean
  isTrending?: boolean
  isFeatured?: boolean
  tags: string[]
}

export const products: Product[] = [
  // Fashion Products
  {
    id: '1',
    name: 'Urban Streetwear Hoodie',
    slug: 'urban-streetwear-hoodie',
    price: 89.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 142,
    categoryId: '1',
    description: 'Premium cotton blend hoodie with modern streetwear design. Perfect for casual outings and everyday comfort.',
    features: ['100% Cotton', 'Machine Washable', 'Unisex Design', 'Kangaroo Pocket'],
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&h=500&fit=crop'
    ],
    stock: 25,
    isNew: true,
    isTrending: true,
    isFeatured: true,
    tags: ['streetwear', 'hoodie', 'casual', 'unisex']
  },
  {
    id: '2',
    name: 'Classic Denim Jacket',
    slug: 'classic-denim-jacket',
    price: 79.99,
    rating: 4.6,
    reviewCount: 98,
    categoryId: '1',
    description: 'Timeless denim jacket with vintage wash. A wardrobe essential that never goes out of style.',
    features: ['100% Denim', 'Vintage Wash', 'Button Closure', 'Chest Pockets'],
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=500&fit=crop'
    ],
    stock: 18,
    isTrending: true,
    tags: ['denim', 'jacket', 'vintage', 'classic']
  },
  {
    id: '3',
    name: 'Minimalist White Sneakers',
    slug: 'minimalist-white-sneakers',
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviewCount: 256,
    categoryId: '1',
    description: 'Clean, minimalist sneakers crafted with premium leather. Perfect for any outfit.',
    features: ['Genuine Leather', 'Rubber Sole', 'Breathable Interior', 'Lace-up Closure'],
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop'
    ],
    stock: 42,
    isFeatured: true,
    tags: ['sneakers', 'minimalist', 'leather', 'white']
  },
  
  // Electronics Products
  {
    id: '4',
    name: 'Wireless Gaming Headset',
    slug: 'wireless-gaming-headset',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviewCount: 189,
    categoryId: '2',
    description: 'Professional wireless gaming headset with 7.1 surround sound and RGB lighting.',
    features: ['7.1 Surround Sound', 'RGB Lighting', '20-hour Battery', 'Noise Cancelling Mic'],
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop'
    ],
    stock: 15,
    isNew: true,
    isTrending: true,
    tags: ['gaming', 'headset', 'wireless', 'rgb']
  },
  {
    id: '5',
    name: 'Smart Fitness Watch',
    slug: 'smart-fitness-watch',
    price: 299.99,
    rating: 4.5,
    reviewCount: 134,
    categoryId: '2',
    description: 'Advanced fitness tracking with heart rate monitoring, GPS, and smartphone integration.',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Water Resistant', '7-day Battery'],
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop'
    ],
    stock: 28,
    isFeatured: true,
    tags: ['smartwatch', 'fitness', 'gps', 'health']
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    slug: 'portable-bluetooth-speaker',
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.4,
    reviewCount: 87,
    categoryId: '2',
    description: 'Compact Bluetooth speaker with 360-degree sound and waterproof design.',
    features: ['360° Sound', 'Waterproof', '12-hour Battery', 'Voice Assistant'],
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop'
    ],
    stock: 35,
    tags: ['speaker', 'bluetooth', 'portable', 'waterproof']
  },

  // Beauty Products
  {
    id: '7',
    name: 'Luxury Face Serum Set',
    slug: 'luxury-face-serum-set',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.8,
    reviewCount: 203,
    categoryId: '3',
    description: 'Complete skincare set with vitamin C, hyaluronic acid, and retinol serums.',
    features: ['3 Premium Serums', 'Anti-aging Formula', 'All Skin Types', 'Cruelty-free'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=500&fit=crop'
    ],
    stock: 22,
    isNew: true,
    isFeatured: true,
    tags: ['skincare', 'serum', 'anti-aging', 'vitamin-c']
  },
  {
    id: '8',
    name: 'Organic Lip Balm Collection',
    slug: 'organic-lip-balm-collection',
    price: 24.99,
    rating: 4.6,
    reviewCount: 156,
    categoryId: '3',
    description: 'Set of 4 organic lip balms with natural ingredients and delightful scents.',
    features: ['4 Different Flavors', 'Organic Ingredients', 'Long-lasting', 'Eco-friendly Packaging'],
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&h=500&fit=crop'
    ],
    stock: 67,
    tags: ['lip-balm', 'organic', 'natural', 'eco-friendly']
  },

  // Lifestyle Products
  {
    id: '9',
    name: 'Minimalist Desk Organizer',
    slug: 'minimalist-desk-organizer',
    price: 49.99,
    rating: 4.7,
    reviewCount: 92,
    categoryId: '4',
    description: 'Sleek bamboo desk organizer with multiple compartments for office supplies.',
    features: ['Bamboo Construction', 'Multiple Compartments', 'Cable Management', 'Eco-friendly'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop'
    ],
    stock: 38,
    isTrending: true,
    tags: ['organizer', 'bamboo', 'desk', 'minimalist']
  },
  {
    id: '10',
    name: 'Ceramic Coffee Mug Set',
    slug: 'ceramic-coffee-mug-set',
    price: 39.99,
    originalPrice: 54.99,
    rating: 4.5,
    reviewCount: 74,
    categoryId: '4',
    description: 'Set of 4 handcrafted ceramic mugs with modern geometric designs.',
    features: ['Set of 4 Mugs', 'Handcrafted Ceramic', 'Microwave Safe', 'Dishwasher Safe'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=500&h=500&fit=crop'
    ],
    stock: 45,
    tags: ['mugs', 'ceramic', 'coffee', 'handcrafted']
  },

  // Sports Products
  {
    id: '11',
    name: 'Performance Yoga Mat',
    slug: 'performance-yoga-mat',
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviewCount: 167,
    categoryId: '5',
    description: 'Premium non-slip yoga mat with extra cushioning and alignment guides.',
    features: ['Non-slip Surface', 'Extra Thick 6mm', 'Alignment Lines', 'Eco-friendly'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-d03964ba4db1?w=500&h=500&fit=crop'
    ],
    stock: 31,
    isFeatured: true,
    tags: ['yoga', 'mat', 'fitness', 'non-slip']
  },
  {
    id: '12',
    name: 'Resistance Band Set',
    slug: 'resistance-band-set',
    price: 29.99,
    rating: 4.4,
    reviewCount: 198,
    categoryId: '5',
    description: 'Complete resistance band set with 5 different resistance levels and accessories.',
    features: ['5 Resistance Levels', 'Door Anchor', 'Handles & Ankle Straps', 'Workout Guide'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=500&fit=crop'
    ],
    stock: 58,
    isTrending: true,
    tags: ['resistance-bands', 'fitness', 'home-gym', 'workout']
  },

  // Books
  {
    id: '13',
    name: 'The Art of Minimalism',
    slug: 'the-art-of-minimalism',
    price: 19.99,
    rating: 4.6,
    reviewCount: 89,
    categoryId: '6',
    description: 'A comprehensive guide to living with less and finding more meaning in simplicity.',
    features: ['Paperback Edition', '280 Pages', 'Illustrated', 'Author Signed'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&h=500&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&h=500&fit=crop'
    ],
    stock: 73,
    tags: ['book', 'minimalism', 'lifestyle', 'self-help']
  },

  // Additional products to reach 50 total
  {
    id: '14',
    name: 'Vintage Band T-Shirt',
    slug: 'vintage-band-t-shirt',
    price: 34.99,
    originalPrice: 44.99,
    rating: 4.3,
    reviewCount: 67,
    categoryId: '1',
    description: 'Authentic vintage-style band t-shirt with distressed print and soft cotton fabric.',
    features: ['100% Cotton', 'Vintage Wash', 'Screen Print', 'Unisex Fit'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop'
    ],
    stock: 41,
    tags: ['t-shirt', 'vintage', 'band', 'cotton']
  },
  {
    id: '15',
    name: 'Leather Crossbody Bag',
    slug: 'leather-crossbody-bag',
    price: 129.99,
    rating: 4.7,
    reviewCount: 112,
    categoryId: '1',
    description: 'Handcrafted leather crossbody bag with adjustable strap and multiple pockets.',
    features: ['Genuine Leather', 'Adjustable Strap', 'Multiple Pockets', 'Handcrafted'],
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop'
    ],
    stock: 23,
    isFeatured: true,
    tags: ['bag', 'leather', 'crossbody', 'handcrafted']
  }
]

// Helper functions
export const getFeaturedProducts = () => products.filter(p => p.isFeatured)
export const getTrendingProducts = () => products.filter(p => p.isTrending)
export const getNewProducts = () => products.filter(p => p.isNew)
export const getProductsByCategory = (categoryId: string) => 
  products.filter(p => p.categoryId === categoryId)
export const getProductBySlug = (slug: string) => 
  products.find(p => p.slug === slug)
export const searchProducts = (query: string) => 
  products.filter(p => 
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  )
