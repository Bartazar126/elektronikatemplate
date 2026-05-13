const pcParts = [
  ["Videokártya", "312 termék", "RTX 4060 Ti-tól RTX 4080-ig"],
  ["Processzor", "186 termék", "AMD AM5 és Intel LGA1700"],
  ["Alaplap", "247 termék", "B650, X670, B760, Z790"],
  ["Memória", "421 termék", "DDR5 5600-7200 MHz kitekkel"],
];

const peripherals = [
  ["Egér", "164 termék", "vezetékes és vezeték nélküli gamer modellek"],
  ["Billentyűzet", "132 termék", "mechanikus, low profile és irodai kivitel"],
  ["Headset", "98 termék", "USB, jack és vezeték nélküli opciók"],
  ["Monitor", "205 termék", "24-34 col, IPS, VA, 144-240 Hz"],
];

function PcPartsVisual() {
  return (
    <div className="relative h-52 overflow-hidden bg-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,.05)_1px,transparent_1px),linear-gradient(0deg,rgba(15,23,42,.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute left-7 top-10 h-28 w-24 -rotate-6 border border-slate-300 bg-white p-3 shadow-md">
        <div className="text-[10px] font-bold uppercase text-[#c8202f]">CPU</div>
        <div className="mt-2 text-2xl font-black text-slate-950">AM5</div>
        <div className="mt-3 h-8 bg-slate-100" />
      </div>
      <div className="absolute left-32 top-7 h-36 w-32 rotate-3 border border-slate-500 bg-slate-800 p-3 shadow-lg">
        <div className="grid h-full grid-cols-3 gap-2">
          <div className="col-span-2 border border-slate-500 bg-slate-700" />
          <div className="border border-slate-600 bg-slate-950" />
          <div className="col-span-3 h-5 border border-slate-500 bg-slate-950" />
          <div className="col-span-2 border border-slate-500 bg-slate-700" />
        </div>
      </div>
      <div className="absolute bottom-8 right-7 h-20 w-48 -rotate-3 border border-slate-500 bg-slate-950 p-2 shadow-xl">
        <div className="flex h-full items-center gap-3">
          {[0, 1].map((fan) => (
            <span key={fan} className="grid h-11 w-11 place-items-center rounded-full border border-slate-600 bg-slate-800">
              <span className="h-6 w-6 rounded-full border-4 border-slate-500" />
            </span>
          ))}
          <span className="text-xs font-black uppercase text-white">RTX</span>
        </div>
      </div>
      <div className="absolute right-20 top-6 flex gap-2">
        {[0, 1].map((stick) => (
          <span key={stick} className="h-28 w-4 border border-slate-600 bg-slate-950">
            <span className="block h-full w-1 bg-[#74c43a]" />
          </span>
        ))}
      </div>
    </div>
  );
}

function PeripheralVisual() {
  return (
    <div className="relative h-52 overflow-hidden bg-slate-100">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.8),rgba(226,232,240,.2))]" />
      <div className="absolute bottom-8 left-8 h-20 w-56 border border-slate-300 bg-slate-950 p-3 shadow-lg">
        <div className="grid grid-cols-12 gap-1">
          {Array.from({ length: 36 }).map((_, index) => (
            <span key={index} className="h-2 bg-slate-600" />
          ))}
        </div>
      </div>
      <div className="absolute right-20 top-14 h-28 w-20 rounded-full border border-slate-300 bg-slate-900 shadow-lg">
        <div className="mx-auto mt-5 h-10 w-1 rounded-full bg-[#74c43a]" />
      </div>
      <div className="absolute left-20 top-8 h-24 w-28 rounded-t-full border-[10px] border-slate-900 border-b-transparent" />
      <div className="absolute left-12 top-24 h-20 w-14 border border-slate-400 bg-slate-800" />
      <div className="absolute left-32 top-24 h-20 w-14 border border-slate-400 bg-slate-800" />
    </div>
  );
}

export function CategoryShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-3 py-5 sm:px-4">
      <div className="border border-slate-200 bg-white">
        <div className="border-b border-slate-200 px-4 py-3">
          <h2 className="text-base font-semibold text-slate-950">Gyakran keresett kategóriák</h2>
        </div>
        <div className="grid divide-y divide-slate-200 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          <article className="grid md:grid-cols-[0.95fr_1.05fr]">
            <PcPartsVisual />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c8202f]">PC Alkatrészek</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">Processzor, GPU, alaplap és memória egy helyen.</h3>
              <div className="mt-4 divide-y divide-slate-100">
                {pcParts.map(([name, count, example]) => (
                  <a key={name} href="#" className="grid grid-cols-[1fr_auto] gap-3 py-3 hover:text-[#74c43a]">
                    <span>
                      <span className="block text-sm font-semibold text-slate-950">{name}</span>
                      <span className="mt-1 block text-xs text-slate-500">{example}</span>
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{count}</span>
                  </a>
                ))}
              </div>
            </div>
          </article>

          <article className="grid md:grid-cols-[0.95fr_1.05fr]">
            <PeripheralVisual />
            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#c8202f]">Perifériák</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-950">Egér, billentyűzet, headset és monitor gyorsan szűrhető adatokkal.</h3>
              <div className="mt-4 divide-y divide-slate-100">
                {peripherals.map(([name, count, example]) => (
                  <a key={name} href="#" className="grid grid-cols-[1fr_auto] gap-3 py-3 hover:text-[#74c43a]">
                    <span>
                      <span className="block text-sm font-semibold text-slate-950">{name}</span>
                      <span className="mt-1 block text-xs text-slate-500">{example}</span>
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{count}</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
