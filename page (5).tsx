import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/testimonials";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [{ url: post.cover }] },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Link href="/blog" className="text-xs font-semibold text-galver-red hover:underline">← Volver al blog</Link>
      <p className="mt-4 text-xs text-current/50">
        {new Date(post.date).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime} de lectura
      </p>
      <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{post.title}</h1>

      <div className="relative mt-8 h-72 overflow-hidden rounded-2xl sm:h-96">
        <Image src={post.cover} alt={post.title} fill className="object-cover" priority />
      </div>

      <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert">
        {post.content.map((paragraph, i) => (
          <p key={i} className="mb-5 leading-relaxed text-current/80">{paragraph}</p>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-16 border-t border-black/10 pt-10 dark:border-white/10">
          <h2 className="text-lg font-bold">Sigue leyendo</h2>
          <div className="mt-4 flex flex-col gap-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="text-sm font-semibold text-galver-red hover:underline">
                {p.title} →
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
