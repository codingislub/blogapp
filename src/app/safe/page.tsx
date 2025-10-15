import { BlogFooter } from "@/components/home/blog-footer";
import HeroSection from "@/components/home/hero-section";
import { TopArticlesFallback } from "@/components/home/top-articles-fallback";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const SafePage = () => {
  return (
    <main>
      <HeroSection />
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900/30 px-6 py-2 text-sm font-medium text-teal-700 dark:text-teal-300 mb-6">
              ✨ Handpicked Content
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Dive into our carefully curated collection of the most insightful and trending tech content
            </p>
          </div>

          {/* Static Articles */}
          <TopArticlesFallback />

          <div className="mt-16 text-center">
            <Link href="/articles">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explore All Articles
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
};

export default SafePage;