/* Bản vẽ kỹ thuật dựng bằng SVG — mọi kích thước lấy từ src/lib/house-data.ts */

const INK = "var(--color-ink)";
const SOFT = "var(--color-ink-soft)";
const MUTED = "var(--color-muted)";
const FAINT = "var(--color-faint)";
const OAK = "var(--color-oak)";
const SAGE = "var(--color-sage)";
const GLASS = "var(--color-mat-glass)";
const PLASTER = "var(--color-mat-plaster)";
const TEAK = "var(--color-mat-teak)";
const STONE = "var(--color-mat-stone)";
const FONT = "Outfit, sans-serif";

function Defs() {
  return (
    <defs>
      <pattern
        id="hatch-earth"
        width="0.5"
        height="0.5"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="0.5" stroke={FAINT} strokeWidth="0.05" />
      </pattern>
      <pattern
        id="hatch-cut"
        width="0.2"
        height="0.2"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="0.2" stroke={SOFT} strokeWidth="0.05" />
      </pattern>
      <pattern
        id="hatch-fine"
        width="0.06"
        height="0.06"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <line x1="0" y1="0" x2="0" y2="0.06" stroke={SOFT} strokeWidth="0.018" />
      </pattern>
      <marker
        id="dm-arrow"
        markerWidth="7"
        markerHeight="7"
        refX="6.2"
        refY="3.5"
        orient="auto-start-reverse"
      >
        <path d="M0 0.7 L6.4 3.5 L0 6.3 z" fill={OAK} />
      </marker>
      <marker
        id="flow"
        markerWidth="7"
        markerHeight="7"
        refX="6.2"
        refY="3.5"
        orient="auto-start-reverse"
      >
        <path d="M0 0.7 L6.4 3.5 L0 6.3 z" fill={SAGE} />
      </marker>
      <marker id="dm-s" markerWidth="4" markerHeight="4" refX="3.5" refY="2" orient="auto-start-reverse">
        <path d="M0 0.35 L3.6 2 L0 3.65 z" fill={OAK} />
      </marker>
      <marker id="flow-s" markerWidth="4" markerHeight="4" refX="3.5" refY="2" orient="auto-start-reverse">
        <path d="M0 0.35 L3.6 2 L0 3.65 z" fill={SAGE} />
      </marker>
      <marker id="ink-s" markerWidth="4" markerHeight="4" refX="3.5" refY="2" orient="auto-start-reverse">
        <path d="M0 0.35 L3.6 2 L0 3.65 z" fill={SOFT} />
      </marker>
    </defs>
  );
}

function DimH({
  x1,
  x2,
  y,
  label,
  s = 0.3,
  below = false,
}: {
  x1: number;
  x2: number;
  y: number;
  label: string;
  s?: number;
  below?: boolean;
}) {
  const t = s * 0.4;
  return (
    <g stroke={OAK} strokeWidth={s * 0.06} fill="none">
      <line
        x1={x1}
        y1={y}
        x2={x2}
        y2={y}
        markerStart="url(#dm-arrow)"
        markerEnd="url(#dm-arrow)"
      />
      <line x1={x1} y1={y - t} x2={x1} y2={y + t} />
      <line x1={x2} y1={y - t} x2={x2} y2={y + t} />
      <text
        x={(x1 + x2) / 2}
        y={below ? y + s * 1.1 : y - s * 0.4}
        textAnchor="middle"
        fontSize={s}
        fill={OAK}
        fontFamily={FONT}
        stroke="none"
      >
        {label}
      </text>
    </g>
  );
}

function DimV({
  x,
  y1,
  y2,
  label,
  s = 0.3,
  right = false,
}: {
  x: number;
  y1: number;
  y2: number;
  label: string;
  s?: number;
  right?: boolean;
}) {
  const t = s * 0.4;
  const mid = (y1 + y2) / 2;
  const tx = right ? x + s * 0.9 : x - s * 0.4;
  return (
    <g stroke={OAK} strokeWidth={s * 0.06} fill="none">
      <line
        x1={x}
        y1={y1}
        x2={x}
        y2={y2}
        markerStart="url(#dm-arrow)"
        markerEnd="url(#dm-arrow)"
      />
      <line x1={x - t} y1={y1} x2={x + t} y2={y1} />
      <line x1={x - t} y1={y2} x2={x + t} y2={y2} />
      <text
        x={tx}
        y={mid}
        textAnchor="middle"
        fontSize={s}
        fill={OAK}
        fontFamily={FONT}
        stroke="none"
        transform={`rotate(-90 ${tx} ${mid})`}
      >
        {label}
      </text>
    </g>
  );
}

function Leader({
  x,
  y,
  tx,
  ty,
  label,
  s = 0.26,
  anchor = "start",
}: {
  x: number;
  y: number;
  tx: number;
  ty: number;
  label: string;
  s?: number;
  anchor?: "start" | "end" | "middle";
}) {
  const pad = anchor === "end" ? -s * 0.75 : anchor === "start" ? s * 0.75 : 0;
  return (
    <g>
      <line x1={x} y1={y} x2={tx} y2={ty} stroke={MUTED} strokeWidth={s * 0.08} />
      <circle cx={x} cy={y} r={s * 0.17} fill={MUTED} />
      <text
        x={tx + pad}
        y={ty + s * 0.34}
        textAnchor={anchor}
        fontSize={s}
        fill={SOFT}
        fontFamily={FONT}
      >
        {label}
      </text>
    </g>
  );
}

