export interface User {
  id: string
  name: string
  avatar: string
}

export interface Review {
  id: string
  userId: string
  productId: string
  rating: number
  comment: string
  date: string
}

export const users: User[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b376?w=64&h=64&fit=crop&crop=face'
  },
  {
    id: '3',
    name: 'Mike Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face'
  },
  {
    id: '4',
    name: 'Emma Thompson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
  },
  {
    id: '5',
    name: 'David Park',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face'
  },
  {
    id: '6',
    name: 'Lisa Wang',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face'
  },
  {
    id: '7',
    name: 'James Wilson',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=64&h=64&fit=crop&crop=face'
  },
  {
    id: '8',
    name: 'Sophia Lee',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face'
  }
]

export const reviews: Review[] = [
  {
    id: '1',
    userId: '1',
    productId: '1',
    rating: 5,
    comment: 'Amazing quality! Love the fit and style. Definitely recommend!',
    date: '2024-02-15'
  },
  {
    id: '2',
    userId: '2',
    productId: '1',
    rating: 4,
    comment: 'Great product, fast shipping. Only minor issue with sizing.',
    date: '2024-02-10'
  },
  {
    id: '3',
    userId: '3',
    productId: '2',
    rating: 5,
    comment: 'Excellent build quality. Works perfectly as expected.',
    date: '2024-02-12'
  },
  {
    id: '4',
    userId: '4',
    productId: '3',
    rating: 4,
    comment: 'Good value for money. Nice design and comfortable.',
    date: '2024-02-08'
  },
  {
    id: '5',
    userId: '5',
    productId: '4',
    rating: 5,
    comment: 'Outstanding product! Exceeded my expectations.',
    date: '2024-02-14'
  }
]
