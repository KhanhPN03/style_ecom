import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AppProvider } from '@/contexts/AppContext'
import { Toaster } from 'sonner'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://trendcart.vercel.app' : 'http://localhost:3000'),
  title: {
    default: 'TrendCart - Modern E-commerce Experience',
    template: '%s | TrendCart'
  },
  description: 'Discover the latest trends in fashion, electronics, beauty, and lifestyle. Shop with confidence at TrendCart - your ultimate destination for quality products.',
  keywords: [
    'ecommerce',
    'fashion',
    'electronics',
    'beauty',
    'lifestyle',
    'shopping',
    'online store',
    'trendy',
    'modern',
    'quality products'
  ],
  authors: [{ name: 'StyleHub Team' }],
  creator: 'StyleHub',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stylehub-demo.vercel.app',
    title: 'StyleHub - Modern E-commerce Experience',
    description: 'Discover the latest trends in fashion, electronics, beauty, and lifestyle.',
    siteName: 'StyleHub',
    images: [
      {
        url: 'https://stylehub-demo.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StyleHub - Modern E-commerce'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StyleHub - Modern E-commerce Experience',
    description: 'Discover the latest trends in fashion, electronics, beauty, and lifestyle.',
    images: ['https://stylehub-demo.vercel.app/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'verification_token_here'
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-inter antialiased`}>
        <AppProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            position="top-right" 
            richColors 
            closeButton
            duration={3000}
          />
        </AppProvider>
      </body>
    </html>
  )
}
