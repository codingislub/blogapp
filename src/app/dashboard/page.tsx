import { BlogDashboard } from '@/components/dashboard/dashboard-page'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - TechVerse",
  description: "Manage your TechVerse blog content, articles, and analytics.",
};

const page = () => {
  return (
    <div>
        <BlogDashboard/>
    </div>
  )
}

export default page