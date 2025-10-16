import { BlogFooter } from "@/components/home/blog-footer";
import HeroSection from "@/components/home/hero-section";
import { TopArticles } from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Suspense } from "react";

const page = async () => {
  return (
    <main>
      <HeroSection />
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-teal-100 dark:bg-teal-900/30 px-6 py-2 text-sm font-medium text-teal-700 dark:text-teal-300 mb-6">
              ✨ Handpicked Content automation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              Dive into our carefully curated collection of the most insightful and trending tech content
            </p>
          </div>

          {/* Top Articles */}
          <Suspense fallback={<h1>Loading....</h1>}>
            <TopArticles/>
          </Suspense>

          <div className="mt-16 text-center">
            <Link href={"/articles"}>
              <Button
                size="lg" 
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 px-12 py-6 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View All Articles
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </main>
  );
};

export default page;
