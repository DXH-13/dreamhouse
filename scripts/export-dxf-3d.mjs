// Xuất mô hình 3D (DXF R12, 3DFACE, đơn vị mm) từ src/lib/house-data.ts.
// Chạy: node scripts/export-dxf-3d.mjs  →  cad/dreamhouse-3d.dxf
// Trục: X ngang lô (0–5 000), Y sâu từ vỉa hè (0) vào trong, Z cao độ (±0.00 = vỉa hè).
import { mkdirSync, writeFileSync } from "node:fs";
import { FLOORS, HOUSE, LEVELS } from "../src/lib/house-data.ts";
import { CORE, FURN, hasDisplay, pieces, profile, RAILS, ROOM_FILL, underStair, WALLS } from "./cad-walls.mjs";

const M = 1000;
const LAYERS = { SITE: 92, STONE: 8, SLAB: 252, WALL: 7, GLASS: 151, TEAK: 32, STAIR: 42, GATE: 250, METAL: 250, BEIGE: 43, FLOOR: 9, FURN: 42, DOOR: 34, FRAME: 250 };
const out = [];
let tint = 0; // màu ACI riêng cho mặt kế tiếp (0 = theo layer)
const tinted = (color, draw) => ((tint = color), draw(), (tint = 0));
const face = (layer, ...p) =>
  out.push(["0", "3DFACE", "8", layer, ...(tint ? ["62", tint] : []), ...p.flatMap(([x, y, z], i) => [10 + i, x, 20 + i, y, 30 + i, z])].join("\n"));
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
// lăng trụ theo X: biên dạng [[y, z]] (lồi, mm) quét từ x0 tới x1 — tủ gầm thang cắt đỉnh theo dốc thang
function prismX(layer, x0, x1, pts) {
  for (const x of [x0, x1]) for (let i = 1; i + 1 < pts.length; i++) face(layer, [x, ...pts[0]], [x, ...pts[i]], [x, ...pts[i + 1]], [x, ...pts[i + 1]]);
  pts.forEach((p, i) => {
    const q = pts[(i + 1) % pts.length];
    face(layer, [x0, ...p], [x0, ...q], [x1, ...q], [x1, ...p]);
  });
}

const z = Object.fromEntries(LEVELS.map((l) => [l.key, l.z * M]));
const W = HOUSE.width * M, t = ((HOUSE.width - HOUSE.netW) / 2) * M, S = 200; // tường, sàn 200
const Y = (m) => (HOUSE.yardFront + m) * M; // toạ độ trong nhà (m) → Y lô (mm)
const front = Y(0), rear = Y(HOUSE.houseD);
const tumY = [Y(4.5), Y(13.8)]; // khối tum: phòng trà + thang + phòng thờ
// thang chữ U ba cạnh sát tường trái: lỗ sàn T2 trên cạnh 2 + chiếu nghỉ sau, lỗ thứ hai trên cạnh 3 (TAIL); lỗ tum trên vế T2,
// mái kính trùm lỗ tum. lỗ = [x0, x1, y0, y1]
const holeOf = (id) => [CORE.x[0] * M, CORE.x[1] * M, Y(CORE.holes[id][0]), Y(CORE.holes[id][1])];
const H2 = holeOf("t2"), WELL = holeOf("tum");
const TAIL = [CORE.tailHole.x[0] * M, CORE.tailHole.x[1] * M, Y(CORE.tailHole.y[0]), Y(CORE.tailHole.y[1])];
const [sp0, sp1] = CORE.spine.map((v) => v * M);

