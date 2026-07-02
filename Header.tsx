"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";

const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes))).sort((a, b) => a - b);
const allColors = Array.from(new Set(products.flatMap((p) => p.colors.map((c) => c.name))));

export default function CatalogPage() {
  return (
    <Suspense fallback={null}>
      <CatalogContent />
    </Suspense>
  );
}

function CatalogContent() {
  const searchParams = useSearchParams();
  const { wishlist } = useWishlist();

  const [category, setCategory] = useState(searchParams.get("categoria") || "todos");
  const [size, setSize] = useState<number | null>(null);
  const [color, setColor] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState(320);
  const [search, setSearch] = useState(searchParams.get("buscar") || "");
  const showWishlistOnly = searchParams.get("wishlist") === "1";

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (showWishlistOnly && !wishlist.includes(p.slug)) return false;
      if (category !== "todos" && p.category !== category) return false;
      if (size && !p.sizes.includes(size)) return false;
      if (color && !p.colors.some((c) => c.name === color)) return false;
      if (p.price > maxPrice) return false;
      if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false;
      return true;
    });
  }, [category, size, color, maxPrice, search, showWishlistOnly, wishlist]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-galver-red">
          {showWishlistOnly ? "Tu lista de deseos" : "Catálogo"}
        </span>
        <h1 className="mt-2 text-4xl font-extrabold">
          {showWishlistOnly ? "Guardado para después" : "Zapatillas de cuero premium Galver"}
        </h1>
        <p className="mt-2 max-w-2xl text-current/60">
          Explora nuestra colección de zapatillas urbanas y la nueva línea deportiva Galver FC, fabricadas en cuero legítimo peruano.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
        {/* FILTROS */}
        <aside className="space-y-8">
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar modelo..."
              className="w-full rounded-lg border border-black/10 bg-transparent px-3 py-2 text-sm outline-none focus:border-galver-red dark:border-white/15"
            />
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Categoría</h3>
            <div className="flex flex-col gap-2 text-sm">
              {[
                { id: "todos", label: "Todos" },
                { id: "urbano", label: "Línea Urbana" },
                { id: "galver-fc", label: "Galver FC" },
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setCategory(c.id)}
                  className={`rounded-lg px-3 py-1.5 text-left transition-colors ${
                    category === c.id ? "bg-galver-red text-white" : "hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Talla</h3>
            <div className="flex flex-wrap gap-2">
              {allSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(size === s ? null : s)}
                  className={`h-9 w-9 rounded-full border text-xs font-semibold transition-colors ${
                    size === s
                      ? "border-galver-red bg-galver-red text-white"
                      : "border-black/10 hover:border-galver-red dark:border-white/15"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Color</h3>
            <div className="flex flex-col gap-2 text-sm">
              {allColors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(color === c ? null : c)}
                  className={`rounded-lg px-3 py-1.5 text-left transition-colors ${
                    color === c ? "bg-galver-red text-white" : "hover:bg-black/5 dark:hover:bg-white/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wide">Precio máximo: S/ {maxPrice}</h3>
            <input
              type="range"
              min={200}
              max={320}
              step={10}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-full accent-galver-red"
            />
          </div>
        </aside>

        {/* GRID */}
        <div>
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-current/60">No encontramos productos con esos filtros.</p>
          ) : (
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {filtered.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
