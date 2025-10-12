import { Navbar } from "@/components/home/header/navbar";
import { BlogFooter } from "@/components/home/blog-footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

type TutorialDetailProps = {
  params: Promise<{ id: string }>;
};

const tutorialData = {
  "1": {
    title: "Getting Started with Next.js 15",
    description: "Learn the fundamentals of Next.js 15 and build your first modern web application.",
    category: "Web Development",
    difficulty: "Beginner",
    duration: "45 min",
    author: "John Doe",
    content: `
      <h2>Introduction</h2>
      <p>Next.js 15 brings exciting new features and improvements to the React framework ecosystem. In this tutorial, we'll cover the basics and help you build your first application.</p>
      
      <h3>What You'll Learn</h3>
      <ul>
        <li>Setting up a new Next.js 15 project</li>
        <li>Understanding the App Router</li>
        <li>Creating pages and layouts</li>
        <li>Working with components</li>
        <li>Styling with Tailwind CSS</li>
      </ul>
      
      <h3>Prerequisites</h3>
      <p>Before starting this tutorial, you should have:</p>
      <ul>
        <li>Basic knowledge of HTML, CSS, and JavaScript</li>
        <li>Familiarity with React (recommended)</li>
        <li>Node.js installed on your computer</li>
      </ul>
      
      <h3>Step 1: Create a New Next.js Project</h3>
      <p>Let's start by creating a new Next.js project using the create-next-app command:</p>
      <pre><code>npx create-next-app@latest my-app --typescript --tailwind --eslint</code></pre>
      
      <h3>Step 2: Explore the Project Structure</h3>
      <p>After creating the project, you'll see the following structure:</p>
      <pre><code>my-app/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
└── next.config.js</code></pre>
      
      <h3>Step 3: Create Your First Component</h3>
      <p>Let's create a simple component to display a welcome message.</p>
      
      <h3>Conclusion</h3>
      <p>Congratulations! You've successfully created your first Next.js 15 application. Continue exploring the framework's features to build amazing web applications.</p>
    `,
  },
  // Add more tutorials as needed
};

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

export default async function TutorialDetailPage({ params }: TutorialDetailProps) {
  const { id } = await params;
  const tutorial = tutorialData[id as keyof typeof tutorialData];

  if (!tutorial) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground">Tutorial Not Found</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              The tutorial you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/tutorials">
              <Button className="mt-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Tutorials
              </Button>
            </Link>
          </div>
        </main>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/tutorials">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Tutorials
            </Button>
          </Link>
        </div>

        <article className="mx-auto max-w-4xl">
          {/* Tutorial Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge className="bg-primary/10 text-primary">{tutorial.category}</Badge>
              <Badge className={getDifficultyColor(tutorial.difficulty)}>
                {tutorial.difficulty}
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
              {tutorial.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-6">
              {tutorial.description}
            </p>

            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{tutorial.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{tutorial.duration}</span>
              </div>
            </div>
          </header>

          {/* Tutorial Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                Tutorial Content
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: tutorial.content }}
              />
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>What&apos;s Next?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Great job completing this tutorial! Here are some recommended next steps:
              </p>
              <div className="flex gap-4">
                <Link href="/tutorials">
                  <Button variant="outline">More Tutorials</Button>
                </Link>
                <Link href="/articles">
                  <Button>Read Articles</Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <BlogFooter />
    </div>
  );
}