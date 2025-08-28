import type { Metadata } from 'next'
import Link from 'next/link'
import { Search, Phone, Mail, MessageCircle, Clock, User, Package, CreditCard, RefreshCw, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const metadata: Metadata = {
  title: 'Help Center',
  description: 'Find answers to your questions and get help with your StyleHub experience.',
}

export default function HelpCenterPage() {
  const helpCategories = [
    {
      icon: Package,
      title: 'Orders & Shipping',
      description: 'Track orders, shipping info, and delivery questions',
      articles: [
        'How to track my order',
        'Shipping methods and costs',
        'Order modifications and cancellations',
        'International shipping',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Returns & Exchanges',
      description: 'Return policy, exchanges, and refund information',
      articles: [
        'How to return an item',
        'Exchange policy',
        'Refund process and timeline',
        'Return shipping labels',
      ],
    },
    {
      icon: CreditCard,
      title: 'Payment & Billing',
      description: 'Payment methods, billing questions, and pricing',
      articles: [
        'Accepted payment methods',
        'Payment security',
        'Billing and invoice questions',
        'Promotional codes and discounts',
      ],
    },
    {
      icon: User,
      title: 'Account & Profile',
      description: 'Account settings, profile management, and login issues',
      articles: [
        'Creating an account',
        'Password reset',
        'Profile settings',
        'Account security',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Privacy',
      description: 'Data protection, privacy settings, and security',
      articles: [
        'Privacy policy overview',
        'Data security measures',
        'Cookie preferences',
        'GDPR compliance',
      ],
    },
    {
      icon: MessageCircle,
      title: 'General Questions',
      description: 'Common questions and general information',
      articles: [
        'About StyleHub',
        'Product information',
        'Size guides',
        'Contact information',
      ],
    },
  ]

  const popularArticles = [
    'How to track my order',
    'Return and exchange policy',
    'Shipping costs and delivery times',
    'How to create an account',
    'Payment methods accepted',
    'Size guide and fitting',
    'Product care instructions',
    'Contact customer support',
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for help articles..."
              className="pl-12 pr-4 py-6 text-lg rounded-2xl border-2 focus:border-primary"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Quick Contact */}
        <div className="bg-card rounded-2xl p-8 mb-12 border">
          <h2 className="text-2xl font-bold mb-6 text-center">Need Immediate Help?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-muted-foreground mb-4">+(84) 12 3456 789</p>
              <p className="text-sm text-muted-foreground">Mon-Fri 9AM-8PM EST</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Live Chat</h3>
              <Button variant="outline" className="mb-2">Start Chat</Button>
              <p className="text-sm text-muted-foreground">Average wait: 2 minutes</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-muted-foreground mb-4">khanhpn.dev@gmail.com</p>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Help Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-12">Browse Help Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {helpCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border hover:shadow-lg transition-shadow">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex}>
                      <Link href="#" className="text-primary hover:underline text-sm">
                        {article}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Articles</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href="#"
                  className="flex items-center space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold text-sm">{index + 1}</span>
                  </div>
                  <span className="text-foreground hover:text-primary transition-colors">
                    {article}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-card rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold text-center mb-6">Still Need Help?</h2>
          <p className="text-center text-muted-foreground mb-8">
            Can't find what you're looking for? Send us a message and we'll get back to you.
          </p>
          <div className="max-w-md mx-auto text-center">
            <Link href="/contact">
              <Button size="lg" className="px-8">
                Contact Support
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
