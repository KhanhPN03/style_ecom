import { Metadata } from 'next';
import ContactPage from '@/components/contact/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us | TrendCart',
  description: 'Get in touch with TrendCart for any questions or support',
};

export default function Contact() {
  return <ContactPage />;
}
