import './globals.css';
import MainLayout from './components/layout/MainLayout';

export const metadata = {
  metadataBase: new URL('https://e-commerce-store.com'),
  title: 'E-Commerce Store - Quality Products at Great Prices',
  description: 'Browse and purchase quality products from our online store. Shop electronics, clothing, and more with fast shipping and secure checkout. Discover thousands of items.',
  keywords: 'e-commerce, shopping, products, store, online retail, buy online, quality items',
  authors: [{ name: 'E-Commerce Store' }],
  creator: 'E-Commerce Store',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://e-commerce-store.com',
    siteName: 'E-Commerce Store',
    title: 'E-Commerce Store - Quality Products at Great Prices',
    description: 'Browse and purchase quality products from our online store.',
    images: [
      {
        url: 'https://e-commerce-store.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'E-Commerce Store - Shop Quality Items',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecommerce_store',
    creator: '@ecommerce_store',
    title: 'E-Commerce Store - Quality Products at Great Prices',
    description: 'Browse and purchase quality products from our online store.',
    images: ['https://e-commerce-store.com/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://e-commerce-store.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#007bff" />

        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fakestoreapi.com" />

        {/* JSON-LD Schema Markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'E-Commerce Store',
              url: 'https://e-commerce-store.com',
              description: 'Quality products at great prices',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://e-commerce-store.com/products?search={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
      </head>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