function T({
  x,
  y,
  children,
  s = 0.3,
  fill = INK,
  anchor = "middle",
  wide = false,
}: {
  x: number;
  y: number;
  children: string;
  s?: number;
  fill?: string;
  anchor?: "start" | "middle" | "end";
  wide?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={s}
      fill={fill}
      fontFamily={FONT}
      letterSpacing={wide ? s * 0.32 : 0}
    >
      {children}
    </text>
  );
}

/* ── CT-01 · Mặt cắt dọc A–A ─────────────────────────────────────────────── */

const Y0 = 12.5;
const yz = (z: number) => Y0 - z;

const LEVEL_TAGS = [
  { z: 0, t: "±0.00 sân" },
  { z: 0.45, t: "+0.45 nền T1" },
  { z: 4.05, t: "+4.05 sàn T2" },
  { z: 7.35, t: "+7.35 sàn tum" },
  { z: 10.35, t: "+10.35 mái tum" },
  { z: 11.2, t: "+11.20 đỉnh" },
];

export function SectionAA() {
  const cut = { fill: "url(#hatch-cut)", stroke: INK, strokeWidth: 0.05 };
  const glass = { fill: GLASS, stroke: INK, strokeWidth: 0.04 };
  return (
    <svg
      viewBox="-2.9 0.6 35.9 13.9"
      className="w-full"
      role="img"
      aria-label="Mặt cắt dọc A–A qua giếng trời và lõi thang"
    >
      <Defs />
      <rect x="-2.9" y="0.6" width="35.9" height="13.9" fill="var(--color-paper)" />

      <rect x="-0.4" y={Y0} width="30.8" height="0.6" fill="url(#hatch-earth)" />
      <line x1="-0.4" y1={Y0} x2="30.4" y2={Y0} stroke={INK} strokeWidth="0.06" />

      {/* sân trước */}
      <rect x="0" y={yz(1.8)} width="0.1" height="1.8" fill={SOFT} />
      <T x={0.2} y={yz(2.1)} s={0.26} fill={MUTED} anchor="start">
        Cổng 1.80
      </T>
      <g fill="none" stroke={FAINT} strokeWidth="0.05">
        <path d={`M0.75 ${Y0} L0.95 ${yz(0.9)} L4.35 ${yz(0.9)} L5.05 ${Y0} Z`} />
        <path d={`M1.75 ${yz(0.9)} L2.15 ${yz(1.5)} L3.55 ${yz(1.5)} L3.95 ${yz(0.9)}`} />
        <circle cx="1.65" cy={Y0} r="0.3" />
        <circle cx="4.25" cy={Y0} r="0.3" />
      </g>
      <T x={2.6} y={yz(2.05)} s={0.26} fill={MUTED}>
        chỗ đỗ 1 xe
      </T>
      <g fill={SAGE} opacity="0.4">
        <circle cx="6.3" cy={yz(1.55)} r="0.55" />
        <circle cx="7.05" cy={yz(0.85)} r="0.32" />
      </g>
      <line x1="6.3" y1={yz(1.0)} x2="6.3" y2={Y0} stroke={SAGE} strokeWidth="0.05" />
      <path
        d={`M7.55 ${Y0} L7.55 ${yz(0.15)} L7.7 ${yz(0.15)} L7.7 ${yz(0.3)} L7.85 ${yz(0.3)} L7.85 ${yz(0.45)} L8 ${yz(0.45)}`}
        fill="none"
        stroke={INK}
        strokeWidth="0.05"
      />

      {/* sàn, mái, tường cắt */}
      <rect x="8" y={yz(0.45)} width="18" height="0.3" {...cut} />
      <rect x="8" y={yz(4.05)} width="9.9" height="0.3" {...cut} />
      <rect x="20.8" y={yz(4.05)} width="5.2" height="0.3" {...cut} />
      <rect x="8" y={yz(7.35)} width="9.9" height="0.3" {...cut} />
      <rect x="20.8" y={yz(7.35)} width="5.2" height="0.3" {...cut} />
      <rect x="12.5" y={yz(10.35)} width="5.4" height="0.3" {...cut} />
      <rect x="20.8" y={yz(10.35)} width="0.4" height="0.3" {...cut} />
      <rect x="25.8" y={yz(7.35)} width="0.2" height="6.9" {...cut} />
      <rect x="8" y={yz(7.05)} width="0.2" height="3" {...cut} />
      <rect x="21.05" y={yz(10.35)} width="0.15" height="3" {...cut} />
      <rect x="12.5" y={yz(10.35)} width="0.15" height="3" {...glass} />

      {/* lan can + kính */}
      <rect x="8" y={yz(8.45)} width="0.15" height="1.1" {...glass} />
      <rect x="25.85" y={yz(8.45)} width="0.15" height="1.1" {...glass} />
      <rect x="8.55" y={yz(3.15)} width="0.12" height="2.7" {...glass} />
      <rect x="9.05" y={yz(6.75)} width="0.12" height="2.7" {...glass} />
      <rect x="8" y={yz(5.15)} width="0.12" height="1.1" {...glass} />
      <rect x="25.88" y={yz(2.7)} width="0.12" height="1.8" {...glass} />
      <rect x="25.88" y={yz(6.3)} width="0.12" height="1.8" {...glass} />

      {/* giếng trời và mái kính */}
      <rect
        x="17.9"
        y={yz(10.35)}
        width="2.9"
        height={9.9}
        fill="var(--color-plan-void)"
        opacity="0.4"
      />
      <rect x="17.7" y={yz(10.8)} width="0.2" height="0.45" {...cut} />
      <rect x="20.8" y={yz(10.8)} width="0.2" height="0.45" {...cut} />
      <path
        d={`M17.5 ${yz(11.15)} L21.2 ${yz(10.95)}`}
        stroke={GLASS}
        strokeWidth="0.18"
        strokeLinecap="round"
      />
      <path d={`M17.5 ${yz(11.15)} L21.2 ${yz(10.95)}`} stroke={INK} strokeWidth="0.035" />

      {/* cầu thang sau mặt phẳng cắt */}
      <g stroke={FAINT} strokeWidth="0.06" strokeDasharray="0.22 0.16" fill="none">
        <path d={`M17.75 ${yz(0.45)} L20.35 ${yz(2.25)}`} />
        <path d={`M20.95 ${yz(2.25)} L18.35 ${yz(4.05)}`} />
        <path d={`M17.75 ${yz(4.05)} L20.35 ${yz(5.85)}`} />
        <path d={`M20.95 ${yz(5.85)} L18.35 ${yz(7.35)}`} />
      </g>
      <T x={19.35} y={yz(3.05)} s={0.24} fill={FAINT}>
        thang (sau mặt cắt)
      </T>

      {/* gió, khí nóng, nắng */}
      <g stroke={SAGE} strokeWidth="0.07" fill="none" markerEnd="url(#flow)" opacity="0.9">
        <path d={`M9.4 ${yz(2.05)} L17.5 ${yz(2.05)}`} />
        <path d={`M19.35 ${yz(1.2)} L19.35 ${yz(10.3)}`} />
        <path d={`M25.6 ${yz(2.45)} L21.5 ${yz(2.45)}`} />
      </g>
      <T x={13.4} y={yz(2.25)} s={0.26} fill={SAGE}>
        gió xuyên phòng
      </T>
      <T x={19.6} y={yz(6.55)} s={0.26} fill={SAGE} anchor="start">
        khí nóng bốc lên
      </T>
      <path
        d={`M15.4 ${yz(12.5)} L18.5 ${yz(10.75)}`}
        stroke={OAK}
        strokeWidth="0.06"
        strokeDasharray="0.3 0.18"
        markerEnd="url(#dm-arrow)"
        fill="none"
      />
      <T x={15.2} y={yz(12.5)} s={0.26} fill={OAK} anchor="end">
        nắng đỉnh
      </T>

      {/* nhãn không gian */}
      <T x={11.2} y={yz(1.6)} s={0.32}>
        Phòng khách
      </T>
      <T x={15.5} y={yz(1.6)} s={0.32}>
        Bếp + Ăn
      </T>
      <T x={23.5} y={yz(1.6)} s={0.32}>
        Phòng ngủ 01
      </T>
      <T x={11.4} y={yz(5.2)} s={0.32}>
        Phòng ngủ 02
      </T>
      <T x={15.5} y={yz(5.2)} s={0.32}>
        Phòng ngủ 03
      </T>
      <T x={23.5} y={yz(5.2)} s={0.32}>
        Phòng ngủ 04
      </T>
      <T x={8.62} y={yz(6.2)} s={0.24} fill={MUTED} anchor="start">
        Loggia
      </T>
      <T x={10.3} y={yz(8.3)} s={0.3} fill={MUTED}>
        Sân thượng
      </T>
      <T x={15.2} y={yz(8.5)} s={0.32}>
        Phòng thờ
      </T>
      <T x={23.6} y={yz(8.3)} s={0.3} fill={MUTED}>
        Sân phơi
      </T>
      <T x={19.35} y={yz(9.1)} s={0.26} fill={SOFT}>
        Giếng trời
      </T>
      <T x={4.0} y={yz(2.7)} s={0.3} fill={MUTED}>
        Sân trước 8.00
      </T>
      <T x={28.2} y={yz(1.0)} s={0.3} fill={MUTED}>
        Sân sau 4.00
      </T>
      <g fill={SAGE} opacity="0.4">
        <circle cx="28.2" cy={yz(1.5)} r="0.5" />
        <circle cx="29.2" cy={yz(0.75)} r="0.28" />
      </g>

      {/* cao độ */}
      {LEVEL_TAGS.map((l) => (
        <g key={l.t}>
          <line
            x1="26.1"
            y1={yz(l.z)}
            x2="30.2"
            y2={yz(l.z)}
            stroke={FAINT}
            strokeWidth="0.03"
            strokeDasharray="0.2 0.16"
          />
          <path d={`M30.2 ${yz(l.z)} l-0.24 -0.17 l0 0.34 z`} fill={OAK} />
          <T x={30.4} y={yz(l.z) + 0.1} s={0.27} fill={OAK} anchor="start">
            {l.t}
          </T>
        </g>
      ))}

      <DimV x={-0.55} y1={yz(0.45)} y2={yz(4.05)} label="3.60" />
      <DimV x={-0.55} y1={yz(4.05)} y2={yz(7.35)} label="3.30" />
      <DimV x={-0.55} y1={yz(7.35)} y2={yz(10.35)} label="3.00" />
      <DimV x={-1.85} y1={yz(0)} y2={yz(11.2)} label="11.20" />
      <DimH x1={0} x2={8} y={13.3} label="8.00" />
      <DimH x1={8} x2={26} y={13.3} label="18.00" />
      <DimH x1={26} x2={30} y={13.3} label="4.00" />
      <DimH x1={0} x2={30} y={14.1} label="30.00" />

      <T x={0} y={yz(11.6)} s={0.34} fill={SAGE} anchor="start" wide>
        MẶT CẮT A–A
      </T>
      <T x={0} y={yz(11.05)} s={0.26} fill={MUTED} anchor="start">
        cắt dọc qua giếng trời · nhìn về tường trái
      </T>
    </svg>
  );
}

