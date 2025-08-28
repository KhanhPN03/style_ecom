import { Metadata } from 'next';
import CheckoutSuccessPage from '@/components/checkout/CheckoutSuccessPage';

export const metadata: Metadata = {
  title: 'Order Complete | TrendCart',
  description: 'Your order has been successfully placed',
};

export default function CheckoutSuccess() {
  return <CheckoutSuccessPage />;
}
