// Xuất bản vẽ AutoCAD (DXF R12, đơn vị mm) từ src/lib/house-data.ts.
// Chạy: node scripts/export-dxf.mjs  →  cad/dreamhouse.dxf
import { mkdirSync, writeFileSync } from "node:fs";
import { FLOORS, HOUSE, LEVELS } from "../src/lib/house-data.ts";
import { FURN, pieces, ROOM_FILL, WALLS } from "./cad-walls.mjs";

const M = 1000; // m → mm
const LAYERS = { FILL: 254, AXIS: 8, WALL: 7, ROOM: 4, FURN: 8, TEXT: 7, RTXT: 250, DIM: 3, GLASS: 5, SITE: 30, DOOR: 6, FRAME: 7 };
const out = [];
const g = (...pairs) => out.push(pairs.join("\n"));

// AutoCAD đọc ký tự Unicode trong TEXT qua dạng \U+XXXX
const enc = (s) => [...s].map((c) => (c.charCodeAt(0) > 126 ? `\\U+${c.charCodeAt(0).toString(16).padStart(4, "0").toUpperCase()}` : c)).join("");

const line = (layer, x1, y1, x2, y2) => g(0, "LINE", 8, layer, 10, x1, 20, y1, 30, 0, 11, x2, 21, y2, 31, 0);
const rect = (layer, x, y, w, h) => {
  line(layer, x, y, x + w, y);
  line(layer, x + w, y, x + w, y + h);
  line(layer, x + w, y + h, x, y + h);
  line(layer, x, y + h, x, y);
};
const arc = (layer, x, y, r, a0, a1) => g(0, "ARC", 8, layer, 10, x, 20, y, 30, 0, 40, r, 50, a0, 51, a1);
const circle = (layer, x, y, r) => g(0, "CIRCLE", 8, layer, 10, x, 20, y, 30, 0, 40, r);
const text = (layer, x, y, h, s, rot = 0) =>
  g(0, "TEXT", 8, layer, 10, x, 20, y, 30, 0, 40, h, 1, enc(s), 50, rot, 72, 1, 11, x, 21, y, 31, 0);

// mảng tô đặc (SOLID) — màu ACI riêng từng mảng, nằm trên layer FILL để tắt/bật một lần
const solid = (color, x, y, w, h) =>
  g(0, "SOLID", 8, "FILL", 62, color, 10, x, 20, y, 30, 0, 11, x + w, 21, y, 31, 0, 12, x, 22, y + h, 32, 0, 13, x + w, 23, y + h, 33, 0);
const cutBox = (x, y, w, h, color = 250) => (solid(color, x, y, w, h), rect("WALL", x, y, w, h));
const textL = (layer, x, y, h, s) => g(0, "TEXT", 8, layer, 10, x, 20, y, 30, 0, 40, h, 1, enc(s));
const poly = (layer, pts) => pts.slice(1).forEach(([x, y], i) => line(layer, pts[i][0], pts[i][1], x, y));

// Kích thước dạng nét + vạch + chữ (không dùng DIMENSION để file mở được mọi nơi)
function dim(x1, y1, x2, y2, off) {
  const vert = x1 === x2;
  const [ax, ay, bx, by] = vert ? [x1 - off, y1, x2 - off, y2] : [x1, y1 - off, x2, y2 - off];
  line("DIM", ax, ay, bx, by);
  for (const [px, py, qx, qy] of [[x1, y1, ax, ay], [x2, y2, bx, by]]) {
    line("DIM", px, py, qx, qy);
    line("DIM", qx - 80, qy - 80, qx + 80, qy + 80);
  }
  const len = Math.abs(vert ? y2 - y1 : x2 - x1);
  if (vert) text("DIM", ax - 120, (ay + by) / 2, 200, (len / M).toFixed(2), 90);
  else text("DIM", (ax + bx) / 2, ay + 120, 200, (len / M).toFixed(2));
}

