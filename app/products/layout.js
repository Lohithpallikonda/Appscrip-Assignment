// Product listing page metadata for SEO
// These meta tags help with search engine rankings and social media sharing
export const metadata = {
  title: 'Products | E-Commerce Store - Shop Quality Items',
  description: 'Browse our wide selection of products including electronics, clothing, books, and more. Find great deals on quality items. Filter by category and discover thousands of items.',
  keywords: 'products, shopping, electronics, clothing, books, buy online, quality items',
  robots: 'index, follow',
  canonical: 'https://e-commerce-store.com/products',
  alternates: {
    canonical: 'https://e-commerce-store.com/products',
  },
  openGraph: {
    title: 'Products | E-Commerce Store - Shop Quality Items',
    description: 'Browse our wide selection of products including electronics, clothing, books, and more.',
    type: 'website',
    url: 'https://e-commerce-store.com/products',
    siteName: 'E-Commerce Store',
    images: [
      {
        url: 'https://e-commerce-store.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Store - Shop Quality Items',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | E-Commerce Store',
    description: 'Browse our wide selection of products and find great deals.',
    images: ['https://e-commerce-store.com/twitter-image.png'],
  },
};

export default function ProductsLayout({ children }) {
  return (
    <>
      {/* JSON-LD Schema Markup - helps Google understand the page structure */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Products',
            description: 'Browse our wide selection of products',
            url: 'https://e-commerce-store.com/products',
            mainEntity: {
              '@type': 'Organization',
              name: 'E-Commerce Store',
              url: 'https://e-commerce-store.com',
              logo: 'https://e-commerce-store.com/logo.svg',
            },
          }),
        }}
      />
      {children}
    </>
  );
}
