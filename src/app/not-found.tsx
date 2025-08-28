import { Metadata } from 'next'
import NotFoundClient from './components/NotFoundClient'

export const metadata: Metadata = {
  title: '404 - Page Not Found | StyleHub',
  description: 'The page you are looking for does not exist. Redirecting to home page.',
}

export default function NotFound() {
  return <NotFoundClient />
}
