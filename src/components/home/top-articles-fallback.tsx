import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function TopArticlesFallback() {
  // Static fallback articles when database is unavailable
  const fallbackArticles = [
    {
      id: 'fallback-1',
      title: 'Getting Started with Next.js',
      content: 'Learn the basics of Next.js development and modern React patterns.',
      category: 'Web Development',
      featuredImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500',
      createdAt: new Date().toISOString(),
      author: {
        name: 'Demo Author',
        email: 'demo@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
      },
      comments: []
    },
    {
      id: 'fallback-2',
      title: 'Modern CSS Techniques',
      content: 'Explore modern CSS features and how to use them in your projects.',
      category: 'CSS',
      featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500',
      createdAt: new Date().toISOString(),
      author: {
        name: 'Demo Author',
        email: 'demo@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
      },
      comments: []
    },
    {
      id: 'fallback-3',
      title: 'JavaScript Best Practices',
      content: 'Learn JavaScript best practices for modern web development.',
      category: 'JavaScript',
      featuredImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500',
      createdAt: new Date().toISOString(),
      author: {
        name: 'Demo Author',
        email: 'demo@example.com',
        imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
      },
      comments: []
    }
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      <div className="col-span-full bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-4">
        <p className="text-yellow-800 dark:text-yellow-200 text-sm">
          ⚠️ Database connection unavailable. Showing demo content.
        </p>
      </div>
      {fallbackArticles.map((article, index) => (
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
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full">
                  {article.category}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Demo Content
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3">
                {article.content}
              </p>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white text-xs font-bold">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {article.author.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Demo Author
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
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
  )
}