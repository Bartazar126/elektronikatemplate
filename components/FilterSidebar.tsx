import { filterGroups } from "@/app/data";

const categoryTree = [
  ["Videokártya", "312"],
  ["Processzor", "186"],
  ["Alaplap", "247"],
  ["Memória", "421"],
  ["SSD meghajtó", "358"],
  ["Tápegység", "143"],
];

export function FilterSidebar() {
  return (
    <aside className="overflow-hidden border border-slate-200 bg-white">
      <div className="flex items-center gap-2 border-b border-slate-200 px-4 py-3">
        <h2 className="font-semibold text-slate-950">Szűrés</h2>
      </div>

      <section className="border-b border-slate-200 p-4">
        <h3 className="mb-3 text-sm font-black uppercase text-slate-600">Kategória</h3>
        <div className="space-y-1">
          {categoryTree.map(([name, count]) => (
            <button
              key={name}
              className="flex w-full items-center justify-between rounded px-2 py-2 text-left text-sm text-slate-700 hover:bg-slate-50"
            >
              <span className="flex items-center gap-1.5 font-semibold">
                {name}
              </span>
              <span className="text-xs text-slate-400">{count}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="border-b border-slate-200 p-4">
        <h3 className="mb-3 text-sm font-black uppercase text-slate-600">Ár</h3>
        <div className="grid grid-cols-2 gap-2">
          <input className="w-full rounded border border-slate-300 px-2 py-2 text-sm" defaultValue="10 000" />
          <input className="w-full rounded border border-slate-300 px-2 py-2 text-sm" defaultValue="300 000" />
        </div>
        <div className="mt-4 h-2 rounded-full bg-slate-200">
          <div className="ml-[12%] h-2 w-[68%] rounded-full bg-[#74c43a]" />
        </div>
        <div className="mt-2 flex justify-between text-xs text-slate-500">
          <span>10 000 Ft</span>
          <span>300 000 Ft</span>
        </div>
      </section>

      {filterGroups.map((group) => (
        <section key={group.title} className="border-b border-slate-200 p-4 last:border-b-0">
          <h3 className="mb-3 text-sm font-black uppercase text-slate-600">{group.title}</h3>
          <div className="space-y-2">
            {group.options.map((option, index) => (
              <label key={option} className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  defaultChecked={index === 0 && group.title !== "Videomemória"}
                  className="h-4 w-4 rounded border-slate-300 accent-[#74c43a]"
                />
                <span className="flex-1">{option}</span>
                <span className="text-xs text-slate-400">{18 + index * 7}</span>
              </label>
            ))}
          </div>
        </section>
      ))}
    </aside>
  );
}
