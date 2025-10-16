import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export async function TopArticles() {
  try {
    const articles = await prisma.articles.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        comments: true,
        author: {
          select: {
            name: true,
            email: true,
            imageUrl: true,
          },
        },
      },
    });

    if (articles.length === 0) {
      return (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-muted-foreground">No articles found</h3>
          <p className="text-sm text-muted-foreground mt-2">Check back later for new content!</p>
        </div>
      );
    }

    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {articles.slice(0, 3).map((article, index) => (
        <Card
          key={article.id}
          className={cn(
            "group relative overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl",
            "border-0 bg-white dark:bg-slate-800 shadow-xl",
            "before:absolute before:inset-0 before:bg-gradient-to-br before:from-teal-50 before:to-emerald-50 dark:before:from-slate-800 dark:before:to-slate-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100",
            index === 0 && "md:col-span-2 md:row-span-2",
            index === 1 && "lg:col-start-3 lg:row-start-1",
            index === 2 && "lg:col-start-3 lg:row-start-2"
          )}
        >
          <div className="relative z-10 p-6 h-full flex flex-col">
            <Link href={`/articles/${article.id}`} className="flex-1">
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-flex items-center rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  {article.category}
                </span>
              </div>

              {/* Image Container */}
              <div className={cn(
                "relative mb-6 w-full overflow-hidden rounded-2xl",
                index === 0 ? "h-64" : "h-48"
              )}>
                <Image
                  src={article.featuredImage as string}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Article Title */}
              <h3 className={cn(
                "font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300",
                index === 0 ? "text-2xl mb-4" : "text-xl mb-3"
              )}>
                {article.title}
              </h3>
              
              {/* Article Excerpt */}
              <p className={cn(
                "text-slate-600 dark:text-slate-400 leading-relaxed",
                index === 0 ? "text-base mb-6" : "text-sm mb-4"
              )}>
                {article.content.replace(/<[^>]*>/g, '').substring(0, index === 0 ? 150 : 100)}...
              </p>
            </Link>

            {/* Article Footer */}
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200 dark:border-slate-700">
              {/* Author Info */}
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8 ring-2 ring-teal-100 dark:ring-teal-900">
                  <AvatarImage src={article.author.imageUrl as string} />
                  <AvatarFallback className="bg-gradient-to-br from-teal-500 to-emerald-500 text-white text-xs font-semibold">
                    {article.author.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">{article.author.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{new Date(article.createdAt).toLocaleDateString()}</p>
                </div>
              </div>

              {/* Read Time & Comments */}
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {Math.ceil(article.content.length / 200)} min
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {article.comments.length}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
    );
  } catch (error) {
    console.error('Database connection error:', error);
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-muted-foreground">Unable to load articles</h3>
        <p className="text-sm text-muted-foreground mt-2">Please try refreshing the page</p>
      </div>
    );
  }
}
