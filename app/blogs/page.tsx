import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "Blog | FITUP",
  description: "FITUP insights on AI coaching, training, and nutrition.",
};

const featuredPost = BLOG_POSTS[0];
const gridPosts = BLOG_POSTS.slice(1);

export default function BlogsPage() {
  return (
    <main className="min-h-screen w-full bg-[#1f1f1f] px-6 pb-24 pt-16 text-white">
      <section className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#d68c45]">
            FITUP Journal
          </p>
          <h1 className="mt-4 text-4xl font-black uppercase leading-tight md:text-6xl">
            Blog & Knowledge Hub
          </h1>
          <p className="mt-5 max-w-3xl text-base text-zinc-300 md:text-lg">
            Explore practical content on training, nutrition, recovery, and AI-based coaching.
            Start with one article and apply it this week.
          </p>
        </div>

        <Link
          href={`/blogs/${featuredPost.slug}`}
          className="group mb-8 grid overflow-hidden rounded-3xl border border-zinc-800 bg-[#121212] shadow-[0_16px_50px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-[#d68c45]/50 md:grid-cols-[1.2fr_1fr]"
        >
          <div
            className={`relative min-h-[260px] bg-gradient-to-br ${featuredPost.coverGradient} p-8`}
          >
            <span className="inline-flex rounded-full border border-white/30 bg-black/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
              {featuredPost.category}
            </span>
            <p className="mt-5 text-sm text-white/80">
              {featuredPost.publishedAt} • {featuredPost.readTime}
            </p>
          </div>

          <div className="flex flex-col justify-between p-8">
            <div>
              <h2 className="text-2xl font-extrabold leading-tight transition-colors duration-200 group-hover:text-[#d68c45] md:text-3xl">
                {featuredPost.title}
              </h2>
              <p className="mt-4 text-zinc-300">{featuredPost.excerpt}</p>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-sm text-zinc-400">{featuredPost.author}</p>
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-[#d68c45]">
                Read Article
              </span>
            </div>
          </div>
        </Link>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gridPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#121212] transition-all duration-200 hover:-translate-y-1 hover:border-[#d68c45]/45"
            >
              <div className={`h-44 bg-gradient-to-br ${post.coverGradient} p-5`}>
                <span className="inline-flex rounded-full border border-white/30 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white">
                  {post.category}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs text-zinc-400">
                  {post.publishedAt} • {post.readTime}
                </p>
                <h3 className="mt-3 text-xl font-extrabold leading-tight transition-colors duration-150 group-hover:text-[#d68c45]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-300">{post.excerpt}</p>
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.11em] text-[#d68c45]">
                  Open Post
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
