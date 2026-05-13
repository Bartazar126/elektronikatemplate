import { ChevronDown, X } from "lucide-react";

const activeFilters = ["ASUS", "AM5", "DDR5", "Raktáron"];

export function CatalogToolbar() {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white">
      <div className="flex flex-col gap-3 border-b border-slate-200 p-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-950 sm:text-2xl">Népszerű alkatrészek</h1>
          <p className="mt-1 text-sm text-slate-500">Válogatott hardverek tiszta specifikációval és gyors kosárba rakással.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="bg-[#74c43a] px-3 py-2 text-sm font-semibold text-white">
            Legnépszerűbb
          </button>
          <button className="border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-500">
            Olcsóbbak előre
          </button>
          <button className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-500">
            Raktáron előre
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 hover:border-slate-500">
            24 / oldal
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 p-3">
        <span className="text-sm font-bold text-slate-600">Aktív szűrők:</span>
        {activeFilters.map((filter) => (
          <button
            key={filter}
            className="flex items-center gap-1 border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700"
          >
            {filter}
            <X size={13} />
          </button>
        ))}
        <button className="text-xs font-black text-slate-500 underline underline-offset-2">Összes törlése</button>
      </div>
    </div>
  );
}
