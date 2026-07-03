export interface Product {
  slug: string;
  name: string;
  category: "urbano" | "deportivo" | "galver-fc";
  price: number;
  compareAtPrice?: number;
  promoNote?: string;
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
  // ---------- LÍNEA URBANA (New Galver) ----------
  {
    slug: "urbano-celeste-mujer",
    name: "Urbano Celeste Dama",
    category: "urbano",
    price: 79,
    compareAtPrice: 100,
    colors: [{ name: "Celeste", hex: "#7EC8D8" }],
    sizes: [35, 36, 37, 38, 39, 40],
    images: ["/images/products/urbano-celeste-mujer.jpg"],
    shortDescription: "Ligereza y estilo para el día a día, en un celeste fresco.",
    description:
      "Zapatilla urbana para dama en malla transpirable celeste, con suela ligera para caminar cómoda todo el día. Parte de la nueva colección New Galver.",
    materials: ["Malla transpirable", "Entresuela EVA ligera", "Suela de goma antideslizante"],
    benefits: ["Muy liviana", "Transpirable", "Ideal para uso diario"],
    featured: true,
  },
  {
    slug: "urbano-azul-mujer",
    name: "Urbano Azul Marino Dama",
    category: "urbano",
    price: 79,
    compareAtPrice: 100,
    colors: [{ name: "Azul marino", hex: "#1B2A4A" }],
    sizes: [35, 36, 37, 38, 39, 40],
    images: ["/images/products/urbano-azul-mujer.jpg"],
    shortDescription: "Azul marino con suela rosa, para un look deportivo con personalidad.",
    description:
      "Modelo urbano para dama en azul marino con detalles en rosa en la suela. Diseño moderno de la colección New Galver, cómodo para uso diario o entrenamiento ligero.",
    materials: ["Malla transpirable", "Entresuela EVA ligera", "Suela de goma antideslizante"],
    benefits: ["Diseño llamativo", "Comodidad todo el día", "Muy liviana"],
  },
  {
    slug: "urbano-negro-naranja-hombre",
    name: "Urbano Negro Naranja Hombre",
    category: "urbano",
    price: 79,
    compareAtPrice: 100,
    colors: [{ name: "Negro / Naranja", hex: "#0A0A0A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/urbano-negro-naranja-1.jpg", "/images/products/urbano-negro-naranja-2.jpg"],
    shortDescription: "Material altamente resistente y suela anti impacto para uso diario.",
    description:
      "Zapatilla urbana para hombre en negro con detalles en naranja. Material altamente resistente y suela anti impacto, ideal para el uso diario en la calle o el trabajo. Colores disponibles: negro, azul, celeste y naranja.",
    materials: ["Malla resistente", "Suela anti impacto", "Entresuela EVA"],
    benefits: ["Material altamente resistente", "Suela anti impacto", "Varios colores disponibles"],
    featured: true,
  },

  // ---------- DEPORTIVO (modelo clásico) ----------
  {
    slug: "deportivo-rojo-negro",
    name: "Deportivo Rojo Negro",
    category: "deportivo",
    price: 130,
    compareAtPrice: 180,
    colors: [{ name: "Rojo / Negro", hex: "#B94B4A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/deportivo-rojo-negro.jpg"],
    shortDescription: "Zapatilla deportiva para fulbito, con suela para grass y loza.",
    description:
      "Modelo deportivo en rojo y negro, pensado para el jugador que exige rendimiento en cancha techada y grass. Material altamente resistente y suela anti impacto.",
    materials: ["Cuero sintético resistente", "Suela anti impacto"],
    benefits: ["Ideal para fulbito", "Material resistente", "Buena tracción"],
  },

  // ---------- GALVER FC (línea TOP-SALA en cuero) ----------
  {
    slug: "galver-fc-vino",
    name: "Galver FC Vino TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Vino", hex: "#6E1F2A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-vino-studio.jpg", "/images/products/fc-vino-onfoot.jpg"],
    shortDescription: "Cuero legítimo, suela caucho con EVA. Domina la cancha.",
    description:
      "Galver FC TOP-SALA en vino, upper de cuero legítimo con suela de caucho combinada con EVA. Disponible en planta lisa (para loza) o tipo cocos (para grass). Control y precisión, livianas y cómodas, resistencia y durabilidad, amortiguación con EVA.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
    featured: true,
  },
  {
    slug: "galver-fc-dorado",
    name: "Galver FC Dorado TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Dorado", hex: "#C9A227" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-dorado-studio.jpg"],
    shortDescription: "Cuero legítimo en dorado, diseñadas para jugar al máximo.",
    description:
      "Galver FC TOP-SALA en dorado, upper de cuero legítimo con suela de caucho combinada con EVA. Disponible en planta lisa (para loza) o tipo cocos (para grass).",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
    featured: true,
  },
  {
    slug: "galver-fc-blanco",
    name: "Galver FC Blanco TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Blanco", hex: "#FFFFFF" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-blanco-studio.jpg"],
    shortDescription: "Cuero legítimo en blanco, envío gratis a agencia a todo el Perú.",
    description:
      "Galver FC TOP-SALA en blanco con detalles en negro, upper de cuero legítimo y suela de caucho combinada con EVA. Envío gratis a agencia a todo el Perú, recojo en tienda contraentrega.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
  {
    slug: "galver-fc-negro-clasico",
    name: "Galver FC Negro Clásico TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Negro", hex: "#0A0A0A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-negro-blanco-studio.jpg"],
    shortDescription: "El clásico negro con blanco, cuero legítimo y suela EVA.",
    description:
      "Galver FC TOP-SALA en negro con blanco, upper de cuero legítimo y suela de caucho combinada con EVA. Promoción: 3 pares por S/400.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
  {
    slug: "galver-fc-azul-marino",
    name: "Galver FC Azul Marino TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Azul marino", hex: "#1B2A4A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-azul-marino-studio.jpg"],
    shortDescription: "Azul marino con detalle rosa y celeste en la suela.",
    description:
      "Galver FC TOP-SALA en azul marino con acabado degradado rosa y celeste en la suela. Upper de cuero legítimo y suela de caucho combinada con EVA.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
  {
    slug: "galver-fc-negro-rojo-celeste",
    name: "Galver FC Negro Rojo Celeste TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Negro / Rojo", hex: "#B94B4A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-negro-rojo-celeste-studio.jpg"],
    shortDescription: "Negro con acentos en rojo y celeste, un modelo con carácter.",
    description:
      "Galver FC TOP-SALA en negro con acentos en rojo y celeste en la suela. Upper de cuero legítimo y suela de caucho combinada con EVA.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
  {
    slug: "galver-fc-negro-detalle-dorado",
    name: "Galver FC Negro Detalle Dorado TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Negro / Azul", hex: "#0A0A0A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-negro-azul-rojo-studio.jpg"],
    shortDescription: "Negro con logo azul y dorado, suela gruesa con toque retro.",
    description:
      "Galver FC TOP-SALA en negro con logo en azul y dorado, y detalle rojo. Upper de cuero legítimo y suela de caucho combinada con EVA.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
  {
    slug: "galver-fc-plateado",
    name: "Galver FC Plateado TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Plateado", hex: "#B9BDC1" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-plateado-studio.jpg"],
    shortDescription: "Un acabado metálico que destaca en cualquier cancha.",
    description:
      "Galver FC TOP-SALA en plateado con detalles en negro. Upper de cuero legítimo y suela de caucho combinada con EVA, diseñadas para jugar al máximo.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
  {
    slug: "galver-fc-rojo",
    name: "Galver FC Rojo TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Rojo", hex: "#B94B4A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-rojo-onfoot-1.jpg", "/images/products/fc-rojo-onfoot-2.jpg"],
    shortDescription: "Rojo intenso con detalles en negro, foto real en cancha.",
    description:
      "Galver FC TOP-SALA en rojo con detalles en negro. Upper de cuero legítimo y suela de caucho combinada con EVA, probado en cancha techada.",
    materials: ["Cuero legítimo", "Suela caucho con EVA"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
  {
    slug: "galver-fc-negro-dorado",
    name: "Galver FC Negro Dorado TOP-SALA",
    category: "galver-fc",
    price: 150,
    promoNote: "3 pares por S/400",
    colors: [{ name: "Negro / Dorado", hex: "#0A0A0A" }],
    sizes: [38, 39, 40, 41, 42, 43, 44],
    images: ["/images/products/fc-negro-dorado-onfoot.jpg"],
    shortDescription: "Negro con detalle dorado, foto real en cancha techada.",
    description:
      "Galver FC TOP-SALA en negro con logo dorado. Upper de cuero legítimo y suela de caucho combinada con EVA, con tecnología FlexOball para mayor control del balón.",
    materials: ["Cuero legítimo", "Suela caucho con EVA", "Tecnología FlexOball"],
    benefits: ["Control y precisión", "Livianas y cómodas", "Resistencia y durabilidad", "Amortiguación con EVA"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
