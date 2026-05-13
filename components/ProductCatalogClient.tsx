"use client";

import { useMemo, useState } from "react";
import { useEffect } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProductGridCard } from "@/components/ProductGridCard";
import { products } from "@/app/data";

const allCategory = "Összes";
const categories = [allCategory, ...Array.from(new Set(products.map((product) => product.category)))];
const maxProductPrice = Math.max(...products.map((product) => product.priceValue));

export function ProductCatalogClient() {
  const [selectedCategory, setSelectedCategory] = useState(allCategory);
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(maxProductPrice);
  const [onlyInStock, setOnlyInStock] = useState(false);

  useEffect(() => {
    const categoryFromUrl = new URLSearchParams(window.location.search).get("category");
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, []);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const categoryMatches = selectedCategory === allCategory || product.category === selectedCategory;
        const priceMatches = product.priceValue <= maxPrice;
        const stockMatches = !onlyInStock || product.stock === "Raktáron";

        return categoryMatches && priceMatches && stockMatches;
      }),
    [maxPrice, onlyInStock, selectedCategory],
  );

  return (
    <main className="min-h-screen bg-[#edf0f4]">
      <Header
        categories={categories}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        onCategorySelect={setSelectedCategory}
        onSearchChange={setSearchQuery}
      />

      <section className="border-b border-slate-200 bg-slate-950 px-3 pb-10 pt-28 text-white sm:px-4">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-[#74c43a]">TEMPLATE katalógus</p>
        <h1 className="mt-2 text-4xl font-black uppercase tracking-tight sm:text-5xl">Összes termék</h1>
        <p className="mt-4 max-w-2xl text-base font-medium leading-7 text-slate-300">
          Minden jelenlegi termék egy helyen, gyors szűréssel ár, kategória és raktárállapot alapján.
        </p>
      </section>

      <section className="grid gap-5 px-3 py-8 sm:px-4 lg:grid-cols-[300px_1fr]">
        <aside className="h-fit border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-slate-950 text-[#74c43a]">
              <SlidersHorizontal size={21} />
            </span>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Szűrők</p>
              <h2 className="text-xl font-black text-slate-950">Találd meg gyorsan</h2>
            </div>
          </div>

          <div className="border-t border-slate-100 py-5">
            <label className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Kategória</label>
            <div className="mt-3 grid gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`border px-3 py-2 text-left text-sm font-black transition ${
                    selectedCategory === category
                      ? "border-[#74c43a] bg-[#74c43a] text-slate-950"
                      : "border-slate-200 bg-white text-slate-700 hover:border-[#74c43a]/60"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-100 py-5">
            <label htmlFor="max-price" className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
              Maximum ár
            </label>
            <input
              id="max-price"
              type="range"
              min={30000}
              max={maxProductPrice}
              step={10000}
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
              className="mt-4 w-full accent-[#74c43a]"
            />
            <div className="mt-2 text-lg font-black text-[#c8202f]">{maxPrice.toLocaleString("hu-HU")} Ft alatt</div>
          </div>

          <label className="flex cursor-pointer items-center gap-3 border-t border-slate-100 pt-5 text-sm font-black text-slate-800">
            <input
              type="checkbox"
              checked={onlyInStock}
              onChange={(event) => setOnlyInStock(event.target.checked)}
              className="h-5 w-5 accent-[#74c43a]"
            />
            Csak raktáron lévő termékek
          </label>
        </aside>

        <div>
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3 border-l-8 border-[#74c43a] bg-white px-5 py-4 shadow-sm">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Találatok</p>
              <h2 className="text-3xl font-black uppercase tracking-tight text-slate-950">{filteredProducts.length} termék</h2>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory(allCategory);
                setMaxPrice(maxProductPrice);
                setOnlyInStock(false);
              }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:border-[#74c43a]/60 hover:text-slate-950"
            >
              Szűrők törlése
            </button>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductGridCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-slate-200 bg-white px-5 py-12 text-center">
              <div className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">Nincs találat</div>
              <p className="mt-2 text-sm font-semibold text-slate-600">Próbálj nagyobb árkeretet vagy más kategóriát.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
