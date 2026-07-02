export interface Product {
  slug: string;
  name: string;
  category: "urbano" | "deportivo" | "galver-fc";
  price: number;
  compareAtPrice?: number;
  colors: { name: string; hex: string }[];
  sizes: number[];
  images: string[];
  shortDescription: string;
  description: string;
  materials: string[];
  benefits: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    slug: "galver-urbano-classic-negro",
    name: "Galver Urbano Classic Negro",
    category: "urbano",
    price: 259,
    compareAtPrice: 319,
    colors: [
      { name: "Negro", hex: "#0A0A0A" },
      { name: "Gris", hex: "#3C3C3B" },
    ],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1200",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200",
    ],
    shortDescription: "Cuero premium, silueta minimalista, comodidad todo el día.",
    description:
      "La Galver Urbano Classic combina cuero legítimo de primera selección con una construcción artesanal peruana de más de 30 años de experiencia. Pensada para quien busca un estilo sobrio y atemporal, sin sacrificar comodidad en el uso diario.",
    materials: ["Cuero legítimo premium", "Forro interior transpirable", "Suela de goma antideslizante"],
    benefits: ["Comodidad todo el día", "Alta durabilidad", "Diseño atemporal", "Garantía de fábrica"],
    featured: true,
  },
  {
    slug: "galver-urbano-rojo-acento",
    name: "Galver Urbano Rojo Acento",
    category: "urbano",
    price: 269,
    colors: [
      { name: "Negro / Rojo", hex: "#B94B4A" },
      { name: "Blanco / Rojo", hex: "#FFFFFF" },
    ],
    sizes: [38, 39, 40, 41, 42, 43],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1200",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200",
      "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=1200",
    ],
    shortDescription: "El clásico Galver con detalles en rojo que marcan estilo.",
    description:
      "Un diseño urbano con carácter: cuero premium y un acento rojo icónico de marca que resalta sin perder elegancia. Ideal para quienes buscan destacar con actitud.",
    materials: ["Cuero legítimo", "Entresuela EVA", "Suela de goma reforzada"],
    benefits: ["Ligereza", "Amortiguación superior", "Diseño exclusivo Galver"],
    featured: true,
  },
  {
    slug: "galver-fc-oro",
    name: "Galver FC Oro",
    category: "galver-fc",
    price: 289,
    colors: [{ name: "Dorado", hex: "#C9A227" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1200",
    ],
    shortDescription: "Línea deportiva Galver FC para cancha y grass, corte en cuero.",
    description:
      "La nueva línea Galver FC nace para el jugador que exige rendimiento sin perder estilo. Upper en cuero legítimo y suela rubber-EVA diseñada para cancha techada y grass sintético, con tracción y control de balón superiores.",
    materials: ["Upper de cuero legítimo", "Suela rubber-EVA multiterreno", "Plantilla acolchada"],
    benefits: ["Ideal para futsal y grass", "Control de balón preciso", "Tracción superior", "Resistencia al desgaste"],
    featured: true,
  },
  {
    slug: "galver-fc-negro-blanco",
    name: "Galver FC Negro / Blanco",
    category: "galver-fc",
    price: 279,
    colors: [{ name: "Negro / Blanco", hex: "#3C3C3B" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1200",
      "https://images.unsplash.com/photo-1521805103424-d8f8430e8933?q=80&w=1200",
      "https://images.unsplash.com/photo-1465453869711-7e174808ace9?q=80&w=1200",
    ],
    shortDescription: "El equilibrio perfecto entre estilo clásico y rendimiento deportivo.",
    description:
      "Versión bicolor de la línea Galver FC, pensada para el jugador que busca versatilidad. Cuero legítimo en el upper y suela rubber-EVA lista para cancha techada y grass.",
    materials: ["Upper de cuero legítimo", "Suela rubber-EVA multiterreno", "Plantilla acolchada"],
    benefits: ["Multiterreno", "Estilo bicolor icónico", "Comodidad prolongada"],
  },
  {
    slug: "galver-fc-negro-rojo",
    name: "Galver FC Negro / Rojo",
    category: "galver-fc",
    price: 279,
    colors: [{ name: "Negro / Rojo", hex: "#B94B4A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1200",
      "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=1200",
      "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1200",
    ],
    shortDescription: "La versión más icónica de Galver FC, con el rojo de marca en el detalle.",
    description:
      "Con el acento rojo característico de Galver, este modelo de la línea FC combina identidad de marca y rendimiento deportivo en cuero legítimo con suela rubber-EVA.",
    materials: ["Upper de cuero legítimo", "Suela rubber-EVA multiterreno", "Plantilla acolchada"],
    benefits: ["Identidad Galver en cancha", "Tracción y control", "Resistencia al uso intenso"],
  },
  {
    slug: "galver-urbano-gris-piedra",
    name: "Galver Urbano Gris Piedra",
    category: "urbano",
    price: 249,
    colors: [{ name: "Gris", hex: "#3C3C3B" }],
    sizes: [37, 38, 39, 40, 41, 42],
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=1200",
      "https://images.unsplash.com/photo-1544966503-7cc531fd785f?q=80&w=1200",
      "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200",
    ],
    shortDescription: "Versatilidad total: de la oficina a la calle sin esfuerzo.",
    description:
      "Un modelo neutro y versátil, en gris piedra, para combinar con cualquier outfit. Cuero suave al tacto y plantilla con memoria para mayor comodidad.",
    materials: ["Cuero legítimo suave", "Plantilla con memoria", "Suela flexible"],
    benefits: ["Versátil para cualquier ocasión", "Suavidad al tacto", "Ligero"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
