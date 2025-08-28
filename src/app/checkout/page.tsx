import { Metadata } from 'next';
import CheckoutPage from '@/components/checkout/CheckoutPage';

export const metadata: Metadata = {
  title: 'Checkout | TrendCart',
  description: 'Complete your purchase securely',
};

export default function Checkout() {
  return <CheckoutPage />;
}
