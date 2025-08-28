import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Heart, Users, Award, Globe, Truck, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about StyleHub\'s mission to bring you the latest trends in fashion, electronics, beauty, and lifestyle products.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Every decision we make starts with our customers. Your satisfaction is our top priority.',
    },
    {
      icon: Award,
      title: 'Quality Promise',
      description: 'We curate only the finest products from trusted brands and emerging designers.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting customers worldwide with the latest trends and timeless classics.',
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Your data and transactions are protected with industry-leading security measures.',
    },
  ]

  const stats = [
    { number: '1M+', label: 'Happy Customers' },
    { number: '50K+', label: 'Products' },
    { number: '100+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime' },
  ]

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400',
      bio: 'Sarah founded StyleHub with a vision to democratize fashion and make quality products accessible to everyone.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Michael leads our technology initiatives, ensuring a seamless shopping experience for our customers.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'Emily oversees our product curation and ensures every item meets our high standards of style and quality.',
    },
    {
      name: 'David Kim',
      role: 'VP of Operations',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400',
      bio: 'David manages our global supply chain and logistics to deliver products quickly and efficiently.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                About StyleHub
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're on a mission to bring you the latest trends in fashion, electronics, beauty, and lifestyle products. 
                Founded in 2020, StyleHub has grown to become a trusted destination for quality products and exceptional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/products">Shop Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800"
                alt="StyleHub team working"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 border text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl mx-auto">
              At StyleHub, we believe that everyone deserves access to quality products that enhance their lifestyle. 
              We carefully curate our selection to bring you the perfect blend of trending items, timeless classics, 
              and innovative products from around the world. Our goal is to make shopping enjoyable, reliable, and inspiring.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">What We Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Curate high-quality products from trusted brands</li>
                  <li>• Provide exceptional customer service</li>
                  <li>• Offer competitive prices and regular promotions</li>
                  <li>• Ensure fast and reliable shipping worldwide</li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 30-day hassle-free returns</li>
                  <li>• Secure payment processing</li>
                  <li>• Expert product recommendations</li>
                  <li>• Dedicated customer support team</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-primary font-medium mb-3">{member.role}</div>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-2xl font-bold text-primary">2020</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    StyleHub was founded with a simple idea: make quality products accessible to everyone. 
                    Started as a small online boutique with 50 carefully selected items.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-2xl font-bold text-primary">2021</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Rapid Growth</h3>
                  <p className="text-muted-foreground">
                    Expanded our product catalog to over 10,000 items and launched international shipping. 
                    Reached 100,000 satisfied customers worldwide.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-2xl font-bold text-primary">2022</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation & Expansion</h3>
                  <p className="text-muted-foreground">
                    Launched our mobile app and introduced AI-powered product recommendations. 
                    Opened fulfillment centers in Europe and Asia for faster delivery.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-2xl font-bold text-primary">2023</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Sustainability Focus</h3>
                  <p className="text-muted-foreground">
                    Implemented eco-friendly packaging and partnered with sustainable brands. 
                    Launched our carbon-neutral shipping program.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <div className="text-2xl font-bold text-primary">2025</div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Today</h3>
                  <p className="text-muted-foreground">
                    With over 1 million customers and 50,000+ products, we continue to innovate and expand 
                    while staying true to our core values of quality, service, and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Love What You See? Want a Website Like This for Your Business?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Leave us your email, and we'll reach out to you shortly. Or simply fill out our contact form—we'd love to discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="mailto:khanhpn.dev@gmail.com">Send Email</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
