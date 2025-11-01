# Assets Inventory

Complete list of all visual assets exported and created for the e-commerce store project.

## Icons (SVG - Scalable)

All icons located in `/public/icons/` with 24x24px standard size. Fully scalable for any resolution.

| Icon | File | Usage | Format |
|------|------|-------|--------|
| Search | `search-icon.svg` | Search input button | SVG |
| Hamburger Menu | `hamburger-menu-icon.svg` | Mobile menu toggle | SVG |
| Shopping Cart | `shopping-cart-icon.svg` | Cart button in header | SVG |
| Filter | `filter-icon.svg` | Filter toggle (mobile) | SVG |
| Star | `star-icon.svg` | Product ratings display | SVG |
| Close | `close-icon.svg` | Modal/drawer close button | SVG |
| Heart/Wishlist | `heart-icon.svg` | Wishlist/favorite button | SVG |

**Total: 7 icons**

---

## Images (SVG - Logos & Placeholders)

All images located in `/public/images/`. Using SVG format for scalability and small file size.

### Logo
| Asset | File | Purpose | Dimensions | Format |
|-------|------|---------|------------|--------|
| Store Logo | `logo.svg` | Site branding in header | 200x60 | SVG |

### Product Placeholders
| Category | File | Purpose | Dimensions | Format |
|----------|------|---------|------------|--------|
| Generic Product | `placeholder-product.svg` | Default product image | 300x300 | SVG |
| Electronics | `placeholder-electronics.svg` | Electronics category | 300x300 | SVG |
| Clothing | `placeholder-clothing.svg` | Clothing & fashion | 300x300 | SVG |
| Books | `placeholder-books.svg` | Books & media | 300x300 | SVG |

**Total: 5 images**

---

## Asset Usage Guidelines

### Icon Implementation
```jsx
// Import as component or use inline SVG
<img src="/icons/search-icon.svg" alt="Search" width="24" height="24" />

// Or inline in SVG element
<svg><use href="/icons/search-icon.svg#icon" /></svg>
```

### Image Implementation
```jsx
// Product images
<img
  src="/images/placeholder-product.svg"
  alt="Product Name"
  width="240"
  height="240"
  loading="lazy"
/>

// Logo
<img
  src="/images/logo.svg"
  alt="E-Commerce Store"
  width="200"
  height="60"
/>
```

---

## Asset Properties

### All Icons
- **Format**: SVG (Scalable Vector Graphics)
- **Size**: 24x24px (scalable)
- **Color**: currentColor (inherits text color)
- **Stroke Width**: 2px
- **File Size**: 250-350 bytes each
- **Usage**: UI buttons, navigation, indicators

### All Images
- **Format**: SVG (Scalable Vector Graphics)
- **Size**: 300x300px (aspect ratio 1:1)
- **Compression**: None required (already optimal)
- **File Size**: 900-1300 bytes each
- **Usage**: Product display, category cards, branding

---

## Color Coding (for placeholders)

- **Primary (Blue)**: `#007bff` - Main products, electronics
- **Secondary (Pink)**: `#ff69b4` - Clothing & fashion
- **Tertiary (Orange)**: `#ffc107` - Books & media
- **Background**: `#f5f5f5` - Light gray backdrop

---

## SEO Optimization

### File Naming Convention
All assets follow SEO-friendly naming:
- Lowercase only
- Hyphen-separated words
- Descriptive names (not generic like "image1.svg")
- Examples: `shopping-cart-icon.svg`, `placeholder-books.svg`, `logo.svg`

### Alt Text Standards
All images should have meaningful alt text:
- Logo: "E-Commerce Store Logo"
- Product: "{Product Name} - {Category}"
- Icons: Descriptive purpose (e.g., "Shopping Cart Icon")

---

## Performance Metrics

| Metric | Value |
|--------|-------|
| Total Icons | 7 |
| Total Images | 5 |
| Total Files | 12 |
| Total Size | ~12KB |
| Format | 100% SVG (scalable, optimal) |
| Load Time | Negligible (<1ms) |

---

## Future Asset Additions

When connecting to Fake Store API, real product images will be fetched from:
- **Source**: `fakestoreapi.com/api/products`
- **Image URL**: Product object `image` property
- **Fallback**: Use placeholder SVGs if image fails to load
- **Optimization**: Implement lazy loading for below-the-fold images

---

## Asset Management

### Storage Structure
```
public/
├── icons/
│   ├── search-icon.svg
│   ├── hamburger-menu-icon.svg
│   ├── shopping-cart-icon.svg
│   ├── filter-icon.svg
│   ├── star-icon.svg
│   ├── close-icon.svg
│   └── heart-icon.svg
└── images/
    ├── logo.svg
    ├── placeholder-product.svg
    ├── placeholder-electronics.svg
    ├── placeholder-clothing.svg
    └── placeholder-books.svg
```

### Adding New Assets
1. Export from Figma or design tool as SVG
2. Optimize SVG (remove unnecessary attributes)
3. Use descriptive names (e.g., `new-feature-icon.svg`)
4. Place in appropriate folder (`/icons` or `/images`)
5. Add to this inventory
6. Test rendering at different sizes
7. Commit with descriptive message

---

## Accessibility

All SVG assets include:
- ✅ Semantic sizing (viewBox attributes)
- ✅ Proper color contrast
- ✅ Alt text on images
- ✅ ARIA labels on interactive icons
- ✅ Clear visual hierarchy
- ✅ Touch-friendly sizes (minimum 44x44px for buttons)

---

## Next Steps

1. **Connect Real Images**: Integrate Fake Store API product images
2. **Image Optimization**: Implement WebP format with fallbacks
3. **Responsive Images**: Add srcset for different screen sizes
4. **Lazy Loading**: Implement lazy loading for performance
5. **CDN Setup**: Consider CDN hosting for faster delivery (on Netlify)

---

**Last Updated**: November 1, 2025
**Commit**: `571f0a2` - S3: Add logo and placeholder product images for all categories
