import ProductsClient from '../components/products/ProductsClient';

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products', {
      next: { revalidate: 3600 }, // ISR: revalidate every hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const apiProducts = await response.json();

    // Map API categories to our custom categories
    const categoryMap = {
      'electronics': 'electronics',
      'jewelery': 'electronics',
      "men's clothing": 'clothing',
      "women's clothing": 'clothing',
      'books': 'books',
    };

    // Transform API data to match our component expectations
    const products = apiProducts.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      rating: product.rating, // API provides { rate, count }
      category: categoryMap[product.category] || 'electronics',
    }));

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
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
