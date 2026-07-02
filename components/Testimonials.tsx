import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-galver-gray-light py-20 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-galver-red">Lo que dicen</span>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Clientes que caminan con Galver</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-black/5 bg-white p-6 dark:border-white/10 dark:bg-neutral-900">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < t.rating ? "fill-galver-red text-galver-red" : "text-current/20"} />
                ))}
              </div>
              <p className="text-sm text-current/80">&ldquo;{t.text}&rdquo;</p>
              <p className="mt-4 text-xs font-semibold">{t.name} · {t.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
