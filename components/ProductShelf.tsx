import Link from "next/link";
import { BadgePercent, BarChart3, Heart, Layers, ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/app/data";

type ProductShelfProps = {
  title: string;
  type: "sale" | "top";
  products: Product[];
};

function ProductVisual({ product }: { product: Product }) {
  const category = product.category.toLowerCase();

  if (category.includes("egér")) {
    return (
      <div className="relative h-28 w-36 rounded-[45%] border border-slate-300 bg-slate-950 shadow-lg">
        <span className="absolute left-1/2 top-3 h-8 w-1 -translate-x-1/2 rounded-full bg-[#74c43a]" />
        <span className="absolute bottom-5 left-1/2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-slate-700" />
      </div>
    );
  }

  if (category.includes("billenty")) {
    return (
      <div className="w-44 rounded-xl border border-slate-300 bg-slate-950 p-3 shadow-lg">
        <div className="grid grid-cols-9 gap-1">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="h-2 rounded bg-slate-600" />
          ))}
        </div>
      </div>
    );
  }

  if (category.includes("kábel") || category.includes("töltő")) {
    return (
      <div className="relative h-28 w-44">
        <span className="absolute left-6 top-10 h-10 w-24 rounded-full border-[10px] border-slate-800 border-r-transparent" />
        <span className="absolute right-6 top-8 h-7 w-10 rounded bg-slate-950" />
        <span className="absolute left-3 top-14 h-4 w-8 rounded bg-slate-700" />
      </div>
    );
  }

  if (category.includes("ssd") || category.includes("nas") || category.includes("pendrive")) {
    return (
      <div className="relative h-24 w-40 rounded-xl border border-slate-300 bg-gradient-to-br from-slate-900 to-slate-700 shadow-lg">
        <span className="absolute left-4 top-4 h-3 w-16 rounded bg-slate-500" />
        <span className="absolute bottom-4 right-4 h-5 w-10 rounded bg-[#74c43a]/80" />
      </div>
    );
  }

  if (category.includes("processzor")) {
    return (
      <div className="grid h-28 w-28 place-items-center rounded-xl border border-slate-300 bg-slate-100 shadow-lg">
        <div className="grid h-20 w-20 place-items-center rounded-lg border border-slate-400 bg-slate-800 text-xs font-black uppercase text-white">
          CPU
        </div>
      </div>
    );
  }

  if (category.includes("alaplap")) {
    return (
      <div className="h-32 w-32 rounded-xl border border-slate-500 bg-slate-800 p-3 shadow-lg">
        <div className="grid h-full grid-cols-3 gap-2">
          <span className="col-span-2 rounded bg-slate-700" />
          <span className="rounded bg-slate-950" />
          <span className="col-span-3 rounded bg-slate-700" />
          <span className="col-span-2 rounded bg-slate-950" />
        </div>
      </div>
    );
  }

  if (category.includes("hűtés")) {
    return (
      <div className="grid h-30 w-30 place-items-center rounded-2xl border border-slate-300 bg-slate-900 shadow-lg">
        <span className="grid h-20 w-20 place-items-center rounded-full border-4 border-slate-600 bg-slate-800">
          <span className="h-9 w-9 rounded-full bg-[#74c43a]/80" />
        </span>
      </div>
    );
  }

  return (
    <div className="relative h-24 w-40 rounded-xl border border-slate-300 bg-gradient-to-br from-slate-950 to-slate-700 shadow-lg">
      <span className="absolute left-5 top-5 h-10 w-10 rounded-full border-4 border-slate-500" />
      <span className="absolute bottom-5 right-5 text-xs font-black uppercase text-white">{product.imageLabel}</span>
    </div>
  );
}

function ShelfProductCard({ product, type }: { product: Product; type: ProductShelfProps["type"] }) {
  return (
    <article className="group relative flex min-h-[348px] flex-col overflow-hidden bg-white p-4 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-xl">
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2 text-slate-700">
        <button className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-100 hover:text-[#74c43a]" aria-label="Kedvencek">
          <Heart size={16} />
        </button>
        <button className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm ring-1 ring-slate-100 hover:text-[#74c43a]" aria-label="Összehasonlítás">
          <Layers size={16} />
        </button>
      </div>

      {type === "sale" ? (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-rose-50 px-2 py-1 text-xs font-black text-[#c8202f]">KEDVEZMÉNY</span>
      ) : null}

      <Link href={`/products/${product.slug}`} className="relative isolate flex h-48 w-full shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-[#eef6e8] ring-1 ring-slate-100">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt=""
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer-when-downgrade"
            className="max-h-full max-w-full object-contain p-3"
          />
        ) : (
          <ProductVisual product={product} />
        )}
      </Link>

      <div className="relative z-10 mt-3 bg-white pr-14">
        <div className="text-[11px] font-black uppercase tracking-wide text-slate-400">{product.brand}</div>
        <Link href={`/products/${product.slug}`} className="mt-1 line-clamp-2 min-h-[38px] text-[13px] font-black leading-tight text-slate-950 hover:text-[#c8202f]">
          {product.title}
        </Link>
        <div className="mt-3 flex gap-0.5 text-slate-950">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} size={12} fill="currentColor" />
          ))}
        </div>
        {product.oldPrice ? (
          <div className="mt-2 text-xs font-semibold text-slate-400 line-through">{product.oldPrice}</div>
        ) : null}
        <div className="mt-1 text-xl font-black text-[#c8202f]">{product.price}</div>
      </div>

      <button
        className="absolute bottom-0 right-0 z-20 grid h-16 w-16 place-items-center bg-[#74c43a] text-white transition group-hover:bg-[#65ad31]"
        aria-label="Kosárba"
      >
        <ShoppingCart size={20} />
      </button>
    </article>
  );
}

export function ProductShelf({ title, type, products }: ProductShelfProps) {
  const Icon = type === "sale" ? BadgePercent : BarChart3;
  const subtitle = type === "sale" ? "Friss kedvezmények" : "Sokat választott termékek";

  return (
    <section className="w-full border-b border-slate-200 bg-[#edf0f4] px-3 py-9 sm:px-4">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-l-8 border-[#74c43a] bg-white px-5 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <span className="grid h-16 w-16 place-items-center bg-[#74c43a]/15 text-[#3f8c18] ring-1 ring-[#74c43a]/25">
            <Icon size={31} strokeWidth={2.2} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{subtitle}</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-950">{title}</h2>
          </div>
        </div>
        <Link href="/products" className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#74c43a]/60 hover:text-slate-950">
          Összes megtekintése
        </Link>
      </div>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
          {products.map((product) => (
            <ShelfProductCard key={`${type}-${product.id}`} product={product} type={type} />
          ))}
        </div>
      ) : (
        <div className="border border-slate-200 bg-white px-5 py-10 text-center">
          <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">Nincs találat</div>
          <p className="mt-2 text-sm font-semibold text-slate-600">Ebben a szekcióban nincs termék a jelenlegi szűrésre.</p>
        </div>
      )}
    </section>
  );
}
