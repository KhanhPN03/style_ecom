export interface Category {
  id: string
  name: string
  slug: string
  image: string
  description: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=400&fit=crop',
    description: 'Trendy clothing and accessories'
  },
  {
    id: '2',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=400&fit=crop',
    description: 'Latest gadgets and tech'
  },
  {
    id: '3',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    description: 'Skincare and cosmetics'
  },
  {
    id: '4',
    name: 'Lifestyle',
    slug: 'lifestyle',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
    description: 'Home and living essentials'
  },
  {
    id: '5',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop',
    description: 'Athletic wear and equipment'
  },
  {
    id: '6',
    name: 'Books',
    slug: 'books',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop',
    description: 'Books and literature'
  }
]