// sàn có lỗ: chia dải theo Y tại mép lỗ, mỗi dải đặt tấm vào khoảng X không bị lỗ chiếm. lỗ = [x0, x1, y0, y1]
function slab(y0, y1, zt, holes) {
  const ys = [...new Set([y0, y1, ...holes.flatMap((h) => [h[2], h[3]])])].filter((v) => v >= y0 && v <= y1).sort((a, b) => a - b);
  for (let i = 0; i + 1 < ys.length; i++) {
    const [a, b] = [ys[i], ys[i + 1]];
    let x = 0;
    for (const [h0, h1] of holes.filter((h) => h[2] < b && h[3] > a).sort((p, q) => p[0] - q[0])) {
      if (h0 > x) box("SLAB", x, h0, a, b, zt - S, zt);
      x = Math.max(x, h1);
    }
    if (x < W) box("SLAB", x, W, a, b, zt - S, zt);
  }
}

// ── Lô đất, cổng ──────────────────────────────────────────────────────────
face("SITE", [0, 0, 0], [W, 0, 0], [W, HOUSE.lotD * M, 0], [0, HOUSE.lotD * M, 0]);
// cổng 2 cánh trong khung cổng trắng: mỗi cánh nan sắt đen phía bản lề + tấm gỗ nan phía trong
box("WALL", -200, W + 200, -250, 250, 2200, 2500);
box("WALL", -200, 100, -250, 250, 0, 2200);
box("WALL", W - 100, W + 200, -250, 250, 0, 2200);
box("GATE", 0, 160, -80, 120, 0, 2100);
box("GATE", W - 160, W, -80, 120, 0, 2100);
for (const [hinge, dir] of [[160, 1], [W - 160, -1]]) {
  const X = (a, b) => [hinge + dir * a, hinge + dir * b].sort((p, q) => p - q);
  for (const zz of [90, 1990]) box("GATE", ...X(0, 2340), 0, 60, zz, zz + 60);
  for (let i = 0; i < 8; i++) box("GATE", ...X(35 + i * 100, 65 + i * 100), 0, 40, 120, 2020);
  box("TEAK", ...X(840, 2320), 0, 50, 150, 1990);
}

// ── Khối nhà T1–T2 ───────────────────────────────────────────────────────
box("STONE", 0, W, front, rear, 0, z.t1); // nền + bệ granite
slab(front, rear, z.t2, [H2, TAIL]);
slab(front, rear, z.tum, [WELL]);
box("WALL", 0, t, front, rear, z.t1, z.tum - S); // tường biên trái
box("WALL", W - t, W, front, rear, z.t1, z.tum - S); // tường biên phải

// mặt tiền T1: kính 4.20 × 2.70 lùi 0.60, trụ hai bên, dầm trên
const g1 = front + 600;
box("WALL", t, 400, front, g1 + 100, z.t1, z.t2 - S);
box("WALL", 4600, W - t, front, g1 + 100, z.t1, z.t2 - S);
box("GLASS", 400, 4600, g1, g1 + 20, z.t1, z.t1 + 2700);
box("BEIGE", 400, 4600, g1 - 100, g1 + 100, z.t1 + 2700, z.t2 - S); // dải đá be trên kính
box("TEAK", t, W - t, front - 600, front + 500, z.t2 - 470, z.t2 - 450); // trần gỗ hiên T1

// mặt tiền T2: khung bê tông trắng nhô 0.60 m ôm loggia (hộp; bo cong R 750 bỏ qua), lan can nan đen, bồn cây be, vách kính master
const fz = [z.t2 - 450, z.tum], fh = [z.t2 - 50, z.tum - 450], fy = [front - 600, front];
box("WALL", 0, W, ...fy, fz[0], fh[0]);
box("WALL", 0, W, ...fy, fh[1], fz[1]);
box("WALL", 0, 450, ...fy, fh[0], fh[1]);
box("WALL", W - 450, W, ...fy, fh[0], fh[1]);
box("TEAK", 450, W - 450, front - 600, Y(1.0), fh[1] - 20, fh[1]); // trần gỗ loggia
box("TEAK", 450, W - 450, front - 600, front, z.t2 - 50, z.t2); // sàn gỗ phần nhô
for (let x = 500; x < W - 450; x += 100) box("METAL", x, x + 20, front - 320, front - 300, z.t2, z.t2 + 1050);
box("METAL", 450, W - 450, front - 340, front - 280, z.t2 + 1050, z.t2 + 1090);
box("BEIGE", 3700, 4950, front - 1000, front - 350, z.t2 + 350, z.t2 + 1050); // bồn cây
box("GLASS", t, W - t, Y(1.1) - 20, Y(1.1) + 20, z.t2, z.tum - S - 300);
box("WALL", t, W - t, Y(1.0), Y(1.2), z.tum - S - 300, z.tum - S);

