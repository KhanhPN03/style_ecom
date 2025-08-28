import type { Metadata } from 'next'
import { Truck, Clock, Globe, Package, Shield, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping Information',
  description: 'Learn about our shipping methods, costs, and delivery times for your StyleHub orders.',
}

export default function ShippingPage() {
  const shippingMethods = [
    {
      icon: Truck,
      name: 'Standard Shipping',
      time: '5-7 Business Days',
      cost: 'Free on orders $50+',
      description: 'Our most popular shipping option with reliable delivery times.',
    },
    {
      icon: Clock,
      name: 'Express Shipping',
      time: '2-3 Business Days',
      cost: '$9.99',
      description: 'Faster delivery for when you need your items sooner.',
    },
    {
      icon: Package,
      name: 'Overnight Shipping',
      time: '1 Business Day',
      cost: '$19.99',
      description: 'Next-day delivery for urgent orders (order before 2 PM EST).',
    },
    {
      icon: Globe,
      name: 'International Shipping',
      time: '7-14 Business Days',
      cost: 'Varies by location',
      description: 'We ship to over 100 countries worldwide.',
    },
  ]

  const shippingZones = [
    {
      zone: 'Zone 1 (Domestic)',
      countries: ['United States'],
      standardCost: 'Free on $50+, otherwise $5.99',
      expressCost: '$9.99',
      overnightCost: '$19.99',
    },
    {
      zone: 'Zone 2 (Canada)',
      countries: ['Canada'],
      standardCost: '$12.99',
      expressCost: '$24.99',
      overnightCost: 'Not Available',
    },
    {
      zone: 'Zone 3 (Europe)',
      countries: ['UK', 'Germany', 'France', 'Italy', 'Spain', 'Netherlands'],
      standardCost: '$15.99',
      expressCost: '$29.99',
      overnightCost: 'Not Available',
    },
    {
      zone: 'Zone 4 (Asia Pacific)',
      countries: ['Australia', 'Japan', 'Singapore', 'South Korea'],
      standardCost: '$19.99',
      expressCost: '$39.99',
      overnightCost: 'Not Available',
    },
  ]

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Shipping Information
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast, reliable shipping options to get your StyleHub purchases to you safely and on time.
          </p>
        </div>

        {/* Shipping Methods */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Shipping Methods</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shippingMethods.map((method, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 border text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{method.time}</div>
                <div className="text-lg font-semibold text-muted-foreground mb-4">{method.cost}</div>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Shipping Zones */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Shipping Zones & Rates</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-2xl border overflow-hidden">
              <thead className="bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Zone</th>
                  <th className="px-6 py-4 text-left font-semibold">Countries</th>
                  <th className="px-6 py-4 text-left font-semibold">Standard</th>
                  <th className="px-6 py-4 text-left font-semibold">Express</th>
                  <th className="px-6 py-4 text-left font-semibold">Overnight</th>
                </tr>
              </thead>
              <tbody>
                {shippingZones.map((zone, index) => (
                  <tr key={index} className="border-t border-border">
                    <td className="px-6 py-4 font-semibold">{zone.zone}</td>
                    <td className="px-6 py-4 text-muted-foreground">{zone.countries.join(', ')}</td>
                    <td className="px-6 py-4">{zone.standardCost}</td>
                    <td className="px-6 py-4">{zone.expressCost}</td>
                    <td className="px-6 py-4">{zone.overnightCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Important Shipping Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Delivery Address</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Ensure your shipping address is complete and accurate</li>
                <li>• We cannot deliver to P.O. boxes for express/overnight shipping</li>
                <li>• Apartment/suite numbers are required when applicable</li>
                <li>• Address changes may not be possible once order is processed</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Processing Time</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Orders placed before 2 PM EST ship same day</li>
                <li>• Orders placed after 2 PM EST ship next business day</li>
                <li>• Custom/personalized items may require 1-3 extra days</li>
                <li>• Weekend orders process on the next Monday</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <Package className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Order Tracking</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Tracking information sent via email once shipped</li>
                <li>• Track your order anytime in your account dashboard</li>
                <li>• SMS tracking updates available upon request</li>
                <li>• Delivery confirmation provided for all orders</li>
              </ul>
            </div>

            <div className="bg-card rounded-2xl p-6 border">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-xl font-semibold">Shipping Protection</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• All packages are insured against loss or damage</li>
                <li>• Signature required for orders over $200</li>
                <li>• Secure packaging to prevent damage during transit</li>
                <li>• Report any delivery issues within 48 hours</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-card rounded-2xl p-8 border">
          <h2 className="text-2xl font-bold text-center mb-8">Shipping FAQ</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">What if I need my order faster than standard shipping?</h3>
              <p className="text-muted-foreground">Choose Express or Overnight shipping at checkout. Remember to place your order before 2 PM EST for same-day processing.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Do you ship internationally?</h3>
              <p className="text-muted-foreground">Yes! We ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">What happens if my package is lost or damaged?</h3>
              <p className="text-muted-foreground">All packages are insured. Contact our customer service team immediately and we'll resolve the issue with a replacement or full refund.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Can I change my shipping address after placing an order?</h3>
              <p className="text-muted-foreground">Address changes may be possible if your order hasn't been processed yet. Contact us immediately at khanhpn.dev@gmail.com with your order number.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
