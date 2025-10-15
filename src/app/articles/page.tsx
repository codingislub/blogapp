import {
  AllArticlesPage, 
} from "@/components/articles/all-articles-page";
import { AllArticlesPageSkeleton } from "@/components/articles/all-articles-skeleton";
import ArticleSearchInput from "@/components/articles/article-search-input";
import { Button } from "@/components/ui/button";
import React, { Suspense } from "react";
import { fetchArticleByQuery } from "@/lib/query/fetch-articles";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles - TechVerse",
  description: "Browse all articles on TechVerse. Discover insights on technology, programming, and innovation.",
};

// Force dynamic rendering to prevent prerendering during build
export const dynamic = 'force-dynamic';

type SearchPageProps = {
  searchParams: Promise<{ search?: string; page?: string }>;
};

const ITEMS_PER_PAGE = 3; // Number of items per page

const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const params = await searchParams;
  const searchText = params.search || "";
  const currentPage = Number(params.page) || 1;
  const skip = (currentPage - 1) * ITEMS_PER_PAGE;
  const take = ITEMS_PER_PAGE;

  const { articles, total } = await fetchArticleByQuery(searchText, skip, take);
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
 

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            All Articles
          </h1>
          {/* Search Bar */}
          <Suspense>
            <ArticleSearchInput />
          </Suspense>
        </div>
        {/* All article page  */}
        <Suspense fallback={<AllArticlesPageSkeleton/>}>
        <AllArticlesPage articles={articles} />
        </Suspense>
        {/* <AllArticlesPageSkeleton/> */}
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {/* Prev Button */}
            {currentPage > 1 ? (
              <Link href={`?search=${searchText}&page=${currentPage - 1}`}>
                <Button variant="ghost" size="sm">
                  ← Prev
                </Button>
              </Link>
            ) : (
              <Button variant="ghost" size="sm" disabled>
                ← Prev
              </Button>
            )}

            {/* Page Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => (
              <Link
                key={index}
                href={`?search=${searchText}&page=${index + 1}`}
              >
                <Button
                  variant={currentPage === index + 1 ? 'destructive' : 'ghost'}
                  size="sm"
                  disabled={currentPage === index + 1}
                >
                  {index + 1}
                </Button>
              </Link>
            ))}

            {/* Next Button */}
            {currentPage < totalPages ? (
              <Link href={`?search=${searchText}&page=${currentPage + 1}`}>
                <Button variant="ghost" size="sm">
                  Next →
                </Button>
              </Link>
            ) : (
              <Button variant="ghost" size="sm" disabled>
                Next →
              </Button>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default page;