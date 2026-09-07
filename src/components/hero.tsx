import { HOUSE } from "@/lib/house-data";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="relative h-[min(78vh,40rem)] min-h-[28rem] overflow-hidden bg-ink">
        <img
          src="/images/hero.jpg"
          alt="Phối cảnh mặt tiền nhà phố hiện đại 5×30, sân trước và ô tô"
          className="size-full object-cover object-[center_70%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10">
          <p className="mb-3 text-[11px] tracking-[0.28em] text-paper/80 uppercase">
            Atelier · Phương án A · 2026
          </p>
          <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-medium text-paper sm:text-5xl lg:text-6xl">
            Nhà phố hiện đại
            <span className="italic"> 5 × 30</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-paper/85 sm:text-base">
            Lô 150 m² — khối nhà 5 × 18 m, hai tầng và tum. Bốn phòng ngủ, hai
            giếng trời, phòng thờ hướng mặt tiền.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-paper/15 sm:grid-cols-4">
            {[
              ["Lô đất", `${HOUSE.lotW} × ${HOUSE.lotD} m`],
              ["Xây dựng", `${HOUSE.areaFloor} m²/sàn`],
              ["Quy mô", HOUSE.floors],
              ["Cao độ", `${HOUSE.heightTotal} m`],
            ].map(([k, v]) => (
              <div key={k} className="bg-ink/35 px-4 py-3 backdrop-blur-sm">
                <dt className="text-[10px] tracking-[0.18em] text-paper/60 uppercase">{k}</dt>
                <dd className="mt-1 font-display text-lg text-paper">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
