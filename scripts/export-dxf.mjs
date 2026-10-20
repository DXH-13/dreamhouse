// Xuất bản vẽ AutoCAD (DXF R12, đơn vị mm) từ src/lib/house-data.ts.
// Chạy: node scripts/export-dxf.mjs  →  cad/dreamhouse.dxf
import { mkdirSync, writeFileSync } from "node:fs";
import { FLOORS, HOUSE, LEVELS, flightTop } from "../src/lib/house-data.ts";
import { CORE, FURN, hasDisplay, pieces, profile, RAILS, ROOM_FILL, underStair, WALLS } from "./cad-walls.mjs";

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
// tủ bị mặt cắt dọc cắt qua, nhìn ngang (y, z mm): tủ gầm thang cắt đỉnh theo dốc thang, tủ thấp có tủ kính phía trên.
// toY(y m) → toạ độ bản vẽ; zf = cao độ nền T1 (mm)
function cutCab([, x, y, w, d, h], toY, zf) {
  if (!underStair(x, w, y)) return rect("FURN", toY(y), zf, d * M, h * M);
  const top = profile(y, d, 0.01, h).reverse();
  poly("FURN", [[y, 0], [y + d, 0], ...top, [y, 0]].map(([a, b]) => [toY(a), zf + b * M]));
  if (hasDisplay(y, d, h)) poly("GLASS", [[y, h], [y + d, h], ...profile(y, d, h, 9).reverse(), [y, h]].map(([a, b]) => [toY(a), zf + b * M]));
}

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
    wins: [[0.4, 0.55, 0.65, 4.2]], // tường hậu T1 kín — phòng ông bà không mở ra sân sau
  },
  t2: {
    wins: [[0.5, 1.05, 1.15, 4.0], [0.9, 17.8, 18, 3.2], [0, 0, 0.05, 5]],
  },
  tum: {
    wins: [[0.2, 4.45, 4.55, 1.7], [3.1, 4.45, 4.55, 1.7], [0, 0, 0.05, 5]],
  },
};
const W = HOUSE.width * M, D = HOUSE.houseD * M, t = ((HOUSE.width - HOUSE.netW) / 2) * M;
// thang chữ U ba cạnh sát tường trái (T1) + vế thẳng T2 → tum + lỗ sàn (mm) — từ CORE
const [CX, SP] = [CORE.x, CORE.spine].map((p) => p.map((v) => v * M));
const HOLE = { t2: CORE.holes.t2.map((v) => v * M), tum: CORE.holes.tum.map((v) => v * M) };
const TR = CORE.tread * M;
const TAIL = [...CORE.tailHole.x, ...CORE.tailHole.y].map((v) => v * M); // lỗ sàn T2 thứ hai trên cạnh 3: [x0, x1, y0, y1]
const [LA, LB] = CORE.landing.y.map((v) => v * M), [TA, TB] = CORE.landing.top.map((v) => v * M); // chiếu nghỉ trước / sau
const SIDE = Array.from({ length: CORE.flights.t1.lead }, (_, k) => CX[1] + k * TR); // cổ bậc cạnh 1 / cạnh 3: x 1.20 … 1.98
const XF = SIDE.at(-1);
// cổ bậc thứ i (1…n) tại y = chân thang + (i − 1)·T; cổ cuối lên sàn trên đúng tại flightTop
const riserYs = (id) => Array.from({ length: CORE.flights[id].risers }, (_, i) => (CORE.flights[id].y + i * CORE.tread) * M);
const XA = 0.7; // mặt cắt A–A: x 0.70, giữa dải thang

