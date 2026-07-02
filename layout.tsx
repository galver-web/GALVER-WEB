import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold text-galver-red">404</h1>
      <p className="mt-4 text-lg font-semibold">No encontramos esta página</p>
      <p className="mt-2 text-current/60">Puede que el producto o la sección que buscas ya no esté disponible.</p>
      <Link href="/" className="mt-8 rounded-full bg-galver-red px-6 py-3 text-sm font-bold text-white hover:bg-galver-red-dark">
        Volver al inicio
      </Link>
    </div>
  );
}