// mặt sau: T1 kín (phòng ông bà không mở ra sân sau) + cửa ra sân sau cuối lối đi (x 3.85–4.75, cao 2 200); T2 cửa sổ 3.20 m
const rw = [rear - 200, rear], dr = [sp0 + 50, sp1 - 50], t1top = z.t1 + 2700;
const win = [[z.t2 + 600, z.t2 + 2400, 4100]];
box("WALL", t, dr[0], ...rw, z.t1, t1top);
box("WALL", dr[1], W - t, ...rw, z.t1, t1top);
box("WALL", dr[0], dr[1], ...rw, z.t1 + 2200, t1top);
box("WALL", t, W - t, ...rw, t1top, win[0][0]);
box("WALL", t, W - t, ...rw, win[0][1], z.tum - S);
for (const [a, b, x1] of win) {
  box("WALL", t, 900, ...rw, a, b);
  box("WALL", x1, W - t, ...rw, a, b);
  box("GLASS", 900, x1, rear - 110, rear - 90, a, b);
}
box("STONE", ...dr, rear, rear + 600, 0, z.t1 - 150); // bậc xuống sân sau

// ── Sân sau: dải WC một tầng ép sát tường trái, liền sau tường hậu phòng ngủ 01 (tường từ WALLS.t1), bệ nền +0.45, mái bằng tới +3.23,
//    mái kính x 1.6–4.8 · y 18–19.4 che lối từ cửa sau sang cửa WC (khớp house-scene.ts) ──
box("STONE", 0, 1600, Y(18.0), Y(21.8), 0, z.t1); // bệ nền
box("SLAB", -50, 1680, Y(18.0), Y(21.85), z.t1 + 2600, z.t1 + 2780); // mái bằng
box("STONE", 1600, 2000, Y(18.4), Y(19.1), 0, 300), box("STONE", 2000, 2400, Y(18.4), Y(19.1), 0, 150); // bậc lên cửa WC
box("STONE", 2500, 3600, Y(18.5), Y(19.0), 40, 70); // đá bước
box("GLASS", 1600, 4800, Y(18.0), Y(19.4), z.t1 + 2500, z.t1 + 2520); // mái kính lối đi
box("METAL", 1600, 4800, Y(19.34), Y(19.4), z.t1 + 2440, z.t1 + 2540); // dầm biên
box("METAL", 4740, 4800, Y(19.34), Y(19.4), 40, z.t1 + 2440); // cột đỡ
box("WALL", -200, W + 200, Y(21.8), Y(22), 0, 2400); // tường rào cuối lô
box("WALL", -200, 0, rear, Y(21.8), 0, 2400), box("WALL", W, W + 200, rear, Y(21.8), 0, 2400);

