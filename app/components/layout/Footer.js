import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Footer Content */}
        <div className={styles.content}>
          {/* About Section */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>About Us</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/about" className={styles.link}>
                  About Our Store
                </a>
              </li>
              <li>
                <a href="/careers" className={styles.link}>
                  Careers
                </a>
              </li>
              <li>
                <a href="/press" className={styles.link}>
                  Press
                </a>
              </li>
              <li>
                <a href="/blog" className={styles.link}>
                  Blog
                </a>
              </li>
            </ul>
          </section>

          {/* Products Section */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Products</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/electronics" className={styles.link}>
                  Electronics
                </a>
              </li>
              <li>
                <a href="/clothing" className={styles.link}>
                  Clothing
                </a>
              </li>
              <li>
                <a href="/books" className={styles.link}>
                  Books
                </a>
              </li>
              <li>
                <a href="/sale" className={styles.link}>
                  Sale
                </a>
              </li>
            </ul>
          </section>

          {/* Support Section */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Support</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/contact" className={styles.link}>
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className={styles.link}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/shipping" className={styles.link}>
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="/returns" className={styles.link}>
                  Returns
                </a>
              </li>
            </ul>
          </section>

          {/* Legal Section */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Legal</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="/privacy" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className={styles.link}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className={styles.link}>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/sitemap" className={styles.link}>
                  Sitemap
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={styles.bottom}>
        <div className={styles.bottomContainer}>
          <p className={styles.copyright}>
            &copy; {currentYear} E-Commerce Store. All rights reserved.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com" className={styles.socialLink} aria-label="Facebook" title="Facebook">
              <img src="/icons/facebook-icon.svg" alt="Facebook" width="24" height="24" />
            </a>
            <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter / X" title="Twitter / X">
              <img src="/icons/twitter-icon.svg" alt="Twitter" width="24" height="24" />
            </a>
            <a href="https://instagram.com" className={styles.socialLink} aria-label="Instagram" title="Instagram">
              <img src="/icons/instagram-icon.svg" alt="Instagram" width="24" height="24" />
            </a>
            <a href="https://linkedin.com" className={styles.socialLink} aria-label="LinkedIn" title="LinkedIn">
              <img src="/icons/linkedin-icon.svg" alt="LinkedIn" width="24" height="24" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
