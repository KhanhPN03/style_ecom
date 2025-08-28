import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Shield, 
  Eye, 
  Lock, 
  Users, 
  Globe, 
  Clock,
  CheckCircle,
  AlertTriangle,
  FileText,
  Mail,
  Phone
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'GDPR Compliance',
  description: 'Learn about StyleHub\'s GDPR compliance measures and your rights regarding personal data protection.',
}

export default function GDPRPage() {
  const userRights = [
    {
      icon: Eye,
      title: 'Right to Access',
      description: 'You have the right to request access to your personal data and information about how we process it.',
      action: 'Request data access',
    },
    {
      icon: FileText,
      title: 'Right to Portability',
      description: 'You can request to receive your personal data in a structured, machine-readable format.',
      action: 'Download your data',
    },
    {
      icon: Lock,
      title: 'Right to Rectification',
      description: 'You have the right to request correction of inaccurate or incomplete personal data.',
      action: 'Update your information',
    },
    {
      icon: AlertTriangle,
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.',
      action: 'Request data deletion',
    },
    {
      icon: Shield,
      title: 'Right to Restrict Processing',
      description: 'You can request limitation of processing your personal data in specific situations.',
      action: 'Restrict processing',
    },
    {
      icon: Users,
      title: 'Right to Object',
      description: 'You have the right to object to processing of your personal data for specific purposes.',
      action: 'Object to processing',
    },
  ]

  const legalBases = [
    {
      title: 'Consent',
      description: 'We process your data based on your explicit consent for marketing communications and cookies.',
      examples: ['Newsletter subscriptions', 'Marketing emails', 'Optional cookies'],
    },
    {
      title: 'Contract Performance',
      description: 'Processing necessary for the performance of a contract or to take steps at your request.',
      examples: ['Order processing', 'Payment handling', 'Delivery services'],
    },
    {
      title: 'Legitimate Interest',
      description: 'Processing necessary for our legitimate interests, balanced against your rights and interests.',
      examples: ['Fraud prevention', 'Customer support', 'Website analytics'],
    },
    {
      title: 'Legal Obligation',
      description: 'Processing required to comply with legal obligations we are subject to.',
      examples: ['Tax records', 'Financial reporting', 'Law enforcement requests'],
    },
  ]

  const dataCategories = [
    {
      category: 'Personal Information',
      data: ['Name', 'Email address', 'Phone number', 'Billing address', 'Shipping address'],
      purpose: 'Account management and order fulfillment',
      retention: '7 years after last activity',
    },
    {
      category: 'Transaction Data',
      data: ['Order history', 'Payment information', 'Refund records', 'Shopping preferences'],
      purpose: 'Order processing and customer service',
      retention: '7 years for financial records',
    },
    {
      category: 'Technical Data',
      data: ['IP address', 'Browser type', 'Device information', 'Usage analytics'],
      purpose: 'Website functionality and security',
      retention: '2 years or until consent withdrawn',
    },
    {
      category: 'Marketing Data',
      data: ['Email preferences', 'Campaign interactions', 'Product interests'],
      purpose: 'Personalized marketing communications',
      retention: 'Until consent withdrawn or unsubscribed',
    },
  ]

  const securityMeasures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'All personal data is encrypted both in transit and at rest using industry-standard encryption.',
    },
    {
      icon: Shield,
      title: 'Access Controls',
      description: 'Strict access controls ensure only authorized personnel can access personal data.',
    },
    {
      icon: Eye,
      title: 'Regular Audits',
      description: 'We conduct regular security audits and assessments to maintain data protection standards.',
    },
    {
      icon: Users,
      title: 'Staff Training',
      description: 'All staff receive regular training on data protection and privacy best practices.',
    },
    {
      icon: Globe,
      title: 'Secure Infrastructure',
      description: 'Our systems are hosted on secure, compliant cloud infrastructure with regular updates.',
    },
    {
      icon: Clock,
      title: 'Incident Response',
      description: 'We have procedures in place to detect, respond to, and report any data security incidents.',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We are committed to protecting your personal data and complying with the General Data 
              Protection Regulation (GDPR). Learn about your rights and how we handle your information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#your-rights">Your Rights</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Commitment to GDPR</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-6 border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Data Protection</h3>
              <p className="text-muted-foreground">
                We implement robust security measures to protect your personal data from unauthorized access.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border text-center">
              <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                We provide clear information about how we collect, use, and protect your personal data.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
              <p className="text-muted-foreground">
                We respect and enable all your GDPR rights regarding your personal data.
              </p>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section id="your-rights" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Your GDPR Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRights.map((right, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <right.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{right.title}</h3>
                <p className="text-muted-foreground mb-4">{right.description}</p>
                <Button variant="outline" size="sm">{right.action}</Button>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Basis */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Legal Basis for Processing</h2>
          <div className="space-y-6">
            {legalBases.map((basis, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <h3 className="text-xl font-semibold mb-3">{basis.title}</h3>
                <p className="text-muted-foreground mb-4">{basis.description}</p>
                <div>
                  <span className="font-medium text-sm">Examples:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {basis.examples.map((example, exIndex) => (
                      <span 
                        key={exIndex} 
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Data We Collect</h2>
          <div className="bg-card rounded-2xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Data Category</th>
                    <th className="text-left p-4 font-semibold">Data Types</th>
                    <th className="text-left p-4 font-semibold">Purpose</th>
                    <th className="text-left p-4 font-semibold">Retention Period</th>
                  </tr>
                </thead>
                <tbody>
                  {dataCategories.map((category, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4 font-medium">{category.category}</td>
                      <td className="p-4">
                        <div className="space-y-1">
                          {category.data.map((item, itemIndex) => (
                            <div key={itemIndex} className="text-sm text-muted-foreground">
                              • {item}
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="p-4 text-muted-foreground">{category.purpose}</td>
                      <td className="p-4 text-muted-foreground">{category.retention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Security Measures</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityMeasures.map((measure, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <measure.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{measure.title}</h3>
                <p className="text-muted-foreground">{measure.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Transfers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">International Data Transfers</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Data Transfer Safeguards</h3>
                <p className="text-muted-foreground mb-6">
                  When we transfer your personal data outside the European Economic Area (EEA), 
                  we ensure appropriate safeguards are in place:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Standard Contractual Clauses approved by the European Commission</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Adequacy decisions for certain countries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Binding Corporate Rules for intra-group transfers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Explicit consent where required</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Third-Party Processors</h3>
                <p className="text-muted-foreground mb-6">
                  We work with trusted third-party processors who are also GDPR compliant:
                </p>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="font-medium">Payment Processing</div>
                    <div className="text-sm text-muted-foreground">Stripe (Ireland) - EU-based</div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-medium">Email Services</div>
                    <div className="text-sm text-muted-foreground">Mailchimp - Standard Contractual Clauses</div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="font-medium">Analytics</div>
                    <div className="text-sm text-muted-foreground">Google Analytics - Data Processing Amendment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Breach Procedures */}
        <section className="mb-16">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-4">
                  Data Breach Procedures
                </h3>
                <p className="text-amber-800 dark:text-amber-200 mb-4">
                  In the unlikely event of a data breach, we have procedures in place to:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      <span className="text-amber-800 dark:text-amber-200">
                        Notify authorities within 72 hours
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      <span className="text-amber-800 dark:text-amber-200">
                        Inform affected individuals without delay
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      <span className="text-amber-800 dark:text-amber-200">
                        Take immediate containment measures
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-amber-600" />
                      <span className="text-amber-800 dark:text-amber-200">
                        Provide support and remediation
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DPO Contact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Data Protection Officer</h2>
          <div className="bg-card rounded-2xl p-8 border max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Contact Our DPO</h3>
              <p className="text-muted-foreground">
                For any data protection queries or to exercise your rights, contact our Data Protection Officer:
              </p>
            </div>
            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:khanhpn.dev@gmail.com" className="text-primary hover:underline">
                  khanhpn.dev@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+(84) 123-456789</span>
              </div>
              <div className="text-sm text-muted-foreground mt-4">
                We will respond to your request within 30 days as required by GDPR.
              </div>
            </div>
          </div>
        </section>

        {/* Supervisory Authority */}
        <section className="mb-16">
          <div className="bg-card rounded-2xl p-8 border">
            <h3 className="text-xl font-semibold text-center mb-4">Right to Lodge a Complaint</h3>
            <p className="text-muted-foreground text-center mb-6">
              You have the right to lodge a complaint with a supervisory authority if you believe 
              we have not handled your personal data in accordance with GDPR.
            </p>
            <div className="text-center">
              <Button variant="outline" asChild>
                <a 
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Find Your Local Authority
                </a>
              </Button>
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
