"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative min-h-[700px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-emerald-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-400/8 to-emerald-400/8 rounded-full blur-2xl animate-pulse delay-500" />
      </div>

      <div className="container relative mx-auto flex h-full flex-col items-center justify-center px-4 py-32 md:flex-row md:py-40">
        {/* Content */}
        <div className="flex-1 space-y-8 text-center md:text-left max-w-3xl">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300 ring-1 ring-teal-500/20">
              🚀 Welcome to the Future of Tech Writing
            </div>
            
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
              Discover{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Innovation
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full"></div>
              </span>
              <br />
              Through Knowledge
            </h1>
          </div>

          <p className="mx-auto max-w-2xl text-xl text-slate-300 leading-relaxed md:text-2xl">
            Dive deep into cutting-edge technology, innovative solutions, and expert insights that shape tomorrow&apos;s digital landscape.
          </p>

          <div className="flex flex-col items-center gap-6 sm:flex-row md:justify-start">
            <Button size="lg" className="group relative overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 px-12 py-6 text-lg font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 hover:-translate-y-1">
              <span className="relative z-10">Explore Articles</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-emerald-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2 border-teal-400/30 px-12 py-6 text-lg font-semibold text-teal-300 backdrop-blur-sm transition-all duration-300 hover:border-teal-400 hover:bg-teal-400/10 hover:text-white"
            >
              Join Community
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 text-white">
            <div className="space-y-3 text-center md:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">2.5K+</div>
              <div className="text-sm text-slate-400 font-medium">Tech Articles</div>
            </div>
            <div className="space-y-3 text-center md:text-left">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">100+</div>
              <div className="text-sm text-slate-400 font-medium">Expert Authors</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">10M+</div>
              <div className="text-sm text-gray-400">Monthly Readers</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex-1 md:mt-0">
          <div
            className={cn(
              "relative mx-auto h-64 w-64 rounded-2xl overflow-hidden",
              "bg-gradient-to-br from-white/5 to-transparent",
              "border border-primary/20 backdrop-blur-lg",
              "shadow-2xl shadow-indigo-500/10"
            )}
          >
            <Image
              src="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Illustration for the blog"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
