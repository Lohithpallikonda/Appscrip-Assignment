'use client';

import styles from './home.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Welcome to E-Commerce Store</h1>
          <p className={styles.heroDescription}>
            Discover quality products at great prices
          </p>
          <a href="/products" className={styles.ctaButton}>
            Shop Now
          </a>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Featured Categories</h2>
          <div className={styles.categoriesGrid}>
            {['Electronics', 'Clothing', 'Books', 'Jewelry'].map((category) => (
              <a
                key={category}
                href={`/products?category=${category.toLowerCase()}`}
                className={styles.categoryCard}
              >
                <h3 className={styles.categoryName}>{category}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* JSON-LD Schema for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'E-Commerce Store',
            url: 'https://e-commerce-store.com',
            description: 'Quality products at great prices',
            image: 'https://e-commerce-store.com/logo.svg',
            telephone: '+1-800-123-4567',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Commerce Street',
              addressLocality: 'Commerce City',
              addressRegion: 'CA',
              postalCode: '90001',
              addressCountry: 'US',
            },
            sameAs: [
              'https://www.facebook.com/ecommercestore',
              'https://www.twitter.com/ecommercestore',
            ],
          }),
        }}
      />
    </>
  );
}
