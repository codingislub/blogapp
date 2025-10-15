import { FileText, MessageCircle, PlusCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import RecentArticles from "./recent-articles";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

export async function BlogDashboard() {
  try {
    console.log('Dashboard: Attempting to fetch data...')
    console.log('Dashboard: Database URL exists:', !!process.env.DATABASE_URL)
    
    const [articles, totalComments] = await Promise.all([
      prisma.articles.findMany({
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
      }),
      prisma.comment.count(),
    ]);

    console.log('Dashboard: Successfully fetched data')

    return (
      <main className="flex-1 p-4 md:p-8">{/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your content and analytics
          </p>
        </div>
        <Link href={"/dashboard/articles/create"}>
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            New Article
          </Button>
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Articles
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{articles.length}</div> 
            <p className="text-xs text-muted-foreground mt-1">
              +5 from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Comments
            </CardTitle>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalComments}</div>
            <p className="text-xs text-muted-foreground mt-1">
              12 awaiting moderation
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Avg. Reading Time
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.2m</div>
            <p className="text-xs text-muted-foreground mt-1">
              +0.8m from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Articles */}
      <RecentArticles articles={articles} />
    </main>
    );
  } catch (error) {
    console.error('Dashboard: Database connection error:', error)
    
    return (
      <main className="flex-1 p-4 md:p-8">
        <div className="text-center py-12">
          <h3 className="text-lg font-medium text-red-600">Unable to load dashboard</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Database connection failed. Please check your environment variables.
          </p>
          <details className="mt-4 text-left max-w-md mx-auto">
            <summary className="cursor-pointer text-sm text-gray-500">
              Error Details
            </summary>
            <pre className="mt-2 text-xs bg-gray-100 p-2 rounded overflow-auto">
              {error instanceof Error ? error.message : String(error)}
            </pre>
          </details>
        </div>
      </main>
    );
  }
}
