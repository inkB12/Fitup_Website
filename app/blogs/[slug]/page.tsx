import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BLOG_POSTS, getBlogBySlug } from "@/lib/blogs";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found | FITUP",
    };
  }

  return {
    title: `${post.title} | FITUP Blog`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <main className="min-h-screen w-full bg-[#1f1f1f] px-6 pb-24 pt-16 text-white">
      <article className="mx-auto max-w-5xl">
        <Link
          href="/blogs"
          className="inline-flex rounded-full border border-zinc-700 px-4 py-2 text-xs font-semibold uppercase tracking-[0.13em] text-zinc-200 transition-colors duration-150 hover:border-[#d68c45] hover:text-[#d68c45]"
        >
          Back To Blogs
        </Link>

        <header className="mt-7">
          <span className="inline-flex rounded-full bg-[#d68c45]/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#d68c45]">
            {post.category}
          </span>
          <h1 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-zinc-300 md:text-lg">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-400">
            <p>{post.author}</p>
            <p>{post.publishedAt}</p>
            <p>{post.readTime}</p>
          </div>
        </header>

        <div className="relative mt-10 h-60 overflow-hidden rounded-3xl md:h-72">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/10" />
        </div>

        <section className="mt-12 space-y-10">
          {post.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-2xl font-extrabold leading-tight text-white md:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-200">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-3xl border border-zinc-800 bg-[#121212] p-6 md:p-8">
          <h3 className="text-lg font-extrabold uppercase tracking-[0.08em] text-[#d68c45]">
            Key Takeaways
          </h3>
          <ul className="mt-4 space-y-3 text-zinc-200">
            {post.keyTakeaways.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-[7px] h-2.5 w-2.5 flex-none rounded-full bg-[#d68c45]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <section className="mx-auto mt-16 max-w-7xl">
        <h3 className="text-2xl font-black uppercase tracking-[0.08em] text-white">
          Related Articles
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {relatedPosts.map((item) => (
            <Link
              key={item.slug}
              href={`/blogs/${item.slug}`}
              className="group overflow-hidden rounded-3xl border border-zinc-800 bg-[#121212] transition-all duration-200 hover:-translate-y-1 hover:border-[#d68c45]/50"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/35" />
              </div>
              <div className="p-5">
                <p className="text-xs text-zinc-400">
                  {item.publishedAt} • {item.readTime}
                </p>
                <h4 className="mt-3 text-lg font-bold leading-snug transition-colors duration-150 group-hover:text-[#d68c45]">
                  {item.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
