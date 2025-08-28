# TrendCart - Modern E-commerce Website

A complete Next.js 14 e-commerce website with TypeScript, TailwindCSS, and modern features including shopping cart, wishlist, search, checkout, and email contact form.

## 🚀 Features

### Core Functionality
- **Homepage**: Hero banner, featured categories, trending products
- **Product Management**: Product listings, detailed product pages, image galleries
- **Shopping Cart**: Add/remove items, quantity controls, persistent storage
- **Wishlist**: Save favorite products
- **Search**: Real-time search with autocomplete
- **Checkout**: Complete order flow with shipping details
- **Order Management**: Order history and tracking
- **Contact Form**: Email integration for customer inquiries
- **Legal Pages**: Privacy policy, terms of service

### Tech Stack
- **Next.js 14** with App Router and TypeScript
- **TailwindCSS** with custom design system and shadcn/ui components
- **React Context** for state management with localStorage persistence
- **Nodemailer** with Gmail SMTP for email functionality
- **Lucide React** for icons
- **Lucide React** for modern icons
- **SEO optimized** with next-seo
- **Performance optimized** with next/image and dynamic imports

### Core Features
- 🏠 **Home Page** with hero section, featured categories, and trending products
- 🛍️ **Product Listing** with advanced filtering, sorting, and search
- 📱 **Product Details** with image gallery and reviews
- 🛒 **Shopping Cart** with quantity management and checkout flow
- ❤️ **Wishlist** functionality with local storage
- 🔍 **Search** across all products with filters
- 📱 **Responsive Design** optimized for all devices
- 🌙 **Dark Mode** support
- ⚡ **Smooth Animations** with Framer Motion

### Design Features
- Modern Gen-Z aesthetic with gradients and glass effects
- Hover animations and micro-interactions
- Professional card layouts and typography
- Mobile-first responsive design
- Accessibility considerations

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   ├── products/       # Product listing and details
│   ├── cart/           # Shopping cart
│   └── wishlist/       # Wishlist page
├── components/
│   ├── ui/             # Reusable UI components (Button, Card, Input)
│   ├── layout/         # Header, Footer, Navigation
│   └── ecommerce/      # Product cards, filters, etc.
├── data/               # Mock data for products, categories, users
├── lib/                # Utility functions and helpers
└── styles/             # Global CSS and Tailwind config
```

## 🛍️ Mock Data

The project includes comprehensive fake data:
- **50+ Products** across 6 categories
- **Categories**: Fashion, Electronics, Beauty, Lifestyle, Sports, Books
- **Product Features**: Images, pricing, ratings, reviews, stock status
- **User Reviews** with avatars and ratings

## 🎨 Design System

### Colors
- Primary: Purple gradient (#667eea to #764ba2)
- Muted backgrounds and professional typography
- Dark mode support with proper contrast

### Typography
- **Headings**: Poppins (bold, modern)
- **Body**: Inter (clean, readable)
- **Responsive**: Mobile-first approach

### Components
- Custom button variants with hover effects
- Card components with shadow and hover animations
- Form inputs with focus states
- Modal dialogs and overlays

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

Or use Vercel CLI:
```bash
npm install -g vercel
vercel --prod
```

### Other Platforms
The project can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📊 Performance Features

- **Image Optimization**: next/image with proper sizing
- **Code Splitting**: Dynamic imports for heavy components
- **Font Optimization**: Preloaded Google Fonts
- **Lazy Loading**: Non-critical components loaded on demand
- **SEO**: Comprehensive metadata and OpenGraph tags

## 🎯 SEO Optimization

- **Metadata API**: Dynamic titles and descriptions
- **OpenGraph**: Social media preview cards
- **Structured Data**: Product schema for search engines
- **Sitemap**: Auto-generated for search indexing
- **Mobile-Friendly**: Responsive design for all devices

## 🔧 Customization

### Adding New Products
1. Edit `/src/data/products.ts`
2. Add product objects with required fields
3. Include high-quality images from Unsplash

### Styling Changes
1. Modify `/src/styles/globals.css` for global styles
2. Update `tailwind.config.ts` for design tokens
3. Customize color schemes in CSS variables

### Adding Features
1. Create new components in `/src/components/`
2. Add new pages in `/src/app/`
3. Update navigation in Header component

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+
- **Large Desktop**: 1400px+

## 🎭 Animations

- **Page Transitions**: Smooth fade-ins
- **Hover Effects**: Scale and shadow transitions
- **Loading States**: Skeleton screens and spinners
- **Micro-interactions**: Button clicks and form inputs

## 🛠️ Tech Decisions

### Why Next.js 14?
- App Router for modern React patterns
- Built-in SEO and performance optimizations
- TypeScript support out of the box
- Excellent developer experience

### Why TailwindCSS?
- Utility-first for rapid development
- Consistent design system
- Excellent responsive design tools
- Small bundle size in production

### Why Mock Data?
- No backend needed for portfolio demo
- Consistent and realistic data
- Easy to modify and extend
- Focus on frontend development

## 🐛 Known Issues

- Mock data only (no real backend)
- Cart/wishlist state resets on page refresh
- No real payment processing
- No user authentication

## 🔮 Future Enhancements

- Add real backend integration
- Implement user authentication
- Add payment processing
- Include product reviews system
- Add admin dashboard
- Implement inventory management

## 📄 License

This project is created for portfolio purposes. Feel free to use as inspiration for your own projects.

## 🤝 Contributing

This is a portfolio project, but suggestions and improvements are welcome!

---

**Built with ❤️ for modern e-commerce experiences**
