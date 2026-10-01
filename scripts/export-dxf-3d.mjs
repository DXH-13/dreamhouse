// Xuất mô hình 3D (DXF R12, 3DFACE, đơn vị mm) từ src/lib/house-data.ts.
// Chạy: node scripts/export-dxf-3d.mjs  →  cad/dreamhouse-3d.dxf
// Trục: X ngang lô (0–5 000), Y sâu từ vỉa hè (0) vào trong, Z cao độ (±0.00 = vỉa hè).
import { mkdirSync, writeFileSync } from "node:fs";
import { HOUSE, LEVELS } from "../src/lib/house-data.ts";

const M = 1000;
const LAYERS = { SITE: 30, SLAB: 8, WALL: 7, GLASS: 5, TEAK: 32, STAIR: 42, GATE: 250 };
const out = [];
const face = (layer, ...p) =>
  out.push(["0", "3DFACE", "8", layer, ...p.flatMap(([x, y, z], i) => [10 + i, x, 20 + i, y, 30 + i, z])].join("\n"));
// hộp chữ nhật [x0,x1] × [y0,y1] × [z0,z1]
function box(layer, x0, x1, y0, y1, z0, z1) {
  const P = (x, y, z) => [x, y, z];
  face(layer, P(x0, y0, z0), P(x1, y0, z0), P(x1, y1, z0), P(x0, y1, z0));
  face(layer, P(x0, y0, z1), P(x1, y0, z1), P(x1, y1, z1), P(x0, y1, z1));
  face(layer, P(x0, y0, z0), P(x1, y0, z0), P(x1, y0, z1), P(x0, y0, z1));
  face(layer, P(x0, y1, z0), P(x1, y1, z0), P(x1, y1, z1), P(x0, y1, z1));
  face(layer, P(x0, y0, z0), P(x0, y1, z0), P(x0, y1, z1), P(x0, y0, z1));
  face(layer, P(x1, y0, z0), P(x1, y1, z0), P(x1, y1, z1), P(x1, y0, z1));
}

const z = Object.fromEntries(LEVELS.map((l) => [l.key, l.z * M]));
const W = HOUSE.width * M, t = ((HOUSE.width - HOUSE.netW) / 2) * M, S = 200; // tường, sàn 200
const Y = (m) => (HOUSE.yardFront + m) * M; // toạ độ trong nhà (m) → Y lô (mm)
const front = Y(0), rear = Y(HOUSE.houseD);
const voidX = [1200, 2750], voidY = [Y(9.9), Y(12.8)];
const tumY = [Y(4.5), Y(13.2)];

// sàn có lỗ giếng trời: 4 tấm quanh ô
function slabWithVoid(y0, y1, zt) {
  box("SLAB", 0, W, y0, voidY[0], zt - S, zt);
  box("SLAB", 0, W, voidY[1], y1, zt - S, zt);
  box("SLAB", 0, voidX[0], voidY[0], voidY[1], zt - S, zt);
  box("SLAB", voidX[1], W, voidY[0], voidY[1], zt - S, zt);
}

// ── Lô đất, cổng ──────────────────────────────────────────────────────────
face("SITE", [0, 0, 0], [W, 0, 0], [W, HOUSE.lotD * M, 0], [0, HOUSE.lotD * M, 0]);
for (let zz = 100; zz < 1800; zz += 150) box("GATE", 400, 4000, 200, 260, zz, zz + 60); // cổng nan ngang
box("GATE", 340, 400, 200, 260, 0, 1800);
box("GATE", 4000, 4060, 200, 260, 0, 1800);

// ── Khối nhà T1–T2 ───────────────────────────────────────────────────────
box("SLAB", 0, W, front, rear, 0, z.t1); // nền + bệ granite
slabWithVoid(front, rear, z.t2);
slabWithVoid(front, rear, z.tum);
box("WALL", 0, t, front, rear, z.t1, z.tum - S); // tường biên trái
box("WALL", W - t, W, front, rear, z.t1, z.tum - S); // tường biên phải

// mặt tiền T1: kính 4.20 × 2.70 lùi 0.60, trụ hai bên, dầm trên
const g1 = front + 600;
box("WALL", t, 400, front, g1 + 100, z.t1, z.t2 - S);
box("WALL", 4600, W - t, front, g1 + 100, z.t1, z.t2 - S);
box("GLASS", 400, 4600, g1, g1 + 20, z.t1, z.t1 + 2700);
box("WALL", 400, 4600, g1, g1 + 100, z.t1 + 2700, z.t2 - S);
box("WALL", t, W - t, front, front + 200, z.t2 - S - 400, z.t2 - S); // mép sàn nhô 0.60

