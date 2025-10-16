'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { env } from '@/lib/env';

type ClerkComponents = {
  SignedIn: React.ComponentType<{ children: React.ReactNode }>;
  SignedOut: React.ComponentType<{ children: React.ReactNode }>;
  SignInButton: React.ComponentType<{ children: React.ReactNode }>;
  SignUpButton: React.ComponentType<{ children: React.ReactNode }>;
  UserButton: React.ComponentType<{ afterSignOutUrl?: string }>;
};

export function AuthButtons() {
  const [clerkComponents, setClerkComponents] = React.useState<ClerkComponents | null>(null);
  
  React.useEffect(() => {
    if (env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
      import('@clerk/nextjs').then((clerk) => {
        setClerkComponents(clerk as ClerkComponents);
      });
    }
  }, []);
  
  if (!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !clerkComponents) {
    return null;
  }
  
  const { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } = clerkComponents;
  
  return (
    <>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <div className="hidden md:flex items-center gap-2">
          <SignInButton>
            <Button variant="outline">Login</Button>
          </SignInButton>
          <SignUpButton>
            <Button>Sign up</Button>
          </SignUpButton>
        </div>
      </SignedOut>
    </>
  );
}

export function MobileAuthButtons() {
  const [clerkComponents, setClerkComponents] = React.useState<ClerkComponents | null>(null);
  
  React.useEffect(() => {
    if (env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) {
      import('@clerk/nextjs').then((clerk) => {
        setClerkComponents(clerk as ClerkComponents);
      });
    }
  }, []);
  
  if (!env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || !clerkComponents) {
    return null;
  }
  
  const { SignedOut, SignInButton, SignUpButton } = clerkComponents;
  
  return (
    <SignedOut>
      <div className="px-4 flex flex-col gap-2">
        <SignInButton>
          <Button variant="outline" className="w-full">
            Login
          </Button>
        </SignInButton>
        <SignUpButton>
          <Button className="w-full">Sign up</Button>
        </SignUpButton>
      </div>
    </SignedOut>
  );
}