// ── Tầng tum ─────────────────────────────────────────────────────────────
box("WALL", 0, t, ...tumY, z.tum, z.mai - S);
box("WALL", W - t, W, ...tumY, z.tum, z.mai - S);
box("GLASS", t, 1900, tumY[0] - 20, tumY[0] + 20, z.tum, z.mai - S - 300); // kính tum ra sân thượng, cửa đi x 1.9–3.1
box("GLASS", 3100, W - t, tumY[0] - 20, tumY[0] + 20, z.tum, z.mai - S - 300);
box("WALL", t, W - t, tumY[0], tumY[0] + 200, z.mai - S - 300, z.mai - S);
slab(tumY[0], tumY[1], z.mai, [WELL]); // mái tum chừa lỗ đúng bằng lỗ sàn tum
// gờ BTCT 450 quanh lỗ (phía trái là tường biên), khe gió 150, kính dán 8+8 phủ trùm gờ
box("WALL", WELL[1], WELL[1] + 100, WELL[2] - 100, WELL[3] + 100, z.mai, z.mai + 450);
box("WALL", WELL[0], WELL[1], WELL[2] - 100, WELL[2], z.mai, z.mai + 450);
box("WALL", WELL[0], WELL[1], WELL[3], WELL[3] + 100, z.mai, z.mai + 450);
box("GLASS", WELL[0], WELL[1] + 120, WELL[2] - 120, WELL[3] + 120, z.mai + 600, z.mai + 616);
// lan can mái đến +11.20
box("WALL", 0, W, tumY[0], tumY[0] + 100, z.mai, z.dinh);
box("WALL", 0, W, tumY[1] - 100, tumY[1], z.mai, z.dinh);
box("WALL", 0, 100, ...tumY, z.mai, z.dinh);
box("WALL", W - 100, W, ...tumY, z.mai, z.dinh);
// sân thượng trước: lan can tường trắng 0.45 + nan đen tới 1.10, bồn cây trái, giàn pergola lam đen tựa trụ be cao bên phải
box("WALL", t, W - t, front - 100, front + 100, z.tum, z.tum + 450);
for (let x = 300; x < W - 250; x += 100) box("METAL", x, x + 20, front - 10, front + 10, z.tum + 450, z.tum + 1080);
box("METAL", t, W - t, front - 30, front + 30, z.tum + 1060, z.tum + 1100);
box("BEIGE", 300, 1700, front + 150, front + 850, z.tum, z.tum + 800);
box("BEIGE", W - t, W + 50, front - 200, tumY[0], z.tum + 1100, z.mai + 700); // trụ be
box("METAL", t, 300, front - 100, front, z.tum + 1100, z.mai + 300);
for (const y of [front - 150, Y(4.35)]) box("METAL", t, W - t, y, y + 120, z.mai + 180, z.mai + 300);
for (let x = 300; x < W - t; x += 220) box("METAL", x, x + 50, front - 300, tumY[0], z.mai + 300, z.mai + 420);
// sân phơi sau (tường chắn 1.10)
box("WALL", 0, t, front, tumY[0], z.tum, z.tum + 1100);
box("WALL", W - t, W, front, tumY[0], z.tum, z.tum + 1100);
box("WALL", 0, W, rear - 200, rear, z.tum, z.tum + 1100);
box("WALL", 0, t, tumY[1], rear, z.tum, z.tum + 1100);
box("WALL", W - t, W, tumY[1], rear, z.tum, z.tum + 1100);

// ── Tường ngăn phòng (số liệu chung với bản vẽ 2D) · cửa đi cao 2 200 ─────
function partition(spec, z0, zc) {
  const [axis, c, , , , th = 100, h] = spec;
  const z1 = h ? Math.min(zc, z0 + h * M) : zc; // tường thấp nếu WALLS ghi chiều cao riêng
  const piece = (layer, a, b, za, zb) =>
    axis === "h"
      ? box(layer, a * M, b * M, Y(c) - th / 2, Y(c) + th / 2, za, zb)
      : box(layer, c * M - th / 2, c * M + th / 2, Y(a), Y(b), za, zb);
  pieces(spec, (kind, a, b) => {
    if (kind === "solid") piece("WALL", a, b, z0, z1);
    else if (kind === "door") z1 > z0 + 2200 && piece("WALL", a, b, z0 + 2200, z1);
    else piece("GLASS", a, b, z0, z1);
  });
}
// vách kính giếng nằm trong WALLS; lỗ sàn T2/tum quây lan can kính 1 100 (RAILS)
for (const [id, z0, z1] of [["t1", z.t1, z.t2 - S], ["t2", z.t2, z.tum - S], ["tum", z.tum, z.mai - S]]) {
  for (const spec of WALLS[id]) partition(spec, z0, z1);
  for (const [x0, y0, x1, y1] of RAILS[id]) box("GLASS", x0 * M - 10, x1 * M + 10, Y(y0) - 10, Y(y1) + 10, z0, z0 + 1100);
}

