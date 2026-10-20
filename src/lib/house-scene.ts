import * as THREE from "three";
import { mergeGeometries, mergeVertices } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { CORE, FLOORS, FURN, HOUSE, RAILS, WALLS, riseOf, stairSoffit, type FloorId, type Furn, type FurnMat, type RoomKind } from "@/lib/house-data";

/* Mô hình 3D dựng thẳng từ house-data — toạ độ mặt bằng (x ngang, y sâu từ mặt tiền, z cao)
   đổi sang world three.js: X = x, Y = z, Z = y + sân trước 8 m.
   Mọi vật liệu nhà mang chung một "mực": phần chưa được camera tới vẽ như bản vẽ nét trên giấy. */

export const Y0 = HOUSE.yardFront;
export const ZF: Record<FloorId, number> = { t1: 0.45, t2: 4.05, tum: 7.35 };
export const ZC: Record<FloorId, number> = { t1: 3.75, t2: 7.05, tum: 10.05 };
export const ROOF = 10.35;
const SLAB = 0.3;

export const P = (x: number, y: number, z: number) => new THREE.Vector3(x, z, y + Y0);

type Span = [number, number];

export function buildHouse() {
  const scene = new THREE.Scene();
  const vec = () => ({ value: new THREE.Vector3(-100, -100, -100) });
  // uA: lộ vật liệu khi world Z < uA (mặt ngoài, theo tầng) · uLo..uHi: cửa sổ đã đi qua bên trong
  const ink = { uA: vec(), uLo: vec(), uHi: vec(), uPoche: { value: 1 } };
  const cut = new THREE.Plane(new THREE.Vector3(0, -1, 0), 1000);

  const INK_FN = /* glsl */ `
    uniform vec3 uA; uniform vec3 uLo; uniform vec3 uHi; uniform float uPoche;
    varying vec3 vWPos;
    float pick(vec3 v, int l) { return l == 0 ? v.x : (l == 1 ? v.y : v.z); }
    float inkK() {
      int l = vWPos.y < 3.9 ? 0 : (vWPos.y < 7.3 ? 1 : 2);
      float a = pick(uA, l), lo = pick(uLo, l), hi = pick(uHi, l), z = vWPos.z;
      float rev = 1.0 - smoothstep(a - 0.5, a + 0.5, z);
      float win = smoothstep(lo - 0.9, lo, z) * (1.0 - smoothstep(hi, hi + 0.9, z));
      return 1.0 - max(rev, win);
    }
    float hash(float n) { return fract(sin(n) * 43758.5453); }
    // màu sRGB muốn thấy → giá trị tuyến tính trước OutputPass (nghịch đảo ACES của three, exposure 1)
    vec3 unTone(vec3 c) {
      c = mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(0.04045, c));
      vec3 y = inverse(mat3(vec3(1.60475, -0.10208, -0.00327), vec3(-0.53108, 1.10813, -0.07276), vec3(-0.07367, -0.00605, 1.07602))) * c;
      vec3 a = 1.0 - 0.983729 * y, b = 0.0245786 - 0.432951 * y, k = -(0.000090537 + 0.238081 * y);
      vec3 x = (-b + sqrt(max(b * b - 4.0 * a * k, 0.0))) / (2.0 * a);
      return max(inverse(mat3(vec3(0.59719, 0.07600, 0.02840), vec3(0.35458, 0.90834, 0.13383), vec3(0.04823, 0.01566, 0.83777))) * x * 0.6, 0.0);
    }
  `;

  function patch(mat: THREE.Material, kind: "mesh" | "glass" | "line", pattern = 0) {
    mat.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, ink, { uPattern: { value: pattern } });
      sh.vertexShader =
        "varying vec3 vWPos;\n" +
        sh.vertexShader.replace(
          "#include <project_vertex>",
          "#include <project_vertex>\n vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;",
        );
      let f = INK_FN + "uniform float uPattern;\n" + sh.fragmentShader;
      f = f.replace(
        "#include <color_fragment>",
        /* glsl */ `#include <color_fragment>
        if (uPattern > 0.5 && uPattern < 1.5) { // ván sồi 190 mm chạy dọc nhà
          float px = vWPos.x / 0.19; float id = floor(px);
          float h = hash(id * 12.99 + floor((vWPos.z + id * 0.37) / 1.4) * 78.23);
          diffuseColor.rgb *= (0.9 + 0.17 * h) * (fract(px) < 0.025 ? 0.8 : 1.0);
        } else if (uPattern > 1.5 && uPattern < 2.5) { // đá lát 600 × 600
          vec2 q = vWPos.xz / 0.6; vec2 g = fract(q);
          float h = hash(dot(floor(q), vec2(7.1, 3.7)));
          diffuseColor.rgb *= (0.92 + 0.12 * h) * ((g.x < 0.02 || g.y < 0.02) ? 0.82 : 1.0);
        } else if (uPattern > 2.5 && uPattern < 3.5) { // thớ teak
          diffuseColor.rgb *= 0.95 + 0.05 * sin(vWPos.y * 60.0 + sin(vWPos.x * 9.0 + vWPos.z * 7.0) * 3.0);
        } else if (uPattern > 3.5 && uPattern < 4.5) { // đá marble trắng 800 × 800, vân xám
          vec2 q = (vWPos.xz + vec2(vWPos.y * 0.7)) / 0.8; vec2 g = fract(q);
          float v = sin(q.x * 2.3 + q.y * 0.9 + sin(q.y * 1.7 + q.x * 0.6) * 2.1);
          float vein = smoothstep(0.93, 1.0, abs(v)) * 0.16 + smoothstep(0.985, 1.0, abs(sin(q.x * 5.1 - q.y * 3.3))) * 0.08;
          diffuseColor.rgb *= (1.0 - vein) * ((g.x < 0.006 || g.y < 0.006) ? 0.9 : 1.0);
        } else if (uPattern > 4.5 && uPattern < 5.5) { // sàn gỗ xương cá 450 × 90
          float col = floor(vWPos.x / 0.45); float lx = vWPos.x - col * 0.45;
          float fy = vWPos.z + (mod(col, 2.0) < 1.0 ? lx : 0.45 - lx);
          float id = floor(fy / 0.09);
          float h = hash(id * 7.31 + col * 31.7);
          diffuseColor.rgb *= (0.88 + 0.18 * h) * ((fract(fy / 0.09) < 0.07 || lx < 0.006) ? 0.78 : 1.0);
        } else if (uPattern > 5.5) { // gạch kính 190 × 190
          vec2 g = fract(vWPos.zy / 0.2);
          diffuseColor.rgb *= (g.x < 0.06 || g.y < 0.06) ? 0.82 : 1.0;
        }`,
      );
      const out =
        kind === "line"
          ? "gl_FragColor.a *= mix(0.025, 0.85, inkK());"
          : /* glsl */ `{
          float k = inkK();
          float shade = 0.86 + 0.14 * clamp(normal.z * 0.6 + normal.y * 0.4, 0.0, 1.0);
          gl_FragColor.rgb = mix(gl_FragColor.rgb, unTone(vec3(0.957, 0.945, 0.918) * shade), k);
          ${kind === "glass" ? "gl_FragColor.a = mix(gl_FragColor.a, 0.06, k);" : ""}
          if (!gl_FrontFacing) gl_FragColor.rgb = mix(gl_FragColor.rgb, unTone(vec3(0.11, 0.10, 0.09)), uPoche);
        }`;
      sh.fragmentShader = f.replace("#include <dithering_fragment>", out + "\n#include <dithering_fragment>");
    };
    mat.customProgramCacheKey = () => `ink-${kind}`;
    mat.clippingPlanes = [cut];
    mat.clipShadows = true;
  }

  const std = (color: string, roughness: number, pattern = 0, extra: THREE.MeshStandardMaterialParameters = {}) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness, side: THREE.DoubleSide, ...extra });
    patch(m, "mesh", pattern);
    return m;
  };
  const mats = {
    plaster: std("#efe9de", 0.92),
    plasterIn: std("#f5f1e9", 0.95),
    oak: std("#cfb48f", 0.62, 1),
    oakF: std("#c9ab84", 0.6),
    teak: std("#8a6a48", 0.68, 3),
    stone: std("#9a958c", 0.88, 2),
    tile: std("#d9d6cf", 0.4, 2),
    paving: std("#b3ada2", 0.95, 2),
    asphalt: std("#4f4e4b", 1),
    charcoal: std("#2b2b2b", 0.5, 0, { metalness: 0.4 }),
    fabric: std("#bdb5a6", 1),
    white: std("#f2f0ec", 0.35),
    dark: std("#33363a", 0.35, 0, { metalness: 0.3 }),
    car: std("#5f666e", 0.28, 0, { metalness: 0.55 }),
    green: std("#56704c", 0.85),
    grass: std("#6f8460", 1),
    trunk: std("#6b5844", 1),
    marble: std("#ece9e4", 0.22, 4),
    herring: std("#c6ab88", 0.6, 5),
    cabinet: std("#e4d5c2", 0.28),
    leather: std("#d6c6b2", 0.55),
    black: std("#1f1f20", 0.28, 0, { metalness: 0.25 }),
    bronze: std("#a8865a", 0.35, 0, { metalness: 0.7 }),
    beige: std("#cdbda8", 0.85),
    rug: std("#8d8984", 1),
    linen: std("#f3f0ea", 0.95),
    chrome: std("#d8d8d6", 0.15, 0, { metalness: 1 }),
    flower: std("#e8907f", 0.8),
    screen: std("#efe2c4", 0.3, 0, { emissive: "#b89a6a", emissiveIntensity: 0.7 }),
    pillow: std("#9f9a93", 0.9),
    led: std("#fff1d6", 0.5, 0, { emissive: "#ffd49a", emissiveIntensity: 1.8 }),
    block: (() => {
      const m = new THREE.MeshStandardMaterial({ color: "#e4eceb", roughness: 0.2, transparent: true, opacity: 0.62, depthWrite: false, side: THREE.DoubleSide });
      patch(m, "glass", 6);
      return m;
    })(),
    glass: new THREE.MeshStandardMaterial({
      color: "#bfd2d6",
      roughness: 0.05,
      metalness: 0.2,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  };
  patch(mats.glass, "glass");
  type Mat = keyof typeof mats;

  const line = new THREE.LineBasicMaterial({ color: "#1c1a17", transparent: true, depthWrite: false });
  patch(line, "line");
  const ctx = new THREE.MeshStandardMaterial({ color: "#ebe6dc", roughness: 1, clippingPlanes: [cut], clipShadows: true });
  const ctxLine = new THREE.LineBasicMaterial({ color: "#8f887f", transparent: true, opacity: 0.45, clippingPlanes: [cut] });

  const unit = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
  const unitEdges = new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1));
  const bins = new Map<THREE.Material, THREE.BufferGeometry[]>();
  const push = <T,>(map: Map<T, THREE.BufferGeometry[]>, k: T, g: THREE.BufferGeometry) => {
    const list = map.get(k) ?? [];
    list.push(g);
    map.set(k, list);
  };
  const m4 = new THREE.Matrix4();
  const q0 = new THREE.Quaternion();

  function add(geo: THREE.BufferGeometry, edges: THREE.BufferGeometry | null, mat: THREE.Material, lm: THREE.Material) {
    push(bins, mat, geo.index ? geo.toNonIndexed() : geo);
    if (edges) push(bins, lm, edges);
  }

  // khối hộp theo toạ độ mặt bằng; round > 0: bo cạnh (m) để mép đồ bắt sáng như thật
  function box(x: Span, y: Span, z: Span, m: Mat | THREE.Material, edges = true, round = 0) {
    const mat = typeof m === "string" ? mats[m] : m;
    const w = Math.max(0.002, x[1] - x[0]),
      d = Math.max(0.002, y[1] - y[0]),
      h = Math.max(0.002, z[1] - z[0]);
    const c = P((x[0] + x[1]) / 2, (y[0] + y[1]) / 2, (z[0] + z[1]) / 2);
    m4.compose(c, q0, new THREE.Vector3(w, h, d));
    const lm = mat === ctx ? ctxLine : line;
    const r = Math.min(round, Math.min(w, h, d) / 2.5);
    const geo = r > 0.002 ? new RoundedBoxGeometry(w, h, d, 3, r).translate(c.x, c.y, c.z) : unit.clone().applyMatrix4(m4);
    add(geo, edges ? unitEdges.clone().applyMatrix4(m4) : null, mat, lm);
  }
  // dầm/tay vịn nghiêng giữa hai điểm (toạ độ mặt bằng)
  function beam(a: [number, number, number], b: [number, number, number], t: number, m: Mat) {
    const pa = P(...a), pb = P(...b);
    const dir = pb.clone().sub(pa);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir.clone().normalize());
    m4.compose(pa.clone().add(pb).multiplyScalar(0.5), q, new THREE.Vector3(t, t, dir.length()));
    add(unit.clone().applyMatrix4(m4), unitEdges.clone().applyMatrix4(m4), mats[m], line);
  }
  function cyl(x: number, y: number, r: number, z: Span, m: Mat) {
    const g = new THREE.CylinderGeometry(r, r, z[1] - z[0], 28);
    g.translate(x, (z[0] + z[1]) / 2, y + Y0);
    add(g, new THREE.EdgesGeometry(g, 30), mats[m], line);
  }
  function tree(x: number, y: number, r: number, h: number, base = 0) {
    box([x - 0.05, x + 0.05], [y - 0.05, y + 0.05], [base, base + h], "trunk");
    // tán lá: cầu chia mịn, đẩy lồi lõm theo nhiễu để ra từng chùm lá thay vì khối đa giác
    const ico = new THREE.IcosahedronGeometry(r, 4);
    ico.deleteAttribute("normal");
    ico.deleteAttribute("uv");
    const g = mergeVertices(ico);
    const p = g.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const v = new THREE.Vector3().fromBufferAttribute(p, i);
      const n = Math.sin(v.x * 7 + x) * Math.sin(v.y * 6 + y) * Math.sin(v.z * 8) + 0.5 * Math.sin(v.x * 17 - v.z * 13 + v.y * 11);
      v.multiplyScalar(1 + 0.12 * n);
      p.setXYZ(i, v.x, v.y, v.z);
    }
    g.scale(1, 0.85, 1);
    g.computeVertexNormals();
    g.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2)); // gộp chung bin với hộp
    g.translate(x, base + h + r * 0.6, y + Y0);
    add(g, new THREE.EdgesGeometry(g, 50), mats.green, line);
  }
  // mặt sàn có lỗ: chia lưới theo mép lỗ, gộp ô liền nhau theo hàng
  function slab(x: Span, y: Span, z: Span, holes: [Span, Span][], m: Mat = "plaster", edges = true) {
    const xs = [...new Set([x[0], x[1], ...holes.flatMap((h) => h[0])])].sort((a, b) => a - b);
    const ys = [...new Set([y[0], y[1], ...holes.flatMap((h) => h[1])])].sort((a, b) => a - b);
    const inHole = (cx: number, cy: number) => holes.some(([hx, hy]) => cx > hx[0] && cx < hx[1] && cy > hy[0] && cy < hy[1]);
    for (let j = 0; j < ys.length - 1; j++) {
      let run: number | null = null;
      for (let i = 0; i <= xs.length - 1; i++) {
        const solid = i < xs.length - 1 && !inHole((xs[i] + xs[i + 1]) / 2, (ys[j] + ys[j + 1]) / 2);
        if (solid && run === null) run = xs[i];
        if (!solid && run !== null) {
          box([run, xs[i]], [ys[j], ys[j + 1]], z, m, edges);
          run = null;
        }
      }
    }
  }

  // lăng trụ: đa giác [y, z] trong mặt cắt dọc, đùn theo x — tủ gầm thang, bản thang, kính lan can nghiêng
  function prism(x: Span, pts: [number, number][], m: Mat, edges = true) {
    const s = new THREE.Shape(pts.map(([y, z]) => new THREE.Vector2(y, z)));
    const g = new THREE.ExtrudeGeometry(s, { depth: x[1] - x[0], bevelEnabled: false });
    // (u, v, w) → world (x1 − w, v, u + Y0): hoán trục giữ chiều mặt (det = +1)
    g.applyMatrix4(new THREE.Matrix4().set(0, 0, -1, x[1], 0, 1, 0, 0, 1, 0, 0, Y0, 0, 0, 0, 1));
    add(g, edges ? new THREE.EdgesGeometry(g, 20) : null, mats[m], line);
  }
  // lăng trụ đùn theo y: đa giác [x, z] — kính lan can đoạn thang ngang
  function prismX(y: Span, pts: [number, number][], m: Mat, edges = true) {
    const g = new THREE.ExtrudeGeometry(new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, z))), { depth: y[1] - y[0], bevelEnabled: false });
    g.translate(0, 0, y[0] + Y0);
    add(g, edges ? new THREE.EdgesGeometry(g, 20) : null, mats[m], line);
  }
  // hộp bị cắt đỉnh theo mặt dưới thang T1 (tủ gầm thang)
  const soffitAbs = (y: number) => ZF.t1 + stairSoffit(y);
  const yAtSoffit = (z: number) => CORE.flights.t1.y + ((z - ZF.t1 + 0.25) / riseOf("t1") - CORE.flights.t1.lead) * CORE.tread;
  function underStair(x: Span, y: Span, z: Span, m: Mat, edges = true) {
    const top = (yy: number) => Math.max(z[0] + 0.01, Math.min(z[1], soffitAbs(yy)));
    const yc = yAtSoffit(z[1]);
    const mid: [number, number][] = yc > y[0] && yc < y[1] ? [[yc, z[1]]] : [];
    prism(x, [[y[0], z[0]], [y[1], z[0]], [y[1], top(y[1])], ...mid, [y[0], top(y[0])]], m, edges);
  }

  /* ── bối cảnh: phố, vỉa hè, nhà bên ─────────────────────────────── */
  box([-60, 60], [-60, 60], [-0.22, -0.17], ctx, false);
  box([-30, 35], [-21, -9.3], [-0.17, -0.15], "asphalt", false);
  box([-30, 35], [-9.3, -8], [-0.15, 0], "paving");
  box([-30, 35], [-22.3, -21], [-0.15, 0], ctx);
  for (const [x, y, z] of [
    [[-6.4, -0.2], [-1, 19], 8.2],
    [[-13, -6.6], [1.5, 20], 6.4],
    [[5.2, 11.2], [0.5, 18.5], 7.4],
    [[11.4, 17.5], [-1.2, 17], 10.2],
    [[-12, 18], [24, 34], 10.5],
  ] as [Span, Span, number][]) {
    box(x, y, [0, z], ctx);
  }

  /* ── sân trước 8 m: cổng, xe, tiểu cảnh, tam cấp ─────────────────── */
  box([0, 5], [-8, 0], [-0.04, 0], "paving");
  box([-0.2, 0], [-8, 0], [0, 2.2], "plaster");
  box([5, 5.2], [-8, 0], [0, 2.2], "plaster");
  box([0, 0.16], [-8.08, -7.88], [0, 2.1], "charcoal");
  box([4.84, 5], [-8.08, -7.88], [0, 2.1], "charcoal");
  box([-0.2, 5.2], [-8.25, -7.75], [2.2, 2.5], "plaster"); // khung cổng trắng như ảnh mặt tiền
  box([-0.2, 0.1], [-8.25, -7.75], [0, 2.2], "plaster");
  box([4.9, 5.2], [-8.25, -7.75], [0, 2.2], "plaster");
  box([0.2, 3.5], [-2.5, -1.1], [0, 0.06], "grass");
  box([3.8, 4.8], [-2.5, 0], [0.0, 0.03], "stone");
  tree(1.7, -1.7, 0.7, 1.5); // cây tán trong bồn cỏ, tránh lối đi bên phải
  tree(0.6, -2.0, 0.4, 0.8);
  tree(3.0, -1.4, 0.3, 0.5);
  // xe sedan đỗ dọc
  box([0.7, 2.5], [-7.2, -2.6], [0.22, 0.92], "car");
  box([0.85, 2.35], [-5.9, -3.8], [0.92, 1.4], "glass");
  box([0.85, 2.35], [-5.85, -3.85], [1.38, 1.43], "car");
  for (const [x, y] of [[0.75, -6.4], [2.45, -6.4], [0.75, -3.4], [2.45, -3.4]] as [number, number][]) {
    const g = new THREE.CylinderGeometry(0.32, 0.32, 0.22, 20);
    g.rotateZ(Math.PI / 2);
    g.translate(x, 0.32, y + Y0);
    add(g, null, mats.dark, line);
  }
  for (let i = 0; i < 3; i++) box([1.2, 3.8], [-0.9 + i * 0.3, 0], [0, 0.15 * (i + 1)], "stone");

  /* ── sân sau 4 m ─────────────────────────────────────────────────── */
  box([0, 5], [18, 22], [0, 0.04], "grass");
  box([-0.2, 5.2], [21.8, 22], [0, 2.4], "plaster");
  box([-0.2, 0], [18, 21.8], [0, 2.4], "plaster");
  box([5, 5.2], [18, 21.8], [0, 2.4], "plaster");
  // khối WC cuối sân (tường từ WALLS.t1): nền +0.45 bằng nền nhà, mái bằng, mái kính che lối từ cửa sau sang cửa WC
  // dải WC dọc tường trái nối liền sau phòng ngủ (tường từ WALLS.t1), mái kính che lối từ cửa sau sang cửa WC
  box([0, 1.6], [18.0, 21.8], [0, ZF.t1], "plaster");
  box([-0.05, 1.68], [18.0, 21.85], [ZF.t1 + 2.6, ZF.t1 + 2.78], "plaster");
  box([1.6, 2.0], [18.4, 19.1], [0, 0.3], "stone"); // bậc lên cửa WC
  box([2.0, 2.4], [18.4, 19.1], [0, 0.15], "stone");
  box([2.5, 3.6], [18.5, 19.0], [0.04, 0.07], "stone");
  box([1.6, 4.8], [18.0, 19.4], [ZF.t1 + 2.5, ZF.t1 + 2.52], "glass");
  box([1.6, 4.8], [19.34, 19.4], [ZF.t1 + 2.44, ZF.t1 + 2.54], "charcoal");
  box([4.74, 4.8], [19.34, 19.4], [0.04, ZF.t1 + 2.44], "charcoal");
  tree(3.2, 20.6, 0.6, 1.4);
  tree(4.3, 21.2, 0.35, 0.8);

  /* ── nền, sàn, mái ──────────────────────────────────────────────── */
  // thang chữ U sát tường: lỗ sàn T2 trên vế dài + chiếu nghỉ sau (+ ô trên cạnh 3), lỗ tum trên vế T2, mái kính trùm lỗ tum — giếng trời chính là dải thang
  const holeAt = (id: "t2" | "tum"): [Span, Span] => [[CORE.x[0], CORE.x[1]], [CORE.holes[id][0], CORE.holes[id][1]]];
  const tailHole: [Span, Span] = [[CORE.tailHole.x[0], CORE.tailHole.x[1]], [CORE.tailHole.y[0], CORE.tailHole.y[1]]];
  const holesOf: Record<FloorId, [Span, Span][]> = { t1: [], t2: [holeAt("t2"), tailHole], tum: [holeAt("tum")] };
  const well = holeAt("tum");
  box([0, 5], [0, 18], [0, ZF.t1], "stone");
  slab([0, 5], [0, 18], [ZF.t2 - SLAB, ZF.t2], holesOf.t2);
  slab([0, 5], [0, 18], [ZF.tum - SLAB, ZF.tum], holesOf.tum);
  slab([0, 5], [4.5, 13.8], [ROOF - SLAB, ROOF], [well]);

  // lớp hoàn thiện sàn theo công năng phòng
  // khách, bếp, sảnh: đá marble trắng như ảnh mẫu · phòng ngủ: gỗ xương cá
  const finish: Partial<Record<RoomKind, Mat>> = {
    living: "marble", kitchen: "marble", bed: "herring", worship: "oak", hall: "marble", stair: "marble", wc: "tile", service: "tile", void: "stone",
  };
  for (const floor of FLOORS) {
    const zf = ZF[floor.id];
    for (const r of floor.rooms) {
      if (r.kind === "void" && floor.id !== "t1") continue;
      const m = r.kind === "outdoor" ? (r.id === "tum-dry" ? "stone" : "teak") : finish[r.kind];
      if (!m) continue;
      const enclosed = r.kind !== "outdoor";
      const y0 = floor.id === "t1" && r.y === 0 ? 0.6 : r.y;
      const y1 = enclosed && r.y < 18 && r.y + r.h >= 18 ? 17.8 : r.y + r.h;
      const top = r.kind === "stair" ? 0.025 : 0.02; // dải thang nằm đè lên phòng bên cạnh
      // lớp lát chừa đúng lỗ sàn thang (tách theo lưới như sàn BTCT)
      slab([Math.max(0.2, r.x), Math.min(4.8, r.x + r.w)], [y0, y1], [zf, zf + top], holesOf[floor.id], m, false);
    }
  }

  /* ── vỏ nhà ─────────────────────────────────────────────────────── */
  for (const xw of [[0, 0.2], [4.8, 5]] as Span[]) {
    box(xw, [0, 18], [ZF.t1, ZC.t1], "plaster");
    box(xw, [0, 18], [ZF.t2, ZC.t2], "plaster");
    box(xw, [4.5, 13.8], [ZF.tum, ZC.tum], "plaster");
    box(xw, [0, 4.5], [ZF.tum, ZF.tum + 1.1], "plaster");
    box(xw, [13.8, 18], [ZF.tum, ZF.tum + 1.1], "plaster");
    box(xw, [4.5, 13.8], [ROOF, 11.2], "plaster");
  }
  box([0.2, 4.8], [4.5, 4.7], [ROOF, 11.2], "plaster");
  box([0.2, 4.8], [13.6, 13.8], [ROOF, 11.2], "plaster");

  // tường hậu: T1 kín (phòng ông bà không mở cửa sổ ra sân) + cửa ra sân sau cuối lối đi; T2 cửa sổ 3.20 m
  const rear = (zf: number, zc: number, w: Span, door: boolean) => {
    box([0.2, w[0]], [17.8, 18], [zf, zc], "plaster");
    if (w[1] > w[0]) {
      box([w[1], door ? 3.85 : 4.8], [17.8, 18], [zf, zc], "plaster");
      box([...w], [17.8, 18], [zf, zf + 0.45], "plaster");
      box([...w], [17.8, 18], [zf + 2.25, zc], "plaster");
      box([...w], [17.88, 17.92], [zf + 0.45, zf + 2.25], "glass");
    }
    if (door) {
      box([3.85, 4.75], [17.8, 18], [zf + 2.2, zc], "plaster");
      box([4.75, 4.8], [17.8, 18], [zf, zc], "plaster");
      box([3.85, 4.75], [18, 18.6], [0.04, ZF.t1 - 0.15], "stone"); // bậc xuống sân sau
    }
  };
  rear(ZF.t1, ZC.t1, [3.85, 3.85], true);
  rear(ZF.t2, ZC.t2, [0.9, 4.1], false);
  box([0.2, 4.8], [17.8, 18], [ZF.tum, ZF.tum + 1.1], "plaster");

  // mặt tiền T1: kính trượt 4.20 m lùi 0.60 m
  box([0.2, 0.4], [0.5, 0.7], [ZF.t1, ZC.t1], "plaster");
  box([4.6, 4.8], [0.5, 0.7], [ZF.t1, ZC.t1], "plaster");
  box([0.4, 4.6], [0.5, 0.7], [ZF.t1 + 2.7, ZC.t1], "beige"); // ốp đá be trên kính như ảnh mặt tiền
  box([0.4, 2.5], [0.6, 0.63], [ZF.t1, ZF.t1 + 2.7], "glass");
  box([0.4, 4.6], [0.53, 0.66], [ZF.t1, ZF.t1 + 0.03], "charcoal");
  box([2.48, 2.52], [0.58, 0.65], [ZF.t1, ZF.t1 + 2.7], "charcoal");
  box([0.2, 4.8], [-0.6, 0.5], [ZF.t2 - 0.47, ZF.t2 - 0.45], "teak", false); // trần gỗ hiên T1

  // mặt tiền T2: khung trắng bo cong nhô 0.60 m ôm loggia, lan can nan đen, bồn cây be bên phải
  const rr = (s: THREE.Path, x0: number, y0: number, x1: number, y1: number, [bl, br, tr, tl]: number[]) => {
    s.moveTo(x0 + bl, y0);
    s.lineTo(x1 - br, y0);
    s.quadraticCurveTo(x1, y0, x1, y0 + br);
    s.lineTo(x1, y1 - tr);
    s.quadraticCurveTo(x1, y1, x1 - tr, y1);
    s.lineTo(x0 + tl, y1);
    s.quadraticCurveTo(x0, y1, x0, y1 - tl);
    s.lineTo(x0, y0 + bl);
    s.quadraticCurveTo(x0, y0, x0 + bl, y0);
  };
  const frame = new THREE.Shape();
  rr(frame, 0, ZF.t2 - 0.45, 5, ZF.tum, [0.15, 0.15, 0.75, 0.15]);
  const hole = new THREE.Path();
  rr(hole, 0.45, ZF.t2 - 0.05, 4.55, ZF.tum - 0.45, [0.75, 0.1, 0.1, 0.1]);
  frame.holes.push(hole);
  const fg = new THREE.ExtrudeGeometry(frame, { depth: 0.6, bevelEnabled: false, curveSegments: 10 });
  fg.translate(0, 0, Y0 - 0.6);
  add(fg, new THREE.EdgesGeometry(fg, 20), mats.plaster, line);
  box([0.45, 4.55], [-0.6, 1.0], [ZF.tum - 0.47, ZF.tum - 0.45], "teak", false); // trần gỗ loggia
  for (let x = 0.5; x < 4.55; x += 0.1) box([x, x + 0.02], [-0.32, -0.3], [ZF.t2, ZF.t2 + 1.05], "charcoal", false);
  box([0.45, 4.55], [-0.34, -0.28], [ZF.t2 + 1.05, ZF.t2 + 1.09], "charcoal");
  box([0.45, 4.55], [-0.6, 0], [ZF.t2 - 0.05, ZF.t2], "teak", false);
  box([3.7, 4.95], [-1.0, -0.35], [ZF.t2 + 0.35, ZF.t2 + 1.05], "beige");
  tree(4.3, -0.68, 0.38, 0.15, ZF.t2 + 1.05);
  box([0.2, 4.8], [1.08, 1.12], [ZF.t2, ZC.t2 - 0.3], "glass");
  box([0.2, 4.8], [1.0, 1.2], [ZC.t2 - 0.3, ZC.t2], "plaster");
  for (const x of [1.73, 3.27]) box([x - 0.02, x + 0.02], [1.06, 1.14], [ZF.t2, ZC.t2 - 0.3], "charcoal");
  box([0.25, 0.75], [1.2, 1.32], [ZF.t2, ZC.t2 - 0.32], "fabric"); // rèm master
  box([4.25, 4.75], [1.2, 1.32], [ZF.t2, ZC.t2 - 0.32], "fabric");
  // tum: lan can tường trắng + nan đen, bồn cây trái, giàn pergola lam đen tựa trụ be cao bên phải
  box([0.2, 4.8], [-0.1, 0.1], [ZF.tum, ZF.tum + 0.45], "plaster");
  for (let x = 0.3; x < 4.75; x += 0.1) box([x, x + 0.02], [-0.01, 0.01], [ZF.tum + 0.45, ZF.tum + 1.08], "charcoal", false);
  box([0.2, 4.8], [-0.03, 0.03], [ZF.tum + 1.06, ZF.tum + 1.1], "charcoal");
  box([0.3, 1.7], [0.15, 0.85], [ZF.tum, ZF.tum + 0.8], "beige");
  tree(1.0, 0.5, 0.5, 0.5, ZF.tum + 0.8);
  box([4.8, 5.05], [-0.2, 4.5], [ZF.tum + 1.1, ROOF + 0.7], "beige");
  box([0.2, 0.3], [-0.1, 0.0], [ZF.tum + 1.1, ROOF + 0.3], "charcoal");
  for (const y of [-0.15, 4.35]) box([0.2, 4.8], [y, y + 0.12], [ROOF + 0.18, ROOF + 0.3], "charcoal");
  for (let x = 0.3; x < 4.8; x += 0.22) box([x, x + 0.05], [-0.3, 4.5], [ROOF + 0.3, ROOF + 0.42], "charcoal");
  box([0.2, 1.9], [4.48, 4.52], [ZF.tum, ZC.tum - 0.3], "glass");
  box([3.1, 4.8], [4.48, 4.52], [ZF.tum, ZC.tum - 0.3], "glass");
  box([0.2, 4.8], [4.4, 4.6], [ZC.tum - 0.3, ZC.tum], "plaster");
  for (const x of [1.9, 3.1]) box([x - 0.03, x + 0.03], [4.45, 4.55], [ZF.tum, ZC.tum - 0.3], "charcoal");

  /* ── tường ngăn, lan can, thang (từ house-data) ───────────────────── */
  for (const floor of FLOORS) {
    const zf = ZF[floor.id], zc = ZC[floor.id];
    for (const [axis, at, a0, a1, gaps = [], mm = 100, high] of WALLS[floor.id]) {
      const t = mm / 2000;
      const top = high === undefined ? zc : zf + high;
      const seg = (a: number, b: number, z: Span, m: Mat) =>
        axis === "h" ? box([a, b], [at - t, at + t], z, m) : box([at - t, at + t], [a, b], z, m);
      const glassT = 0.015;
      let from = a0;
      const piece = (a: number, b: number, kind: "solid" | "door" | "glass" | "block") => {
        if (kind === "solid") seg(a, b, [zf, top], "plasterIn");
        if (kind === "door") seg(a, b, [zf + 2.1, top], "plasterIn");
        if (kind === "block") seg(a, b, [zf, zc], "block");
        if (kind === "glass") {
          if (axis === "h") box([a, b], [at - glassT, at + glassT], [zf, zc], "glass");
          else box([at - glassT, at + glassT], [a, b], [zf, zc], "glass");
        }
      };
      for (const [s, e, kind] of [...gaps].sort((p, q) => p[0] - q[0])) {
        if (s > from) piece(from, s, "solid");
        piece(s, e, kind);
        from = e;
      }
      if (a1 > from) piece(from, a1, "solid");
    }
    for (const [x0, y0, x1, y1] of RAILS[floor.id]) {
      const g = 0.012;
      box(x0 === x1 ? [x0 - g, x0 + g] : [x0, x1], y0 === y1 ? [y0 - g, y0 + g] : [y0, y1], [zf, zf + 1.1], "glass");
      beam([x0, y0, zf + 1.1], [x1, y1, zf + 1.1], 0.04, "bronze");
    }
  }

  // thang chữ U ba cạnh như ảnh mẫu: bục gỗ → cạnh 1: 3 bậc ngang đá trắng đặc → chiếu nghỉ góc trước → cạnh 2: vế dài bậc bay
  // hắt LED dọc tường → chiếu nghỉ góc sau → cạnh 3: 3 bậc bay quay ra phía trong lên sàn T2. Lan can kính gấp tại mỗi chiếu nghỉ.
  // Vế lên tum (thẳng) chồng trên cạnh 2
  for (const [id, za, zb] of [["t1", ZF.t1, ZF.t2], ["t2", ZF.t2, ZF.tum]] as const) {
    const { y: ys, risers, lead: L } = CORE.flights[id];
    const R = riseOf(id), T = CORE.tread, X: Span = [CORE.x[0], CORE.x[1]];
    for (let i = 1; i < risers; i++) {
      const top = za + (L + i) * R, y0 = ys + (i - 1) * T;
      box(X, [y0, y0 + T], [top - 0.07, top], "marble", true, 0.006);
      box(X, [y0 + 0.01, y0 + 0.05], [top - 0.085, top - 0.07], "led", false);
    }
    const yTop = ys + (risers - 1) * T;
    // bản thang trắng liền dưới bậc + kính lan can một tấm theo dốc (như ảnh mẫu), tay vịn đồng trên mép kính
    const U = (y: number) => za + R * (L + (y - ys) / T) - 0.07; // qua mép sau-dưới mọi bậc: bậc nhô hẳn lên như bậc bay
    const yAt = (dz: number) => ys + (dz * T) / R; // khi L = 0: U(y) − za = dz − 0.07
    const waist: [number, number][] = L
      ? [[ys, U(ys) - 0.16], [yTop, U(yTop) - 0.16], [yTop, U(yTop)], [ys, U(ys)]]
      : [[yAt(0.07), za], [yAt(0.23), za], [yTop, U(yTop) - 0.16], [yTop, U(yTop)]];
    prism(X, waist, "plasterIn");
    const g0: [number, number][] = L ? [[ys, U(ys) - 0.16]] : [[ys, za + 0.02], [yAt(0.25), za + 0.02]];
    prism([X[1] - 0.01, X[1] + 0.01], [...g0, [yTop, U(yTop) - 0.16], [yTop, U(yTop) + 1.1], [ys, U(ys) + 1.1]], "glass", false);
    beam([X[1], ys, U(ys) + 1.1], [X[1], yTop, U(yTop) + 1.1], 0.045, "bronze");
    if (!L) continue;
    // chiếu nghỉ + đoạn ngang: khối đá đặc, cổ bậc hắt LED; bậc k ở x [1.2 + (L−1−k)·T, 1.2 + (L−k)·T]
    const [ly0, ly1] = CORE.landing.y, zl = za + L * R;
    box(X, [ly0, ly1], [za, zl], "marble");
    for (let k = 1; k < L; k++) {
      const x0 = X[1] + (L - 1 - k) * T;
      box([x0, x0 + T], [ly0, ly1], [za, za + k * R], "marble");
      box([x0 + T - 0.04, x0 + T - 0.01], [ly0 + 0.01, ly1 - 0.01], [za + k * R - 0.03, za + k * R - 0.015], "led", false);
    }
    const xf = X[1] + (L - 1) * T; // mép ngoài bậc thấp nhất
    const N = (x: number) => za + R * (L - (x - X[1]) / T) + 1.0; // đỉnh kính theo mũi bậc đoạn ngang
    for (const y of [ly0, ly1]) {
      const pts: [number, number][] = [[xf + 0.1, za + 0.02], [y === ly0 ? X[0] : X[1], za + 0.02], ...(y === ly0 ? [[X[0], zl + 1.0] as [number, number]] : []), [X[1], zl + 1.0], [xf + 0.1, N(xf + 0.1)]];
      prismX([y - 0.01, y + 0.01], pts, "glass", false);
    }
    beam([xf + 0.1, ly0, N(xf + 0.1)], [X[1], ly0, zl + 1.0], 0.045, "bronze");
    beam([X[1], ly0, zl + 1.0], [X[0], ly0, zl + 1.0], 0.045, "bronze");
    beam([xf + 0.1, ly1, N(xf + 0.1)], [X[1], ly1, zl + 1.0], 0.045, "bronze");
    // chiếu nghỉ sau (bản treo 200 trên tủ gầm thang) + cạnh 3: bậc k ở x [1.2 + (k−1)·T, 1.2 + k·T]
    const { tail: Tn } = CORE.flights[id], [ty0, ty1] = CORE.landing.top, zt = za + (L + risers) * R;
    box(X, [ty0, ty1], [zt - 0.2, zt], "marble");
    box(X, [ty0, ty0 + 0.04], [zt - 0.215, zt - 0.2], "led", false);
    for (let k = 1; k < Tn; k++) {
      const x0 = X[1] + (k - 1) * T, top = zt + k * R;
      box([x0, x0 + T], [ty0, ty1], [top - 0.07, top], "marble");
      box([x0 + 0.01, x0 + 0.05], [ty0 + 0.01, ty1 - 0.01], [top - 0.085, top - 0.07], "led", false);
    }
    const xe = X[1] + (Tn - 1) * T; // mép sàn T2 nơi cạnh 3 đổ lên
    const M = (x: number) => zt + R * ((x - X[1]) / T) - 0.07; // mép dưới bậc cạnh 3
    prismX([ty0, ty1], [[X[1], M(X[1]) - 0.16], [xe, M(xe) - 0.16], [xe, M(xe)], [X[1], M(X[1])]], "plasterIn");
    prismX([ty0 - 0.01, ty0 + 0.01], [[X[1], zt - 0.36], [xe, M(xe) - 0.16], [xe, M(xe) + 1.1], [X[1], zt + 0.95]], "glass", false);
    beam([X[1], yTop, U(yTop) + 1.1], [X[1], ty0, zt + 0.95], 0.045, "bronze");
    beam([X[1], ty0, zt + 0.95], [xe, ty0, M(xe) + 1.1], 0.045, "bronze");
  }

  // mái kính ngay trên khoảng thang: gờ 450 mm, khe gió 150 mm, kính dán
  const [[vx0, vx1], [vy0, vy1]] = well;
  box([vx1, vx1 + 0.1], [vy0 - 0.1, vy1 + 0.1], [ROOF, ROOF + 0.45], "plaster");
  box([vx0, vx1], [vy0 - 0.1, vy0], [ROOF, ROOF + 0.45], "plaster");
  box([vx0, vx1], [vy1, vy1 + 0.1], [ROOF, ROOF + 0.45], "plaster");
  box([vx0, vx1 + 0.12], [vy0 - 0.12, vy1 + 0.12], [ROOF + 0.6, ROOF + 0.64], "glass");
  for (let y = vy0 + 0.9; y < vy1; y += 0.9) box([vx0, vx1 + 0.12], [y - 0.02, y + 0.02], [ROOF + 0.56, ROOF + 0.6], "charcoal");
  /* ── nội thất ───────────────────────────────────────────────────── */
  // trụ tròn trong FURN: ghế da / ghế học có tựa lưng quay ra xa bàn gần nhất, ghế bar đen chân mảnh, còn lại là trụ
  function chair(f: Extract<Furn, ["c", ...unknown[]]>, all: Furn[], zf: number) {
    const [, x, y, r, h, mat = "fabric"] = f;
    const bar = mat === "black" && r <= 0.2 && h >= 0.6;
    if (!bar && !(mat === "leather" || (mat === "white" && h >= 0.8 && r >= 0.2))) return cyl(x, y, r, [zf, zf + h], furnMat[mat]);
    let best: [number, number] = [x, y + 1], d = Infinity;
    for (const t of all) {
      if (t[0] !== "r" || t[5] < 0.7 || t[5] > 0.95) continue;
      const cx = t[1] + t[3] / 2, cy = t[2] + t[4] / 2, dd = Math.hypot(cx - x, cy - y);
      if (dd < d) (d = dd), (best = [cx, cy]);
    }
    if (bar) return stool(x, y, h, zf, Math.atan2(y - best[1], x - best[0]));
    const seat = 0.47, m = furnMat[mat];
    const a = Math.atan2(y - best[1], x - best[0]); // hướng tựa lưng (ra xa bàn)
    if (mat !== "leather") {
      // ghế học: 4 chân thép đen mảnh, đệm bọc bo tròn, tựa lưng tách khỏi đệm
      const s = r * 0.95;
      for (const [ex, ey] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) cyl(x + ex * (s - 0.04), y + ey * (s - 0.04), 0.012, [zf, zf + seat - 0.07], "black");
      box([x - s, x + s], [y - s, y + s], [zf + seat - 0.08, zf + seat], m, true, 0.03);
      const bx = x + Math.cos(a) * (s - 0.03), by = y + Math.sin(a) * (s - 0.03), tx = Math.abs(Math.cos(a)) > 0.7;
      box(tx ? [bx - 0.03, bx + 0.03] : [x - s, x + s], tx ? [y - s, y + s] : [by - 0.03, by + 0.03], [zf + seat + 0.08, zf + h], m, true, 0.025);
      return;
    }
    // ghế ăn bầu như ảnh mẫu: lưng ôm cong liền tay vịn, đệm tròn dày, 4 chân côn đen choãi
    for (const k of [0.785, 2.356, 3.927, 5.498]) {
      const c = Math.cos(a + k), s = Math.sin(a + k);
      beam([x + c * 0.15, y + s * 0.15, zf + seat - 0.07], [x + c * 0.23, y + s * 0.23, zf], 0.026, "black");
    }
    cyl(x, y, r + 0.03, [zf + seat - 0.09, zf + seat], m);
    tub(x, y, r + 0.05, 0.05, a, 3.7, zf + seat - 0.05, zf + seat + 0.15, zf + h, m);
  }
  // vỏ lưng ghế bầu liền một khối: mép trên cao zBack ở giữa lưng, thoải dần xuống zArm ở hai đầu tay vịn
  function tub(x: number, y: number, R: number, t: number, a: number, span: number, z0: number, zArm: number, zBack: number, m: Mat) {
    const N = 40, pos: number[] = [], idx: number[] = [];
    const top = (i: number) => zArm + (zBack - zArm) * Math.pow((1 + Math.cos((Math.PI * (2 * i - N)) / N)) / 2, 0.7);
    const at = (i: number, r: number, z: number) => {
      const th = a - span / 2 + (span * i) / N, p = P(x + r * Math.cos(th), y + r * Math.sin(th), z);
      pos.push(p.x, p.y, p.z);
    };
    // 4 dải: mặt ngoài, mép trên, mặt trong, đáy — đỉnh riêng từng dải để pháp tuyến mượt theo vòng cung mà gãy ở mép
    const strips: [(i: number) => [number, number], (i: number) => [number, number]][] = [
      [() => [R, z0], (i) => [R, top(i)]],
      [(i) => [R, top(i)], (i) => [R - t, top(i)]],
      [(i) => [R - t, top(i)], () => [R - t, z0]],
      [() => [R - t, z0], () => [R, z0]],
    ];
    for (const [A, B] of strips) {
      const base = pos.length / 3;
      for (let i = 0; i <= N; i++) {
        at(i, ...A(i));
        at(i, ...B(i));
      }
      for (let i = 0; i < N; i++) {
        const k = base + i * 2;
        idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
      }
    }
    for (const i of [0, N]) {
      const base = pos.length / 3;
      at(i, R, z0); at(i, R, top(i)); at(i, R - t, top(i)); at(i, R - t, z0);
      idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    g.setAttribute("uv", new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
    add(g, new THREE.EdgesGeometry(g, 40), mats[m], line);
  }
  // vỏ cong (lưng ghế bầu, tựa ghế bar): cung tròn tâm (x, y), bán kính ngoài R, dày t, quanh hướng a, mở góc span
  function shell(x: number, y: number, R: number, t: number, a: number, span: number, z: Span, m: Mat) {
    const sh = new THREE.Shape();
    sh.absarc(x, y, R, a - span / 2, a + span / 2, false);
    sh.absarc(x, y, R - t, a + span / 2, a - span / 2, true);
    extrudeUp(sh, z, m, Math.min(0.015, t / 3));
  }
  // đùn hình phẳng (toạ độ mặt bằng) theo phương đứng từ z[0] tới z[1], vát mép b
  function extrudeUp(sh: THREE.Shape, z: Span, m: Mat, b = 0.01) {
    const g = new THREE.ExtrudeGeometry(sh, { depth: z[1] - z[0] - 2 * b, bevelEnabled: b > 0, bevelThickness: b, bevelSize: b, bevelSegments: 3, curveSegments: 28 });
    g.rotateX(Math.PI / 2).translate(0, z[1] - b, Y0);
    add(g, new THREE.EdgesGeometry(g, 40), mats[m], line);
  }
  function roundRect(x: Span, y: Span, r: number) {
    const s = new THREE.Shape();
    s.moveTo(x[0] + r, y[0]);
    s.lineTo(x[1] - r, y[0]); s.quadraticCurveTo(x[1], y[0], x[1], y[0] + r);
    s.lineTo(x[1], y[1] - r); s.quadraticCurveTo(x[1], y[1], x[1] - r, y[1]);
    s.lineTo(x[0] + r, y[1]); s.quadraticCurveTo(x[0], y[1], x[0], y[1] - r);
    s.lineTo(x[0], y[0] + r); s.quadraticCurveTo(x[0], y[0], x[0] + r, y[0]);
    return s;
  }
  // ghế bar như ảnh mẫu: khung thép đen mảnh, vòng gác chân, đệm trắng, tựa cong bọc đen
  function stool(x: number, y: number, h: number, zf: number, a: number) {
    const s = 0.16;
    for (const [ex, ey] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) beam([x + ex * s, y + ey * s, zf + h - 0.06], [x + ex * (s + 0.03), y + ey * (s + 0.03), zf], 0.018, "black");
    for (const [p, q] of [[[-1, -1], [1, -1]], [[1, -1], [1, 1]], [[1, 1], [-1, 1]], [[-1, 1], [-1, -1]]]) {
      const k = s + 0.018;
      beam([x + p[0] * k, y + p[1] * k, zf + 0.3], [x + q[0] * k, y + q[1] * k, zf + 0.3], 0.014, "black");
    }
    box([x - 0.2, x + 0.2], [y - 0.2, y + 0.2], [zf + h - 0.07, zf + h], "white", true, 0.03);
    for (const k of [-0.9, 0.9]) {
      const px = x + Math.cos(a + k) * 0.17, py = y + Math.sin(a + k) * 0.17;
      beam([px, py, zf + h], [px, py, zf + h + 0.14], 0.014, "black");
    }
    shell(x, y, 0.2, 0.05, a, 2.2, [zf + h + 0.12, zf + h + 0.21], "black");
  }
  // mẫu chi tiết theo ảnh mẫu cho các hộp FURN có model
  function model(kind: NonNullable<Extract<Furn, ["r", ...unknown[]]>[7]>, x: Span, y: Span, h: number, zf: number, m: Mat) {
    const plinth = (inset = 0.05) => box([x[0] + inset, x[1] - inset], [y[0] + inset, y[1] - inset], [zf, zf + 0.07], "black", false);
    if (kind === "sofa") {
      // tựa sát tường (phía x nhỏ), tay vịn đầu y nhỏ, đầu y lớn nối góc chaise; nệm ngồi chần rãnh
      plinth();
      box(x, y, [zf + 0.07, zf + 0.26], m, true, 0.03);
      box([x[0], x[0] + 0.2], y, [zf + 0.26, zf + h], m, true, 0.05);
      box([x[0] + 0.2, x[1]], [y[0], y[0] + 0.16], [zf + 0.26, zf + 0.55], m, true, 0.05);
      const n = Math.max(1, Math.round((y[1] - y[0] - 0.16) / 0.68)), L = (y[1] - y[0] - 0.16) / n;
      for (let i = 0; i < n; i++) {
        const a = y[0] + 0.16 + i * L + 0.008, b = a + L - 0.016;
        for (let j = 0; j < 5; j++) box([x[0] + 0.2 + j * ((x[1] - x[0] - 0.2) / 5) + 0.004, x[0] + 0.2 + (j + 1) * ((x[1] - x[0] - 0.2) / 5) - 0.004], [a, b], [zf + 0.26, zf + 0.42], m, true, 0.04);
        box([x[0] + 0.2, x[0] + 0.36], [a, b], [zf + 0.42, zf + h - 0.03], m, true, 0.07); // nệm tựa
        box([x[0] + 0.36, x[0] + 0.48], [a + L * 0.3, a + L * 0.3 + 0.45], [zf + 0.42, zf + 0.84], "pillow", true, 0.05); // gối xám
      }
    } else if (kind === "chaise") {
      // góc chaise: nệm chần rãnh ngang, tựa thấp phía y lớn
      plinth();
      box(x, y, [zf + 0.07, zf + 0.26], m, true, 0.03);
      for (let j = 0; j < 4; j++) {
        const a = y[0] + j * ((y[1] - y[0] - 0.18) / 4);
        box(x, [a + 0.004, a + (y[1] - y[0] - 0.18) / 4 - 0.004], [zf + 0.26, zf + 0.42], m, true, 0.04);
      }
      box(x, [y[1] - 0.18, y[1]], [zf + 0.26, zf + h], m, true, 0.05);
    } else if (kind === "ctable") {
      // bàn trà: mặt đá vân bo góc lớn trên khối đế đen lùi vào, đĩa chân tối
      extrudeUp(roundRect(x, y, 0.12), [zf + h - 0.07, zf + h], "marble", 0.01);
      extrudeUp(roundRect([x[0] + 0.06, x[1] - 0.06], [y[0] + 0.06, y[1] - 0.06], 0.1), [zf + 0.1, zf + h - 0.07], "black", 0.01);
      extrudeUp(roundRect([x[0] + 0.16, x[1] - 0.16], [y[0] + 0.16, y[1] - 0.16], 0.08), [zf, zf + 0.1], "dark", 0.005);
      box([x[0] + 0.12, x[0] + 0.42], [y[0] + 0.12, y[0] + 0.32], [zf + h, zf + h + 0.03], "teak", true, 0.01); // khay gỗ
      cyl(x[0] + 0.22, y[0] + 0.22, 0.04, [zf + h + 0.03, zf + h + 0.2], "dark"); // bình
      box([x[1] - 0.36, x[1] - 0.1], [y[1] - 0.34, y[1] - 0.12], [zf + h, zf + h + 0.06], "white", true, 0.005); // chồng sách
    } else if (kind === "bedW" || kind === "bedE") {
      // giường như ảnh mẫu: khung bọc da be, nệm trắng, chăn phủ rủ qua mép, khăn len xám vắt ngang cuối giường
      const L = x[1] - x[0], foot = (k: number): Span => (kind === "bedW" ? [x[0] + L * k, x[1] + 0.03] : [x[0] - 0.03, x[1] - L * k]);
      box(x, y, [zf + 0.05, zf + 0.3], "leather", true, 0.05);
      box([x[0] + 0.03, x[1] - 0.03], [y[0] + 0.03, y[1] - 0.03], [zf + 0.3, zf + h], "white", true, 0.06);
      box(foot(0.3), [y[0] - 0.03, y[1] + 0.03], [zf + 0.18, zf + h + 0.04], "linen", true, 0.04);
      const t = kind === "bedW" ? [x[0] + L * 0.68, x[0] + L * 0.86] : [x[1] - L * 0.86, x[1] - L * 0.68];
      box(t as Span, [y[0] - 0.05, y[1] + 0.05], [zf + 0.32, zf + h + 0.065], "pillow", true, 0.025);
    } else if (kind === "bedS") {
      // như bedW nhưng chạy dọc nhà, đầu giường ở phía y lớn
      const L = y[1] - y[0];
      box(x, y, [zf + 0.05, zf + 0.3], "leather", true, 0.05);
      box([x[0] + 0.03, x[1] - 0.03], [y[0] + 0.03, y[1] - 0.03], [zf + 0.3, zf + h], "white", true, 0.06);
      box([x[0] - 0.03, x[1] + 0.03], [y[0] - 0.03, y[1] - L * 0.3], [zf + 0.18, zf + h + 0.04], "linen", true, 0.04);
      box([x[0] - 0.05, x[1] + 0.05], [y[1] - L * 0.86, y[1] - L * 0.68], [zf + 0.32, zf + h + 0.065], "pillow", true, 0.025);
    } else if (kind === "fridge") {
      // tủ lạnh 4 cánh kính đen như ảnh mẫu: 2 cánh trên + 2 ngăn kéo dưới, tay nắm đồng giữa, màn hình cánh trái, vòi nước cánh phải
      const f = x[1], cy = (y[0] + y[1]) / 2, Z = (k: number) => zf + k;
      box(x, y, [zf, zf + h], "black", true, 0.01);
      box([f, f + 0.006], [cy - 0.004, cy + 0.004], [Z(0.04), Z(h - 0.02)], "charcoal", false);
      box([f, f + 0.006], [y[0] + 0.01, y[1] - 0.01], [Z(0.82), Z(0.828)], "charcoal", false);
      for (const s of [-1, 1]) {
        const hy: Span = [cy + s * 0.035 - 0.01, cy + s * 0.035 + 0.01];
        box([f + 0.022, f + 0.04], hy, [Z(0.95), Z(1.65)], "bronze", true, 0.006);
        for (const z of [0.98, 1.62]) box([f, f + 0.022], hy, [Z(z), Z(z + 0.02)], "bronze", false);
        box([f + 0.022, f + 0.04], hy, [Z(0.45), Z(0.76)], "bronze", true, 0.006);
        for (const z of [0.48, 0.72]) box([f, f + 0.022], hy, [Z(z), Z(z + 0.02)], "bronze", false);
      }
      box([f, f + 0.004], [y[0] + 0.07, y[0] + 0.29], [Z(1.2), Z(1.6)], "screen", false); // màn hình cảm ứng
      box([f, f + 0.006], [y[1] - 0.27, y[1] - 0.08], [Z(1.12), Z(1.45)], "charcoal", false); // hốc lấy nước
      box([f + 0.006, f + 0.012], [y[1] - 0.2, y[1] - 0.15], [Z(1.36), Z(1.42)], "chrome", false);
    } else if (kind === "otower") {
      // tháp lò như ảnh mẫu: tủ dưới, lò nướng âm tủ, hốc đồ điện hắt LED (nồi chiên không dầu, máy xay), tủ trên kịch trần
      const top = Math.min(zf + h, ZC.t1), f = x[1], cy = (y[0] + y[1]) / 2;
      box(x, y, [zf, zf + 0.55], "cabinet", true, 0.006);
      box([f - 0.003, f + 0.003], [y[0] + 0.02, y[1] - 0.02], [zf + 0.3, zf + 0.306], "dark", false);
      box([x[0], f - 0.02], y, [zf + 0.55, zf + 1.15], "cabinet", false);
      box([f - 0.02, f + 0.012], [y[0] + 0.03, y[1] - 0.03], [zf + 0.57, zf + 1.13], "black", true, 0.005); // lò nướng
      box([f + 0.012, f + 0.015], [y[0] + 0.09, y[1] - 0.09], [zf + 0.62, zf + 0.94], "charcoal", false); // kính lò
      beam([f + 0.045, y[0] + 0.1, zf + 0.98], [f + 0.045, y[1] - 0.1, zf + 0.98], 0.016, "chrome");
      for (const yy of [y[0] + 0.1, y[1] - 0.1]) beam([f + 0.012, yy, zf + 0.98], [f + 0.045, yy, zf + 0.98], 0.012, "chrome");
      box([f + 0.012, f + 0.016], [cy - 0.07, cy + 0.07], [zf + 1.04, zf + 1.09], "led", false); // màn hình lò
      box([x[0], x[0] + 0.35], y, [zf + 1.15, zf + 1.85], "cabinet", false); // lưng hốc
      for (const yy of [[y[0], y[0] + 0.02], [y[1] - 0.02, y[1]]] as Span[]) box([x[0], f], yy, [zf + 1.15, zf + 1.85], "cabinet", false);
      box([x[0], f], y, [zf + 1.15, zf + 1.18], "cabinet", false);
      box([f - 0.12, f - 0.09], [y[0] + 0.02, y[1] - 0.02], [zf + 1.83, zf + 1.85], "led", false);
      box([f - 0.44, f - 0.06], [y[0] + 0.26, y[1] - 0.05], [zf + 1.18, zf + 1.5], "linen", true, 0.04); // nồi chiên dạng lò
      box([f - 0.062, f - 0.058], [y[0] + 0.3, y[1] - 0.18], [zf + 1.24, zf + 1.44], "charcoal", false);
      cyl(f - 0.2, y[0] + 0.13, 0.06, [zf + 1.18, zf + 1.27], "dark"); // máy xay
      cyl(f - 0.2, y[0] + 0.13, 0.045, [zf + 1.27, zf + 1.5], "glass");
      box(x, y, [zf + 1.85, top], "cabinet", true, 0.006); // tủ trên
      box([f, f + 0.006], y, [zf + 2.6, zf + 2.606], "dark", false);
    } else if (kind === "nstand") {
      // tab đầu giường gỗ đen 2 ngăn + đèn nấm chân đá đen
      box(x, y, [zf, zf + h], m, true, 0.012);
      box([x[0] - 0.002, x[1] + 0.002], [y[0] + 0.02, y[1] - 0.02], [zf + h * 0.5 - 0.004, zf + h * 0.5 + 0.004], "dark", false);
      const cx = (x[0] + x[1]) / 2, cy = (y[0] + y[1]) / 2;
      cyl(cx, cy, 0.055, [zf + h, zf + h + 0.24], "black");
      const g = new THREE.SphereGeometry(0.17, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2);
      g.scale(1, 0.55, 1).translate(cx, zf + h + 0.22, cy + Y0);
      add(g, null, mats.led, line);
    } else {
      // bàn ăn: mặt đá trắng bo góc mỏng, chân khối đen dẹt giữa bàn
      extrudeUp(roundRect(x, y, 0.1), [zf + h - 0.04, zf + h], "marble", 0.008);
      const cx = (x[0] + x[1]) / 2;
      box([cx - 0.17, cx + 0.17], [y[0] + 0.4, y[1] - 0.4], [zf + 0.03, zf + h - 0.04], "black", true, 0.04);
      box([cx - 0.22, cx + 0.22], [y[0] + 0.35, y[1] - 0.35], [zf, zf + 0.03], "black", true, 0.01);
    }
  }
  const furnMat: Record<FurnMat, Mat> = {
    fabric: "fabric", white: "white", teak: "teak", oak: "oakF", stone: "stone", dark: "dark",
    leather: "leather", marble: "marble", cabinet: "cabinet", black: "black",
  };
  for (const floor of FLOORS) {
    const zf = ZF[floor.id] + 0.02;
    for (const f of FURN[floor.id]) {
      const under = floor.id === "t1" && f[0] === "r" && f[1] + f[3] <= CORE.x[1] + 0.01 && f[2] >= CORE.y0 && zf + f[5] > soffitAbs(f[2]);
      const fm = f[0] === "r" ? (f[6] ?? "fabric") : null;
      const soft = fm === "leather" || fm === "fabric" || fm === "white" ? 0.04 : 0.008; // nệm, sofa bo tròn; tủ gỗ cạnh mảnh
      if (f[0] === "r" && f[7]) model(f[7], [f[1], f[1] + f[3]], [f[2], f[2] + f[4]], f[5], zf, furnMat[fm!]);
      else if (f[0] === "r" && under) underStair([f[1], f[1] + f[3]], [f[2], f[2] + f[4]], [zf, zf + f[5]], furnMat[fm!]);
      else if (f[0] === "r") box([f[1], f[1] + f[3]], [f[2], f[2] + f[4]], [zf, zf + f[5]], furnMat[fm!], true, soft);
      else chair(f, FURN[floor.id], zf);
    }
  }
  const ball = (x: number, y: number, z: number, r: number, m: Mat) => {
    const g = new THREE.SphereGeometry(r, 18, 12);
    g.translate(x, z, y + Y0);
    add(g, null, mats[m], line);
  };
  const z1 = ZF.t1 + 0.02, c1 = ZC.t1;
  // phòng khách theo ảnh mẫu: thảm xám, đèn cây giấy, vách tivi panel be + gỗ nan, trần giật cấp hắt LED
  box([1.05, 3.5], [1.0, 3.45], [z1, z1 + 0.012], "rug", false);
  for (const [i, z] of [0.3, 0.62, 0.94, 1.26, 1.56].entries()) ball(0.5, 1.0, z1 + z, i % 2 ? 0.15 : 0.18, "led");
  box([4.76, 4.8], [0.8, 4.6], [z1, c1], "cabinet");
  for (let y = 0.8; y < 1.4; y += 0.06) box([4.72, 4.76], [y, y + 0.03], [z1, c1], "teak", false);
  box([4.7, 4.74], [1.7, 3.9], [z1 + 1.05, z1 + 2.25], "black"); // tivi 85"
  box([4.38, 4.4], [1.35, 4.25], [z1 + 0.02, z1 + 0.04], "led", false);
  box([0.2, 0.23], [3.7, 4.45], [z1, c1], "oak"); // mảng gỗ cạnh sofa
  box([0.2, 0.235], [2.0, 3.1], [z1 + 1.3, z1 + 2.6], "teak"); // tranh
  box([0.22, 0.7], [0.72, 0.86], [z1, c1 - 0.05], "fabric"); // rèm voan
  box([4.3, 4.72], [0.72, 0.86], [z1, c1 - 0.05], "fabric");
  for (const [x, y] of [[[0.2, 4.8], [0.7, 1.1]], [[0.2, 4.8], [4.6, 5.0]], [[0.2, 0.6], [1.1, 4.6]], [[4.4, 4.8], [1.1, 4.6]]] as [Span, Span][])
    box(x, y, [c1 - 0.18, c1], "plasterIn");
  for (const [x, y] of [[[0.6, 4.4], [1.1, 1.12]], [[0.6, 4.4], [4.58, 4.6]], [[0.6, 0.62], [1.1, 4.6]], [[4.38, 4.4], [1.1, 4.6]]] as [Span, Span][])
    box(x, y, [c1 - 0.2, c1 - 0.18], "led", false);
  tree(4.35, 5.5, 0.45, 1.1, z1 + 0.12); // cây xanh trong nhà + bàn thờ Thần Tài
  ball(4.0, 5.25, z1 + 0.18, 0.18, "led");
  // khối tủ liền gầm thang (như ảnh mẫu): kệ rượu ô vuông ở đầu thấp, tủ kính khung đen có đèn trên tủ thấp, đỉnh tủ chạy theo dốc thang
  const S = soffitAbs, face: Span = [1.19, 1.215];
  for (let z = z1 + 0.22; z < S(6.45) - 0.05; z += 0.22) box(face, [Math.max(5.55, yAtSoffit(z)), 6.45], [z - 0.012, z + 0.012], "oakF", false);
  for (let y = 5.77; y < 6.45; y += 0.22) box(face, [y - 0.012, y + 0.012], [z1, S(y)], "oakF", false);
  for (let y = 5.9; y < 6.4; y += 0.22) for (let z = z1 + 0.11; z < S(y) - 0.1; z += 0.22) ball(1.12, y, z, 0.045, "black"); // đáy chai
  box([0.2, 1.22], [6.45, 9.45], [z1 + 0.8, z1 + 0.83], "white"); // mặt tủ thấp
  underStair(face, [6.45, 9.45], [z1 + 0.83, c1], "glass", false);
  for (const y of [6.45, 7.2, 7.95, 8.7, 9.45]) box([1.18, 1.22], [y - 0.02, y + 0.02], [z1 + 0.83, S(y)], "black", false);
  beam([1.2, 6.45, S(6.45) - 0.02], [1.2, 9.45, S(9.45) - 0.02], 0.04, "black");
  for (const z of [1.3, 1.8, 2.3]) {
    const y0 = Math.max(6.5, yAtSoffit(z1 + z + 0.15));
    if (y0 < 9.4) {
      box([0.3, 1.15], [y0, 9.4], [z1 + z, z1 + z + 0.025], "white", false);
      box([0.3, 1.15], [y0, 9.4], [z1 + z - 0.012, z1 + z], "led", false);
    }
  }
  for (const [y, h, m] of [[7.45, 0.3, "white"], [7.75, 0.22, "white"], [8.2, 0.32, "black"], [8.35, 0.32, "black"], [8.5, 0.32, "black"], [9.05, 0.3, "white"]] as [number, number, Mat][])
    cyl(0.75, y, m === "black" ? 0.04 : 0.09, [z1 + 0.83, z1 + 0.83 + h], m); // bình gốm, chai rượu
  for (const [y, z] of [[8.6, 1.8], [8.95, 1.8], [9.2, 2.3]]) cyl(0.75, y, 0.1, [z1 + z + 0.025, z1 + z + 0.28], "white");
  // tủ cao + tủ trên tủ lạnh kịch trần (tủ lạnh, tháp lò: model trong FURN)
  underStair([0.2, 1.2], [10.05, 10.95], [z1 + 1.9, c1], "cabinet");
  box([1.2, 1.215], [9.744, 9.756], [z1 + 0.1, z1 + 2.5], "black", false); // khe tay nắm tủ cao
  box([1.2, 1.206], [10.05, 10.95], [z1 + 2.6, z1 + 2.606], "dark", false); // khe 2 tầng tủ trên tủ lạnh
  box([1.2, 1.206], [10.497, 10.503], [z1 + 1.9, c1], "dark", false);
  // chữ U như ảnh mẫu: nhánh trái nối tháp lò, dãy tường sau dài hết 3.60 (chậu giữa, bếp từ góc phải dưới hút mùi),
  // nhánh phải ngắn 1.00 ốp đầu trắng liền khối — chừa lối đi 1.20 ra hành lang nên không kéo dài như ảnh
  const X1 = 3.8, R0 = 11.75;
  box([0.2, 0.89], [11.65, 12.75], [z1 + 0.88, z1 + 0.93], "white");
  box([0.2, X1 + 0.04], [12.71, 13.35], [z1 + 0.88, z1 + 0.93], "white");
  box([3.16, X1 + 0.04], [R0 - 0.04, 12.75], [z1 + 0.88, z1 + 0.93], "white"); // mặt đá nhánh phải
  box([3.16, X1 + 0.04], [R0 - 0.04, R0], [z1, z1 + 0.88], "white"); // ốp đầu thác nước
  box([X1, X1 + 0.04], [R0, 13.35], [z1, z1 + 0.88], "white"); // ốp hông phía hành lang
  box([0.2, X1], [13.32, 13.35], [z1 + 0.93, z1 + 1.6], "marble");
  box([0.2, 0.23], [11.65, 13.32], [z1 + 0.93, z1 + 1.6], "marble");
  box([0.2, X1], [13.0, 13.35], [z1 + 1.6, z1 + 2.45], "cabinet");
  box([0.2, X1], [12.95, 13.35], [z1 + 2.45, c1], "cabinet");
  box([0.2, 0.55], [11.65, 13.0], [z1 + 1.6, c1], "cabinet");
  box([0.25, X1 - 0.05], [13.02, 13.33], [z1 + 1.58, z1 + 1.6], "led", false);
  box([2.75, 3.5], [12.95, 13.35], [z1 + 1.45, z1 + 1.6], "black"); // hút mùi
  box([2.77, 3.48], [12.94, 12.95], [z1 + 1.47, z1 + 1.49], "charcoal", false); // nút hút mùi
  // cánh tủ như ảnh mẫu: khe chia cánh mảnh, ngăn kéo dưới bếp từ, rãnh tay nắm đồng ngay dưới mặt đá, chân tủ lùi tối
  const gapY = (y: number, x: Span, z: Span) => box(x, [y - 0.004, y + 0.002], z, "dark", false); // khe trên mặt tủ hướng −y
  const gapX = (x: number, y: Span, z: Span) => box([x - 0.002, x + 0.004], y, z, "dark", false); // khe trên mặt tủ hướng +x
  for (const x of [1.25, 1.625, 2.0, 2.6]) gapY(12.75, [x - 0.003, x + 0.003], [z1 + 0.08, z1 + 0.82]);
  for (const z of [0.33, 0.58]) gapY(12.75, [2.0, 3.2], [z1 + z - 0.003, z1 + z + 0.003]);
  box([0.85, 3.2], [12.742, 12.75], [z1 + 0.815, z1 + 0.83], "bronze", false);
  box([0.85, 3.2], [12.75, 12.8], [z1, z1 + 0.08], "dark", false);
  gapX(0.85, [12.2, 12.2 + 0.006], [z1 + 0.08, z1 + 0.82]);
  box([0.85, 0.858], [11.65, 12.75], [z1 + 0.815, z1 + 0.83], "bronze", false);
  box([0.8, 0.85], [11.65, 12.75], [z1, z1 + 0.08], "dark", false);
  const gapW = (y: number, z: Span) => box([3.194, 3.2], [y - 0.003, y + 0.003], z, "dark", false); // khe mặt nhánh phải (hướng −x)
  gapW(12.25, [z1 + 0.08, z1 + 0.82]);
  for (const z of [0.33, 0.58]) box([3.194, 3.2], [R0, 12.25], [z1 + z - 0.003, z1 + z + 0.003], "dark", false);
  box([3.192, 3.2], [R0, 12.75], [z1 + 0.815, z1 + 0.83], "bronze", false);
  box([3.2, 3.25], [R0, 12.75], [z1, z1 + 0.08], "dark", false);
  for (const x of [1.0, 1.45, 2.35, 2.75, 3.5]) gapY(13.0, [x - 0.003, x + 0.003], [z1 + 1.6, z1 + 2.45]);
  gapY(13.0, [1.45, 2.35], [z1 + 2.02, z1 + 2.028]); // cánh giữa chia đôi như ảnh
  for (const x of [0.95, 1.7, 2.45, 3.15]) gapY(12.95, [x - 0.003, x + 0.003], [z1 + 2.47, c1]);
  gapY(12.95, [0.55, X1], [z1 + 2.45, z1 + 2.458]);
  gapX(0.55, [12.3, 12.306], [z1 + 1.6, c1]);
  // chậu rửa đen âm mặt đá giữa dãy sau + 2 vòi (vòi cổ ngỗng + vòi lọc nhỏ) như ảnh mẫu
  const SX = 1.625;
  box([SX - 0.3, SX + 0.3], [12.9, 13.22], [z1 + 0.931, z1 + 0.934], "black", false);
  box([SX - 0.28, SX + 0.28], [12.92, 13.2], [z1 + 0.934, z1 + 0.935], "charcoal", false);
  cyl(SX, 13.27, 0.022, [z1 + 0.93, z1 + 0.96], "chrome");
  cyl(SX, 13.27, 0.013, [z1 + 0.96, z1 + 1.3], "chrome");
  beam([SX, 13.27, z1 + 1.3], [SX, 13.1, z1 + 1.3], 0.024, "chrome");
  beam([SX, 13.1, z1 + 1.3], [SX, 13.1, z1 + 1.2], 0.024, "chrome");
  beam([SX + 0.085, 13.25, z1 + 1.08], [SX + 0.085, 13.2, z1 + 1.06], 0.014, "chrome"); // cần gạt
  cyl(SX - 0.25, 13.27, 0.016, [z1 + 0.93, z1 + 1.16], "chrome");
  beam([SX - 0.25, 13.27, z1 + 1.16], [SX - 0.25, 13.16, z1 + 1.13], 0.016, "chrome");
  // đồ trên mặt bếp: vòng bếp từ + nồi inox góc phải dưới hút mùi; ấm siêu tốc + máy nướng bánh trắng trên nhánh phải
  for (const [x, y] of [[2.93, 12.98], [3.31, 12.98], [2.93, 13.2], [3.31, 13.2]]) cyl(x, y, 0.085, [z1 + 0.935, z1 + 0.937], "charcoal");
  cyl(3.31, 13.0, 0.11, [z1 + 0.937, z1 + 1.1], "chrome");
  cyl(3.52, 11.98, 0.075, [z1 + 0.93, z1 + 1.15], "white");
  box([3.32, 3.72], [12.2, 12.4], [z1 + 0.93, z1 + 1.12], "white", true, 0.04);
  // đảo bếp như ảnh mẫu: thân gỗ vân sọc dọc, mặt đá đen bo tròn chìa dài về phía bàn ăn làm quầy bar cho 2 ghế, chân hắt LED
  extrudeUp(roundRect([2.02, 3.28], [9.6, 11.38], 0.22), [z1 + 0.86, z1 + 0.92], "black", 0.012);
  for (let y = 10.05; y < 11.28; y += 0.055) {
    box([2.088, 2.1], [y, y + 0.03], [z1 + 0.06, z1 + 0.85], "teak", false, 0);
    box([3.2, 3.212], [y, y + 0.03], [z1 + 0.06, z1 + 0.85], "teak", false, 0);
  }
  for (let x = 2.15; x < 3.18; x += 0.055) box([x, x + 0.03], [9.988, 10.0], [z1 + 0.06, z1 + 0.85], "teak", false, 0);
  box([2.12, 3.18], [10.02, 11.28], [z1, z1 + 0.012], "led", false);
  // bình hoa protea trên đảo
  cyl(2.85, 10.55, 0.05, [z1 + 0.92, z1 + 1.08], "glass");
  for (const [dx, dy, dz] of [[0, 0, 0.32], [0.07, 0.04, 0.27], [-0.06, 0.05, 0.29], [0.03, -0.07, 0.26], [-0.05, -0.04, 0.34]]) {
    beam([2.85, 10.55, z1 + 1.0], [2.85 + dx, 10.55 + dy, z1 + 0.92 + dz - 0.03], 0.008, "green");
    const g = new THREE.SphereGeometry(0.038, 14, 10);
    g.scale(1, 0.75, 1).translate(2.85 + dx, z1 + 0.92 + dz, 10.55 + dy + Y0);
    add(g, null, mats.flower, line);
  }
  for (const [dx, dy] of [[0.11, -0.02], [-0.1, 0.03], [0.02, 0.11], [-0.03, -0.1]]) beam([2.85, 10.55, z1 + 1.06], [2.85 + dx, 10.55 + dy, z1 + 1.14], 0.018, "green");
  // bàn ăn: đèn thả cụm cầu trắng, tranh tường phải
  for (const [x, y, z, r] of [[3.35, 6.65, 1.0, 0.17], [3.55, 7.0, 0.84, 0.15], [3.4, 7.35, 1.05, 0.17], [3.6, 7.7, 0.9, 0.14]])
    ball(x, y, c1 - z, r, "led");
  box([4.77, 4.8], [6.4, 8.0], [z1 + 1.4, z1 + 2.3], "beige");
  // phòng ngủ: vách đầu giường ốp gỗ hắt LED
  box([0.2, 3.1], [17.76, 17.8], [z1, z1 + 1.25], "oak"); // vách đầu giường tựa tường hậu
  box([0.2, 3.1], [17.74, 17.76], [z1 + 1.25, z1 + 1.27], "led", false);
  const z2 = ZF.t2 + 0.02;
  box([0.2, 0.24], [1.5, 4.6], [z2, z2 + 1.25], "oak");
  box([0.24, 0.26], [1.5, 4.6], [z2 + 1.25, z2 + 1.27], "led", false);
  box([2.65, 3.55], [8.32, 8.35], [z2 + 1.3, z2 + 2.2], "fabric"); // tranh trên bàn học
  for (let z = 0.42; z < 2.1; z += 0.42) box([4.42, 4.45], [5.6, 7.4], [z2 + z, z2 + z + 0.025], "white", false); // ô kệ sách
  for (const y of [6.05, 6.5, 6.95]) box([4.42, 4.45], [y, y + 0.025], [z2, z2 + 2.1], "white", false);
  box([1.5, 4.3], [8.12, 8.16], [ZF.tum, ZC.tum], "teak"); // vách gỗ sau ban thờ

  /* ── gộp hình học theo vật liệu ─────────────────────────────────── */
  for (const [mat, list] of bins) {
    const geo = mergeGeometries(list);
    if (mat instanceof THREE.LineBasicMaterial) {
      scene.add(new THREE.LineSegments(geo, mat));
    } else {
      const mesh = new THREE.Mesh(geo, mat);
      mesh.castShadow = mat !== mats.glass;
      mesh.receiveShadow = true;
      scene.add(mesh);
    }
  }

  /* ── phần chuyển động: cổng hai cánh, cánh kính trượt ────────────── */
  const solo = (w: number, h: number, d: number, m: THREE.Material) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m);
    mesh.castShadow = true;
    mesh.add(new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry), line));
    return mesh;
  };
  const leaf = (hingeX: number, dir: 1 | -1) => {
    const g = new THREE.Group();
    g.position.copy(P(hingeX, -7.98, 0));
    // nan sắt đen phía ngoài, cánh gỗ nan phía trong
    for (const zz of [0.12, 2.02]) {
      const r = solo(2.34, 0.06, 0.06, mats.charcoal);
      r.position.set((dir * 2.34) / 2, zz, 0);
      g.add(r);
    }
    for (let i = 0; i < 8; i++) {
      const b = solo(0.03, 1.9, 0.04, mats.charcoal);
      b.position.set(dir * (0.05 + i * 0.1), 1.07, 0);
      g.add(b);
    }
    const wood = solo(1.48, 1.84, 0.05, mats.teak);
    wood.position.set(dir * 1.58, 1.07, 0);
    g.add(wood);
    const handle = solo(0.04, 0.5, 0.04, mats.black);
    handle.position.set(dir * 2.2, 1.1, 0.05);
    g.add(handle);
    scene.add(g);
    return g;
  };
  const gateL = leaf(0.16, 1);
  const gateR = leaf(4.84, -1);
  const slider = solo(2.1, 2.7, 0.03, mats.glass);
  slider.castShadow = false;
  const sliderAt = (k: number) => slider.position.copy(P(3.55 - 2.0 * k, 0.555, ZF.t1 + 1.35));
  sliderAt(0);
  scene.add(slider);

  /* ── ánh sáng chiều muộn ─────────────────────────────────────────── */
  scene.add(new THREE.HemisphereLight(0xe2eaf0, 0xb3a690, 1.0));
  const sun = new THREE.DirectionalLight(0xffdcb0, 3.1);
  sun.position.copy(P(-9, -14, 9.5));
  sun.target.position.copy(P(2.5, 8, 2));
  sun.castShadow = true;
  sun.shadow.mapSize.set(4096, 4096);
  Object.assign(sun.shadow.camera, { near: 1, far: 70, left: -20, right: 20, top: 20, bottom: -20 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  scene.add(sun, sun.target);
  const lamp = (x: number, y: number, z: number, i = 2.4, d = 7) => {
    const l = new THREE.PointLight(0xffd6a8, i * 2.2, d * 1.2, 2);
    l.position.copy(P(x, y, z));
    scene.add(l);
  };
  for (const id of ["t1", "t2", "tum"] as const) lamp(3.4, 7.3, ZC[id] - 0.3, 1.8, 6);
  lamp(2.5, 2.9, ZC.t1 - 0.3);
  lamp(2.2, 10.8, ZC.t1 - 0.3);
  lamp(3.45, 7.2, ZC.t1 - 1.1, 0.8, 3);
  lamp(1.8, 12.4, ZC.t1 - 0.3, 1.2, 4);
  lamp(1.6, 15.8, ZC.t1 - 0.3);
  lamp(0.85, 19.9, ZF.t1 + 2.4, 0.8, 3); // WC cuối sân
  lamp(4.3, 15.8, ZC.t1 - 0.3, 1.0, 4);
  lamp(2.5, 3.1, ZC.t2 - 0.3);
  lamp(1.9, 13.2, ZC.t2 - 0.3);
  lamp(4.3, 13.0, ZC.t2 - 0.3, 1.0, 4);
  lamp(2.5, 16.6, ZC.t2 - 0.3);
  lamp(2.8, 6.3, ZC.tum - 0.3, 1.6);
  lamp(2.5, 11.8, ZC.tum - 0.3, 1.4);
  lamp(0.7, (well[1][0] + well[1][1]) / 2, ROOF + 0.3, 10, 14); // ánh sáng đỉnh rơi qua mái kính thang

  return {
    scene,
    ink,
    cut,
    gate: (k: number) => {
      gateL.rotation.y = -1.45 * k;
      gateR.rotation.y = 1.45 * k;
    },
    slide: sliderAt,
  };
}

export type House = ReturnType<typeof buildHouse>;