// mặt tiền T2: loggia 1.10, lan can kính, 41 lam teak, vách kính phòng master
box("GLASS", t, W - t, front, front + 20, z.t2, z.t2 + 1100);
const fins = 41, step = (W - 2 * t - 40) / (fins - 1);
for (let k = 0; k < fins; k++) box("TEAK", t + k * step, t + k * step + 40, front, front + 80, z.t2, z.tum - S);
box("GLASS", t, W - t, Y(1.1), Y(1.1) + 20, z.t2, z.tum - S);

// mặt sau: tường có hai cửa sổ 3.20 m (T1, T2)
const rw = [rear - 200, rear];
const win = [[z.t1 + 900, z.t1 + 2700], [z.t2 + 600, z.t2 + 2400]];
box("WALL", t, W - t, ...rw, z.t1, win[0][0]);
box("WALL", t, W - t, ...rw, win[0][1], win[1][0]);
box("WALL", t, W - t, ...rw, win[1][1], z.tum - S);
for (const [a, b] of win) {
  box("WALL", t, 900, ...rw, a, b);
  box("WALL", 4100, W - t, ...rw, a, b);
  box("GLASS", 900, 4100, rear - 110, rear - 90, a, b);
}

// ── Tầng tum ─────────────────────────────────────────────────────────────
box("WALL", 0, t, ...tumY, z.tum, z.mai - S);
box("WALL", W - t, W, ...tumY, z.tum, z.mai - S);
box("GLASS", t, W - t, tumY[0], tumY[0] + 20, z.tum, z.mai - S - 300); // kính phòng thờ
box("WALL", t, W - t, tumY[0], tumY[0] + 200, z.mai - S - 300, z.mai - S);
box("SLAB", 0, W, tumY[0], voidY[0], z.mai - S, z.mai);
box("SLAB", 0, W, voidY[1], tumY[1], z.mai - S, z.mai);
box("SLAB", 0, voidX[0], ...voidY, z.mai - S, z.mai);
box("SLAB", voidX[1], W, ...voidY, z.mai - S, z.mai);
box("WALL", voidX[0] - 100, voidX[1] + 100, voidY[0] - 100, voidY[1] + 100, z.mai, z.mai + 300); // gờ giếng
box("GLASS", voidX[0] - 100, voidX[1] + 100, voidY[0] - 100, voidY[1] + 100, z.mai + 450, z.mai + 470); // mái kính
// lan can mái đến +11.20
box("WALL", 0, W, tumY[0], tumY[0] + 100, z.mai, z.dinh);
box("WALL", 0, W, tumY[1] - 100, tumY[1], z.mai, z.dinh);
box("WALL", 0, 100, ...tumY, z.mai, z.dinh);
box("WALL", W - 100, W, ...tumY, z.mai, z.dinh);
// sân thượng trước (lan can kính) và sân phơi sau (tường chắn 1.10)
box("GLASS", 0, W, front, front + 20, z.tum, z.tum + 1100);
box("WALL", 0, t, front, tumY[0], z.tum, z.tum + 1100);
box("WALL", W - t, W, front, tumY[0], z.tum, z.tum + 1100);
box("WALL", 0, W, rear - 200, rear, z.tum, z.tum + 1100);
box("WALL", 0, t, tumY[1], rear, z.tum, z.tum + 1100);
box("WALL", W - t, W, tumY[1], rear, z.tum, z.tum + 1100);

