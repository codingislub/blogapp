import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { checkEnvironmentVariables, logDatabaseConnection } from "@/lib/debug";

// Force dynamic rendering for the entire app to handle Clerk SSR issues
export const dynamic = 'force-dynamic';

// Debug environment variables on server start
if (typeof window === 'undefined') {
  console.log('=== SERVER STARTUP DEBUG ===')
  checkEnvironmentVariables()
  logDatabaseConnection()
  console.log('NODE_ENV:', process.env.NODE_ENV)
  console.log('===============================')
}
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechVerse - Explore the Future of Technology",
  description: "Discover cutting-edge technology, programming insights, and expert perspectives on innovation. Join TechVerse community of developers and tech enthusiasts.",
  icons: {
    icon: "/emerald-logo.svg",
    apple: "/emerald-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Ensure Clerk environment variables are available
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  
  if (!clerkPublishableKey) {
    console.error('Missing NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY');
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/emerald-logo.svg" type="image/svg+xml" />
          <link rel="shortcut icon" href="/emerald-logo.svg" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Configuration Error</h1>
            <p>Missing authentication configuration. Please check environment variables.</p>
            {children}
          </div>
        </body>
      </html>
    );
  }

  try {
    return (
      <ClerkProvider publishableKey={clerkPublishableKey}>
        <html lang="en" suppressHydrationWarning>
          <head>
            <link rel="icon" href="/emerald-logo.svg" type="image/svg+xml" />
            <link rel="shortcut icon" href="/emerald-logo.svg" />
          </head>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            > 
              <div>{children}</div>
            </ThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    );
  } catch (error) {
    console.error('Layout error:', error)
    
    // Fallback layout without Clerk
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" href="/emerald-logo.svg" type="image/svg+xml" />
          <link rel="shortcut icon" href="/emerald-logo.svg" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Authentication Service Error</h1>
            <p>There was an issue initializing the authentication system.</p>
            <details>
              <summary>Error Details</summary>
              <pre>{error instanceof Error ? error.message : String(error)}</pre>
            </details>
            {children}
          </div>
        </body>
      </html>
    );
  }
}
