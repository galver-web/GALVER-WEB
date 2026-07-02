import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catálogo de zapatillas de cuero",
  description:
    "Descubre zapatillas urbanas y deportivas Galver FC, hechas en cuero legítimo peruano. Filtra por talla, color y precio.",
};

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
