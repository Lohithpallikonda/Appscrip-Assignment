# E-Commerce Product Listing Page (PLP)

A modern, responsive e-commerce product listing page built with Next.js 14, React 18, and pure CSS. Features server-side rendering (SSR), incremental static regeneration (ISR), and advanced filtering for optimal e-commerce experience.

## Features

### ✨ Core Functionality
- **Server-Side Rendering (SSR)** - Fast initial page loads with server-rendered content
- **Incremental Static Regeneration (ISR)** - Products cached for 1 hour, auto-updates without full rebuild
- **Product Filtering** - Filter by category, price range ($0-$1000), and minimum rating (0-5 stars)
- **Real API Integration** - Fake Store API with 20+ products in multiple categories
- **Responsive Design** - Mobile-first approach with breakpoints at 1024px, 768px, and 480px
- **Semantic HTML** - Proper heading hierarchy, sections, and accessibility attributes

### 🎯 SEO & Performance
- **JSON-LD Schema Markup** - WebSite, CollectionPage, Product, and LocalBusiness schemas
- **Meta Tags** - Open Graph, Twitter Cards, canonical links, robots directives
- **Performance Optimized** - ~88KB first load JS, 959 DOM nodes
- **Lazy Loading** - Images load on demand for faster initial page load
- **CSS Optimization** - Pure CSS Modules, no heavy frameworks

## Tech Stack

- **Framework**: Next.js 14.2.33 with App Router
- **Runtime**: React 18.3.0
- **Styling**: CSS Modules (pure CSS, no preprocessors)
- **API**: Fake Store API (fakestoreapi.com)
- **Package Manager**: npm
- **Deployment**: Netlify
- **Node.js**: 18.17.0 (recommended)

## Getting Started

### Prerequisites
- Node.js 20+ LTS
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/app-assignment.git
cd app-assignment
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm run start` - Run the production server
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
app/
├── layout.js                              # Root layout with header
├── page.js                                # Homepage with hero and categories
├── home.module.css                        # Homepage styling
├── globals.css                            # Global styles
├── products/
│   ├── page.js                            # Products page (server component)
│   ├── layout.js                          # Products layout with metadata
│   └── products.module.css                # Products page styling
├── components/
│   ├── layout/
│   │   ├── Header.js                      # Navigation header
│   │   ├── Header.module.css
│   │   ├── Footer.js                      # Footer with links
│   │   ├── Footer.module.css
│   │   ├── MainLayout.js                  # Wrapper layout
│   │   └── MainLayout.module.css
│   └── products/
│       ├── ProductCard.js                 # Individual product component
│       ├── ProductCard.module.css
│       ├── ProductGrid.js                 # Grid layout
│       ├── ProductGrid.module.css
│       └── ProductsClient.js              # Client-side filtering
├── icons/                                 # SVG icons
├── public/
│   └── icons/
│       └── star-icon.svg
├── next.config.js
├── netlify.toml                           # Netlify deployment config
├── package.json
└── README.md
```

## Implementation Steps Completed

- ✅ **S1**: Fix dependency versions (Next.js 14.2.33, React 18.3.0)
- ✅ **S2**: Switch branch to main and configure GitHub remote
- ✅ **S3**: Analyze Figma Design & Export Assets
- ✅ **S4**: Create Base Layout Structure (semantic HTML)
- ✅ **S5**: Implement Header Component with SEO metadata
- ✅ **S6**: Replace garbled characters with SVG star icons
- ✅ **S7**: Implement responsive Filter Sidebar (category, price, rating)
- ✅ **S8**: Integrate Fake Store API with SSR & ISR
- ✅ **S9**: Complete SEO with Product JSON-LD schema and homepage optimization
- ✅ **S10**: Complete Responsive Styling (mobile-first with 3 breakpoints)
- ✅ **S11**: Add Footer Component (4 sections + social links)
- ✅ **S12**: Optimize Performance & DOM Size (88KB first load, 959 DOM nodes)
- ✅ **S13**: Production Build & Testing (successful build, all pages compile)
- 🚀 **S14**: Deploy to Netlify (configuration ready in netlify.toml)
- 📝 **S15**: Final Documentation & Submission (README complete)

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Targets

- Lighthouse Performance Score: >85
- First Contentful Paint (FCP): <2s
- DOM Size: <1500 nodes
- Mobile responsive: All breakpoints 320px-1920px

## Deployment

The application is configured for deployment on Netlify with:
- Automatic builds from the main branch
- Production optimization enabled
- Security headers configured
- Cache headers for optimal performance

### Deployment Steps

1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18.17.0
3. Netlify will automatically deploy on git push

The `netlify.toml` file contains all necessary configuration.

## Performance Metrics

- **First Load JS**: ~88.3KB (optimized)
- **DOM Nodes**: 959 (highly efficient)
- **Build Size**: 65MB (.next directory with dev chunks)
- **Page Sizes**:
  - Homepage: 991 bytes
  - Products: 2.72KB

## Key Features in Detail

### Product Filtering
- Category filter: All, Electronics, Clothing, Books
- Price range: $0-$1000 with min/max inputs and slider
- Rating filter: 0, 1+, 2+, 3+, 4+ stars
- All filters work in combination (AND logic)
- Mobile-responsive sidebar with drawer UI

### API Integration
- Server-side fetch from fakestoreapi.com
- ISR enabled: 1-hour revalidation
- Automatic category mapping for consistency
- Error handling with fallback

### SEO Features
- WebSite schema with SearchAction
- CollectionPage schema for products
- Product schema with aggregateRating for each item
- LocalBusiness schema with contact info
- Meta tags: Open Graph, Twitter Cards
- Canonical URLs and robots directives

## Accessibility

- ✅ Semantic HTML with proper heading hierarchy
- ✅ ARIA labels on all interactive elements
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Color contrast compliance (WCAG AA)
- ✅ Alt text on all images

## Support & Documentation

For more information:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Fake Store API](https://fakestoreapi.com)

## License

ISC License

---

**Note**: This is a complete e-commerce product listing page demonstrating modern web development best practices with Next.js 14, React 18, and pure CSS.
