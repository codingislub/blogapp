import { NextResponse } from 'next/server'
import nextPackage from 'next/package.json'

export async function GET() {
  try {
    // Test basic server functionality
    const testData = {
      status: 'minimal-test-ok',
      timestamp: new Date().toISOString(),
      nodeVersion: process.version,
      platform: process.platform,
      environment: {
        NODE_ENV: process.env.NODE_ENV,
        VERCEL: !!process.env.VERCEL,
        VERCEL_ENV: process.env.VERCEL_ENV,
        nextjsVersion: nextPackage.version,
      },
      clerkTest: {
        publishableKey: !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        secretKey: !!process.env.CLERK_SECRET_KEY,
      },
      memory: process.memoryUsage(),
    }

    return NextResponse.json(testData)
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : String(error),
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 })
  }
}