import { Navbar } from "@/components/home/header/navbar";
import { BlogFooter } from "@/components/home/blog-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorials - TechVerse",
  description: "Learn with our comprehensive tutorials covering modern web development, programming, and technology trends.",
};

const tutorials = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    description: "Learn the fundamentals of Next.js 15 and build your first modern web application.",
    category: "Web Development",
    difficulty: "Beginner",
    duration: "45 min",
    author: "John Doe",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    description: "Master advanced React patterns including render props, higher-order components, and custom hooks.",
    category: "React",
    difficulty: "Advanced",
    duration: "60 min",
    author: "Jane Smith",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "TypeScript Best Practices",
    description: "Discover TypeScript best practices and how to write type-safe, maintainable code.",
    category: "TypeScript",
    difficulty: "Intermediate",
    duration: "35 min",
    author: "Mike Johnson",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Database Design with Prisma",
    description: "Learn how to design and manage databases effectively using Prisma ORM.",
    category: "Database",
    difficulty: "Intermediate",
    duration: "50 min",
    author: "Sarah Wilson",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Deployment with Vercel",
    description: "Deploy your Next.js applications to production using Vercel platform.",
    category: "DevOps",
    difficulty: "Beginner",
    duration: "25 min",
    author: "Alex Chen",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=500&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "Authentication with Clerk",
    description: "Implement secure authentication in your applications using Clerk.",
    category: "Security",
    difficulty: "Intermediate",
    duration: "40 min",
    author: "Emily Davis",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&auto=format&fit=crop&q=60",
  },
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    case "Advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Tutorials
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Step-by-step guides to help you master modern web development
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="group overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={tutorial.image}
                  alt={tutorial.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getDifficultyColor(tutorial.difficulty)}>
                    {tutorial.difficulty}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                    {tutorial.category}
                  </span>
                </div>
                <CardTitle className="line-clamp-2">{tutorial.title}</CardTitle>
                <CardDescription className="line-clamp-3">
                  {tutorial.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{tutorial.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  href={`/tutorials/${tutorial.id}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Start Tutorial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="mx-auto max-w-2xl bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
            <CardHeader>
              <CardTitle>Want to Contribute?</CardTitle>
              <CardDescription>
                Share your knowledge by creating tutorials for the community
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/dashboard/articles/create"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Create Tutorial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}