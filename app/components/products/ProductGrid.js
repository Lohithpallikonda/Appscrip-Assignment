import ProductCard from './ProductCard';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products, onAddToCart }) {
  if (!products || products.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No products found. Try adjusting your filters.</p>
      </div>
    );
  }

  return (
    <section className={styles.grid}>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}
