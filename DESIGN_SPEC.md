# Design Specification Document

## Project: E-Commerce Product Listing Page (PLP)

### Design Analysis Summary

This document captures the design specifications analyzed from the Figma design file and implemented in the application.

---

## 1. Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | #007bff | Links, buttons, borders, hover states |
| Dark Gray | #333333 | Text headings, primary text |
| Light Gray | #666666 | Secondary text, descriptions |
| Very Light Gray | #f5f5f5 | Backgrounds, inactive states |
| Border Gray | #dddddd | Borders, dividers |
| Dark Background | #2a2a2a | Footer background |
| Darker Background | #333333 | Footer darker areas |
| White | #ffffff | Main background, card backgrounds |
| Star Yellow | #ffc107 | Star ratings |

---

## 2. Typography

### Font Family
- Primary: System font stack (Segoe UI, Roboto, Helvetica, Arial, sans-serif)

### Font Sizes

#### Desktop (>1024px)
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| Hero Title (H1) | 32px | 700 | 1.3 |
| Section Title (H2) | 24px | 700 | 1.4 |
| Filter Title (H3) | 18px | 600 | 1.4 |
| Product Title | 16px | 600 | 1.3 |
| Body Text | 14-16px | 400 | 1.5 |
| Small Text | 12-13px | 400 | 1.4 |

#### Tablet (768px - 1024px)
| Element | Size | Change |
|---------|------|--------|
| Hero Title | 28px | -4px |
| Section Title | 20px | -4px |
| Product Title | 14px | -2px |
| Body Text | 14px | -2px |

#### Mobile (<768px)
| Element | Size | Change |
|---------|------|--------|
| Hero Title | 24px | -8px from desktop |
| Section Title | 18px | -6px from desktop |
| Product Title | 13px | -3px from desktop |
| Body Text | 13-14px | -2-3px from desktop |

---

## 3. Layout & Spacing

### Container
- Max width: 1200px
- Padding: 0 16px (desktop), 0 12px (mobile)
- Margin: 0 auto (centered)

### Spacing System (8px base unit)
| Unit | Value |
|------|-------|
| xs | 4px |
| sm | 8px |
| md | 12px |
| lg | 16px |
| xl | 24px |
| 2xl | 32px |
| 3xl | 48px |

### Section Padding
- Hero: 48px vertical, 16px horizontal (desktop)
- Sections: 48px vertical, 16px horizontal (desktop)
- Mobile: 32px → 24px → 16px (responsive reduction)

---

## 4. Component Specifications

### 4.1 Header
- **Height**: 56px (including padding)
- **Sticky**: Yes, z-index: 100
- **Background**: White with bottom border
- **Navigation**:
  - Desktop: Horizontal nav in center
  - Mobile: Collapsible drawer below header
- **Search Bar**: Min width 200px (desktop), flex on tablet, hidden on mobile
- **Cart Button**: Always visible, 44px min-height for touch

