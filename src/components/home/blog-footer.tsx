import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

export function BlogFooter() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Branding Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <h2 className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                  TechVerse
                </span>
              </h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-md">
              Empowering developers and tech enthusiasts with cutting-edge insights, 
              tutorials, and industry trends that shape the future of technology.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
              <div className="flex gap-3 max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-400 focus:border-teal-500 focus:ring-teal-500"
                  />
                </div>
                <Button className="bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-600 hover:to-emerald-700 text-white font-medium px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Explore</h3>
            <ul className="space-y-4">
              <li><Link href="/articles" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                All Articles
              </Link></li>
              <li><Link href="/tutorials" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Tutorials
              </Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </Link></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Community
              </a></li>
            </ul>
          </div>

          {/* Resources & Social */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Support
              </a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Contact
              </a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Privacy Policy
              </a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors duration-200 flex items-center gap-2 group">
                <span className="w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Terms of Service
              </a></li>
            </ul>
            
            {/* Social Links */}
            <div className="pt-4">
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-400 hover:bg-teal-500/10 transition-colors duration-200">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-400 hover:bg-teal-500/10 transition-colors duration-200">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-teal-400 hover:bg-teal-500/10 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-300 hover:text-teal-400 transition-colors">Licenses</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4 md:col-span-2 lg:col-span-2">
            <h3 className="text-lg font-semibold text-foreground">Stay Updated</h3>
            <form className="flex flex-col gap-4">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="pl-10 pr-4 py-6"
                />
                <Mail className="h-5 w-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              <Button 
                type="submit" 
                className="w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} TechVerse. Crafted with ❤️ for the developer community.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>&copy; 2025 TechVerse. All rights reserved.</span>
              <span>•</span>
              <span>Made with Next.js</span>
              <span>•</span>
              <span>Powered by Innovation</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}