// ── Mặt bằng: mặt tiền ở dưới (y=0), sân sau ở trên (y=18) ────────────────
// Cửa kính/sổ tường ngoài [x, y1, y2, rộng] — đơn vị m. Tường ngăn + cửa đi: scripts/cad-walls.mjs
const OPEN = {
  t1: {
    wins: [[0.4, 0.55, 0.65, 4.2], [0.9, 17.8, 18, 3.2]],
  },
  t2: {
    wins: [[0.5, 1.05, 1.15, 4.0], [1.2, 9.55, 9.65, 1.4], [0.9, 17.8, 18, 3.2], [0, 0, 0.05, 5]],
  },
  tum: {
    wins: [[0.5, 4.45, 4.55, 4.0], [0, 0, 0.05, 5]],
  },
};
const W = HOUSE.width * M, D = HOUSE.houseD * M, t = ((HOUSE.width - HOUSE.netW) / 2) * M;

FLOORS.forEach((floor, i) => {
  const ox = i * 10 * M;
  const m = (v) => v * M;
  solid(254, ox, 0, W, D); // nền hành lang
  for (const r of floor.rooms) solid(ROOM_FILL[r.kind], ox + m(r.x), m(r.y), m(r.w), m(r.h));
  // tường ngoài: biên hai bên, tường hậu (chừa cửa sổ T1/T2), trụ mặt tiền T1
  cutBox(ox, 0, t, D);
  cutBox(ox + W - t, 0, t, D);
  if (floor.id === "tum") cutBox(ox + t, D - t, W - 2 * t, t);
  else cutBox(ox + t, D - t, 700, t), cutBox(ox + 4100, D - t, 700, t);
  if (floor.id === "t1") cutBox(ox + t, 0, 200, 650), cutBox(ox + 4600, 0, 200, 650);
  for (const spec of WALLS[floor.id]) {
    const [axis, c, , , , th = 100] = spec;
    pieces(spec, (kind, a, b) => {
      const [A, B, C] = [m(a), m(b), m(c)];
      const box = axis === "h" ? [ox + A, C - th / 2, B - A, th] : [ox + C - th / 2, A, th, B - A];
      if (kind === "solid") cutBox(...box);
      else if (kind === "glass") for (const d of [-th / 2, 0, th / 2]) axis === "h" ? line("GLASS", ox + A, C + d, ox + B, C + d) : line("GLASS", ox + C + d, A, ox + C + d, B);
      else if (axis === "h") line("DOOR", ox + A, C, ox + A, C + B - A), arc("DOOR", ox + A, C, B - A, 0, 90);
      else line("DOOR", ox + C, A, ox + C + B - A, A), arc("DOOR", ox + C, A, B - A, 0, 90);
    });
  }
  line("AXIS", ox + W / 2, -1500, ox + W / 2, D + 1500);
  for (const r of floor.rooms) {
    const [x, y, w, h] = [ox + r.x * M, r.y * M, r.w * M, r.h * M];
    if (r.kind === "void") rect("GLASS", x, y, w, h), line("GLASS", x, y, x + w, y + h), line("GLASS", x + w, y, x, y + h);
    if (w >= 1200 && h >= 1600) {
      text("RTXT", x + w / 2, y + h / 2 + 150, w < 2000 ? 220 : 280, r.name);
      text("RTXT", x + w / 2, y + h / 2 - 250, 180, `${r.areaNet.toFixed(1)} m²`);
    }
  }
  if (floor.id !== "tum")
    for (let k = 0; k < 10; k++) line("FURN", ox + 120, 9750 + k * 280, ox + 1120, 9750 + k * 280);
  for (const [kind, ...v] of FURN[floor.id]) {
    const [a, b, c, d] = v.map((n) => n * M);
    kind === "r" ? rect("FURN", ox + a, b, c, d) : circle("FURN", ox + a, b, c);
  }
  for (const [x, y1, y2, w] of OPEN[floor.id].wins)
    for (const y of [y1, (y1 + y2) / 2, y2]) line("GLASS", ox + x * M, y * M, ox + (x + w) * M, y * M);
  if (floor.id === "t1")
    for (const [a, b] of [[-2300, -1900], [D + 500, D + 1300]]) {
      const cy = a < 0 ? a - 250 : b + 250;
      line("AXIS", ox + 2000, a, ox + 2000, b);
      circle("AXIS", ox + 2000, cy, 250);
      text("TEXT", ox + 2000, cy, 250, "A");
    }
  dim(ox, 0, ox + W, 0, 900);
  dim(ox, 0, ox, D, 900);
  for (const r of floor.rooms.filter((r) => r.x === 0 && r.w === HOUSE.width)) {
    dim(ox + W, r.y * M, ox + W, (r.y + r.h) * M, -700);
  }
  text("TEXT", ox + W / 2, -3400, 350, `MẶT BẰNG ${floor.label.toUpperCase()}`);
  text("TEXT", ox + W / 2, -3900, 220, "TL 1:100");
  text("TEXT", ox + W / 2, -1400, 200, "MẶT TIỀN");
});