// ── Thang (CORE): T1 chữ U ba cạnh — cạnh 1: 3 bậc đá đặc x 1.98 → 1.20 (y 4.00–5.00) lên khối chiếu nghỉ trước đặc;
//    cạnh 2: bậc treo y 5.00 → 8.90 sát tường trái; bản chiếu nghỉ sau 200 (y 8.90–9.90); cạnh 3: 3 bậc treo x 1.20 → 1.98 lên sàn T2.
//    Vế T2 → tum thẳng y 6.00 → 10.94 chồng đúng phía trên cạnh 2. Bậc treo = khối răng cưa của bản thang (gầm T1 để trống cho dãy tủ) ──
for (const [id, z0, z1] of [["t1", z.t1, z.t2], ["t2", z.t2, z.tum]]) {
  const { y, risers, lead, tail } = CORE.flights[id], R = (z1 - z0) / (lead + risers + tail), T = CORE.tread * M, [x0, x1] = CORE.x.map((v) => v * M);
  const zl = z0 + lead * R, zt = zl + risers * R, float = (zz) => Math.max(z0, zz - R - 120);
  if (lead) {
    const [la, lb] = CORE.landing.y.map(Y);
    box("STONE", x0, x1, la, lb, z0, zl); // chiếu nghỉ trước đặc
    for (let k = 1; k < lead; k++) box("STONE", x1 + (lead - 1 - k) * T, x1 + (lead - k) * T, la, lb, z0, z0 + k * R); // cạnh 1, bậc k
  }
  // cạnh 2: mặt bậc i (1…n−1) cao zl + i·R; cổ thứ n lên chiếu nghỉ sau (T1) hoặc sàn trên (T2)
  for (let i = 1; i < risers; i++) box("STAIR", x0, x1, Y(y) + (i - 1) * T, Y(y) + i * T, float(zl + i * R), zl + i * R);
  if (tail) {
    const [ta, tb] = CORE.landing.top.map(Y);
    box("STAIR", x0, x1, ta, tb, zt - 200, zt); // bản chiếu nghỉ sau 200
    for (let k = 1; k < tail; k++) box("STAIR", x1 + (k - 1) * T, x1 + k * T, ta, tb, float(zt + k * R), zt + k * R); // cạnh 3, bậc k
  }
}

