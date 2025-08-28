'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Home, ArrowRight, Search, AlertTriangle } from 'lucide-react'

export default function NotFoundClient() {
  const router = useRouter()

  useEffect(() => {
    // Automatically redirect to home page after 3 seconds
    const timer = setTimeout(() => {
      router.push('/')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="relative">
            <h1 className="text-9xl font-bold text-primary/20 dark:text-primary/10">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <AlertTriangle className="h-16 w-16 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-muted-foreground mb-4">
            The page you're looking for doesn't exist. Don't worry, we'll redirect you to our home page automatically!
          </p>
          
          {/* Countdown */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-sm text-primary font-medium">
              Redirecting to home page in 3 seconds...
            </p>
            <div className="w-full bg-primary/20 rounded-full h-1 mt-2">
              <div className="bg-primary h-1 rounded-full" style={{
                animation: 'progress 3s linear forwards',
              }}></div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <ArrowRight className="h-4 w-4" />
            Go to Home page Now
          </Link>
          
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
          
          <Link
            href="/products"
            className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary/80 px-6 py-3 transition-colors"
          >
            <Search className="h-4 w-4" />
            Browse Products
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-xs text-muted-foreground">
          <p>Lost? Try searching for what you need or visit our main pages.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}