// ── Tổng mặt bằng lô 5 × 30 m ─────────────────────────────────────────────
{
  const ox = 30 * M, Y = (m) => m * M;
  solid(91, ox, 0, W, Y(HOUSE.yardFront)); // sân trước
  solid(254, ox, Y(HOUSE.yardFront), W, D); // khối nhà
  solid(91, ox, Y(HOUSE.yardFront) + D, W, Y(HOUSE.yardRear)); // sân sau
  solid(9, ox + 400, Y(0.5), 1800, 4700); // chỗ đỗ xe
  rect("SITE", ox, 0, HOUSE.lotW * M, HOUSE.lotD * M);
  rect("WALL", ox, Y(HOUSE.yardFront), W, D);
  rect("FURN", ox + 400, Y(0.5), 1800, 4700); // chỗ đỗ sedan 0.50–5.50 m
  line("SITE", ox + 400, Y(0.25), ox + 4000, Y(0.25)); // cổng nan 3.60 m
  text("TEXT", ox + W / 2, Y(HOUSE.yardFront + HOUSE.houseD / 2), 300, "KHỐI NHÀ 5.00 × 18.00");
  text("TEXT", ox + W / 2, Y(6.8), 220, "SÂN TRƯỚC");
  text("TEXT", ox + W / 2, Y(28), 220, "SÂN SAU");
  let acc = 0;
  for (const d of [HOUSE.yardFront, HOUSE.houseD, HOUSE.yardRear]) dim(ox, Y(acc), ox, Y((acc += d)), 900);
  dim(ox, 0, ox + W, 0, 900);
  text("TEXT", ox + W / 2, -1800, 350, "TỔNG MẶT BẰNG");
  text("TEXT", ox + W / 2, -2300, 220, `Lô ${HOUSE.lotW} × ${HOUSE.lotD} m · ${HOUSE.areaLot} m²`);
}

