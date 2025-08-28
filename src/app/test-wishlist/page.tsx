'use client'

import { useState } from 'react'
import { useWishlistToggle } from '@/hooks/useWishlistToggle'
import { useApp } from '@/contexts/AppContext'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'

export default function WishlistTestPage() {
  const { toggleWishlist, isInWishlist } = useWishlistToggle()
  const { wishlistItems } = useApp()
  const [testLogs, setTestLogs] = useState<string[]>([])

  const addLog = (message: string) => {
    setTestLogs(prev => [...prev, `${new Date().toLocaleTimeString('en-US', { hour12: false })}: ${message}`])
  }

  const testProduct = products[0] // Get first product for testing

  const handleTestWishlist = () => {
    addLog('Testing wishlist toggle...')
    toggleWishlist(testProduct)
    
    // Check after a small delay to see if state updated
    setTimeout(() => {
      const inWishlist = isInWishlist(testProduct.id)
      addLog(`Product in wishlist: ${inWishlist}`)
      addLog(`Total wishlist items: ${wishlistItems.length}`)
    }, 100)
  }

  const clearLogs = () => {
    setTestLogs([])
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Wishlist Functionality Test</h1>
      
      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Test Product: {testProduct.name}</h2>
          <p className="text-sm text-gray-600 mb-4">ID: {testProduct.id}</p>
          <p className="mb-4">Currently in wishlist: {isInWishlist(testProduct.id) ? 'Yes' : 'No'}</p>
          <Button onClick={handleTestWishlist}>
            Toggle Wishlist
          </Button>
        </div>

        <div className="border p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Current Wishlist</h2>
          <p className="mb-2">Total items: {wishlistItems.length}</p>
          <div className="space-y-1">
            {wishlistItems.map(item => (
              <div key={item.id} className="text-sm p-2 bg-gray-100 rounded">
                {item.name} (ID: {item.id})
              </div>
            ))}
          </div>
        </div>

        <div className="border p-4 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Test Logs</h2>
            <Button variant="outline" size="sm" onClick={clearLogs}>
              Clear Logs
            </Button>
          </div>
          <div className="bg-gray-100 p-3 rounded max-h-64 overflow-y-auto">
            {testLogs.length === 0 ? (
              <p className="text-gray-500">No logs yet...</p>
            ) : (
              testLogs.map((log, index) => (
                <div key={index} className="text-sm font-mono">
                  {log}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
