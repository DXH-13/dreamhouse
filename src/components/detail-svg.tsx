/* Bản vẽ kỹ thuật dựng bằng SVG — mọi kích thước lấy từ src/lib/house-data.ts */
import { CORE, FLOORS, FURN, WALLS, flightTop, riseOf, stairSoffit, type FloorId, type Furn } from "@/lib/house-data";

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
// trục ngang mặt cắt = 8 m sân trước + y trong nhà; thang + lỗ sàn lấy từ CORE
const SX = (y: number) => 8 + y;
const XC = (CORE.x[0] + CORE.x[1]) / 2; // mặt cắt A–A: x 0.70, giữa dải thang
const [H2A, H2B] = CORE.holes.t2.map(SX); // lỗ sàn T2
const [CA, CE] = CORE.holes.tum.map(SX); // lỗ sàn tum = lỗ mái kính
const FZ = { t1: [0.45, 4.05], t2: [4.05, 7.35], tum: [7.35, 10.35] } as const;

// tường "h" bị mặt phẳng x = xc cắt qua: kind = solid | door | glass | block
function cutWalls(xc: number) {
  return (["t1", "t2", "tum"] as const).flatMap((id) =>
    WALLS[id].flatMap(([axis, c, a0, a1, gaps = [], th = 100, h]) => {
      if (axis !== "h" || xc < a0 || xc > a1) return [];
      const [z0, zt] = FZ[id];
      const g = gaps.find(([s, e]) => xc >= s && xc <= e);
      return [{ y: c, th: th / 1000, kind: g ? g[2] : "solid", z0, z1: h ? Math.min(zt - 0.3, z0 + h) : zt - 0.3 }];
    }),
  );
}

// tủ / đồ bị mặt phẳng x = xc cắt qua trong đoạn y
type Box = Extract<Furn, ["r", ...unknown[]]>;
const cutFurn = (xc: number, y0: number, y1: number, id: FloorId = "t1") =>
  FURN[id].filter((f): f is Box => f[0] === "r" && f[1] <= xc && xc <= f[1] + f[3] && f[2] >= y0 && f[2] < y1);

// tủ T1 trong dải thang (y ≥ chân thang): đỉnh cắt theo mặt dưới bản thang (stairSoffit), đa giác dốc chứ không phải hộp.
// Z(z) nhận cao độ tính từ nền T1. Tủ thấp hơn gầm thang (tủ thấp 0.80) có thêm tủ kính khung đen phía trên tới sát gầm.
const inCore = (y: number) => y >= CORE.flights.t1.y;
const samples = (y: number, d: number) => Array.from({ length: 13 }, (_, i) => y + d - (d * i) / 12);
function cabPath([, , y, , d, h]: Box, X: (y: number) => number, Z: (z: number) => number) {
  const top = (yy: number) => (inCore(y) ? Math.max(0.01, Math.min(h, stairSoffit(yy))) : h);
  return `M${X(y)} ${Z(0)} L${X(y + d)} ${Z(0)} ` + samples(y, d).map((yy) => `L${X(yy)} ${Z(top(yy))}`).join(" ") + " Z";
}
function displayPath([, , y, , d, h]: Box, X: (y: number) => number, Z: (z: number) => number) {
  if (!inCore(y) || y + d > flightTop("t1") || stairSoffit(y + d) <= h + 0.05) return null;
  const top = (yy: number) => Math.max(h, stairSoffit(yy));
  return `M${X(y)} ${Z(h)} L${X(y + d)} ${Z(h)} ` + samples(y, d).map((yy) => `L${X(yy)} ${Z(top(yy))}`).join(" ") + " Z";
}
function UnderStair({ boxes, X, Z, stroke, sw }: { boxes: Box[]; X: (y: number) => number; Z: (z: number) => number; stroke: string; sw: number }) {
  return (
    <g fill="none" stroke={stroke} strokeWidth={sw}>
      {boxes.map((b) => {
        const glass = displayPath(b, X, Z);
        return (
          <g key={`${b[1]}-${b[2]}`}>
            <path d={cabPath(b, X, Z)} />
            {glass && <path d={glass} fill={GLASS} opacity="0.7" stroke={INK} strokeWidth={sw * 1.4} />}
          </g>
        );
      })}
    </g>
  );
}
const FLOOR_ROOM = (id: string) => {
  const r = FLOORS.flatMap((f) => f.rooms).find((r) => r.id === id);
  if (!r) throw new Error(`thiếu phòng ${id}`);
  return r;
};

