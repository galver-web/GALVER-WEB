export const siteConfig = {
  name: "Galver",
  fullName: "Zapatillas Galver",
  description:
    "Zapatillas de cuero premium hechas en Perú. Calidad, comodidad y estilo urbano con más de 30 años de trayectoria. Camina con estilo, camina con Galver.",
  url: "https://www.galver.pe",
  whatsappNumber: "51904688077", // TODO: confirmar número definitivo de atención
  whatsappMessage: "Hola Galver, quiero más información sobre sus zapatillas 👟",
  email: "ventas@galver.pe",
  address: "Av. Ejemplo 123, Lima, Perú", // TODO: reemplazar con dirección real de tienda
  instagram: "https://instagram.com/galver.pe",
  tiktok: "https://tiktok.com/@galver.pe",
  facebook: "https://facebook.com/galver.pe",
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