FLOORS.forEach((floor, i) => {
  const ox = i * 10 * M;
  const m = (v) => v * M;
  solid(254, ox, 0, W, D); // nền hành lang
  for (const r of floor.rooms) solid(ROOM_FILL[r.kind], ox + m(r.x), m(r.y), m(r.w), m(r.h));
  // tường ngoài: biên hai bên, tường hậu (T1 kín trừ cửa sau, chừa cửa sổ T2), trụ mặt tiền T1
  cutBox(ox, 0, t, D);
  cutBox(ox + W - t, 0, t, D);
  if (floor.id === "tum") cutBox(ox + t, D - t, W - 2 * t, t);
  else if (floor.id === "t2") cutBox(ox + t, D - t, 700, t), cutBox(ox + 4100, D - t, 700, t);
  else {
    // T1: tường hậu kín (phòng ông bà yên tĩnh, kín sân sau), chỉ có cửa ra sân sau cuối hành lang (x 3.85–4.75)
    cutBox(ox + t, D - t, SP[0] + 50 - t, t), cutBox(ox + SP[1] - 50, D - t, 50, t);
    line("DOOR", ox + SP[0] + 50, D - t, ox + SP[0] + 50, D - t - 900), arc("DOOR", ox + SP[0] + 50, D - t, 900, 270, 360);
  }
  if (floor.id === "t1") {
    cutBox(ox + t, 0, 200, 650), cutBox(ox + 4600, 0, 200, 650);
    // sân sau 4 m (y 18–22) + mái kính x 1.6–4.8 · y 18–19.4 che lối từ cửa sau hành lang tới cửa WC (dải WC sát tường trái từ WALLS.t1)
    rect("SITE", ox, D, W, HOUSE.yardRear * M);
    rect("AXIS", ox + 1600, D, 3200, 1400);
    text("TEXT", ox + 3200, D + 1250, 110, "MÁI KÍNH LỐI ĐI");
    rect("FURN", ox + 1600, D + 400, 400, 700), rect("FURN", ox + 2000, D + 400, 400, 700); // bậc lên cửa WC
    rect("FURN", ox + 2500, D + 500, 1100, 500); // đá bước
    text("TEXT", ox + 3300, D + 2700, 160, "SÂN SAU");
  }
  if (floor.id === "t2") {
    // khung trắng bo cong nhô 0.60 m (hai má 0.45), lan can nan đen y -0.31, bồn cây be bên phải
    cutBox(ox, -600, 450, 600), cutBox(ox + W - 450, -600, 450, 600);
    line("GLASS", ox + 450, -310, ox + W - 450, -310);
    rect("FURN", ox + 3700, -1000, 1250, 650);
  }
  if (floor.id === "tum") {
    // bồn cây trái, trụ be pergola bên phải
    rect("FURN", ox + 300, 150, 1400, 700);
    cutBox(ox + W - t, -200, 250, 4700);
  }
  for (const spec of WALLS[floor.id]) {
    const [axis, c, , , , th = 100] = spec;
    pieces(spec, (kind, a, b) => {
      const [A, B, C] = [m(a), m(b), m(c)];
      const box = axis === "h" ? [ox + A, C - th / 2, B - A, th] : [ox + C - th / 2, A, th, B - A];
      if (kind === "solid") cutBox(...box);
      else if (kind === "glass" || kind === "block") for (const d of [-th / 2, 0, th / 2]) axis === "h" ? line("GLASS", ox + A, C + d, ox + B, C + d) : line("GLASS", ox + C + d, A, ox + C + d, B);
      else if (axis === "h") line("DOOR", ox + A, C, ox + A, C + B - A), arc("DOOR", ox + A, C, B - A, 0, 90);
      else line("DOOR", ox + C, A, ox + C + B - A, A), arc("DOOR", ox + C, A, B - A, 0, 90);
    });
  }
  line("AXIS", ox + W / 2, -1500, ox + W / 2, D + 1500);
  for (const r of floor.rooms) {
    const [x, y, w, h] = [ox + r.x * M, r.y * M, r.w * M, r.h * M];
    if (w >= 1200 && h >= 1600) {
      text("RTXT", x + w / 2, y + h / 2 + 150, w < 2000 ? 220 : 280, r.kind === "stair" ? "Thang + giếng trời" : r.name);
      text("RTXT", x + w / 2, y + h / 2 - 250, 180, `${r.areaNet.toFixed(1)} m²`);
    }
  }
  // lỗ sàn trên vế thang (T2, tum); tầng tum vẽ thêm ô chéo mái kính trùm lỗ
  const hole = HOLE[floor.id];
  if (hole) rect("AXIS", ox + CX[0], hole[0], CX[1] - CX[0], hole[1] - hole[0]);
  if (floor.id === "t2") {
    rect("AXIS", ox + TAIL[0], TAIL[2], TAIL[1] - TAIL[0], TAIL[3] - TAIL[2]);
    for (const x of SIDE) line("FURN", ox + x, TAIL[2], ox + x, TAIL[3]); // cạnh 3 thấy qua lỗ, đổ lên sàn T2 tại x 1.98
  }
  if (floor.id === "t1") {
    // cạnh 1 (bục gỗ → 3 bậc ngang x 1.98 → 1.20) + chiếu nghỉ trước; chiếu nghỉ sau + cạnh 3 (x 1.20 → 1.98) lên sàn T2
    for (const [a, b] of [[LA, LB], [TA, TB]]) {
      rect("FURN", ox + CX[0], a, CX[1] - CX[0], b - a);
      line("FURN", ox + CX[1], a, ox + XF, a), line("FURN", ox + CX[1], b, ox + XF, b);
      for (const x of SIDE) line("FURN", ox + x, a, ox + x, b);
    }
    for (const [x1, y1, x2, y2] of [[CX[1], LB, XF, LB], [CX[1], LB, CX[1], TA], [CX[1], TA, XF, TA]]) // lan can kính mép trong chữ U
      for (const d of [-25, 25]) line("GLASS", ox + x1 + (x1 === x2 ? d : 0), y1 + (x1 === x2 ? 0 : d), ox + x2 + (x1 === x2 ? d : 0), y2 + (x1 === x2 ? 0 : d));
  }
  if (floor.id === "tum") {
    line("GLASS", ox + CX[0], hole[0], ox + CX[1], hole[1]), line("GLASS", ox + CX[1], hole[0], ox + CX[0], hole[1]);
    textL("TEXT", ox + CX[0] + 100, hole[1] - 300, 130, "MÁI KÍNH TRÊN");
  }
  // cạnh 2 / vế thẳng sát tường trái: T1 vẽ cạnh 2 của thang U, T2 vẽ vế lên tum, tum vẽ phần vế T2 thấy trong lỗ sàn
  const fid = floor.id === "t1" ? "t1" : "t2";
  for (const y of riserYs(fid)) if (floor.id !== "tum" || y >= hole[0]) line("FURN", ox + CX[0], y, ox + CX[1], y);
  const cx = (CX[0] + CX[1]) / 2, fy0 = CORE.flights[fid].y * M, fy1 = flightTop(fid) * M;
  if (floor.id === "tum") textL("TEXT", ox + CX[0] + 100, fy1 + 200, 150, "XUỐNG");
  else if (floor.id === "t1") {
    // mũi tên LÊN chạy chữ U: cạnh 1 → chiếu nghỉ trước → cạnh 2 → chiếu nghỉ sau → cạnh 3
    const sx = (CX[1] + XF) / 2, ly = (LA + LB) / 2, ty = (TA + TB) / 2;
    poly("DOOR", [[sx, ly], [cx, ly], [cx, ty], [XF - 150, ty]].map(([a, b]) => [ox + a, b]));
    line("DOOR", ox + XF - 150, ty, ox + XF - 400, ty - 120), line("DOOR", ox + XF - 150, ty, ox + XF - 400, ty + 120);
    circle("DOOR", ox + sx, ly, 60);
    textL("TEXT", ox + cx + 120, fy0 + 300, 150, "LÊN");
  } else {
    line("DOOR", ox + cx, fy0 + 150, ox + cx, fy1 - 150);
    line("DOOR", ox + cx, fy1 - 150, ox + cx - 120, fy1 - 400), line("DOOR", ox + cx, fy1 - 150, ox + cx + 120, fy1 - 400);
    circle("DOOR", ox + cx, fy0 + 150, 60);
    textL("TEXT", ox + cx + 120, fy0 + 100, 150, "LÊN");
  }
  // lan can kính quanh lỗ sàn
  for (const [x1, y1, x2, y2] of RAILS[floor.id])
    for (const d of [-25, 25]) {
      const [dx, dy] = x1 === x2 ? [d, 0] : [0, d];
      line("GLASS", ox + x1 * M + dx, y1 * M + dy, ox + x2 * M + dx, y2 * M + dy);
    }
  for (const [kind, ...v] of FURN[floor.id]) {
    const [a, b, c, d] = v.map((n) => n * M);
    kind === "r" ? rect("FURN", ox + a, b, c, d) : circle("FURN", ox + a, b, c);
  }
  for (const [x, y1, y2, w] of OPEN[floor.id].wins)
    for (const y of [y1, (y1 + y2) / 2, y2]) line("GLASS", ox + x * M, y * M, ox + (x + w) * M, y * M);
  if (floor.id === "t1")
    for (const [a, b] of [[-2300, -1900], [D + 500, D + 1300]]) {
      const cy = a < 0 ? a - 250 : b + 250;
      line("AXIS", ox + XA * M, a, ox + XA * M, b);
      circle("AXIS", ox + XA * M, cy, 250);
      text("TEXT", ox + XA * M, cy, 250, "A");
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
  // dải WC T1 sát tường trái sau phòng ngủ + mái kính lối đi
  const wc = FLOORS[0].rooms.find((r) => r.id === "t1-wc"), wy = HOUSE.yardFront + wc.y;
  solid(ROOM_FILL.wc, ox + wc.x * M, Y(wy), wc.w * M, wc.h * M);
  rect("WALL", ox + wc.x * M, Y(wy), wc.w * M, wc.h * M);
  text("TEXT", ox + (wc.x + wc.w / 2) * M, Y(wy + wc.h / 2), 200, "WC");
  rect("AXIS", ox + (wc.x + wc.w) * M, Y(HOUSE.yardFront) + D, (4.8 - wc.x - wc.w) * M, 1400); // mái kính x 1.6–4.8 · y 18–19.4
  text("TEXT", ox + 3300, Y(28.8), 180, "SÂN SAU");
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
  // cắt dọc x = 0.70 qua dải thang (hai vế chồng nhau) + dãy tủ gầm thang, nhìn về tường trái
  const [h2a, h2b] = HOLE.t2.map((v) => h0 + v), [hta, htb] = HOLE.tum.map((v) => h0 + v); // lỗ sàn T2, lỗ sàn tum = lỗ mái
  const tumA = h0 + 4.5 * M, tumB = h0 + 13.8 * M; // khối tum y 4.5–13.8
  solid(33, ox - 500, -300, HOUSE.lotD * M + 1000, 300); // đất
  line("SITE", ox - 500, 0, ox + HOUSE.lotD * M + 500, 0);
  cutBox(ox + h0, 0, D, z.t1); // nền + bệ
  for (const [lv, a, b] of [[z.t2, h2a, h2b], [z.tum, hta, htb]]) {
    cutBox(ox + h0, lv - slab, a - h0, slab);
    cutBox(ox + b, lv - slab, h1 - b, slab);
  }
  // mặt tiền tại x = 0.70: kính T1 lùi 0.60 dưới dải đá be, kính master lùi 1.10 sau loggia
  rect("GLASS", ox + h0 + 580, z.t1, 40, 2700);
  cutBox(ox + h0 + 500, z.t1 + 2700, 200, z.t2 - slab - z.t1 - 2700);
  rect("GLASS", ox + h0 + 1080, z.t2, 40, z.tum - slab - 300 - z.t2);
  cutBox(ox + h0 + 1000, z.tum - slab - 300, 200, 300);
  cutBox(ox + h1 - t, z.t1, t, z.tum - z.t1);
  rect("GLASS", ox + tumA, z.tum, 100, z.mai - 300 - z.tum); // cửa kính tum ra sân thượng
  cutBox(ox + tumA, z.mai - slab, hta - tumA, slab);
  cutBox(ox + htb, z.mai - slab, tumB - htb, slab);
  cutBox(ox + hta - 200, z.mai, 200, 450), cutBox(ox + htb, z.mai, 200, 450); // gờ BTCT 450 quanh lỗ mái
  line("GLASS", ox + hta - 100, z.mai + 600, ox + htb + 100, z.mai + 600); // mái kính trùm lỗ sàn tum (gờ 450 + khe gió 150)
  cutBox(ox + h0 - 100, z.tum, 200, 450); // lan can tường trắng 0.45 + nan đen
  line("GLASS", ox + h0, z.tum + 450, ox + h0, z.tum + 1100);
  cutBox(ox + h0 - 600, z.t2 - 450, 600, 400); // khung loggia nhô 0.60: dầm dưới
  cutBox(ox + h0 - 600, z.tum - 450, 600, 450); // khung loggia: dầm trên
  line("GLASS", ox + h0 - 310, z.t2, ox + h0 - 310, z.t2 + 1050); // lan can nan loggia
  cutBox(ox + h1 - 200, z.tum, 200, 1100); // tường sân phơi
  rect("FURN", ox + h0 - 300, z.mai + 300, 4800, 120); // giàn pergola lam đen
  rect("FURN", ox + h0 - 100, z.tum + 1100, 100, z.mai + 300 - z.tum - 1100); // trụ pergola
  cutBox(ox + tumA, z.mai, 100, z.dinh - z.mai); // lan can mái
  cutBox(ox + tumB - 100, z.mai, 100, z.dinh - z.mai);
  // thang bị cắt tại x 0.70: T1 chữ U — chiếu nghỉ trước đặc y 4.00–5.00, cạnh 2 y 5.00 → 8.90, bản chiếu nghỉ sau y 8.90–9.90
  // (cạnh 1 / cạnh 3 x 1.20–1.98 sau mặt cắt: nét thấy); vế T2 chồng đúng phía trên y 6.00 → 10.94
  for (const [id, z0, z1] of [["t1", z.t1, z.t2], ["t2", z.t2, z.tum]]) {
    const { y, risers, lead, tail } = CORE.flights[id], R = (z1 - z0) / (lead + risers + tail), y0 = h0 + y * M, yt = h0 + flightTop(id) * M;
    const zl = z0 + lead * R, zt = zl + risers * R;
    const p = lead ? [[h0 + LA, z0], [h0 + LA, zl], [y0, zl]] : [[y0, z0]];
    for (let i = 1; i < risers; i++) p.push([y0 + (i - 1) * TR, zl + i * R], [y0 + i * TR, zl + i * R]);
    if (!tail) p.push([yt, z1], [yt, z1 - slab], [y0 + 350, z0], [y0, z0]); // cổ cuối lên sàn trên, bụng bản thang
    else {
      const sof = (yy) => zl + ((yy - y0) / TR) * R - 250; // bụng bản cạnh 2 (= stairSoffit), tựa lên khối chiếu nghỉ trước
      p.push([yt, zt], [h0 + TB, zt], [h0 + TB, zt - 200], [yt, zt - 200], [yt, sof(yt)], [y0, Math.max(z0, sof(y0))], [y0, z0], p[0]);
      for (let k = 1; k < lead; k++) line("AXIS", ox + h0 + LA, z0 + k * R, ox + h0 + LB, z0 + k * R); // cạnh 1 thấy
      for (let k = 1; k < tail; k++) line("AXIS", ox + h0 + TA, zt + k * R, ox + h0 + TB, zt + k * R); // cạnh 3 thấy
    }
    poly("FURN", p.map(([yy, zz]) => [ox + yy, zz]));
  }
  // tường ngăn "h" bị mặt cắt x = 0.70 cắt qua (từ WALLS): đặc / kính / lanh tô trên cửa
  for (const [id, lv, top] of [["t1", z.t1, z.t2], ["t2", z.t2, z.tum], ["tum", z.tum, z.mai]]) {
    for (const spec of WALLS[id]) {
      const [axis, c, , , , th = 100] = spec;
      if (axis !== "h") continue;
      pieces(spec, (kind, a, b) => {
        if (a > XA || b < XA) return;
        const y = ox + h0 + c * M - th / 2, z0 = kind === "door" ? lv + 2200 : lv;
        const zt = spec[6] ? Math.min(top - slab, lv + spec[6] * M) : top - slab; // tường thấp (dải WC sân sau 2.60)
        kind === "glass" || kind === "block" ? rect("GLASS", y, lv, th, zt - lv) : cutBox(y, z0, th, zt - z0);
      });
    }
  }
  // T1 bị cắt (từ FURN): bục gỗ, khối tủ đặc gầm thang cắt đỉnh theo dốc thang (kệ rượu, tủ thấp + tủ kính, tủ cao, tủ lạnh,
  // tháp lò), bếp chữ L tới tường y 13.40; dải WC sau tường hậu: thiết bị
  for (const f of FURN.t1)
    if (f[0] === "r" && f[1] <= XA && XA <= f[1] + f[3] && ((f[2] >= 4.5 && f[2] < 13.4) || f[2] >= 18)) cutCab(f, (y) => ox + h0 + y * M, z.t1);
  for (const [y, zz, s] of [[6.0, 60, "KỆ RƯỢU"], [7.95, 300, "TỦ THẤP"], [8.6, 1300, "TỦ KÍNH"], [10.5, 2100, "TỦ CAO · TỦ LẠNH · LÒ"], [12.5, 1200, "BẾP L"], [19.7, 1500, "WC"]])
    text("TEXT", ox + h0 + y * M, z.t1 + zz, 100, s);
  // dải WC sát tường trái liền sau tường hậu (y 18.00–21.80), mặt cắt x 0.70 đi qua: bệ nền +0.45, mái bằng y 18.00–21.85 tới +3.23
  cutBox(ox + h0 + 18 * M, 0, 3800, z.t1);
  cutBox(ox + h0 + 18 * M, z.t1 + 2600, 3850, 180);
  for (const l of LEVELS) {
    line("AXIS", ox - 1500, l.z * M, ox, l.z * M);
    text("TEXT", ox - 2600, l.z * M, 200, `${l.z >= 0 ? "+" : ""}${l.z.toFixed(2)} ${l.label}`);
  }
  let acc = 0;
  for (const d of [HOUSE.yardFront, HOUSE.houseD, HOUSE.yardRear]) dim(ox + acc * M, 0, ox + (acc += d) * M, 0, 900);
  text("TEXT", ox + h0 + 2.5 * M, z.t1 + 1800, 250, "TẦNG 1");
  text("TEXT", ox + h0 + 2.5 * M, z.t2 + 1600, 250, "TẦNG 2");
  text("TEXT", ox + (tumA + hta) / 2, z.tum + 1400, 250, "PHÒNG THỜ");
  text("TEXT", ox + (htb + tumB) / 2, z.tum + 1400, 250, "SẢNH TUM");
  text("TEXT", ox + (hta + htb) / 2, z.tum + 1600, 180, "GIẾNG THANG");
  text("TEXT", ox + HOUSE.lotD * M / 2, -2300, 350, "MẶT CẮT A–A · TL 1:150");
}

// ── Mặt đứng mặt tiền 5.00 × 11.20 m (tô màu vật liệu) ───────────────────
{
  const ox = 75 * M, z = Object.fromEntries(LEVELS.map((l) => [l.key, l.z * M]));
  const face = (color, layer, x, y, w, h) => (solid(color, x, y, w, h), rect(layer, x, y, w, h));
  solid(33, ox - 1000, -300, W + 2000, 300); // đất
  line("SITE", ox - 1000, 0, ox + W + 1000, 0);
  face(8, "WALL", ox, 0, W, z.t1); // bệ granite
  const ZT = z.tum, RF = z.mai;
  // khối tum lùi 4.50 m phía sau: tường + kính / cửa ra sân thượng
  face(254, "WALL", ox, ZT, W, z.dinh - ZT);
  face(151, "GLASS", ox + t, ZT, W - 2 * t, 2400);
  for (const x of [1900, 3100]) line("GLASS", ox + x, ZT, ox + x, ZT + 2400);
  // T1: trụ hai bên, kính 4.20 × 2.70 lùi 0.60, dải đá be phía trên
  face(254, "WALL", ox, z.t1, 400, 3300), face(254, "WALL", ox + 4600, z.t1, 400, 3300);
  face(151, "GLASS", ox + 400, z.t1, 4200, 2700); // kính khách 4.20 × 2.70
  line("GLASS", ox + 2500, z.t1, ox + 2500, z.t1 + 2700); // khung trượt
  face(42, "WALL", ox + 400, z.t1 + 2700, 4200, 600); // dải đá be
  // T2: kính master trong ô mở 4.10 × 2.90, khung trắng nhô 0.60 (vẽ dạng hộp, bo cong R 750 ở góc trên phải + góc dưới trái ô mở)
  face(151, "GLASS", ox + 450, 4000, 4100, 2900);
  for (const x of [1730, 3270]) line("GLASS", ox + x, 4000, ox + x, 6900);
  face(254, "WALL", ox, 3600, W, 400), face(254, "WALL", ox, 6900, W, ZT - 6900);
  face(254, "WALL", ox, 4000, 450, 2900), face(254, "WALL", ox + 4550, 4000, 450, 2900);
  arc("WALL", ox + W - 750, ZT - 750, 750, 0, 90), arc("WALL", ox + 450 + 750, 4000 + 750, 750, 180, 270);
  for (let x = 500; x < 4550; x += 100) line("FURN", ox + x, z.t2, ox + x, z.t2 + 1050); // nan sắt đen
  rect("FURN", ox + 450, z.t2 + 1050, 4100, 40);
  face(42, "FURN", ox + 3700, z.t2 + 350, 1250, 700); // bồn cây be
  // tum: lan can tường trắng 0.45 + nan đen tới 1.10, bồn cây trái, trụ be + giàn pergola lam đen
  face(254, "WALL", ox, ZT, t, 1100), face(254, "WALL", ox + W - t, ZT, t, 1100);
  face(42, "FURN", ox + 300, ZT + 450, 1400, 350);
  face(254, "WALL", ox + t, ZT, W - 2 * t, 450);
  for (let x = 300; x < 4750; x += 100) line("FURN", ox + x, ZT + 450, ox + x, ZT + 1080);
  rect("FURN", ox + t, ZT + 1060, W - 2 * t, 40);
  face(42, "WALL", ox + W - t, ZT + 1100, 250, RF + 700 - ZT - 1100); // trụ be
  face(250, "FURN", ox + t, ZT + 1100, 100, RF + 300 - ZT - 1100); // cột đen
  face(250, "FURN", ox + t, RF + 180, W - 2 * t, 120); // dầm pergola
  for (let x = 300; x < 4800; x += 220) face(250, "FURN", ox + x, RF + 300, 50, 120); // đầu lam
  for (const l of LEVELS) text("TEXT", ox + W + 1500, l.z * M, 180, `${l.z >= 0 ? "+" : ""}${l.z.toFixed(2)}`);
  dim(ox, 0, ox + W, 0, 900);
  dim(ox, 0, ox, z.dinh, 900);
  text("TEXT", ox + W / 2, -2300, 350, "MẶT ĐỨNG MẶT TIỀN · TL 1:100");
}

// ── Chi tiết CT-03 … CT-05 (hàng dưới, đơn vị mm thật) ────────────────────
const BASE = -17000;
{
  // CT-03 cầu thang chữ U ba cạnh — (a) mặt cắt x 0.70 vế T1 → T2 qua hai chiếu nghỉ, (b) mặt bằng dải thang T1
  const ox = 0, F = CORE.flights.t1, n = F.lead + F.risers + F.tail, R = 3600 / n, T = TR, L = (F.risers - 1) * T;
  const ZL = F.lead * R, ZT = (F.lead + F.risers) * R, u = (y) => (y - F.y) * M; // trục ngang = y − chân cạnh 2
  const ha = u(CORE.holes.t2[0]), hb = u(CORE.holes.t2[1]), hl = hb - ha, la = u(CORE.landing.y[0]), tb = u(CORE.landing.top[1]);
  const step = [[ox + la, BASE], [ox + la, BASE + ZL], [ox, BASE + ZL]]; // khối chiếu nghỉ trước đặc
  for (let i = 1; i < F.risers; i++) step.push([ox + (i - 1) * T, BASE + ZL + i * R], [ox + i * T, BASE + ZL + i * R]);
  const sof = (uu) => ZL + (uu / T) * R - 250; // bụng bản cạnh 2 (= stairSoffit)
  step.push([ox + L, BASE + ZT], [ox + tb, BASE + ZT], [ox + tb, BASE + ZT - 200], [ox + L, BASE + ZT - 200]); // bản chiếu nghỉ sau 200
  step.push([ox + L, BASE + sof(L)], [ox, BASE + sof(0)], [ox, BASE], [ox + la, BASE]);
  poly("WALL", step);
  for (let k = 1; k < F.lead; k++) line("AXIS", ox + la, BASE + k * R, ox, BASE + k * R); // cạnh 1 sau mặt cắt (nét thấy)
  for (let k = 1; k < F.tail; k++) line("AXIS", ox + L, BASE + ZT + k * R, ox + tb, BASE + ZT + k * R); // cạnh 3 sau mặt cắt
  rect("WALL", ox - 1800, BASE + 3300, 1800 + ha, 300); // sàn T2 trước mép lỗ
  rect("WALL", ox + hb, BASE + 3300, 1500, 300); // sàn T2 sau lỗ (đầu thang)
  line("GLASS", ox, BASE + ZL + R + 900, ox + L, BASE + ZT + 900); // tay vịn 900
  line("GLASS", ox + L, BASE + ZT + 900, ox + L, BASE + 3600 + 900); // gấp lên theo cạnh 3
  line("SITE", ox - 1800, BASE, ox + la, BASE);
  dim(ox, BASE, ox + L, BASE, 500);
  dim(ox + la, BASE, ox, BASE, 500);
  dim(ox + L, BASE, ox + tb, BASE, 500);
  dim(ox + la, BASE, ox + la, BASE + ZL, 300);
  dim(ox - 1800, BASE, ox - 1800, BASE + 3600, 500);
  dim(ox + tb, BASE, ox + tb, BASE + ZT, -400);
  dim(ox, BASE + 3600, ox + ha, BASE + 3600, -400);
  textL("TEXT", ox + 200, BASE + 2900, 125, "Tay vịn 900 · lan can kính 1 100");
  textL("TEXT", ox + 2500, BASE + 300, 125, "BTCT 120 · gầm: khối tủ đặc cắt theo dốc");
  textL("TEXT", ox + la, BASE + ZL + 150, 110, `Chiếu nghỉ trước +${Math.round(ZL)}`);
  textL("TEXT", ox + L, BASE + ZT - 450, 110, `Chiếu nghỉ sau +${Math.round(ZT)} · bản 200`);
  // tủ gầm thang (mặt cắt x 0.70)
  for (const f of FURN.t1)
    if (f[0] === "r" && f[1] <= XA && XA <= f[1] + f[3] && f[2] >= F.y && f[2] < CORE.y1) cutCab(f, (y) => ox + u(y), BASE);
  textL("TEXT", ox + ha + 100, BASE + 3600 + 150, 110, `Mép lỗ sàn T2 y ${CORE.holes.t2[0].toFixed(2)}`);
  textL("TEXT", ox + la, BASE - 900, 110, `${n} cổ bậc × ${+R.toFixed(1)} · 2 chiếu nghỉ +${Math.round(ZL)} / +${Math.round(ZT)} · cạnh 1, cạnh 3: ${F.lead - 1} bậc ngang · cạnh 2: ${F.risers - 1} mặt bậc × ${T} = ${L}`);
  // (b) mặt bằng dải thang T1 (y 4.00–11.50, chiếu nghỉ trước ở dưới), x 0.20 = tường trái
  const px = ox + 8500, y0p = CORE.landing.y[0], P = (y) => BASE + (y - y0p) * M, X = (x) => px + (x - CORE.x[0]) * M, Lp = (CORE.y1 - y0p) * M;
  cutBox(px - 200, BASE, 200, Lp); // tường trái
  rect("WALL", px, P(y0p), CX[1] - CX[0], P(CORE.landing.top[1]) - P(y0p));
  for (const [a, b] of [CORE.landing.y, CORE.landing.top]) {
    line("FURN", px, P(a), X(CORE.x[1]), P(a)), line("FURN", px, P(b), X(CORE.x[1]), P(b));
    rect("WALL", X(CORE.x[1]), P(a), XF - CX[1], P(b) - P(a)); // cạnh 1 / cạnh 3
    for (const x of SIDE) line("FURN", px + x - CX[0], P(a), px + x - CX[0], P(b));
  }
  for (let i = 0; i < F.risers; i++) line("FURN", px, P(F.y) + i * T, px + 1000, P(F.y) + i * T);
  rect("FURN", X(1.98), P(3.9), 500, 1150); // bục gỗ
  poly("GLASS", [[X(XF / M), P(CORE.landing.y[1])], [X(CORE.x[1]), P(CORE.landing.y[1])], [X(CORE.x[1]), P(CORE.landing.top[0])], [X(XF / M), P(CORE.landing.top[0])]]); // lan can kính mép trong chữ U
  rect("AXIS", px, P(CORE.holes.t2[0]), 1000, hl); // lỗ sàn T2 phía trên
  rect("AXIS", X(CORE.tailHole.x[0]), P(CORE.tailHole.y[0]), TAIL[1] - TAIL[0], TAIL[3] - TAIL[2]); // lỗ thứ hai trên cạnh 3
  for (const [kind, x, y, w, d] of FURN.t1)
    if (kind === "r" && x < CORE.x[1] && x + w > CORE.x[0] && y >= CORE.y0 && y < CORE.y1) rect("DOOR", X(x), P(y), w * M, d * M);
  const sx = X((CORE.x[1] + XF / M) / 2), mx = X((CORE.x[0] + CORE.x[1]) / 2), ly = P(4.5), ty = P(9.4);
  poly("DOOR", [[sx, ly], [mx, ly], [mx, ty], [X(XF / M) - 150, ty]]), circle("DOOR", sx, ly, 60);
  dim(px, P(y0p), px + 1000, P(y0p), 500);
  dim(X(CORE.x[1]), P(y0p), X(XF / M), P(y0p), 500);
  dim(px + 1000, P(F.y), px + 1000, P(F.y) + L, -500);
  dim(px + 1000, P(y0p), px + 1000, P(y0p) + Lp, -1700);
  textL("TEXT", X(2.6), P(CORE.holes.t2[0]) + 300, 110, `Lỗ T2 1000 × ${Math.round(hl)} + ${Math.round(TAIL[1] - TAIL[0])} × ${Math.round(TAIL[3] - TAIL[2])}`);
  textL("TEXT", X(2.6), P(F.y) + 100, 110, "Gầm thang: khối tủ đặc");
  textL("TEXT", ox + la, BASE - 1150, 110, `Dải thang x ${CORE.x[0].toFixed(2)}–${CORE.x[1].toFixed(2)} · cạnh 1 x ${(XF / M).toFixed(2)} → ${CORE.x[1].toFixed(2)} · chiếu nghỉ y ${CORE.landing.y[0].toFixed(2)}–${CORE.landing.y[1].toFixed(2)} · cạnh 2 y ${F.y.toFixed(2)}–${flightTop("t1").toFixed(2)} · chiếu nghỉ y ${CORE.landing.top[0].toFixed(2)}–${CORE.landing.top[1].toFixed(2)} · cạnh 3 x ${CORE.x[1].toFixed(2)} → ${(XF / M).toFixed(2)} · vế T2 y ${CORE.flights.t2.y.toFixed(2)}–${flightTop("t2").toFixed(2)} chồng phía trên cạnh 2`);
  text("TEXT", ox + 4500, BASE - 1600, 250, "CT-03 · CẦU THANG CHỮ U BA CẠNH · TL 1:50");
}
{
  // CT-04 mái kính trùm lỗ sàn tum — mặt cắt ngang dải thang 1 000 (dọc 3 840)
  const ox = 16000, y0 = BASE, V = CX[1] - CX[0];
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
  textL("TEXT", ox, y0 - 900, 80, `Ô mái kính ${V} × ${Math.round(HOLE.tum[1] - HOLE.tum[0])} trùm lỗ sàn tum (y ${CORE.holes.tum[0].toFixed(2)}–${CORE.holes.tum[1].toFixed(2)})`);
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
  rect("WALL", ox, z.t1 - 200, 300, z.tum - z.t1 + 200); // hộp gen T1–T2; trên tum chỉ còn D60 âm tường
  for (const [x, d, top] of [[80, 110, z.t2 + 800], [220, 60, z.mai + 700]]) {
    line("GLASS", ox + x - d / 2, z.t1 - 600, ox + x - d / 2, top);
    line("GLASS", ox + x + d / 2, z.t1 - 600, ox + x + d / 2, top);
  }
  textL("TEXT", ox + 400, z.mai + 500, 125, "D60 thông hơi âm tường phải sảnh tum");
  textL("TEXT", ox + 400, z.t2 + 600, 125, "D110 · D90 · D60");
  textL("TEXT", ox + 400, z.t1 + 1600, 125, "Hộp gen 300×300 (x 4.50–4.80, y 10.10–10.40)");
  textL("TEXT", ox + 400, z.t1 + 1300, 125, "Góc sau phải WC T2 x 2.4–5.0 · y 8.4–10.4, ốp góc tường phải bếp T1");
  textL("TEXT", ox + 400, z.t1 + 1000, 125, "WC T1: dải riêng sát tường trái x 0–1.6 · y 18.0–21.8, thông thủy 1.30 × 3.60 (không chồng): xả thẳng vào hố ga / bể tự hoại sân sau");
  textL("TEXT", ox + 400, z.t1 + 700, 125, "D110 dưới nền T1 dọc hành lang, dốc 2% → hố ga");
  text("TEXT", ox + 150, BASE - 1400, 250, "CT-05 · HAI WC + HỘP GEN · TL 1:50");
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
