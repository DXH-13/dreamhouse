import { i as __toESM } from "../_runtime.mjs";
import { a as FURN, c as MATERIALS, d as SITE_NOTES, f as WALLS, g as stairSoffit, h as riseOf, i as FLOORS, l as MJ_PROMPT, n as DETAILS, o as HOUSE, p as flightTop, r as FENG_SHUI, s as LIGHT_POINTS, t as CORE, u as RAILS } from "./house-data-B6isfp8C.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Copy, r as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BVJIgjbV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var INK = "var(--color-ink)";
var SOFT = "var(--color-ink-soft)";
var MUTED = "var(--color-muted)";
var FAINT = "var(--color-faint)";
var OAK = "var(--color-oak)";
var SAGE = "var(--color-sage)";
var GLASS = "var(--color-mat-glass)";
var PLASTER = "var(--color-mat-plaster)";
var TEAK = "var(--color-mat-teak)";
var STONE = "var(--color-mat-stone)";
var FONT = "Outfit, sans-serif";
function Defs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
			id: "hatch-earth",
			width: "0.5",
			height: "0.5",
			patternUnits: "userSpaceOnUse",
			patternTransform: "rotate(45)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "0.5",
				stroke: FAINT,
				strokeWidth: "0.05"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
			id: "hatch-cut",
			width: "0.2",
			height: "0.2",
			patternUnits: "userSpaceOnUse",
			patternTransform: "rotate(45)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "0.2",
				stroke: SOFT,
				strokeWidth: "0.05"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("pattern", {
			id: "hatch-fine",
			width: "0.06",
			height: "0.06",
			patternUnits: "userSpaceOnUse",
			patternTransform: "rotate(45)",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "0",
				x2: "0",
				y2: "0.06",
				stroke: SOFT,
				strokeWidth: "0.018"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
			id: "dm-arrow",
			markerWidth: "7",
			markerHeight: "7",
			refX: "6.2",
			refY: "3.5",
			orient: "auto-start-reverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0.7 L6.4 3.5 L0 6.3 z",
				fill: OAK
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
			id: "flow",
			markerWidth: "7",
			markerHeight: "7",
			refX: "6.2",
			refY: "3.5",
			orient: "auto-start-reverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0.7 L6.4 3.5 L0 6.3 z",
				fill: SAGE
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
			id: "dm-s",
			markerWidth: "4",
			markerHeight: "4",
			refX: "3.5",
			refY: "2",
			orient: "auto-start-reverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0.35 L3.6 2 L0 3.65 z",
				fill: OAK
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
			id: "flow-s",
			markerWidth: "4",
			markerHeight: "4",
			refX: "3.5",
			refY: "2",
			orient: "auto-start-reverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0.35 L3.6 2 L0 3.65 z",
				fill: SAGE
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
			id: "ink-s",
			markerWidth: "4",
			markerHeight: "4",
			refX: "3.5",
			refY: "2",
			orient: "auto-start-reverse",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 0.35 L3.6 2 L0 3.65 z",
				fill: SOFT
			})
		})
	] });
}
function DimH({ x1, x2, y, label, s = .3, below = false }) {
	const t = s * .4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: OAK,
		strokeWidth: s * .06,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1,
				y1: y,
				x2,
				y2: y,
				markerStart: "url(#dm-arrow)",
				markerEnd: "url(#dm-arrow)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1,
				y1: y - t,
				x2: x1,
				y2: y + t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x2,
				y1: y - t,
				x2,
				y2: y + t
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: (x1 + x2) / 2,
				y: below ? y + s * 1.1 : y - s * .4,
				textAnchor: "middle",
				fontSize: s,
				fill: OAK,
				fontFamily: FONT,
				stroke: "none",
				children: label
			})
		]
	});
}
function DimV({ x, y1, y2, label, s = .3, right = false }) {
	const t = s * .4;
	const mid = (y1 + y2) / 2;
	const tx = right ? x + s * .9 : x - s * .4;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		stroke: OAK,
		strokeWidth: s * .06,
		fill: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1,
				x2: x,
				y2,
				markerStart: "url(#dm-arrow)",
				markerEnd: "url(#dm-arrow)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x - t,
				y1,
				x2: x + t,
				y2: y1
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x - t,
				y1: y2,
				x2: x + t,
				y2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: tx,
				y: mid,
				textAnchor: "middle",
				fontSize: s,
				fill: OAK,
				fontFamily: FONT,
				stroke: "none",
				transform: `rotate(-90 ${tx} ${mid})`,
				children: label
			})
		]
	});
}
function Leader({ x, y, tx, ty, label, s = .26, anchor = "start" }) {
	const pad = anchor === "end" ? -s * .75 : anchor === "start" ? s * .75 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
			x1: x,
			y1: y,
			x2: tx,
			y2: ty,
			stroke: MUTED,
			strokeWidth: s * .08
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: x,
			cy: y,
			r: s * .17,
			fill: MUTED
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			x: tx + pad,
			y: ty + s * .34,
			textAnchor: anchor,
			fontSize: s,
			fill: SOFT,
			fontFamily: FONT,
			children: label
		})
	] });
}
function T({ x, y, children, s = .3, fill = INK, anchor = "middle", wide = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x,
		y,
		textAnchor: anchor,
		fontSize: s,
		fill,
		fontFamily: FONT,
		letterSpacing: wide ? s * .32 : 0,
		children
	});
}
var Y0 = 12.5;
var yz = (z) => Y0 - z;
var SX = (y) => 8 + y;
var XC = (CORE.x[0] + CORE.x[1]) / 2;
var [H2A, H2B] = CORE.holes.t2.map(SX);
var [CA, CE] = CORE.holes.tum.map(SX);
var FZ = {
	t1: [.45, 4.05],
	t2: [4.05, 7.35],
	tum: [7.35, 10.35]
};
function cutWalls(xc) {
	return [
		"t1",
		"t2",
		"tum"
	].flatMap((id) => WALLS[id].flatMap(([axis, c, a0, a1, gaps = [], th = 100, h]) => {
		if (axis !== "h" || xc < a0 || xc > a1) return [];
		const [z0, zt] = FZ[id];
		const g = gaps.find(([s, e]) => xc >= s && xc <= e);
		return [{
			y: c,
			th: th / 1e3,
			kind: g ? g[2] : "solid",
			z0,
			z1: h ? Math.min(zt - .3, z0 + h) : zt - .3
		}];
	}));
}
var cutFurn = (xc, y0, y1, id = "t1") => FURN[id].filter((f) => f[0] === "r" && f[1] <= xc && xc <= f[1] + f[3] && f[2] >= y0 && f[2] < y1);
var inCore = (y) => y >= CORE.flights.t1.y;
var samples = (y, d) => Array.from({ length: 13 }, (_, i) => y + d - d * i / 12);
function cabPath([, , y, , d, h], X, Z) {
	const top = (yy) => inCore(y) ? Math.max(.01, Math.min(h, stairSoffit(yy))) : h;
	return `M${X(y)} ${Z(0)} L${X(y + d)} ${Z(0)} ` + samples(y, d).map((yy) => `L${X(yy)} ${Z(top(yy))}`).join(" ") + " Z";
}
function displayPath([, , y, , d, h], X, Z) {
	if (!inCore(y) || y + d > flightTop("t1") || stairSoffit(y + d) <= h + .05) return null;
	const top = (yy) => Math.max(h, stairSoffit(yy));
	return `M${X(y)} ${Z(h)} L${X(y + d)} ${Z(h)} ` + samples(y, d).map((yy) => `L${X(yy)} ${Z(top(yy))}`).join(" ") + " Z";
}
function UnderStair({ boxes, X, Z, stroke, sw }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
		fill: "none",
		stroke,
		strokeWidth: sw,
		children: boxes.map((b) => {
			const glass = displayPath(b, X, Z);
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: cabPath(b, X, Z) }), glass && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: glass,
				fill: GLASS,
				opacity: "0.7",
				stroke: INK,
				strokeWidth: sw * 1.4
			})] }, `${b[1]}-${b[2]}`);
		})
	});
}
var FLOOR_ROOM = (id) => {
	const r = FLOORS.flatMap((f) => f.rooms).find((r) => r.id === id);
	if (!r) throw new Error(`thiếu phòng ${id}`);
	return r;
};
function flightCut(id, z0, z1, X, Z, slab = .3) {
	const { y, risers, lead, tail } = CORE.flights[id];
	const R = (z1 - z0) / (lead + risers + tail), T = CORE.tread, top = flightTop(id);
	const zl = z0 + lead * R, zt = zl + risers * R, ly0 = CORE.landing.y[0], ly1 = CORE.landing.top[1];
	let d = lead ? `M${X(ly0)} ${Z(z0)} L${X(ly0)} ${Z(zl)} L${X(y)} ${Z(zl)}` : `M${X(y)} ${Z(z0)}`;
	for (let i = 1; i < risers; i++) d += ` L${X(y + (i - 1) * T)} ${Z(zl + i * R)} L${X(y + i * T)} ${Z(zl + i * R)}`;
	if (!lead) return d + ` L${X(top)} ${Z(z1)} L${X(top)} ${Z(z1 - slab)} L${X(y + .35)} ${Z(z0)} Z`;
	const zs = (yy) => zl + (yy - y) / T * R - .25;
	return d + ` L${X(top)} ${Z(zt)} L${X(ly1)} ${Z(zt)} L${X(ly1)} ${Z(zt - .2)} L${X(top)} ${Z(zt - .2)} L${X(top)} ${Z(zs(top))} L${X(y)} ${Z(Math.max(z0, zs(y)))} L${X(y)} ${Z(z0)} Z`;
}
function sideSteps(z0, z1, X, Z) {
	const { lead, risers, tail } = CORE.flights.t1;
	const R = (z1 - z0) / (lead + risers + tail);
	const [a0, a1] = CORE.landing.y, [b0, b1] = CORE.landing.top;
	return [...Array.from({ length: lead - 1 }, (_, k) => [
		a0,
		a1,
		z0 + (k + 1) * R
	]), ...Array.from({ length: tail - 1 }, (_, k) => [
		b0,
		b1,
		z0 + (lead + risers + k + 1) * R
	])].map(([p, q, z]) => `M${X(p)} ${Z(z)} L${X(q)} ${Z(z)}`).join(" ");
}
var LEVEL_TAGS = [
	{
		z: 0,
		t: "±0.00 sân"
	},
	{
		z: .45,
		t: "+0.45 nền T1"
	},
	{
		z: 4.05,
		t: "+4.05 sàn T2"
	},
	{
		z: 7.35,
		t: "+7.35 sàn tum"
	},
	{
		z: 10.35,
		t: "+10.35 mái tum"
	},
	{
		z: 11.2,
		t: "+11.20 đỉnh"
	}
];
function SectionAA() {
	const cut = {
		fill: "url(#hatch-cut)",
		stroke: INK,
		strokeWidth: .05
	};
	const glass = {
		fill: GLASS,
		stroke: INK,
		strokeWidth: .04
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-2.9 0.6 35.9 13.9",
		className: "w-full",
		role: "img",
		"aria-label": "Mặt cắt dọc A–A qua giếng trời và lõi thang",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-2.9",
				y: "0.6",
				width: "35.9",
				height: "13.9",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.4",
				y: Y0,
				width: "30.8",
				height: "0.6",
				fill: "url(#hatch-earth)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "-0.4",
				y1: Y0,
				x2: "30.4",
				y2: Y0,
				stroke: INK,
				strokeWidth: "0.06"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: yz(2.05),
				width: "0.1",
				height: "2.05",
				fill: SOFT
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.25",
				y: yz(2.5),
				width: "0.5",
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: .35,
				y: yz(2.15),
				s: .26,
				fill: MUTED,
				anchor: "start",
				children: "Cổng 2.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: FAINT,
				strokeWidth: "0.05",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M0.75 ${Y0} L0.95 ${yz(.9)} L4.35 ${yz(.9)} L5.05 ${Y0} Z` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M1.75 ${yz(.9)} L2.15 ${yz(1.5)} L3.55 ${yz(1.5)} L3.95 ${yz(.9)}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "1.65",
						cy: Y0,
						r: "0.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: "4.25",
						cy: Y0,
						r: "0.3"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 2.6,
				y: yz(2.05),
				s: .26,
				fill: MUTED,
				children: "chỗ đỗ 1 xe"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: SAGE,
				opacity: "0.4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "6.3",
					cy: yz(1.55),
					r: "0.55"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "7.05",
					cy: yz(.85),
					r: "0.32"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "6.3",
				y1: yz(1),
				x2: "6.3",
				y2: Y0,
				stroke: SAGE,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M7.1 ${Y0} L7.1 ${yz(.15)} L7.4 ${yz(.15)} L7.4 ${yz(.3)} L7.7 ${yz(.3)} L7.7 ${yz(.45)} L8 ${yz(.45)}`,
				fill: "none",
				stroke: INK,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${CA} ${yz(10.35)} L${CE} ${yz(10.35)} L${CE} ${yz(4.05)} L${H2B} ${yz(4.05)} L${H2B} ${yz(.45)} L${H2A} ${yz(.45)} L${H2A} ${yz(4.05)} L${CA} ${yz(4.05)} Z`,
				fill: "var(--color-plan-void)",
				opacity: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: yz(.45),
				width: "18",
				height: "0.3",
				...cut
			}),
			[[
				4.05,
				H2A,
				H2B
			], [
				7.35,
				CA,
				CE
			]].map(([z, a, b]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: yz(z),
				width: a - 8,
				height: "0.3",
				...cut
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: b,
				y: yz(z),
				width: 26 - b,
				height: "0.3",
				...cut
			})] }, z)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: SX(4.5),
				y: yz(10.35),
				width: CA - SX(4.5),
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: CE,
				y: yz(10.35),
				width: SX(13.6) - CE,
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25.8",
				y: yz(7.35),
				width: "0.2",
				height: "6.9",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25.8",
				y: yz(8.45),
				width: "0.2",
				height: "1.1",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: SX(13.6),
				y: yz(11.2),
				width: "0.2",
				height: "3.85",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: SX(4.5),
				y: yz(11.2),
				width: "0.2",
				height: "1.15",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: SX(4.5),
				y: yz(10.05),
				width: "0.15",
				height: "2.7",
				...glass
			}),
			cutWalls(XC).map((w) => {
				const z0 = w.kind === "door" ? w.z0 + 2.2 : w.z0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: SX(w.y) - w.th / 2,
					y: yz(w.z1),
					width: w.th,
					height: w.z1 - z0,
					...w.kind === "solid" || w.kind === "door" ? cut : glass
				}, `${w.y}-${w.z0}`);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8.55",
				y: yz(3.15),
				width: "0.12",
				height: "2.7",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8.5",
				y: yz(3.75),
				width: "0.2",
				height: "0.6",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.4",
				y: yz(3.6),
				width: "1.1",
				height: "0.05",
				fill: TEAK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.4",
				y: yz(4),
				width: "0.6",
				height: "0.4",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.4",
				y: yz(7.35),
				width: "0.6",
				height: "0.45",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.4",
				y: yz(6.9),
				width: "1.6",
				height: "0.05",
				fill: TEAK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "7.69",
				y1: yz(4.05),
				x2: "7.69",
				y2: yz(5.1),
				stroke: INK,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "7.6",
				y1: yz(5.1),
				x2: "7.78",
				y2: yz(5.1),
				stroke: INK,
				strokeWidth: "0.06"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "9.05",
				y: yz(6.75),
				width: "0.12",
				height: "2.7",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.9",
				y: yz(7.8),
				width: "0.2",
				height: "0.45",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "8",
				y1: yz(7.8),
				x2: "8",
				y2: yz(8.45),
				stroke: INK,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25.88",
				y: yz(6.3),
				width: "0.12",
				height: "1.8",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.9",
				y: yz(10.65),
				width: "0.1",
				height: "2.2",
				fill: SOFT
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.7",
				y: yz(10.77),
				width: SX(4.5) - 7.7,
				height: "0.12",
				fill: INK,
				opacity: "0.75"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "7.85",
				y: yz(10.65),
				width: SX(4.35) - 7.85,
				height: "0.12",
				fill: INK,
				opacity: "0.45"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 10.3,
				y: yz(11.05),
				s: .22,
				fill: MUTED,
				children: "pergola lam đen"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: CA - .2,
				y: yz(10.8),
				width: "0.2",
				height: "0.45",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: CE,
				y: yz(10.8),
				width: "0.2",
				height: "0.45",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${CA - .1} ${yz(10.98)} L${CE + .1} ${yz(10.8)}`,
				stroke: GLASS,
				strokeWidth: "0.18",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${CA - .1} ${yz(10.98)} L${CE + .1} ${yz(10.8)}`,
				stroke: INK,
				strokeWidth: "0.035"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: sideSteps(.45, 4.05, SX, yz),
				stroke: FAINT,
				strokeWidth: "0.03",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: flightCut("t1", .45, 4.05, SX, yz),
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: flightCut("t2", 4.05, 7.35, SX, yz),
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderStair, {
				boxes: [...cutFurn(XC, 4.5, 13.4), ...cutFurn(XC, 18, 22)],
				X: SX,
				Z: (z) => yz(.45 + z),
				stroke: FAINT,
				sw: .035
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(6.6),
				y: yz(.53),
				s: .13,
				fill: MUTED,
				anchor: "end",
				children: "kệ rượu"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(7.95),
				y: yz(.8),
				s: .13,
				fill: MUTED,
				children: "tủ thấp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(8.6),
				y: yz(.45 + 1.4),
				s: .13,
				fill: MUTED,
				children: "tủ kính"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(10.55),
				y: yz(2.6),
				s: .13,
				fill: MUTED,
				children: "tủ cao · tủ lạnh · lò"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(12.5),
				y: yz(1.65),
				s: .13,
				fill: MUTED,
				children: "bếp chữ L"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: SX(18),
				y: yz(.45),
				width: 3.8,
				height: "0.45",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: SX(18),
				y: yz(3.23),
				width: 3.85,
				height: "0.18",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: SAGE,
				strokeWidth: "0.07",
				fill: "none",
				markerEnd: "url(#flow)",
				opacity: "0.9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M9.4 ${yz(2.75)} L${SX(5.6)} ${yz(2.75)}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M${SX(6.4)} ${yz(2.6)} L${SX(8.1)} ${yz(10)}` })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 11.1,
				y: yz(2.95),
				s: .26,
				fill: SAGE,
				children: "gió xuyên nhà"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(11.1),
				y: yz(9.6),
				s: .22,
				fill: SAGE,
				anchor: "start",
				children: "khí nóng bốc lên"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${CA - 1} ${yz(12.5)} L${CA + 1.2} ${yz(10.95)}`,
				stroke: OAK,
				strokeWidth: "0.06",
				strokeDasharray: "0.3 0.18",
				markerEnd: "url(#dm-arrow)",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: CA - 1.2,
				y: yz(12.5),
				s: .26,
				fill: OAK,
				anchor: "end",
				children: "nắng đỉnh"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 10.5,
				y: yz(1.6),
				s: .32,
				children: "Phòng khách"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(7.2),
				y: yz(3.3),
				s: .24,
				anchor: "end",
				children: "Tủ liền gầm thang"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(15.7),
				y: yz(1.6),
				s: .32,
				children: "Phòng ngủ 01"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(19.7),
				y: yz(1.6),
				s: .26,
				children: "WC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 11.05,
				y: yz(5.2),
				s: .32,
				children: "Phòng ngủ 02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(13.2),
				y: yz(5.2),
				s: .32,
				children: "Phòng ngủ 03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(16.45),
				y: yz(5.2),
				s: .32,
				children: "Phòng ngủ 04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 8.15,
				y: yz(6.2),
				s: .22,
				fill: MUTED,
				anchor: "start",
				children: "Loggia"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 10.3,
				y: yz(8.3),
				s: .3,
				fill: MUTED,
				children: "Sân thượng"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(5.95),
				y: yz(8.5),
				s: .3,
				children: "Phòng thờ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: SX(12.4),
				y: yz(8.3),
				s: .3,
				children: "Sảnh tum"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 23.9,
				y: yz(8.3),
				s: .3,
				fill: MUTED,
				children: "Sân phơi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: (CA + CE) / 2,
				y: yz(9.4),
				s: .24,
				fill: SOFT,
				children: "Giếng thang"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 4,
				y: yz(2.7),
				s: .3,
				fill: MUTED,
				children: "Sân trước 8.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 28,
				y: yz(3.7),
				s: .3,
				fill: MUTED,
				children: "Sân sau 4.00"
			}),
			LEVEL_TAGS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "26.1",
					y1: yz(l.z),
					x2: "30.2",
					y2: yz(l.z),
					stroke: FAINT,
					strokeWidth: "0.03",
					strokeDasharray: "0.2 0.16"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M30.2 ${yz(l.z)} l-0.24 -0.17 l0 0.34 z`,
					fill: OAK
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 30.4,
					y: yz(l.z) + .1,
					s: .27,
					fill: OAK,
					anchor: "start",
					children: l.t
				})
			] }, l.t)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.55,
				y1: yz(.45),
				y2: yz(4.05),
				label: "3.60"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.55,
				y1: yz(4.05),
				y2: yz(7.35),
				label: "3.30"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.55,
				y1: yz(7.35),
				y2: yz(10.35),
				label: "3.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -1.85,
				y1: yz(0),
				y2: yz(11.2),
				label: "11.20"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 0,
				x2: 8,
				y: 13.3,
				label: "8.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 8,
				x2: 26,
				y: 13.3,
				label: "18.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 26,
				x2: 30,
				y: 13.3,
				label: "4.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 0,
				x2: 30,
				y: 14.1,
				label: "30.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 0,
				y: yz(11.6),
				s: .34,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "MẶT CẮT A–A"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 0,
				y: yz(11.05),
				s: .26,
				fill: MUTED,
				anchor: "start",
				children: "cắt x = 0.70 qua hai vế thang chồng nhau · nhìn về tường trái"
			})
		]
	});
}
var YE = 12.4;
var ye = (z) => YE - z;
var BEIGE = "var(--color-mat-beige)";
var range = (a, b, s) => Array.from({ length: Math.floor((b - a) / s + 1e-6) + 1 }, (_, i) => +(a + i * s).toFixed(3));
function rr(x0, z0, x1, z1, [bl, br, tr, tl]) {
	return `M${x0 + bl} ${ye(z0)} L${x1 - br} ${ye(z0)} Q${x1} ${ye(z0)} ${x1} ${ye(z0 + br)} L${x1} ${ye(z1 - tr)} Q${x1} ${ye(z1)} ${x1 - tr} ${ye(z1)} L${x0 + tl} ${ye(z1)} Q${x0} ${ye(z1)} ${x0} ${ye(z1 - tl)} L${x0} ${ye(z0 + bl)} Q${x0} ${ye(z0)} ${x0 + bl} ${ye(z0)} Z`;
}
function Elevation() {
	const line = {
		stroke: INK,
		strokeWidth: .04
	};
	const X = (y) => 8.3 + (y + 1) * .9;
	const Z = (z) => 12 - (z - 3.6) * .9;
	const cutA = {
		fill: "url(#hatch-cut)",
		stroke: INK,
		strokeWidth: .03
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-2.1 0.35 15.6 13.9",
		className: "w-full",
		role: "img",
		"aria-label": "Mặt đứng mặt tiền và chi tiết cắt khung loggia bo cong",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-2.1",
				y: "0.35",
				width: "15.6",
				height: "13.9",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.6",
				y: YE,
				width: "6.2",
				height: "0.3",
				fill: "url(#hatch-earth)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "-0.6",
				y1: YE,
				x2: "5.6",
				y2: YE,
				stroke: INK,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(11.2),
				width: "5",
				height: "3.85",
				fill: "var(--color-paper-2)",
				stroke: FAINT,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.2",
				y: ye(9.75),
				width: "4.6",
				height: "2.4",
				fill: GLASS,
				stroke: FAINT,
				strokeWidth: "0.03",
				opacity: "0.75"
			}),
			[1.9, 3.1].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1: ye(9.75),
				x2: x,
				y2: ye(7.35),
				stroke: FAINT,
				strokeWidth: "0.04"
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "-0.3",
				y1: ye(11.2),
				x2: "5.3",
				y2: ye(11.2),
				stroke: FAINT,
				strokeWidth: "0.03",
				strokeDasharray: "0.16 0.12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 5.35,
				y: ye(11.15),
				s: .22,
				fill: FAINT,
				anchor: "start",
				children: "đỉnh mái kính giếng (khuất)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(.45),
				width: "5",
				height: "0.45",
				fill: STONE,
				opacity: "0.55",
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(3.75),
				width: "0.4",
				height: "3.3",
				fill: PLASTER,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.6",
				y: ye(3.75),
				width: "0.4",
				height: "3.3",
				fill: PLASTER,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.4",
				y: ye(3.15),
				width: "4.2",
				height: "2.7",
				fill: GLASS,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.4",
				y: ye(3.15),
				width: "4.2",
				height: "0.35",
				fill: INK,
				opacity: "0.14"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "2.5",
				y1: ye(3.15),
				x2: "2.5",
				y2: ye(.45),
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.4",
				y: ye(3.75),
				width: "4.2",
				height: "0.6",
				fill: BEIGE,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.45",
				y: ye(6.9),
				width: "4.1",
				height: "2.9",
				fill: GLASS,
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.45",
				y: ye(6.9),
				width: "4.1",
				height: "0.2",
				fill: TEAK,
				opacity: "0.6"
			}),
			[1.73, 3.27].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1: ye(6.6),
				x2: x,
				y2: ye(4.05),
				stroke: INK,
				strokeWidth: "0.03"
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: rr(0, 3.6, 5, 7.35, [
					.15,
					.15,
					.75,
					.15
				]) + " " + rr(.45, 4, 4.55, 6.9, [
					.75,
					.1,
					.1,
					.1
				]),
				fill: PLASTER,
				fillRule: "evenodd",
				stroke: INK,
				strokeWidth: "0.045"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: INK,
				children: [range(.5, 4.5, .1).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x,
					y: ye(5.1),
					width: "0.02",
					height: "1.05"
				}, x)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0.45",
					y: ye(5.1),
					width: "4.1",
					height: "0.04"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.7",
				y: ye(5.1),
				width: "1.25",
				height: "0.7",
				fill: BEIGE,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: SAGE,
				opacity: "0.55",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "4.0",
					cy: ye(5.3),
					r: "0.25"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "4.45",
					cy: ye(5.4),
					r: "0.32"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.3",
				y: ye(8.15),
				width: "1.4",
				height: "0.35",
				fill: BEIGE,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "1.0",
				cy: ye(8.55),
				r: "0.42",
				fill: SAGE,
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(8.45),
				width: "0.2",
				height: "1.1",
				fill: PLASTER,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.8",
				y: ye(8.45),
				width: "0.2",
				height: "1.1",
				fill: PLASTER,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.2",
				y: ye(7.8),
				width: "4.6",
				height: "0.45",
				fill: PLASTER,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: INK,
				children: [
					range(.3, 4.7, .1).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x,
						y: ye(8.43),
						width: "0.02",
						height: "0.63"
					}, x)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "0.2",
						y: ye(8.45),
						width: "4.6",
						height: "0.04"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "0.2",
						y: ye(10.65),
						width: "0.1",
						height: "2.2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "0.2",
						y: ye(10.65),
						width: "4.6",
						height: "0.12"
					}),
					range(.3, 4.7, .22).map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x,
						y: ye(10.77),
						width: "0.05",
						height: "0.12"
					}, x))
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.8",
				y: ye(11.05),
				width: "0.25",
				height: "2.6",
				fill: BEIGE,
				...line
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.9,
				y: ye(6.8),
				tx: 5.4,
				ty: ye(6.6),
				label: "khung trắng bo cong nhô 0.60",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 1,
				y: ye(8.15),
				tx: 5.4,
				ty: ye(9.1),
				label: "bồn cây sân thượng",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.92,
				y: ye(10),
				tx: 5.4,
				ty: ye(10.2),
				label: "giàn pergola trên trụ be",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 3.4,
				y: ye(8.1),
				tx: 5.4,
				ty: ye(8.2),
				label: "lan can trắng + nan đen",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.3,
				y: ye(4.75),
				tx: 5.4,
				ty: ye(5.2),
				label: "bồn cây be",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.5,
				y: ye(4.6),
				tx: 5.4,
				ty: ye(4.45),
				label: "nan đen 20 @ 100",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.5,
				y: ye(3.45),
				tx: 5.4,
				ty: ye(3.5),
				label: "dải đá be, trần gỗ",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.5,
				y: ye(1.8),
				tx: 5.4,
				ty: ye(1.6),
				label: "kính low-E, lùi 0.60 m",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.2,
				y: ye(.22),
				tx: 5.4,
				ty: ye(.15),
				label: "bệ granite 30 mm",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.55,
				y1: ye(.45),
				y2: ye(4.05),
				label: "3.60",
				s: .26
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.55,
				y1: ye(4.05),
				y2: ye(7.35),
				label: "3.30",
				s: .26
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.55,
				y1: ye(7.35),
				y2: ye(10.35),
				label: "3.00",
				s: .26
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -1.45,
				y1: ye(0),
				y2: ye(11.2),
				label: "11.20",
				s: .26
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: .4,
				x2: 4.6,
				y: 13.05,
				label: "4.20",
				s: .26
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 0,
				x2: 5,
				y: 13.62,
				label: "5.00",
				s: .26
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 0,
				y: ye(11.75),
				s: .32,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "MẶT ĐỨNG MẶT TIỀN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 8,
					y: 7.35,
					s: .28,
					fill: SAGE,
					anchor: "start",
					wide: true,
					children: "CHI TIẾT A"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 8,
					y: 7.75,
					s: .22,
					fill: MUTED,
					anchor: "start",
					children: "cắt đứng khung loggia · mặt tiền bên trái"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: X(0),
					y: Z(7.35),
					width: X(1.3) - X(0),
					height: .27,
					...cutA
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: X(0),
					y: Z(4.05),
					width: X(1.3) - X(0),
					height: .27,
					...cutA
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: X(-.6),
					y: Z(7.35),
					width: .54,
					height: .405,
					...cutA
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: X(-.6),
					y: Z(4),
					width: .54,
					height: .36,
					...cutA
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: X(-.6),
					y: Z(6.9),
					width: X(1) - X(-.6),
					height: "0.05",
					fill: TEAK
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: X(1.08),
					y: Z(6.75),
					width: "0.05",
					height: 2.43,
					fill: GLASS,
					stroke: INK,
					strokeWidth: "0.02"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: X(-.31),
					y1: Z(4),
					x2: X(-.31),
					y2: Z(5.1),
					stroke: INK,
					strokeWidth: "0.04"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: X(-.36),
					y1: Z(5.1),
					x2: X(-.26),
					y2: Z(5.1),
					stroke: INK,
					strokeWidth: "0.06"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: X(-1),
					y: Z(5.1),
					width: .585,
					height: .63,
					fill: BEIGE,
					stroke: INK,
					strokeWidth: "0.025"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: X(-.7),
					cy: Z(5.35),
					r: "0.22",
					fill: SAGE,
					opacity: "0.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: X(-.6),
					x2: X(0),
					y: Z(7.35) - .25,
					label: "600",
					s: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
					x: X(1.3) + .25,
					y1: Z(7.35),
					y2: Z(6.9),
					label: "450",
					s: .16,
					right: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
					x: X(-1) - .15,
					y1: Z(4.05),
					y2: Z(5.1),
					label: "1 050",
					s: .16
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
					x: X(-.3),
					y: Z(7.1),
					tx: X(1.3) + .6,
					ty: Z(7.6),
					label: "khung BT trắng nhô 600",
					s: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
					x: X(.5),
					y: Z(6.9) + .03,
					tx: X(1.3) + .6,
					ty: Z(6.4),
					label: "trần gỗ nan + đèn lon",
					s: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
					x: X(1.1),
					y: Z(5.6),
					tx: X(1.3) + .6,
					ty: Z(5.6),
					label: "kính master lùi 1 100",
					s: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
					x: X(-.31),
					y: Z(4.7),
					tx: X(1.3) + .6,
					ty: Z(4.75),
					label: "nan sắt đen 20 @ 100",
					s: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
					x: X(-.7),
					y: Z(4.6),
					tx: X(1.3) + .6,
					ty: Z(4.2),
					label: "bồn cây be",
					s: .18
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 8,
					y: 12.45,
					s: .2,
					fill: SOFT,
					anchor: "start",
					children: "bo góc R 750: góc trên phải khung, góc dưới trái ô mở"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 8,
					y: 12.8,
					s: .2,
					fill: MUTED,
					anchor: "start",
					children: "nan sắt đen suốt ô mở 4.10 m, không lam gỗ"
				})
			] })
		]
	});
}
var ST = CORE.flights.t1;
var TREAD = CORE.tread;
var RISE = riseOf("t1");
var N_RISE = ST.lead + ST.risers + ST.tail;
var ZL = ST.lead * RISE;
var ZT = (ST.lead + ST.risers) * RISE;
var U0 = ST.y;
var su = (y) => y - U0;
var STOP = su(flightTop("t1"));
var [HA, HB] = CORE.holes.t2.map(su);
var [LA, LB] = CORE.landing.y.map(su);
var [TA, TB] = CORE.landing.top.map(su);
var XF = CORE.x[1] + (ST.lead - 1) * TREAD;
var YS = 4.9;
var ys = (z) => YS - z;
var nose = (u) => RISE * (u / TREAD + 1 + ST.lead);
var STEP_AT_HOLE = (Math.ceil(HA / TREAD) + ST.lead) * RISE;
var RISE_MM = String(+(RISE * 1e3).toFixed(1));
var HEAD = 3.45 - STEP_AT_HOLE;
var mm = (m) => Math.round(m * 1e3).toLocaleString("en-US").replace(",", " ");
var pv = (x) => 6.35 + (x - CORE.x[0]);
var KY = 13.4;
var KU = su(KY);
var STEPS_X = Array.from({ length: ST.lead }, (_, k) => CORE.x[1] + k * TREAD);
function StairDetail() {
	const risers = Array.from({ length: ST.risers }, (_, i) => i * TREAD);
	const cab = cutFurn(XC, 4.5, KY);
	const plan = FURN.t1.filter((f) => f[0] === "r" && f[1] < CORE.x[1] && f[1] + f[3] > CORE.x[0] && f[2] >= 4.5 && f[2] < KY);
	const step13 = 12 * TREAD;
	const stripH = pv(CORE.x[1]) - pv(CORE.x[0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-2.5 0.1 11.9 9.8",
		className: "w-full",
		role: "img",
		"aria-label": "Chi tiết cầu thang chữ U ba cạnh: mặt cắt vế T1 qua hai chiếu nghỉ và mặt bằng dải thang sát tường trái",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-2.5",
				y: "0.1",
				width: "11.9",
				height: "9.8",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0 ${ys(nose(0))} L${STOP} ${ys(ZT)} L${STOP} ${ys(ZT + 1.1)} L0 ${ys(nose(0) + 1.1)} Z`,
				fill: GLASS,
				opacity: "0.22"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: LA - .01,
				y: ys(ZL + 1),
				width: "0.02",
				height: "1.0",
				fill: GLASS,
				stroke: INK,
				strokeWidth: "0.015"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: LA,
				y1: ys(ZL + 1),
				x2: LB,
				y2: ys(ZL + 1),
				stroke: SOFT,
				strokeWidth: "0.05",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: sideSteps(0, 3.6, su, ys),
				stroke: FAINT,
				strokeWidth: "0.02",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-1.8",
				y: ys(0),
				width: "1.8",
				height: "0.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M-1.8 ${ys(3.6)} L${HA} ${ys(3.6)} L${HA} ${ys(3.45)} L${HA - .45} ${ys(3.45)} L${HA - .6} ${ys(3.3)} L-1.8 ${ys(3.3)} Z`,
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: HB,
				y: ys(3.6),
				width: KU - HB,
				height: "0.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: flightCut("t1", 0, 3.6, su, ys),
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.035"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0 ${ys(nose(0) + .9)} L${STOP} ${ys(ZT + .9)} L${STOP} ${ys(4.5)}`,
				fill: "none",
				stroke: SOFT,
				strokeWidth: "0.05",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnderStair, {
				boxes: cab,
				X: su,
				Z: ys,
				stroke: FAINT,
				sw: .025
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: KU - .05,
				y: ys(3.3),
				width: "0.1",
				height: "3.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0.4 ${ys(ZL)} a 0.55 0.55 0 0 1 0.47 0.3`,
				fill: "none",
				stroke: OAK,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: .65,
				y: ys(ZL - .14),
				s: .14,
				fill: OAK,
				anchor: "start",
				children: `${(Math.atan(RISE / TREAD) * 180 / Math.PI).toFixed(1)}°`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: step13 - TREAD,
				x2: step13,
				y: ys((12 + ST.lead) * RISE + .12),
				label: "260",
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: step13,
				y: ys((12.5 + ST.lead) * RISE),
				tx: 2,
				ty: ys(3.3),
				label: `cổ bậc ${RISE_MM}`,
				s: .13,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: HA + .14,
				y1: ys(STEP_AT_HOLE),
				y2: ys(3.45),
				label: mm(HEAD),
				s: .13,
				right: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: HA,
				y: ys(3.52),
				tx: -.3,
				ty: ys(3.75),
				label: `mép lỗ sàn T2 · y ${CORE.holes.t2[0].toFixed(2)}`,
				s: .13,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: KU - .1,
				y: ys(3.72),
				s: .13,
				fill: SOFT,
				anchor: "end",
				children: `sàn T2 · y ${CORE.landing.top[1].toFixed(2)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: (TA + TB) / 2,
				y: ys(ZT - .1),
				tx: 5.2,
				ty: ys(4.55),
				label: `chiếu nghỉ sau +${mm(ZT)} = ${ST.lead + ST.risers} × ${RISE_MM} · bản 200`,
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: TB - .15,
				y: ys(ZT + 3 * RISE),
				tx: 5.2,
				ty: ys(4.25),
				label: `cạnh 3: ${ST.tail - 1} bậc x ${CORE.x[1].toFixed(2)} → ${XF.toFixed(2)} (sau mặt cắt)`,
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 1.6,
				y: ys(nose(1.6) + .9),
				tx: .9,
				ty: ys(3),
				label: "tay vịn đồng 900 · kính 1 100",
				s: .13,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 1.17,
				y: ys(nose(1.17) - .05),
				tx: .9,
				ty: ys(2.6),
				label: "bậc đá trắng · LED hắt mũi",
				s: .13,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.6,
				y: ys(stairSoffit(2.6 + U0) + .1),
				tx: .9,
				ty: ys(2.2),
				label: "bản BTCT 120 + trát",
				s: .13,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: (LA + LB) / 2,
				y: ys(ZL - .2),
				tx: -1.05,
				ty: ys(1.3),
				label: `chiếu nghỉ đặc +${mm(ZL)}`,
				s: .13,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 2.4,
				y: ys(.3),
				s: .12,
				fill: MUTED,
				anchor: "start",
				children: "gầm thang: khối tủ đặc cắt theo dốc — kệ rượu → tủ thấp + tủ kính → tủ cao"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 0,
				x2: STOP,
				y: 5.65,
				label: `${mm(STOP)} = ${ST.risers - 1} × 260`,
				s: .15
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: LA,
				x2: LB,
				y: 5.65,
				label: "1 000",
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: TA,
				x2: TB,
				y: 5.65,
				label: "1 000",
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: LA - .3,
				y1: ys(0),
				y2: ys(ZL),
				label: `${mm(ZL)} = ${ST.lead} × ${RISE_MM}`,
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: KU + .35,
				y1: ys(0),
				y2: ys(3.6),
				label: `3 600 = ${N_RISE} × ${RISE_MM}`,
				s: .15,
				right: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -2.35,
				y: .5,
				s: .17,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "(a) MẶT CẮT VẾ T1 → T2 QUA HAI CHIẾU NGHỈ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -2.35,
				y: .85,
				s: .14,
				fill: MUTED,
				anchor: "start",
				children: `${N_RISE} cổ bậc × ${RISE_MM} · 2 chiếu nghỉ 1.00 × 1.00 tại +${mm(ZL)} và +${mm(ZT)} · cạnh 2: ${ST.risers - 1} mặt bậc × 260`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "-1.8",
					y: pv(0),
					width: KU + 1.8,
					height: "0.2",
					fill: "url(#hatch-cut)",
					stroke: INK,
					strokeWidth: "0.03"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "0",
					y: pv(CORE.x[0]),
					width: TB,
					height: stripH,
					fill: "var(--color-plan-stair)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: LA,
					y: pv(CORE.x[0]),
					width: LB - LA,
					height: pv(XF) - pv(CORE.x[0]),
					fill: "var(--color-plan-stair)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: LA,
					y: pv(CORE.x[0]),
					width: LB - LA,
					height: stripH,
					fill: "none",
					stroke: SOFT,
					strokeWidth: "0.025"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: TA,
					y: pv(CORE.x[1]),
					width: TB - TA,
					height: pv(XF) - pv(CORE.x[1]),
					fill: "var(--color-plan-stair)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: TA,
					y: pv(CORE.x[0]),
					width: TB - TA,
					height: stripH,
					fill: "none",
					stroke: SOFT,
					strokeWidth: "0.025"
				}),
				STEPS_X.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					stroke: SOFT,
					strokeWidth: "0.025",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: LA,
						y1: pv(x),
						x2: LB,
						y2: pv(x)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: TA,
						y1: pv(x),
						x2: TB,
						y2: pv(x)
					})]
				}, `s${x}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: su(3.9),
					y: pv(XF),
					width: 1.15,
					height: .5,
					fill: "none",
					stroke: OAK,
					strokeWidth: "0.03"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: su(3.9) + .575,
					y: pv(XF) + .3,
					s: .1,
					fill: OAK,
					children: "bục gỗ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M${LA} ${pv(XF)} L${LA} ${pv(CORE.x[0])} M${LB} ${pv(XF)} L${LB} ${pv(CORE.x[1])} M${TA} ${pv(CORE.x[1])} L${TA} ${pv(XF)}`,
					stroke: GLASS,
					strokeWidth: "0.06"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: (LA + LB) / 2,
					y: pv(CORE.x[0]) + .2,
					s: .1,
					fill: SOFT,
					children: `chiếu nghỉ +${mm(ZL)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: (TA + TB) / 2,
					y: pv(CORE.x[0]) + .2,
					s: .1,
					fill: SOFT,
					children: `chiếu nghỉ +${mm(ZT)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: TB,
					y: pv(CORE.x[0]),
					width: KU - TB,
					height: stripH,
					fill: "var(--color-plan-kitchen)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: KU - .05,
					y: pv(CORE.x[0]),
					width: "0.1",
					height: stripH,
					fill: "url(#hatch-cut)",
					stroke: INK,
					strokeWidth: "0.03"
				}),
				plan.map(([, x, y, w, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: su(y),
					y: pv(x),
					width: d,
					height: Math.min(x + w, CORE.x[1]) - x,
					fill: "none",
					stroke: MUTED,
					strokeWidth: "0.025",
					strokeDasharray: "0.08 0.05"
				}, `p${y}`)),
				risers.map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: u,
					y1: pv(CORE.x[0]),
					x2: u,
					y2: pv(CORE.x[1]),
					stroke: SOFT,
					strokeWidth: "0.025"
				}, u)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: pv(CORE.x[1]),
					x2: STOP,
					y2: pv(CORE.x[1]),
					stroke: GLASS,
					strokeWidth: "0.06"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					fill: "none",
					stroke: INK,
					strokeWidth: "0.03",
					strokeDasharray: "0.16 0.1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: HA,
						y: pv(CORE.x[0]),
						width: HB - HA,
						height: stripH
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: su(CORE.tailHole.y[0]),
						y: pv(CORE.tailHole.x[0]),
						width: CORE.tailHole.y[1] - CORE.tailHole.y[0],
						height: CORE.tailHole.x[1] - CORE.tailHole.x[0]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: (HA + TA) / 2,
					y: 6.6,
					s: .12,
					fill: SOFT,
					children: `lỗ sàn T2 phía trên · 1 000 × ${mm(HB - HA)}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: `M${(LA + LB) / 2} ${pv(XF) - .1} L${(LA + LB) / 2} 6.85 L${(TA + TB) / 2} 6.85 L${(TA + TB) / 2} ${pv(XF) - .12}`,
					fill: "none",
					stroke: SAGE,
					strokeWidth: "0.045",
					markerEnd: "url(#flow-s)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: (LA + LB) / 2,
					cy: pv(XF) - .1,
					r: "0.06",
					fill: SAGE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: .3,
					y: 7.25,
					s: .13,
					fill: SAGE,
					anchor: "start",
					children: "LÊN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 6.6,
					y: 6.9,
					s: .11,
					fill: MUTED,
					children: "tủ lạnh · lò · bếp L"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
					x: -1.6,
					y1: pv(CORE.x[0]),
					y2: pv(CORE.x[1]),
					label: "1 000",
					s: .13
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
					x: -1.6,
					y1: pv(CORE.x[1]),
					y2: pv(XF),
					label: `${ST.lead - 1} × 260`,
					s: .11
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: 0,
					x2: STOP,
					y: 7.85,
					label: mm(STOP),
					s: .14,
					below: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: TA,
					x2: TB,
					y: pv(XF) + .35,
					label: "1 000",
					s: .12,
					below: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: HA,
					x2: HB,
					y: 6,
					label: `lỗ ${mm(HB - HA)}`,
					s: .11
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: -2.35,
					y: 8.95,
					s: .17,
					fill: SAGE,
					anchor: "start",
					wide: true,
					children: "(b) MẶT BẰNG DẢI THANG T1 — CHỮ U BA CẠNH"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: -2.35,
					y: 9.3,
					s: .13,
					fill: MUTED,
					anchor: "start",
					children: `cạnh 1: bục gỗ → ${ST.lead - 1} bậc ngang x ${XF.toFixed(2)} → ${CORE.x[1].toFixed(2)} → chiếu nghỉ trước y ${CORE.landing.y[0].toFixed(2)}–${CORE.landing.y[1].toFixed(2)} · cạnh 2 sát tường trái y ${U0.toFixed(2)} → ${flightTop("t1").toFixed(2)} · chiếu nghỉ sau y ${CORE.landing.top[0].toFixed(2)}–${CORE.landing.top[1].toFixed(2)} · cạnh 3: ${ST.tail - 1} bậc x ${CORE.x[1].toFixed(2)} → ${XF.toFixed(2)} lên sàn T2 "Đầu thang"`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: -2.35,
					y: 9.62,
					s: .13,
					fill: MUTED,
					anchor: "start",
					children: `lỗ sàn T2: x ${CORE.x[0].toFixed(2)}–${CORE.x[1].toFixed(2)}, y ${CORE.holes.t2[0].toFixed(2)}–${CORE.holes.t2[1].toFixed(2)} + x ${CORE.tailHole.x[0].toFixed(2)}–${CORE.tailHole.x[1].toFixed(2)}, y ${CORE.tailHole.y[0].toFixed(2)}–${CORE.tailHole.y[1].toFixed(2)} · vế T2 → tum chồng đúng phía trên cạnh 2: y ${CORE.flights.t2.y.toFixed(2)} → ${flightTop("t2").toFixed(2)}`
				})
			] })
		]
	});
}
var gy = (x) => 1.4 + (5.2 - x) / 5 * .25;
function VoidDetail() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-1.5 0.35 9.6 4.0",
		className: "w-full",
		role: "img",
		"aria-label": "Chi tiết mái kính trên dải thang và khe thoát khí",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-1.5",
				y: "0.35",
				width: "9.6",
				height: "4.0",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.1",
				y: "3.1",
				width: "2.1",
				height: "0.4",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.6",
				y: "1.7",
				width: "0.5",
				height: "1.4",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0.2 ${gy(.2)} L5.2 ${gy(5.2)}`,
				stroke: GLASS,
				strokeWidth: "0.11",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0.2 ${gy(.2)} L5.2 ${gy(5.2)}`,
				stroke: INK,
				strokeWidth: "0.022"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.4",
				y: gy(2.5) + .06,
				width: "0.2",
				height: "0.1",
				fill: "url(#hatch-fine)",
				stroke: INK,
				strokeWidth: "0.02"
			}),
			[
				0,
				1,
				2
			].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "4.62",
				y1: 1.66 - i * .09,
				x2: "5.08",
				y2: 1.57 - i * .09,
				stroke: SOFT,
				strokeWidth: "0.035"
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "4.56",
				y1: "1.42",
				x2: "4.56",
				y2: "1.7",
				stroke: SAGE,
				strokeWidth: "0.03",
				strokeDasharray: "0.06 0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.75",
				y: "1.42",
				width: "0.17",
				height: "0.28",
				fill: "none",
				stroke: FAINT,
				strokeWidth: "0.025",
				strokeDasharray: "0.06 0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 1.68 L0 1.94 L0.44 1.94 L0.44 1.68",
				fill: "none",
				stroke: INK,
				strokeWidth: "0.035"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: INK,
				strokeWidth: "0.03",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0.14",
					y1: "1.94",
					x2: "0.14",
					y2: "3.4"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0.32",
					y1: "1.94",
					x2: "0.32",
					y2: "3.4"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0.23",
				y1: "3.1",
				x2: "0.23",
				y2: "3.62",
				stroke: SAGE,
				strokeWidth: "0.035",
				markerEnd: "url(#flow-s)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: SAGE,
				strokeWidth: "0.04",
				fill: "none",
				markerEnd: "url(#flow-s)",
				opacity: "0.9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M2.2 3.0 C 3.2 2.8, 3.9 2.2, 4.48 1.66" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.5 3.5 C 4.1 3.0, 4.2 2.2, 4.5 1.82" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: OAK,
				strokeWidth: "0.03",
				strokeDasharray: "0.1 0.07",
				markerEnd: "url(#dm-s)",
				opacity: "0.85",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.0 0.62 L3.9 2.6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M3.55 0.62 L4.45 2.6" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 2.9,
				y: .6,
				s: .1,
				fill: OAK,
				anchor: "end",
				children: "nắng đỉnh"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M4.35 0.72 L3.8 1.24",
				stroke: GLASS,
				strokeWidth: "0.035",
				markerEnd: "url(#ink-s)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 4.45,
				y: .7,
				s: .1,
				fill: MUTED,
				anchor: "start",
				children: "mưa chảy về máng"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: 5.3,
				y1: gy(4.85),
				y2: 1.7,
				label: "150",
				s: .11,
				right: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: 5.55,
				y1: 1.7,
				y2: 3.1,
				label: "700",
				s: .11,
				right: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2,
				y: gy(2),
				tx: 1.1,
				ty: 1,
				label: "kính dán 8 + 8 mm · dốc 5%",
				s: .11,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.88,
				y: 1.6,
				tx: 5.95,
				ty: 1.05,
				label: "lam chắn mưa 3 lớp",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.56,
				y: 1.56,
				tx: 5.95,
				ty: 1.32,
				label: "lưới inox 1.2 mm",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.83,
				y: 1.52,
				tx: 5.95,
				ty: 1.62,
				label: "hộp thép 100 × 50 @ 900",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 4.85,
				y: 2.4,
				tx: 5.95,
				ty: 2.35,
				label: "tường thu hồi mái tum",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: .22,
				y: 1.8,
				tx: -1.35,
				ty: 1.35,
				label: "máng inox 200 × 100",
				s: .11,
				anchor: "start"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: .23,
				y: 2.7,
				tx: -1.35,
				ty: 2.95,
				label: "ống D90 xuống ga thu T1",
				s: .11,
				anchor: "start"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 5.95,
				y: 2.05,
				s: .11,
				fill: SAGE,
				anchor: "start",
				children: "khe gió thông suốt chu vi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 2.6,
				y: 2.42,
				s: .11,
				fill: SAGE,
				children: "khí nóng thoát ra khe gió"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M2.05 3.55 L2.05 3.95",
				stroke: SOFT,
				strokeWidth: "0.03",
				markerEnd: "url(#ink-s)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 2.05,
				y: 4.22,
				s: .12,
				fill: SOFT,
				children: `Ô MÁI KÍNH ${mm(CORE.x[1] - CORE.x[0])} × ${mm(CORE.holes.tum[1] - CORE.holes.tum[0])} trùm lỗ sàn tum, y ${CORE.holes.tum[0].toFixed(2)}–${CORE.holes.tum[1].toFixed(2)} — sáng rơi dọc dải thang xuống bếp T1`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -1.4,
				y: .62,
				s: .15,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "CT-04 · MÁI KÍNH ĐẦU THANG"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -1.4,
				y: .8,
				s: .1,
				fill: MUTED,
				anchor: "start",
				children: "cắt ngang dải thang · trái: tường biên x 0.20, phải: gờ phía sảnh tum x 1.20"
			})
		]
	});
}
var GEN = {
	x: [4.5, 4.8],
	y: [10.1, 10.4]
};
var WX = (y) => y - 7.5;
var WZ = (z) => 11.6 - z;
function WetStack() {
	const cut = {
		fill: "url(#hatch-cut)",
		stroke: INK,
		strokeWidth: .03
	};
	const ghost = {
		fill: "none",
		stroke: FAINT,
		strokeWidth: .035,
		strokeDasharray: "0.12 0.08"
	};
	const xc = (GEN.x[0] + GEN.x[1]) / 2;
	const gx = WX((GEN.y[0] + GEN.y[1]) / 2);
	const wc2 = FLOOR_ROOM("t2-wc"), wc1 = FLOOR_ROOM("t1-wc");
	const slab = (z, y1) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
		x: -.3,
		y: WZ(z),
		width: WX(y1) + .3,
		height: "0.3",
		...cut
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-1.5 -0.3 16.8 14.1",
		className: "w-full",
		role: "img",
		"aria-label": "Chi tiết WC tầng 2 trong nhà, WC tầng 1 dải riêng sát tường trái sân sau, hộp gen tường phải và đường ống ra hố ga sân sau",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-1.5",
				y: "-0.3",
				width: "16.8",
				height: "14.1",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.3",
				y: WZ(0),
				width: WX(22) + .6,
				height: "1.3",
				fill: "url(#hatch-earth)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "-0.3",
				y1: WZ(0),
				x2: WX(22) + .3,
				y2: WZ(0),
				stroke: INK,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(21.8),
				y: WZ(2.4),
				width: "0.2",
				height: "2.4",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: -.3,
				y: WZ(.45),
				width: WX(18) + .3,
				height: "0.45",
				...cut
			}),
			slab(4.05, 18),
			slab(7.35, 18),
			slab(10.35, 13.8),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(17.8),
				y: WZ(3.75),
				width: "0.2",
				height: 1.1,
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(17.8),
				y: WZ(7.05),
				width: "0.2",
				height: "3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(17.8),
				y: WZ(8.45),
				width: "0.2",
				height: "1.1",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(13.6),
				y: WZ(11.2),
				width: "0.2",
				height: "0.85",
				...cut
			}),
			cutWalls(xc).map((w) => {
				const z0 = w.kind === "door" ? w.z0 + 2.2 : w.z0;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: WX(w.y) - w.th / 2,
					y: WZ(w.z1),
					width: w.th,
					height: w.z1 - z0,
					...cut
				}, `${w.y}-${w.z0}`);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(wc1.y),
				y: WZ(.45),
				width: wc1.h,
				height: .45,
				...ghost
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(wc1.y),
				y: WZ(3.05),
				width: wc1.h,
				height: 2.6,
				...ghost
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(wc1.y),
				y: WZ(3.23),
				width: wc1.h + .05,
				height: .18,
				...ghost
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(18),
				y: WZ(2.97),
				width: 1.4,
				height: "0.04",
				fill: GLASS,
				stroke: INK,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(19.34),
				y: WZ(2.99),
				width: "0.06",
				height: "0.1",
				fill: INK
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(19.34),
				y: WZ(2.89),
				width: "0.06",
				height: 2.85,
				...ghost
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(18.4),
				y: WZ(.3),
				width: .7,
				height: .3,
				...ghost
			}),
			FURN.t1.filter((f) => f[0] === "r" && f[2] >= wc1.y).map(([, , y, , d, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(y),
				y: WZ(.45 + h),
				width: d,
				height: h,
				...ghost
			}, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M${WX(wc2.y) + .06} ${WZ(4.35)} L${WX(wc2.y) + .06} ${WZ(4.03)} L${WX(wc2.y + wc2.h) - .06} ${WZ(4.03)} L${WX(wc2.y + wc2.h) - .06} ${WZ(4.35)}`,
				fill: "none",
				stroke: SAGE,
				strokeWidth: "0.05"
			}),
			cutFurn(xc, wc2.y, wc2.y + wc2.h, "t2").map(([, , y, , d, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(y),
				y: WZ(4.05 + h),
				width: Math.min(d, GEN.y[0] - y),
				height: h,
				fill: "none",
				stroke: SOFT,
				strokeWidth: "0.035"
			}, y)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(GEN.y[0]),
				y: WZ(7.05),
				width: "0.3",
				height: 6.6,
				fill: "url(#hatch-fine)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			[1, 4.45].map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(GEN.y[0]),
				y: WZ(z + .4),
				width: "0.3",
				height: "0.4",
				fill: "var(--color-paper)",
				stroke: INK,
				strokeWidth: "0.025"
			}, z)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: WX(8.72),
						y1: WZ(4),
						x2: gx,
						y2: WZ(3.95),
						stroke: SOFT,
						strokeWidth: "0.07"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: gx,
						y1: WZ(7),
						x2: gx,
						y2: WZ(-.35),
						stroke: SOFT,
						strokeWidth: "0.07"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: gx,
						y1: WZ(-.35),
						x2: WX(18.6),
						y2: WZ(-.52),
						stroke: SOFT,
						strokeWidth: "0.07"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${WX(19.97)} ${WZ(.45)} L${WX(19.97)} ${WZ(-.3)} L${WX(19.4)} ${WZ(-.42)}`,
						stroke: MUTED,
						strokeWidth: "0.05",
						strokeDasharray: "0.12 0.08"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: gx,
						y1: WZ(7.05),
						x2: gx,
						y2: WZ(11.05),
						stroke: SAGE,
						strokeWidth: "0.04",
						strokeDasharray: "0.14 0.08",
						markerEnd: "url(#flow-s)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: WX(18.6),
				y: WZ(0),
				width: "0.8",
				height: "1.0",
				fill: "var(--color-paper)",
				stroke: INK,
				strokeWidth: "0.035"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: gx,
				y: WZ(2.3),
				tx: 3.5,
				ty: WZ(2.1),
				label: "D110 ống đứng trong hộp gen 300 × 300",
				s: .17
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: gx,
				y: WZ(1.2),
				tx: 3.5,
				ty: WZ(1.45),
				label: "cửa thăm 300 × 400 mỗi tầng · ốp góc tường phải bếp",
				s: .17
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: WX(9.5),
				y: WZ(3.98),
				tx: 3.5,
				ty: WZ(4.6),
				label: "D90 sàn · D60 lavabo · nhánh trong lớp hạ cốt, dốc 2%",
				s: .17
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: gx,
				y: WZ(9.6),
				tx: 3.5,
				ty: WZ(11.45),
				label: "D60 thông hơi âm tường phải sảnh tum, quá mái +700",
				s: .17
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: WX(13),
				y: WZ(-.43),
				tx: 1,
				ty: WZ(-.85),
				label: "D110 dưới nền T1 dọc hành lang, dốc 2% →",
				s: .17,
				anchor: "start"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(19),
				y: WZ(-1.18),
				s: .16,
				fill: SOFT,
				children: "hố ga · bể tự hoại sân sau"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: WX(19.7),
				y: WZ(-.37),
				tx: WX(20.9),
				ty: WZ(-.85),
				label: "WC T1 xả thẳng vào hố ga",
				s: .14
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.8,
				y1: WZ(.45),
				y2: WZ(4.05),
				label: "3.60",
				s: .2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.8,
				y1: WZ(4.05),
				y2: WZ(7.35),
				label: "3.30",
				s: .2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.8,
				y1: WZ(7.35),
				y2: WZ(10.35),
				label: "3.00",
				s: .2
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: WX(GEN.y[0]),
				x2: WX(GEN.y[1]),
				y: WZ(7.75),
				label: "300",
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(9.22),
				y: WZ(6.5),
				s: .22,
				children: "WC chung T2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(9.22),
				y: WZ(6.2),
				s: .12,
				fill: MUTED,
				children: `x ${wc2.x.toFixed(2)}–${(wc2.x + wc2.w).toFixed(2)} · y ${wc2.y.toFixed(2)}–${(wc2.y + wc2.h).toFixed(2)}`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(9.22),
				y: WZ(5.9),
				s: .12,
				fill: SAGE,
				children: "hạ cốt 50 · chống thấm 2 lớp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(16.4),
				y: WZ(5.6),
				s: .24,
				fill: MUTED,
				children: "Phòng ngủ 04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(12.6),
				y: WZ(6.6),
				s: .2,
				fill: MUTED,
				children: "sảnh đầu thang · lối đi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(8.75),
				y: WZ(8.9),
				s: .24,
				fill: MUTED,
				children: "Phòng thờ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(11.9),
				y: WZ(8.9),
				s: .24,
				fill: MUTED,
				children: "Sảnh tum"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(15.9),
				y: WZ(7.8),
				s: .22,
				fill: MUTED,
				children: "Sân phơi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(8.7),
				y: WZ(3),
				s: .24,
				fill: MUTED,
				children: "Bếp + ăn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(14.2),
				y: WZ(3),
				s: .22,
				fill: MUTED,
				children: "Hành lang T1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(15.7),
				y: WZ(1.6),
				s: .22,
				fill: MUTED,
				children: "Phòng ngủ 01 (sau mặt cắt)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(20.9),
				y: WZ(4.45),
				s: .22,
				children: "WC T1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(20.9),
				y: WZ(4.15),
				s: .14,
				fill: MUTED,
				children: "dải sát tường trái · sau mặt cắt"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(20.9),
				y: WZ(3.88),
				s: .14,
				fill: MUTED,
				children: `x 0–${(wc1.x + wc1.w).toFixed(2)} · y ${wc1.y.toFixed(1)}–${(wc1.y + wc1.h).toFixed(1)} · mái +3.23`
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(18.7),
				y: WZ(3.4),
				s: .13,
				fill: SOFT,
				children: "mái kính lối đi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: WX(20.9),
				y: WZ(1.6),
				s: .2,
				fill: MUTED,
				children: "Sân sau"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -1.35,
				y: 13.25,
				s: .26,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "CT-05 · HAI WC + HỘP GEN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -1.35,
				y: 13.62,
				s: .16,
				fill: MUTED,
				anchor: "start",
				children: "cắt dọc x 4.65 qua hộp gen tường phải và lối mái kính · WC T1 là dải riêng sát tường trái sân sau (sau mặt cắt), xả thẳng vào hố ga"
			})
		]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function DetailDrawings() {
	const [id, setId] = (0, import_react.useState)("section");
	const detail = DETAILS.find((d) => d.id === id) ?? DETAILS[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "chi-tiet",
		className: "scroll-mt-20 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-sage uppercase",
					children: "03 — Bản vẽ chi tiết"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl",
					children: "Từ ý đồ xuống kích thước thi công"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Năm bản vẽ kiểm chứng phương án: mặt cắt dọc, mặt đứng, cầu thang, giếng trời và trục ướt. Mọi con số lấy thẳng từ mặt bằng phía trên — chỗ nào chưa khớp thì ghi rõ trong ghi chú."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: DETAILS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => setId(d.id),
						className: cn("h-11 rounded-md px-4 text-left text-sm font-medium transition-colors duration-150", id === d.id ? "bg-sage text-accent-fg" : "bg-surface text-ink-soft hover:text-ink"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums opacity-70",
							children: d.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2",
							children: d.label
						})]
					}, d.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "mt-8 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-line px-5 py-4 sm:px-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.2em] text-oak uppercase",
								children: detail.code
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-display text-2xl font-medium",
								children: detail.title
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-x-auto p-3 sm:p-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-[32rem]",
								children: [
									id === "section" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionAA, {}) : null,
									id === "elevation" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Elevation, {}) : null,
									id === "stair" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StairDetail, {}) : null,
									id === "void" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VoidDetail, {}) : null,
									id === "wet" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WetStack, {}) : null
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "border-t border-line px-5 py-3 text-[11px] tracking-wide text-faint sm:px-6",
							children: [
								detail.code,
								" · ",
								detail.scale,
								" · bản vẽ ý tưởng, chưa phải hồ sơ xin phép"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed text-ink-soft",
							children: detail.blurb
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 border-t border-line pt-6 text-sm leading-relaxed text-muted",
							children: detail.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-oak" }), n]
							}, n))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.2em] text-oak uppercase",
								children: "Thông số"
							}), detail.specs.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-line pt-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-muted",
									children: s.k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "tabular-nums text-ink",
									children: s.v
								})]
							}, s.k))]
						})
					})]
				})
			]
		})
	});
}
var KIND_CLASS = {
	living: "plan-living",
	kitchen: "plan-kitchen",
	bed: "plan-bed",
	wc: "plan-wc",
	stair: "plan-stair",
	void: "plan-void",
	worship: "plan-worship",
	outdoor: "plan-outdoor",
	service: "plan-service",
	hall: "plan-hall",
	parking: "plan-parking"
};
function FloorPlans() {
	const [floorId, setFloorId] = (0, import_react.useState)("t1");
	const floor = FLOORS.find((f) => f.id === floorId) ?? FLOORS[0];
	const [roomId, setRoomId] = (0, import_react.useState)(floor.rooms[0]?.id ?? "");
	const room = (0, import_react.useMemo)(() => floor.rooms.find((r) => r.id === roomId) ?? floor.rooms[0], [floor, roomId]);
	function pickFloor(id) {
		setFloorId(id);
		const next = FLOORS.find((f) => f.id === id);
		setRoomId(next?.rooms[0]?.id ?? "");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "mat-bang",
		className: "scroll-mt-20 border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-sage uppercase",
					children: "02 — Mặt bằng công năng"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl",
					children: "Trước mở, giữa thở, sau yên"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Bấm từng phòng để xem kích thước thông thủy. Lõi thang kính + giếng trời cố định là thang chữ U ba cạnh — vế dài ép sát tường trái, hai chiếu nghỉ ở hai góc — ngay sau phòng khách; mái kính trên dải thang. Mọi phòng có lối riêng ra hành lang."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: FLOORS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => pickFloor(f.id),
						className: cn("h-11 rounded-md px-4 text-sm font-medium transition-colors duration-150", floorId === f.id ? "bg-sage text-accent-fg" : "bg-paper text-ink-soft hover:text-ink"),
						children: f.label
					}, f.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-display text-xl text-ink",
					children: floor.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted",
					children: [
						floor.height,
						" · ",
						floor.blurb
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-6 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-xl bg-paper p-3 shadow-[var(--shadow-border)] lg:col-span-7 sm:p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorSvg, {
							rooms: floor.rooms,
							selectedId: room.id,
							onSelect: setRoomId,
							floorId
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "lg:col-span-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-xl bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] tracking-[0.2em] text-oak uppercase",
									children: room.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-2 font-display text-3xl font-medium",
									children: room.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
									className: "mt-5 grid grid-cols-2 gap-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[11px] tracking-wide text-faint uppercase",
										children: "Tim trục"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "mt-1 tabular-nums text-ink",
										children: [room.areaGross.toFixed(1), " m²"]
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-[11px] tracking-wide text-faint uppercase",
										children: "Thông thủy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
										className: "mt-1 tabular-nums text-ink",
										children: [room.areaNet.toFixed(1), " m²"]
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-ink-soft",
									children: room.dims
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-muted",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-ink",
										children: "Sáng / gió. "
									}), room.light]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-5 space-y-2 border-t border-line pt-5 text-sm leading-relaxed text-muted",
									children: room.notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-oak" }), n]
									}, n))
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoomLegend, {
							rooms: floor.rooms,
							selectedId: room.id,
							onSelect: setRoomId
						})]
					})]
				})
			]
		})
	});
}
function RoomLegend({ rooms, selectedId, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 grid grid-cols-2 gap-2",
		children: rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onSelect(r.id),
			className: cn("flex h-12 w-full items-center gap-2 rounded-md px-3 text-left text-xs transition-colors duration-150", selectedId === r.id ? "bg-sage text-accent-fg" : "bg-paper text-ink-soft hover:text-ink"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-3 shrink-0 rounded-xs", KIND_CLASS[r.kind]) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: r.name
			})]
		}) }, r.id))
	});
}
function FloorSvg({ rooms, selectedId, onSelect, floorId }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-1.7 -1.4 8.5 24",
		className: "w-full",
		role: "img",
		"aria-label": `Mặt bằng ${floorId}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-1.7",
				y: "-1.4",
				width: "8.5",
				height: "24",
				fill: "var(--color-paper)"
			}),
			floorId === "t1" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "18",
				width: "5",
				height: "4",
				fill: "none",
				stroke: "var(--color-ink)",
				strokeWidth: "0.04",
				strokeDasharray: "0.15 0.1"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "0",
				width: "5",
				height: "18",
				fill: "none",
				stroke: "var(--color-ink)",
				strokeWidth: "0.08"
			}),
			rooms.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: r.x + .04,
					y: r.y + .04,
					width: r.w - .08,
					height: r.h - .08,
					className: KIND_CLASS[r.kind],
					stroke: selectedId === r.id ? "var(--color-sage)" : "var(--color-ink)",
					strokeWidth: selectedId === r.id ? .09 : .035,
					role: "button",
					tabIndex: 0,
					"aria-label": r.name,
					onClick: () => onSelect(r.id),
					onKeyDown: (e) => {
						if (e.key === "Enter" || e.key === " ") {
							e.preventDefault();
							onSelect(r.id);
						}
					}
				}),
				r.h >= 1.4 && r.w >= 1.2 && shortLabel(r.name).length * .16 < r.w ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: r.x + r.w / 2,
					y: r.y + r.h / 2 - (r.h >= 3 ? .15 : 0),
					textAnchor: "middle",
					fontSize: r.w < 2 ? .28 : .34,
					fill: "var(--color-ink)",
					fontFamily: "Outfit, sans-serif",
					pointerEvents: "none",
					children: shortLabel(r.name)
				}) : null,
				r.h >= 3 && r.w >= 1.5 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x: r.x + r.w / 2,
					y: r.y + r.h / 2 + .32,
					textAnchor: "middle",
					fontSize: "0.26",
					fill: "var(--color-muted)",
					fontFamily: "Outfit, sans-serif",
					pointerEvents: "none",
					children: [
						r.w.toFixed(2),
						" × ",
						r.h.toFixed(2)
					]
				}) : null
			] }, r.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Furniture, { floorId }),
			floorId === "t1" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "3.85",
				y1: "18",
				x2: "4.75",
				y2: "18",
				stroke: "var(--color-paper)",
				strokeWidth: "0.12"
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "2.5",
				y: "-0.7",
				textAnchor: "middle",
				fontSize: "0.32",
				fill: "var(--color-sage)",
				fontFamily: "Outfit, sans-serif",
				letterSpacing: "0.14",
				children: "MẶT TIỀN"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: floorId === "t1" ? 3.5 : 2.5,
				y: "19.05",
				textAnchor: "middle",
				fontSize: "0.32",
				fill: "var(--color-sage)",
				fontFamily: "Outfit, sans-serif",
				letterSpacing: "0.14",
				children: "SÂN SAU"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0",
				y1: "-0.35",
				x2: "5",
				y2: "-0.35",
				stroke: "var(--color-oak)",
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "2.5",
				y: "-0.45",
				textAnchor: "middle",
				fontSize: "0.26",
				fill: "var(--color-oak)",
				fontFamily: "Outfit, sans-serif",
				children: "5.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "-0.45",
				y1: "0",
				x2: "-0.45",
				y2: "18",
				stroke: "var(--color-oak)",
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "-0.7",
				y: "9",
				textAnchor: "middle",
				fontSize: "0.26",
				fill: "var(--color-oak)",
				fontFamily: "Outfit, sans-serif",
				transform: "rotate(-90 -0.7 9)",
				children: "18.00"
			})
		]
	});
}
function shortLabel(name) {
	return name.replace("Phòng ngủ ", "PN ").replace("Phòng khách", "Khách").replace("Phòng thờ", "Thờ").replace("Giếng trời giữa", "Giếng").replace("Cầu thang kính + giếng trời", "Thang").replace("Sảnh sinh hoạt", "Sinh hoạt").replace("Kho gầm thang", "Kho").replace("Cầu thang", "Thang").replace("WC chung rộng", "WC").replace("WC chung", "WC").replace("Loggia mặt tiền", "Loggia").replace("Sân thượng trước", "Sân trước").replace("Sân phơi sau", "Phơi").replace("Lõi thang + kỹ thuật", "Kỹ thuật").replace("Bếp + Ăn", "Bếp + Ăn");
}
function Furniture({ floorId }) {
	const walls = [];
	WALLS[floorId].forEach(([axis, at, a0, a1, gaps = []], i) => {
		let from = a0;
		const seg = (a, b, kind) => {
			const [x1, y1, x2, y2] = axis === "h" ? [
				a,
				at,
				b,
				at
			] : [
				at,
				a,
				at,
				b
			];
			walls.push(/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1,
				y1,
				x2,
				y2,
				stroke: kind === "glass" ? "#6f9bb0" : "var(--color-ink)",
				strokeWidth: kind === "glass" ? .05 : .1
			}, `${i}-${a}`));
		};
		for (const [s0, e0, kind] of [...gaps].sort((p, q) => p[0] - q[0])) {
			if (s0 > from) seg(from, s0, "solid");
			if (kind !== "door") seg(s0, e0, "glass");
			from = e0;
		}
		if (a1 > from) seg(from, a1, "solid");
	});
	const fl = floorId === "tum" ? null : CORE.flights[floorId];
	const steps = fl ? Array.from({ length: fl.risers }, (_, k) => fl.y + k * CORE.tread) : [];
	const cx = (CORE.x[0] + CORE.x[1]) / 2, top = steps[steps.length - 1] ?? 0;
	const lead = fl ? Array.from({ length: fl.lead }, (_, k) => CORE.x[1] + k * CORE.tread) : [];
	const [ly0, ly1] = CORE.landing.y, ym = (ly0 + ly1) / 2, xf = CORE.x[1] + (fl ? fl.lead - 1 : 0) * CORE.tread;
	const tail = fl ? Array.from({ length: fl.tail }, (_, k) => CORE.x[1] + k * CORE.tread) : [];
	const [ty0, ty1] = CORE.landing.top, tm = (ty0 + ty1) / 2, xe = CORE.x[1] + (fl && fl.tail ? fl.tail - 1 : 0) * CORE.tread;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		pointerEvents: "none",
		children: [
			walls,
			RAILS[floorId].map(([x1, y1, x2, y2]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1,
				y1,
				x2,
				y2,
				stroke: "#6f9bb0",
				strokeWidth: "0.04",
				strokeDasharray: "0.12 0.06"
			}, `r${x1}${y1}`)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "var(--color-ink-soft)",
				strokeWidth: "0.025",
				opacity: "0.7",
				children: [
					steps.map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: CORE.x[0],
						y1: y,
						x2: CORE.x[1],
						y2: y
					}, y)),
					lead.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x,
						y1: ly0,
						x2: x,
						y2: ly1
					}, `l${x}`)),
					lead.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: CORE.x[0],
						y: ly0,
						width: xf - CORE.x[0],
						height: ly1 - ly0,
						fill: "none"
					}) : null,
					tail.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: x,
						y1: ty0,
						x2: x,
						y2: ty1
					}, `t${x}`)),
					tail.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: CORE.x[0],
						y: ty0,
						width: xe - CORE.x[0],
						height: ty1 - ty0,
						fill: "none"
					}) : null,
					fl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: tail.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${xf - .1} ${ym} H${cx} V${tm} H${xe - .1}`,
						fill: "none",
						strokeWidth: "0.03"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${xe - .35} ${tm - .15} L${xe - .1} ${tm} L${xe - .35} ${tm + .15}`,
						fill: "none",
						strokeWidth: "0.03"
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: lead.length ? `M${xf - .1} ${ym} H${cx} V${top - .15}` : `M${cx} ${fl.y + .15} V${top - .15}`,
						fill: "none",
						strokeWidth: "0.03"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: `M${cx - .15} ${top - .4} L${cx} ${top - .15} L${cx + .15} ${top - .4}`,
						fill: "none",
						strokeWidth: "0.03"
					})] }) }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				fill: "none",
				stroke: "var(--color-ink-soft)",
				strokeWidth: "0.03",
				opacity: "0.6",
				children: FURN[floorId].map((f, i) => f[0] === "r" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: f[1],
					y: f[2],
					width: f[3],
					height: f[4],
					rx: "0.03"
				}, i) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: f[1],
					cy: f[2],
					r: f[3]
				}, i))
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "top",
		className: "relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[min(78vh,40rem)] min-h-[28rem] overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/hero.jpg",
					alt: "Phối cảnh mặt tiền nhà phố hiện đại 5×30, sân trước và ô tô",
					className: "size-full object-cover object-[center_70%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-4 pb-8 sm:px-6 sm:pb-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-[11px] tracking-[0.28em] text-paper/80 uppercase",
							children: "Atelier · Phương án A · 2026"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "max-w-3xl font-display text-4xl leading-[1.05] font-medium text-paper sm:text-5xl lg:text-6xl",
							children: ["Nhà phố hiện đại", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic",
								children: " 5 × 30"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-xl text-sm leading-relaxed text-paper/85 sm:text-base",
							children: "Lô 150 m² — khối nhà 5 × 18 m, hai tầng và tum. Bốn phòng ngủ, hai giếng trời, phòng thờ hướng mặt tiền."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
							className: "mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-lg bg-paper/15 sm:grid-cols-4",
							children: [
								["Lô đất", `${HOUSE.lotW} × ${HOUSE.lotD} m`],
								["Xây dựng", `${HOUSE.areaFloor} m²/sàn`],
								["Quy mô", HOUSE.floors],
								["Cao độ", `${HOUSE.heightTotal} m`]
							].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-ink/35 px-4 py-3 backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-[10px] tracking-[0.18em] text-paper/60 uppercase",
									children: k
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 font-display text-lg text-paper",
									children: v
								})]
							}, k))
						})
					]
				})
			]
		})
	});
}
function LightAir() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "anh-sang",
		className: "scroll-mt-20 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-sage uppercase",
					children: "04 — Sáng và gió"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl",
					children: "Nhà ống 18 m sống được là nhờ hai giếng"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Giếng giữa nhà chính là dải thang chữ U sát tường trái, mái kính ngay trên đầu thang — sáng đỉnh, hút nóng. Sân sau 4 m là giếng thứ hai, cấp sáng cho cửa sau hành lang tầng 1 và cửa sổ phòng ngủ 04; phòng ông bà tường hậu kín, yên tĩnh, vay sáng qua ô kính trên cao ra hành lang; dải WC tầng 1 ép sát tường trái, nối liền sau phòng ngủ, chạy hết chiều sâu sân; vườn liền bên phải. Gió đi trước–sau; khí nóng đi dưới–trên."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionDrawing, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8 md:grid-cols-2",
					children: LIGHT_POINTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-medium",
						children: p.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: p.body
					})] }, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/stair.jpg",
							alt: "Giếng trời thông tầng ngay trên cầu thang gỗ, lan can kính",
							className: "aspect-portrait w-full object-cover sm:aspect-tall"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-xs tracking-wide text-paper/70",
							children: "Giếng trời trên thang — stack effect + sáng đỉnh cho phòng ngủ 03"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/rear.jpg",
							alt: "Sân sau 4 mét với cây và cửa sổ phòng ngủ 04 tầng 2",
							className: "aspect-land w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-xs tracking-wide text-paper/70",
							children: "Sân sau 4.00 m — giếng trời thứ hai, cửa sau hành lang và phòng ngủ 04 mở ra đây, dải WC tầng 1 ép sát tường trái sân"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 rounded-xl bg-sage px-5 py-8 text-accent-fg sm:px-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-medium",
							children: "Phong thủy xây, không phong thủy nói"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-3 text-sm leading-relaxed text-paper/85 sm:grid-cols-2",
							children: FENG_SHUI.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-oak" }), f]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-xs text-paper/60",
							children: "Chủ nhà chưa chốt hướng la bàn. Mọi hướng ở đây tính theo mặt tiền lô đất — khi có hướng Đông/Tây/Nam sẽ chỉnh vị trí bếp và ban thờ cho khớp."
						})
					]
				})
			]
		})
	});
}
function SectionDrawing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 640 260",
		className: "w-full",
		role: "img",
		"aria-label": "Mặt cắt dọc nhà phố, hai giếng trời",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "640",
				height: "260",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "24",
				y: "28",
				fill: "var(--color-faint)",
				fontSize: "11",
				fontFamily: "Outfit, sans-serif",
				letterSpacing: "2",
				children: "MẶT CẮT DỌC · TRƯỚC → SAU"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "24",
				y1: "210",
				x2: "616",
				y2: "210",
				stroke: "var(--color-ink)",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "24",
				y: "210",
				width: "128",
				height: "8",
				fill: "var(--color-plan-outdoor)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "88",
				y: "236",
				textAnchor: "middle",
				fill: "var(--color-muted)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Sân trước 8 m"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "var(--color-surface)",
				stroke: "var(--color-ink)",
				strokeWidth: "1.4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "152",
						y: "150",
						width: "294",
						height: "60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "152",
						y: "96",
						width: "294",
						height: "54"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "225",
						y: "48",
						width: "152",
						height: "48"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "var(--color-ink)",
				strokeWidth: "1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "371",
						y1: "150",
						x2: "371",
						y2: "210"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "234",
						y1: "96",
						x2: "234",
						y2: "150"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "340",
						y1: "96",
						x2: "340",
						y2: "150"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "395",
						y1: "96",
						x2: "395",
						y2: "150"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "315",
						y1: "48",
						x2: "315",
						y2: "96"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M273 48 H331 V96 H314 V150 H250 V96 H273 Z",
				fill: "var(--color-plan-void)",
				stroke: "var(--color-ink)",
				strokeWidth: "1",
				strokeDasharray: "4 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M217 210 V200 H234 L297 160 H314 V150 M250 150 L331 96",
				fill: "none",
				stroke: "var(--color-faint)",
				strokeWidth: "1.2",
				strokeDasharray: "3 2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "289",
				y: "114",
				width: "33",
				height: "36",
				fill: "var(--color-plan-wc)",
				stroke: "var(--color-ink)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "269",
				y1: "44",
				x2: "335",
				y2: "44",
				stroke: "var(--color-mat-glass)",
				strokeWidth: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "295",
				y: "62",
				textAnchor: "middle",
				fill: "var(--color-sage)",
				fontSize: "8",
				fontFamily: "Outfit, sans-serif",
				children: "Dải thang"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "446",
				y: "48",
				width: "64",
				height: "162",
				fill: "var(--color-plan-outdoor)",
				opacity: "0.85",
				stroke: "var(--color-sage)",
				strokeWidth: "1",
				strokeDasharray: "3 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "476",
				y: "128",
				textAnchor: "middle",
				fill: "var(--color-sage)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Sân sau"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "476",
				y: "142",
				textAnchor: "middle",
				fill: "var(--color-muted)",
				fontSize: "9",
				fontFamily: "Outfit, sans-serif",
				children: "4 m"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "446",
				y: "156",
				width: "62",
				height: "54",
				fill: "var(--color-plan-wc)",
				stroke: "var(--color-ink)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "446",
				y1: "161",
				x2: "469",
				y2: "161",
				stroke: "var(--color-mat-glass)",
				strokeWidth: "2.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "152",
				y: "48",
				width: "73",
				height: "8",
				fill: "var(--color-plan-outdoor)",
				stroke: "var(--color-ink)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "377",
				y: "48",
				width: "69",
				height: "8",
				fill: "var(--color-plan-outdoor)",
				stroke: "var(--color-ink)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "201",
				y: "184",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Khách"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "300",
				y: "202",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Bếp"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "408",
				y: "184",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "PN 01"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "201",
				y: "126",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "PN 02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "367",
				y: "126",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "PN 03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "420",
				y: "126",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "PN 04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "250",
				y: "76",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Thờ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "346",
				y: "76",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Sảnh"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "488",
				y: "196",
				textAnchor: "middle",
				fill: "var(--color-muted)",
				fontSize: "8",
				fontFamily: "Outfit, sans-serif",
				children: "WC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "305.5",
				y: "138",
				textAnchor: "middle",
				fill: "var(--color-muted)",
				fontSize: "8",
				fontFamily: "Outfit, sans-serif",
				children: "WC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 188 C 80 188, 120 188, 160 176",
				fill: "none",
				stroke: "var(--color-oak)",
				strokeWidth: "1.2",
				markerEnd: "url(#arr)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 168 H 470",
				fill: "none",
				stroke: "var(--color-oak)",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M318 200 V 52",
				fill: "none",
				stroke: "var(--color-sage)",
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M498 150 V 58",
				fill: "none",
				stroke: "var(--color-sage)",
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("marker", {
				id: "arr",
				markerWidth: "6",
				markerHeight: "6",
				refX: "5",
				refY: "3",
				orient: "auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0,0 L6,3 L0,6",
					fill: "var(--color-oak)"
				})
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "88",
				y: "178",
				fill: "var(--color-oak)",
				fontSize: "9",
				fontFamily: "Outfit, sans-serif",
				children: "gió vào"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "338",
				y: "42",
				fill: "var(--color-sage)",
				fontSize: "9",
				fontFamily: "Outfit, sans-serif",
				children: "nóng thoát"
			})
		]
	});
}
function Materials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "vat-lieu",
		className: "scroll-mt-20 border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-sage uppercase",
					children: "05 — Mặt tiền"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl",
					children: "Ba vật liệu, một nhịp đứng"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: "Mặt 5 m không chịu được trang trí. Khung trắng bo cong, nan sắt đen, đá be, gỗ ấm. Loggia tầng 2 tạo bóng; tum lùi 4.5 m để khối nhà đọc được hai tầng rưỡi, không bị ‘hộp’."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: MATERIALS.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-paper p-4 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `h-16 rounded-md ${m.swatch}`,
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl",
								children: m.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs tracking-wide text-oak uppercase",
								children: m.use
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted",
								children: m.note
							})
						]
					}, m.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-xl bg-ink lg:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/facade.jpg",
							alt: "Mặt đứng nhà phố: khối vôi, lam gỗ, kính lõm tầng 1",
							className: "aspect-portrait w-full object-cover"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "overflow-hidden rounded-xl bg-ink lg:col-span-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/dusk.jpg",
							alt: "Mặt tiền lúc chạng vạng, ánh sáng trong nhà lộ qua lam gỗ",
							className: "aspect-photo h-full w-full object-cover"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/living.jpg",
							alt: "Phòng khách nhìn xuyên bếp tới giếng trời giữa nhà",
							className: "aspect-photo w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-xs text-paper/70",
							children: "Trục nhìn tầng 1: khách → bếp/ăn → giếng trời"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/worship.jpg",
							alt: "Phòng thờ trên tum, ban thờ nhìn ra sân thượng mặt tiền",
							className: "aspect-photo w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-xs text-paper/70",
							children: "Phòng thờ tum — ban thờ tựa tường hậu, hướng khoảng thoáng mặt tiền"
						})]
					})]
				})
			]
		})
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide transition-colors duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-sage text-accent-fg hover:bg-sage-2",
			outline: "bg-transparent text-ink shadow-[var(--shadow-border)] hover:bg-paper-2",
			ghost: "bg-transparent text-ink-soft hover:bg-paper-2 hover:text-ink",
			invert: "bg-paper text-ink hover:bg-paper-2"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-xs",
			lg: "h-12 rounded-lg px-5"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
