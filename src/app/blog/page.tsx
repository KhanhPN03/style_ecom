import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  PenTool, 
  Calendar, 
  User, 
  Tag, 
  Search, 
  TrendingUp,
  Heart,
  Shirt,
  Smartphone,
  Sparkles,
  Clock,
  Eye
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Discover the latest trends, styling tips, and industry insights from StyleHub\'s fashion and lifestyle experts.',
}

export default function BlogPage() {
  const featuredPost = {
    title: 'The Ultimate Guide to Sustainable Fashion in 2025',
    excerpt: 'Discover how to build an eco-friendly wardrobe without compromising on style. From sustainable fabrics to ethical brands.',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
    author: 'Emily Rodriguez',
    date: 'January 15, 2025',
    readTime: '8 min read',
    category: 'Sustainability',
    views: '12.5K',
  }

  const blogPosts = [
    {
      title: 'Winter Fashion Trends That Will Define 2025',
      excerpt: 'From cozy oversized sweaters to statement coats, explore the must-have pieces for this winter season.',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400',
      author: 'Sarah Johnson',
      date: 'January 12, 2025',
      readTime: '5 min read',
      category: 'Fashion',
      views: '8.2K',
    },
    {
      title: 'Smart Home Tech: The Future of Modern Living',
      excerpt: 'Discover the latest smart home innovations that are transforming how we live, work, and relax at home.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400',
      author: 'Michael Chen',
      date: 'January 10, 2025',
      readTime: '7 min read',
      category: 'Technology',
      views: '15.1K',
    },
    {
      title: 'Beauty Routine Essentials for Glowing Skin',
      excerpt: 'Expert tips and product recommendations for achieving healthy, radiant skin with a simple daily routine.',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400',
      author: 'Lisa Wang',
      date: 'January 8, 2025',
      readTime: '6 min read',
      category: 'Beauty',
      views: '9.7K',
    },
    {
      title: 'Minimalist Home Decor: Less is More',
      excerpt: 'Learn how to create a serene, clutter-free living space with thoughtful design choices and quality pieces.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      author: 'David Kim',
      date: 'January 5, 2025',
      readTime: '4 min read',
      category: 'Home & Lifestyle',
      views: '6.3K',
    },
    {
      title: 'Fitness Fashion: Style Meets Performance',
      excerpt: 'The best activewear trends that combine functionality with fashion for your workout wardrobe.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400',
      author: 'Jessica Martinez',
      date: 'January 3, 2025',
      readTime: '5 min read',
      category: 'Fashion',
      views: '11.2K',
    },
    {
      title: 'Gift Guide: Thoughtful Presents for Every Occasion',
      excerpt: 'Curated gift ideas for birthdays, anniversaries, and special moments that show you truly care.',
      image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400',
      author: 'Amanda Foster',
      date: 'December 30, 2024',
      readTime: '8 min read',
      category: 'Lifestyle',
      views: '18.5K',
    },
    {
      title: 'Color Psychology in Fashion: What Your Wardrobe Says',
      excerpt: 'Understand how colors affect mood and perception, and learn to use them strategically in your style choices.',
      image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400',
      author: 'Rachel Green',
      date: 'December 28, 2024',
      readTime: '6 min read',
      category: 'Fashion',
      views: '7.8K',
    },
    {
      title: 'Digital Wellness: Balancing Technology and Life',
      excerpt: 'Tips for maintaining a healthy relationship with technology while staying connected and productive.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400',
      author: 'Alex Turner',
      date: 'December 25, 2024',
      readTime: '7 min read',
      category: 'Technology',
      views: '13.4K',
    },
    {
      title: 'Seasonal Skincare: Adapting Your Routine',
      excerpt: 'How to adjust your skincare regimen for changing weather and seasonal environmental factors.',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400',
      author: 'Dr. Maria Santos',
      date: 'December 22, 2024',
      readTime: '5 min read',
      category: 'Beauty',
      views: '10.9K',
    },
  ]

  const categories = [
    { name: 'Fashion', icon: Shirt, count: 45 },
    { name: 'Beauty', icon: Sparkles, count: 32 },
    { name: 'Technology', icon: Smartphone, count: 28 },
    { name: 'Lifestyle', icon: Heart, count: 38 },
    { name: 'Home & Decor', icon: Tag, count: 24 },
    { name: 'Sustainability', icon: TrendingUp, count: 19 },
  ]

  const popularPosts = [
    {
      title: 'The Complete Guide to Capsule Wardrobes',
      views: '25.7K',
      date: 'Dec 20, 2024',
    },
    {
      title: 'Skincare Ingredients That Actually Work',
      views: '22.1K',
      date: 'Dec 18, 2024',
    },
    {
      title: 'Smart Shopping: How to Find Quality at Any Budget',
      views: '19.8K',
      date: 'Dec 15, 2024',
    },
    {
      title: 'Workplace Fashion: Professional Yet Stylish',
      views: '17.3K',
      date: 'Dec 12, 2024',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              StyleHub Blog
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover the latest trends, styling tips, and industry insights from our team of 
              fashion and lifestyle experts. Stay inspired and informed with our curated content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search articles..." className="pl-10" />
              </div>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Post */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl overflow-hidden border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {featuredPost.views}
                    </div>
                  </div>
                </div>
                <Button size="lg">Read Full Article</Button>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Latest Posts */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-card rounded-2xl overflow-hidden border">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">{post.author}</span>
                          <span className="text-sm text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{post.date}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {post.readTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Read More</Button>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">Load More Articles</Button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* Categories */}
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link
                      key={index}
                      href={`/blog/category/${category.name.toLowerCase().replace(' & ', '-').replace(' ', '-')}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <category.icon className="h-5 w-5 text-primary" />
                        <span>{category.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Popular Posts */}
              <div className="bg-card rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold mb-6">Popular Posts</h3>
                <div className="space-y-4">
                  {popularPosts.map((post, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <h4 className="font-medium mb-2 line-clamp-2 hover:text-primary cursor-pointer">
                        {post.title}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{post.date}</span>
                        <div className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact CTA */}
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-6">
                <PenTool className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">Love What You See?</h3>
                <p className="text-muted-foreground mb-4">
                  Want a website like this for your business? Leave us your email, and we'll reach out to you shortly.
                </p>
                <div className="space-y-3">
                  <Input placeholder="Enter your email" />
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get In Touch</Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Or simply fill out our contact form—we'd love to discuss how we can bring your ideas to life!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
