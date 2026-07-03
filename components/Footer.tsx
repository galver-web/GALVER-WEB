import Link from "next/link";
import Image from "next/image";
import { siteConfig, whatsappLink, whatsappLinkSecondary } from "@/lib/site";
import { Instagram, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-galver-gray-light dark:border-white/10 dark:bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/images/brand/logo-badge.png" alt="Galver" width={44} height={44} className="object-contain" />
              <h3 className="text-2xl font-extrabold">GALVER</h3>
            </div>
            <p className="mt-3 max-w-xs text-sm text-current/70">
              Zapatillas de cuero premium hechas en Perú. Más de 30 años caminando junto a ti.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-current/60">Tienda</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/catalogo" className="hover:text-galver-red">Catálogo completo</Link></li>
              <li><Link href="/catalogo?categoria=urbano" className="hover:text-galver-red">Línea Urbana</Link></li>
              <li><Link href="/catalogo?categoria=galver-fc" className="hover:text-galver-red">Galver FC</Link></li>
              <li><Link href="/sobre-nosotros" className="hover:text-galver-red">Sobre nosotros</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-current/60">Ayuda</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-galver-red">Preguntas frecuentes</Link></li>
              <li><Link href="/faq#guia-tallas" className="hover:text-galver-red">Guía de tallas</Link></li>
              <li><Link href="/contacto" className="hover:text-galver-red">Contacto</Link></li>
              <li><Link href="/blog" className="hover:text-galver-red">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-current/60">Contáctanos</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle size={16} className="text-galver-red" />
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="hover:text-galver-red">
                  WhatsApp: 904 688 077
                </a>
              </li>
              <li className="flex items-center gap-2 pl-6">
                <a href={whatsappLinkSecondary()} target="_blank" rel="noopener noreferrer" className="hover:text-galver-red">
                  905 441 128
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-galver-red" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-galver-red">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-galver-red" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={16} className="text-galver-red" />
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-galver-red">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/10 pt-6 text-xs text-current/60 dark:border-white/10 sm:flex-row">
          <p>© {new Date().getFullYear()} Galver. Todos los derechos reservados.</p>
          <p>Hecho en Perú 🇵🇪 con orgullo.</p>
        </div>
      </div>
    </footer>
  );
}
