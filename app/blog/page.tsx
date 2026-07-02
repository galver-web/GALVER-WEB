import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Blog Galver — Cuidado del cuero, moda y tendencias",
  description:
    "Tips de cuidado para tus zapatillas de cuero, tendencias de moda urbana y consejos para combinar tu calzado Galver.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <span className="text-xs font-bold uppercase tracking-widest text-galver-red">Blog</span>
      <h1 className="mt-2 text-4xl font-extrabold">Estilo, cuidado y tendencias</h1>
      <p className="mt-2 max-w-xl text-current/60">
        Consejos sobre cuidado del cuero, tendencias de moda urbana y cómo combinar tus zapatillas Galver.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group overflow-hidden rounded-2xl border border-black/5 dark:border-white/10">
            <div className="relative h-56 overflow-hidden">
              <Image
                src={post.cover}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="text-xs text-current/50">
                {new Date(post.date).toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" })} · {post.readTime} de lectura
              </p>
              <h2 className="mt-2 text-lg font-bold leading-snug group-hover:text-galver-red">{post.title}</h2>
              <p className="mt-2 text-sm text-current/60">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
