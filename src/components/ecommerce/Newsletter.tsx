'use client'

import { useState } from 'react'
import { Mail, Gift, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setEmail('')
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Subscription error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-pink-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20">
            <div className="text-center space-y-6">
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full">
                <Mail className="w-8 h-8 text-white" />
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-poppins font-bold">
                  Love What You See? Want a Website Like This for Your Business?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Leave us your email, and we'll reach out to you shortly. Or simply fill out our contact form—we'd love to discuss how we can bring your ideas to life!
                </p>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Custom Solutions</div>
                    <div className="text-sm text-muted-foreground">Tailored to your business</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Modern Design</div>
                    <div className="text-sm text-muted-foreground">Professional & responsive</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Expert Support</div>
                    <div className="text-sm text-muted-foreground">Full development service</div>
                  </div>
                </div>
              </div>

              {/* Newsletter Form */}
              {submitStatus !== 'success' ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isSubmitting}
                      className="flex-1"
                      required
                    />
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Get In Touch'}
                    </Button>
                  </div>
                  {submitStatus === 'error' && (
                    <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-sm text-red-700 dark:text-red-300">
                        ✗ Please enter a valid email address.
                      </p>
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-3">
                    By providing your email, you agree to our privacy policy and consent to receive business communications from our company.
                  </p>
                </form>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="font-medium">Message sent successfully!</span>
                    </div>
                    <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                      Thank you for your interest! We'll get back to you within 24 hours to discuss your project.
                    </p>
                  </div>
                </div>
              )}

              {/* Social Proof */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Trusted by <span className="font-semibold text-primary">50+</span> businesses for their web development needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