// vế thang bị cắt tại x 0.70: (T1, chữ U) khối chiếu nghỉ trước đặc y 4.00–5.00 cao lead·R, rồi mặt bậc cạnh 2 i (1…n−1)
// ở y chân + (i − 1)·T, cao (lead + i)·R; cổ thứ n lên bản chiếu nghỉ sau y 8.90–9.90 dày 200 (cạnh 3 nằm ngoài mặt cắt).
// Không chiếu nghỉ (T2 → tum): cổ cuối lên sàn trên đúng mép lỗ sàn, bản thang dày `slab` theo phương đứng.
function flightCut(id: "t1" | "t2", z0: number, z1: number, X: (y: number) => number, Z: (z: number) => number, slab = 0.3) {
  const { y, risers, lead, tail } = CORE.flights[id];
  const R = (z1 - z0) / (lead + risers + tail), T = CORE.tread, top = flightTop(id);
  const zl = z0 + lead * R, zt = zl + risers * R, ly0 = CORE.landing.y[0], ly1 = CORE.landing.top[1];
  let d = lead ? `M${X(ly0)} ${Z(z0)} L${X(ly0)} ${Z(zl)} L${X(y)} ${Z(zl)}` : `M${X(y)} ${Z(z0)}`;
  for (let i = 1; i < risers; i++) d += ` L${X(y + (i - 1) * T)} ${Z(zl + i * R)} L${X(y + i * T)} ${Z(zl + i * R)}`;
  if (!lead) return d + ` L${X(top)} ${Z(z1)} L${X(top)} ${Z(z1 - slab)} L${X(y + 0.35)} ${Z(z0)} Z`;
  const zs = (yy: number) => zl + ((yy - y) / T) * R - 0.25; // mặt dưới bản cạnh 2 (= stairSoffit), tựa lên khối chiếu nghỉ trước
  return (
    d +
    ` L${X(top)} ${Z(zt)} L${X(ly1)} ${Z(zt)} L${X(ly1)} ${Z(zt - 0.2)} L${X(top)} ${Z(zt - 0.2)}` +
    ` L${X(top)} ${Z(zs(top))} L${X(y)} ${Z(Math.max(z0, zs(y)))} L${X(y)} ${Z(z0)} Z`
  );
}
// cạnh 1 / cạnh 3 (x 1.20–1.98) nằm sau mặt cắt x 0.70: nét thấy các mặt bậc ngang trên đoạn chiếu nghỉ trước / sau
function sideSteps(z0: number, z1: number, X: (y: number) => number, Z: (z: number) => number) {
  const { lead, risers, tail } = CORE.flights.t1;
  const R = (z1 - z0) / (lead + risers + tail);
  const [a0, a1] = CORE.landing.y, [b0, b1] = CORE.landing.top;
  return [
    ...Array.from({ length: lead - 1 }, (_, k) => [a0, a1, z0 + (k + 1) * R] as const),
    ...Array.from({ length: tail - 1 }, (_, k) => [b0, b1, z0 + (lead + risers + k + 1) * R] as const),
  ].map(([p, q, z]) => `M${X(p)} ${Z(z)} L${X(q)} ${Z(z)}`).join(" ");
}

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

      {/* sân trước: cổng trong khung trắng */}
      <rect x="0" y={yz(2.05)} width="0.1" height="2.05" fill={SOFT} />
      <rect x="-0.25" y={yz(2.5)} width="0.5" height="0.3" {...cut} />
      <T x={0.35} y={yz(2.15)} s={0.26} fill={MUTED} anchor="start">
        Cổng 2.05
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
        d={`M7.1 ${Y0} L7.1 ${yz(0.15)} L7.4 ${yz(0.15)} L7.4 ${yz(0.3)} L7.7 ${yz(0.3)} L7.7 ${yz(0.45)} L8 ${yz(0.45)}`}
        fill="none"
        stroke={INK}
        strokeWidth="0.05"
      />

      {/* giếng trời = dải thang: lỗ mái + lỗ sàn tum (y 7.10–10.94), lỗ sàn T2 (y 6.00–9.90) */}
      <path
        d={`M${CA} ${yz(10.35)} L${CE} ${yz(10.35)} L${CE} ${yz(4.05)} L${H2B} ${yz(4.05)} L${H2B} ${yz(0.45)} L${H2A} ${yz(0.45)} L${H2A} ${yz(4.05)} L${CA} ${yz(4.05)} Z`}
        fill="var(--color-plan-void)"
        opacity="0.4"
      />

      {/* sàn, mái — lỗ sàn T2, lỗ sàn tum, lỗ mái theo CORE.holes; mái tum y 4.5–13.8 */}
      <rect x="8" y={yz(0.45)} width="18" height="0.3" {...cut} />
      {(
        [
          [4.05, H2A, H2B],
          [7.35, CA, CE],
        ] as const
      ).map(([z, a, b]) => (
        <g key={z}>
          <rect x="8" y={yz(z)} width={a - 8} height="0.3" {...cut} />
          <rect x={b} y={yz(z)} width={26 - b} height="0.3" {...cut} />
        </g>
      ))}
      <rect x={SX(4.5)} y={yz(10.35)} width={CA - SX(4.5)} height="0.3" {...cut} />
      <rect x={CE} y={yz(10.35)} width={SX(13.6) - CE} height="0.3" {...cut} />
      {/* tường hậu T1–T2, tường hậu tum, lan can mái trước */}
      <rect x="25.8" y={yz(7.35)} width="0.2" height="6.9" {...cut} />
      <rect x="25.8" y={yz(8.45)} width="0.2" height="1.1" {...cut} />
      <rect x={SX(13.6)} y={yz(11.2)} width="0.2" height="3.85" {...cut} />
      <rect x={SX(4.5)} y={yz(11.2)} width="0.2" height="1.15" {...cut} />
      <rect x={SX(4.5)} y={yz(10.05)} width="0.15" height="2.7" {...glass} />
      {/* tường ngăn "h" bị mặt cắt x 0.70 cắt qua (từ WALLS): đặc, kính, lanh tô trên cửa */}
      {cutWalls(XC).map((w) => {
        const z0 = w.kind === "door" ? w.z0 + 2.2 : w.z0;
        return (
          <rect
            key={`${w.y}-${w.z0}`}
            x={SX(w.y) - w.th / 2}
            y={yz(w.z1)}
            width={w.th}
            height={w.z1 - z0}
            {...(w.kind === "solid" || w.kind === "door" ? cut : glass)}
          />
        );
      })}

      {/* mặt tiền: kính T1 lùi 0.60 dưới dải đá be + trần gỗ, khung trắng loggia nhô 0.60, lan can tum */}
      <rect x="8.55" y={yz(3.15)} width="0.12" height="2.7" {...glass} />
      <rect x="8.5" y={yz(3.75)} width="0.2" height="0.6" {...cut} />
      <rect x="7.4" y={yz(3.6)} width="1.1" height="0.05" fill={TEAK} />
      <rect x="7.4" y={yz(4.0)} width="0.6" height="0.4" {...cut} />
      <rect x="7.4" y={yz(7.35)} width="0.6" height="0.45" {...cut} />
      <rect x="7.4" y={yz(6.9)} width="1.6" height="0.05" fill={TEAK} />
      <line x1="7.69" y1={yz(4.05)} x2="7.69" y2={yz(5.1)} stroke={INK} strokeWidth="0.05" />
      <line x1="7.6" y1={yz(5.1)} x2="7.78" y2={yz(5.1)} stroke={INK} strokeWidth="0.06" />
      <rect x="9.05" y={yz(6.75)} width="0.12" height="2.7" {...glass} />
      <rect x="7.9" y={yz(7.8)} width="0.2" height="0.45" {...cut} />
      <line x1="8" y1={yz(7.8)} x2="8" y2={yz(8.45)} stroke={INK} strokeWidth="0.05" />
      {/* tường hậu T1 kín (phòng ông bà không mở ra sân sau) · T2 cửa sổ 3.20 m */}
      <rect x="25.88" y={yz(6.3)} width="0.12" height="1.8" {...glass} />

      {/* giàn pergola lam đen trên sân thượng, trụ đen góc trái (trụ be bên phải nằm sau người xem) */}
      <rect x="7.9" y={yz(10.65)} width="0.1" height="2.2" fill={SOFT} />
      <rect x="7.7" y={yz(10.77)} width={SX(4.5) - 7.7} height="0.12" fill={INK} opacity="0.75" />
      <rect x="7.85" y={yz(10.65)} width={SX(4.35) - 7.85} height="0.12" fill={INK} opacity="0.45" />
      <T x={10.3} y={yz(11.05)} s={0.22} fill={MUTED}>
        pergola lam đen
      </T>

      {/* mái kính trùm lỗ sàn tum ngay trên đầu thang: gờ 450 + khe gió 150, kính dán dốc 5% */}
      <rect x={CA - 0.2} y={yz(10.8)} width="0.2" height="0.45" {...cut} />
      <rect x={CE} y={yz(10.8)} width="0.2" height="0.45" {...cut} />
      <path
        d={`M${CA - 0.1} ${yz(10.98)} L${CE + 0.1} ${yz(10.8)}`}
        stroke={GLASS}
        strokeWidth="0.18"
        strokeLinecap="round"
      />
      <path d={`M${CA - 0.1} ${yz(10.98)} L${CE + 0.1} ${yz(10.8)}`} stroke={INK} strokeWidth="0.035" />

      {/* thang chữ U, bị cắt tại x 0.70: chiếu nghỉ trước y 4.00–5.00, cạnh 2 y 5.00 → 8.90 sát tường trái, bản chiếu nghỉ sau
          y 8.90–9.90 (+3.45); cạnh 1 / cạnh 3 nằm sau mặt cắt (nét thấy); vế T2 chồng đúng phía trên y 6.00 → 10.94 */}
      <path d={sideSteps(0.45, 4.05, SX, yz)} stroke={FAINT} strokeWidth="0.03" fill="none" />
      <path d={flightCut("t1", 0.45, 4.05, SX, yz)} {...cut} />
      <path d={flightCut("t2", 4.05, 7.35, SX, yz)} {...cut} />
      {/* T1 (bị cắt, từ FURN): bục gỗ, khối tủ đặc gầm thang cắt đỉnh theo dốc thang (kệ rượu, tủ thấp + tủ kính, tủ cao,
          tủ lạnh, tháp lò), nhánh L dọc tường trái + nhánh ngang tường y 13.40; dải WC sau tường hậu: khay sen (lavabo x 0.20–0.65 nằm sau mặt cắt) */}
      <UnderStair boxes={[...cutFurn(XC, 4.5, 13.4), ...cutFurn(XC, 18, 22)]} X={SX} Z={(z) => yz(0.45 + z)} stroke={FAINT} sw={0.035} />
      <T x={SX(6.6)} y={yz(0.45 + 0.08)} s={0.13} fill={MUTED} anchor="end">
        kệ rượu
      </T>
      <T x={SX(7.95)} y={yz(0.45 + 0.35)} s={0.13} fill={MUTED}>
        tủ thấp
      </T>
      <T x={SX(8.6)} y={yz(0.45 + 1.4)} s={0.13} fill={MUTED}>
        tủ kính
      </T>
      <T x={SX(10.55)} y={yz(0.45 + 2.15)} s={0.13} fill={MUTED}>
        tủ cao · tủ lạnh · lò
      </T>
      <T x={SX(12.5)} y={yz(0.45 + 1.2)} s={0.13} fill={MUTED}>
        bếp chữ L
      </T>
      {/* dải WC sát tường trái, liền sau tường hậu phòng ngủ 01 (y 18.00–21.80), mặt cắt x 0.70 đi qua lòng WC: bệ nền +0.45,
          tường cuối y 21.7 cao 2.60 (WALLS.t1, cutWalls), mái bằng y 18.00–21.85 tới +3.23; tường dọc x 0.1 / 1.55 không bị cắt */}
      <rect x={SX(18)} y={yz(0.45)} width={3.8} height="0.45" {...cut} />
      <rect x={SX(18)} y={yz(3.23)} width={3.85} height="0.18" {...cut} />

      {/* gió, khí nóng, nắng */}
      <g stroke={SAGE} strokeWidth="0.07" fill="none" markerEnd="url(#flow)" opacity="0.9">
        <path d={`M9.4 ${yz(2.75)} L${SX(5.6)} ${yz(2.75)}`} />
        <path d={`M${SX(6.4)} ${yz(2.6)} L${SX(8.1)} ${yz(10.0)}`} />
      </g>
      <T x={11.1} y={yz(2.95)} s={0.26} fill={SAGE}>
        gió xuyên nhà
      </T>
      <T x={SX(11.1)} y={yz(9.6)} s={0.22} fill={SAGE} anchor="start">
        khí nóng bốc lên
      </T>
      <path
        d={`M${CA - 1.0} ${yz(12.5)} L${CA + 1.2} ${yz(10.95)}`}
        stroke={OAK}
        strokeWidth="0.06"
        strokeDasharray="0.3 0.18"
        markerEnd="url(#dm-arrow)"
        fill="none"
      />
      <T x={CA - 1.2} y={yz(12.5)} s={0.26} fill={OAK} anchor="end">
        nắng đỉnh
      </T>

      {/* nhãn không gian */}
      <T x={10.5} y={yz(1.6)} s={0.32}>
        Phòng khách
      </T>
      <T x={SX(7.2)} y={yz(3.3)} s={0.24} anchor="end">
        Tủ liền gầm thang
      </T>
      <T x={SX(15.7)} y={yz(1.6)} s={0.32}>
        Phòng ngủ 01
      </T>
      <T x={SX(19.7)} y={yz(1.6)} s={0.26}>
        WC
      </T>
      <T x={11.05} y={yz(5.2)} s={0.32}>
        Phòng ngủ 02
      </T>
      <T x={SX(13.2)} y={yz(5.2)} s={0.32}>
        Phòng ngủ 03
      </T>
      <T x={SX(16.45)} y={yz(5.2)} s={0.32}>
        Phòng ngủ 04
      </T>
      <T x={8.15} y={yz(6.2)} s={0.22} fill={MUTED} anchor="start">
        Loggia
      </T>
      <T x={10.3} y={yz(8.3)} s={0.3} fill={MUTED}>
        Sân thượng
      </T>
      <T x={SX(5.95)} y={yz(8.5)} s={0.3}>
        Phòng thờ
      </T>
      <T x={SX(12.4)} y={yz(8.3)} s={0.3}>
        Sảnh tum
      </T>
      <T x={23.9} y={yz(8.3)} s={0.3} fill={MUTED}>
        Sân phơi
      </T>
      <T x={(CA + CE) / 2} y={yz(9.4)} s={0.24} fill={SOFT}>
        Giếng thang
      </T>
      <T x={4.0} y={yz(2.7)} s={0.3} fill={MUTED}>
        Sân trước 8.00
      </T>
      <T x={28.0} y={yz(3.7)} s={0.3} fill={MUTED}>
        Sân sau 4.00
      </T>
      {/* cây sân sau (x 3.2 / 4.3) nằm phía người xem so với mặt cắt x 0.70 — không vẽ; mặt cắt đi qua lòng dải WC */}

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
        cắt x = 0.70 qua hai vế thang chồng nhau · nhìn về tường trái
      </T>
    </svg>
  );
}

