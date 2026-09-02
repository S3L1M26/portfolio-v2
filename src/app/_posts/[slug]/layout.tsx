import { postsConfig } from "@/config/posts";

export async function generateStaticParams() {
  return postsConfig.posts.map((post) => ({
    slug: post.slug.replace('posts/', ''),
  }));
}

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 