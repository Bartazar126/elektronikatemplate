"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProductShelf } from "@/components/ProductShelf";
import { ReviewMarquee } from "@/components/ReviewMarquee";
import { products, saleProducts, topProducts } from "@/app/data";

const allCategory = "Összes";
const categories = [allCategory, ...Array.from(new Set(products.map((product) => product.category)))];

export function HomePageClient() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-gray-50">
      <Header
        categories={categories}
        selectedCategory={allCategory}
        searchQuery={searchQuery}
        onCategorySelect={() => undefined}
        onSearchChange={setSearchQuery}
      />
      <HeroSection />

      <ProductShelf title="Heti ajánlatok" type="sale" products={saleProducts} />
      <ProductShelf title="Legnépszerűbbek" type="top" products={topProducts} />

      <section className="border-y border-slate-200 bg-white px-3 py-8 sm:px-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-l-8 border-[#74c43a] bg-slate-50 px-5 py-5">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Teljes katalógus</p>
            <h2 className="text-3xl font-black uppercase tracking-tight text-slate-950">Még több termék és szűrő</h2>
          </div>
          <Link
            href="/products"
            className="bg-[#74c43a] px-6 py-4 text-sm font-black uppercase tracking-wide text-slate-950 shadow-sm transition hover:bg-slate-950 hover:text-white"
          >
            Megnézem a további termékeket
          </Link>
        </div>
      </section>

      <ReviewMarquee />

      <section className="w-full bg-slate-100 px-3 py-6 sm:px-4">
        <div className="grid gap-3 border border-slate-200 bg-white p-4 text-sm text-slate-700 lg:grid-cols-3">
          <div className="font-semibold">Valós készletinformáció minden terméknél</div>
          <div className="font-semibold">Kompatibilitási ellenőrzés PC alkatrészekhez</div>
          <div className="font-semibold">Másnapi kézbesítés raktári termékeknél</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
