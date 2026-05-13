import { Clock3, MapPin, PackageCheck, ShieldCheck, Truck } from "lucide-react";

const serviceCards = [
  {
    title: "Másnapi kiszállítás",
    text: "Raktári termékeknél munkanapokon 16:00-ig leadott rendelés esetén.",
    meta: "1-2 munkanap",
    icon: Truck,
  },
  {
    title: "Magyar garancia",
    text: "Átlátható garanciaidő, számlával és hazai ügyintézéssel.",
    meta: "24-36 hónap",
    icon: ShieldCheck,
  },
  {
    title: "Átvételi pontok",
    text: "Csomagpont, automata és futár opciók, rendelésenként választható módon.",
    meta: "Országosan",
    icon: MapPin,
  },
  {
    title: "Biztonságos csomagolás",
    text: "Monitor, konzol és nagyobb háztartási gép külön csomagvédelmi kezeléssel.",
    meta: "Sérülésvédelem",
    icon: PackageCheck,
  },
];

export function ReviewMarquee() {
  return (
    <section className="border-y border-slate-800 bg-slate-950 px-3 py-10 text-white sm:px-4">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#74c43a]">Szállítás és garancia</p>
          <h2 className="mt-1 text-3xl font-black uppercase tracking-tight">Rendelés után is rendben</h2>
        </div>
        <div className="flex items-center gap-2 border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-bold text-slate-200">
          <Clock3 size={17} className="text-[#74c43a]" />
          Valós készletinformáció minden terméknél
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-4">
        {serviceCards.map(({ title, text, meta, icon: Icon }) => (
          <article key={title} className="border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#74c43a]/50 hover:bg-white/[0.08]">
            <div className="mb-5 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center bg-[#74c43a] text-slate-950">
                <Icon size={22} />
              </span>
              <span className="text-xs font-black uppercase tracking-[0.16em] text-[#b8f07a]">{meta}</span>
            </div>
            <h3 className="text-lg font-black text-white">{title}</h3>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-300">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-4 grid gap-4 border border-white/10 bg-black/20 p-5 lg:grid-cols-[1.2fr_.8fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-400">Ügyintézés</p>
          <h3 className="mt-1 text-2xl font-black tracking-tight">Kérdésed van kompatibilitásról vagy szállításról?</h3>
        </div>
        <div className="flex flex-wrap items-center gap-3 lg:justify-end">
          <button className="bg-white px-5 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition hover:bg-[#74c43a]">
            Segítséget kérek
          </button>
          <button className="border border-white/15 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-[#74c43a] hover:text-[#b8f07a]">
            Szállítási infók
          </button>
        </div>
      </div>
    </section>
  );
}