/* ── CT-02 · Mặt đứng mặt tiền ───────────────────────────────────────────── */

const YE = 12.4;
const ye = (z: number) => YE - z;
const FINS = Array.from({ length: 41 }, (_, i) => 0.06 + i * 0.12);

export function Elevation() {
  return (
    <svg
      viewBox="-2.1 0.35 14.7 13.9"
      className="w-full"
      role="img"
      aria-label="Mặt đứng mặt tiền và chi tiết cắt ngang lam gỗ"
    >
      <Defs />
      <rect x="-2.1" y="0.35" width="14.7" height="13.9" fill="var(--color-paper)" />

      <rect x="-0.6" y={YE} width="6.2" height="0.3" fill="url(#hatch-earth)" />
      <line x1="-0.6" y1={YE} x2="5.6" y2={YE} stroke={INK} strokeWidth="0.05" />

      {/* khối tum lùi phía sau */}
      <rect x="0" y={ye(10.35)} width="5" height="3" fill="var(--color-paper-2)" stroke={FAINT} strokeWidth="0.03" />
      <rect x="0.4" y={ye(10.05)} width="4.2" height="1.6" fill={GLASS} stroke={FAINT} strokeWidth="0.03" opacity="0.75" />
      <line
        x1="-0.3"
        y1={ye(11.2)}
        x2="5.3"
        y2={ye(11.2)}
        stroke={FAINT}
        strokeWidth="0.03"
        strokeDasharray="0.16 0.12"
      />
      <T x={5.35} y={ye(11.15)} s={0.22} fill={FAINT} anchor="start">
        đỉnh mái kính giếng (khuất)
      </T>

      {/* bệ đá + tầng 1 */}
      <rect x="0" y={ye(0.45)} width="5" height="0.45" fill={STONE} opacity="0.55" stroke={INK} strokeWidth="0.04" />
      <rect x="0" y={ye(3.75)} width="0.4" height="3.3" fill={PLASTER} stroke={INK} strokeWidth="0.04" />
      <rect x="4.6" y={ye(3.75)} width="0.4" height="3.3" fill={PLASTER} stroke={INK} strokeWidth="0.04" />
      <rect x="0.4" y={ye(3.15)} width="4.2" height="2.7" fill={GLASS} stroke={INK} strokeWidth="0.04" />
      <rect x="0.4" y={ye(3.15)} width="4.2" height="0.4" fill={INK} opacity="0.16" />
      {[1.45, 2.5, 3.55].map((x) => (
        <line key={x} x1={x} y1={ye(3.15)} x2={x} y2={ye(0.45)} stroke={INK} strokeWidth="0.03" />
      ))}
      <rect x="0.4" y={ye(3.75)} width="4.2" height="0.6" fill={PLASTER} stroke={INK} strokeWidth="0.04" />

      {/* sàn T2 nhô ra 0.60 */}
      <rect x="0" y={ye(4.05)} width="5" height="0.3" fill={PLASTER} stroke={INK} strokeWidth="0.05" />

      {/* loggia + lam teak */}
      <rect x="0" y={ye(7.05)} width="5" height="3" fill={GLASS} stroke={INK} strokeWidth="0.04" opacity="0.85" />
      <rect x="0" y={ye(7.35)} width="5" height="0.3" fill={PLASTER} stroke={INK} strokeWidth="0.04" />
      <rect x="0" y={ye(5.15)} width="5" height="1.1" fill={GLASS} stroke={INK} strokeWidth="0.03" opacity="0.5" />
      <g fill={TEAK}>
        {FINS.map((x) => (
          <rect key={x} x={x} y={ye(7.25)} width="0.04" height="3.1" />
        ))}
      </g>

      {/* lan can sân thượng tum */}
      <rect x="0" y={ye(8.45)} width="5" height="1.1" fill={GLASS} stroke={INK} strokeWidth="0.03" opacity="0.55" />

      <Leader x={0.2} y={ye(6.0)} tx={-0.6} ty={ye(6.6)} label="vôi bả ấm" s={0.24} anchor="end" />
      <Leader x={2.5} y={ye(6.0)} tx={5.4} ty={ye(6.5)} label="lam teak 40 × 80 @ 120" s={0.24} />
      <Leader x={2.5} y={ye(1.8)} tx={5.4} ty={ye(1.6)} label="kính low-E, lùi 0.60 m" s={0.24} />
      <Leader x={4.2} y={ye(0.22)} tx={5.4} ty={ye(0.15)} label="bệ granite 30 mm" s={0.24} />
      <Leader x={3.4} y={ye(4.6)} tx={5.4} ty={ye(4.3)} label="lan can kính 1.10 m" s={0.24} />
      <Leader x={2.2} y={ye(9.0)} tx={5.4} ty={ye(9.2)} label="phòng thờ lùi 4.50 m" s={0.24} />

      <DimV x={-0.55} y1={ye(0.45)} y2={ye(4.05)} label="3.60" s={0.26} />
      <DimV x={-0.55} y1={ye(4.05)} y2={ye(7.35)} label="3.30" s={0.26} />
      <DimV x={-0.55} y1={ye(7.35)} y2={ye(10.35)} label="3.00" s={0.26} />
      <DimV x={-1.45} y1={ye(0)} y2={ye(11.2)} label="11.20" s={0.26} />
      <DimH x1={0.4} x2={4.6} y={13.05} label="4.20" s={0.26} />
      <DimH x1={0} x2={5} y={13.62} label="5.00" s={0.26} />

      <T x={0} y={ye(11.75)} s={0.32} fill={SAGE} anchor="start" wide>
        MẶT ĐỨNG MẶT TIỀN
      </T>

      {/* Chi tiết A — cắt ngang lam */}
      <g>
        <T x={7.9} y={8.4} s={0.28} fill={SAGE} anchor="start" wide>
          CHI TIẾT A
        </T>
        <T x={7.9} y={8.82} s={0.24} fill={MUTED} anchor="start">
          cắt ngang lam gỗ — nhìn từ trên xuống
        </T>
        <DimH x1={8.0} x2={8.2} y={9.92} label="40" s={0.22} />
        <DimH x1={8.2} x2={8.6} y={9.92} label="80" s={0.22} />
        <DimH x1={8.0} x2={8.6} y={9.45} label="120" s={0.22} />
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <g key={i}>
            <rect x={8.0 + i * 0.6} y={10.1} width="0.2" height="0.4" fill={TEAK} stroke={INK} strokeWidth="0.03" />
            <line
              x1={8.1 + i * 0.6}
              y1={10.5}
              x2={8.1 + i * 0.6}
              y2={10.8}
              stroke={SOFT}
              strokeWidth="0.045"
            />
          </g>
        ))}
        <rect x="7.9" y="10.8" width="3.6" height="0.1" fill="url(#hatch-fine)" stroke={INK} strokeWidth="0.03" />
        <rect x="7.9" y="10.94" width="3.6" height="0.16" fill={GLASS} stroke={INK} strokeWidth="0.04" />
        <T x={7.9} y={11.55} s={0.22} fill={SOFT} anchor="start">
          kính low-E 6 + 12 + 6, khung nhôm cầu cách nhiệt
        </T>
        <T x={7.9} y={11.9} s={0.22} fill={SOFT} anchor="start">
          bát thép mạ L50 @ 900 bắt vào đố nhôm
        </T>
        <T x={7.9} y={12.25} s={0.22} fill={MUTED} anchor="start">
          41 thanh suốt bề rộng 5.00 m
        </T>
      </g>
    </svg>
  );
}

