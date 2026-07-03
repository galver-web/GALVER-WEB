import type { Metadata } from "next";
import Image from "next/image";
import { Award, Gem, Hammer, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce la historia de Galver: más de 30 años fabricando calzado peruano de cuero legítimo, con calidad, durabilidad y diseño exclusivo.",
};

const pillars = [
  { icon: Gem, title: "Calidad del cuero", text: "Trabajamos con cuero legítimo seleccionado, curtido con procesos que garantizan suavidad, resistencia y un acabado premium." },
  { icon: Hammer, title: "Fabricación peruana", text: "Cada par de Galver se elabora en nuestros talleres en Perú, con mano de obra especializada y control de calidad en cada etapa." },
  { icon: Leaf, title: "Durabilidad", text: "Diseñamos pensando en el largo plazo: materiales y procesos que resisten el uso diario sin perder forma ni estructura." },
  { icon: Award, title: "Diseño exclusivo", text: "Nuestro equipo desarrolla siluetas propias, pensadas para el estilo urbano peruano, sin copiar tendencias externas." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-galver-black text-white">
        <Image
          src="/images/products/fc-negro-dorado-onfoot.jpg"
          alt="Taller de fabricación Galver"
          fill
          className="object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-galver-red">Nuestra historia</span>
          <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">30 años caminando junto al Perú</h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="text-lg leading-relaxed text-current/80">
          Zapatillas Galver nació de una convicción simple: el calzado peruano puede competir en calidad y diseño con
          cualquier marca internacional. Desde nuestros inicios, bajo la dirección de Paúl Galván Gonzalo, hemos
          apostado por el cuero legítimo, la fabricación local y el detalle artesanal en cada par que sale de nuestro taller.
        </p>
        <p className="mt-6 text-lg leading-relaxed text-current/80">
          Hoy, después de más de tres décadas en el mercado, seguimos fieles a esa idea: ofrecer los mejores calzados
          al alcance de las personas, combinando tradición peruana con un estilo urbano que evoluciona con cada
          generación. Nuestra nueva línea Galver FC es prueba de eso — llevamos nuestra identidad también a la cancha.
        </p>
      </section>

      <section className="bg-galver-gray-light py-20 dark:bg-neutral-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-galver-red/10 text-galver-red">
                  <p.icon size={22} />
                </div>
                <h3 className="mt-4 font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-current/60">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">Orgullo peruano en cada paso</h2>
        <p className="mt-4 text-current/70">
          Detrás de cada par de Galver hay familias peruanas, oficio y una promesa de calidad que no pensamos romper.
        </p>
      </section>
    </>
  );
}