/* ── CT-02 · Mặt đứng mặt tiền ───────────────────────────────────────────── */

const YE = 12.4;
const ye = (z: number) => YE - z;
const BEIGE = "var(--color-mat-beige)";
const range = (a: number, b: number, s: number) => Array.from({ length: Math.floor((b - a) / s + 1e-6) + 1 }, (_, i) => +(a + i * s).toFixed(3));

// chữ nhật bo góc trong toạ độ mặt đứng (x, z) — [dưới trái, dưới phải, trên phải, trên trái]
function rr(x0: number, z0: number, x1: number, z1: number, [bl, br, tr, tl]: number[]) {
  return (
    `M${x0 + bl} ${ye(z0)} L${x1 - br} ${ye(z0)} Q${x1} ${ye(z0)} ${x1} ${ye(z0 + br)} L${x1} ${ye(z1 - tr)} ` +
    `Q${x1} ${ye(z1)} ${x1 - tr} ${ye(z1)} L${x0 + tl} ${ye(z1)} Q${x0} ${ye(z1)} ${x0} ${ye(z1 - tl)} L${x0} ${ye(z0 + bl)} Q${x0} ${ye(z0)} ${x0 + bl} ${ye(z0)} Z`
  );
}

export function Elevation() {
  const line = { stroke: INK, strokeWidth: 0.04 };
  // Chi tiết A — cắt đứng khung loggia, 1 m = 0.9 đơn vị
  const X = (y: number) => 8.3 + (y + 1.0) * 0.9;
  const Z = (z: number) => 12.0 - (z - 3.6) * 0.9;
  const cutA = { fill: "url(#hatch-cut)", stroke: INK, strokeWidth: 0.03 };
  return (
    <svg
      viewBox="-2.1 0.35 15.6 13.9"
      className="w-full"
      role="img"
      aria-label="Mặt đứng mặt tiền và chi tiết cắt khung loggia bo cong"
    >
      <Defs />
      <rect x="-2.1" y="0.35" width="15.6" height="13.9" fill="var(--color-paper)" />

      <rect x="-0.6" y={YE} width="6.2" height="0.3" fill="url(#hatch-earth)" />
      <line x1="-0.6" y1={YE} x2="5.6" y2={YE} stroke={INK} strokeWidth="0.05" />

      {/* khối tum lùi 4.50 m: kính + cửa ra sân thượng */}
      <rect x="0" y={ye(11.2)} width="5" height="3.85" fill="var(--color-paper-2)" stroke={FAINT} strokeWidth="0.03" />
      <rect x="0.2" y={ye(9.75)} width="4.6" height="2.4" fill={GLASS} stroke={FAINT} strokeWidth="0.03" opacity="0.75" />
      {[1.9, 3.1].map((x) => (
        <line key={x} x1={x} y1={ye(9.75)} x2={x} y2={ye(7.35)} stroke={FAINT} strokeWidth="0.04" />
      ))}
      <line x1="-0.3" y1={ye(11.2)} x2="5.3" y2={ye(11.2)} stroke={FAINT} strokeWidth="0.03" strokeDasharray="0.16 0.12" />
      <T x={5.35} y={ye(11.15)} s={0.22} fill={FAINT} anchor="start">
        đỉnh mái kính giếng (khuất)
      </T>

      {/* bệ đá + tầng 1: kính lùi 0.60, dải đá be, trần gỗ */}
      <rect x="0" y={ye(0.45)} width="5" height="0.45" fill={STONE} opacity="0.55" {...line} />
      <rect x="0" y={ye(3.75)} width="0.4" height="3.3" fill={PLASTER} {...line} />
      <rect x="4.6" y={ye(3.75)} width="0.4" height="3.3" fill={PLASTER} {...line} />
      <rect x="0.4" y={ye(3.15)} width="4.2" height="2.7" fill={GLASS} {...line} />
      <rect x="0.4" y={ye(3.15)} width="4.2" height="0.35" fill={INK} opacity="0.14" />
      <line x1="2.5" y1={ye(3.15)} x2="2.5" y2={ye(0.45)} stroke={INK} strokeWidth="0.03" />
      <rect x="0.4" y={ye(3.75)} width="4.2" height="0.6" fill={BEIGE} {...line} />

      {/* tầng 2: kính master trong ô mở, khung trắng bo cong nhô 0.60 */}
      <rect x="0.45" y={ye(6.9)} width="4.1" height="2.9" fill={GLASS} opacity="0.85" />
      <rect x="0.45" y={ye(6.9)} width="4.1" height="0.2" fill={TEAK} opacity="0.6" />
      {[1.73, 3.27].map((x) => (
        <line key={x} x1={x} y1={ye(6.6)} x2={x} y2={ye(4.05)} stroke={INK} strokeWidth="0.03" />
      ))}
      <path
        d={rr(0, 3.6, 5, 7.35, [0.15, 0.15, 0.75, 0.15]) + " " + rr(0.45, 4.0, 4.55, 6.9, [0.75, 0.1, 0.1, 0.1])}
        fill={PLASTER}
        fillRule="evenodd"
        stroke={INK}
        strokeWidth="0.045"
      />
      <g fill={INK}>
        {range(0.5, 4.5, 0.1).map((x) => (
          <rect key={x} x={x} y={ye(5.1)} width="0.02" height="1.05" />
        ))}
        <rect x="0.45" y={ye(5.1)} width="4.1" height="0.04" />
      </g>
      <rect x="3.7" y={ye(5.1)} width="1.25" height="0.7" fill={BEIGE} {...line} />
      <g fill={SAGE} opacity="0.55">
        <circle cx="4.0" cy={ye(5.3)} r="0.25" />
        <circle cx="4.45" cy={ye(5.4)} r="0.32" />
      </g>

      {/* tum: lan can tường trắng + nan đen, bồn cây trái, giàn pergola trên trụ be cao bên phải */}
      <rect x="0.3" y={ye(8.15)} width="1.4" height="0.35" fill={BEIGE} {...line} />
      <circle cx="1.0" cy={ye(8.55)} r="0.42" fill={SAGE} opacity="0.5" />
      <rect x="0" y={ye(8.45)} width="0.2" height="1.1" fill={PLASTER} {...line} />
      <rect x="4.8" y={ye(8.45)} width="0.2" height="1.1" fill={PLASTER} {...line} />
      <rect x="0.2" y={ye(7.8)} width="4.6" height="0.45" fill={PLASTER} {...line} />
      <g fill={INK}>
        {range(0.3, 4.7, 0.1).map((x) => (
          <rect key={x} x={x} y={ye(8.43)} width="0.02" height="0.63" />
        ))}
        <rect x="0.2" y={ye(8.45)} width="4.6" height="0.04" />
        <rect x="0.2" y={ye(10.65)} width="0.1" height="2.2" />
        <rect x="0.2" y={ye(10.65)} width="4.6" height="0.12" />
        {range(0.3, 4.7, 0.22).map((x) => (
          <rect key={x} x={x} y={ye(10.77)} width="0.05" height="0.12" />
        ))}
      </g>
      <rect x="4.8" y={ye(11.05)} width="0.25" height="2.6" fill={BEIGE} {...line} />

      <Leader x={4.9} y={ye(6.8)} tx={5.4} ty={ye(6.6)} label="khung trắng bo cong nhô 0.60" s={0.24} />
      <Leader x={1.0} y={ye(8.15)} tx={5.4} ty={ye(9.1)} label="bồn cây sân thượng" s={0.24} />
      <Leader x={4.92} y={ye(10.0)} tx={5.4} ty={ye(10.2)} label="giàn pergola trên trụ be" s={0.24} />
      <Leader x={3.4} y={ye(8.1)} tx={5.4} ty={ye(8.2)} label="lan can trắng + nan đen" s={0.24} />
      <Leader x={4.3} y={ye(4.75)} tx={5.4} ty={ye(5.2)} label="bồn cây be" s={0.24} />
      <Leader x={2.5} y={ye(4.6)} tx={5.4} ty={ye(4.45)} label="nan đen 20 @ 100" s={0.24} />
      <Leader x={2.5} y={ye(3.45)} tx={5.4} ty={ye(3.5)} label="dải đá be, trần gỗ" s={0.24} />
      <Leader x={2.5} y={ye(1.8)} tx={5.4} ty={ye(1.6)} label="kính low-E, lùi 0.60 m" s={0.24} />
      <Leader x={4.2} y={ye(0.22)} tx={5.4} ty={ye(0.15)} label="bệ granite 30 mm" s={0.24} />

      <DimV x={-0.55} y1={ye(0.45)} y2={ye(4.05)} label="3.60" s={0.26} />
      <DimV x={-0.55} y1={ye(4.05)} y2={ye(7.35)} label="3.30" s={0.26} />
      <DimV x={-0.55} y1={ye(7.35)} y2={ye(10.35)} label="3.00" s={0.26} />
      <DimV x={-1.45} y1={ye(0)} y2={ye(11.2)} label="11.20" s={0.26} />
      <DimH x1={0.4} x2={4.6} y={13.05} label="4.20" s={0.26} />
      <DimH x1={0} x2={5} y={13.62} label="5.00" s={0.26} />

      <T x={0} y={ye(11.75)} s={0.32} fill={SAGE} anchor="start" wide>
        MẶT ĐỨNG MẶT TIỀN
      </T>

      {/* Chi tiết A — cắt đứng khung loggia (nhìn ngang, mặt tiền bên trái) */}
      <g>
        <T x={8.0} y={7.35} s={0.28} fill={SAGE} anchor="start" wide>
          CHI TIẾT A
        </T>
        <T x={8.0} y={7.75} s={0.22} fill={MUTED} anchor="start">
          cắt đứng khung loggia · mặt tiền bên trái
        </T>
        <rect x={X(0)} y={Z(7.35)} width={X(1.3) - X(0)} height={0.27} {...cutA} />
        <rect x={X(0)} y={Z(4.05)} width={X(1.3) - X(0)} height={0.27} {...cutA} />
        <rect x={X(-0.6)} y={Z(7.35)} width={0.54} height={0.405} {...cutA} />
        <rect x={X(-0.6)} y={Z(4.0)} width={0.54} height={0.36} {...cutA} />
        <rect x={X(-0.6)} y={Z(6.9)} width={X(1.0) - X(-0.6)} height="0.05" fill={TEAK} />
        <rect x={X(1.08)} y={Z(6.75)} width="0.05" height={(6.75 - 4.05) * 0.9} fill={GLASS} stroke={INK} strokeWidth="0.02" />
        <line x1={X(-0.31)} y1={Z(4.0)} x2={X(-0.31)} y2={Z(5.1)} stroke={INK} strokeWidth="0.04" />
        <line x1={X(-0.36)} y1={Z(5.1)} x2={X(-0.26)} y2={Z(5.1)} stroke={INK} strokeWidth="0.06" />
        <rect x={X(-1.0)} y={Z(5.1)} width={0.585} height={0.63} fill={BEIGE} stroke={INK} strokeWidth="0.025" />
        <circle cx={X(-0.7)} cy={Z(5.35)} r="0.22" fill={SAGE} opacity="0.5" />
        <DimH x1={X(-0.6)} x2={X(0)} y={Z(7.35) - 0.25} label="600" s={0.18} />
        <DimV x={X(1.3) + 0.25} y1={Z(7.35)} y2={Z(6.9)} label="450" s={0.16} right />
        <DimV x={X(-1.0) - 0.15} y1={Z(4.05)} y2={Z(5.1)} label="1 050" s={0.16} />
        <Leader x={X(-0.3)} y={Z(7.1)} tx={X(1.3) + 0.6} ty={Z(7.6)} label="khung BT trắng nhô 600" s={0.18} />
        <Leader x={X(0.5)} y={Z(6.9) + 0.03} tx={X(1.3) + 0.6} ty={Z(6.4)} label="trần gỗ nan + đèn lon" s={0.18} />
        <Leader x={X(1.1)} y={Z(5.6)} tx={X(1.3) + 0.6} ty={Z(5.6)} label="kính master lùi 1 100" s={0.18} />
        <Leader x={X(-0.31)} y={Z(4.7)} tx={X(1.3) + 0.6} ty={Z(4.75)} label="nan sắt đen 20 @ 100" s={0.18} />
        <Leader x={X(-0.7)} y={Z(4.6)} tx={X(1.3) + 0.6} ty={Z(4.2)} label="bồn cây be" s={0.18} />
        <T x={8.0} y={12.45} s={0.2} fill={SOFT} anchor="start">
          bo góc R 750: góc trên phải khung, góc dưới trái ô mở
        </T>
        <T x={8.0} y={12.8} s={0.2} fill={MUTED} anchor="start">
          nan sắt đen suốt ô mở 4.10 m, không lam gỗ
        </T>
      </g>
    </svg>
  );
}

