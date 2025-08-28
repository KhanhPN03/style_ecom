import { Metadata } from 'next';
import OrdersPage from '@/components/orders/OrdersPage';

export const metadata: Metadata = {
  title: 'My Orders | TrendCart',
  description: 'View your order history and track your purchases',
};

export default function Orders() {
  return <OrdersPage />;
}
