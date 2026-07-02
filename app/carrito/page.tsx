"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/site";

export default function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold">Tu carrito está vacío</h1>
        <p className="mt-3 text-current/60">Explora nuestro catálogo y encuentra tu próximo par de Galver.</p>
        <Link
          href="/catalogo"
          className="mt-8 inline-block rounded-full bg-galver-red px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-galver-red-dark"
        >
          Ir al catálogo
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold">Tu carrito</h1>
      <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
        <ul className="divide-y divide-black/10 dark:divide-white/10">
          {items.map((item) => (
            <li key={`${item.slug}-${item.size}-${item.color}`} className="flex gap-4 py-6">
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-galver-gray-light dark:bg-neutral-800">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="96px" />
              </div>
              <div className="flex flex-1 flex-col">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-current/60">Talla {item.size} · {item.color}</p>
                  </div>
                  <button onClick={() => removeItem(item.slug, item.size, item.color)} className="text-current/40 hover:text-galver-red">
                    <X size={18} />
                  </button>
                </div>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-3 rounded-full border border-black/10 px-3 py-1 dark:border-white/15">
                    <button onClick={() => updateQuantity(item.slug, item.size, item.color, item.quantity - 1)}>
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.slug, item.size, item.color, item.quantity + 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <span className="font-bold">{formatPrice(item.price * item.quantity)}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="h-fit rounded-2xl border border-black/10 p-6 dark:border-white/10">
          <h2 className="font-bold">Resumen del pedido</h2>
          <div className="mt-4 flex justify-between text-sm text-current/70">
            <span>Subtotal</span>
            <span>{formatPrice(total)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm text-current/70">
            <span>Envío</span>
            <span>Se calcula en checkout</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-black/10 pt-4 text-lg font-extrabold dark:border-white/10">
            <span>Total</span>
            <span>{formatPrice(total)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block w-full rounded-full bg-galver-red py-3 text-center text-sm font-bold text-white transition-colors hover:bg-galver-red-dark"
          >
            Finalizar compra
          </Link>
        </div>
      </div>
    </div>
  );
}
