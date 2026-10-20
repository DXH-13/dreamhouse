import { a as FURN, f as WALLS, g as stairSoffit, h as riseOf, i as FLOORS, o as HOUSE, t as CORE, u as RAILS } from "./house-data-B6isfp8C.mjs";
import { A as Quaternion, D as Path, E as MeshStandardMaterial, F as Vector3, M as Shape, N as SphereGeometry, O as Plane, P as Vector2, S as LineSegments, T as Mesh, _ as Float32BufferAttribute, b as IcosahedronGeometry, c as mergeVertices, d as BufferGeometry, g as ExtrudeGeometry, h as EdgesGeometry, j as Scene, k as PointLight, m as DirectionalLight, o as RoundedBoxGeometry, p as CylinderGeometry, s as mergeGeometries, u as BoxGeometry, v as Group, w as Matrix4, x as LineBasicMaterial, y as HemisphereLight } from "../_libs/three.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house-scene-D2LOrMYb.js
var Y0 = HOUSE.yardFront;
var ZF = {
	t1: .45,
	t2: 4.05,
	tum: 7.35
};
var ZC = {
	t1: 3.75,
	t2: 7.05,
	tum: 10.05
};
var ROOF = 10.35;
var SLAB = .3;
var P = (x, y, z) => new Vector3(x, z, y + Y0);
function buildHouse() {
	const scene = new Scene();
	const vec = () => ({ value: new Vector3(-100, -100, -100) });
	const ink = {
		uA: vec(),
		uLo: vec(),
		uHi: vec(),
		uPoche: { value: 1 }
	};
	const cut = new Plane(new Vector3(0, -1, 0), 1e3);
	const INK_FN = `
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
	function patch(mat, kind, pattern = 0) {
		mat.onBeforeCompile = (sh) => {
			Object.assign(sh.uniforms, ink, { uPattern: { value: pattern } });
			sh.vertexShader = "varying vec3 vWPos;\n" + sh.vertexShader.replace("#include <project_vertex>", "#include <project_vertex>\n vWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;");
			let f = INK_FN + "uniform float uPattern;\n" + sh.fragmentShader;
			f = f.replace("#include <color_fragment>", `#include <color_fragment>
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
        }`);
			const out = kind === "line" ? "gl_FragColor.a *= mix(0.025, 0.85, inkK());" : `{
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
	const std = (color, roughness, pattern = 0, extra = {}) => {
		const m = new MeshStandardMaterial({
			color,
			roughness,
			side: 2,
			...extra
		});
		patch(m, "mesh", pattern);
		return m;
	};
	const mats = {
		plaster: std("#efe9de", .92),
		plasterIn: std("#f5f1e9", .95),
		oak: std("#cfb48f", .62, 1),
		oakF: std("#c9ab84", .6),
		teak: std("#8a6a48", .68, 3),
		stone: std("#9a958c", .88, 2),
		tile: std("#d9d6cf", .4, 2),
		paving: std("#b3ada2", .95, 2),
		asphalt: std("#4f4e4b", 1),
		charcoal: std("#2b2b2b", .5, 0, { metalness: .4 }),
		fabric: std("#bdb5a6", 1),
		white: std("#f2f0ec", .35),
		dark: std("#33363a", .35, 0, { metalness: .3 }),
		car: std("#5f666e", .28, 0, { metalness: .55 }),
		green: std("#56704c", .85),
		grass: std("#6f8460", 1),
		trunk: std("#6b5844", 1),
		marble: std("#ece9e4", .22, 4),
		herring: std("#c6ab88", .6, 5),
		cabinet: std("#e4d5c2", .28),
		leather: std("#d6c6b2", .55),
		black: std("#1f1f20", .28, 0, { metalness: .25 }),
		bronze: std("#a8865a", .35, 0, { metalness: .7 }),
		beige: std("#cdbda8", .85),
		rug: std("#8d8984", 1),
		linen: std("#f3f0ea", .95),
		chrome: std("#d8d8d6", .15, 0, { metalness: 1 }),
		flower: std("#e8907f", .8),
		screen: std("#efe2c4", .3, 0, {
			emissive: "#b89a6a",
			emissiveIntensity: .7
		}),
		pillow: std("#9f9a93", .9),
		led: std("#fff1d6", .5, 0, {
			emissive: "#ffd49a",
			emissiveIntensity: 1.8
		}),
		block: (() => {
			const m = new MeshStandardMaterial({
				color: "#e4eceb",
				roughness: .2,
				transparent: true,
				opacity: .62,
				depthWrite: false,
				side: 2
			});
			patch(m, "glass", 6);
			return m;
		})(),
		glass: new MeshStandardMaterial({
			color: "#bfd2d6",
			roughness: .05,
			metalness: .2,
			transparent: true,
			opacity: .2,
			depthWrite: false,
			side: 2
		})
	};
	patch(mats.glass, "glass");
	const line = new LineBasicMaterial({
		color: "#1c1a17",
		transparent: true,
		depthWrite: false
	});
	patch(line, "line");
	const ctx = new MeshStandardMaterial({
		color: "#ebe6dc",
		roughness: 1,
		clippingPlanes: [cut],
		clipShadows: true
	});
	const ctxLine = new LineBasicMaterial({
		color: "#8f887f",
		transparent: true,
		opacity: .45,
		clippingPlanes: [cut]
	});
	const unit = new BoxGeometry(1, 1, 1).toNonIndexed();
	const unitEdges = new EdgesGeometry(new BoxGeometry(1, 1, 1));
	const bins = /* @__PURE__ */ new Map();
	const push = (map, k, g) => {
		const list = map.get(k) ?? [];
		list.push(g);
		map.set(k, list);
	};
	const m4 = new Matrix4();
	const q0 = new Quaternion();
	function add(geo, edges, mat, lm) {
		push(bins, mat, geo.index ? geo.toNonIndexed() : geo);
		if (edges) push(bins, lm, edges);
	}
	function box(x, y, z, m, edges = true, round = 0) {
		const mat = typeof m === "string" ? mats[m] : m;
		const w = Math.max(.002, x[1] - x[0]), d = Math.max(.002, y[1] - y[0]), h = Math.max(.002, z[1] - z[0]);
		const c = P((x[0] + x[1]) / 2, (y[0] + y[1]) / 2, (z[0] + z[1]) / 2);
		m4.compose(c, q0, new Vector3(w, h, d));
		const lm = mat === ctx ? ctxLine : line;
		const r = Math.min(round, Math.min(w, h, d) / 2.5);
		add(r > .002 ? new RoundedBoxGeometry(w, h, d, 3, r).translate(c.x, c.y, c.z) : unit.clone().applyMatrix4(m4), edges ? unitEdges.clone().applyMatrix4(m4) : null, mat, lm);
	}
	function beam(a, b, t, m) {
		const pa = P(...a), pb = P(...b);
		const dir = pb.clone().sub(pa);
		const q = new Quaternion().setFromUnitVectors(new Vector3(0, 0, 1), dir.clone().normalize());
		m4.compose(pa.clone().add(pb).multiplyScalar(.5), q, new Vector3(t, t, dir.length()));
		add(unit.clone().applyMatrix4(m4), unitEdges.clone().applyMatrix4(m4), mats[m], line);
	}
	function cyl(x, y, r, z, m) {
		const g = new CylinderGeometry(r, r, z[1] - z[0], 28);
		g.translate(x, (z[0] + z[1]) / 2, y + Y0);
		add(g, new EdgesGeometry(g, 30), mats[m], line);
	}
	function tree(x, y, r, h, base = 0) {
		box([x - .05, x + .05], [y - .05, y + .05], [base, base + h], "trunk");
		const ico = new IcosahedronGeometry(r, 4);
		ico.deleteAttribute("normal");
		ico.deleteAttribute("uv");
		const g = mergeVertices(ico);
		const p = g.attributes.position;
		for (let i = 0; i < p.count; i++) {
			const v = new Vector3().fromBufferAttribute(p, i);
			const n = Math.sin(v.x * 7 + x) * Math.sin(v.y * 6 + y) * Math.sin(v.z * 8) + .5 * Math.sin(v.x * 17 - v.z * 13 + v.y * 11);
			v.multiplyScalar(1 + .12 * n);
			p.setXYZ(i, v.x, v.y, v.z);
		}
		g.scale(1, .85, 1);
		g.computeVertexNormals();
		g.setAttribute("uv", new Float32BufferAttribute(new Float32Array(g.attributes.position.count * 2), 2));
		g.translate(x, base + h + r * .6, y + Y0);
		add(g, new EdgesGeometry(g, 50), mats.green, line);
	}
	function slab(x, y, z, holes, m = "plaster", edges = true) {
		const xs = [.../* @__PURE__ */ new Set([
			x[0],
			x[1],
			...holes.flatMap((h) => h[0])
		])].sort((a, b) => a - b);
		const ys = [.../* @__PURE__ */ new Set([
			y[0],
			y[1],
			...holes.flatMap((h) => h[1])
		])].sort((a, b) => a - b);
		const inHole = (cx, cy) => holes.some(([hx, hy]) => cx > hx[0] && cx < hx[1] && cy > hy[0] && cy < hy[1]);
		for (let j = 0; j < ys.length - 1; j++) {
			let run = null;
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
	function prism(x, pts, m, edges = true) {
		const s = new Shape(pts.map(([y, z]) => new Vector2(y, z)));
		const g = new ExtrudeGeometry(s, {
			depth: x[1] - x[0],
			bevelEnabled: false
		});
		g.applyMatrix4(new Matrix4().set(0, 0, -1, x[1], 0, 1, 0, 0, 1, 0, 0, Y0, 0, 0, 0, 1));
		add(g, edges ? new EdgesGeometry(g, 20) : null, mats[m], line);
	}
	function prismX(y, pts, m, edges = true) {
		const g = new ExtrudeGeometry(new Shape(pts.map(([x, z]) => new Vector2(x, z))), {
			depth: y[1] - y[0],
			bevelEnabled: false
		});
		g.translate(0, 0, y[0] + Y0);
		add(g, edges ? new EdgesGeometry(g, 20) : null, mats[m], line);
	}
	const soffitAbs = (y) => ZF.t1 + stairSoffit(y);
	const yAtSoffit = (z) => CORE.flights.t1.y + ((z - ZF.t1 + .25) / riseOf("t1") - CORE.flights.t1.lead) * CORE.tread;
	function underStair(x, y, z, m, edges = true) {
		const top = (yy) => Math.max(z[0] + .01, Math.min(z[1], soffitAbs(yy)));
		const yc = yAtSoffit(z[1]);
		const mid = yc > y[0] && yc < y[1] ? [[yc, z[1]]] : [];
		prism(x, [
			[y[0], z[0]],
			[y[1], z[0]],
			[y[1], top(y[1])],
			...mid,
			[y[0], top(y[0])]
		], m, edges);
	}
	box([-60, 60], [-60, 60], [-.22, -.17], ctx, false);
	box([-30, 35], [-21, -9.3], [-.17, -.15], "asphalt", false);
	box([-30, 35], [-9.3, -8], [-.15, 0], "paving");
	box([-30, 35], [-22.3, -21], [-.15, 0], ctx);
	for (const [x, y, z] of [
		[
			[-6.4, -.2],
			[-1, 19],
			8.2
		],
		[
			[-13, -6.6],
			[1.5, 20],
			6.4
		],
		[
			[5.2, 11.2],
			[.5, 18.5],
			7.4
		],
		[
			[11.4, 17.5],
			[-1.2, 17],
			10.2
		],
		[
			[-12, 18],
			[24, 34],
			10.5
		]
	]) box(x, y, [0, z], ctx);
	box([0, 5], [-8, 0], [-.04, 0], "paving");
	box([-.2, 0], [-8, 0], [0, 2.2], "plaster");
	box([5, 5.2], [-8, 0], [0, 2.2], "plaster");
	box([0, .16], [-8.08, -7.88], [0, 2.1], "charcoal");
	box([4.84, 5], [-8.08, -7.88], [0, 2.1], "charcoal");
	box([-.2, 5.2], [-8.25, -7.75], [2.2, 2.5], "plaster");
	box([-.2, .1], [-8.25, -7.75], [0, 2.2], "plaster");
	box([4.9, 5.2], [-8.25, -7.75], [0, 2.2], "plaster");
	box([.2, 3.5], [-2.5, -1.1], [0, .06], "grass");
	box([3.8, 4.8], [-2.5, 0], [0, .03], "stone");
	tree(1.7, -1.7, .7, 1.5);
	tree(.6, -2, .4, .8);
	tree(3, -1.4, .3, .5);
	box([.7, 2.5], [-7.2, -2.6], [.22, .92], "car");
	box([.85, 2.35], [-5.9, -3.8], [.92, 1.4], "glass");
	box([.85, 2.35], [-5.85, -3.85], [1.38, 1.43], "car");
	for (const [x, y] of [
		[.75, -6.4],
		[2.45, -6.4],
		[.75, -3.4],
		[2.45, -3.4]
	]) {
		const g = new CylinderGeometry(.32, .32, .22, 20);
		g.rotateZ(Math.PI / 2);
		g.translate(x, .32, y + Y0);
		add(g, null, mats.dark, line);
	}
	for (let i = 0; i < 3; i++) box([1.2, 3.8], [-.9 + i * .3, 0], [0, .15 * (i + 1)], "stone");
	box([0, 5], [18, 22], [0, .04], "grass");
	box([-.2, 5.2], [21.8, 22], [0, 2.4], "plaster");
	box([-.2, 0], [18, 21.8], [0, 2.4], "plaster");
	box([5, 5.2], [18, 21.8], [0, 2.4], "plaster");
	box([0, 1.6], [18, 21.8], [0, ZF.t1], "plaster");
	box([-.05, 1.68], [18, 21.85], [ZF.t1 + 2.6, ZF.t1 + 2.78], "plaster");
	box([1.6, 2], [18.4, 19.1], [0, .3], "stone");
	box([2, 2.4], [18.4, 19.1], [0, .15], "stone");
	box([2.5, 3.6], [18.5, 19], [.04, .07], "stone");
	box([1.6, 4.8], [18, 19.4], [ZF.t1 + 2.5, ZF.t1 + 2.52], "glass");
	box([1.6, 4.8], [19.34, 19.4], [ZF.t1 + 2.44, ZF.t1 + 2.54], "charcoal");
	box([4.74, 4.8], [19.34, 19.4], [.04, ZF.t1 + 2.44], "charcoal");
	tree(3.2, 20.6, .6, 1.4);
	tree(4.3, 21.2, .35, .8);
	const holeAt = (id) => [[CORE.x[0], CORE.x[1]], [CORE.holes[id][0], CORE.holes[id][1]]];
	const tailHole = [[CORE.tailHole.x[0], CORE.tailHole.x[1]], [CORE.tailHole.y[0], CORE.tailHole.y[1]]];
	const holesOf = {
		t1: [],
		t2: [holeAt("t2"), tailHole],
		tum: [holeAt("tum")]
	};
	const well = holeAt("tum");
	box([0, 5], [0, 18], [0, ZF.t1], "stone");
	slab([0, 5], [0, 18], [ZF.t2 - SLAB, ZF.t2], holesOf.t2);
	slab([0, 5], [0, 18], [ZF.tum - SLAB, ZF.tum], holesOf.tum);
	slab([0, 5], [4.5, 13.8], [10.049999999999999, ROOF], [well]);
	const finish = {
		living: "marble",
		kitchen: "marble",
		bed: "herring",
		worship: "oak",
		hall: "marble",
		stair: "marble",
		wc: "tile",
		service: "tile",
		void: "stone"
	};
	for (const floor of FLOORS) {
		const zf = ZF[floor.id];
		for (const r of floor.rooms) {
			if (r.kind === "void" && floor.id !== "t1") continue;
			const m = r.kind === "outdoor" ? r.id === "tum-dry" ? "stone" : "teak" : finish[r.kind];
			if (!m) continue;
			const enclosed = r.kind !== "outdoor";
			const y0 = floor.id === "t1" && r.y === 0 ? .6 : r.y;
			const y1 = enclosed && r.y < 18 && r.y + r.h >= 18 ? 17.8 : r.y + r.h;
			const top = r.kind === "stair" ? .025 : .02;
			slab([Math.max(.2, r.x), Math.min(4.8, r.x + r.w)], [y0, y1], [zf, zf + top], holesOf[floor.id], m, false);
		}
	}
	for (const xw of [[0, .2], [4.8, 5]]) {
		box(xw, [0, 18], [ZF.t1, ZC.t1], "plaster");
		box(xw, [0, 18], [ZF.t2, ZC.t2], "plaster");
		box(xw, [4.5, 13.8], [ZF.tum, ZC.tum], "plaster");
		box(xw, [0, 4.5], [ZF.tum, ZF.tum + 1.1], "plaster");
		box(xw, [13.8, 18], [ZF.tum, ZF.tum + 1.1], "plaster");
		box(xw, [4.5, 13.8], [ROOF, 11.2], "plaster");
	}
	box([.2, 4.8], [4.5, 4.7], [ROOF, 11.2], "plaster");
	box([.2, 4.8], [13.6, 13.8], [ROOF, 11.2], "plaster");
	const rear = (zf, zc, w, door) => {
		box([.2, w[0]], [17.8, 18], [zf, zc], "plaster");
		if (w[1] > w[0]) {
			box([w[1], door ? 3.85 : 4.8], [17.8, 18], [zf, zc], "plaster");
			box([...w], [17.8, 18], [zf, zf + .45], "plaster");
			box([...w], [17.8, 18], [zf + 2.25, zc], "plaster");
			box([...w], [17.88, 17.92], [zf + .45, zf + 2.25], "glass");
		}
		if (door) {
			box([3.85, 4.75], [17.8, 18], [zf + 2.2, zc], "plaster");
			box([4.75, 4.8], [17.8, 18], [zf, zc], "plaster");
			box([3.85, 4.75], [18, 18.6], [.04, ZF.t1 - .15], "stone");
		}
	};
	rear(ZF.t1, ZC.t1, [3.85, 3.85], true);
	rear(ZF.t2, ZC.t2, [.9, 4.1], false);
	box([.2, 4.8], [17.8, 18], [ZF.tum, ZF.tum + 1.1], "plaster");
	box([.2, .4], [.5, .7], [ZF.t1, ZC.t1], "plaster");
	box([4.6, 4.8], [.5, .7], [ZF.t1, ZC.t1], "plaster");
	box([.4, 4.6], [.5, .7], [ZF.t1 + 2.7, ZC.t1], "beige");
	box([.4, 2.5], [.6, .63], [ZF.t1, ZF.t1 + 2.7], "glass");
	box([.4, 4.6], [.53, .66], [ZF.t1, ZF.t1 + .03], "charcoal");
	box([2.48, 2.52], [.58, .65], [ZF.t1, ZF.t1 + 2.7], "charcoal");
	box([.2, 4.8], [-.6, .5], [ZF.t2 - .47, ZF.t2 - .45], "teak", false);
	const rr = (s, x0, y0, x1, y1, [bl, br, tr, tl]) => {
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
	const frame = new Shape();
	rr(frame, 0, ZF.t2 - .45, 5, ZF.tum, [
		.15,
		.15,
		.75,
		.15
	]);
	const hole = new Path();
	rr(hole, .45, ZF.t2 - .05, 4.55, ZF.tum - .45, [
		.75,
		.1,
		.1,
		.1
	]);
	frame.holes.push(hole);
	const fg = new ExtrudeGeometry(frame, {
		depth: .6,
		bevelEnabled: false,
		curveSegments: 10
	});
	fg.translate(0, 0, Y0 - .6);
	add(fg, new EdgesGeometry(fg, 20), mats.plaster, line);
	box([.45, 4.55], [-.6, 1], [ZF.tum - .47, ZF.tum - .45], "teak", false);
	for (let x = .5; x < 4.55; x += .1) box([x, x + .02], [-.32, -.3], [ZF.t2, ZF.t2 + 1.05], "charcoal", false);
	box([.45, 4.55], [-.34, -.28], [ZF.t2 + 1.05, ZF.t2 + 1.09], "charcoal");
	box([.45, 4.55], [-.6, 0], [ZF.t2 - .05, ZF.t2], "teak", false);
	box([3.7, 4.95], [-1, -.35], [ZF.t2 + .35, ZF.t2 + 1.05], "beige");
	tree(4.3, -.68, .38, .15, ZF.t2 + 1.05);
	box([.2, 4.8], [1.08, 1.12], [ZF.t2, ZC.t2 - .3], "glass");
	box([.2, 4.8], [1, 1.2], [ZC.t2 - .3, ZC.t2], "plaster");
	for (const x of [1.73, 3.27]) box([x - .02, x + .02], [1.06, 1.14], [ZF.t2, ZC.t2 - .3], "charcoal");
	box([.25, .75], [1.2, 1.32], [ZF.t2, ZC.t2 - .32], "fabric");
	box([4.25, 4.75], [1.2, 1.32], [ZF.t2, ZC.t2 - .32], "fabric");
	box([.2, 4.8], [-.1, .1], [ZF.tum, ZF.tum + .45], "plaster");
	for (let x = .3; x < 4.75; x += .1) box([x, x + .02], [-.01, .01], [ZF.tum + .45, ZF.tum + 1.08], "charcoal", false);
	box([.2, 4.8], [-.03, .03], [ZF.tum + 1.06, ZF.tum + 1.1], "charcoal");
	box([.3, 1.7], [.15, .85], [ZF.tum, ZF.tum + .8], "beige");
	tree(1, .5, .5, .5, ZF.tum + .8);
	box([4.8, 5.05], [-.2, 4.5], [ZF.tum + 1.1, 11.049999999999999], "beige");
	box([.2, .3], [-.1, 0], [ZF.tum + 1.1, 10.65], "charcoal");
	for (const y of [-.15, 4.35]) box([.2, 4.8], [y, y + .12], [10.53, 10.65], "charcoal");
	for (let x = .3; x < 4.8; x += .22) box([x, x + .05], [-.3, 4.5], [10.65, 10.77], "charcoal");
	box([.2, 1.9], [4.48, 4.52], [ZF.tum, ZC.tum - .3], "glass");
	box([3.1, 4.8], [4.48, 4.52], [ZF.tum, ZC.tum - .3], "glass");
	box([.2, 4.8], [4.4, 4.6], [ZC.tum - .3, ZC.tum], "plaster");
	for (const x of [1.9, 3.1]) box([x - .03, x + .03], [4.45, 4.55], [ZF.tum, ZC.tum - .3], "charcoal");
	for (const floor of FLOORS) {
		const zf = ZF[floor.id], zc = ZC[floor.id];
		for (const [axis, at, a0, a1, gaps = [], mm = 100, high] of WALLS[floor.id]) {
			const t = mm / 2e3;
			const top = high === void 0 ? zc : zf + high;
			const seg = (a, b, z, m) => axis === "h" ? box([a, b], [at - t, at + t], z, m) : box([at - t, at + t], [a, b], z, m);
			const glassT = .015;
			let from = a0;
			const piece = (a, b, kind) => {
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
			const g = .012;
			box(x0 === x1 ? [x0 - g, x0 + g] : [x0, x1], y0 === y1 ? [y0 - g, y0 + g] : [y0, y1], [zf, zf + 1.1], "glass");
			beam([
				x0,
				y0,
				zf + 1.1
			], [
				x1,
				y1,
				zf + 1.1
			], .04, "bronze");
		}
	}
	for (const [id, za, zb] of [[
		"t1",
		ZF.t1,
		ZF.t2
	], [
		"t2",
		ZF.t2,
		ZF.tum
	]]) {
		const { y: ys, risers, lead: L } = CORE.flights[id];
		const R = riseOf(id), T = CORE.tread, X = [CORE.x[0], CORE.x[1]];
		for (let i = 1; i < risers; i++) {
			const top = za + (L + i) * R, y0 = ys + (i - 1) * T;
			box(X, [y0, y0 + T], [top - .07, top], "marble", true, .006);
			box(X, [y0 + .01, y0 + .05], [top - .085, top - .07], "led", false);
		}
		const yTop = ys + (risers - 1) * T;
		const U = (y) => za + R * (L + (y - ys) / T) - .07;
		const yAt = (dz) => ys + dz * T / R;
		prism(X, L ? [
			[ys, U(ys) - .16],
			[yTop, U(yTop) - .16],
			[yTop, U(yTop)],
			[ys, U(ys)]
		] : [
			[yAt(.07), za],
			[yAt(.23), za],
			[yTop, U(yTop) - .16],
			[yTop, U(yTop)]
		], "plasterIn");
		const g0 = L ? [[ys, U(ys) - .16]] : [[ys, za + .02], [yAt(.25), za + .02]];
		prism([X[1] - .01, X[1] + .01], [
			...g0,
			[yTop, U(yTop) - .16],
			[yTop, U(yTop) + 1.1],
			[ys, U(ys) + 1.1]
		], "glass", false);
		beam([
			X[1],
			ys,
			U(ys) + 1.1
		], [
			X[1],
			yTop,
			U(yTop) + 1.1
		], .045, "bronze");
		if (!L) continue;
		const [ly0, ly1] = CORE.landing.y, zl = za + L * R;
		box(X, [ly0, ly1], [za, zl], "marble");
		for (let k = 1; k < L; k++) {
			const x0 = X[1] + (L - 1 - k) * T;
			box([x0, x0 + T], [ly0, ly1], [za, za + k * R], "marble");
			box([x0 + T - .04, x0 + T - .01], [ly0 + .01, ly1 - .01], [za + k * R - .03, za + k * R - .015], "led", false);
		}
		const xf = X[1] + (L - 1) * T;
		const N = (x) => za + R * (L - (x - X[1]) / T) + 1;
		for (const y of [ly0, ly1]) {
			const pts = [
				[xf + .1, za + .02],
				[y === ly0 ? X[0] : X[1], za + .02],
				...y === ly0 ? [[X[0], zl + 1]] : [],
				[X[1], zl + 1],
				[xf + .1, N(xf + .1)]
			];
			prismX([y - .01, y + .01], pts, "glass", false);
		}
		beam([
			xf + .1,
			ly0,
			N(xf + .1)
		], [
			X[1],
			ly0,
			zl + 1
		], .045, "bronze");
		beam([
			X[1],
			ly0,
			zl + 1
		], [
			X[0],
			ly0,
			zl + 1
		], .045, "bronze");
		beam([
			xf + .1,
			ly1,
			N(xf + .1)
		], [
			X[1],
			ly1,
			zl + 1
		], .045, "bronze");
		const { tail: Tn } = CORE.flights[id], [ty0, ty1] = CORE.landing.top, zt = za + (L + risers) * R;
		box(X, [ty0, ty1], [zt - .2, zt], "marble");
		box(X, [ty0, ty0 + .04], [zt - .215, zt - .2], "led", false);
		for (let k = 1; k < Tn; k++) {
			const x0 = X[1] + (k - 1) * T, top = zt + k * R;
			box([x0, x0 + T], [ty0, ty1], [top - .07, top], "marble");
			box([x0 + .01, x0 + .05], [ty0 + .01, ty1 - .01], [top - .085, top - .07], "led", false);
		}
		const xe = X[1] + (Tn - 1) * T;
		const M = (x) => zt + R * ((x - X[1]) / T) - .07;
		prismX([ty0, ty1], [
			[X[1], M(X[1]) - .16],
			[xe, M(xe) - .16],
			[xe, M(xe)],
			[X[1], M(X[1])]
		], "plasterIn");
		prismX([ty0 - .01, ty0 + .01], [
			[X[1], zt - .36],
			[xe, M(xe) - .16],
			[xe, M(xe) + 1.1],
			[X[1], zt + .95]
		], "glass", false);
		beam([
			X[1],
			yTop,
			U(yTop) + 1.1
		], [
			X[1],
			ty0,
			zt + .95
		], .045, "bronze");
		beam([
			X[1],
			ty0,
			zt + .95
		], [
			xe,
			ty0,
			M(xe) + 1.1
		], .045, "bronze");
	}
	const [[vx0, vx1], [vy0, vy1]] = well;
	box([vx1, vx1 + .1], [vy0 - .1, vy1 + .1], [ROOF, 10.799999999999999], "plaster");
	box([vx0, vx1], [vy0 - .1, vy0], [ROOF, 10.799999999999999], "plaster");
	box([vx0, vx1], [vy1, vy1 + .1], [ROOF, 10.799999999999999], "plaster");
	box([vx0, vx1 + .12], [vy0 - .12, vy1 + .12], [10.95, 10.99], "glass");
	for (let y = vy0 + .9; y < vy1; y += .9) box([vx0, vx1 + .12], [y - .02, y + .02], [10.91, 10.95], "charcoal");
	function chair(f, all, zf) {
		const [, x, y, r, h, mat = "fabric"] = f;
		const bar = mat === "black" && r <= .2 && h >= .6;
		if (!bar && !(mat === "leather" || mat === "white" && h >= .8 && r >= .2)) return cyl(x, y, r, [zf, zf + h], furnMat[mat]);
		let best = [x, y + 1], d = Infinity;
		for (const t of all) {
			if (t[0] !== "r" || t[5] < .7 || t[5] > .95) continue;
			const cx = t[1] + t[3] / 2, cy = t[2] + t[4] / 2, dd = Math.hypot(cx - x, cy - y);
			if (dd < d) d = dd, best = [cx, cy];
		}
		if (bar) return stool(x, y, h, zf, Math.atan2(y - best[1], x - best[0]));
		const seat = .47, m = furnMat[mat];
		const a = Math.atan2(y - best[1], x - best[0]);
		if (mat !== "leather") {
			const s = r * .95;
			for (const [ex, ey] of [
				[-1, -1],
				[1, -1],
				[-1, 1],
				[1, 1]
			]) cyl(x + ex * (s - .04), y + ey * (s - .04), .012, [zf, zf + seat - .07], "black");
			box([x - s, x + s], [y - s, y + s], [zf + seat - .08, zf + seat], m, true, .03);
			const bx = x + Math.cos(a) * (s - .03), by = y + Math.sin(a) * (s - .03), tx = Math.abs(Math.cos(a)) > .7;
			box(tx ? [bx - .03, bx + .03] : [x - s, x + s], tx ? [y - s, y + s] : [by - .03, by + .03], [zf + seat + .08, zf + h], m, true, .025);
			return;
		}
		for (const k of [
			.785,
			2.356,
			3.927,
			5.498
		]) {
			const c = Math.cos(a + k), s = Math.sin(a + k);
			beam([
				x + c * .15,
				y + s * .15,
				zf + seat - .07
			], [
				x + c * .23,
				y + s * .23,
				zf
			], .026, "black");
		}
		cyl(x, y, r + .03, [zf + seat - .09, zf + seat], m);
		tub(x, y, r + .05, .05, a, 3.7, zf + seat - .05, zf + seat + .15, zf + h, m);
	}
	function tub(x, y, R, t, a, span, z0, zArm, zBack, m) {
		const N = 40, pos = [], idx = [];
		const top = (i) => zArm + (zBack - zArm) * Math.pow((1 + Math.cos(Math.PI * (2 * i - N) / N)) / 2, .7);
		const at = (i, r, z) => {
			const th = a - span / 2 + span * i / N, p = P(x + r * Math.cos(th), y + r * Math.sin(th), z);
			pos.push(p.x, p.y, p.z);
		};
		const strips = [
			[() => [R, z0], (i) => [R, top(i)]],
			[(i) => [R, top(i)], (i) => [R - t, top(i)]],
			[(i) => [R - t, top(i)], () => [R - t, z0]],
			[() => [R - t, z0], () => [R, z0]]
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
			at(i, R, z0);
			at(i, R, top(i));
			at(i, R - t, top(i));
			at(i, R - t, z0);
			idx.push(base, base + 1, base + 2, base, base + 2, base + 3);
		}
		const g = new BufferGeometry();
		g.setAttribute("position", new Float32BufferAttribute(pos, 3));
		g.setIndex(idx);
		g.computeVertexNormals();
		g.setAttribute("uv", new Float32BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
		add(g, new EdgesGeometry(g, 40), mats[m], line);
	}
	function shell(x, y, R, t, a, span, z, m) {
		const sh = new Shape();
		sh.absarc(x, y, R, a - span / 2, a + span / 2, false);
		sh.absarc(x, y, R - t, a + span / 2, a - span / 2, true);
		extrudeUp(sh, z, m, Math.min(.015, t / 3));
	}
	function extrudeUp(sh, z, m, b = .01) {
		const g = new ExtrudeGeometry(sh, {
			depth: z[1] - z[0] - 2 * b,
			bevelEnabled: b > 0,
			bevelThickness: b,
			bevelSize: b,
			bevelSegments: 3,
			curveSegments: 28
		});
		g.rotateX(Math.PI / 2).translate(0, z[1] - b, Y0);
		add(g, new EdgesGeometry(g, 40), mats[m], line);
	}
	function roundRect(x, y, r) {
		const s = new Shape();
		s.moveTo(x[0] + r, y[0]);
		s.lineTo(x[1] - r, y[0]);
		s.quadraticCurveTo(x[1], y[0], x[1], y[0] + r);
		s.lineTo(x[1], y[1] - r);
		s.quadraticCurveTo(x[1], y[1], x[1] - r, y[1]);
		s.lineTo(x[0] + r, y[1]);
		s.quadraticCurveTo(x[0], y[1], x[0], y[1] - r);
		s.lineTo(x[0], y[0] + r);
		s.quadraticCurveTo(x[0], y[0], x[0] + r, y[0]);
		return s;
	}
	function stool(x, y, h, zf, a) {
		const s = .16;
		for (const [ex, ey] of [
			[-1, -1],
			[1, -1],
			[-1, 1],
			[1, 1]
		]) beam([
			x + ex * s,
			y + ey * s,
			zf + h - .06
		], [
			x + ex * .19,
			y + ey * .19,
			zf
		], .018, "black");
		for (const [p, q] of [
			[[-1, -1], [1, -1]],
			[[1, -1], [1, 1]],
			[[1, 1], [-1, 1]],
			[[-1, 1], [-1, -1]]
		]) {
			const k = .178;
			beam([
				x + p[0] * k,
				y + p[1] * k,
				zf + .3
			], [
				x + q[0] * k,
				y + q[1] * k,
				zf + .3
			], .014, "black");
		}
		box([x - .2, x + .2], [y - .2, y + .2], [zf + h - .07, zf + h], "white", true, .03);
		for (const k of [-.9, .9]) {
			const px = x + Math.cos(a + k) * .17, py = y + Math.sin(a + k) * .17;
			beam([
				px,
				py,
				zf + h
			], [
				px,
				py,
				zf + h + .14
			], .014, "black");
		}
		shell(x, y, .2, .05, a, 2.2, [zf + h + .12, zf + h + .21], "black");
	}
	function model(kind, x, y, h, zf, m) {
		const plinth = (inset = .05) => box([x[0] + inset, x[1] - inset], [y[0] + inset, y[1] - inset], [zf, zf + .07], "black", false);
		if (kind === "sofa") {
			plinth();
			box(x, y, [zf + .07, zf + .26], m, true, .03);
			box([x[0], x[0] + .2], y, [zf + .26, zf + h], m, true, .05);
			box([x[0] + .2, x[1]], [y[0], y[0] + .16], [zf + .26, zf + .55], m, true, .05);
			const n = Math.max(1, Math.round((y[1] - y[0] - .16) / .68)), L = (y[1] - y[0] - .16) / n;
			for (let i = 0; i < n; i++) {
				const a = y[0] + .16 + i * L + .008, b = a + L - .016;
				for (let j = 0; j < 5; j++) box([x[0] + .2 + j * ((x[1] - x[0] - .2) / 5) + .004, x[0] + .2 + (j + 1) * ((x[1] - x[0] - .2) / 5) - .004], [a, b], [zf + .26, zf + .42], m, true, .04);
				box([x[0] + .2, x[0] + .36], [a, b], [zf + .42, zf + h - .03], m, true, .07);
				box([x[0] + .36, x[0] + .48], [a + L * .3, a + L * .3 + .45], [zf + .42, zf + .84], "pillow", true, .05);
			}
		} else if (kind === "chaise") {
			plinth();
			box(x, y, [zf + .07, zf + .26], m, true, .03);
			for (let j = 0; j < 4; j++) {
				const a = y[0] + j * ((y[1] - y[0] - .18) / 4);
				box(x, [a + .004, a + (y[1] - y[0] - .18) / 4 - .004], [zf + .26, zf + .42], m, true, .04);
			}
			box(x, [y[1] - .18, y[1]], [zf + .26, zf + h], m, true, .05);
		} else if (kind === "ctable") {
			extrudeUp(roundRect(x, y, .12), [zf + h - .07, zf + h], "marble", .01);
			extrudeUp(roundRect([x[0] + .06, x[1] - .06], [y[0] + .06, y[1] - .06], .1), [zf + .1, zf + h - .07], "black", .01);
			extrudeUp(roundRect([x[0] + .16, x[1] - .16], [y[0] + .16, y[1] - .16], .08), [zf, zf + .1], "dark", .005);
			box([x[0] + .12, x[0] + .42], [y[0] + .12, y[0] + .32], [zf + h, zf + h + .03], "teak", true, .01);
			cyl(x[0] + .22, y[0] + .22, .04, [zf + h + .03, zf + h + .2], "dark");
			box([x[1] - .36, x[1] - .1], [y[1] - .34, y[1] - .12], [zf + h, zf + h + .06], "white", true, .005);
		} else if (kind === "bedW" || kind === "bedE") {
			const L = x[1] - x[0], foot = (k) => kind === "bedW" ? [x[0] + L * k, x[1] + .03] : [x[0] - .03, x[1] - L * k];
			box(x, y, [zf + .05, zf + .3], "leather", true, .05);
			box([x[0] + .03, x[1] - .03], [y[0] + .03, y[1] - .03], [zf + .3, zf + h], "white", true, .06);
			box(foot(.3), [y[0] - .03, y[1] + .03], [zf + .18, zf + h + .04], "linen", true, .04);
			box(kind === "bedW" ? [x[0] + L * .68, x[0] + L * .86] : [x[1] - L * .86, x[1] - L * .68], [y[0] - .05, y[1] + .05], [zf + .32, zf + h + .065], "pillow", true, .025);
		} else if (kind === "bedS") {
			const L = y[1] - y[0];
			box(x, y, [zf + .05, zf + .3], "leather", true, .05);
			box([x[0] + .03, x[1] - .03], [y[0] + .03, y[1] - .03], [zf + .3, zf + h], "white", true, .06);
			box([x[0] - .03, x[1] + .03], [y[0] - .03, y[1] - L * .3], [zf + .18, zf + h + .04], "linen", true, .04);
			box([x[0] - .05, x[1] + .05], [y[1] - L * .86, y[1] - L * .68], [zf + .32, zf + h + .065], "pillow", true, .025);
		} else if (kind === "fridge") {
			const f = x[1], cy = (y[0] + y[1]) / 2, Z = (k) => zf + k;
			box(x, y, [zf, zf + h], "black", true, .01);
			box([f, f + .006], [cy - .004, cy + .004], [Z(.04), Z(h - .02)], "charcoal", false);
			box([f, f + .006], [y[0] + .01, y[1] - .01], [Z(.82), Z(.828)], "charcoal", false);
			for (const s of [-1, 1]) {
				const hy = [cy + s * .035 - .01, cy + s * .035 + .01];
				box([f + .022, f + .04], hy, [Z(.95), Z(1.65)], "bronze", true, .006);
				for (const z of [.98, 1.62]) box([f, f + .022], hy, [Z(z), Z(z + .02)], "bronze", false);
				box([f + .022, f + .04], hy, [Z(.45), Z(.76)], "bronze", true, .006);
				for (const z of [.48, .72]) box([f, f + .022], hy, [Z(z), Z(z + .02)], "bronze", false);
			}
			box([f, f + .004], [y[0] + .07, y[0] + .29], [Z(1.2), Z(1.6)], "screen", false);
			box([f, f + .006], [y[1] - .27, y[1] - .08], [Z(1.12), Z(1.45)], "charcoal", false);
			box([f + .006, f + .012], [y[1] - .2, y[1] - .15], [Z(1.36), Z(1.42)], "chrome", false);
		} else if (kind === "otower") {
			const top = Math.min(zf + h, ZC.t1), f = x[1], cy = (y[0] + y[1]) / 2;
			box(x, y, [zf, zf + .55], "cabinet", true, .006);
			box([f - .003, f + .003], [y[0] + .02, y[1] - .02], [zf + .3, zf + .306], "dark", false);
			box([x[0], f - .02], y, [zf + .55, zf + 1.15], "cabinet", false);
			box([f - .02, f + .012], [y[0] + .03, y[1] - .03], [zf + .57, zf + 1.13], "black", true, .005);
			box([f + .012, f + .015], [y[0] + .09, y[1] - .09], [zf + .62, zf + .94], "charcoal", false);
			beam([
				f + .045,
				y[0] + .1,
				zf + .98
			], [
				f + .045,
				y[1] - .1,
				zf + .98
			], .016, "chrome");
			for (const yy of [y[0] + .1, y[1] - .1]) beam([
				f + .012,
				yy,
				zf + .98
			], [
				f + .045,
				yy,
				zf + .98
			], .012, "chrome");
			box([f + .012, f + .016], [cy - .07, cy + .07], [zf + 1.04, zf + 1.09], "led", false);
			box([x[0], x[0] + .35], y, [zf + 1.15, zf + 1.85], "cabinet", false);
			for (const yy of [[y[0], y[0] + .02], [y[1] - .02, y[1]]]) box([x[0], f], yy, [zf + 1.15, zf + 1.85], "cabinet", false);
			box([x[0], f], y, [zf + 1.15, zf + 1.18], "cabinet", false);
			box([f - .12, f - .09], [y[0] + .02, y[1] - .02], [zf + 1.83, zf + 1.85], "led", false);
			box([f - .44, f - .06], [y[0] + .26, y[1] - .05], [zf + 1.18, zf + 1.5], "linen", true, .04);
			box([f - .062, f - .058], [y[0] + .3, y[1] - .18], [zf + 1.24, zf + 1.44], "charcoal", false);
			cyl(f - .2, y[0] + .13, .06, [zf + 1.18, zf + 1.27], "dark");
			cyl(f - .2, y[0] + .13, .045, [zf + 1.27, zf + 1.5], "glass");
			box(x, y, [zf + 1.85, top], "cabinet", true, .006);
			box([f, f + .006], y, [zf + 2.6, zf + 2.606], "dark", false);
		} else if (kind === "nstand") {
			box(x, y, [zf, zf + h], m, true, .012);
			box([x[0] - .002, x[1] + .002], [y[0] + .02, y[1] - .02], [zf + h * .5 - .004, zf + h * .5 + .004], "dark", false);
			const cx = (x[0] + x[1]) / 2, cy = (y[0] + y[1]) / 2;
			cyl(cx, cy, .055, [zf + h, zf + h + .24], "black");
			const g = new SphereGeometry(.17, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2);
			g.scale(1, .55, 1).translate(cx, zf + h + .22, cy + Y0);
			add(g, null, mats.led, line);
		} else {
			extrudeUp(roundRect(x, y, .1), [zf + h - .04, zf + h], "marble", .008);
			const cx = (x[0] + x[1]) / 2;
			box([cx - .17, cx + .17], [y[0] + .4, y[1] - .4], [zf + .03, zf + h - .04], "black", true, .04);
			box([cx - .22, cx + .22], [y[0] + .35, y[1] - .35], [zf, zf + .03], "black", true, .01);
		}
	}
	const furnMat = {
		fabric: "fabric",
		white: "white",
		teak: "teak",
		oak: "oakF",
		stone: "stone",
		dark: "dark",
		leather: "leather",
		marble: "marble",
		cabinet: "cabinet",
		black: "black"
	};
	for (const floor of FLOORS) {
		const zf = ZF[floor.id] + .02;
		for (const f of FURN[floor.id]) {
			const under = floor.id === "t1" && f[0] === "r" && f[1] + f[3] <= CORE.x[1] + .01 && f[2] >= CORE.y0 && zf + f[5] > soffitAbs(f[2]);
			const fm = f[0] === "r" ? f[6] ?? "fabric" : null;
			const soft = fm === "leather" || fm === "fabric" || fm === "white" ? .04 : .008;
			if (f[0] === "r" && f[7]) model(f[7], [f[1], f[1] + f[3]], [f[2], f[2] + f[4]], f[5], zf, furnMat[fm]);
			else if (f[0] === "r" && under) underStair([f[1], f[1] + f[3]], [f[2], f[2] + f[4]], [zf, zf + f[5]], furnMat[fm]);
			else if (f[0] === "r") box([f[1], f[1] + f[3]], [f[2], f[2] + f[4]], [zf, zf + f[5]], furnMat[fm], true, soft);
			else chair(f, FURN[floor.id], zf);
		}
	}
	const ball = (x, y, z, r, m) => {
		const g = new SphereGeometry(r, 18, 12);
		g.translate(x, z, y + Y0);
		add(g, null, mats[m], line);
	};
	const z1 = ZF.t1 + .02, c1 = ZC.t1;
	box([1.05, 3.5], [1, 3.45], [z1, z1 + .012], "rug", false);
	for (const [i, z] of [
		.3,
		.62,
		.94,
		1.26,
		1.56
	].entries()) ball(.5, 1, z1 + z, i % 2 ? .15 : .18, "led");
	box([4.76, 4.8], [.8, 4.6], [z1, c1], "cabinet");
	for (let y = .8; y < 1.4; y += .06) box([4.72, 4.76], [y, y + .03], [z1, c1], "teak", false);
	box([4.7, 4.74], [1.7, 3.9], [z1 + 1.05, z1 + 2.25], "black");
	box([4.38, 4.4], [1.35, 4.25], [z1 + .02, z1 + .04], "led", false);
	box([.2, .23], [3.7, 4.45], [z1, c1], "oak");
	box([.2, .235], [2, 3.1], [z1 + 1.3, z1 + 2.6], "teak");
	box([.22, .7], [.72, .86], [z1, c1 - .05], "fabric");
	box([4.3, 4.72], [.72, .86], [z1, c1 - .05], "fabric");
	for (const [x, y] of [
		[[.2, 4.8], [.7, 1.1]],
		[[.2, 4.8], [4.6, 5]],
		[[.2, .6], [1.1, 4.6]],
		[[4.4, 4.8], [1.1, 4.6]]
	]) box(x, y, [c1 - .18, c1], "plasterIn");
	for (const [x, y] of [
		[[.6, 4.4], [1.1, 1.12]],
		[[.6, 4.4], [4.58, 4.6]],
		[[.6, .62], [1.1, 4.6]],
		[[4.38, 4.4], [1.1, 4.6]]
	]) box(x, y, [c1 - .2, c1 - .18], "led", false);
	tree(4.35, 5.5, .45, 1.1, z1 + .12);
	ball(4, 5.25, z1 + .18, .18, "led");
	const S = soffitAbs, face = [1.19, 1.215];
	for (let z = z1 + .22; z < S(6.45) - .05; z += .22) box(face, [Math.max(5.55, yAtSoffit(z)), 6.45], [z - .012, z + .012], "oakF", false);
	for (let y = 5.77; y < 6.45; y += .22) box(face, [y - .012, y + .012], [z1, S(y)], "oakF", false);
	for (let y = 5.9; y < 6.4; y += .22) for (let z = z1 + .11; z < S(y) - .1; z += .22) ball(1.12, y, z, .045, "black");
	box([.2, 1.22], [6.45, 9.45], [z1 + .8, z1 + .83], "white");
	underStair(face, [6.45, 9.45], [z1 + .83, c1], "glass", false);
	for (const y of [
		6.45,
		7.2,
		7.95,
		8.7,
		9.45
	]) box([1.18, 1.22], [y - .02, y + .02], [z1 + .83, S(y)], "black", false);
	beam([
		1.2,
		6.45,
		S(6.45) - .02
	], [
		1.2,
		9.45,
		S(9.45) - .02
	], .04, "black");
	for (const z of [
		1.3,
		1.8,
		2.3
	]) {
		const y0 = Math.max(6.5, yAtSoffit(z1 + z + .15));
		if (y0 < 9.4) {
			box([.3, 1.15], [y0, 9.4], [z1 + z, z1 + z + .025], "white", false);
			box([.3, 1.15], [y0, 9.4], [z1 + z - .012, z1 + z], "led", false);
		}
	}
	for (const [y, h, m] of [
		[
			7.45,
			.3,
			"white"
		],
		[
			7.75,
			.22,
			"white"
		],
		[
			8.2,
			.32,
			"black"
		],
		[
			8.35,
			.32,
			"black"
		],
		[
			8.5,
			.32,
			"black"
		],
		[
			9.05,
			.3,
			"white"
		]
	]) cyl(.75, y, m === "black" ? .04 : .09, [z1 + .83, z1 + .83 + h], m);
	for (const [y, z] of [
		[8.6, 1.8],
		[8.95, 1.8],
		[9.2, 2.3]
	]) cyl(.75, y, .1, [z1 + z + .025, z1 + z + .28], "white");
	underStair([.2, 1.2], [10.05, 10.95], [z1 + 1.9, c1], "cabinet");
	box([1.2, 1.215], [9.744, 9.756], [z1 + .1, z1 + 2.5], "black", false);
	box([1.2, 1.206], [10.05, 10.95], [z1 + 2.6, z1 + 2.606], "dark", false);
	box([1.2, 1.206], [10.497, 10.503], [z1 + 1.9, c1], "dark", false);
	const X1 = 3.8, R0 = 11.75;
	box([.2, .89], [11.65, 12.75], [z1 + .88, z1 + .93], "white");
	box([.2, 3.84], [12.71, 13.35], [z1 + .88, z1 + .93], "white");
	box([3.16, 3.84], [11.71, 12.75], [z1 + .88, z1 + .93], "white");
	box([3.16, 3.84], [11.71, R0], [z1, z1 + .88], "white");
	box([X1, 3.84], [R0, 13.35], [z1, z1 + .88], "white");
	box([.2, X1], [13.32, 13.35], [z1 + .93, z1 + 1.6], "marble");
	box([.2, .23], [11.65, 13.32], [z1 + .93, z1 + 1.6], "marble");
	box([.2, X1], [13, 13.35], [z1 + 1.6, z1 + 2.45], "cabinet");
	box([.2, X1], [12.95, 13.35], [z1 + 2.45, c1], "cabinet");
	box([.2, .55], [11.65, 13], [z1 + 1.6, c1], "cabinet");
	box([.25, 3.75], [13.02, 13.33], [z1 + 1.58, z1 + 1.6], "led", false);
	box([2.75, 3.5], [12.95, 13.35], [z1 + 1.45, z1 + 1.6], "black");
	box([2.77, 3.48], [12.94, 12.95], [z1 + 1.47, z1 + 1.49], "charcoal", false);
	const gapY = (y, x, z) => box(x, [y - .004, y + .002], z, "dark", false);
	const gapX = (x, y, z) => box([x - .002, x + .004], y, z, "dark", false);
	for (const x of [
		1.25,
		1.625,
		2,
		2.6
	]) gapY(12.75, [x - .003, x + .003], [z1 + .08, z1 + .82]);
	for (const z of [.33, .58]) gapY(12.75, [2, 3.2], [z1 + z - .003, z1 + z + .003]);
	box([.85, 3.2], [12.742, 12.75], [z1 + .815, z1 + .83], "bronze", false);
	box([.85, 3.2], [12.75, 12.8], [z1, z1 + .08], "dark", false);
	gapX(.85, [12.2, 12.206], [z1 + .08, z1 + .82]);
	box([.85, .858], [11.65, 12.75], [z1 + .815, z1 + .83], "bronze", false);
	box([.8, .85], [11.65, 12.75], [z1, z1 + .08], "dark", false);
	const gapW = (y, z) => box([3.194, 3.2], [y - .003, y + .003], z, "dark", false);
	gapW(12.25, [z1 + .08, z1 + .82]);
	for (const z of [.33, .58]) box([3.194, 3.2], [R0, 12.25], [z1 + z - .003, z1 + z + .003], "dark", false);
	box([3.192, 3.2], [R0, 12.75], [z1 + .815, z1 + .83], "bronze", false);
	box([3.2, 3.25], [R0, 12.75], [z1, z1 + .08], "dark", false);
	for (const x of [
		1,
		1.45,
		2.35,
		2.75,
		3.5
	]) gapY(13, [x - .003, x + .003], [z1 + 1.6, z1 + 2.45]);
	gapY(13, [1.45, 2.35], [z1 + 2.02, z1 + 2.028]);
	for (const x of [
		.95,
		1.7,
		2.45,
		3.15
	]) gapY(12.95, [x - .003, x + .003], [z1 + 2.47, c1]);
	gapY(12.95, [.55, X1], [z1 + 2.45, z1 + 2.458]);
	gapX(.55, [12.3, 12.306], [z1 + 1.6, c1]);
	const SX = 1.625;
	box([1.325, 1.925], [12.9, 13.22], [z1 + .931, z1 + .934], "black", false);
	box([1.345, 1.905], [12.92, 13.2], [z1 + .934, z1 + .935], "charcoal", false);
	cyl(SX, 13.27, .022, [z1 + .93, z1 + .96], "chrome");
	cyl(SX, 13.27, .013, [z1 + .96, z1 + 1.3], "chrome");
	beam([
		SX,
		13.27,
		z1 + 1.3
	], [
		SX,
		13.1,
		z1 + 1.3
	], .024, "chrome");
	beam([
		SX,
		13.1,
		z1 + 1.3
	], [
		SX,
		13.1,
		z1 + 1.2
	], .024, "chrome");
	beam([
		1.71,
		13.25,
		z1 + 1.08
	], [
		1.71,
		13.2,
		z1 + 1.06
	], .014, "chrome");
	cyl(1.375, 13.27, .016, [z1 + .93, z1 + 1.16], "chrome");
	beam([
		1.375,
		13.27,
		z1 + 1.16
	], [
		1.375,
		13.16,
		z1 + 1.13
	], .016, "chrome");
	for (const [x, y] of [
		[2.93, 12.98],
		[3.31, 12.98],
		[2.93, 13.2],
		[3.31, 13.2]
	]) cyl(x, y, .085, [z1 + .935, z1 + .937], "charcoal");
	cyl(3.31, 13, .11, [z1 + .937, z1 + 1.1], "chrome");
	cyl(3.52, 11.98, .075, [z1 + .93, z1 + 1.15], "white");
	box([3.32, 3.72], [12.2, 12.4], [z1 + .93, z1 + 1.12], "white", true, .04);
	extrudeUp(roundRect([2.02, 3.28], [9.6, 11.38], .22), [z1 + .86, z1 + .92], "black", .012);
	for (let y = 10.05; y < 11.28; y += .055) {
		box([2.088, 2.1], [y, y + .03], [z1 + .06, z1 + .85], "teak", false, 0);
		box([3.2, 3.212], [y, y + .03], [z1 + .06, z1 + .85], "teak", false, 0);
	}
	for (let x = 2.15; x < 3.18; x += .055) box([x, x + .03], [9.988, 10], [z1 + .06, z1 + .85], "teak", false, 0);
	box([2.12, 3.18], [10.02, 11.28], [z1, z1 + .012], "led", false);
	cyl(2.85, 10.55, .05, [z1 + .92, z1 + 1.08], "glass");
	for (const [dx, dy, dz] of [
		[
			0,
			0,
			.32
		],
		[
			.07,
			.04,
			.27
		],
		[
			-.06,
			.05,
			.29
		],
		[
			.03,
			-.07,
			.26
		],
		[
			-.05,
			-.04,
			.34
		]
	]) {
		beam([
			2.85,
			10.55,
			z1 + 1
		], [
			2.85 + dx,
			10.55 + dy,
			z1 + .92 + dz - .03
		], .008, "green");
		const g = new SphereGeometry(.038, 14, 10);
		g.scale(1, .75, 1).translate(2.85 + dx, z1 + .92 + dz, 10.55 + dy + Y0);
		add(g, null, mats.flower, line);
	}
	for (const [dx, dy] of [
		[.11, -.02],
		[-.1, .03],
		[.02, .11],
		[-.03, -.1]
	]) beam([
		2.85,
		10.55,
		z1 + 1.06
	], [
		2.85 + dx,
		10.55 + dy,
		z1 + 1.14
	], .018, "green");
	for (const [x, y, z, r] of [
		[
			3.35,
			6.65,
			1,
			.17
		],
		[
			3.55,
			7,
			.84,
			.15
		],
		[
			3.4,
			7.35,
			1.05,
			.17
		],
		[
			3.6,
			7.7,
			.9,
			.14
		]
	]) ball(x, y, c1 - z, r, "led");
	box([4.77, 4.8], [6.4, 8], [z1 + 1.4, z1 + 2.3], "beige");
	box([.2, 3.1], [17.76, 17.8], [z1, z1 + 1.25], "oak");
	box([.2, 3.1], [17.74, 17.76], [z1 + 1.25, z1 + 1.27], "led", false);
	const z2 = ZF.t2 + .02;
	box([.2, .24], [1.5, 4.6], [z2, z2 + 1.25], "oak");
	box([.24, .26], [1.5, 4.6], [z2 + 1.25, z2 + 1.27], "led", false);
	box([2.65, 3.55], [8.32, 8.35], [z2 + 1.3, z2 + 2.2], "fabric");
	for (let z = .42; z < 2.1; z += .42) box([4.42, 4.45], [5.6, 7.4], [z2 + z, z2 + z + .025], "white", false);
	for (const y of [
		6.05,
		6.5,
		6.95
	]) box([4.42, 4.45], [y, y + .025], [z2, z2 + 2.1], "white", false);
	box([1.5, 4.3], [8.12, 8.16], [ZF.tum, ZC.tum], "teak");
	for (const [mat, list] of bins) {
		const geo = mergeGeometries(list);
		if (mat instanceof LineBasicMaterial) scene.add(new LineSegments(geo, mat));
		else {
			const mesh = new Mesh(geo, mat);
			mesh.castShadow = mat !== mats.glass;
			mesh.receiveShadow = true;
			scene.add(mesh);
		}
	}
	const solo = (w, h, d, m) => {
		const mesh = new Mesh(new BoxGeometry(w, h, d), m);
		mesh.castShadow = true;
		mesh.add(new LineSegments(new EdgesGeometry(mesh.geometry), line));
		return mesh;
	};
	const leaf = (hingeX, dir) => {
		const g = new Group();
		g.position.copy(P(hingeX, -7.98, 0));
		for (const zz of [.12, 2.02]) {
			const r = solo(2.34, .06, .06, mats.charcoal);
			r.position.set(dir * 2.34 / 2, zz, 0);
			g.add(r);
		}
		for (let i = 0; i < 8; i++) {
			const b = solo(.03, 1.9, .04, mats.charcoal);
			b.position.set(dir * (.05 + i * .1), 1.07, 0);
			g.add(b);
		}
		const wood = solo(1.48, 1.84, .05, mats.teak);
		wood.position.set(dir * 1.58, 1.07, 0);
		g.add(wood);
		const handle = solo(.04, .5, .04, mats.black);
		handle.position.set(dir * 2.2, 1.1, .05);
		g.add(handle);
		scene.add(g);
		return g;
	};
	const gateL = leaf(.16, 1);
	const gateR = leaf(4.84, -1);
	const slider = solo(2.1, 2.7, .03, mats.glass);
	slider.castShadow = false;
	const sliderAt = (k) => slider.position.copy(P(3.55 - 2 * k, .555, ZF.t1 + 1.35));
	sliderAt(0);
	scene.add(slider);
	scene.add(new HemisphereLight(14871280, 11773584, 1));
	const sun = new DirectionalLight(16768176, 3.1);
	sun.position.copy(P(-9, -14, 9.5));
	sun.target.position.copy(P(2.5, 8, 2));
	sun.castShadow = true;
	sun.shadow.mapSize.set(4096, 4096);
	Object.assign(sun.shadow.camera, {
		near: 1,
		far: 70,
		left: -20,
		right: 20,
		top: 20,
		bottom: -20
	});
	sun.shadow.bias = -4e-4;
	sun.shadow.normalBias = .02;
	scene.add(sun, sun.target);
	const lamp = (x, y, z, i = 2.4, d = 7) => {
		const l = new PointLight(16766632, i * 2.2, d * 1.2, 2);
		l.position.copy(P(x, y, z));
		scene.add(l);
	};
	for (const id of [
		"t1",
		"t2",
		"tum"
	]) lamp(3.4, 7.3, ZC[id] - .3, 1.8, 6);
	lamp(2.5, 2.9, ZC.t1 - .3);
	lamp(2.2, 10.8, ZC.t1 - .3);
	lamp(3.45, 7.2, ZC.t1 - 1.1, .8, 3);
	lamp(1.8, 12.4, ZC.t1 - .3, 1.2, 4);
	lamp(1.6, 15.8, ZC.t1 - .3);
	lamp(.85, 19.9, ZF.t1 + 2.4, .8, 3);
	lamp(4.3, 15.8, ZC.t1 - .3, 1, 4);
	lamp(2.5, 3.1, ZC.t2 - .3);
	lamp(1.9, 13.2, ZC.t2 - .3);
	lamp(4.3, 13, ZC.t2 - .3, 1, 4);
	lamp(2.5, 16.6, ZC.t2 - .3);
	lamp(2.8, 6.3, ZC.tum - .3, 1.6);
	lamp(2.5, 11.8, ZC.tum - .3, 1.4);
	lamp(.7, (well[1][0] + well[1][1]) / 2, 10.65, 10, 14);
	return {
		scene,
		ink,
		cut,
		gate: (k) => {
			gateL.rotation.y = -1.45 * k;
			gateR.rotation.y = 1.45 * k;
		},
		slide: sliderAt
	};
}
//#endregion
export { P, ZF, buildHouse };
