import ProductsClient from '../components/products/ProductsClient';

// Server-side function to fetch products from the API
// This runs on the server and caches for 1 hour (ISR)
// I chose to do the API call here so the page renders faster with server-side rendering
async function fetchProducts() {
  try {
    // Fetch from the Fake Store API with ISR caching
    const response = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 }, // ISR: revalidate every hour - this was key to getting performance right
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const apiProducts = await response.json();

    // Map API categories to our custom categories
    // The API has 4 categories but I wanted to group them into 3 for the assignment
    // Jewelry goes with electronics, and men's/women's clothing both go to clothing
    const categoryMap = {
      'electronics': 'electronics',
      'jewelery': 'electronics', // Spelling is from the API
      "men's clothing": 'clothing',
      "women's clothing": 'clothing',
      'books': 'books',
    };

    // Transform API data to match our component expectations
    // The API structure is slightly different, so I had to map the fields
    const products = apiProducts.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating, // API provides { rate, count } object
      category: categoryMap[product.category] || 'electronics', // Fallback to electronics if unknown
    }));

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Return empty array on error - better than crashing
  }
}

export default async function Products() {
  const products = await fetchProducts();

  const categories = ['electronics', 'clothing', 'books'];

  return (
    <ProductsClient
      initialProducts={products}
      categories={categories}
    />
  );
}
