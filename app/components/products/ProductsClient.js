'use client';

import { useState } from 'react';
import ProductGrid from './ProductGrid';
import styles from '../../products/products.module.css';

// This component handles all the client-side filtering logic
// I kept it separate from the server component to make SSR work better
// and to keep client state management isolated from server rendering
export default function ProductsClient({ initialProducts, categories }) {
  // Filter states - the user can update these and see results in real-time
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [minRating, setMinRating] = useState(0);

  // This was the trickiest part - filtering with multiple criteria at once
  // I had to handle the rating object structure from the API (sometimes it's { rate: 4.5 })
  const filtered = initialProducts.filter(p => {
    const categoryMatch = !selectedCategory || p.category === selectedCategory;
    const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
    // Had issues with API returning rating as object vs number - this handles both
    const ratingValue = typeof p.rating === 'object' ? p.rating.rate : p.rating;
    const ratingMatch = (ratingValue || 0) >= minRating;
    return categoryMatch && priceMatch && ratingMatch;
  });

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.title);
    // Cart functionality will be implemented in later steps
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>

      {/* Mobile Filter Toggle */}
      <button
        className={styles.filterToggle}
        onClick={toggleSidebar}
        aria-label="Toggle filters"
        aria-expanded={sidebarOpen}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
        Filters
      </button>

      {/* Sidebar Overlay (Mobile) */}
      {sidebarOpen && (
        <div
          className={styles.sidebarOverlay}
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Filters */}
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.open : ''}`}>
        <button
          className={styles.sidebarClose}
          onClick={() => setSidebarOpen(false)}
          aria-label="Close filters"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Category Filter */}
        <div className={styles.filterSection}>
          <h3 className={styles.filterTitle}>Category</h3>
          <div className={styles.filterOptions}>
            <button
              className={`${styles.filterBtn} ${!selectedCategory ? styles.active : ''}`}
              onClick={() => {
                setSelectedCategory(null);
                setSidebarOpen(false);
              }}
              aria-pressed={!selectedCategory}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSidebarOpen(false);
                }}
                aria-pressed={selectedCategory === cat}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className={styles.filterSection}>
          <h3 className={styles.filterTitle}>Price Range</h3>
          <div className={styles.priceInputs}>
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Math.max(0, Number(e.target.value)), priceRange[1]])}
              aria-label="Minimum price"
              className={styles.priceInput}
              placeholder="Min"
            />
            <span>to</span>
            <input
              type="number"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Math.min(1000, Number(e.target.value))])}
              aria-label="Maximum price"
              className={styles.priceInput}
              placeholder="Max"
            />
          </div>
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            aria-label="Price range slider"
            className={styles.priceSlider}
          />
        </div>

        {/* Rating Filter */}
        <div className={styles.filterSection}>
          <h3 className={styles.filterTitle}>Minimum Rating</h3>
          <div className={styles.ratingFilter}>
            {[0, 1, 2, 3, 4].map(rating => (
              <label key={rating} className={styles.ratingOption}>
                <input
                  type="radio"
                  name="rating"
                  value={rating}
                  checked={minRating === rating}
                  onChange={() => setMinRating(rating)}
                  aria-label={`${rating} stars and up`}
                />
                <span>{rating === 0 ? 'All Ratings' : `${rating}+ Stars`}</span>
              </label>
            ))}
          </div>
        </div>
      </aside>

      {/* Product Grid */}
      <section className={styles.main}>
        <ProductGrid products={filtered} onAddToCart={handleAddToCart} />
      </section>
    </div>
  );
}
