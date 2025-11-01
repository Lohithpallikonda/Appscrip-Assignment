import styles from './ProductCard.module.css';

// Individual product card component - displays one product in the grid
// Includes product image, title, category, rating, price, and add to cart button
// Plus the JSON-LD schema for SEO which took me a while to get right!
export default function ProductCard({ product, onAddToCart }) {
  // Handle both direct rating (number) and API format (object with rate property)
  // The API response was inconsistent, so I had to handle both cases
  const ratingValue = typeof product.rating === 'object' ? product.rating.rate : product.rating;
  const ratingCount = typeof product.rating === 'object' ? product.rating.count : null;

  // Generate Product JSON-LD schema for Google and other search engines
  // This helps with SEO and makes the product searchable
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.title,
    image: product.image,
    price: product.price.toString(),
    priceCurrency: 'USD',
    category: product.category.charAt(0).toUpperCase() + product.category.slice(1),
    offers: {
      '@type': 'Offer',
      price: product.price.toString(),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    ...(ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: ratingValue.toString(),
        bestRating: '5',
        worstRating: '1',
        ...(ratingCount && { ratingCount: ratingCount.toString() }),
      },
    }),
  };

  // This renders the star rating display with full, half, and empty stars
  // Spent some time getting the half-star clipping to work correctly with CSS
  const renderStars = (rating) => {
    if (!rating) {
      return (
        <div className={styles.starsContainer}>
          {[1, 2, 3, 4, 5].map(i => (
            <img key={i} src="/icons/star-icon.svg" alt="empty star" className={styles.starIcon + ' ' + styles.empty} />
          ))}
        </div>
      );
    }

    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
    const stars = [];

    // Full stars - completely filled
    for (let i = 0; i < fullStars; i++) {
      stars.push(<img key={`full-${i}`} src="/icons/star-icon.svg" alt="full star" className={styles.starIcon + ' ' + styles.full} />);
    }

    // Half star - used clipPath to only show half of the star icon
    if (hasHalfStar) {
      stars.push(
        <div key="half" className={styles.starIcon + ' ' + styles.half}>
          <img src="/icons/star-icon.svg" alt="half star" style={{ clipPath: 'inset(0 50% 0 0)' }} />
        </div>
      );
    }

    // Empty stars - unfilled stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<img key={`empty-${i}`} src="/icons/star-icon.svg" alt="empty star" className={styles.starIcon + ' ' + styles.empty} />);
    }

    return <div className={styles.starsContainer}>{stars}</div>;
  };

  return (
    <>
      {/* Product JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
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
          <div className={styles.starsWrapper} title={`${ratingValue || 'No'} rating${ratingCount ? ` from ${ratingCount} reviews` : ''}`}>
            {renderStars(ratingValue)}
          </div>
          <span className={styles.ratingValue}>
            {ratingValue ? ratingValue.toFixed(1) : 'N/A'}
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
    </>
  );
}
