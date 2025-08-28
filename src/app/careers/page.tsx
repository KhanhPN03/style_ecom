import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, 
  Clock, 
  Users, 
  Coffee, 
  Laptop, 
  Heart, 
  TrendingUp, 
  Globe,
  Briefcase,
  GraduationCap
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the StyleHub team and help shape the future of e-commerce. Explore career opportunities and grow with us.',
}

export default function CareersPage() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support.',
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible working hours, remote work options, and unlimited PTO.',
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget, conferences, and continuous learning opportunities.',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths and internal promotion opportunities.',
    },
    {
      icon: Coffee,
      title: 'Great Perks',
      description: 'Free meals, snacks, gym membership, and employee discounts.',
    },
    {
      icon: Laptop,
      title: 'Latest Tech',
      description: 'Top-of-the-line equipment and tools to help you do your best work.',
    },
  ]

  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Join our frontend team to build beautiful, performant user experiences using React, Next.js, and TypeScript.',
      requirements: [
        '5+ years of React/Next.js experience',
        'Strong TypeScript skills',
        'Experience with modern CSS frameworks',
        'Understanding of web performance optimization',
      ],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Lead product strategy and development for our e-commerce platform, working closely with engineering and design teams.',
      requirements: [
        '3+ years of product management experience',
        'E-commerce or marketplace experience preferred',
        'Strong analytical and communication skills',
        'Experience with user research and data analysis',
      ],
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Los Angeles, CA / Remote',
      type: 'Full-time',
      description: 'Create intuitive and engaging user experiences for our web and mobile platforms.',
      requirements: [
        'Portfolio showcasing UX/UI design work',
        'Proficiency in Figma, Sketch, or similar tools',
        'Understanding of design systems and accessibility',
        'Experience with user research and testing',
      ],
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX / Remote',
      type: 'Full-time',
      description: 'Build and maintain our cloud infrastructure, ensuring scalability, security, and reliability.',
      requirements: [
        'Experience with AWS, Azure, or GCP',
        'Knowledge of containerization (Docker, Kubernetes)',
        'CI/CD pipeline experience',
        'Infrastructure as Code (Terraform, CloudFormation)',
      ],
    },
    {
      title: 'Marketing Specialist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive growth through digital marketing campaigns, content creation, and customer engagement initiatives.',
      requirements: [
        '2+ years of digital marketing experience',
        'Experience with Google Ads, Facebook Ads, SEO',
        'Content creation and copywriting skills',
        'Analytics and performance tracking experience',
      ],
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Chicago, IL / Remote',
      type: 'Full-time',
      description: 'Ensure customer satisfaction and success by providing exceptional support and building lasting relationships.',
      requirements: [
        'Customer service or account management experience',
        'Excellent communication skills',
        'Problem-solving and conflict resolution abilities',
        'Experience with CRM systems',
      ],
    },
  ]

  const companyValues = [
    {
      title: 'Innovation First',
      description: 'We embrace new ideas and technologies to stay ahead of the curve.',
    },
    {
      title: 'Customer Obsession',
      description: 'Everything we do is centered around creating value for our customers.',
    },
    {
      title: 'Team Collaboration',
      description: 'We believe the best results come from working together and supporting each other.',
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage constant skill development.',
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
                Join Our Team
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Be part of a dynamic team that's shaping the future of e-commerce. We're looking for 
                passionate individuals who want to make a difference and grow their careers with us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#open-positions">View Open Positions</a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/about">Learn About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Team collaboration"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 md:p-12 border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Culture</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  At StyleHub, we've built a culture that values diversity, creativity, and personal growth. 
                  We believe that when our team thrives, our customers benefit from better products and service.
                </p>
                <div className="space-y-6">
                  {companyValues.map((value, index) => (
                    <div key={index}>
                      <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800"
                  alt="Office culture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </div>
                    </div>
                  </div>
                  <Button className="mt-4 md:mt-0">Apply Now</Button>
                </div>
                
                <p className="text-muted-foreground mb-6">{position.description}</p>
                
                <div>
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Apply Online</h3>
              <p className="text-muted-foreground">
                Submit your application through our careers portal with your resume and cover letter.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Initial Review</h3>
              <p className="text-muted-foreground">
                Our talent team reviews your application and reaches out within 1-2 weeks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Interview Process</h3>
              <p className="text-muted-foreground">
                Multiple rounds including phone screen, technical interview, and team interviews.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Welcome Aboard</h3>
              <p className="text-muted-foreground">
                Offer extended and comprehensive onboarding to get you started on your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Diversity & Inclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 md:p-12 text-center">
            <Globe className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Diversity & Inclusion</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              We believe that diverse teams create better products and experiences. StyleHub is committed to 
              creating an inclusive environment where everyone can bring their authentic selves to work and thrive. 
              We're an equal opportunity employer and welcome applications from all qualified candidates.
            </p>
            <Button size="lg" variant="outline">
              Learn More About Our D&I Initiatives
            </Button>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
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
