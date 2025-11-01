'use client';

import { useState } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import styles from './products.module.css';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Sample products data (will be replaced with API data in S8)
  const products = [
    { id: 1, title: 'Wireless Headphones', price: 99.99, category: 'electronics', rating: 4.5, image: '/images/placeholder-electronics.svg' },
    { id: 2, title: 'USB-C Cable', price: 19.99, category: 'electronics', rating: 4.8, image: '/images/placeholder-electronics.svg' },
    { id: 3, title: 'Cotton T-Shirt', price: 29.99, category: 'clothing', rating: 4.3, image: '/images/placeholder-clothing.svg' },
    { id: 4, title: 'Denim Jeans', price: 79.99, category: 'clothing', rating: 4.6, image: '/images/placeholder-clothing.svg' },
    { id: 5, title: 'JavaScript Guide', price: 49.99, category: 'books', rating: 4.7, image: '/images/placeholder-books.svg' },
    { id: 6, title: 'Web Design Book', price: 39.99, category: 'books', rating: 4.4, image: '/images/placeholder-books.svg' },
  ];

  const categories = ['electronics', 'clothing', 'books'];
  const filtered = selectedCategory ? products.filter(p => p.category === selectedCategory) : products;

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product.title);
    // Cart functionality will be implemented in later steps
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Our Products</h1>

      {/* Filters */}
      <aside className={styles.sidebar}>
        <h2 className={styles.filterTitle}>Filter by Category</h2>
        <div className={styles.filterOptions}>
          <button
            className={`${styles.filterBtn} ${!selectedCategory ? styles.active : ''}`}
            onClick={() => setSelectedCategory(null)}
            aria-pressed={!selectedCategory}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => setSelectedCategory(cat)}
              aria-pressed={selectedCategory === cat}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <section className={styles.main}>
        <ProductGrid products={filtered} onAddToCart={handleAddToCart} />
      </section>
    </div>
  );
}
