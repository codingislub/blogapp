import { Navbar } from "@/components/home/header/navbar";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import React from "react";

// Force dynamic rendering for this layout
export const dynamic = 'force-dynamic';

const layout = async ({ children }: { children: React.ReactNode }) => {
  try {
    const user = await currentUser();
    
    // If user is authenticated, ensure they exist in database
    if (user) {
      const loggedInUser = await prisma.user.findUnique({
        where: { clerkUserId: user.id },
      });
      
      if (!loggedInUser) {
        await prisma.user.create({
          data: {
            name: `${user.fullName} ${user.lastName}`,
            clerkUserId: user.id,
            email: user.emailAddresses[0].emailAddress,
            imageUrl: user.imageUrl,
          },
        });
      }
    }
  } catch (error) {
    console.error('Database error in layout:', error);
    // Continue rendering even if database operations fail
  }
  
  // Always render the layout, regardless of authentication status
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