// ── Mặt cắt A–A (dọc lô 30 m) ──────────────────────────────────────────────
{
  const ox = 40 * M, h0 = HOUSE.yardFront * M, h1 = h0 + D, slab = 200;
  const z = Object.fromEntries(LEVELS.map((l) => [l.key, l.z * M]));
  const voidA = h0 + 9.9 * M, voidB = h0 + 12.8 * M;
  const tumA = h0 + 4.5 * M, tumB = h0 + 13.2 * M;
  solid(33, ox - 500, -300, HOUSE.lotD * M + 1000, 300); // đất
  line("SITE", ox - 500, 0, ox + HOUSE.lotD * M + 500, 0);
  cutBox(ox + h0, 0, D, z.t1); // nền + bệ
  for (const lv of [z.t2, z.tum]) {
    cutBox(ox + h0, lv - slab, voidA - h0, slab);
    cutBox(ox + voidB, lv - slab, h1 - voidB, slab);
  }
  cutBox(ox + h0, z.t1, t, z.tum - z.t1);
  cutBox(ox + h1 - t, z.t1, t, z.tum - z.t1);
  cutBox(ox + tumA, z.tum, t, z.mai - z.tum);
  cutBox(ox + tumB - t, z.tum, t, z.mai - z.tum);
  cutBox(ox + tumA, z.mai - slab, voidA - tumA, slab);
  cutBox(ox + voidB, z.mai - slab, tumB - voidB, slab);
  line("GLASS", ox + voidA, z.mai + 150, ox + voidB, z.mai + 150); // mái kính giếng trời
  rect("GLASS", ox + h0, z.tum, 50, 1100); // lan can sân thượng
  cutBox(ox + tumA, z.mai, 100, z.dinh - z.mai); // lan can mái
  cutBox(ox + tumB - 100, z.mai, 100, z.dinh - z.mai);
  for (let k = 0; k < 11; k++) line("FURN", ox + h0 + 9.6 * M + k * 260, z.t1 + k * 164, ox + h0 + 9.6 * M + (k + 1) * 260, z.t1 + k * 164);
  for (const l of LEVELS) {
    line("AXIS", ox - 1500, l.z * M, ox, l.z * M);
    text("TEXT", ox - 2600, l.z * M, 200, `${l.z >= 0 ? "+" : ""}${l.z.toFixed(2)} ${l.label}`);
  }
  let acc = 0;
  for (const d of [HOUSE.yardFront, HOUSE.houseD, HOUSE.yardRear]) dim(ox + acc * M, 0, ox + (acc += d) * M, 0, 900);
  text("TEXT", ox + (h0 + h1) / 2, z.t1 + 1800, 250, "TẦNG 1");
  text("TEXT", ox + (h0 + h1) / 2, z.t2 + 1600, 250, "TẦNG 2");
  text("TEXT", ox + (tumA + voidA) / 2, z.tum + 1400, 250, "PHÒNG THỜ");
  text("TEXT", ox + (voidA + voidB) / 2, z.t1 + 1000, 180, "GIẾNG TRỜI");
  text("TEXT", ox + HOUSE.lotD * M / 2, -2300, 350, "MẶT CẮT A–A · TL 1:150");
}

// ── Mặt đứng mặt tiền 5.00 × 11.20 m (tô màu vật liệu) ───────────────────
{
  const ox = 75 * M, z = Object.fromEntries(LEVELS.map((l) => [l.key, l.z * M]));
  const face = (color, layer, x, y, w, h) => (solid(color, x, y, w, h), rect(layer, x, y, w, h));
  solid(33, ox - 1000, -300, W + 2000, 300); // đất
  line("SITE", ox - 1000, 0, ox + W + 1000, 0);
  face(8, "WALL", ox, 0, W, z.t1); // bệ granite
  face(254, "WALL", ox, z.t1, W, z.tum - z.t1); // vôi bả T1–T2
  face(151, "GLASS", ox + 400, z.t1, 4200, 2700); // kính khách 4.20 × 2.70
  for (const x of [1450, 2500, 3550]) line("GLASS", ox + x, z.t1, ox + x, z.t1 + 2700); // khung trượt
  face(151, "GLASS", ox + t, z.t2, W - 2 * t, z.tum - 300 - z.t2); // kính master sau lam
  for (let k = 0; k < 41; k++) solid(32, ox + t + k * ((W - 2 * t - 40) / 40), z.t2, 40, z.tum - 300 - z.t2); // lam teak
  rect("GLASS", ox + t, z.t2 + 300, W - 2 * t, 1100); // lan can loggia
  face(254, "WALL", ox, z.tum, W, z.dinh - z.tum); // khối tum
  face(151, "GLASS", ox + 500, z.tum, 4000, z.mai - 500 - z.tum); // kính phòng thờ (lùi 4.5 m)
  rect("GLASS", ox, z.tum, W, 1100); // lan can kính sân thượng
  for (const l of LEVELS) text("TEXT", ox + W + 1500, l.z * M, 180, `${l.z >= 0 ? "+" : ""}${l.z.toFixed(2)}`);
  dim(ox, 0, ox + W, 0, 900);
  dim(ox, 0, ox, z.dinh, 900);
  text("TEXT", ox + W / 2, -2300, 350, "MẶT ĐỨNG MẶT TIỀN · TL 1:100");
}