/* ── CT-03 · Cầu thang ───────────────────────────────────────────────────── */

const RISE = 0.164;
const TREAD = 0.26;
const YS = 4.35;
const ys = (z: number) => YS - z;

function flightPath() {
  let d = `M0 ${ys(0)}`;
  for (let i = 0; i < 11; i++) {
    d += ` L${i * TREAD} ${ys((i + 1) * RISE)}`;
    if (i < 10) d += ` L${(i + 1) * TREAD} ${ys((i + 1) * RISE)}`;
  }
  d += ` L3.6 ${ys(11 * RISE)} L3.6 ${ys(11 * RISE - 0.3)} L0 ${ys(-0.145)} Z`;
  return d;
}

export function StairDetail() {
  const stepLines = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <svg
      viewBox="-1.05 0.7 9.75 5.7"
      className="w-full"
      role="img"
      aria-label="Chi tiết cầu thang: mặt cắt vế thang và mặt bằng lõi thang"
    >
      <Defs />
      <rect x="-1.05" y="0.7" width="9.75" height="5.7" fill="var(--color-paper)" />

      {/* (a) mặt cắt vế thang */}
      <path
        d={`M0 ${ys(0)} L2.6 ${ys(1.804)} L3.6 ${ys(1.804)} L3.6 ${ys(1.804 + 1.1)} L2.6 ${ys(1.804 + 1.1)} L0 ${ys(1.1)} Z`}
        fill={GLASS}
        opacity="0.22"
      />
      <rect x="-0.62" y={ys(0)} width="0.62" height="0.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
      <path d={flightPath()} fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.035" />
      <path
        d={`M0 ${ys(1.1)} L2.6 ${ys(1.804 + 1.1)} L3.6 ${ys(1.804 + 1.1)}`}
        fill="none"
        stroke={SOFT}
        strokeWidth="0.05"
        strokeLinecap="round"
      />
      <path d={`M0.4 ${ys(0)} a 0.55 0.55 0 0 1 0.47 0.3`} fill="none" stroke={OAK} strokeWidth="0.02" />
      <T x={0.65} y={ys(-0.14)} s={0.14} fill={OAK} anchor="start">
        32.2°
      </T>

      <DimH x1={2.34} x2={2.6} y={ys(1.95)} label="260" s={0.13} />
      <Leader x={2.6} y={ys(1.722)} tx={3.28} ty={ys(2.42)} label="cổ bậc 164" s={0.14} />
      <DimH x1={0} x2={2.6} y={4.72} label="2 600 = 10 × 260" s={0.15} />
      <DimH x1={2.6} x2={3.6} y={4.72} label="1 000" s={0.15} />
      <DimV x={-0.78} y1={ys(0)} y2={ys(1.804)} label="1 804 = 11 × 164" s={0.15} />

      <Leader x={1.7} y={ys(1.18)} tx={0.55} ty={ys(2.3)} label="tay vịn 900 · lan can kính 1 100" s={0.14} />
      <Leader x={1.6} y={ys(0.86)} tx={2.62} ty={ys(0.62)} label="bản BTCT dày 120" s={0.14} />
      <Leader x={0.78} y={ys(0.492)} tx={1.5} ty={4.24} label="mũi bậc sồi R8 + 2 rãnh nhám" s={0.14} />
      <T x={3.1} y={ys(1.95)} s={0.15} fill={SOFT}>
        chiếu nghỉ
      </T>
      <T x={-0.95} y={5.4} s={0.17} fill={SAGE} anchor="start" wide>
        (a) MẶT CẮT VẾ THANG
      </T>
      <T x={-0.95} y={5.76} s={0.15} fill={MUTED} anchor="start">
        11 bậc lên chiếu nghỉ · vế 2 gập lại 180°
      </T>

      {/* (b) mặt bằng lõi thang */}
      <g>
        <rect x="5.2" y="1.5" width="2.1" height="3.6" fill="var(--color-plan-stair)" stroke={INK} strokeWidth="0.045" />
        <rect x="6.2" y="2.5" width="0.1" height="2.6" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
        <line x1="5.2" y1="2.5" x2="7.3" y2="2.5" stroke={INK} strokeWidth="0.035" />
        {stepLines.map((i) => (
          <line
            key={`u${i}`}
            x1="5.2"
            y1={5.1 - i * TREAD}
            x2="6.2"
            y2={5.1 - i * TREAD}
            stroke={SOFT}
            strokeWidth="0.025"
          />
        ))}
        {stepLines.map((i) => (
          <line
            key={`d${i}`}
            x1="6.3"
            y1={2.5 + i * TREAD}
            x2="7.3"
            y2={2.5 + i * TREAD}
            stroke={SOFT}
            strokeWidth="0.025"
          />
        ))}
        <path
          d="M5.7 5.0 L5.7 2.0 L6.8 2.0 L6.8 4.9"
          fill="none"
          stroke={SAGE}
          strokeWidth="0.045"
          markerEnd="url(#flow-s)"
        />
        <circle cx="5.7" cy="5.0" r="0.06" fill={SAGE} />
        <T x={5.1} y={4.72} s={0.15} fill={SAGE} anchor="end">
          LÊN
        </T>
        <T x={6.25} y={2.1} s={0.14} fill={SOFT}>
          chiếu nghỉ
        </T>
        <DimH x1={5.2} x2={6.2} y={1.28} label="1 000" s={0.14} />
        <DimH x1={6.3} x2={7.3} y={1.28} label="1 000" s={0.14} />
        <DimH x1={5.2} x2={7.3} y={0.98} label="2 100" s={0.15} />
        <DimV x={7.62} y1={1.5} y2={2.5} label="1 000" s={0.14} right />
        <DimV x={7.62} y1={2.5} y2={5.1} label="2 600" s={0.14} right />
        <T x={5.05} y={5.4} s={0.17} fill={SAGE} anchor="start" wide>
          (b) MẶT BẰNG LÕI THANG
        </T>
        <T x={5.2} y={5.76} s={0.15} fill={MUTED} anchor="start">
          hai vế song song quanh chiếu nghỉ
        </T>
        <rect x="5.14" y="5.94" width="3.5" height="0.36" rx="0.06" fill="var(--color-plan-void)" opacity="0.55" />
        <T x={5.26} y={6.19} s={0.15} fill={SOFT} anchor="start">
          ⚠ cần lõi 2 100 — mặt bằng ý tưởng ghi 1 100
        </T>
      </g>
    </svg>
  );
}

