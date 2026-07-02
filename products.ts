import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes y guía de tallas",
  description: "Resuelve tus dudas sobre envíos, garantía, cambios y encuentra la guía de tallas de zapatillas Galver.",
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
