# E-Commerce Store

A modern, responsive e-commerce product listing page built with Next.js 14+, React, and pure CSS. Features server-side rendering (SSR) for optimal SEO performance and seamless product browsing experience.

## Features

- **Server-Side Rendering (SSR)** - Pre-renders product data on the server for better SEO
- **Responsive Design** - Mobile-first approach with tablet and desktop optimizations
- **Product Filtering** - Filter by category and price range
- **Real Product Data** - Integrates with Fake Store API for dynamic content
- **SEO Optimized** - Metadata, schema markup, and semantic HTML
- **Clean Code** - Minimal dependencies, organized component structure
- **Performance Optimized** - Minimal DOM size and optimized images

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **UI Library**: React 18+
- **Styling**: Pure CSS (no Tailwind/Bootstrap)
- **HTTP Client**: Axios
- **Package Manager**: npm
- **Deployment**: Netlify
- **Data Source**: FakeStoreAPI.com

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
app-assignment/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   ├── Header.module.css
│   │   │   ├── Footer.js
│   │   │   └── Footer.module.css
│   │   ├── products/
│   │   │   ├── ProductCard.js
│   │   │   ├── ProductGrid.js
│   │   │   └── Products.module.css
│   │   └── filters/
│   │       ├── FilterSidebar.js
│   │       └── Filters.module.css
│   ├── lib/
│   │   ├── api.js
│   │   └── seo.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── public/
│   ├── images/
│   └── icons/
├── next.config.js
├── package.json
└── README.md
```

## Features Implemented

### S1: Environment Setup ✅
- Next.js 14+ with App Router initialized
- React 18+ installed
- Pure CSS configured
- Development server running

### S2: Git Repository Setup (Current)
- Git initialized
- GitHub repository connected
- README created

### Coming Soon
- S3: Design Analysis & Assets
- S4: Layout Structure
- S5: Header Component
- S6: Product Components
- S7: Filter Sidebar
- S8: API Integration
- S9: SEO & Metadata
- S10: Responsive Styling
- S11: Footer Component
- S12: Performance Optimization
- S13: Production Build
- S14: Netlify Deployment
- S15: Final Documentation

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

The application is deployed on Netlify with automatic builds and deployments from the main GitHub branch.

**Live Site**: [Coming soon]

## License

ISC

## Author

Your Name

---

**Note**: This is an assignment project demonstrating modern web development practices with Next.js and pure CSS.
