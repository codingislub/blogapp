import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";
import { env } from "@/lib/env";
 
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
  return (
    <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
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
}
