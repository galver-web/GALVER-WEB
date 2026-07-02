"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, MessageCircle } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, siteConfig, whatsappLink } from "@/lib/site";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", city: "", notes: "" });
  const [placing, setPlacing] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const orderSummary = items
    .map((i) => `- ${i.name} (Talla ${i.size}, ${i.color}) x${i.quantity} — ${formatPrice(i.price * i.quantity)}`)
    .join("%0A");

  const whatsappCheckoutMessage = `Hola Galver, quiero confirmar mi pedido:%0A${orderSummary}%0ATotal: ${formatPrice(total)}%0A%0ANombre: ${form.name}%0ADirección: ${form.address}, ${form.city}%0ATeléfono: ${form.phone}`;

  function handleWhatsAppCheckout() {
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappCheckoutMessage}`, "_blank");
  }

  function handlePlaceOrder(e: React.FormEvent) {
    e.preventDefault();
    setPlacing(true);
    // TODO: integrar pasarela de pago real (ej. Culqi, Niubiz o Mercado Pago) aquí.
    setTimeout(() => {
      clearCart();
      router.push("/checkout/gracias");
    }, 1200);
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl font-extrabold">No tienes productos en tu carrito</h1>
        <p className="mt-2 text-current/60">Agrega algún modelo desde el catálogo para continuar.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold">Checkout seguro</h1>
      <p className="mt-2 flex items-center gap-2 text-sm text-current/60">
        <Lock size={14} /> Tus datos están protegidos y solo se usan para procesar tu pedido.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <form onSubmit={handlePlaceOrder} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required name="name" onChange={handleChange} placeholder="Nombre completo" className="rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
            <input required name="phone" onChange={handleChange} placeholder="Teléfono / WhatsApp" className="rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
          </div>
          <input required type="email" name="email" onChange={handleChange} placeholder="Correo electrónico" className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
          <input required name="address" onChange={handleChange} placeholder="Dirección de entrega" className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
          <input required name="city" onChange={handleChange} placeholder="Ciudad" className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />
          <textarea name="notes" onChange={handleChange} placeholder="Notas del pedido (opcional)" rows={3} className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-3 text-sm outline-none focus:border-galver-red dark:border-white/15" />

          <div className="rounded-lg border border-dashed border-black/20 p-4 text-xs text-current/60 dark:border-white/20">
            Espacio reservado para pasarela de pago (tarjeta / Yape / Plin). Aquí se integrará el proveedor de pagos
            elegido (ej. Culqi, Niubiz o Mercado Pago) antes de publicar la web.
          </div>

          <button
            type="submit"
            disabled={placing}
            className="w-full rounded-full bg-galver-black py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-galver-red disabled:opacity-60 dark:bg-white dark:text-galver-black"
          >
            {placing ? "Procesando..." : `Pagar ${formatPrice(total)}`}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppCheckout}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-[#25D366] py-4 text-sm font-bold text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white"
          >
            <MessageCircle size={18} /> Cerrar pedido por WhatsApp
          </button>
        </form>

        <div className="h-fit rounded-2xl border border-black/10 p-6 dark:border-white/10">
          <h2 className="font-bold">Tu pedido</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((item) => (
              <li key={`${item.slug}-${item.size}-${item.color}`} className="flex justify-between">
                <span className="text-current/70">{item.name} × {item.quantity}</span>
                <span className="font-semibold">{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-black/10 pt-4 text-lg font-extrabold dark:border-white/10">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
