import { Metadata } from 'next'
import Link from 'next/link'
import { 
  ArrowLeft, 
  BarChart3, 
  ShoppingBag, 
  Users, 
  TrendingUp,
  DollarSign,
  Package,
  Eye
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard - StyleHub Admin',
  description: 'Administrative dashboard for StyleHub e-commerce platform',
}

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,345',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+5.2%',
      icon: ShoppingBag,
      color: 'text-blue-600'
    },
    {
      title: 'Active Users',
      value: '5,678',
      change: '+8.1%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Products',
      value: '456',
      change: '+2.3%',
      icon: Package,
      color: 'text-orange-600'
    }
  ]

  const recentOrders = [
    { id: '#1234', customer: 'John Doe', amount: '$99.99', status: 'Completed' },
    { id: '#1235', customer: 'Jane Smith', amount: '$149.99', status: 'Processing' },
    { id: '#1236', customer: 'Bob Johnson', amount: '$79.99', status: 'Shipped' },
    { id: '#1237', customer: 'Alice Brown', amount: '$199.99', status: 'Pending' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Dashboard
            </h1>
            <p className="text-muted-foreground">
              Welcome to StyleHub Admin Panel
            </p>
          </div>
          <Link 
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Store
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg bg-slate-100 dark:bg-slate-700 ${stat.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.title}
                </p>
              </div>
            )
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Recent Orders</h2>
              <Link href="/orders" className="text-primary hover:text-primary/80 text-sm font-medium">
                View All
              </Link>
            </div>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                  <div>
                    <p className="font-medium text-foreground">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">{order.amount}</p>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                      order.status === 'Processing' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300' :
                      order.status === 'Shipped' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300' :
                      'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link 
                href="/products"
                className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                <Package className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Manage Products</span>
              </Link>
              <Link 
                href="/orders"
                className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                <ShoppingBag className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">View Orders</span>
              </Link>
              <Link 
                href="/categories"
                className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">Analytics</span>
              </Link>
              <Link 
                href="/"
                className="flex flex-col items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors"
              >
                <Eye className="h-8 w-8 text-primary mb-2" />
                <span className="text-sm font-medium text-foreground">View Store</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mt-8 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Welcome to the Admin Dashboard! 🎉
          </h3>
          <p className="text-muted-foreground">
            This page is automatically shown when users visit invalid URLs like /123 or /abcxyz. 
            You can manage your store, view analytics, and handle orders from here.
          </p>
        </div>
      </div>
    </div>
  )
}
