import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/app/data";

export function ProductGridCard({ product }: { product: Product }) {
  return (
    <article className="group relative flex min-h-[360px] flex-col overflow-hidden bg-white p-4 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl">
      <button
        className="absolute right-4 top-4 z-10 grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-100 hover:text-[#74c43a]"
        aria-label="Kedvencek"
        type="button"
      >
        <Heart size={16} />
      </button>

      <Link
        href={`/products/${product.slug}`}
        className="relative isolate flex h-48 w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-[#eef6e8] ring-1 ring-slate-100"
      >
        <img
          src={product.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer-when-downgrade"
          className="max-h-full max-w-full object-contain p-3 transition group-hover:scale-[1.03]"
        />
      </Link>

      <div className="relative z-10 mt-3 flex flex-1 flex-col bg-white pr-14">
        <div className="text-[11px] font-black uppercase tracking-wide text-slate-400">{product.brand}</div>
        <Link href={`/products/${product.slug}`} className="mt-1 line-clamp-2 min-h-[38px] text-[13px] font-black leading-tight text-slate-950 hover:text-[#c8202f]">
          {product.title}
        </Link>
        <div className="mt-3 flex gap-0.5 text-slate-950">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={12} fill="currentColor" />
          ))}
        </div>
        <div className="mt-2 text-xs font-bold text-slate-500">{product.stock}</div>
        {product.oldPrice ? <div className="mt-2 text-xs font-semibold text-slate-400 line-through">{product.oldPrice}</div> : null}
        <div className="mt-1 text-xl font-black text-[#c8202f]">{product.price}</div>
      </div>

      <button
        className="absolute bottom-0 right-0 z-20 grid h-16 w-16 place-items-center bg-[#74c43a] text-white transition group-hover:bg-[#65ad31]"
        aria-label="Kosárba"
        type="button"
      >
        <ShoppingCart size={20} />
      </button>
    </article>
  );
}