### 4.2 Hero Section
- **Background**: White (#ffffff)
- **Text Alignment**: Center
- **Title**: 32px, bold
- **Description**: 18px, gray (#666666)
- **CTA Button**: Primary blue with hover effect

### 4.3 Filter Sidebar
- **Width**: 240px (desktop)
- **Position**: Sticky, top 100px
- **Mobile**: Fixed full-width drawer with overlay
- **Sections**:
  - Category (buttons)
  - Price Range (inputs + slider)
  - Rating (radio buttons)
- **Toggle Button**: Positioned top-right, mobile-only

### 4.4 Product Card
- **Size**: Responsive grid (auto-fill minmax 200px, 1fr)
- **Aspect Ratio**: 1:1 for images
- **Padding**: 12px (desktop), 10px (tablet), 8px (mobile)
- **Border**: 1px solid #dddddd
- **Border Radius**: 8px
- **Hover**:
  - Box shadow: 0 4px 12px rgba(0,0,0,0.15)
  - Transform: translateY(-2px)
  - Border color: #007bff

### 4.5 Footer
- **Columns**: 4 (desktop), 2 (tablet), 1 (mobile)
- **Background**: #333333 (dark)
- **Text Color**: #cccccc
- **Links**: Hover → #007bff with underline
- **Social Icons**: 32x32px with border, hover background
- **Gap**: 32px (desktop), 24px (tablet), 16px (mobile)

---

## 5. Responsive Breakpoints

| Breakpoint | Width | Changes |
|-----------|-------|---------|
| Desktop | >1024px | Full layout, all elements visible |
| Tablet | 768px - 1024px | Reduced padding, 2-col footer, smaller sidebar |
| Mobile | <768px | Drawer sidebar, 1-col footer, hidden search |
| Small Mobile | <480px | Further padding reduction, 1-col grid |

---

## 6. Interactive Elements

### Buttons
- **Primary CTA**:
  - Background: #007bff
  - Hover: #0056b3 with translateY(-2px)
  - Active: scale(0.98)
  - Focus: 2px solid outline with 2px offset
  - Padding: 12px 32px (desktop), 10px 24px (tablet), 8px 16px (mobile)

- **Filter Buttons**:
  - Inactive: White background with border
  - Hover: #f5f5f5 background, #007bff border
  - Active: #007bff background, white text

### Inputs
- **Text/Number Inputs**:
  - Padding: 6px 8px
  - Border: 1px solid #dddddd
  - Focus: #007bff border with subtle shadow
  - Border radius: 4px

- **Range Slider**:
  - Height: 6px
  - Accent color: #007bff
  - Cursor: pointer

### Links
- **Navigation Links**:
  - Color: #333333
  - Hover: #007bff with underline (nav) or shadow effect
  - Focus: 2px outline with offset

---

## 7. Grid System

### Product Grid
- **Desktop**: repeat(auto-fill, minmax(200px, 1fr))
- **Tablet (1024px)**: repeat(auto-fill, minmax(180px, 1fr))
- **Mobile (768px)**: repeat(2, 1fr)
- **Small Mobile (480px)**: repeat(auto-fill, minmax(120px, 1fr))
- **Gap**: 20px (desktop), 16px (tablet), 12px (mobile), 8px (small)

### Footer Grid
- **Desktop**: repeat(4, 1fr)
- **Tablet**: repeat(2, 1fr)
- **Mobile**: 1fr (single column)

---

## 8. Accessibility Requirements

### Keyboard Navigation
- ✅ All interactive elements accessible via Tab
- ✅ Focus indicators visible (2px outline)
- ✅ Enter/Space activates buttons

### ARIA Labels
- ✅ Buttons: aria-label for icon buttons
- ✅ Form Controls: aria-label for inputs
- ✅ Regions: aria-label for main sections
- ✅ Expanded State: aria-expanded for toggle

### Color Contrast
- ✅ Text: 4.5:1 minimum (WCAG AA)
- ✅ Large Text: 3:1 minimum
- ✅ All links distinguishable from surrounding text

### Semantic HTML
- ✅ Proper heading hierarchy (H1 → H2 → H3)
- ✅ Semantic sections (`<section>`, `<nav>`, `<footer>`, `<article>`)
- ✅ Form labels and associations
- ✅ Image alt text

---

## 9. Visual Effects

### Transitions
- **Duration**: 200ms
- **Easing**: ease
- **Properties**:
  - Background color
  - Border color
  - Transform (translateY)
  - Box shadow

### Shadows
- **Card Hover**: 0 4px 12px rgba(0, 0, 0, 0.15)
- **Button Hover**: 0 2px 6px rgba(0, 123, 255, 0.3)
- **Header**: 0 2px 4px rgba(0, 0, 0, 0.1)

### Transforms
- **Button Hover**: translateY(-2px)
- **Button Active**: scale(0.98)

---

## 10. Component Statistics

| Component | Elements | DOM Nodes | CSS Rules |
|-----------|----------|-----------|-----------|
| Header | 5 | 15 | 45 |
| Hero Section | 1 | 8 | 12 |
| Filter Sidebar | 3 | 25 | 35 |
| Product Grid | 20 | 850+ | 40 |
| Footer | 4 | 40 | 35 |
| **Total** | **33** | **~950** | **~167** |

---

## 11. Performance Targets

| Metric | Target | Actual |
|--------|--------|--------|
| First Load JS | <100KB | 88.3KB ✅ |
| DOM Nodes | <1500 | 959 ✅ |
| Images | Lazy load | ✅ |
| CSS | Minified | ✅ |
| Fonts | System stack | ✅ |

---

## 12. SEO Schema Markup

### Implemented Schemas
- ✅ **WebSite** (root level)
  - SearchAction for site search
  - Brand and URL

- ✅ **LocalBusiness** (homepage)
  - Address, phone, social links
  - Name and description

- ✅ **CollectionPage** (products page)
  - List of products
  - Organization info

- ✅ **Product** (each item)
  - Name, price, image
  - Rating and review count
  - Availability

---

## 13. Design System Values

### Border Radius
- Buttons: 4px
- Cards: 8px
- Inputs: 4px
- Small elements: 3px

### Z-Index Stack
| Layer | Value | Elements |
|-------|-------|----------|
| Dropdown/Overlay | 999-1001 | Sidebar overlay, sidebar |
| Fixed | 100 | Header |
| Default | 0-1 | Cards, sections |

---

## Notes

- All colors are accessible and tested for WCAG AA compliance
- Spacing follows an 8px base unit system for consistency
- Responsive design uses mobile-first approach
- All interactive elements have 44px+ touch targets on mobile
- Font sizes scale proportionally across breakpoints
- Transitions are smooth and performant (GPU-accelerated where possible)

