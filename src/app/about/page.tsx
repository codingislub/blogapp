import { Navbar } from "@/components/home/header/navbar";
import { BlogFooter } from "@/components/home/blog-footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Twitter, Linkedin, Mail, Users, BookOpen, Award, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - TechVerse",
  description: "Learn about TechVerse, our mission, team, and commitment to sharing technology insights and innovation.",
};

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & Lead Developer",
    bio: "Passionate full-stack developer with 8+ years of experience in modern web technologies.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Jane Smith",
    role: "Content Manager",
    bio: "Technical writer and educator who loves making complex topics accessible to everyone.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616c7b31a1e?w=150&h=150&fit=crop&crop=face",
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Mike Johnson",
    role: "Community Manager",
    bio: "Building and nurturing our developer community with a focus on collaboration and learning.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    social: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
];

const stats = [
  {
    icon: Users,
    label: "Active Readers",
    value: "10,000+",
    description: "Monthly active readers from around the world",
  },
  {
    icon: BookOpen,
    label: "Articles Published",
    value: "500+",
    description: "High-quality articles and tutorials",
  },
  {
    icon: Award,
    label: "Expert Authors",
    value: "50+",
    description: "Industry professionals and thought leaders",
  },
  {
    icon: Heart,
    label: "Community Love",
    value: "5,000+",
    description: "Hearts and positive feedback from readers",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About TechVerse
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We&apos;re on a mission to make programming knowledge accessible to everyone. 
            Through high-quality articles, tutorials, and community discussions, we help 
            developers at all levels grow their skills and advance their careers.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                To democratize programming education by providing clear, practical, and 
                up-to-date content that empowers developers to build amazing things and 
                solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  <CardDescription className="font-medium">{stat.label}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-2">
                    <a href={member.social.github} className="text-muted-foreground hover:text-foreground">
                      <Github className="h-5 w-5" />
                    </a>
                    <a href={member.social.twitter} className="text-muted-foreground hover:text-foreground">
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-foreground">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Quality First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We believe in publishing only high-quality, well-researched content 
                  that provides real value to our readers.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our community of developers, writers, and learners is at the heart 
                  of everything we do.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Continuous Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Technology evolves rapidly, and we&apos;re committed to staying current 
                  and helping others learn new skills.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <Card className="mx-auto max-w-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Get In Touch</CardTitle>
              <CardDescription>
                Have questions, suggestions, or want to contribute? We&apos;d love to hear from you!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:contact@techverse.dev"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
                >
                  <Mail className="h-4 w-4" />
                  Contact Us
                </a>
                <a
                  href="/dashboard/articles/create"
                  className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                >
                  <BookOpen className="h-4 w-4" />
                  Write for Us
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <BlogFooter />
    </div>
  );
}