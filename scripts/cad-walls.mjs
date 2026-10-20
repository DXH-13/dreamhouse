// Tường ngăn + đồ đạc nằm trong src/lib/house-data.ts (dùng chung với web và video). File này chỉ giữ phần riêng của CAD.
export { FURN, WALLS, RAILS, CORE } from "../src/lib/house-data.ts";
import { CORE, flightTop, stairSoffit } from "../src/lib/house-data.ts";

// Tách một tường thành các đoạn: fn(kind, từ, đến) với kind = "solid" | "door" | "glass" | "block" (vách gạch kính — vẽ như kính).
export function pieces([, , a0, a1, gaps = []], fn) {
  let at = a0;
  for (const [s, e, kind] of [...gaps].sort((p, q) => p[0] - q[0])) {
    if (s > at) fn("solid", at, s);
    fn(kind, s, e);
    at = e;
  }
  if (a1 > at) fn("solid", at, a1);
}

// ── Màu sàn theo công năng (ACI) ─────────────────────────────────────────
export const ROOM_FILL = { living: 51, kitchen: 31, bed: 151, wc: 131, stair: 41, void: 141, worship: 21, outdoor: 91, service: 9, hall: 254, parking: 9 };

// ── Tủ gầm thang T1: đỉnh cắt theo mặt dưới bản thang (stairSoffit, m trên nền T1) ─────────
// underStair(x, w, y) — hộp FURN.t1 nằm trong dải thang; profile(y, d, lo, hi) → [[y, z]] từ y tới y+d, z = clamp(soffit, lo, hi)
export const underStair = (x, w, y) => x < CORE.x[1] && x + w > CORE.x[0] && y >= CORE.flights.t1.y;
export const profile = (y, d, lo, hi, n = 12) =>
  Array.from({ length: n + 1 }, (_, i) => y + (d * i) / n).map((yy) => [yy, Math.max(lo, Math.min(hi, stairSoffit(yy)))]);
// tủ thấp hơn gầm thang (tủ thấp 0.80) có tủ kính khung đen phía trên tới sát gầm
export const hasDisplay = (y, d, h) => y + d <= flightTop("t1") && stairSoffit(y + d) > h + 0.05;
