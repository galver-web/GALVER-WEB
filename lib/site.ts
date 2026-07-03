export const siteConfig = {
  name: "Galver",
  fullName: "Zapatillas Galver",
  description:
    "Zapatillas de cuero premium hechas en Perú. Calidad, comodidad y estilo urbano con más de 30 años de trayectoria. Camina con estilo, camina con Galver.",
  url: "https://www.galver.pe",
  whatsappNumber: "51904688077",
  whatsappNumberSecondary: "51905441128",
  whatsappMessage: "Hola Galver, quiero más información sobre sus zapatillas 👟",
  email: "calzadogalver@gmail.com",
  address: "Jr. Ayacucho 1040, Galería El Mundo de las Sandalias, interior 1085, Cercado de Lima",
  instagram: "https://instagram.com/calzado.galver",
  tiktok: "https://tiktok.com/@zapatillasgalver",
  facebook: "https://facebook.com/zapatillasgalver",
  keywords: [
    "zapatillas de cuero Perú",
    "zapatillas urbanas",
    "zapatillas premium",
    "calzado peruano",
    "Galver",
    "zapatillas Galver FC",
    "calzado de cuero Lima",
  ],
};

export function formatPrice(price: number) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2,
  }).format(price);
}

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function whatsappLinkSecondary(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.whatsappNumberSecondary}?text=${text}`;
}
