'use client';

import { useState } from 'react';
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
          >
            All Products
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${selectedCategory === cat ? styles.active : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </aside>

      {/* Product Grid */}
      <section className={styles.main}>
        <div className={styles.grid}>
          {filtered.map(product => (
            <article key={product.id} className={styles.card}>
              <img
                src={product.image}
                alt={`${product.title} - ${product.category}`}
                className={styles.image}
                loading="lazy"
              />
              <h2 className={styles.productTitle}>{product.title}</h2>
              <div className={styles.rating}>
                <span className={styles.stars}>★★★★☆</span>
                <span className={styles.ratingValue}>{product.rating}</span>
              </div>
              <div className={styles.priceSection}>
                <span className={styles.price}>${product.price.toFixed(2)}</span>
              </div>
              <button className={styles.addToCartBtn}>Add to Cart</button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
