import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sparkles, Truck } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";
import { whatsappLink } from "@/lib/site";

export default function HomePage() {
  const featured = products.filter((p) => p.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-galver-black text-white">
        <Image
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2000"
          alt="Zapatillas Galver de cuero premium"
          fill
          priority
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <span className="animate-fade-in inline-block rounded-full border border-galver-red/60 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-galver-red">
            Cuero premium · Hecho en Perú
          </span>
          <h1 className="animate-slide-up mt-6 max-w-2xl text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl">
            Camina con estilo.<br />Camina con <span className="text-galver-red">Galver</span>.
          </h1>
          <p className="animate-slide-up mt-6 max-w-lg text-lg text-white/80">
            Más de 30 años fabricando zapatillas de cuero legítimo para quienes no negocian calidad ni estilo.
          </p>
          <div className="animate-slide-up mt-10 flex flex-wrap gap-4">
            <Link
              href="/catalogo"
              className="rounded-full bg-galver-red px-8 py-4 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-105"
            >
              Comprar ahora
            </Link>
            <Link
              href="/catalogo"
              className="rounded-full border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors hover:bg-white hover:text-galver-black"
            >
              Ver catálogo
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="border-b border-black/5 bg-white py-14 dark:border-white/10 dark:bg-galver-black">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            { icon: Sparkles, title: "Cuero legítimo premium", text: "Seleccionado y trabajado a mano por artesanos peruanos." },
            { icon: ShieldCheck, title: "Garantía de fábrica", text: "Respaldo directo ante cualquier defecto de fabricación." },
            { icon: Truck, title: "Envíos a todo el Perú", text: "Recíbelo en la puerta de tu casa, en Lima o provincias." },
          ].map((f) => (
            <div key={f.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-galver-red/10 text-galver-red">
                <f.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold">{f.title}</h3>
                <p className="mt-1 text-sm text-current/60">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORÍAS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Link href="/catalogo?categoria=urbano" className="group relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200"
              alt="Línea Urbana Galver"
              width={800}
              height={600}
              className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-galver-red">Colección</p>
              <h3 className="text-2xl font-extrabold">Línea Urbana</h3>
            </div>
          </Link>
          <Link href="/catalogo?categoria=galver-fc" className="group relative overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200"
              alt="Galver FC"
              width={800}
              height={600}
              className="h-96 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-widest text-galver-red">Nueva línea</p>
              <h3 className="text-2xl font-extrabold">Galver FC</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* DESTACADOS */}
      <section className="bg-galver-gray-light py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-galver-red">Destacados</span>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Los favoritos de Galver</h2>
            </div>
            <Link href="/catalogo" className="hidden text-sm font-semibold text-galver-red hover:underline sm:block">
              Ver todo el catálogo →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* CTA WHATSAPP */}
      <section className="bg-galver-black py-16 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">¿Tienes dudas sobre tu talla o modelo ideal?</h2>
          <p className="mt-3 text-white/70">Escríbenos directo por WhatsApp y te asesoramos al instante.</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold uppercase tracking-wide transition-transform hover:scale-105"
          >
            Chatear por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
