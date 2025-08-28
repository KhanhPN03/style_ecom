import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | TrendCart',
  description: 'Our terms of service and conditions for using TrendCart',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">
            Last updated: August 28, 2025
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By accessing and using TrendCart, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily download one copy of TrendCart materials for 
                personal, non-commercial transitory viewing only.
              </p>
              <p className="mb-4">This license shall automatically terminate if you violate any of these restrictions.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
              <p className="mb-4">
                We strive to provide accurate product descriptions and pricing. However, we do not 
                warrant that product descriptions or other content is accurate, complete, reliable, 
                current, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">4. Orders and Payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be received before order processing</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
              <p className="mb-4">
                We offer a 30-day return policy for most items. Products must be returned in 
                original condition with all packaging and accessories.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="mb-4">
                TrendCart shall not be liable for any damages that result from the use of, 
                or the inability to use, the materials on this site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
              <p className="mb-4">
                Questions about the Terms of Service should be sent to us at:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p>Email: legal@trendcart.com</p>
                <p>Address: 123 E-commerce St, Digital City, DC 12345</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
