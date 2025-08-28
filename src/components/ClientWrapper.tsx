'use client'

import { useApp } from '@/contexts/AppContext'
import { ReactNode } from 'react'

interface ClientWrapperProps {
  children: ReactNode
  fallback?: ReactNode
}

/**
 * A wrapper component that prevents hydration mismatches by only rendering 
 * children after the app context has finished loading localStorage data
 */
export default function ClientWrapper({ children, fallback = null }: ClientWrapperProps) {
  const { isLoading } = useApp()

  if (isLoading) {
    return <>{fallback}</>
  }

  return <>{children}</>
}
