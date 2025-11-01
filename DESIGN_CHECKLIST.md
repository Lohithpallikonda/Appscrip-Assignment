# Design Checklist - E-Commerce PLP

## Design System Analysis

### Color Palette
- **Primary Color**: #007bff (Blue)
- **Secondary Color**: #6c757d (Gray)
- **Success Color**: #28a745 (Green)
- **Danger Color**: #dc3545 (Red)
- **Background**: #f5f5f5 (Light Gray)
- **Text Primary**: #333333 (Dark Gray)
- **Text Secondary**: #666666 (Medium Gray)
- **Border Color**: #ddd (Light Border)
- **White**: #ffffff

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto)
- **H1**: 32px, 600 weight, line-height 1.2
- **H2**: 24px, 600 weight, line-height 1.2 (Product titles)
- **H3**: 18px, 600 weight, line-height 1.2
- **Body**: 16px, 400 weight, line-height 1.6
- **Small**: 14px, 400 weight
- **Caption**: 12px, 400 weight

### Spacing System
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px

---

## Layout Structure

### Header Component
- **Height**: 60px
- **Padding**: 12px 16px (mobile) / 12px 24px (desktop)
- **Layout**: Flex, space-between
- **Logo**: 40px height, left-aligned
- **Desktop Navigation**: Horizontal menu, 16px gap
- **Mobile Navigation**: Hamburger menu icon (24x24px)
- **Search Bar**: 100% width below header on mobile, inline on desktop
- **Search Height**: 40px
- **Background**: #ffffff
- **Box Shadow**: 0 2px 4px rgba(0,0,0,0.1)

### Layout Container (Main)
- **Max Width**: 1200px
- **Padding**: 0 16px (mobile) / 0 24px (desktop/tablet)
- **Display**: flex for desktop, grid for mobile

### Filter Sidebar (Desktop)
- **Width**: 240px
- **Position**: fixed on desktop, modal/drawer on mobile
- **Background**: #ffffff
- **Padding**: 16px
- **Border Right**: 1px solid #ddd
- **Sections**: Category, Price Range, Ratings, Brand
- **Section Height**: Varies, expandable

### Product Grid Area
- **Desktop**: calc(100% - 240px) width after sidebar
- **Tablet**: 100% width
- **Mobile**: 100% width
- **Padding**: 24px

### Product Grid
- **Desktop (>1024px)**: 4 columns, 20px gap
- **Tablet (768px-1024px)**: 2 columns, 16px gap
- **Mobile (<768px)**: 1 column, 12px gap

### Product Card
- **Card Padding**: 12px
- **Card Border**: 1px solid #ddd
- **Card Border Radius**: 8px
- **Card Background**: #ffffff
- **Card Hover**: box-shadow: 0 4px 12px rgba(0,0,0,0.15)

**Card Components:**
- **Image Container**: aspect-ratio: 1 / 1, height: 200px (mobile), 240px (desktop)
- **Image**: 100% width/height, object-fit: cover
- **Title**: H3 (18px), 2 lines max, text-overflow: ellipsis
- **Category Badge**: 12px text, gray background, 4px padding, 4px border-radius
- **Price**: H2 (24px), 600 weight, primary color
- **Original Price**: 14px, strikethrough, secondary color (if on sale)
- **Rating**: Star display, 14px text
- **Add to Cart Button**: 40px height, primary color, 100% width

### Footer
- **Background**: #333333 (Dark)
- **Color**: #ffffff (White text)
- **Padding**: 32px 16px (mobile) / 32px 24px (desktop)
- **Sections**: About, Products, Support, Follow Us

**Desktop Footer**: 4-column grid
**Tablet/Mobile**: Stacked, 1 column

---

## Responsive Breakpoints

### Mobile (<768px)
- Single column product grid
- Full-width layout
- Hamburger menu for navigation
- Sidebar filter as modal drawer
- Touch-friendly button size: 44x44px minimum
- Single column cards

### Tablet (768px - 1024px)
- 2-column product grid
- Sidebar can be collapsible
- Horizontal navigation visible
- Cards with padding adjustment
- Medium spacing

### Desktop (>1024px)
- 4-column product grid with sidebar
- Fixed sidebar (240px)
- Full horizontal navigation
- Maximum width: 1200px
- Optimal spacing throughout

---

## Component Details

### Header Navigation
- **Desktop**: Home | Products | Categories | About | Contact
- **Mobile**: Hamburger menu collapsing same items

### Filter Sidebar Sections
1. **Category Filter**
   - Checkbox list
   - Category names from API
   - Collapsible/expandable

2. **Price Range Filter**
   - Slider from $0 to $1000
   - Input fields for min/max

3. **Ratings Filter**
   - Stars (5, 4, 3, 2, 1)
   - Count per rating

4. **Availability**
   - In Stock
   - Out of Stock

### Product Card Sections
1. **Image**: Lazy-loaded, alt text
2. **Category Badge**: Small gray box
3. **Title**: Product name (max 2 lines)
4. **Rating**: Stars + count (e.g., ⭐⭐⭐⭐⭐ 234 reviews)
5. **Price**: $99.99 (with original price if on sale)
6. **Add to Cart Button**: Primary blue, full width
7. **Quick View Link**: Secondary text

---

## Image Guidelines

### Image Naming Convention
- Format: `descriptive-name.svg` or `.png`
- Examples:
  - `shopping-cart-icon.svg`
  - `filter-icon.svg`
  - `search-icon.svg`
  - `hamburger-menu-icon.svg`
  - `heart-icon.svg`
  - `star-icon.svg`
  - `logo.svg`

### Image Optimization
- SVG for icons (scalable, small file size)
- WebP for product images (if supported)
- Lazy loading for product images
- Responsive images with srcset
- Alt text on all images (SEO critical)

---

## Accessibility (WCAG 2.1 AA)

- Minimum touch target: 44x44px
- Color contrast: 4.5:1 for text
- Semantic HTML: header, nav, main, aside, footer
- ARIA labels on interactive elements
- Focus indicators visible
- Mobile-friendly viewport
- Keyboard navigation support

---

## Performance Targets

- **First Contentful Paint (FCP)**: < 2 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Time to Interactive (TTI)**: < 3.5 seconds
- **Lighthouse Score**: > 85
- **DOM Size**: < 1500 nodes
- **Bundle Size**: < 200KB (initial load)

---

## Notes

- All measurements are in pixels unless otherwise specified
- Mobile-first approach: style for mobile, enhance for larger screens
- Use CSS custom properties for colors and spacing
- Ensure smooth transitions and animations (200-300ms)
- Test on actual devices, not just browser DevTools
- SEO: Ensure all images have descriptive alt text and file names
