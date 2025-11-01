import './globals.css';

export const metadata = {
  title: 'E-Commerce Store - Quality Products at Great Prices',
  description: 'Browse and purchase quality products from our online store. Shop electronics, clothing, and more with fast shipping and secure checkout.',
  keywords: 'e-commerce, shopping, products, store, online retail',
  openGraph: {
    title: 'E-Commerce Store',
    description: 'Quality products at great prices',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
