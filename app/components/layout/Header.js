'use client';

import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logo}>
          <a href="/" aria-label="E-Commerce Store Home">
            <span className={styles.logoText}>Store</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${styles.desktopNav}`} aria-label="Main Navigation">
          <ul className={styles.navList}>
            <li>
              <a href="/" className={styles.navLink}>
                Home
              </a>
            </li>
            <li>
              <a href="/products" className={styles.navLink}>
                Products
              </a>
            </li>
            <li>
              <a href="/categories" className={styles.navLink}>
                Categories
              </a>
            </li>
            <li>
              <a href="/about" className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.navLink}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Section: Search & Cart */}
        <div className={styles.rightSection}>
          <div className={styles.searchBar}>
            <input
              type="search"
              placeholder="Search products..."
              className={styles.searchInput}
              aria-label="Search products"
            />
            <button
              className={styles.searchButton}
              aria-label="Search"
              type="submit"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </button>
          </div>

          <button
            className={styles.cartButton}
            aria-label="Shopping Cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.menuToggle} ${styles.mobileOnly}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile Navigation">
          <ul className={styles.mobileNavList}>
            <li>
              <a href="/" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/products" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                Products
              </a>
            </li>
            <li>
              <a href="/categories" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                Categories
              </a>
            </li>
            <li>
              <a href="/about" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                About
              </a>
            </li>
            <li>
              <a href="/contact" className={styles.mobileNavLink} onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
