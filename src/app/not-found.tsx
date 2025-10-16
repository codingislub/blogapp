'use client'

export default function NotFound() {
  return (
    <html lang="en">
      <head>
        <title>404 - Page Not Found</title>
      </head>
      <body>
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold', color: '#dc3545', marginBottom: '1rem' }}>
              404
            </h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Page Not Found
            </h2>
            <p style={{ color: '#6c757d', marginBottom: '2rem' }}>
              The page you are looking for does not exist.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              style={{
                display: 'inline-block',
                padding: '0.5rem 1rem',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '0.375rem',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              Go back home
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}