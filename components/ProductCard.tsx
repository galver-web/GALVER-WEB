"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Product } from "@/data/products";
import { formatPrice } from "@/lib/site";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product }: { product: Product }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.slug);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-neutral-900">
      <Link href={`/catalogo/${product.slug}`} className="relative block aspect-square overflow-hidden bg-galver-gray-light dark:bg-neutral-800">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.compareAtPrice && (
          <span className="absolute left-3 top-3 rounded-full bg-galver-red px-2.5 py-1 text-xs font-bold text-white">
            OFERTA
          </span>
        )}
      </Link>

      <button
        onClick={() => toggleWishlist(product.slug)}
        aria-label="Agregar a lista de deseos"
        className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-galver-black shadow transition-transform hover:scale-110 dark:bg-black/70 dark:text-white"
      >
        <Heart size={16} className={wishlisted ? "fill-galver-red text-galver-red" : ""} />
      </button>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-galver-red">
          {product.category === "galver-fc" ? "Galver FC" : "Línea Urbana"}
        </span>
        <Link href={`/catalogo/${product.slug}`} className="font-semibold leading-snug hover:text-galver-red">
          {product.name}
        </Link>
        <p className="line-clamp-2 text-xs text-current/60">{product.shortDescription}</p>
        <div className="mt-2 flex items-center gap-2">
          <span className="font-bold">{formatPrice(product.price)}</span>
          {product.compareAtPrice && (
            <span className="text-sm text-current/40 line-through">{formatPrice(product.compareAtPrice)}</span>
          )}
        </div>
        <Link
          href={`/catalogo/${product.slug}`}
          className="mt-3 rounded-full bg-galver-black py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-galver-red dark:bg-white dark:text-galver-black dark:hover:bg-galver-red dark:hover:text-white"
        >
          Ver producto
        </Link>
      </div>
    </div>
  );
}