/* ── CT-03 · Cầu thang ───────────────────────────────────────────────────── */

// (a) mặt cắt vế T1 ở trên, (b) mặt bằng dải thang ở dưới — chung trục ngang u = y − chân thang (m)
const ST = CORE.flights.t1;
const TREAD = CORE.tread;
const RISE = riseOf("t1"); // 3.60 / 24 = 150
const N_RISE = ST.lead + ST.risers + ST.tail; // 24
const ZL = ST.lead * RISE; // chiếu nghỉ trước +600
const ZT = (ST.lead + ST.risers) * RISE; // chiếu nghỉ sau +3 000
const U0 = ST.y;
const su = (y: number) => y - U0;
const STOP = su(flightTop("t1")); // 3.90
const [HA, HB] = CORE.holes.t2.map(su); // 1.00 … 4.90
const [LA, LB] = CORE.landing.y.map(su); // −1.00 … 0
const [TA, TB] = CORE.landing.top.map(su); // 3.90 … 4.90
const XF = CORE.x[1] + (ST.lead - 1) * TREAD; // mép ngoài cạnh 1 / cạnh 3: x 1.98
const YS = 4.9;
const ys = (z: number) => YS - z;
const nose = (u: number) => RISE * (u / TREAD + 1 + ST.lead); // đường mũi bậc cạnh 2
const EDGE = 0.15; // sàn vát mỏng 150 tại mép lỗ
const STEP_AT_HOLE = (Math.ceil(HA / TREAD) + ST.lead) * RISE; // mặt bậc ngay dưới mép lỗ sàn T2
const RISE_MM = String(+(RISE * 1000).toFixed(1));
const HEAD = 3.6 - EDGE - STEP_AT_HOLE;
const mm = (m: number) => Math.round(m * 1000).toLocaleString("en-US").replace(",", " ");
const pv = (x: number) => 6.35 + (x - CORE.x[0]); // mặt bằng: x 0.20 (tường trái) ở trên
const KY = 13.4; // tường sau bếp | phòng ngủ 01 (WALLS.t1)
const KU = su(KY); // 8.40
const STEPS_X = Array.from({ length: ST.lead }, (_, k) => CORE.x[1] + k * TREAD); // cổ bậc cạnh 1 / cạnh 3: x 1.20 … 1.98

