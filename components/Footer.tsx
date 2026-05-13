const footerColumns = [
  {
    title: "Vásárlás",
    links: ["Szállítás és átvétel", "Fizetési módok", "Garancia", "Visszaküldés"],
  },
  {
    title: "TEMPLATE",
    links: ["Rólunk", "Kapcsolat", "Üzletek", "Karrier"],
  },
  {
    title: "Segítség",
    links: ["Rendeléskövetés", "Gyakori kérdések", "Kompatibilitási tanácsadás", "Szerviz"],
  },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-slate-200 bg-[#0b1220] text-slate-300">
      <div className="mx-auto max-w-7xl px-3 py-8 sm:px-4">
        <div className="grid gap-3 border-b border-white/10 pb-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
          {["Másnapi kiszállítás", "Személyes átvétel", "Biztonságos fizetés", "Hivatalos garancia"].map((label) => (
            <div key={label} className="font-medium text-white">
              {label}
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_2fr_.9fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-10 w-10 place-items-center overflow-hidden">
                <img
                  src="https://www.honlapholnapra.hu/Honlapholnapra_logo_small.webp"
                  alt="TEMPLATE"
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <div className="text-xl font-semibold text-white">TEMPLATE</div>
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Elektronika webshop</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-6 text-slate-400">
              Technikai specifikációkra épített webshop, ahol gyorsan összehasonlíthatod az alkatrészeket és készletről rendelhetsz.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">{column.title}</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-lime-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-4 ring-1 ring-white/10">
            <div className="text-sm font-semibold uppercase tracking-wide text-white">
              Szakértői segítség
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Nem biztos a kompatibilitásban? Írj nekünk, és segítünk processzort, alaplapot, memóriát vagy tápegységet választani.
            </p>
            <button className="mt-4 w-full bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-100">
              Kapcsolatfelvétel
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 TEMPLATE. Minden jog fenntartva.</span>
          <span>DESIGN TEMPLATE BY HONLAPHOLNAPRA.HU</span>
        </div>
      </div>
    </footer>
  );
}
