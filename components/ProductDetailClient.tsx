"use client";

import Link from "next/link";
import { CreditCard, Heart, PackageCheck, ShieldCheck, ShoppingCart, Star, Truck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { ProductGridCard } from "@/components/ProductGridCard";
import { SiteHeaderClient } from "@/components/SiteHeaderClient";
import type { Product } from "@/app/data";

type ProductDetailClientProps = {
  product: Product;
  relatedProducts: Product[];
};

export function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  return (
    <main className="min-h-screen bg-[#edf0f4]">
      <SiteHeaderClient />

      <section className="border-b border-slate-200 bg-slate-950 px-3 pb-7 pt-28 text-white sm:px-4">
        <Link href="/products" className="text-xs font-black uppercase tracking-[0.22em] text-[#74c43a] hover:text-white">
          Vissza az összes termékhez
        </Link>
        <h1 className="mt-3 max-w-5xl text-4xl font-black uppercase leading-tight tracking-tight sm:text-5xl">{product.title}</h1>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm font-bold text-slate-300">
          <span>{product.brand}</span>
          <span className="h-1 w-1 rounded-full bg-slate-500" />
          <span>{product.category}</span>
          <span className="h-1 w-1 rounded-full bg-slate-500" />
          <span>{product.stock}</span>
        </div>
      </section>

      <section className="grid gap-5 px-3 py-8 sm:px-4 lg:grid-cols-[1fr_380px]">
        <div className="grid gap-5">
          <div className="grid gap-5 bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:grid-cols-[48%_1fr]">
            <div className="flex min-h-[430px] items-center justify-center bg-gradient-to-br from-slate-50 via-white to-[#eef6e8] ring-1 ring-slate-100">
              <img
                src={product.imageUrl}
                alt=""
                referrerPolicy="no-referrer-when-downgrade"
                className="max-h-[400px] max-w-full object-contain p-5"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Termékleírás</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950">{product.imageLabel}</h2>
              <p className="mt-4 text-base font-medium leading-8 text-slate-600">{product.description}</p>

              <div className="mt-6 flex gap-1 text-slate-950">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
                <span className="ml-2 text-sm font-bold text-slate-500">{product.rating}/5 értékelés</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-black uppercase tracking-tight text-slate-950">Műszaki adatok</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div key={spec} className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800">
                  {spec}
                </div>
              ))}
              <div className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800">Gyártó: {product.brand}</div>
              <div className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800">Kategória: {product.category}</div>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <section className="bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Rendelési információk</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">Hogyan tudod megvenni?</h2>
              <ol className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
                {["Kosárba teszed a terméket", "Megadod a szállítási vagy átvételi módot", "Fizetsz online, utánvéttel vagy átutalással", "Átvételkor ellenőrizheted a csomagot"].map((step, index) => (
                  <li key={step} className="grid grid-cols-[32px_1fr] items-start gap-3">
                    <span className="grid h-8 w-8 place-items-center bg-[#74c43a] text-sm font-black text-slate-950">{index + 1}</span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Csomag és támogatás</p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-slate-950">Mit kapsz mellé?</h2>
              <div className="mt-5 grid gap-3 text-sm font-semibold text-slate-700">
                <div className="border border-slate-200 bg-slate-50 px-4 py-3">Gyári csomagolás és tartozékok</div>
                <div className="border border-slate-200 bg-slate-50 px-4 py-3">Magyar számla és garanciajegy</div>
                <div className="border border-slate-200 bg-slate-50 px-4 py-3">Előzetes készletellenőrzés rendelés előtt</div>
                <div className="border border-slate-200 bg-slate-50 px-4 py-3">Segítség kompatibilitási kérdésekben</div>
              </div>
            </section>
          </div>
        </div>

        <aside className="h-fit bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:sticky lg:top-24">
          <div className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Online ár</div>
          {product.oldPrice ? <div className="mt-3 text-sm font-bold text-slate-400 line-through">{product.oldPrice}</div> : null}
          <div className="mt-1 text-4xl font-black text-[#c8202f]">{product.price}</div>
          <div className="mt-3 inline-flex bg-[#74c43a] px-3 py-1 text-xs font-black uppercase text-slate-950">{product.stock}</div>

          <div className="mt-6 grid gap-3">
            <button className="flex h-14 items-center justify-center gap-3 bg-[#74c43a] text-base font-black uppercase tracking-wide text-slate-950 transition hover:bg-[#65ad31]">
              <ShoppingCart size={20} />
              Kosárba teszem
            </button>
            <button className="flex h-12 items-center justify-center gap-3 border border-slate-300 bg-white text-sm font-black uppercase tracking-wide text-slate-800 transition hover:border-slate-950">
              <Heart size={18} />
              Kedvencekhez
            </button>
          </div>

          <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5">
            <div className="flex gap-3 text-sm font-semibold text-slate-700">
              <Truck className="mt-0.5 text-[#74c43a]" size={19} />
              Másnapi kiszállítás raktári termékeknél.
            </div>
            <div className="flex gap-3 text-sm font-semibold text-slate-700">
              <ShieldCheck className="mt-0.5 text-[#74c43a]" size={19} />
              Magyar garancia és számlás ügyintézés.
            </div>
            <div className="flex gap-3 text-sm font-semibold text-slate-700">
              <PackageCheck className="mt-0.5 text-[#74c43a]" size={19} />
              Biztonságos csomagolás, sérülésvédelem.
            </div>
            <div className="flex gap-3 text-sm font-semibold text-slate-700">
              <CreditCard className="mt-0.5 text-[#74c43a]" size={19} />
              Bankkártya, utánvét vagy átutalás.
            </div>
          </div>
        </aside>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="border-t border-slate-200 bg-[#edf0f4] px-3 py-9 sm:px-4">
          <div className="mb-5 border-l-8 border-[#74c43a] bg-white px-5 py-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Kapcsolódó ajánlatok</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-950">Ezek is érdekelhetnek</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductGridCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
}
