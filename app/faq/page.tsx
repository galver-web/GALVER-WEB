"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/testimonials";

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <span className="text-xs font-bold uppercase tracking-widest text-galver-red">Ayuda</span>
      <h1 className="mt-2 text-4xl font-extrabold">Preguntas frecuentes</h1>

      <div className="mt-10 divide-y divide-black/10 dark:divide-white/10">
        {faqs.map((f, i) => (
          <div key={f.q} className="py-4">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between text-left font-semibold"
            >
              {f.q}
              <ChevronDown size={18} className={`shrink-0 transition-transform ${open === i ? "rotate-180 text-galver-red" : ""}`} />
            </button>
            {open === i && <p className="mt-3 text-sm text-current/70">{f.a}</p>}
          </div>
        ))}
      </div>

      <div id="guia-tallas" className="mt-16 scroll-mt-24 border-t border-black/10 pt-10 dark:border-white/10">
        <h2 className="text-2xl font-bold">Guía de tallas Galver</h2>
        <p className="mt-2 text-sm text-current/60">Mide tu pie descalzo, de talón a punta, y compáralo con la tabla.</p>
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
    </div>
  );
}
