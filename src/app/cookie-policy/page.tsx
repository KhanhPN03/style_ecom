import type { Metadata } from 'next'
import Link from 'next/link'
import { 
  Cookie, 
  Shield, 
  Settings, 
  Eye, 
  Users, 
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Learn how StyleHub uses cookies to enhance your browsing experience and protect your privacy.',
}

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      name: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function and cannot be switched off.',
      purpose: 'Website functionality, security, and basic features',
      examples: ['Authentication tokens', 'Shopping cart contents', 'Security preferences'],
      retention: 'Session or until logout',
      required: true,
    },
    {
      name: 'Performance Cookies',
      icon: Settings,
      description: 'These cookies help us understand how visitors interact with our website.',
      purpose: 'Analytics, performance monitoring, and site optimization',
      examples: ['Google Analytics', 'Page load times', 'Error tracking'],
      retention: '2 years',
      required: false,
    },
    {
      name: 'Functional Cookies',
      icon: Eye,
      description: 'These cookies enable enhanced functionality and personalization.',
      purpose: 'Personalized content, preferences, and enhanced features',
      examples: ['Language preferences', 'Theme settings', 'Recently viewed items'],
      retention: '1 year',
      required: false,
    },
    {
      name: 'Marketing Cookies',
      icon: Users,
      description: 'These cookies are used to deliver relevant advertisements and track campaign effectiveness.',
      purpose: 'Targeted advertising, remarketing, and campaign tracking',
      examples: ['Facebook Pixel', 'Google Ads', 'Email campaign tracking'],
      retention: '2 years',
      required: false,
    },
  ]

  const thirdPartyServices = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance tracking',
      dataCollected: 'Page views, user interactions, device information',
      retention: '26 months',
      optOut: 'https://tools.google.com/dlpage/gaoptout',
    },
    {
      name: 'Google Ads',
      purpose: 'Advertising and remarketing campaigns',
      dataCollected: 'Ad interactions, conversion tracking, user preferences',
      retention: '2 years',
      optOut: 'https://adssettings.google.com/',
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Social media advertising and analytics',
      dataCollected: 'Page views, purchases, custom events',
      retention: '2 years',
      optOut: 'https://www.facebook.com/settings?tab=ads',
    },
    {
      name: 'Stripe',
      purpose: 'Payment processing and fraud prevention',
      dataCollected: 'Transaction data, device fingerprinting',
      retention: '7 years (compliance)',
      optOut: 'Required for payment processing',
    },
    {
      name: 'Mailchimp',
      purpose: 'Email marketing and newsletter management',
      dataCollected: 'Email interactions, preferences, subscriber data',
      retention: 'Until unsubscribed',
      optOut: 'Unsubscribe from emails',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Cookie className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              This policy explains how StyleHub uses cookies and similar technologies to enhance 
              your browsing experience and protect your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#cookie-settings">Manage Cookie Settings</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/privacy">Privacy Policy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Last Updated */}
        <div className="bg-card rounded-2xl p-6 border mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-semibold">Last Updated</span>
          </div>
          <p className="text-muted-foreground">
            This Cookie Policy was last updated on January 15, 2025. We may update this policy 
            from time to time to reflect changes in our practices or for other operational, legal, 
            or regulatory reasons.
          </p>
        </div>

        {/* What Are Cookies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What Are Cookies?</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <p className="text-lg text-muted-foreground mb-6">
              Cookies are small text files that are stored on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to website owners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">How Cookies Work</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Stored locally on your device</li>
                  <li>• Contain small amounts of data</li>
                  <li>• Sent back to the server on subsequent visits</li>
                  <li>• Help websites remember your preferences</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Types of Cookies</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Session cookies (temporary)</li>
                  <li>• Persistent cookies (stored long-term)</li>
                  <li>• First-party cookies (from our domain)</li>
                  <li>• Third-party cookies (from other domains)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cookie Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Types of Cookies We Use</h2>
          <div className="space-y-6">
            {cookieTypes.map((type, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <type.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold">{type.name}</h3>
                      <div className="flex items-center gap-2">
                        {type.required ? (
                          <div className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-green-600 font-medium">Required</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Optional</span>
                            <Switch />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{type.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Purpose:</span>
                        <p className="text-muted-foreground mt-1">{type.purpose}</p>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Examples:</span>
                        <ul className="text-muted-foreground mt-1 space-y-1">
                          {type.examples.map((example, exIndex) => (
                            <li key={exIndex}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Retention:</span>
                        <p className="text-muted-foreground mt-1">{type.retention}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Third-Party Services</h2>
          <div className="bg-card rounded-2xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left p-4 font-semibold">Service</th>
                    <th className="text-left p-4 font-semibold">Purpose</th>
                    <th className="text-left p-4 font-semibold">Data Collected</th>
                    <th className="text-left p-4 font-semibold">Retention</th>
                    <th className="text-left p-4 font-semibold">Opt-Out</th>
                  </tr>
                </thead>
                <tbody>
                  {thirdPartyServices.map((service, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-4 font-medium">{service.name}</td>
                      <td className="p-4 text-muted-foreground">{service.purpose}</td>
                      <td className="p-4 text-muted-foreground">{service.dataCollected}</td>
                      <td className="p-4 text-muted-foreground">{service.retention}</td>
                      <td className="p-4">
                        {service.optOut.startsWith('http') ? (
                          <a 
                            href={service.optOut} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Opt-out link
                          </a>
                        ) : (
                          <span className="text-muted-foreground">{service.optOut}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cookie Settings */}
        <section id="cookie-settings" className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Manage Your Cookie Preferences</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Current Settings</h3>
              <p className="text-muted-foreground mb-6">
                You can control which cookies are stored on your device. Note that disabling certain 
                cookies may affect the functionality of our website.
              </p>
            </div>
            
            <div className="space-y-4">
              {cookieTypes.map((type, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                  <div className="flex items-center gap-3">
                    <type.icon className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{type.name}</div>
                      <div className="text-sm text-muted-foreground">{type.description}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {type.required ? (
                      <div className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-green-600 font-medium">Always Active</span>
                      </div>
                    ) : (
                      <Switch defaultChecked />
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg">Save Preferences</Button>
              <Button variant="outline" size="lg">Accept All Cookies</Button>
              <Button variant="outline" size="lg">Reject Optional Cookies</Button>
            </div>
          </div>
        </section>

        {/* Browser Settings */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Browser Cookie Settings</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <p className="text-lg text-muted-foreground mb-6">
              You can also control cookies through your browser settings. Here's how to manage 
              cookies in popular browsers:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Desktop Browsers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Chrome: Settings → Privacy and security → Cookies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Firefox: Options → Privacy & Security → Cookies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Safari: Preferences → Privacy → Cookies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Edge: Settings → Privacy → Cookies</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Mobile Browsers</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Chrome Mobile: Settings → Site settings → Cookies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Safari Mobile: Settings → Safari → Privacy & Security</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Firefox Mobile: Settings → Privacy → Cookies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Samsung Internet: Settings → Privacy → Cookies</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Impact of Disabling */}
        <section className="mb-12">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-amber-900 dark:text-amber-100 mb-3">
                  Impact of Disabling Cookies
                </h3>
                <p className="text-amber-800 dark:text-amber-200 mb-4">
                  Disabling certain cookies may affect your experience on our website:
                </p>
                <ul className="space-y-2 text-amber-800 dark:text-amber-200">
                  <li>• Shopping cart contents may not be saved between sessions</li>
                  <li>• Your preferences and settings may not be remembered</li>
                  <li>• Some features may not work properly or be unavailable</li>
                  <li>• You may see less relevant advertisements</li>
                  <li>• We may not be able to provide personalized recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
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