/* ── CT-04 · Giếng trời · mái kính ───────────────────────────────────────── */

/* 1 đơn vị = 500 mm */
const gy = (x: number) => 1.4 + ((5.2 - x) / 5) * 0.25;

export function VoidDetail() {
  return (
    <svg
      viewBox="-1.5 0.35 9.6 4.0"
      className="w-full"
      role="img"
      aria-label="Chi tiết mái kính giếng trời và khe thoát khí"
    >
      <Defs />
      <rect x="-1.5" y="0.35" width="9.6" height="4.0" fill="var(--color-paper)" />

      {/* mái tum + tường thu hồi */}
      <rect x="3.1" y="3.1" width="2.1" height="0.4" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
      <rect x="4.6" y="1.7" width="0.5" height="1.4" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />

      {/* kính dán + khung đỡ */}
      <path d={`M0.2 ${gy(0.2)} L5.2 ${gy(5.2)}`} stroke={GLASS} strokeWidth="0.11" strokeLinecap="round" />
      <path d={`M0.2 ${gy(0.2)} L5.2 ${gy(5.2)}`} stroke={INK} strokeWidth="0.022" />
      <rect x="2.4" y={gy(2.5) + 0.06} width="0.2" height="0.1" fill="url(#hatch-fine)" stroke={INK} strokeWidth="0.02" />

      {/* khe gió · lam chắn mưa · lưới */}
      {[0, 1, 2].map((i) => (
        <line
          key={i}
          x1="4.62"
          y1={1.66 - i * 0.09}
          x2="5.08"
          y2={1.57 - i * 0.09}
          stroke={SOFT}
          strokeWidth="0.035"
        />
      ))}
      <line x1="4.56" y1="1.42" x2="4.56" y2="1.7" stroke={SAGE} strokeWidth="0.03" strokeDasharray="0.06 0.04" />
      <rect x="4.75" y="1.42" width="0.17" height="0.28" fill="none" stroke={FAINT} strokeWidth="0.025" strokeDasharray="0.06 0.05" />

      {/* máng + ống thoát nước mưa */}
      <path d="M0 1.68 L0 1.94 L0.44 1.94 L0.44 1.68" fill="none" stroke={INK} strokeWidth="0.035" />
      <g stroke={INK} strokeWidth="0.03">
        <line x1="0.14" y1="1.94" x2="0.14" y2="3.4" />
        <line x1="0.32" y1="1.94" x2="0.32" y2="3.4" />
      </g>
      <line x1="0.23" y1="3.1" x2="0.23" y2="3.62" stroke={SAGE} strokeWidth="0.035" markerEnd="url(#flow-s)" />

      {/* khí nóng thoát ra khe gió */}
      <g stroke={SAGE} strokeWidth="0.04" fill="none" markerEnd="url(#flow-s)" opacity="0.9">
        <path d="M2.2 3.0 C 3.2 2.8, 3.9 2.2, 4.48 1.66" />
        <path d="M3.5 3.5 C 4.1 3.0, 4.2 2.2, 4.5 1.82" />
      </g>

      {/* nắng và mưa */}
      <g stroke={OAK} strokeWidth="0.03" strokeDasharray="0.1 0.07" markerEnd="url(#dm-s)" opacity="0.85">
        <path d="M3.0 0.62 L3.9 2.6" />
        <path d="M3.55 0.62 L4.45 2.6" />
      </g>
      <T x={2.9} y={0.6} s={0.1} fill={OAK} anchor="end">
        nắng đỉnh
      </T>
      <path d="M4.35 0.72 L3.8 1.24" stroke={GLASS} strokeWidth="0.035" markerEnd="url(#ink-s)" />
      <T x={4.45} y={0.7} s={0.1} fill={MUTED} anchor="start">
        mưa chảy về máng
      </T>

      <DimV x={5.3} y1={gy(4.85)} y2={1.7} label="150" s={0.11} right />
      <DimV x={5.55} y1={1.7} y2={3.1} label="700" s={0.11} right />

      <Leader x={2.0} y={gy(2.0)} tx={1.1} ty={1.0} label="kính dán 8 + 8 mm · dốc 5%" s={0.11} anchor="end" />
      <Leader x={4.88} y={1.6} tx={5.95} ty={1.05} label="lam chắn mưa 3 lớp" s={0.11} />
      <Leader x={4.56} y={1.56} tx={5.95} ty={1.32} label="lưới inox 1.2 mm" s={0.11} />
      <Leader x={4.83} y={1.52} tx={5.95} ty={1.62} label="hộp thép 100 × 50 @ 900" s={0.11} />
      <Leader x={4.85} y={2.4} tx={5.95} ty={2.35} label="tường thu hồi mái tum" s={0.11} />
      <Leader x={0.22} y={1.8} tx={-1.35} ty={1.35} label="máng inox 200 × 100" s={0.11} anchor="start" />
      <Leader x={0.23} y={2.7} tx={-1.35} ty={2.95} label="ống D90 xuống ga thu T1" s={0.11} anchor="start" />

      <T x={5.95} y={2.05} s={0.11} fill={SAGE} anchor="start">
        khe gió thông suốt chu vi
      </T>
      <T x={2.6} y={2.42} s={0.11} fill={SAGE}>
        khí nóng thoát ra khe gió
      </T>
      <path d="M2.05 3.55 L2.05 3.95" stroke={SOFT} strokeWidth="0.03" markerEnd="url(#ink-s)" />
      <T x={2.05} y={4.22} s={0.12} fill={SOFT}>
        GIẾNG TRỜI 1 500 × 2 800 — thông xuống tầng 1
      </T>
      <T x={-1.4} y={0.62} s={0.15} fill={SAGE} anchor="start" wide>
        CT-04 · MÁI KÍNH GIẾNG TRỜI
      </T>
    </svg>
  );
}

