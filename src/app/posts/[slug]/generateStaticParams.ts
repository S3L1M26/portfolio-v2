import { postsConfig } from "@/config/posts";

export async function generateStaticParams() {
  return postsConfig.posts.map((post) => ({
    slug: post.slug.replace('posts/', ''),
  }));
} 