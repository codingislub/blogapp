'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  console.error('Global error:', error)
  
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold text-red-600 mb-4">
              Application Error
            </h2>
            <p className="text-gray-600 mb-4">
              Something went wrong. Please try again.
            </p>
            {process.env.NODE_ENV === 'development' && (
              <details className="mb-4">
                <summary className="cursor-pointer text-sm text-gray-500">
                  Error Details (Development Only)
                </summary>
                <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
                  {error.message}
                  {error.stack}
                </pre>
              </details>
            )}
            <button
              onClick={() => reset()}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}