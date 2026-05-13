"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Heti konfigurációs ajánló",
    title: "Stabil AM5 gép\nbővítésre kész",
    description:
      "Ryzen processzor, B650 alaplap, DDR5 memória és RTX videokártya átlátható, készletről rendelhető csomagban.",
    image: "/clean-hardware-banner.png",
    primary: "Konfiguráció megnyitása",
    secondary: "Alkatrészek böngészése",
    stats: ["312 940 Ft", "1-2 nap", "36 hó"],
  },
  {
    eyebrow: "Periféria válogatás",
    title: "Tiszta setup\nmunka után játékra",
    description:
      "Mechanikus billentyűzet, vezeték nélküli egér és zárt headset csendes, rendezett asztali környezethez.",
    image: "/clean-peripherals-banner.png",
    primary: "Perifériák megnyitása",
    secondary: "Top eszközök",
    stats: ["24 990 Ft-tól", "Raktáron", "2 év"],
  },
  {
    eyebrow: "Laptop és monitor",
    title: "Munkaállomás\nkevesebb kábelből",
    description:
      "USB-C dokkoló, hordozható SSD, vékony laptop és nagy monitor egy letisztult home office csomagban.",
    image: "/clean-laptop-monitor-banner.png",
    primary: "Munkaállomások",
    secondary: "Monitor ajánló",
    stats: ["189 990 Ft-tól", "1-3 nap", "USB-C"],
  },
];

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <section className="border-b border-slate-200 bg-[#f3f5f7]">
      <div className="relative grid min-h-[760px] overflow-hidden lg:min-h-screen lg:grid-cols-[42%_58%]">
        <div className="relative z-10 flex flex-col justify-center px-5 pb-10 pt-10 sm:px-10 lg:px-14 xl:px-16">
          <div key={activeSlide.title} className="animate-[heroContentIn_.85s_cubic-bezier(.22,1,.36,1)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c8202f]">{activeSlide.eyebrow}</p>
            <h1 className="mt-4 whitespace-pre-line text-5xl font-black uppercase leading-[1.02] tracking-tight text-slate-950 sm:text-7xl xl:text-8xl">
              {activeSlide.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-slate-600 xl:text-xl">
              {activeSlide.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button className="h-14 bg-[#74c43a] px-8 text-base font-black uppercase tracking-wide text-white shadow-sm transition hover:bg-[#65ad31]">
                {activeSlide.primary}
              </button>
              <button className="h-14 border border-slate-300 bg-white/80 px-8 text-base font-black uppercase tracking-wide text-slate-800 shadow-sm transition hover:bg-white">
                {activeSlide.secondary}
              </button>
            </div>
            <dl className="mt-8 grid max-w-lg grid-cols-3 border-y border-slate-300/80 py-4 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Ár</dt>
                <dd className="mt-1 font-black text-slate-950">{activeSlide.stats[0]}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Átvétel</dt>
                <dd className="mt-1 font-black text-slate-950">{activeSlide.stats[1]}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-slate-500">Garancia</dt>
                <dd className="mt-1 font-black text-slate-950">{activeSlide.stats[2]}</dd>
              </div>
            </dl>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 transition-all ${
                  index === activeIndex ? "w-12 bg-[#74c43a]" : "w-7 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`${index + 1}. ajánlat megnyitása`}
              />
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-screen">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(255,255,255,.9),rgba(226,232,240,.28)_48%,rgba(226,232,240,.05)_70%)]" />
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover object-right-center transition duration-1000 ease-out ${
                index === activeIndex ? "translate-x-0 scale-100 opacity-100" : "translate-x-6 scale-[1.015] opacity-0"
              }`}
            />
          ))}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f3f5f7] to-transparent" />
          <div className="absolute bottom-7 right-7 hidden border border-white/70 bg-white/72 px-5 py-4 shadow-sm backdrop-blur-md md:block">
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Aktív ajánlat</div>
            <div className="mt-1 text-sm font-black text-slate-950">{activeSlide.stats[0]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