export function StairDetail() {
  const risers = Array.from({ length: ST.risers }, (_, i) => i * TREAD); // cổ bậc cạnh 2 thứ i + 1
  const cab = cutFurn(XC, 4.5, KY);
  const plan = FURN.t1.filter((f): f is Box => f[0] === "r" && f[1] < CORE.x[1] && f[1] + f[3] > CORE.x[0] && f[2] >= 4.5 && f[2] < KY);
  const step13 = 12 * TREAD;
  const stripH = pv(CORE.x[1]) - pv(CORE.x[0]);
  return (
    <svg
      viewBox="-2.5 0.1 11.9 9.8"
      className="w-full"
      role="img"
      aria-label="Chi tiết cầu thang chữ U ba cạnh: mặt cắt vế T1 qua hai chiếu nghỉ và mặt bằng dải thang sát tường trái"
    >
      <Defs />
      <rect x="-2.5" y="0.1" width="11.9" height="9.8" fill="var(--color-paper)" />

      {/* (a) mặt cắt x 0.70 vế T1 → T2: chiếu nghỉ trước đặc, cạnh 2, bản chiếu nghỉ sau; cạnh 1 / cạnh 3 sau mặt cắt (nét thấy) */}
      <path
        d={`M0 ${ys(nose(0))} L${STOP} ${ys(ZT)} L${STOP} ${ys(ZT + 1.1)} L0 ${ys(nose(0) + 1.1)} Z`}
        fill={GLASS}
        opacity="0.22"
      />
      {/* kính mặt y 4.00 của chiếu nghỉ trước (nhìn ngang) */}
      <rect x={LA - 0.01} y={ys(ZL + 1.0)} width="0.02" height="1.0" fill={GLASS} stroke={INK} strokeWidth="0.015" />
      <line x1={LA} y1={ys(ZL + 1.0)} x2={LB} y2={ys(ZL + 1.0)} stroke={SOFT} strokeWidth="0.05" strokeLinecap="round" />
      <path d={sideSteps(0, 3.6, su, ys)} stroke={FAINT} strokeWidth="0.02" fill="none" />
      <rect x="-1.8" y={ys(0)} width="1.8" height="0.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
      <path
        d={`M-1.8 ${ys(3.6)} L${HA} ${ys(3.6)} L${HA} ${ys(3.6 - EDGE)} L${HA - 0.45} ${ys(3.6 - EDGE)} L${HA - 0.6} ${ys(3.3)} L-1.8 ${ys(3.3)} Z`}
        fill="url(#hatch-cut)"
        stroke={INK}
        strokeWidth="0.03"
      />
      <rect x={HB} y={ys(3.6)} width={KU - HB} height="0.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
      <path d={flightCut("t1", 0, 3.6, su, ys)} fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.035" />
      {/* tay vịn đồng chạy theo cạnh 2, gấp lên theo cạnh 3 tại mép chiếu nghỉ sau */}
      <path
        d={`M0 ${ys(nose(0) + 0.9)} L${STOP} ${ys(ZT + 0.9)} L${STOP} ${ys(3.6 + 0.9)}`}
        fill="none"
        stroke={SOFT}
        strokeWidth="0.05"
        strokeLinecap="round"
      />
      <UnderStair boxes={cab} X={su} Z={ys} stroke={FAINT} sw={0.025} />
      {/* tường sau bếp y 13.40 (cửa sau bếp là phòng ngủ 01) */}
      <rect x={KU - 0.05} y={ys(3.3)} width="0.1" height="3.3" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
      <path d={`M0.4 ${ys(ZL)} a 0.55 0.55 0 0 1 0.47 0.3`} fill="none" stroke={OAK} strokeWidth="0.02" />
      <T x={0.65} y={ys(ZL - 0.14)} s={0.14} fill={OAK} anchor="start">
        {`${((Math.atan(RISE / TREAD) * 180) / Math.PI).toFixed(1)}°`}
      </T>

      <DimH x1={step13 - TREAD} x2={step13} y={ys((12 + ST.lead) * RISE + 0.12)} label="260" s={0.13} />
      <Leader x={step13} y={ys((12.5 + ST.lead) * RISE)} tx={2.0} ty={ys(3.3)} label={`cổ bậc ${RISE_MM}`} s={0.13} anchor="end" />
      <DimV x={HA + 0.14} y1={ys(STEP_AT_HOLE)} y2={ys(3.6 - EDGE)} label={mm(HEAD)} s={0.13} right />
      <Leader x={HA} y={ys(3.52)} tx={-0.3} ty={ys(3.75)} label={`mép lỗ sàn T2 · y ${CORE.holes.t2[0].toFixed(2)}`} s={0.13} anchor="end" />
      <T x={KU - 0.1} y={ys(3.72)} s={0.13} fill={SOFT} anchor="end">
        {`sàn T2 · y ${CORE.landing.top[1].toFixed(2)}`}
      </T>
      <Leader
        x={(TA + TB) / 2}
        y={ys(ZT - 0.1)}
        tx={5.2}
        ty={ys(4.55)}
        label={`chiếu nghỉ sau +${mm(ZT)} = ${ST.lead + ST.risers} × ${RISE_MM} · bản 200`}
        s={0.13}
      />
      <Leader
        x={TB - 0.15}
        y={ys(ZT + 3 * RISE)}
        tx={5.2}
        ty={ys(4.25)}
        label={`cạnh 3: ${ST.tail - 1} bậc x ${CORE.x[1].toFixed(2)} → ${XF.toFixed(2)} (sau mặt cắt)`}
        s={0.13}
      />
      <Leader x={1.6} y={ys(nose(1.6) + 0.9)} tx={0.9} ty={ys(3.0)} label="tay vịn đồng 900 · kính 1 100" s={0.13} anchor="end" />
      <Leader x={1.17} y={ys(nose(1.17) - 0.05)} tx={0.9} ty={ys(2.6)} label="bậc đá trắng · LED hắt mũi" s={0.13} anchor="end" />
      <Leader x={2.6} y={ys(stairSoffit(2.6 + U0) + 0.1)} tx={0.9} ty={ys(2.2)} label="bản BTCT 120 + trát" s={0.13} anchor="end" />
      <Leader x={(LA + LB) / 2} y={ys(ZL - 0.2)} tx={-1.05} ty={ys(1.3)} label={`chiếu nghỉ đặc +${mm(ZL)}`} s={0.13} anchor="end" />
      <T x={2.4} y={ys(0.3)} s={0.12} fill={MUTED} anchor="start">
        gầm thang: khối tủ đặc cắt theo dốc — kệ rượu → tủ thấp + tủ kính → tủ cao
      </T>
      <DimH x1={0} x2={STOP} y={5.65} label={`${mm(STOP)} = ${ST.risers - 1} × 260`} s={0.15} />
      <DimH x1={LA} x2={LB} y={5.65} label="1 000" s={0.13} />
      <DimH x1={TA} x2={TB} y={5.65} label="1 000" s={0.13} />
      <DimV x={LA - 0.3} y1={ys(0)} y2={ys(ZL)} label={`${mm(ZL)} = ${ST.lead} × ${RISE_MM}`} s={0.11} />
      <DimV x={KU + 0.35} y1={ys(0)} y2={ys(3.6)} label={`3 600 = ${N_RISE} × ${RISE_MM}`} s={0.15} right />
      <T x={-2.35} y={0.5} s={0.17} fill={SAGE} anchor="start" wide>
        (a) MẶT CẮT VẾ T1 → T2 QUA HAI CHIẾU NGHỈ
      </T>
      <T x={-2.35} y={0.85} s={0.14} fill={MUTED} anchor="start">
        {`${N_RISE} cổ bậc × ${RISE_MM} · 2 chiếu nghỉ 1.00 × 1.00 tại +${mm(ZL)} và +${mm(ZT)} · cạnh 2: ${ST.risers - 1} mặt bậc × 260`}
      </T>

      {/* (b) mặt bằng dải thang T1: tường trái ở trên; cạnh 1 / cạnh 3 chạy ngang nhà x 1.20–1.98 ở hai đầu */}
      <g>
        <rect x="-1.8" y={pv(0)} width={KU + 1.8} height="0.2" fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
        <rect x="0" y={pv(CORE.x[0])} width={TB} height={stripH} fill="var(--color-plan-stair)" />
        {/* cạnh 1: bục gỗ cạnh sofa → 3 bậc ngang x 1.98 → 1.20 → chiếu nghỉ trước góc tường; kính gấp tại chiếu nghỉ */}
        <rect x={LA} y={pv(CORE.x[0])} width={LB - LA} height={pv(XF) - pv(CORE.x[0])} fill="var(--color-plan-stair)" />
        <rect x={LA} y={pv(CORE.x[0])} width={LB - LA} height={stripH} fill="none" stroke={SOFT} strokeWidth="0.025" />
        {/* cạnh 3: chiếu nghỉ sau → 3 bậc ngang x 1.20 → 1.98 → sàn T2 (vẽ ở cao độ +3.00 … +3.60, phía trên bếp) */}
        <rect x={TA} y={pv(CORE.x[1])} width={TB - TA} height={pv(XF) - pv(CORE.x[1])} fill="var(--color-plan-stair)" />
        <rect x={TA} y={pv(CORE.x[0])} width={TB - TA} height={stripH} fill="none" stroke={SOFT} strokeWidth="0.025" />
        {STEPS_X.map((x) => (
          <g key={`s${x}`} stroke={SOFT} strokeWidth="0.025">
            <line x1={LA} y1={pv(x)} x2={LB} y2={pv(x)} />
            <line x1={TA} y1={pv(x)} x2={TB} y2={pv(x)} />
          </g>
        ))}
        <rect x={su(3.9)} y={pv(XF)} width={1.15} height={0.5} fill="none" stroke={OAK} strokeWidth="0.03" />
        <T x={su(3.9) + 0.575} y={pv(XF) + 0.3} s={0.1} fill={OAK}>
          bục gỗ
        </T>
        <path
          d={`M${LA} ${pv(XF)} L${LA} ${pv(CORE.x[0])} M${LB} ${pv(XF)} L${LB} ${pv(CORE.x[1])} M${TA} ${pv(CORE.x[1])} L${TA} ${pv(XF)}`}
          stroke={GLASS}
          strokeWidth="0.06"
        />
        <T x={(LA + LB) / 2} y={pv(CORE.x[0]) + 0.2} s={0.1} fill={SOFT}>
          {`chiếu nghỉ +${mm(ZL)}`}
        </T>
        <T x={(TA + TB) / 2} y={pv(CORE.x[0]) + 0.2} s={0.1} fill={SOFT}>
          {`chiếu nghỉ +${mm(ZT)}`}
        </T>
        <rect x={TB} y={pv(CORE.x[0])} width={KU - TB} height={stripH} fill="var(--color-plan-kitchen)" />
        <rect x={KU - 0.05} y={pv(CORE.x[0])} width="0.1" height={stripH} fill="url(#hatch-cut)" stroke={INK} strokeWidth="0.03" />
        {plan.map(([, x, y, w, d]) => (
          <rect
            key={`p${y}`}
            x={su(y)}
            y={pv(x)}
            width={d}
            height={Math.min(x + w, CORE.x[1]) - x} // cắt ở mép dải thang x 1.20
            fill="none"
            stroke={MUTED}
            strokeWidth="0.025"
            strokeDasharray="0.08 0.05"
          />
        ))}
        {risers.map((u) => (
          <line key={u} x1={u} y1={pv(CORE.x[0])} x2={u} y2={pv(CORE.x[1])} stroke={SOFT} strokeWidth="0.025" />
        ))}
        <line x1="0" y1={pv(CORE.x[1])} x2={STOP} y2={pv(CORE.x[1])} stroke={GLASS} strokeWidth="0.06" />
        {/* lỗ sàn T2 phía trên: trên cạnh 2 + chiếu nghỉ sau, và lỗ thứ hai trên cạnh 3 */}
        <g fill="none" stroke={INK} strokeWidth="0.03" strokeDasharray="0.16 0.1">
          <rect x={HA} y={pv(CORE.x[0])} width={HB - HA} height={stripH} />
          <rect
            x={su(CORE.tailHole.y[0])}
            y={pv(CORE.tailHole.x[0])}
            width={CORE.tailHole.y[1] - CORE.tailHole.y[0]}
            height={CORE.tailHole.x[1] - CORE.tailHole.x[0]}
          />
        </g>
        <T x={(HA + TA) / 2} y={6.6} s={0.12} fill={SOFT}>
          {`lỗ sàn T2 phía trên · 1 000 × ${mm(HB - HA)}`}
        </T>
        <path
          d={`M${(LA + LB) / 2} ${pv(XF) - 0.1} L${(LA + LB) / 2} 6.85 L${(TA + TB) / 2} 6.85 L${(TA + TB) / 2} ${pv(XF) - 0.12}`}
          fill="none"
          stroke={SAGE}
          strokeWidth="0.045"
          markerEnd="url(#flow-s)"
        />
        <circle cx={(LA + LB) / 2} cy={pv(XF) - 0.1} r="0.06" fill={SAGE} />
        <T x={0.3} y={7.25} s={0.13} fill={SAGE} anchor="start">
          LÊN
        </T>
        <T x={6.6} y={6.9} s={0.11} fill={MUTED}>
          tủ lạnh · lò · bếp L
        </T>
        <DimV x={-1.6} y1={pv(CORE.x[0])} y2={pv(CORE.x[1])} label="1 000" s={0.13} />
        <DimV x={-1.6} y1={pv(CORE.x[1])} y2={pv(XF)} label={`${ST.lead - 1} × 260`} s={0.11} />
        <DimH x1={0} x2={STOP} y={7.85} label={mm(STOP)} s={0.14} below />
        <DimH x1={TA} x2={TB} y={pv(XF) + 0.35} label="1 000" s={0.12} below />
        <DimH x1={HA} x2={HB} y={6.0} label={`lỗ ${mm(HB - HA)}`} s={0.11} />
        <T x={-2.35} y={8.95} s={0.17} fill={SAGE} anchor="start" wide>
          (b) MẶT BẰNG DẢI THANG T1 — CHỮ U BA CẠNH
        </T>
        <T x={-2.35} y={9.3} s={0.13} fill={MUTED} anchor="start">
          {`cạnh 1: bục gỗ → ${ST.lead - 1} bậc ngang x ${XF.toFixed(2)} → ${CORE.x[1].toFixed(2)} → chiếu nghỉ trước y ${CORE.landing.y[0].toFixed(2)}–${CORE.landing.y[1].toFixed(2)} · cạnh 2 sát tường trái y ${U0.toFixed(2)} → ${flightTop("t1").toFixed(2)} · chiếu nghỉ sau y ${CORE.landing.top[0].toFixed(2)}–${CORE.landing.top[1].toFixed(2)} · cạnh 3: ${ST.tail - 1} bậc x ${CORE.x[1].toFixed(2)} → ${XF.toFixed(2)} lên sàn T2 "Đầu thang"`}
        </T>
        <T x={-2.35} y={9.62} s={0.13} fill={MUTED} anchor="start">
          {`lỗ sàn T2: x ${CORE.x[0].toFixed(2)}–${CORE.x[1].toFixed(2)}, y ${CORE.holes.t2[0].toFixed(2)}–${CORE.holes.t2[1].toFixed(2)} + x ${CORE.tailHole.x[0].toFixed(2)}–${CORE.tailHole.x[1].toFixed(2)}, y ${CORE.tailHole.y[0].toFixed(2)}–${CORE.tailHole.y[1].toFixed(2)} · vế T2 → tum chồng đúng phía trên cạnh 2: y ${CORE.flights.t2.y.toFixed(2)} → ${flightTop("t2").toFixed(2)}`}
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
      aria-label="Chi tiết mái kính trên dải thang và khe thoát khí"
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
        {`Ô MÁI KÍNH ${mm(CORE.x[1] - CORE.x[0])} × ${mm(CORE.holes.tum[1] - CORE.holes.tum[0])} trùm lỗ sàn tum, y ${CORE.holes.tum[0].toFixed(2)}–${CORE.holes.tum[1].toFixed(2)} — sáng rơi dọc dải thang xuống bếp T1`}
      </T>
      <T x={-1.4} y={0.62} s={0.15} fill={SAGE} anchor="start" wide>
        CT-04 · MÁI KÍNH ĐẦU THANG
      </T>
      <T x={-1.4} y={0.8} s={0.1} fill={MUTED} anchor="start">
        cắt ngang dải thang · trái: tường biên x 0.20, phải: gờ phía sảnh tum x 1.20
      </T>
    </svg>
  );
}

