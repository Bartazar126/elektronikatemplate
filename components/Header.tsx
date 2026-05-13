"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  CircleUserRound,
  Heart,
  X,
  Monitor,
  Search,
  ShoppingCart,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { products } from "@/app/data";

type HeaderProps = {
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  onCategorySelect: (category: string) => void;
  onSearchChange: (query: string) => void;
};

export function Header({ categories, selectedCategory, searchQuery, onCategorySelect, onSearchChange }: HeaderProps) {
  /** Panel mounted; panelOpen flips after one paint so the transition runs reliably. */
  const [menuVisible, setMenuVisible] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const panelRafRef = useRef<{ outer?: number; inner?: number }>({});
  const router = useRouter();
  const pathname = usePathname();
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const searchMatches = useMemo(() => {
    if (normalizedSearchQuery.length < 2) return [];

    return products
      .filter((product) =>
        [product.brand, product.title, product.category, product.imageLabel, product.price, product.stock, ...product.specs]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearchQuery),
      )
      .slice(0, 4);
  }, [normalizedSearchQuery]);

  const showSearchPanel = isSearchOpen && normalizedSearchQuery.length >= 2;

  const selectCategory = (category: string) => {
    onCategorySelect(category);
    requestMenuClose();
    const query = category === "Összes" ? "" : `?category=${encodeURIComponent(category)}`;

    if (pathname === "/products") {
      router.replace(`/products${query}`);
      return;
    }

    router.push(`/products${query}`);
  };

  const cancelPanelOpenSchedule = () => {
    const { outer, inner } = panelRafRef.current;
    if (outer != null) cancelAnimationFrame(outer);
    if (inner != null) cancelAnimationFrame(inner);
    panelRafRef.current = {};
  };

  const requestMenuClose = () => {
    cancelPanelOpenSchedule();
    setPanelOpen((wasOpen) => {
      if (!wasOpen) {
        queueMicrotask(() => setMenuVisible(false));
      }
      return false;
    });
  };

  useEffect(() => {
    if (!menuVisible) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestMenuClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuVisible]);

  useEffect(() => {
    if (!menuVisible) return;
    cancelPanelOpenSchedule();
    setPanelOpen(false);
    panelRafRef.current.outer = requestAnimationFrame(() => {
      panelRafRef.current.inner = requestAnimationFrame(() => {
        panelRafRef.current = {};
        setPanelOpen(true);
      });
    });
    return () => cancelPanelOpenSchedule();
  }, [menuVisible]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <button
        type="button"
        onClick={() => setMenuVisible(true)}
        className="group absolute left-0 top-0 z-20 h-20 w-24 overflow-hidden text-white"
        aria-label="Menü"
      >
        <span className="absolute -left-9 -top-10 h-28 w-28 rotate-45 bg-[#c8202f] shadow-[0_10px_26px_rgba(200,32,47,.22)] transition group-hover:bg-[#ad1b28]" />
        <span className="absolute left-5 top-5 flex flex-col gap-1.5">
          <span className="h-0.5 w-6 rounded-full bg-white" />
          <span className="h-0.5 w-6 rounded-full bg-white" />
          <span className="h-0.5 w-6 rounded-full bg-white" />
        </span>
      </button>

      <nav className="ml-16 mr-3 mt-2.5 flex h-[62px] items-center gap-3 rounded-2xl border border-white/70 bg-white/78 px-3 shadow-[0_14px_40px_rgba(15,23,42,.1)] backdrop-blur-2xl sm:mr-5 lg:ml-20">
        <Link href="/" className="flex min-w-fit shrink-0 items-center gap-3 rounded-xl px-1.5 py-1 transition hover:bg-white/55">
          <span className="grid h-11 w-11 place-items-center overflow-hidden">
            <img
              src="https://www.honlapholnapra.hu/Honlapholnapra_logo_small.webp"
              alt="TEMPLATE"
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden leading-tight md:block">
            <span className="block text-[17px] font-black tracking-tight text-slate-950">TEMPLATE</span>
            <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">Webshop demo</span>
          </span>
        </Link>

        <Link
          href="/products"
          className="hidden h-11 items-center whitespace-nowrap rounded-xl border border-slate-200 bg-white/76 px-3.5 text-[12px] font-black uppercase tracking-wide text-slate-900 shadow-sm transition hover:bg-[#74c43a] hover:text-slate-950 xl:flex"
        >
          Összes termék
        </Link>

        <div className="relative mx-1 min-w-0 flex-1">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="flex min-w-0 items-center overflow-hidden rounded-2xl border border-slate-200/90 bg-white/86 shadow-inner shadow-slate-200/50 transition focus-within:border-[#74c43a] focus-within:bg-white focus-within:shadow-white"
          >
            <span className="hidden h-9 items-center gap-2 border-r border-slate-200 px-4 text-xs font-bold uppercase tracking-wide text-slate-500 lg:flex">
              <Monitor size={15} />
              Termékek
            </span>
            <input
              value={searchQuery}
              onFocus={() => setIsSearchOpen(true)}
              onChange={(event) => {
                onSearchChange(event.target.value);
                setIsSearchOpen(true);
              }}
              className="h-11 min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-slate-800 outline-none placeholder:text-slate-400"
              placeholder="Keress termékre, cikkszámra vagy kategóriára..."
            />
            <button
              className="mr-1 grid h-9 w-10 place-items-center rounded-xl bg-slate-950 text-white transition hover:bg-[#74c43a]"
              aria-label="Keresés"
            >
              <Search size={21} />
            </button>
          </form>

          {showSearchPanel ? (
            <div className="absolute left-0 right-0 top-[calc(100%+10px)] z-50 animate-[searchPanelIn_.22s_ease-out] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,.18)]">
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <span className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">Keresési találatok</span>
                <button
                  type="button"
                  onClick={() => setIsSearchOpen(false)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-950"
                >
                  bezárás
                </button>
              </div>

              {searchMatches.length > 0 ? (
                <div className="grid divide-y divide-slate-100">
                  {searchMatches.map((product) => (
                    <Link
                      key={product.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                      }}
                      href={`/products/${product.slug}`}
                      className="grid grid-cols-[76px_1fr_auto] items-center gap-3 px-4 py-3 text-left transition hover:bg-slate-50"
                    >
                      <span className="flex h-16 w-[76px] items-center justify-center overflow-hidden bg-slate-50 ring-1 ring-slate-100">
                        <img
                          src={product.imageUrl}
                          alt=""
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer-when-downgrade"
                          className="max-h-full max-w-full object-contain p-1.5"
                        />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] font-black uppercase tracking-wide text-slate-400">{product.brand}</span>
                        <span className="mt-0.5 line-clamp-2 block text-sm font-black leading-tight text-slate-950">{product.title}</span>
                        <span className="mt-1 block text-xs font-semibold text-slate-500">{product.category}</span>
                      </span>
                      <span className="text-right">
                        <span className="block text-sm font-black text-[#c8202f]">{product.price}</span>
                        <span className="mt-1 inline-block bg-[#74c43a] px-2 py-1 text-[11px] font-black uppercase text-slate-950">
                          van ilyen
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-5 text-sm font-semibold text-slate-600">
                  Nincs ilyen termék a jelenlegi kínálatban.
                </div>
              )}
            </div>
          ) : null}
        </div>

        <button className="hidden h-11 items-center gap-2 rounded-xl border border-slate-200 bg-white/76 px-3.5 text-[12px] font-bold uppercase tracking-wide text-slate-900 shadow-sm transition hover:bg-white lg:flex">
          <CircleUserRound size={18} />
          Belépés
        </button>
        <button className="hidden h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white/76 text-slate-900 shadow-sm transition hover:bg-white lg:grid" aria-label="Kedvencek">
          <Heart size={17} />
        </button>
        <button className="relative flex h-11 items-center gap-2 rounded-xl bg-[#74c43a] px-4 text-[12px] font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[#65ad31]">
          <ShoppingCart size={18} />
          <span className="hidden sm:block">Kosár</span>
          <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-slate-900 text-[11px] text-white">
            2
          </span>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-slate-950/38 backdrop-blur-[1px] transition-opacity duration-500 ${
          menuVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={requestMenuClose}
        aria-hidden
      />

      {menuVisible ? (
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Főmenü"
        data-expanded={panelOpen}
        onTransitionEnd={(event) => {
          if (event.target !== event.currentTarget) return;
          if (event.propertyName !== "transform") return;
          if (!panelOpen) setMenuVisible(false);
        }}
        className="eb-menu-fan pointer-events-auto fixed left-0 top-0 z-50 flex h-[100dvh] max-h-[100dvh] w-[min(92vw,520px)] flex-col overflow-hidden rounded-r-[1.25rem] bg-slate-950 text-white shadow-[18px_0_60px_rgba(15,23,42,0.34)]"
      >
        <div
          className="absolute inset-0 bg-[linear-gradient(145deg,#0f172a_0%,#111827_58%,#3b1017_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-[#74c43a]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute right-0 top-24 h-[70%] w-px bg-gradient-to-b from-transparent via-[#74c43a]/40 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-slate-950/70 to-transparent"
          aria-hidden
        />

        <div className="relative flex h-[88px] shrink-0 items-center justify-between border-b border-white/10 px-5 py-5 sm:px-7">
          <div>
            <div className="text-2xl font-black tracking-tight">TEMPLATE</div>
            <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.26em] text-[#b8f07a]">Gyors navigáció</div>
          </div>
          <button
            type="button"
            onClick={requestMenuClose}
            className="grid h-11 w-11 place-items-center rounded-full bg-white/12 text-white ring-1 ring-white/20 transition hover:scale-105 hover:bg-white/20"
            aria-label="Menü bezárása"
          >
            <X size={22} />
          </button>
        </div>

        <div className="relative min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-10 pt-5 sm:px-7">
          <div>
            <h3 className="mb-3 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] text-[#b8f07a]">
              <span className="h-px w-7 bg-[#b8f07a]/60" />
              Kategóriák
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category, index) => (
              <button
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
                className={`min-h-12 border px-4 py-3 text-left text-sm font-black transition ${
                  selectedCategory === category || (index === 0 && selectedCategory === category)
                    ? "border-[#74c43a]/60 bg-[#74c43a] text-slate-950"
                    : "border-white/10 bg-white/[0.07] text-white hover:border-[#74c43a]/50 hover:bg-white/[0.12]"
                }`}
              >
                {category}
              </button>
              ))}
            </div>
          </div>

          <div className="mt-7 grid gap-2 border border-white/10 bg-black/18 p-4">
            <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/55">Fiók és kosár</div>
            <button
              type="button"
              className="mt-2 flex items-center justify-between border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-black text-white transition hover:border-[#74c43a]/50 hover:bg-white/[0.12]"
            >
              <span className="flex items-center gap-3">
                <CircleUserRound size={18} />
                Belépés
              </span>
              <span className="text-white/35">&rsaquo;</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-between border border-white/10 bg-white/[0.07] px-4 py-3 text-sm font-black text-white transition hover:border-[#74c43a]/50 hover:bg-white/[0.12]"
            >
              <span className="flex items-center gap-3">
                <Heart size={18} />
                Kedvencek
              </span>
              <span className="text-white/35">&rsaquo;</span>
            </button>
          </div>

          <div className="mt-3 grid grid-cols-[1fr_auto] items-center gap-4 border border-[#74c43a]/30 bg-[#74c43a]/10 p-4">
            <div>
              <div className="text-[11px] font-black uppercase tracking-[0.2em] text-white/55">Kosár előnézet</div>
              <div className="mt-1 text-sm font-bold text-white">2 termék vár a kosaradban</div>
            </div>
            <button type="button" className="flex items-center gap-2 bg-[#74c43a] px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-white">
              <ShoppingCart size={16} />
              Megnézem
            </button>
          </div>
        </div>
      </aside>
      ) : null}
    </header>
  );
}