// ── Sàn hoàn thiện tô màu theo phòng, đồ đạc, cánh cửa ───────────────────
// trụ 8 cạnh (ghế, bồn cầu, chậu cây, bếp nấu)
function cyl(layer, cx, cy, r, z0, z1) {
  const P = (k, zz) => [cx + r * Math.cos((k * Math.PI) / 4), cy + r * Math.sin((k * Math.PI) / 4), zz];
  for (let k = 0; k < 8; k++) {
    face(layer, P(k, z0), P(k + 1, z0), P(k + 1, z1), P(k, z1));
    face(layer, [cx, cy, z1], P(k, z1), P(k + 1, z1), P(k + 1, z1));
  }
}
const FLOOR_Z = { t1: z.t1, t2: z.t2, tum: z.tum };
for (const floor of FLOORS) {
  const z0 = FLOOR_Z[floor.id];
  for (const r of floor.rooms) {
    if (r.kind === "stair" && floor.id !== "t1") continue; // lỗ sàn giếng thang
    const [x0, x1, y0, y1] = [r.x * M, (r.x + r.w) * M, Y(r.y), Y(r.y + r.h)];
    const quad = (a, b, c, d) => a < b && c < d && face("FLOOR", [a, c, z0 + 5], [b, c, z0 + 5], [b, d, z0 + 5], [a, d, z0 + 5]);
    const [hx0, hx1, hy0, hy1] = TAIL; // sàn T2 chừa lỗ cạnh 3 (phòng "Đầu thang")
    tinted(ROOM_FILL[r.kind], () =>
      floor.id === "t2" && x0 < hx1 && x1 > hx0 && y0 < hy1 && y1 > hy0
        ? (quad(x0, x1, y0, hy0), quad(x0, x1, hy1, y1), quad(x0, hx0, hy0, hy1), quad(hx1, x1, hy0, hy1))
        : quad(x0, x1, y0, y1),
    );
  }
  const roomAt = (x, y) => floor.rooms.find((r) => x >= r.x && x <= r.x + r.w && y >= r.y && y <= r.y + r.h);
  for (const [kind, x, y, a, b, c] of FURN[floor.id]) {
    const ht = (kind === "r" ? c : b) * M;
    // thiết bị WC trắng; tủ / bếp / bàn cao ≥ 0.75 m màu gỗ; còn lại (giường, sofa, ghế) xám nhạt
    const color = roomAt(x, y)?.kind === "wc" ? 7 : ht >= 750 ? 42 : 9;
    if (floor.id === "t1" && kind === "r" && underStair(x, a, y)) {
      // khối tủ đặc gầm thang: đỉnh cắt theo mặt dưới bản thang; tủ thấp có tủ kính khung đen tới sát gầm
      const yz = (p) => p.map(([yy, zz]) => [Y(yy), z0 + zz * M]);
      tinted(color, () => prismX("FURN", x * M, (x + a) * M, yz([[y, 0], [y + b, 0], ...profile(y, b, 0.01, c).reverse()])));
      if (hasDisplay(y, b, c)) prismX("GLASS", x * M, (x + a) * M, yz([[y, c], [y + b, c], ...profile(y, b, c, 9).reverse()]));
      continue;
    }
    tinted(color, () =>
      kind === "r" ? box("FURN", x * M, (x + a) * M, Y(y), Y(y + b), z0, z0 + ht) : cyl("FURN", x * M, Y(y), a * M, z0, z0 + ht),
    );
  }
  for (const spec of WALLS[floor.id]) {
    const [axis, c] = spec;
    pieces(spec, (kind, a, b) => {
      if (kind !== "door") return;
      const w = (b - a) * M; // cánh mở 90°, giống ký hiệu trên mặt bằng 2D
      if (axis === "h") box("DOOR", a * M, a * M + 40, Y(c), Y(c) + w, z0, z0 + 2100);
      else box("DOOR", c * M, c * M + w, Y(a), Y(a) + 40, z0, z0 + 2100);
    });
  }
}
// khung nhôm cửa kính: kính khách T1, cửa sổ sau T2, kính master, kính tum (cửa giữa)
for (const x of [400, 2475, 4550]) box("FRAME", x, x + 50, g1 - 20, g1 + 40, z.t1, z.t1 + 2700);
for (const zz of [z.t1, z.t1 + 2650]) box("FRAME", 400, 4600, g1 - 20, g1 + 40, zz, zz + 50);
for (const [a, b] of win) for (const x of [900, 2475, 4050]) box("FRAME", x, x + 50, rear - 130, rear - 70, a, b);
for (const x of [t, 1850, 3100, W - t - 50]) box("FRAME", x, x + 50, tumY[0] - 20, tumY[0] + 40, z.tum, z.mai - S - 300);
for (const x of [1710, 3250]) box("FRAME", x, x + 40, Y(1.1) - 30, Y(1.1) + 30, z.t2, z.tum - S - 300);

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
