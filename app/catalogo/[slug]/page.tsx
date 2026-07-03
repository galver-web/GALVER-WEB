"use client";

import { useState } from "react";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { Heart, ShieldCheck, Star, Truck } from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import { formatPrice, whatsappLink } from "@/lib/site";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ProductCard";

const reviews = [
  { name: "Jorge L.", rating: 5, text: "Excelente calidad de cuero, se nota que es peruano y bien hecho." },
  { name: "Andrea P.", rating: 5, text: "Cómodas desde el primer uso, la talla fue justo como la guía indicaba." },
  { name: "Kevin R.", rating: 4, text: "Muy buen acabado, tardó un poco el envío pero valió la pena." },
];

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = getProductBySlug(params.slug);
  const { addItem, setIsOpen } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();

  const [activeImage, setActiveImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [zoom, setZoom] = useState(false);
  const [error, setError] = useState("");

  if (!product) return notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4);

  function handleAddToCart() {
    if (!selectedSize || !selectedColor) {
      setError("Selecciona talla y color antes de continuar.");
      return;
    }
    setError("");
    addItem({
      slug: product!.slug,
      name: product!.name,
      price: product!.price,
      image: product!.images[0],
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* GALERÍA */}
        <div>
          <div
            className="relative aspect-square cursor-zoom-in overflow-hidden rounded-2xl bg-galver-gray-light dark:bg-neutral-900"
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              priority
              className={`object-cover transition-transform duration-300 ${zoom ? "scale-125" : "scale-100"}`}
            />
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img}
                onClick={() => setActiveImage(i)}
                className={`relative h-20 w-20 overflow-hidden rounded-xl border-2 ${
                  activeImage === i ? "border-galver-red" : "border-transparent"
                }`}
              >
                <Image src={img} alt={`${product.name} vista ${i + 1}`} fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-galver-red">
            {product.category === "galver-fc" ? "Galver FC" : "Línea Urbana"}
          </span>
          <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{product.name}</h1>
          <div className="mt-2 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-galver-red text-galver-red" />
            ))}
            <span className="ml-2 text-xs text-current/60">({reviews.length} opiniones)</span>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-3xl font-extrabold">{formatPrice(product.price)}</span>
            {product.promoNote && (
              <span className="text-sm font-semibold text-galver-red">{product.promoNote}</span>
            )}
          </div>

          <p className="mt-6 leading-relaxed text-current/80">{product.description}</p>

          {/* COLOR */}
          <div className="mt-8">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">Color</h3>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  title={c.name}
                  className={`h-9 w-9 rounded-full border-2 ${
                    selectedColor === c.name ? "border-galver-red" : "border-black/10 dark:border-white/20"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* TALLA */}
          <div className="mt-6">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-wide">Talla</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`h-11 w-11 rounded-lg border text-sm font-semibold transition-colors ${
                    selectedSize === s
                      ? "border-galver-red bg-galver-red text-white"
                      : "border-black/10 hover:border-galver-red dark:border-white/15"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <a href="#guia-tallas" className="mt-2 inline-block text-xs font-semibold text-galver-red hover:underline">
              Ver guía de tallas
            </a>
          </div>

          {error && <p className="mt-4 text-sm font-semibold text-galver-red">{error}</p>}

          <div className="mt-8 flex gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 rounded-full bg-galver-black py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-galver-red dark:bg-white dark:text-galver-black"
            >
              Agregar al carrito
            </button>
            <button
              onClick={() => toggleWishlist(product.slug)}
              aria-label="Agregar a lista de deseos"
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/15"
            >
              <Heart size={18} className={isWishlisted(product.slug) ? "fill-galver-red text-galver-red" : ""} />
            </button>
          </div>

          <a
            href={whatsappLink(`Hola Galver, quiero consultar por el modelo ${product.name}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block w-full rounded-full border border-[#25D366] py-3 text-center text-sm font-bold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
          >
            Consultar por WhatsApp
          </a>

          <div className="mt-8 space-y-3 border-t border-black/10 pt-6 text-sm dark:border-white/10">
            <div className="flex items-center gap-2 text-current/70">
              <ShieldCheck size={16} className="text-galver-red" /> Garantía de fábrica incluida
            </div>
            <div className="flex items-center gap-2 text-current/70">
              <Truck size={16} className="text-galver-red" /> Envíos a todo el Perú
            </div>
          </div>
        </div>
      </div>

      {/* MATERIALES Y BENEFICIOS */}
      <div className="mt-20 grid grid-cols-1 gap-10 border-t border-black/10 pt-14 dark:border-white/10 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">Materiales</h2>
          <ul className="mt-4 space-y-2 text-sm text-current/70">
            {product.materials.map((m) => (
              <li key={m} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-galver-red" /> {m}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Beneficios</h2>
          <ul className="mt-4 space-y-2 text-sm text-current/70">
            {product.benefits.map((b) => (
              <li key={b} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-galver-red" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* GUÍA DE TALLAS */}
      <div id="guia-tallas" className="mt-20 border-t border-black/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-bold">Guía de tallas</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[400px] text-left text-sm">
            <thead>
              <tr className="border-b border-black/10 text-current/60 dark:border-white/10">
                <th className="py-2 pr-4">Talla Perú</th>
                <th className="py-2 pr-4">Talla US</th>
                <th className="py-2 pr-4">Largo de pie (cm)</th>
              </tr>
            </thead>
            <tbody>
              {[
                [37, 6, 23.5],
                [38, 7, 24],
                [39, 7.5, 24.5],
                [40, 8, 25.5],
                [41, 8.5, 26],
                [42, 9, 26.5],
                [43, 10, 27.5],
                [44, 10.5, 28],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-black/5 dark:border-white/5">
                  <td className="py-2 pr-4 font-semibold">{row[0]}</td>
                  <td className="py-2 pr-4">{row[1]}</td>
                  <td className="py-2 pr-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* OPINIONES */}
      <div className="mt-20 border-t border-black/10 pt-14 dark:border-white/10">
        <h2 className="text-xl font-bold">Opiniones de clientes</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-xl border border-black/5 p-5 dark:border-white/10">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className={i < r.rating ? "fill-galver-red text-galver-red" : "text-current/20"} />
                ))}
              </div>
              <p className="mt-3 text-sm text-current/80">&ldquo;{r.text}&rdquo;</p>
              <p className="mt-3 text-xs font-semibold">{r.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* RELACIONADOS */}
      {related.length > 0 && (
        <div className="mt-20 border-t border-black/10 pt-14 dark:border-white/10">
          <h2 className="text-xl font-bold">Productos relacionados</h2>
          <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
