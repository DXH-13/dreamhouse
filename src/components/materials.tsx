import { MATERIALS } from "@/lib/house-data";

export function Materials() {
  return (
    <section id="vat-lieu" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">04 — Mặt tiền</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Ba vật liệu, một nhịp đứng
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Mặt 5 m không chịu được trang trí. Khối vuông, vôi ấm, lam teak, khung
          than chì. Loggia tầng 2 tạo bóng; tum lùi 4.5 m để khối nhà đọc được hai
          tầng rưỡi, không bị ‘hộp’.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MATERIALS.map((m) => (
            <article key={m.name} className="rounded-xl bg-paper p-4 shadow-[var(--shadow-border)]">
              <div className={`h-16 rounded-md ${m.swatch}`} aria-hidden />
              <h3 className="mt-4 font-display text-xl">{m.name}</h3>
              <p className="mt-1 text-xs tracking-wide text-oak uppercase">{m.use}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{m.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          <figure className="overflow-hidden rounded-xl bg-ink lg:col-span-5">
            <img
              src="/images/facade.jpg"
              alt="Mặt đứng nhà phố: khối vôi, lam gỗ, kính lõm tầng 1"
              className="aspect-portrait w-full object-cover"
            />
          </figure>
          <figure className="overflow-hidden rounded-xl bg-ink lg:col-span-7">
            <img
              src="/images/dusk.jpg"
              alt="Mặt tiền lúc chạng vạng, ánh sáng trong nhà lộ qua lam gỗ"
              className="aspect-photo h-full w-full object-cover"
            />
          </figure>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-xl bg-ink">
            <img
              src="/images/living.jpg"
              alt="Phòng khách nhìn xuyên bếp tới giếng trời giữa nhà"
              className="aspect-photo w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs text-paper/70">
              Trục nhìn tầng 1: khách → bếp/ăn → giếng trời
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl bg-ink">
            <img
              src="/images/worship.jpg"
              alt="Phòng thờ trên tum, ban thờ nhìn ra sân thượng mặt tiền"
              className="aspect-photo w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs text-paper/70">
              Phòng thờ tum — ban thờ tựa tường hậu, hướng khoảng thoáng mặt tiền
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