/* ── CT-05 · Trục ướt ────────────────────────────────────────────────────── */

export function WetStack() {
  return (
    <svg
      viewBox="-1.35 0.25 8.5 6.05"
      className="w-full"
      role="img"
      aria-label="Chi tiết trục ướt WC tầng 1 và tầng 2, hộp gen kỹ thuật"
    >
      <Defs />
      <rect x="-1.35" y="0.25" width="8.5" height="6.05" fill="var(--color-paper)" />

      {/* kết cấu */}
      <rect x="-0.2" y="5.5" width="3.1" height="0.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.025" />
      <rect x="-0.2" y="1.9" width="2.62" height="0.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.025" />
      <rect x="2.68" y="1.9" width="0.22" height="0.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.025" />
      <rect x="-0.2" y="2.2" width="0.2" height="3.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.025" />
      <rect x="2.7" y="2.2" width="0.2" height="3.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.025" />
      <rect x="-0.2" y="0.62" width="0.2" height="1.28" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.025" />
      <rect x="2.7" y="0.62" width="0.2" height="1.28" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.025" />
      <path
        d="M-0.32 0.68 q 0.26 -0.14 0.52 0 q 0.26 0.14 0.52 0"
        fill="none"
        stroke={FAINT}
        strokeWidth="0.03"
      />
      <path d="M2.3 0.68 q 0.26 -0.14 0.52 0 q 0.26 0.14 0.52 0" fill="none" stroke={FAINT} strokeWidth="0.03" />

      {/* hộp gen */}
      <rect x="2.4" y="0.62" width="0.3" height="4.88" fill="url(#hatch-fine)" stroke={INK} strokeWidth="0.025" />
      <rect x="2.4" y="4.0" width="0.3" height="0.4" fill="var(--color-paper)" stroke={INK} strokeWidth="0.022" />
      <rect x="2.4" y="0.95" width="0.3" height="0.4" fill="var(--color-paper)" stroke={INK} strokeWidth="0.022" />

      {/* sàn WC hạ cốt + chống thấm */}
      <path d="M0 5.55 L2.4 5.55" stroke={SAGE} strokeWidth="0.05" />
      <path d="M0.03 5.55 L0.03 5.25 M2.37 5.55 L2.37 5.25" stroke={SAGE} strokeWidth="0.045" />
      <path d="M0 1.95 L2.4 1.95" stroke={SAGE} strokeWidth="0.05" />
      <path d="M0.03 1.95 L0.03 1.65 M2.37 1.95 L2.37 1.65" stroke={SAGE} strokeWidth="0.045" />

      {/* thiết bị */}
      <g fill="none" stroke={SOFT} strokeWidth="0.03">
        <path d="M0.2 5.55 L0.2 5.1 L0.74 5.1 L0.74 5.3 L0.57 5.55 Z" />
        <path d="M1.62 4.62 L2.12 4.62 L2.12 4.78 L1.62 4.78 Z" />
        <line x1="1.87" y1="4.78" x2="1.87" y2="5.55" />
        <path d="M0.2 1.95 L0.2 1.5 L0.74 1.5 L0.74 1.7 L0.57 1.95 Z" />
        <path d="M1.62 1.02 L2.12 1.02 L2.12 1.18 L1.62 1.18 Z" />
        <line x1="1.87" y1="1.18" x2="1.87" y2="1.95" />
      </g>
      <path d="M1.12 5.5 l0.12 0.12 l-0.24 0 z" fill={SOFT} />
      <path d="M1.12 1.9 l0.12 0.12 l-0.24 0 z" fill={SOFT} />
      <T x={0.47} y={4.95} s={0.11} fill={MUTED}>
        xí
      </T>
      <T x={1.87} y={4.48} s={0.11} fill={MUTED}>
        lavabo
      </T>

      {/* ống đứng */}
      <g fill="none">
        <line x1="2.47" y1="1.95" x2="2.47" y2="5.72" stroke={SOFT} strokeWidth="0.06" />
        <line x1="0.5" y1="5.72" x2="2.47" y2="5.72" stroke={SOFT} strokeWidth="0.06" />
        <line x1="2.47" y1="5.72" x2="3.05" y2="5.95" stroke={SOFT} strokeWidth="0.06" />
        <line x1="2.9" y1="5.89" x2="3.25" y2="6.03" stroke={SOFT} strokeWidth="0.03" markerEnd="url(#ink-s)" />
        <line x1="2.58" y1="1.95" x2="2.58" y2="5.62" stroke={MUTED} strokeWidth="0.04" />
        <line x1="1.25" y1="5.62" x2="2.58" y2="5.62" stroke={MUTED} strokeWidth="0.04" />
        <line x1="2.66" y1="5.0" x2="2.66" y2="0.45" stroke={SAGE} strokeWidth="0.035" markerEnd="url(#flow-s)" />
      </g>
      <T x={3.32} y={6.06} s={0.11} fill={SOFT} anchor="start">
        bể tự hoại
      </T>

      <Leader x={2.47} y={3.3} tx={3.15} ty={3.05} label="D110 thoát xí, dốc 2%" s={0.11} />
      <Leader x={2.58} y={3.65} tx={3.15} ty={3.45} label="D90 thoát sàn · D60 lavabo" s={0.11} />
      <Leader x={2.66} y={2.6} tx={3.15} ty={2.3} label="D60 thông hơi lên quá mái +700" s={0.11} />
      <Leader x={2.62} y={4.2} tx={3.15} ty={4.35} label="cửa thăm 300 × 400 mỗi tầng" s={0.11} />
      <Leader x={1.18} y={5.5} tx={0.62} ty={5.95} label="phễu thu · dốc sàn 1.5%" s={0.11} anchor="end" />
      <Leader x={0.03} y={5.35} tx={-1.3} ty={5.0} label="chống thấm 2 lớp" s={0.11} anchor="start" />
      <T x={-1.3} y={5.24} s={0.11} fill={SOFT} anchor="start">
        lên chân tường 300
      </T>

      <DimV x={-0.62} y1={1.9} y2={5.5} label="3 600" s={0.13} />
      <DimH x1={2.4} x2={2.7} y={6.15} label="300" s={0.11} />

      <T x={1.35} y={0.95} s={0.14} fill={INK}>
        WC tầng 2 · 2 100 × 2 800
      </T>
      <T x={1.35} y={2.75} s={0.14} fill={INK}>
        WC tầng 1 · 1 800 × 2 400
      </T>
      <T x={0.15} y={3.05} s={0.11} fill={MUTED} anchor="start">
        cùng trục — một hộp gen duy nhất
      </T>
      <T x={-1.3} y={0.45} s={0.15} fill={SAGE} anchor="start" wide>
        CT-05 · TRỤC ƯỚT
      </T>
    </svg>
  );
}
