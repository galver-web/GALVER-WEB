"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/site";

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
      <div className="relative flex h-full w-full max-w-md flex-col bg-white shadow-xl dark:bg-galver-black animate-slide-up">
        <div className="flex items-center justify-between border-b border-black/10 p-4 dark:border-white/10">
          <h2 className="text-lg font-bold">Tu carrito ({items.length})</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Cerrar carrito">
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="mt-10 text-center text-sm text-current/60">Tu carrito está vacío.</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={`${item.slug}-${item.size}-${item.color}`} className="flex gap-3">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-galver-gray-light dark:bg-neutral-800">
                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-current/60">Talla {item.size} · {item.color}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 rounded-full border border-black/10 px-2 py-0.5 dark:border-white/15">
                        <button onClick={() => updateQuantity(item.slug, item.size, item.color, item.quantity - 1)}>
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-semibold">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.slug, item.size, item.color, item.quantity + 1)}>
                          <Plus size={12} />
                        </button>
                      </div>
                      <span className="text-sm font-bold">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(item.slug, item.size, item.color)}
                    aria-label="Quitar producto"
                    className="self-start text-current/40 hover:text-galver-red"
                  >
                    <X size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-black/10 p-4 dark:border-white/10">
            <div className="mb-4 flex items-center justify-between text-sm font-semibold">
              <span>Subtotal</span>
              <span className="text-lg font-bold">{formatPrice(total)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-full bg-galver-red py-3 text-center text-sm font-bold text-white transition-colors hover:bg-galver-red-dark"
            >
              Finalizar compra
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
