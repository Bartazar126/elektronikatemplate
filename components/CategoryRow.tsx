type CategoryRowProps = {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
};

export function CategoryRow({ categories, selectedCategory, onCategorySelect }: CategoryRowProps) {
  return (
    <section className="border-y border-slate-800 bg-slate-950 px-3 py-6 sm:px-4">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#74c43a]">Gyors kategóriák</p>
          <h2 className="text-2xl font-black uppercase tracking-tight text-white">Mit keresel?</h2>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="flex min-w-max gap-3">
          {categories.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => onCategorySelect(label)}
              className={`h-12 rounded-full border px-6 text-sm font-bold transition ${
                selectedCategory === label
                  ? "border-[#74c43a] bg-[#74c43a] text-slate-950"
                  : "border-white/10 bg-white/[0.06] text-slate-200 hover:border-[#74c43a] hover:bg-[#74c43a] hover:text-slate-950"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
