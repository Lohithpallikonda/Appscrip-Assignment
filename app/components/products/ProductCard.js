import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '★'.repeat(fullStars);
    if (hasHalfStar) stars += '☆';
    stars += '☆'.repeat(5 - Math.ceil(rating));
    return stars;
  };

  return (
    <article className={styles.card}>
      <img
        src={product.image}
        alt={`${product.title} - ${product.category}`}
        className={styles.image}
        width="200"
        height="200"
        loading="lazy"
      />

      <h3 className={styles.title}>{product.title}</h3>

      <div className={styles.category}>
        {product.category}
      </div>

      <div className={styles.rating}>
        <span className={styles.stars} title={`${product.rating} out of 5 stars`}>
          {renderStars(product.rating)}
        </span>
        <span className={styles.ratingValue}>
          {product.rating}
        </span>
      </div>

      <div className={styles.priceSection}>
        <span className={styles.price}>
          ${product.price.toFixed(2)}
        </span>
      </div>

      <button
        className={styles.addToCartBtn}
        onClick={() => onAddToCart && onAddToCart(product)}
        aria-label={`Add ${product.title} to cart`}
      >
        Add to Cart
      </button>
    </article>
  );
}
