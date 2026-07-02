import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escríbenos por WhatsApp, correo o visita nuestra tienda física de zapatillas Galver.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <span className="text-xs font-bold uppercase tracking-widest text-galver-red">Contacto</span>
      <h1 className="mt-2 text-4xl font-extrabold">Hablemos</h1>
      <p className="mt-2 max-w-lg text-current/60">
        ¿Tienes dudas sobre tallas, pedidos o quieres visitar nuestra tienda? Escríbenos, con gusto te atendemos.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-2xl border border-black/5 p-5 transition-colors hover:border-[#25D366] dark:border-white/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <MessageCircle size={20} />
            </span>
            <div>
              <p className="font-bold">WhatsApp</p>
              <p className="text-sm text-current/60">Respuesta inmediata en horario de tienda</p>
            </div>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-4 rounded-2xl border border-black/5 p-5 transition-colors hover:border-galver-red dark:border-white/10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-galver-red/10 text-galver-red">
              <Mail size={20} />
            </span>
            <div>
              <p className="font-bold">{siteConfig.email}</p>
              <p className="text-sm text-current/60">Para consultas por correo</p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-black/5 p-5 dark:border-white/10">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-galver-red/10 text-galver-red">
              <MapPin size={20} />
            </span>
            <div>
              <p className="font-bold">Tienda física</p>
              <p className="text-sm text-current/60">{siteConfig.address}</p>
            </div>
          </div>
        </div>

        <form className="space-y-4 rounded-2xl border border-black/5 p-6 dark:border-white/10">
          <input placeholder="Nombre completo" className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
          <input type="email" placeholder="Correo electrónico" className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
          <textarea placeholder="¿En qué podemos ayudarte?" rows={4} className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
          <button type="submit" className="w-full rounded-full bg-galver-black py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-galver-red dark:bg-white dark:text-galver-black">
            Enviar mensaje
          </button>
          <p className="text-xs text-current/50">
            Este formulario es de contacto general. Para atención inmediata, usa el botón de WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}
