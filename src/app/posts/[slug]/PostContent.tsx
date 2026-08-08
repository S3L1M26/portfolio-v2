'use client';

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Post {
  title: string;
  description: string;
  date: string;
  readTime: string;
  slug: string;
  image: string;
  html: string;
}

export default function PostContent({ post }: { post: Post }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative flex-grow flex flex-col">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_48px] -z-10"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[1200px] w-[1200px] rounded-full bg-neutral-400 opacity-10 blur-[100px]"></div>
        </div>

        <Navbar />

        <article className="relative z-20 w-[896px] mx-auto mt-32 mb-12">
          <div className="prose dark:prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 mb-8">
              <time>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </article>
      </div>

      <Footer />
    </main>
  );
} 