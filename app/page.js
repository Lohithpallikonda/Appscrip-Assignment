export default function Home() {
  return (
    <>
      <section style={{ padding: '48px 16px', textAlign: 'center', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '16px', color: '#333333' }}>
            Welcome to E-Commerce Store
          </h1>
          <p style={{ fontSize: '18px', color: '#666666', marginBottom: '24px' }}>
            Discover quality products at great prices
          </p>
          <a
            href="/products"
            style={{
              display: 'inline-block',
              backgroundColor: '#007bff',
              color: '#ffffff',
              padding: '12px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'background-color 200ms ease',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
          >
            Shop Now
          </a>
        </div>
      </section>

      <section style={{ padding: '48px 16px', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '32px', color: '#333333' }}>
            Featured Categories
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {['Electronics', 'Clothing', 'Books', 'Jewelry'].map((category) => (
              <a
                key={category}
                href={`/products?category=${category.toLowerCase()}`}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '24px 16px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  color: '#333333',
                  textAlign: 'center',
                  border: '1px solid #dddddd',
                  transition: 'all 200ms ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>
                  {category}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
