import { FENG_SHUI, LIGHT_POINTS } from "@/lib/house-data";

export function LightAir() {
  return (
    <section id="anh-sang" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">04 — Sáng và gió</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Nhà ống 18 m sống được là nhờ hai giếng
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Giếng giữa nhà chính là dải thang chữ U sát tường trái, mái kính ngay trên đầu thang — sáng đỉnh, hút nóng. Sân sau 4 m là giếng
          thứ hai, cấp sáng cho cửa sau hành lang tầng 1 và cửa sổ phòng ngủ 04; phòng ông bà tường hậu kín, yên tĩnh, vay sáng qua ô kính trên cao ra hành lang; dải WC tầng 1 ép sát tường trái, nối liền sau phòng ngủ, chạy hết chiều sâu sân; vườn liền bên phải. Gió đi trước–sau; khí nóng đi
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
              alt="Giếng trời thông tầng ngay trên cầu thang gỗ, lan can kính"
              className="aspect-portrait w-full object-cover sm:aspect-tall"
            />
            <figcaption className="px-4 py-3 text-xs tracking-wide text-paper/70">
              Giếng trời trên thang — stack effect + sáng đỉnh cho phòng ngủ 03
            </figcaption>
          </figure>
          <figure className="overflow-hidden rounded-xl bg-ink">
            <img
              src="/images/rear.jpg"
              alt="Sân sau 4 mét với cây và cửa sổ phòng ngủ 04 tầng 2"
              className="aspect-land w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-xs tracking-wide text-paper/70">
              Sân sau 4.00 m — giếng trời thứ hai, cửa sau hành lang và phòng ngủ 04 mở ra đây, dải WC tầng 1 ép sát tường trái sân
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

      {/* 16.33 px/m: khối nhà 152–446 · thang chữ U T1: chiếu nghỉ trước y 4.0–5.0 (217–234) +0.60, vế dài y 5.0→8.9 (234→297),
          chiếu nghỉ sau y 8.9–9.9 (297–314) +3.00, cạnh 3 lên T2 tại 314 · vế T2 y 6.0→10.94 (250→331) · lỗ sàn T2 y 6.0–9.9 (250–314), lỗ sàn tum + mái kính y 7.1–10.94 (273–331) · tum y 4.5–13.8 (225–377) */}
      <g fill="var(--color-surface)" stroke="var(--color-ink)" strokeWidth="1.4">
        <rect x="152" y="150" width="294" height="60" />
        <rect x="152" y="96" width="294" height="54" />
        <rect x="225" y="48" width="152" height="48" />
      </g>
      <g stroke="var(--color-ink)" strokeWidth="1">
        <line x1="371" y1="150" x2="371" y2="210" />
        <line x1="234" y1="96" x2="234" y2="150" />
        <line x1="340" y1="96" x2="340" y2="150" />
        <line x1="395" y1="96" x2="395" y2="150" />
        <line x1="315" y1="48" x2="315" y2="96" />
      </g>

      {/* giếng trời = dải thang: lỗ mái + lỗ sàn tum, lỗ sàn T2; vế dài T1 và vế T2 chồng nhau · WC T2 y 8.4–10.4; WC T1 là dải riêng sát tường trái suốt sân y 18–21.8 (446–508) */}
      <path
        d="M273 48 H331 V96 H314 V150 H250 V96 H273 Z"
        fill="var(--color-plan-void)"
        stroke="var(--color-ink)"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
      <path d="M217 210 V200 H234 L297 160 H314 V150 M250 150 L331 96" fill="none" stroke="var(--color-faint)" strokeWidth="1.2" strokeDasharray="3 2" />
      <rect x="289" y="114" width="33" height="36" fill="var(--color-plan-wc)" stroke="var(--color-ink)" strokeWidth="1" />
      <line x1="269" y1="44" x2="335" y2="44" stroke="var(--color-mat-glass)" strokeWidth="3" />
      <text x="295" y="62" textAnchor="middle" fill="var(--color-sage)" fontSize="8" fontFamily="Outfit, sans-serif">
        Dải thang
      </text>

      <rect x="446" y="48" width="64" height="162" fill="var(--color-plan-outdoor)" opacity="0.85" stroke="var(--color-sage)" strokeWidth="1" strokeDasharray="3 3" />
      <text x="476" y="128" textAnchor="middle" fill="var(--color-sage)" fontSize="10" fontFamily="Outfit, sans-serif">
        Sân sau
      </text>
      <text x="476" y="142" textAnchor="middle" fill="var(--color-muted)" fontSize="9" fontFamily="Outfit, sans-serif">
        4 m
      </text>
      {/* dải WC T1 sát tường trái, liền sau tường hậu: mái bằng +3.23 (≈ 16.67 px/m chiều cao), y 18–21.8; mái kính +2.95 che lối từ cửa sau tới cửa WC (y 18–19.4) */}
      <rect x="446" y="156" width="62" height="54" fill="var(--color-plan-wc)" stroke="var(--color-ink)" strokeWidth="1" />
      <line x1="446" y1="161" x2="469" y2="161" stroke="var(--color-mat-glass)" strokeWidth="2.5" />

      <rect x="152" y="48" width="73" height="8" fill="var(--color-plan-outdoor)" stroke="var(--color-ink)" strokeWidth="1" />
      <rect x="377" y="48" width="69" height="8" fill="var(--color-plan-outdoor)" stroke="var(--color-ink)" strokeWidth="1" />

      <text x="201" y="184" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        Khách
      </text>
      <text x="300" y="202" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        Bếp
      </text>
      <text x="408" y="184" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 01
      </text>
      <text x="201" y="126" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 02
      </text>
      <text x="367" y="126" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 03
      </text>
      <text x="420" y="126" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        PN 04
      </text>
      <text x="250" y="76" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        Thờ
      </text>
      <text x="346" y="76" textAnchor="middle" fill="var(--color-ink)" fontSize="10" fontFamily="Outfit, sans-serif">
        Sảnh
      </text>
      <text x="488" y="196" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="Outfit, sans-serif">
        WC
      </text>
      <text x="305.5" y="138" textAnchor="middle" fill="var(--color-muted)" fontSize="8" fontFamily="Outfit, sans-serif">
        WC
      </text>

      <path d="M40 188 C 80 188, 120 188, 160 176" fill="none" stroke="var(--color-oak)" strokeWidth="1.2" markerEnd="url(#arr)" />
      <path d="M200 168 H 470" fill="none" stroke="var(--color-oak)" strokeWidth="1.2" />
      <path d="M318 200 V 52" fill="none" stroke="var(--color-sage)" strokeWidth="1.3" />
      <path d="M498 150 V 58" fill="none" stroke="var(--color-sage)" strokeWidth="1.3" />

      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6" fill="var(--color-oak)" />
        </marker>
      </defs>

      <text x="88" y="178" fill="var(--color-oak)" fontSize="9" fontFamily="Outfit, sans-serif">
        gió vào
      </text>
      <text x="338" y="42" fill="var(--color-sage)" fontSize="9" fontFamily="Outfit, sans-serif">
        nóng thoát
      </text>
    </svg>
  );
}
