import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export const metadata = { title: "Pedido confirmado", robots: { index: false } };

export default function ThankYouPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center sm:px-6">
      <CheckCircle2 size={56} className="text-galver-red" />
      <h1 className="mt-6 text-3xl font-extrabold">¡Gracias por tu compra!</h1>
      <p className="mt-3 text-current/60">
        Hemos recibido tu pedido. Te escribiremos pronto para confirmar los detalles de entrega.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link href="/catalogo" className="rounded-full bg-galver-red px-6 py-3 text-sm font-bold text-white hover:bg-galver-red-dark">
          Seguir comprando
        </Link>
        <a
          href={whatsappLink("Hola Galver, acabo de realizar un pedido y quiero confirmar los detalles.")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-[#25D366] px-6 py-3 text-sm font-bold text-[#25D366] hover:bg-[#25D366] hover:text-white"
        >
          Confirmar por WhatsApp
        </a>
      </div>
    </div>
  );
}
