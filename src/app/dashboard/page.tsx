import { BlogDashboard } from '@/components/dashboard/dashboard-page'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - TechVerse",
  description: "Manage your TechVerse blog content, articles, and analytics.",
};

// Force dynamic rendering to prevent prerendering during build
export const dynamic = 'force-dynamic';

const page = () => {
  return (
    <div>
        <BlogDashboard/>
    </div>
  )
}

export default page