// ── Tường ngăn phòng ─────────────────────────────────────────────────────
// [trục, toạ độ tim (m), từ, đến (m), lỗ [[từ, đến, "door"|"glass"]], dày mm]
// "h" = tường chạy theo X tại Y = c; "v" = tường chạy theo Y tại X = c. Cửa đi cao 2 200.
function partition(axis, c, a0, a1, z0, z1, gaps = [], th = 100) {
  const piece = (layer, a, b, za, zb) =>
    axis === "h"
      ? box(layer, a * M, b * M, Y(c) - th / 2, Y(c) + th / 2, za, zb)
      : box(layer, c * M - th / 2, c * M + th / 2, Y(a), Y(b), za, zb);
  let at = a0;
  for (const [s, e, kind] of [...gaps].sort((p, q) => p[0] - q[0])) {
    if (s > at) piece("WALL", at, s, z0, z1);
    if (kind === "door") piece("WALL", s, e, z0 + 2200, z1);
    else piece("GLASS", s, e, z0, z1);
    at = e;
  }
  if (a1 > at) piece("WALL", at, a1, z0, z1);
}
const IN = [t / M, (W - t) / M]; // mép trong tường biên (m)
const VX = voidX.map((v) => v / M), VY = [9.9, 12.8];
// quây giếng trời: T1 kính suốt tầng, T2 + tum lan can kính 1 100
function voidRing(z0, h) {
  for (const y of VY) box("GLASS", voidX[0], voidX[1], Y(y) - 10, Y(y) + 10, z0, z0 + h);
  for (const x of voidX) box("GLASS", x - 10, x + 10, voidY[0], voidY[1], z0, z0 + h);
}
{
  // Tầng 1: khách + bếp mở thông; WC hai cửa; phòng ngủ 01 cuối nhà
  const [z0, z1] = [z.t1, z.t2 - S];
  voidRing(z0, z1 - z0);
  partition("v", 3.15, 10.3, 12.8, z0, z1, [[10.9, 11.6, "door"]]);
  partition("h", 10.3, 3.15, IN[1], z0, z1);
  partition("h", 12.8, 3.15, IN[1], z0, z1, [[4.0, 4.7, "door"]]);
  partition("h", 13.2, ...IN, z0, z1, [[2.2, 3.0, "door"]]);
}
{
  // Tầng 2: master — PN 03 — lõi (WC rộng) — PN 04
  const [z0, z1] = [z.t2, z.tum - S];
  voidRing(z0, 1100);
  partition("h", 5.4, ...IN, z0, z1, [[3.9, 4.7, "door"]]);
  partition("h", 9.6, ...IN, z0, z1, [[VX[0], 2.6, "glass"], [3.9, 4.7, "door"]]);
  partition("v", 2.85, 10.05, 12.9, z0, z1, [[10.9, 11.6, "door"]]);
  partition("h", 10.05, 2.85, IN[1], z0, z1);
  partition("h", 12.9, 2.85, IN[1], z0, z1);
  partition("h", 13.2, ...IN, z0, z1, [[3.9, 4.7, "door"]]);
}
{
  // Tum: phòng thờ — lõi kỹ thuật — tường hậu ra sân phơi
  const [z0, z1] = [z.tum, z.mai - S];
  voidRing(z0, 1100);
  partition("h", 9.2, ...IN, z0, z1, [[3.9, 4.7, "door"]]);
  partition("h", 13.1, ...IN, z0, z1, [[3.9, 4.8, "door"]], 200);
}

// ── Cầu thang 2 vế mỗi tầng (lõi Y 9.6–13.2, X 0.2–1.2) ───────────────────
for (const [z0, z1] of [[z.t1, z.t2], [z.t2, z.tum]]) {
  const n = 11, R = (z1 - z0) / (2 * n), T = 260, y0 = Y(9.6), land = y0 + n * T;
  for (let k = 0; k < n; k++) {
    box("STAIR", t, 700, y0 + k * T, y0 + (k + 1) * T, z0, z0 + (k + 1) * R); // vế 1 đi vào trong
    box("STAIR", 700, 1200, land - (k + 1) * T, land - k * T, z0, z0 + (n + k + 1) * R); // vế 2 quay ra
  }
  box("STAIR", t, 1200, land, Y(13.2), z0 + n * R - 150, z0 + n * R); // chiếu nghỉ
}

// ── Ghi file ──────────────────────────────────────────────────────────────
const layerTable = Object.entries(LAYERS)
  .map(([n, c]) => `0\nLAYER\n2\n${n}\n70\n0\n62\n${c}\n6\nCONTINUOUS`)
  .join("\n");
const dxf = [
  "0\nSECTION\n2\nHEADER\n9\n$ACADVER\n1\nAC1009\n9\n$INSUNITS\n70\n4\n0\nENDSEC",
  `0\nSECTION\n2\nTABLES\n0\nTABLE\n2\nLAYER\n70\n${Object.keys(LAYERS).length}\n${layerTable}\n0\nENDTAB\n0\nENDSEC`,
  "0\nSECTION\n2\nENTITIES",
  ...out,
  "0\nENDSEC\n0\nEOF\n",
].join("\n");
mkdirSync("cad", { recursive: true });
writeFileSync("cad/dreamhouse-3d.dxf", dxf);
console.log(`cad/dreamhouse-3d.dxf — ${out.length} faces`);
