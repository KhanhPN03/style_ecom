import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Newspaper, 
  Calendar, 
  Users, 
  Award, 
  TrendingUp, 
  Globe,
  Mic,
  Camera,
  Download
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Press & Media',
  description: 'Stay updated with StyleHub\'s latest news, press releases, and media resources. Download our press kit and brand assets.',
}

export default function PressPage() {
  const pressReleases = [
    {
      title: 'StyleHub Announces $50M Series B Funding Round',
      date: 'January 15, 2025',
      category: 'Funding',
      excerpt: 'Leading e-commerce platform secures funding to expand international operations and enhance AI-powered shopping experience.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400',
    },
    {
      title: 'StyleHub Launches Sustainable Fashion Initiative',
      date: 'December 10, 2024',
      category: 'Sustainability',
      excerpt: 'New program partners with eco-friendly brands and introduces carbon-neutral shipping options for environmentally conscious shoppers.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400',
    },
    {
      title: 'StyleHub Reaches 1 Million Active Users Milestone',
      date: 'November 20, 2024',
      category: 'Growth',
      excerpt: 'Platform celebrates major milestone with 1 million monthly active users across 100+ countries worldwide.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
    },
    {
      title: 'StyleHub Introduces AI-Powered Personal Styling',
      date: 'October 5, 2024',
      category: 'Technology',
      excerpt: 'Revolutionary AI technology provides personalized product recommendations and styling advice based on user preferences and trends.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400',
    },
    {
      title: 'StyleHub Expands to European Markets',
      date: 'September 12, 2024',
      category: 'Expansion',
      excerpt: 'E-commerce platform launches operations in 15 European countries with localized currency and shipping options.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400',
    },
    {
      title: 'StyleHub Wins E-commerce Innovation Award 2024',
      date: 'August 18, 2024',
      category: 'Awards',
      excerpt: 'Platform recognized for outstanding innovation in user experience and technology advancement in the e-commerce industry.',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400',
    },
  ]

  const mediaKit = [
    {
      title: 'Logo Package',
      description: 'High-resolution logos in various formats (PNG, SVG, EPS)',
      icon: Download,
      fileSize: '2.5 MB',
    },
    {
      title: 'Brand Guidelines',
      description: 'Complete brand style guide with colors, typography, and usage rules',
      icon: Download,
      fileSize: '8.1 MB',
    },
    {
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our platform and mobile app',
      icon: Download,
      fileSize: '15.3 MB',
    },
    {
      title: 'Executive Photos',
      description: 'Professional headshots of our leadership team',
      icon: Download,
      fileSize: '12.7 MB',
    },
    {
      title: 'Company Fact Sheet',
      description: 'Key statistics, milestones, and company information',
      icon: Download,
      fileSize: '1.2 MB',
    },
    {
      title: 'Video Assets',
      description: 'Product demos and company overview videos',
      icon: Download,
      fileSize: '125 MB',
    },
  ]

  const awards = [
    {
      title: 'Best E-commerce Platform 2024',
      organization: 'TechCrunch Awards',
      year: '2024',
    },
    {
      title: 'Innovation in Retail Technology',
      organization: 'Retail Tech Summit',
      year: '2024',
    },
    {
      title: 'Customer Choice Award',
      organization: 'E-commerce Excellence Awards',
      year: '2023',
    },
    {
      title: 'Best User Experience Design',
      organization: 'Web Design Awards',
      year: '2023',
    },
    {
      title: 'Sustainable Business of the Year',
      organization: 'Green Commerce Awards',
      year: '2023',
    },
    {
      title: 'Rising Star in E-commerce',
      organization: 'Digital Commerce Awards',
      year: '2022',
    },
  ]

  const mediaContact = {
    name: 'Sarah Wilson',
    title: 'Head of Communications',
    email: 'khanhpn.dev@gmail.com',
    phone: '+(84) 123-456789',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200',
  }

  const stats = [
    { number: '1M+', label: 'Active Users' },
    { number: '50K+', label: 'Products' },
    { number: '100+', label: 'Countries' },
    { number: '99.9%', label: 'Uptime' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
                Press & Media
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Stay updated with StyleHub's latest news, announcements, and media resources. 
                Download our press kit and find everything you need for your story.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#press-releases">Latest News</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#media-kit">Download Media Kit</a>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800"
                alt="Press and media"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Company Stats */}
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

        {/* Press Releases */}
        <section id="press-releases" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Press Releases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressReleases.map((release, index) => (
              <article key={index} className="bg-card rounded-2xl overflow-hidden border">
                <div className="relative h-48">
                  <Image
                    src={release.image}
                    alt={release.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-sm font-medium">
                      {release.category}
                    </span>
                    <span className="text-sm text-muted-foreground">{release.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">{release.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{release.excerpt}</p>
                  <Button variant="outline" size="sm">Read Full Release</Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Awards & Recognition</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{award.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{award.organization}</p>
                    <p className="text-sm text-primary font-medium">{award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Kit */}
        <section id="media-kit" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Media Kit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaKit.map((item, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 rounded-full p-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.fileSize}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* Media Coverage */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Media Coverage</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-muted-foreground mb-2">TC</div>
                <div className="text-sm text-muted-foreground">TechCrunch</div>
                <div className="text-xs text-muted-foreground mt-1">"Rising star in e-commerce"</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-muted-foreground mb-2">WSJ</div>
                <div className="text-sm text-muted-foreground">Wall Street Journal</div>
                <div className="text-xs text-muted-foreground mt-1">"Innovation in retail tech"</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-muted-foreground mb-2">FT</div>
                <div className="text-sm text-muted-foreground">Financial Times</div>
                <div className="text-xs text-muted-foreground mt-1">"Sustainable commerce leader"</div>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-muted-foreground mb-2">VB</div>
                <div className="text-sm text-muted-foreground">VentureBeat</div>
                <div className="text-xs text-muted-foreground mt-1">"AI-powered shopping revolution"</div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Media Contact</h2>
          <div className="bg-card rounded-2xl p-8 border max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={mediaContact.image}
                  alt={mediaContact.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{mediaContact.name}</h3>
                <div className="text-primary font-medium mb-4">{mediaContact.title}</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Mic className="h-4 w-4 text-muted-foreground" />
                    <a href={`mailto:${mediaContact.email}`} className="text-muted-foreground hover:text-foreground">
                      {mediaContact.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Camera className="h-4 w-4 text-muted-foreground" />
                    <a href={`tel:${mediaContact.phone}`} className="text-muted-foreground hover:text-foreground">
                      {mediaContact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Journalists */}
        <section className="text-center bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12">
          <Newspaper className="h-16 w-16 text-primary mx-auto mb-6" />
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
