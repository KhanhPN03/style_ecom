import type { Metadata } from 'next'
import Link from 'next/link'
import { RotateCcw, Calendar, Package, CreditCard, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Returns & Exchanges',
  description: 'Easy returns and exchanges at StyleHub. Learn about our 30-day return policy and how to return items.',
}

export default function ReturnsPage() {
  const returnSteps = [
    {
      step: 1,
      title: 'Initiate Return',
      description: 'Log into your account and select the item(s) you want to return from your order history.',
      icon: Package,
    },
    {
      step: 2,
      title: 'Print Label',
      description: 'Download and print the prepaid return shipping label we provide.',
      icon: Package,
    },
    {
      step: 3,
      title: 'Pack & Ship',
      description: 'Pack your items securely and attach the return label to send back to us.',
      icon: Package,
    },
    {
      step: 4,
      title: 'Receive Refund',
      description: 'Once we receive and process your return, your refund will be issued within 3-5 business days.',
      icon: CreditCard,
    },
  ]

  const returnableItems = [
    { item: 'Clothing & Accessories', condition: 'Unworn with original tags', allowed: true },
    { item: 'Shoes', condition: 'Unworn in original box', allowed: true },
    { item: 'Electronics', condition: 'Unopened in original packaging', allowed: true },
    { item: 'Beauty Products', condition: 'Unopened and unused', allowed: true },
    { item: 'Home & Garden', condition: 'Unused in original packaging', allowed: true },
    { item: 'Personalized Items', condition: 'Made to order', allowed: false },
    { item: 'Intimate Apparel', condition: 'Hygiene items', allowed: false },
    { item: 'Perishable Goods', condition: 'Food and consumables', allowed: false },
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Returns & Exchanges
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We want you to be completely satisfied with your purchase. If you're not happy, we make returns easy.
          </p>
        </div>

        {/* Return Policy Overview */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8 text-center">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Calendar className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4">30-Day Return Policy</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Return any eligible item within 30 days of delivery for a full refund. No questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start a Return
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Return Process */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">How to Return Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {returnSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What Can Be Returned */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">What Can Be Returned?</h2>
          <div className="bg-card rounded-2xl border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Item Type</th>
                    <th className="px-6 py-4 text-left font-semibold">Condition Required</th>
                    <th className="px-6 py-4 text-center font-semibold">Returnable</th>
                  </tr>
                </thead>
                <tbody>
                  {returnableItems.map((item, index) => (
                    <tr key={index} className="border-t border-border">
                      <td className="px-6 py-4 font-medium">{item.item}</td>
                      <td className="px-6 py-4 text-muted-foreground">{item.condition}</td>
                      <td className="px-6 py-4 text-center">
                        {item.allowed ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <AlertCircle className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Return vs Exchange */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Returns vs Exchanges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <CreditCard className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Returns</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Full refund to original payment method
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Free return shipping on orders over $50
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Refund processed within 3-5 business days
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  No restocking fees
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <RotateCcw className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Exchanges</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Exchange for different size or color
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Free exchange shipping both ways
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  New item ships within 1-2 business days
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  Price difference refunded or charged
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Return FAQ</h2>
          <div className="bg-card rounded-2xl p-8 border">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">How long do I have to return an item?</h3>
                <p className="text-muted-foreground">You have 30 days from the delivery date to initiate a return. The item must be received by us within 37 days of delivery.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Do I need the original packaging?</h3>
                <p className="text-muted-foreground">Yes, items should be returned in their original packaging when possible. For clothing, keep all tags attached.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How much does return shipping cost?</h3>
                <p className="text-muted-foreground">Return shipping is free for orders over $50. For orders under $50, a $5.99 return shipping fee will be deducted from your refund.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">When will I receive my refund?</h3>
                <p className="text-muted-foreground">Refunds are processed within 3-5 business days after we receive your return. It may take an additional 3-5 business days for the refund to appear in your account.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Can I return a gift?</h3>
                <p className="text-muted-foreground">Yes! Gift recipients can return items for store credit or exchange. Original purchaser information is not required for gift returns.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="text-center bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-4">Need Help with Your Return?</h2>
          <p className="text-muted-foreground mb-6">
            Our customer service team is here to help make your return process as smooth as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">Contact Support</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/help">Visit Help Center</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