// ── Chi tiết CT-03 … CT-05 (hàng dưới, đơn vị mm thật) ────────────────────
const BASE = -17000;
{
  // CT-03 cầu thang — (a) mặt cắt vế, (b) mặt bằng lõi
  const ox = 0, R = 164, T = 260, n = 11;
  const step = [];
  for (let k = 0; k < n; k++) step.push([ox + k * T, BASE + k * R], [ox + k * T, BASE + (k + 1) * R]);
  step.push([ox + (n - 1) * T + 1000, BASE + n * R]); // chiếu nghỉ 1 000
  poly("WALL", step);
  line("WALL", ox, BASE - 150, ox + (n - 1) * T, BASE + n * R - 150); // bản BTCT 120 + trát
  line("WALL", ox + (n - 1) * T, BASE + n * R - 150, ox + (n - 1) * T + 1000, BASE + n * R - 150);
  line("GLASS", ox, BASE + 900, ox + (n - 1) * T, BASE + n * R + 900); // tay vịn 900
  line("SITE", ox - 800, BASE, ox, BASE);
  dim(ox, BASE, ox + (n - 1) * T, BASE, 500);
  dim(ox + (n - 1) * T, BASE, ox + (n - 1) * T + 1000, BASE, 500);
  dim(ox, BASE, ox, BASE + n * R, 700);
  textL("TEXT", ox + 200, BASE + 2400, 125, "Tay vịn 900");
  textL("TEXT", ox + 1500, BASE + 300, 125, "BTCT 120");
  // (b) mặt bằng lõi 2.10 × 3.60
  const px = ox + 5000, py = BASE;
  rect("WALL", px, py, 2100, 3600);
  rect("WALL", px + 1000, py, 100, 2550); // tường giữa hai vế
  line("WALL", px, py + 2550, px + 2100, py + 2550); // mép chiếu nghỉ
  for (let k = 1; k < 10; k++) {
    line("FURN", px, py + 2550 - k * T, px + 1000, py + 2550 - k * T);
    line("FURN", px + 1100, py + 2550 - k * T, px + 2100, py + 2550 - k * T);
  }
  dim(px, py, px + 2100, py, 500);
  dim(px + 2100, py, px + 2100, py + 3600, -500);
  textL("TEXT", px + 150, py + 3000, 125, "Chiếu nghỉ 1 050");
  text("TEXT", ox + 3500, BASE - 1400, 250, "CT-03 · CẦU THANG · TL 1:50");
}
{
  // CT-04 mái kính giếng trời — mặt cắt ngang ô 1 500
  const ox = 16000, y0 = BASE, V = 1500;
  rect("WALL", ox - 1000, y0 - 200, 1000, 200); // sàn mái tum
  rect("WALL", ox + V, y0 - 200, 1000, 200);
  rect("WALL", ox - 200, y0, 200, 450); // gờ bê tông
  rect("WALL", ox + V, y0, 200, 450);
  for (const x of [ox - 200, ox + V]) {
    for (let k = 0; k < 3; k++) line("FURN", x, y0 + 470 + k * 40, x + 200, y0 + 500 + k * 40); // lam chắn mưa 3 lớp
  }
  rect("WALL", ox - 250, y0 + 600, V + 500, 50); // hộp thép 100×50
  const gl0 = y0 + 700, gl1 = gl0 - (V + 700) * 0.05;
  line("GLASS", ox - 350, gl0, ox + V + 350, gl1); // kính dán 8+8 dốc 5%
  line("GLASS", ox - 350, gl0 + 16, ox + V + 350, gl1 + 16);
  rect("WALL", ox + V + 350, gl1 - 150, 200, 100); // máng inox 200×100
  line("WALL", ox + V + 450, gl1 - 150, ox + V + 450, y0 - 200); // ống D90
  dim(ox, y0 - 200, ox + V, y0 - 200, 300);
  textL("TEXT", ox - 900, y0 + 900, 60, "Kính 8+8, dốc 5%");
  textL("TEXT", ox - 1900, y0 + 500, 60, "Khe gió 150");
  textL("TEXT", ox + V + 600, gl1 - 120, 60, "Máng 200×100");
  text("TEXT", ox + V / 2, BASE - 1400, 250, "CT-04 · GIẾNG TRỜI · TL 1:25");
}
{
  // CT-05 trục ướt — mặt cắt đứng hộp gen 300 × 300 qua T1, T2 lên mái tum
  const ox = 32000, z = Object.fromEntries(LEVELS.map((l) => [l.key, BASE + l.z * M]));
  for (const k of ["t1", "t2", "tum", "mai"]) {
    rect("WALL", ox - 2000, z[k] - 200, 1700, 200);
    rect("WALL", ox + 300, z[k] - 200, 1500, 200);
    textL("TEXT", ox + 2000, z[k] - 100, 125, LEVELS.find((l) => l.key === k).label);
  }
  for (const k of ["t1", "t2"]) {
    line("WALL", ox - 1800, z[k] - 50, ox - 300, z[k] - 50); // hạ cốt WC 50
    textL("TEXT", ox - 4000, z[k] + 150, 125, "Hạ cốt -50");
  }
  rect("WALL", ox, z.t1 - 200, 300, z.mai - z.t1 + 900); // hộp gen
  for (const [x, d, top] of [[80, 110, z.t2 + 800], [220, 60, z.mai + 700]]) {
    line("GLASS", ox + x - d / 2, z.t1 - 600, ox + x - d / 2, top);
    line("GLASS", ox + x + d / 2, z.t1 - 600, ox + x + d / 2, top);
  }
  textL("TEXT", ox + 400, z.mai + 500, 125, "D60 thông hơi");
  textL("TEXT", ox + 400, z.t2 + 600, 125, "D110 · D90 · D60");
  textL("TEXT", ox + 400, z.t1 + 1600, 125, "Hộp gen 300×300");
  text("TEXT", ox + 150, BASE - 1400, 250, "CT-05 · TRỤC ƯỚT · TL 1:50");
}