/* ── CT-05 · Hai WC + hộp gen ────────────────────────────────────────────── */

/* cắt dọc qua hộp gen tại x 4.65 (sát tường phải), nhìn về tường trái · 1 đơn vị = 1 m, ngang = y − 7.50 */
const GEN = { x: [4.5, 4.8], y: [10.1, 10.4] } as const; // hộp gen 300 × 300, góc sau phải WC T2
const WX = (y: number) => y - 7.5;
const WZ = (z: number) => 11.6 - z;

export function WetStack() {
  const cut = { fill: "url(#hatch-cut)", stroke: INK, strokeWidth: 0.03 };
  const ghost = { fill: "none", stroke: FAINT, strokeWidth: 0.035, strokeDasharray: "0.12 0.08" };
  const xc = (GEN.x[0] + GEN.x[1]) / 2;
  const gx = WX((GEN.y[0] + GEN.y[1]) / 2);
  const wc2 = FLOOR_ROOM("t2-wc"), wc1 = FLOOR_ROOM("t1-wc");
  const slab = (z: number, y1: number) => <rect x={-0.3} y={WZ(z)} width={WX(y1) + 0.3} height="0.3" {...cut} />;
  return (
    <svg
      viewBox="-1.5 -0.3 16.8 14.1"
      className="w-full"
      role="img"
      aria-label="Chi tiết WC tầng 2 trong nhà, WC tầng 1 dải riêng sát tường trái sân sau, hộp gen tường phải và đường ống ra hố ga sân sau"
    >
      <Defs />
      <rect x="-1.5" y="-0.3" width="16.8" height="14.1" fill="var(--color-paper)" />

      {/* đất, nền T1, sàn T2, sàn tum, mái tum (tới y 13.80), tường hậu, tường rào cuối sân y 21.8–22 */}
      <rect x="-0.3" y={WZ(0)} width={WX(22) + 0.6} height="1.3" fill="url(#hatch-earth)" />
      <line x1="-0.3" y1={WZ(0)} x2={WX(22) + 0.3} y2={WZ(0)} stroke={INK} strokeWidth="0.05" />
      <rect x={WX(21.8)} y={WZ(2.4)} width="0.2" height="2.4" {...cut} />
      <rect x={-0.3} y={WZ(0.45)} width={WX(18) + 0.3} height="0.45" {...cut} />
      {slab(4.05, 18)}
      {slab(7.35, 18)}
      {slab(10.35, 13.8)}
      <rect x={WX(17.8)} y={WZ(3.75)} width="0.2" height={3.75 - 2.65} {...cut} />
      <rect x={WX(17.8)} y={WZ(7.05)} width="0.2" height="3" {...cut} />
      <rect x={WX(17.8)} y={WZ(8.45)} width="0.2" height="1.1" {...cut} />
      <rect x={WX(13.6)} y={WZ(11.2)} width="0.2" height="0.85" {...cut} />
      {/* tường ngăn "h" bị mặt cắt x 4.65 cắt qua (WALLS): WC T2, cửa PN04, cửa phụ phòng thờ, cửa sân phơi */}
      {cutWalls(xc).map((w) => {
        const z0 = w.kind === "door" ? w.z0 + 2.2 : w.z0;
        return <rect key={`${w.y}-${w.z0}`} x={WX(w.y) - w.th / 2} y={WZ(w.z1)} width={w.th} height={w.z1 - z0} {...cut} />;
      })}

      {/* WC T1: dải riêng sát tường trái liền sau tường hậu (x 0–1.60, y 18.00–21.80) nằm sau mặt cắt — nét đứt: bệ nền +0.45, tường 2.60, mái bằng y 18.00–21.85 tới +3.23 */}
      <rect x={WX(wc1.y)} y={WZ(0.45)} width={wc1.h} height={0.45} {...ghost} />
      <rect x={WX(wc1.y)} y={WZ(3.05)} width={wc1.h} height={2.6} {...ghost} />
      <rect x={WX(wc1.y)} y={WZ(3.23)} width={wc1.h + 0.05} height={0.18} {...ghost} />
      {/* mái kính x 1.60–4.80, y 18.00–19.40 +2.95 che lối từ cửa sau hành lang tới cửa WC, bị mặt cắt x 4.65 cắt qua cùng dầm biên y 19.34–19.40;
          trụ x 4.74–4.80 nằm trước mặt cắt — nét đứt */}
      <rect x={WX(18)} y={WZ(2.97)} width={1.4} height="0.04" fill={GLASS} stroke={INK} strokeWidth="0.02" />
      <rect x={WX(19.34)} y={WZ(2.99)} width="0.06" height="0.1" fill={INK} />
      <rect x={WX(19.34)} y={WZ(2.89)} width="0.06" height={2.85} {...ghost} />
      {/* bậc lên cửa WC (x 1.60–2.40, y 18.40–19.10), sau mặt cắt */}
      <rect x={WX(18.4)} y={WZ(0.3)} width={0.7} height={0.3} {...ghost} />
      {FURN.t1.filter((f): f is Box => f[0] === "r" && f[2] >= wc1.y).map(([, , y, , d, h]) => (
        <rect key={y} x={WX(y)} y={WZ(0.45 + h)} width={d} height={h} {...ghost} />
      ))}

      {/* WC T2: chống thấm hạ cốt 50, thiết bị bị cắt (két nước bồn cầu, khay sen) */}
      <path
        d={`M${WX(wc2.y) + 0.06} ${WZ(4.35)} L${WX(wc2.y) + 0.06} ${WZ(4.03)} L${WX(wc2.y + wc2.h) - 0.06} ${WZ(4.03)} L${WX(wc2.y + wc2.h) - 0.06} ${WZ(4.35)}`}
        fill="none"
        stroke={SAGE}
        strokeWidth="0.05"
      />
      {cutFurn(xc, wc2.y, wc2.y + wc2.h, "t2").map(([, , y, , d, h]) => (
        <rect key={y} x={WX(y)} y={WZ(4.05 + h)} width={Math.min(d, GEN.y[0] - y)} height={h} fill="none" stroke={SOFT} strokeWidth="0.035" />
      ))}

      {/* hộp gen 300 × 300 từ nền T1 lên trần T2 · cửa thăm mỗi tầng; trên tum chỉ còn ống thông hơi D60 âm tường */}
      <rect x={WX(GEN.y[0])} y={WZ(7.05)} width="0.3" height={7.05 - 0.45} fill="url(#hatch-fine)" stroke={INK} strokeWidth="0.03" />
      {[1.0, 4.45].map((z) => (
        <rect key={z} x={WX(GEN.y[0])} y={WZ(z + 0.4)} width="0.3" height="0.4" fill="var(--color-paper)" stroke={INK} strokeWidth="0.025" />
      ))}

      {/* ống: nhánh WC T2 trong lớp hạ cốt → D110 đứng → ngang dưới nền dọc hành lang → hố ga; WC T1 xả ngắn từ bồn cầu y 19.97 về hố ga */}
      <g fill="none">
        <line x1={WX(8.72)} y1={WZ(4.0)} x2={gx} y2={WZ(3.95)} stroke={SOFT} strokeWidth="0.07" />
        <line x1={gx} y1={WZ(7.0)} x2={gx} y2={WZ(-0.35)} stroke={SOFT} strokeWidth="0.07" />
        <line x1={gx} y1={WZ(-0.35)} x2={WX(18.6)} y2={WZ(-0.52)} stroke={SOFT} strokeWidth="0.07" />
        <path d={`M${WX(19.97)} ${WZ(0.45)} L${WX(19.97)} ${WZ(-0.3)} L${WX(19.4)} ${WZ(-0.42)}`} stroke={MUTED} strokeWidth="0.05" strokeDasharray="0.12 0.08" />
        <line x1={gx} y1={WZ(7.05)} x2={gx} y2={WZ(11.05)} stroke={SAGE} strokeWidth="0.04" strokeDasharray="0.14 0.08" markerEnd="url(#flow-s)" />
      </g>
      <rect x={WX(18.6)} y={WZ(0)} width="0.8" height="1.0" fill="var(--color-paper)" stroke={INK} strokeWidth="0.035" />

      <Leader x={gx} y={WZ(2.3)} tx={3.5} ty={WZ(2.1)} label="D110 ống đứng trong hộp gen 300 × 300" s={0.17} />
      <Leader x={gx} y={WZ(1.2)} tx={3.5} ty={WZ(1.45)} label="cửa thăm 300 × 400 mỗi tầng · ốp góc tường phải bếp" s={0.17} />
      <Leader x={WX(9.5)} y={WZ(3.98)} tx={3.5} ty={WZ(4.6)} label="D90 sàn · D60 lavabo · nhánh trong lớp hạ cốt, dốc 2%" s={0.17} />
      <Leader x={gx} y={WZ(9.6)} tx={3.5} ty={WZ(11.45)} label="D60 thông hơi âm tường phải sảnh tum, quá mái +700" s={0.17} />
      <Leader x={WX(13)} y={WZ(-0.43)} tx={1.0} ty={WZ(-0.85)} label="D110 dưới nền T1 dọc hành lang, dốc 2% →" s={0.17} anchor="start" />
      <T x={WX(19.0)} y={WZ(-1.18)} s={0.16} fill={SOFT}>
        hố ga · bể tự hoại sân sau
      </T>
      <Leader x={WX(19.7)} y={WZ(-0.37)} tx={WX(20.9)} ty={WZ(-0.85)} label="WC T1 xả thẳng vào hố ga" s={0.14} />

      <DimV x={-0.8} y1={WZ(0.45)} y2={WZ(4.05)} label="3.60" s={0.2} />
      <DimV x={-0.8} y1={WZ(4.05)} y2={WZ(7.35)} label="3.30" s={0.2} />
      <DimV x={-0.8} y1={WZ(7.35)} y2={WZ(10.35)} label="3.00" s={0.2} />
      <DimH x1={WX(GEN.y[0])} x2={WX(GEN.y[1])} y={WZ(7.75)} label="300" s={0.13} />

      <T x={WX(9.22)} y={WZ(6.5)} s={0.22}>
        WC chung T2
      </T>
      <T x={WX(9.22)} y={WZ(6.2)} s={0.12} fill={MUTED}>
        {`x ${wc2.x.toFixed(2)}–${(wc2.x + wc2.w).toFixed(2)} · y ${wc2.y.toFixed(2)}–${(wc2.y + wc2.h).toFixed(2)}`}
      </T>
      <T x={WX(9.22)} y={WZ(5.9)} s={0.12} fill={SAGE}>
        hạ cốt 50 · chống thấm 2 lớp
      </T>
      <T x={WX(16.4)} y={WZ(5.6)} s={0.24} fill={MUTED}>
        Phòng ngủ 04
      </T>
      <T x={WX(12.6)} y={WZ(6.6)} s={0.2} fill={MUTED}>
        sảnh đầu thang · lối đi
      </T>
      <T x={WX(8.75)} y={WZ(8.9)} s={0.24} fill={MUTED}>
        Phòng thờ
      </T>
      <T x={WX(11.9)} y={WZ(8.9)} s={0.24} fill={MUTED}>
        Sảnh tum
      </T>
      <T x={WX(15.9)} y={WZ(7.8)} s={0.22} fill={MUTED}>
        Sân phơi
      </T>
      <T x={WX(8.7)} y={WZ(3.0)} s={0.24} fill={MUTED}>
        Bếp + ăn
      </T>
      <T x={WX(14.2)} y={WZ(3.0)} s={0.22} fill={MUTED}>
        Hành lang T1
      </T>
      <T x={WX(15.7)} y={WZ(1.6)} s={0.22} fill={MUTED}>
        Phòng ngủ 01 (sau mặt cắt)
      </T>
      <T x={WX(20.9)} y={WZ(4.45)} s={0.22}>
        WC T1
      </T>
      <T x={WX(20.9)} y={WZ(4.15)} s={0.14} fill={MUTED}>
        dải sát tường trái · sau mặt cắt
      </T>
      <T x={WX(20.9)} y={WZ(3.88)} s={0.14} fill={MUTED}>
        {`x 0–${(wc1.x + wc1.w).toFixed(2)} · y ${wc1.y.toFixed(1)}–${(wc1.y + wc1.h).toFixed(1)} · mái +3.23`}
      </T>
      <T x={WX(18.7)} y={WZ(3.4)} s={0.13} fill={SOFT}>
        mái kính lối đi
      </T>
      <T x={WX(20.9)} y={WZ(1.6)} s={0.2} fill={MUTED}>
        Sân sau
      </T>
      <T x={-1.35} y={13.25} s={0.26} fill={SAGE} anchor="start" wide>
        CT-05 · HAI WC + HỘP GEN
      </T>
      <T x={-1.35} y={13.62} s={0.16} fill={MUTED} anchor="start">
        cắt dọc x 4.65 qua hộp gen tường phải và lối mái kính · WC T1 là dải riêng sát tường trái sân sau (sau mặt cắt), xả thẳng vào hố ga
      </T>
    </svg>
  );
}
