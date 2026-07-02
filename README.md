# Galver — Tienda online

Sitio web de e-commerce para **Zapatillas Galver**, construido con Next.js 14 (App Router), React, TypeScript y Tailwind CSS.

## 🚀 Cómo correrlo en tu computadora

Necesitas tener instalado [Node.js](https://nodejs.org) (versión 18 o superior).

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Cómo publicarlo (deploy)

La forma más simple es con **Vercel** (gratis para empezar):

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), conecta tu cuenta de GitHub e importa el repositorio.
3. Vercel detecta automáticamente que es un proyecto Next.js y lo publica.
4. Configura tu dominio propio (ej. `galver.pe`) desde el panel de Vercel.

## ✅ Lo que ya está implementado

- Inicio con Hero, categorías, destacados y testimonios
- Sobre nosotros (historia de marca)
- Catálogo con buscador, filtros por categoría/talla/color/precio
- Ficha de producto con zoom de imagen, tallas, colores, guía de tallas, opiniones y relacionados
- Carrito de compras (persistente en la sesión del navegador)
- Checkout con formulario + botón de "Cerrar pedido por WhatsApp"
- Botón flotante de WhatsApp en toda la web
- Blog con 3 artículos de ejemplo, optimizado para SEO
- FAQ + guía de tallas
- Contacto (WhatsApp, correo, dirección, formulario)
- Modo oscuro
- Lista de deseos (wishlist)
- SEO técnico: metadata por página, sitemap.xml, robots.txt, Open Graph
- Estructura lista para Google Analytics, Meta Pixel y TikTok Pixel

## ⚠️ Cosas que TÚ debes completar antes de publicar

Estos son los puntos donde puse datos de ejemplo (marcados con `TODO` en el código):

1. **Fotos reales de los productos** — actualmente uso imágenes de stock (Unsplash) como referencia visual. Reemplázalas en `data/products.ts` por las fotos reales de cada modelo, incluyendo las 3 Galver FC (oro, negro/blanco, negro/rojo).
2. **Número de WhatsApp** — ya configurado con `51904688077` en `lib/site.ts`. Cámbialo ahí si es necesario.
3. **Dirección de tienda física y correo** — en `lib/site.ts` (`address`, `email`).
4. **Pasarela de pago** — el checkout tiene el formulario listo, pero el botón "Pagar" aún no está conectado a un procesador de pagos real. En Perú lo más común es **Culqi**, **Niubiz** o **Mercado Pago**. Cuando elijas uno, te ayudo a integrarlo (está marcado con `TODO` en `app/checkout/page.tsx`).
5. **IDs de Analytics** — en `app/layout.tsx` reemplaza `GA_MEASUREMENT_ID`, `META_PIXEL_ID` y `TIKTOK_PIXEL_ID` con tus IDs reales.
6. **Precios y stock reales** — todo `data/products.ts` tiene precios de ejemplo, actualízalos.
7. **Dominio** — `siteConfig.url` en `lib/site.ts` debe apuntar a tu dominio final (ej. `https://www.galver.pe`).

## 🎨 Identidad de marca usada

- Rojo Galver: `#B94B4A`
- Gris oscuro Galver: `#3C3C3B`
- Tipografía: Roboto
- Frase principal: "Camina con estilo. Camina con Galver."

## 🗂 Estructura del proyecto

```
app/            → páginas (rutas de Next.js)
components/     → piezas reutilizables (Header, Footer, ProductCard, etc.)
context/        → carrito y lista de deseos (estado global)
data/           → productos, testimonios, FAQ, artículos de blog
lib/            → configuración del sitio (WhatsApp, colores, SEO)
```