// ── Khung bản vẽ + khung tên ─────────────────────────────────────────────
{
  const [x0, y0, x1, y1] = [-6000, -33000, 90000, 33000];
  rect("FRAME", x0, y0, x1 - x0, y1 - y0);
  rect("FRAME", x0 + 300, y0 + 300, x1 - x0 - 600, y1 - y0 - 600);
  const bw = 24000, bh = 7200, bx = x1 - 300 - bw, by = y0 + 300;
  rect("FRAME", bx, by, bw, bh);
  [1800, 3600, 5400].forEach((h) => line("FRAME", bx, by + h, bx + bw, by + h));
  line("FRAME", bx + 4000, by, bx + 4000, by + bh);
  const rows = [
    ["CÔNG TRÌNH", "NHÀ PHỐ 5 × 30 m — 2 TẦNG + TUM"],
    ["NỘI DUNG", "MB T1/T2/Tum · TMB · MC A–A · MĐ · CT-03…05"],
    ["ĐƠN VỊ", "mm"],
    ["NGÀY", "24/09/2026 · THIẾT KẾ: ________ · KIỂM TRA: ________"],
  ];
  rows.forEach(([k, v], i) => {
    const y = by + bh - 1800 * (i + 1) + 650;
    textL("TEXT", bx + 300, y, 300, k);
    textL("TEXT", bx + 4300, y, 380, v);
  });

}

// ── Ghi file ──────────────────────────────────────────────────────────────
const layerTable = Object.entries(LAYERS)
  .map(([n, c]) => `0\nLAYER\n2\n${n}\n70\n0\n62\n${c}\n6\nCONTINUOUS`)
  .join("\n");
const dxf = [
  "0\nSECTION\n2\nHEADER\n9\n$ACADVER\n1\nAC1009\n9\n$INSUNITS\n70\n4\n0\nENDSEC",
  `0\nSECTION\n2\nTABLES\n0\nTABLE\n2\nLAYER\n70\n${Object.keys(LAYERS).length}\n${layerTable}\n0\nENDTAB\n0\nTABLE\n2\nSTYLE\n70\n1\n0\nSTYLE\n2\nSTANDARD\n70\n0\n40\n0\n41\n1\n50\n0\n71\n0\n42\n250\n3\narial.ttf\n4\n\n0\nENDTAB\n0\nENDSEC`,
  "0\nSECTION\n2\nENTITIES",
  ...out,
  "0\nENDSEC\n0\nEOF\n",
].join("\n");
mkdirSync("cad", { recursive: true });
writeFileSync("cad/dreamhouse.dxf", dxf);
console.log(`cad/dreamhouse.dxf — ${out.length} entities`);
