import { CreateArticlePage } from '@/components/articles/create-articles-page'
import React from 'react'

// Force dynamic rendering to prevent prerendering during build
export const dynamic = 'force-dynamic';

const page = () => {
  return (
    <div>
        <CreateArticlePage/>
    </div>
  )
}

export default page