"use client";
import { useState } from "react";
import { postsConfig } from "@/config/posts";
import PostsSearch from "./PostsSearch";
import PostCard from "@/components/PostCard";

const POSTS_PER_PAGE = 5;

export default function PostsContent() {
  const totalPages = Math.ceil(postsConfig.posts.length / POSTS_PER_PAGE);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = postsConfig.posts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  return (
    <section className="relative z-20 w-[896px] mx-auto mt-32 mb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl lg:text-4xl">
          {postsConfig.title}
        </h2>
        {/* <div className="relative">
          <input
            type="text"
            placeholder={postsConfig.searchPlaceholder}
            className="w-64 px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
          />
          <svg
            className="absolute right-3 top-2.5 w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              stroke="currentColor"
              className="text-neutral-600 dark:text-neutral-400"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div> */}
      </div>

      <div className="flex flex-col items-stretch w-full gap-5">
        {currentPosts.map((post, index) => (
          <PostCard
            key={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            href={`/${post.slug}`}
            pattern="dots"
            imageUrl={post.image}
            readingTime={parseInt(post.readTime)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            className={`px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {postsConfig.pagination.previous}
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              aria-current={index + 1 === currentPage ? "page" : undefined}
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                index + 1 === currentPage
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
                  : "text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            className={`px-3 py-1 text-sm font-medium text-neutral-600 dark:text-neutral-400 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {postsConfig.pagination.next}
          </button>
        </div>
      )}

      <PostsSearch />
    </section>
  );
} 