function PromptBlock() {
	const [copied, setCopied] = (0, import_react.useState)(false);
	async function copy() {
		try {
			await navigator.clipboard.writeText(MJ_PROMPT);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1800);
		} catch {
			setCopied(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "prompt",
		className: "scroll-mt-20 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-sage uppercase",
					children: "07 — Prompt ảnh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl",
					children: "Midjourney / DALL·E"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: [
						"Dán nguyên đoạn dưới. Thêm ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: "--ar 3:4"
						}),
						" nếu cần mặt đứng; giữ 16:9 cho góc 3/4 như phối cảnh đầu trang."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-8 rounded-xl bg-ink p-5 text-paper sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						type: "button",
						variant: "invert",
						size: "sm",
						className: "absolute top-4 right-4",
						onClick: copy,
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4" }), copied ? "Đã chép" : "Chép prompt"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
						className: "max-w-none overflow-x-auto pr-28 font-sans text-sm leading-relaxed text-paper/90 whitespace-pre-wrap",
						children: MJ_PROMPT
					})]
				})
			]
		})
	});
}
var LINKS = [
	{
		href: "#tong-mat-bang",
		label: "Lô đất"
	},
	{
		href: "#mat-bang",
		label: "Mặt bằng"
	},
	{
		href: "#chi-tiet",
		label: "Chi tiết"
	},
	{
		href: "#anh-sang",
		label: "Ánh sáng"
	},
	{
		href: "#vat-lieu",
		label: "Vật liệu"
	},
	{
		href: "#phoi-canh",
		label: "Phối cảnh 3D"
	},
	{
		href: "#prompt",
		label: "Prompt"
	}
];
function SiteHeader() {
	const [solid, setSolid] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200", solid ? "bg-paper/95 shadow-[var(--shadow-border)]" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex items-baseline gap-2 text-ink",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-xl font-semibold tracking-tight sm:text-2xl",
					children: "5×30"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "hidden text-[11px] tracking-[0.18em] text-muted uppercase sm:inline",
					children: "Phương án A"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex items-center gap-1 overflow-x-auto sm:gap-2",
				children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					className: "shrink-0 px-2 py-2 text-xs tracking-wide text-ink-soft hover:text-ink sm:px-3 sm:text-sm",
					children: l.label
				}, l.href))
			})]
		})
	});
}
var WC = FLOORS[0].rooms.find((r) => r.id === "t1-wc");
var W = HOUSE.lotW;
var D = HOUSE.lotD;
var PAD = 1.6;
var VB_W = W + PAD * 2;
var VB_H = D + PAD * 2;
function SitePlan() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "tong-mat-bang",
		className: "scroll-mt-20 border-t border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.28em] text-sage uppercase",
						children: "01 — Lô đất"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-3xl font-medium sm:text-4xl",
						children: "Sáu chục phần trăm là nhà, phần còn lại là phổi"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted",
						children: "Chiều sâu 30 m bị cắt thành 8 + 18 + 4. Sân trước giữ xe và cây; khối nhà 18 m chứa toàn bộ công năng; sân sau 4 m là giếng trời thứ hai — chỉ có dải WC một tầng ép sát tường trái, nối liền sau phòng ngủ, cửa ra vườn dưới mái kính từ cửa sau."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 space-y-5",
						children: SITE_NOTES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-xl text-oak",
								children: String(i + 1).padStart(2, "0")
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-medium text-ink",
								children: n.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm leading-relaxed text-muted",
								children: n.body
							})] })]
						}, n.title))
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
						viewBox: `0 0 ${VB_W} ${VB_H}`,
						className: "w-full",
						role: "img",
						"aria-label": "Mặt bằng tổng thể lô đất 5 × 30 mét",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
							width: VB_W,
							height: VB_H,
							fill: "var(--color-paper)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: `translate(${PAD} ${PAD})`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									width: W,
									height: HOUSE.yardFront,
									className: "plan-outdoor",
									stroke: "var(--color-ink)",
									strokeWidth: "0.03"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "0.15",
									y: "0.4",
									width: "2.5",
									height: "5.1",
									className: "plan-parking",
									stroke: "var(--color-ink)",
									strokeWidth: "0.025"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "1.4",
									y: "3.1",
									textAnchor: "middle",
									fontSize: "0.32",
									fill: "var(--color-ink-soft)",
									fontFamily: "Outfit, sans-serif",
									children: "Ô TÔ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "4.15",
									cy: "6.5",
									r: "0.35",
									fill: "var(--color-sage)",
									opacity: "0.55"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "3.55",
									cy: "7.15",
									r: "0.22",
									fill: "var(--color-sage)",
									opacity: "0.4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "2.5",
									y: "7.55",
									textAnchor: "middle",
									fontSize: "0.28",
									fill: "var(--color-ink-soft)",
									fontFamily: "Outfit, sans-serif",
									children: "SÂN TRƯỚC 8.00 m"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									y: HOUSE.yardFront,
									width: W,
									height: HOUSE.houseD,
									fill: "var(--color-surface)",
									stroke: "var(--color-ink)",
									strokeWidth: "0.05"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "0.15",
									y: HOUSE.yardFront + .15,
									width: W - .3,
									height: HOUSE.houseD - .3,
									fill: "none",
									stroke: "var(--color-ink)",
									strokeWidth: "0.02",
									strokeDasharray: "0.12 0.08"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "2.5",
									y: HOUSE.yardFront + 4.6,
									textAnchor: "middle",
									fontSize: "0.38",
									fill: "var(--color-ink)",
									fontFamily: "Cormorant Garamond, serif",
									children: "KHỐI NHÀ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "2.5",
									y: HOUSE.yardFront + 5.15,
									textAnchor: "middle",
									fontSize: "0.28",
									fill: "var(--color-muted)",
									fontFamily: "Outfit, sans-serif",
									children: "5.00 × 18.00 m · 90 m²/sàn"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: CORE.x[0],
									y: HOUSE.yardFront + CORE.holes.tum[0],
									width: CORE.x[1] - CORE.x[0],
									height: CORE.holes.tum[1] - CORE.holes.tum[0],
									className: "plan-void",
									stroke: "var(--color-ink)",
									strokeWidth: "0.02"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: `M${CORE.x[0]} ${HOUSE.yardFront + CORE.holes.tum[0]} L${CORE.x[1]} ${HOUSE.yardFront + CORE.holes.tum[1]} M${CORE.x[1]} ${HOUSE.yardFront + CORE.holes.tum[0]} L${CORE.x[0]} ${HOUSE.yardFront + CORE.holes.tum[1]}`,
									stroke: "var(--color-ink-soft)",
									strokeWidth: "0.015"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: (CORE.x[0] + CORE.x[1]) / 2,
									y: HOUSE.yardFront + (CORE.holes.tum[0] + CORE.holes.tum[1]) / 2 + .08,
									textAnchor: "middle",
									fontSize: "0.15",
									fill: "var(--color-ink-soft)",
									fontFamily: "Outfit, sans-serif",
									paintOrder: "stroke",
									stroke: "var(--color-plan-void)",
									strokeWidth: "0.08",
									children: "GIẾNG THANG"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									y: HOUSE.yardFront + HOUSE.houseD,
									width: W,
									height: HOUSE.yardRear,
									className: "plan-outdoor",
									stroke: "var(--color-ink)",
									strokeWidth: "0.03"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: WC.x + WC.w,
									y: HOUSE.yardFront + HOUSE.houseD,
									width: 4.8 - (WC.x + WC.w),
									height: "1.4",
									fill: "var(--color-mat-glass)",
									opacity: "0.45",
									stroke: "var(--color-ink-soft)",
									strokeWidth: "0.02",
									strokeDasharray: "0.1 0.07"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: WC.x,
									y: HOUSE.yardFront + WC.y,
									width: WC.w,
									height: WC.h,
									className: "plan-wc",
									stroke: "var(--color-ink)",
									strokeWidth: "0.05"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: WC.x + WC.w / 2,
									y: HOUSE.yardFront + WC.y + WC.h / 2 + .1,
									textAnchor: "middle",
									fontSize: "0.28",
									fill: "var(--color-ink)",
									fontFamily: "Outfit, sans-serif",
									children: "WC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "3.2",
									cy: HOUSE.yardFront + 20.6,
									r: "0.6",
									fill: "var(--color-sage)",
									opacity: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "4.3",
									cy: HOUSE.yardFront + 21.2,
									r: "0.35",
									fill: "var(--color-sage)",
									opacity: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "4.3",
									y: HOUSE.yardFront + HOUSE.houseD + 1.95,
									textAnchor: "middle",
									fontSize: "0.2",
									fill: "var(--color-ink-soft)",
									fontFamily: "Outfit, sans-serif",
									children: "SÂN SAU"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "4.3",
									y: HOUSE.yardFront + HOUSE.houseD + 2.25,
									textAnchor: "middle",
									fontSize: "0.2",
									fill: "var(--color-ink-soft)",
									fontFamily: "Outfit, sans-serif",
									children: "4.00 m"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
									v: true,
									x: -.35,
									y1: 0,
									y2: HOUSE.yardFront,
									label: "8.00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
									v: true,
									x: -.35,
									y1: HOUSE.yardFront,
									y2: HOUSE.yardFront + HOUSE.houseD,
									label: "18.00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
									v: true,
									x: -.35,
									y1: HOUSE.yardFront + HOUSE.houseD,
									y2: D,
									label: "4.00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
									v: true,
									x: -1.05,
									y1: 0,
									y2: D,
									label: "30.00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dim, {
									h: true,
									y: -.45,
									x1: 0,
									x2: W,
									label: "5.00"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "2.5",
									y: "-1.05",
									textAnchor: "middle",
									fontSize: "0.3",
									fill: "var(--color-sage)",
									fontFamily: "Outfit, sans-serif",
									letterSpacing: "0.12",
									children: "MẶT TIỀN · PHỐ"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "2.5",
									y: D + 1.15,
									textAnchor: "middle",
									fontSize: "0.3",
									fill: "var(--color-sage)",
									fontFamily: "Outfit, sans-serif",
									letterSpacing: "0.12",
									children: "HƯỚNG SÂN SAU"
								})
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-[11px] tracking-wide text-faint",
						children: "Tỷ lệ minh họa · đơn vị mét · tim trục ngoài 5.00 m"
					})]
				})
			})]
		})
	});
}
function Dim({ v, h, x, y, x1, x2, y1, y2, label }) {
	const stroke = "var(--color-oak)";
	if (v && x != null && y1 != null && y2 != null) {
		const mid = (y1 + y2) / 2;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1,
				x2: x,
				y2,
				stroke,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x - .12,
				y1,
				x2: x + .12,
				y2: y1,
				stroke,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x - .12,
				y1: y2,
				x2: x + .12,
				y2,
				stroke,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: x - .18,
				y: mid,
				textAnchor: "middle",
				fontSize: "0.28",
				fill: "var(--color-oak)",
				fontFamily: "Outfit, sans-serif",
				transform: `rotate(-90 ${x - .18} ${mid})`,
				children: label
			})
		] });
	}
	if (h && y != null && x1 != null && x2 != null) {
		const mid = (x1 + x2) / 2;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1,
				y1: y,
				x2,
				y2: y,
				stroke,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1,
				y1: y - .12,
				x2: x1,
				y2: y + .12,
				stroke,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x2,
				y1: y - .12,
				x2,
				y2: y + .12,
				stroke,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: mid,
				y: y - .18,
				textAnchor: "middle",
				fontSize: "0.28",
				fill: "var(--color-oak)",
				fontFamily: "Outfit, sans-serif",
				children: label
			})
		] });
	}
	return null;
}
function Walkthrough() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "phoi-canh",
		className: "scroll-mt-20 border-t border-line bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-sage uppercase",
					children: "06 — Phối cảnh 3D"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl",
					children: "Từ tờ mặt bằng tới bàn thờ, trong hai phút"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: [
						"Mở đầu là mặt bằng tầng 1 cắt ở cao độ +1.20 m. Đó không phải hình vẽ mà là chính mô hình 3D nhìn từ trên xuống. Mặt cắt nâng lên thì tường mọc lên, rồi camera xuống phố, đi qua từng phòng. Phòng nào cũng giữ nét vẽ cho tới khi camera bước vào. Kích thước lấy thẳng từ",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: "house-data"
						}),
						", cùng nguồn với mặt bằng và bản vẽ CAD."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "mt-8 aspect-video w-full rounded-xl bg-ink shadow-[var(--shadow-border)]",
					src: "/video/dreamhouse-tour.mp4",
					poster: "/video/poster.jpg",
					controls: true,
					playsInline: true,
					preload: "metadata"
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Concept, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SitePlan, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloorPlans, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailDrawings, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightAir, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Materials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Walkthrough, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBlock, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl",
						children: "Nhà phố 5 × 30"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-faint",
						children: "Phương án A · 2 tầng + tum · 4 PN · 2 WC · 2026"
					})]
				})
			})
		]
	});
}
function Concept() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:col-span-7",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-sage uppercase",
					children: "Ý đồ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl font-medium sm:text-4xl",
					children: "Chiều sâu là vấn đề. Cầu thang kính dưới mái kính là câu trả lời."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted sm:text-base",
					children: "Nhà ống 5 m không chia được hai phòng cạnh nhau. Công năng phải xếp dọc: dương phía phố, âm phía vườn. Thang chữ U ba cạnh: 3 bậc ngang từ bục gỗ sau phòng khách, vế dài 1.00 m ép sát tường trái (y 5.00–8.90), 3 bậc quay ra lên tầng 2; vế dài và vế lên tum chồng đúng một dải, mái kính trùm ngay trên đầu thang — dải thang là giếng trời: vừa đi, vừa thở, vừa sáng cho khối tủ gầm thang, bếp chữ L + đảo, hành lang tầng 2 và sảnh tum."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1",
			children: [
				[
					"04",
					"Phòng ngủ",
					"Một dưới đất cho ông bà, cuối nhà, yên tĩnh, kín sân sau; ba trên lầu."
				],
				[
					"02",
					"WC",
					"WC tầng 1 là dải riêng sát tường trái sân sau, nối liền sau phòng ngủ, mái kính che lối từ cửa sau; WC tầng 2 giữa nhà bên phải, thoát qua hộp gen tường phải."
				],
				[
					"01",
					"Phòng thờ",
					"Phía trước tum, ban thờ nhìn ra sân thượng và mặt tiền."
				]
			].map(([n, t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-t border-line pt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl text-oak",
						children: n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-medium",
						children: t
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: d
					})
				]
			}, t))
		})]
	});
}
//#endregion
export { Home as component };
