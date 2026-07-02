"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

const navLinks = [
  { href: "/catalogo", label: "Catálogo" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { count, setIsOpen } = useCart();
  const { wishlist } = useWishlist();
  const router = useRouter();

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/catalogo?buscar=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-galver-black/90">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          GALVER<span className="text-galver-red">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-current/80 transition-colors hover:text-galver-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Buscar"
            onClick={() => setSearchOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Search size={18} />
          </button>
          <Link
            href="/catalogo?wishlist=1"
            aria-label="Lista de deseos"
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            <Heart size={18} />
            {wishlist.length > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-galver-red text-[10px] font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button
            aria-label="Carrito"
            onClick={() => setIsOpen(true)}
            className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
          >
            <ShoppingBag size={18} />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-galver-red text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </button>
          <ThemeToggle />
          <button
            aria-label="Menú"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-black/5 bg-white px-4 py-3 dark:border-white/10 dark:bg-galver-black">
          <form onSubmit={handleSearch} className="mx-auto flex max-w-7xl gap-2">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar zapatillas Galver..."
              className="w-full rounded-lg border border-black/10 bg-transparent px-4 py-2 text-sm outline-none focus:border-galver-red dark:border-white/15"
            />
            <button
              type="submit"
              className="rounded-lg bg-galver-red px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-galver-red-dark"
            >
              Buscar
            </button>
          </form>
        </div>
      )}

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-black/5 bg-white px-4 py-3 dark:border-white/10 dark:bg-galver-black md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
