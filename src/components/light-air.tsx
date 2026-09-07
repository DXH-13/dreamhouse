import { FENG_SHUI, LIGHT_POINTS } from "@/lib/house-data";

export function LightAir() {
  return (
    <section id="anh-sang" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">03 — Sáng và gió</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Nhà ống 18 m sống được là nhờ hai giếng
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Giếng giữa nhà gắn cầu thang — sáng đỉnh, hút nóng. Sân sau 4 m là giếng
          thứ hai, cấp sáng cho hai phòng ngủ cuối. Gió đi trước–sau; khí nóng đi
          dưới–trên.
        </p>

        <div className="mt-10 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <SectionDrawing />
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {LIGHT_POINTS.map((p) => (
            <article key={p.title}>
              <h3 className="font-display text-2xl font-medium">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-xl bg-ink">
            <img
              src="/images/stair.jpg"
              alt="Giếng trời thông tầng cạnh cầu thang gỗ và lan can kính"
              className="aspect-portrait w-full object-cover sm:aspect-tall"
            />
            <figcaption className="px-4 py-3 text-xs tracking-wide text-paper/70">
              Giếng trời giữa — stack effect + sáng đỉnh cho phòng ngủ 03
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl bg-ink">
            <img
              src="/images/rear.jpg"
              alt="Sân sau 4 mét với cây và cửa sổ phòng ngủ cuối"
              className="aspect-land w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs tracking-wide text-paper/70">
              Sân sau 4.00 m — giếng trời thứ hai, phòng ngủ ông bà mở ra đây
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 rounded-xl bg-sage px-5 py-8 text-accent-fg sm:px-8">
          <h3 className="font-display text-2xl font-medium">Phong thủy xây, không phong thủy nói</h3>
          <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-paper/85 sm:grid-cols-2">
            {FENG_SHUI.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-oak" />
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-paper/60">
            Chủ nhà chưa chốt hướng la bàn. Mọi hướng ở đây tính theo mặt tiền lô
            đất — khi có hướng Đông/Tây/Nam sẽ chỉnh vị trí bếp và ban thờ cho khớp.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionDrawing() {
  return (
    <svg viewBox="0 0 640 260" className="w-full" role="img" aria-label="Mặt cắt dọc nhà phố, hai giếng trời">
      <rect width="640" height="260" fill="var(--color-paper)" />
      <text x="24" y="28" fill="var(--color-faint)" fontSize="11" fontFamily="Outfit, sans-serif" letterSpacing="2">
        MẶT CẮT DỌC · TRƯỚC → SAU
      </text>
      <line x1="24" y1="210" x2="616" y2="210" stroke="var(--color-ink)" strokeWidth="1.5" />

      <rect x="24" y="210" width="128" height="8" fill="var(--color-plan-outdoor)" />
      <text x="88" y="236" textAnchor="middle" fill="var(--color-muted)" fontSize="10" fontFamily="Outfit, sans-serif">
        Sân trước 8 m
      </text>

      <g fill="var(--color-surface)" stroke="var(--color-ink)" strokeWidth="1.4">
        <rect x="152" y="150" width="86" height="60" />
        <rect x="238" y="150" width="68" height="60" />
        <rect x="370" y="150" width="76" height="60" />
        <rect x="152" y="96" width="86" height="54" />
        <rect x="238" y="96" width="68" height="54" />
        <rect x="370" y="96" width="76" height="54" />
        <rect x="224" y="48" width="82" height="48" />
      </g>

      <rect x="306" y="48" width="64" height="162" fill="var(--color-plan-void)" stroke="var(--color-ink)" strokeWidth="1" strokeDasharray="4 3" />
      <text x="338" y="128" textAnchor="middle" fill="var(--color-sage)" fontSize="10" fontFamily="Outfit, sans-serif">
        Giếng giữa
      </text>

      <rect x="446" y="48" width="64" height="162" fill="var(--color-plan-outdoor)" opacity="0.85" stroke="var(--color-sage)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="478" y="128" textAnchor="middle" fill="var(--color-sage)" fontSize="10" fontFamily="Outfit, sans-serif">
        Sân sau
      </text>
      <text x="478" y="142" textAnchor="middle" fill="var(--color-muted)" fontSize="9" fontFamily="Outfit, sans-serif">
        4 m
      </text>

      <rect x="152" y="48" width="72" height="8" fill="var(--color-plan-outdoor)" stroke="var(--color-ink)" strokeWidth="1" />
      <rect x="370" y="48" width="76" height="8" fill="var(--color-plan-outdoor)" stroke="var(--color-ink)" strokeWidth="1" />

      <text x="195" y="184" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        Khách
      </text>
      <text x="272" y="184" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        Bếp
      </text>
      <text x="408" y="184" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 01
      </text>
      <text x="195" y="126" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 02
      </text>
      <text x="272" y="126" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 03
      </text>
      <text x="408" y="126" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 04
      </text>
      <text x="265" y="76" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        Thờ
      </text>

      <path d="M40 188 C 80 188, 120 188, 160 176" fill="none" stroke="var(--color-oak)" strokeWidth="1.2" markerEnd="url(#arr)" />
      <path d="M200 168 H 300" fill="none" stroke="var(--color-oak)" strokeWidth="1.2" />
      <path d="M370 168 H 470" fill="none" stroke="var(--color-oak)" strokeWidth="1.2" />
      <path d="M338 190 V 58" fill="none" stroke="var(--color-sage)" strokeWidth="1.3" />
      <path d="M478 190 V 58" fill="none" stroke="var(--color-sage)" strokeWidth="1.3" />

      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="var(--color-oak)" />
        </marker>
      </defs>

      <text x="88" y="178" fill="var(--color-oak)" fontSize="9" fontFamily="Outfit, sans-serif">
        gió vào
      </text>
      <text x="348" y="54" fill="var(--color-sage)" fontSize="9" fontFamily="Outfit, sans-serif">
        nóng thoát
      </text>
    </svg>
  );
}
