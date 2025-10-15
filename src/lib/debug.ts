// Debug utility to check environment variables
export function checkEnvironmentVariables() {
  const requiredVars = [
    'DATABASE_URL',
    'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
    'CLERK_SECRET_KEY',
    'CLOUDINARY_CLOUD_NAME',
    'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET'
  ]

  const missing = []
  const present = []

  for (const varName of requiredVars) {
    if (process.env[varName]) {
      present.push(varName)
    } else {
      missing.push(varName)
    }
  }

  console.log('Environment Variables Check:')
  console.log('✅ Present:', present)
  console.log('❌ Missing:', missing)
  
  if (missing.length > 0) {
    console.error('Missing required environment variables!')
    return false
  }
  
  return true
}

export function logDatabaseConnection() {
  if (process.env.DATABASE_URL) {
    const url = new URL(process.env.DATABASE_URL)
    console.log('Database connection info:')
    console.log('- Host:', url.hostname)
    console.log('- Port:', url.port)
    console.log('- Database:', url.pathname.slice(1))
    console.log('- SSL:', url.searchParams.get('sslmode'))
  } else {
    console.error('DATABASE_URL not found!')
  }
}