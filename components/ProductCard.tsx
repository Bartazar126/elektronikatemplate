import type { Product } from "@/app/data";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col border border-slate-200 bg-white transition hover:border-slate-400">
      <div className="relative border-b border-slate-100 bg-slate-50 p-3">
        <div className="absolute left-2 top-2 z-10 flex gap-1">
          <span className="bg-emerald-700 px-2 py-1 text-[11px] font-semibold text-white">{product.stock}</span>
          {product.badge ? (
            <span className="bg-amber-400 px-2 py-1 text-[11px] font-semibold text-slate-950">{product.badge}</span>
          ) : null}
        </div>
        <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-white p-2">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt=""
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer-when-downgrade"
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <div className="w-4/5 border border-slate-200 bg-slate-100 p-4 text-center">
              <div className="mx-auto mb-2 h-16 w-24 border border-slate-300 bg-slate-900" />
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.imageLabel}</span>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-3">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">{product.brand}</span>
          <span className="text-xs text-slate-500">{product.rating}/5</span>
        </div>

        <h3 className="line-clamp-2 min-h-[44px] text-sm font-semibold leading-snug text-slate-900">
          {product.title}
        </h3>

        <ul className="mt-3 space-y-1 border-t border-slate-100 pt-3 text-xs text-slate-600">
          {product.specs.map((spec) => (
            <li key={spec} className="flex gap-1.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              {spec}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-4">
          {product.oldPrice ? <div className="text-xs font-semibold text-slate-400 line-through">{product.oldPrice}</div> : null}
          <div className="text-xl font-bold tracking-tight text-slate-950">{product.price}</div>
          <div className="mt-1 text-[11px] font-bold text-emerald-700">Online ár, azonnal rendelhető</div>
          <div className="mt-3 grid grid-cols-[1fr_auto] gap-2">
            <button className="bg-[#74c43a] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#65ad31]">
              Kosárba
            </button>
            <button className="border border-slate-300 px-2.5 text-xs font-semibold text-slate-700 hover:border-slate-500" aria-label="Összehasonlítás">
              Összevet
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
