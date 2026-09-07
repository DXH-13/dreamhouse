import { HOUSE, SITE_NOTES } from "@/lib/house-data";

const W = HOUSE.lotW;
const D = HOUSE.lotD;
const PAD = 1.6;
const VB_W = W + PAD * 2;
const VB_H = D + PAD * 2;

export function SitePlan() {
  return (
    <section id="tong-mat-bang" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-5">
          <p className="text-[11px] tracking-[0.28em] text-sage uppercase">01 — Lô đất</p>
          <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
            Sáu chục phần trăm là nhà, phần còn lại là phổi
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Chiều sâu 30 m bị cắt thành 8 + 18 + 4. Sân trước giữ xe và cây; khối
            nhà 18 m chứa toàn bộ công năng; sân sau 4 m là giếng trời thứ hai —
            không xây, không mái.
          </p>
          <ol className="mt-8 space-y-5">
            {SITE_NOTES.map((n, i) => (
              <li key={n.title} className="flex gap-4">
                <span className="font-display text-xl text-oak">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-medium text-ink">{n.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{n.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
            <svg
              viewBox={`0 0 ${VB_W} ${VB_H}`}
              className="w-full"
              role="img"
              aria-label="Mặt bằng tổng thể lô đất 5 × 30 mét"
            >
              <rect width={VB_W} height={VB_H} fill="var(--color-paper)" />
              <g transform={`translate(${PAD} ${PAD})`}>
                <rect width={W} height={HOUSE.yardFront} className="plan-outdoor" stroke="var(--color-ink)" strokeWidth="0.03" />
                <rect x="0.15" y="0.4" width="2.5" height="5.1" className="plan-parking" stroke="var(--color-ink)" strokeWidth="0.025" />
                <text x="1.4" y="3.1" textAnchor="middle" fontSize="0.32" fill="var(--color-ink-soft)" fontFamily="Outfit, sans-serif">
                  Ô TÔ
                </text>
                <circle cx="4.15" cy="6.5" r="0.35" fill="var(--color-sage)" opacity="0.55" />
                <circle cx="3.55" cy="7.15" r="0.22" fill="var(--color-sage)" opacity="0.4" />
                <text x="2.5" y="7.55" textAnchor="middle" fontSize="0.28" fill="var(--color-ink-soft)" fontFamily="Outfit, sans-serif">
                  SÂN TRƯỚC 8.00 m
                </text>

                <rect y={HOUSE.yardFront} width={W} height={HOUSE.houseD} fill="var(--color-surface)" stroke="var(--color-ink)" strokeWidth="0.05" />
                <rect
                  x="0.15"
                  y={HOUSE.yardFront + 0.15}
                  width={W - 0.3}
                  height={HOUSE.houseD - 0.3}
                  fill="none"
                  stroke="var(--color-ink)"
                  strokeWidth="0.02"
                  strokeDasharray="0.12 0.08"
                />
                <text x="2.5" y={HOUSE.yardFront + 4.6} textAnchor="middle" fontSize="0.38" fill="var(--color-ink)" fontFamily="Cormorant Garamond, serif">
                  KHỐI NHÀ
                </text>
                <text x="2.5" y={HOUSE.yardFront + 5.15} textAnchor="middle" fontSize="0.28" fill="var(--color-muted)" fontFamily="Outfit, sans-serif">
                  5.00 × 18.00 m · 90 m²/sàn
                </text>
                <rect
                  x="0.2"
                  y={HOUSE.yardFront + 9.6}
                  width="1.1"
                  height="3.6"
                  className="plan-stair"
                  stroke="var(--color-ink)"
                  strokeWidth="0.02"
                />
                <rect
                  x="1.4"
                  y={HOUSE.yardFront + 9.9}
                  width="1.5"
                  height="2.8"
                  className="plan-void"
                  stroke="var(--color-ink)"
                  strokeWidth="0.02"
                />
                <text x="2.15" y={HOUSE.yardFront + 11.4} textAnchor="middle" fontSize="0.22" fill="var(--color-ink-soft)" fontFamily="Outfit, sans-serif">
                  GIẾNG
                </text>

                <rect
                  y={HOUSE.yardFront + HOUSE.houseD}
                  width={W}
                  height={HOUSE.yardRear}
                  className="plan-outdoor"
                  stroke="var(--color-ink)"
                  strokeWidth="0.03"
                />
                <circle cx="2.5" cy={D - 2} r="0.55" fill="var(--color-sage)" opacity="0.5" />
                <circle cx="1.3" cy={D - 1.2} r="0.25" fill="var(--color-sage)" opacity="0.35" />
                <circle cx="3.7" cy={D - 1.3} r="0.28" fill="var(--color-sage)" opacity="0.35" />
                <text x="2.5" y={D - 0.45} textAnchor="middle" fontSize="0.28" fill="var(--color-ink-soft)" fontFamily="Outfit, sans-serif">
                  SÂN SAU 4.00 m
                </text>

                <Dim v x={-0.35} y1={0} y2={HOUSE.yardFront} label="8.00" />
                <Dim v x={-0.35} y1={HOUSE.yardFront} y2={HOUSE.yardFront + HOUSE.houseD} label="18.00" />
                <Dim v x={-0.35} y1={HOUSE.yardFront + HOUSE.houseD} y2={D} label="4.00" />
                <Dim v x={-1.05} y1={0} y2={D} label="30.00" />
                <Dim h y={-0.45} x1={0} x2={W} label="5.00" />

                <text x="2.5" y="-1.05" textAnchor="middle" fontSize="0.3" fill="var(--color-sage)" fontFamily="Outfit, sans-serif" letterSpacing="0.12">
                  MẶT TIỀN · PHỐ
                </text>
                <text x="2.5" y={D + 1.15} textAnchor="middle" fontSize="0.3" fill="var(--color-sage)" fontFamily="Outfit, sans-serif" letterSpacing="0.12">
                  HƯỚNG SÂN SAU
                </text>
              </g>
            </svg>
            <p className="mt-3 text-center text-[11px] tracking-wide text-faint">
              Tỷ lệ minh họa · đơn vị mét · tim trục ngoài 5.00 m
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Dim({
  v,
  h,
  x,
  y,
  x1,
  x2,
  y1,
  y2,
  label,
}: {
  v?: boolean;
  h?: boolean;
  x?: number;
  y?: number;
  x1?: number;
  x2?: number;
  y1?: number;
  y2?: number;
  label: string;
}) {
  const stroke = "var(--color-oak)";
  if (v && x != null && y1 != null && y2 != null) {
    const mid = (y1 + y2) / 2;
    return (
      <g>
        <line x1={x} y1={y1} x2={x} y2={y2} stroke={stroke} strokeWidth="0.02" />
        <line x1={x - 0.12} y1={y1} x2={x + 0.12} y2={y1} stroke={stroke} strokeWidth="0.02" />
        <line x1={x - 0.12} y1={y2} x2={x + 0.12} y2={y2} stroke={stroke} strokeWidth="0.02" />
        <text x={x - 0.18} y={mid} textAnchor="middle" fontSize="0.28" fill="var(--color-oak)" fontFamily="Outfit, sans-serif" transform={`rotate(-90 ${x - 0.18} ${mid})`}>
          {label}
        </text>
      </g>
    );
  }
  if (h && y != null && x1 != null && x2 != null) {
    const mid = (x1 + x2) / 2;
    return (
      <g>
        <line x1={x1} y1={y} x2={x2} y2={y} stroke={stroke} strokeWidth="0.02" />
        <line x1={x1} y1={y - 0.12} x2={x1} y2={y + 0.12} stroke={stroke} strokeWidth="0.02" />
        <line x1={x2} y1={y - 0.12} x2={x2} y2={y + 0.12} stroke={stroke} strokeWidth="0.02" />
        <text x={mid} y={y - 0.18} textAnchor="middle" fontSize="0.28" fill="var(--color-oak)" fontFamily="Outfit, sans-serif">
          {label}
        </text>
      </g>
    );
  }
  return null;
}
