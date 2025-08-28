'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Order Placed Successfully!</h1>
          <p className="text-muted-foreground text-lg">
            Thank you for your purchase. Your order is being processed.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <Package className="h-5 w-5" />
                <span className="font-medium">Order Confirmation Sent</span>
              </div>
              <p className="text-sm text-muted-foreground">
                We've sent a confirmation email with your order details and tracking information.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/orders">
              <Button className="w-full" variant="outline">
                <Package className="h-4 w-4 mr-2" />
                View Orders
              </Button>
            </Link>
            <Link href="/">
              <Button className="w-full">
                Continue Shopping
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
          
          <p className="text-xs text-muted-foreground mt-6">
            Questions about your order? Contact our customer support team.
          </p>
        </div>
      </div>
    </div>
  );
}
