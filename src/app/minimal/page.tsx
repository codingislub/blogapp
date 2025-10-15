// This page bypasses the main layout to test basic Next.js functionality
export default function MinimalTest() {
  return (
    <html>
      <head>
        <title>Minimal Test Page</title>
      </head>
      <body style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>🧪 Minimal Test Page</h1>
        <p>If you can see this page, Next.js basic functionality is working.</p>
        <p>Current time: {new Date().toISOString()}</p>
        <p>This page bypasses the main layout and Clerk components.</p>
        
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}>
          <h3>Test Results:</h3>
          <p>✅ Next.js Server Components: Working</p>
          <p>✅ Basic HTML rendering: Working</p>
          <p>✅ No layout dependencies: Working</p>
        </div>

        <div style={{ marginTop: '20px' }}>
          <h3>Environment Info:</h3>
          <p>NODE_ENV: {process.env.NODE_ENV || 'undefined'}</p>
          <p>VERCEL: {process.env.VERCEL || 'false'}</p>
          <p>Database URL exists: {process.env.DATABASE_URL ? 'true' : 'false'}</p>
        </div>
      </body>
    </html>
  )
}