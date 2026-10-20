import { C as MathUtils, F as Vector3, f as CatmullRomCurve3 } from "../_libs/three.mjs";
import { P, ZF } from "./house-scene-D2LOrMYb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tour-CAB01g4Z.js
var smooth = (a, b, t) => {
	const x = Math.min(1, Math.max(0, (t - a) / (b - a)));
	return x * x * (3 - 2 * x);
};
var ease = (x) => x * x * (3 - 2 * x);
var E1 = ZF.t1 + 1.6;
var E2 = ZF.t2 + 1.6;
var E3 = ZF.tum + 1.6;
var onStair = (za, y0, R, y) => za + Math.max(0, (y - y0) / .26) * R + 1.6;
var S1 = (y) => onStair(ZF.t1, 5, 3.6 / 24, y) + .6;
var S2 = (y) => onStair(ZF.t2, 6, 3.3 / 20, y);
var SEGS = [
	{
		dur: 38,
		keys: [
			[
				2.5,
				-11.5,
				1.65,
				2.5,
				6,
				4.6
			],
			[
				3,
				-8.8,
				1.65,
				3.2,
				3,
				2.6
			],
			[
				4.3,
				-5.5,
				1.65,
				3.4,
				3,
				2
			],
			[
				4.2,
				-2.4,
				1.65,
				3.4,
				6,
				2.2
			],
			[
				3.6,
				-.5,
				1.95,
				3.4,
				6,
				2
			],
			[
				3.5,
				1,
				E1,
				.8,
				6.5,
				1.6
			],
			[
				2.2,
				2.3,
				E1,
				4.6,
				5,
				1.6
			],
			[
				3.2,
				4.4,
				E1,
				.8,
				8,
				1.5
			],
			[
				3.6,
				5.5,
				E1,
				.6,
				7.6,
				1.3
			],
			[
				4.45,
				9,
				E1,
				.6,
				9.6,
				1.3
			],
			[
				3.6,
				9.6,
				E1,
				1,
				13.2,
				1.1
			],
			[
				4.3,
				12,
				E1,
				4.3,
				15.5,
				1.5
			],
			[
				4.3,
				13.4,
				E1,
				4.3,
				17,
				1.6
			],
			[
				4.3,
				15.6,
				E1,
				4.3,
				19,
				1.5
			],
			[
				4.3,
				17.5,
				E1,
				2.6,
				21,
				1.3
			],
			[
				4.3,
				19.3,
				1.65,
				1.2,
				18.9,
				1.3
			]
		],
		caps: [
			{
				at: 0,
				title: "Mặt tiền khung trắng bo cong",
				note: "Khung trắng ôm loggia tầng 2, lan can nan đen, bồn cây be; tum có giàn pergola lam đen."
			},
			{
				at: 1,
				title: "Cổng gỗ + nan sắt",
				note: "Hai cánh gỗ nan giữa, nan sắt đen hai bên trong khung trắng. Chỗ đỗ một xe, lối đi 1.20 m bên phải."
			},
			{
				at: 4,
				title: "Tam cấp + hiên",
				note: "Nền nhà +0.45 m — ba bậc 150 mm, trần hiên ốp gỗ dưới khung tầng 2."
			},
			{
				at: 5,
				title: "Phòng khách",
				note: "Sofa da góc L tựa tường trái, đèn cây giấy, bàn trà đá vân. Bục gỗ chân thang ngay sau sofa."
			},
			{
				at: 6,
				title: "Vách tivi gỗ nan",
				note: "Panel be + dải gỗ nan, kệ treo hắt LED; góc cây xanh + bàn thờ Thần Tài cuối vách."
			},
			{
				at: 7,
				title: "Thang chữ U sát tường",
				note: "Bậc đá trắng hắt LED, lan can kính gấp tại hai chiếu nghỉ, tay vịn đồng — như ảnh mẫu."
			},
			{
				at: 8,
				title: "Tủ liền gầm thang",
				note: "Kệ rượu ở đầu thấp, tủ kính khung đen có đèn trên tủ thấp — đỉnh tủ chạy sát theo dốc thang."
			},
			{
				at: 9,
				title: "Tủ lạnh, tháp lò, bếp chữ L",
				note: "Cùng một mặt với tủ gầm thang; rẽ chữ L ở tường sau: chậu rửa, bếp từ, tủ trên hai tầng kịch trần."
			},
			{
				at: 10,
				title: "Đảo bếp + bàn ăn 6 ghế",
				note: "Đảo gỗ vân dọc mặt đá đen, 2 ghế bar; bàn ăn mặt đá dọc giữa nhà dưới cụm đèn cầu."
			},
			{
				at: 12,
				title: "Hành lang ra sân sau",
				note: "Dọc tường phải, qua cửa phòng ông bà — phòng yên tĩnh, kín sân sau, sáng qua ô kính trên cao ra hành lang."
			},
			{
				at: 15,
				title: "WC cuối sân sau",
				note: "Dải WC riêng ép sát tường trái, nối liền sau phòng ngủ, chạy hết chiều sâu sân; cửa quay ra vườn ngay dưới mái kính từ cửa sau, nền bằng nền nhà — trong nhà dài thêm 1 m cho bếp và phòng ngủ."
			}
		]
	},
	{
		dur: 12,
		cut: true,
		keys: [
			[
				2.9,
				4.5,
				E1,
				.7,
				4.5,
				2.2
			],
			[
				1.6,
				4.5,
				E1 + .3,
				.6,
				4.6,
				2.4
			],
			[
				.7,
				4.5,
				E1 + .6,
				.7,
				8,
				3
			],
			[
				.7,
				6.5,
				S1(6.5),
				.7,
				9.5,
				S1(9)
			],
			[
				.7,
				8.4,
				S1(8.4),
				1.2,
				10.4,
				S1(8.9) + .4
			],
			[
				.75,
				9.4,
				ZF.t1 + 3 + 1.6,
				3,
				9.4,
				ZF.t2 + 1.4
			],
			[
				1.8,
				9.4,
				ZF.t1 + 3.35 + 1.6,
				3.4,
				9,
				ZF.t2 + 1.5
			],
			[
				2.6,
				9.2,
				E2,
				1.8,
				7,
				5.6
			]
		],
		caps: [{
			at: 0,
			title: "Thang chữ U ba cạnh — 24 bậc",
			note: "Cạnh 1: 3 bậc ngang từ bục gỗ tới chiếu nghỉ góc tường · cạnh 2: vế dài dọc tường trái · cạnh 3: 3 bậc quay ra phía trong lên tầng 2."
		}]
	},
	{
		dur: 15,
		keys: [
			[
				2.6,
				9.2,
				E2,
				1.8,
				7,
				5.6
			],
			[
				1.8,
				8.6,
				E2,
				1.8,
				6,
				5.5
			],
			[
				1.8,
				7.4,
				E2,
				3.8,
				6.5,
				5.3
			],
			[
				1.8,
				5.6,
				E2,
				1.75,
				3,
				5.5
			],
			[
				1.9,
				4.3,
				E2,
				2.5,
				2.5,
				5.3
			],
			[
				2.8,
				3,
				E2,
				1.5,
				.5,
				5.4
			],
			[
				2.8,
				2,
				5.6,
				2.6,
				-2,
				5.2
			]
		],
		caps: [
			{
				at: 1,
				title: "Hành lang giếng thang",
				note: "Từ đầu thang đi về phía trước: lan can kính bên trái nhìn xuống bếp, vế lên tum chồng đúng trên vế dài tầng 1."
			},
			{
				at: 2,
				title: "Sảnh sinh hoạt",
				note: "Ghế dài, bàn học, kệ sách — cạnh WC chung của tầng."
			},
			{
				at: 4,
				title: "Master — phòng ngủ 02",
				note: "Đầu giường bọc nệm, vách gỗ hắt LED, sàn xương cá, rèm vải kịch trần mở ra loggia khung trắng."
			}
		]
	},
	{
		dur: 10,
		cut: true,
		keys: [
			[
				3,
				10.9,
				E2,
				4.3,
				12.5,
				5.6
			],
			[
				4.3,
				11.6,
				E2,
				4.3,
				13.5,
				5.5
			],
			[
				4.3,
				12.1,
				E2,
				2,
				12.8,
				5.4
			],
			[
				3.2,
				12.3,
				E2,
				1,
				13.6,
				5.3
			],
			[
				2.6,
				14,
				E2,
				1,
				12,
				5.4
			]
		],
		caps: [{
			at: 0,
			title: "Phòng ngủ 03",
			note: "Sau đầu thang, cửa ra lối đi. Ô kính trên cao lấy sáng mái kính."
		}]
	},
	{
		dur: 9,
		cut: true,
		keys: [
			[
				4.3,
				11.8,
				E2,
				4.3,
				14.5,
				5.5
			],
			[
				4.3,
				14.2,
				E2,
				4.3,
				16,
				5.3
			],
			[
				4.3,
				15.3,
				E2,
				2,
				16.4,
				4.8
			],
			[
				3.4,
				16.4,
				5.6,
				1,
				16.4,
				4.7
			]
		],
		caps: [{
			at: 0,
			title: "Phòng ngủ 04",
			note: "Cuối lối đi, cửa sổ 3.20 m nhìn sân sau."
		}]
	},
	{
		dur: 18,
		cut: true,
		keys: [
			[
				1.8,
				5.5,
				E2,
				.7,
				8,
				6
			],
			[
				.7,
				6.2,
				S2(6.2),
				.7,
				9.5,
				S2(9)
			],
			[
				.7,
				8,
				S2(8),
				.7,
				11,
				S2(10.9) + .2
			],
			[
				.7,
				10,
				S2(10),
				.9,
				12,
				8.6
			],
			[
				.8,
				11.4,
				E3,
				3,
				10.6,
				8.9
			],
			[
				3,
				11.6,
				E3,
				4.3,
				9,
				8.9
			],
			[
				4.3,
				9.6,
				E3,
				4.3,
				7,
				8.9
			],
			[
				4.3,
				7.8,
				E3,
				2.8,
				6.6,
				8.5
			],
			[
				3.4,
				5.4,
				E3,
				2.8,
				8,
				8.3
			]
		],
		caps: [
			{
				at: 0,
				title: "Lên tum",
				note: "Vế thẳng chồng đúng trên vế dài tầng 1, đổ lên sảnh tum ngay dưới mái kính."
			},
			{
				at: 5,
				title: "Sảnh tum",
				note: "Bàn trà, tủ đồ thờ; cửa ra sân phơi phía sau."
			},
			{
				at: 7,
				title: "Phòng thờ",
				note: "Trở lại phía trước: ban thờ tựa tường hậu, nhìn qua kính ra sân thượng và phố."
			}
		]
	},
	{
		dur: 13,
		keys: [
			[
				3.4,
				5.4,
				E3,
				2.8,
				8,
				8.3
			],
			[
				2.5,
				5.2,
				E3,
				2.5,
				0,
				8.6
			],
			[
				2.5,
				3.6,
				E3,
				2.5,
				-6,
				8.4
			],
			[
				2.5,
				1.6,
				E3,
				2.5,
				-10,
				7
			],
			[
				2.5,
				-1.5,
				9.3,
				2.5,
				2,
				8.4
			],
			[
				2.5,
				-4.5,
				12.5,
				2.5,
				1,
				7
			],
			[
				-7,
				-15,
				17,
				2.5,
				5,
				5.5
			]
		],
		caps: [{
			at: 2,
			title: "Sân thượng + pergola",
			note: "Sàn teak, giàn lam đen tựa trụ be cao, bồn cây góc trái — đúng tinh thần ảnh mặt tiền."
		}, {
			at: 5,
			title: "Nhà phố 5 × 30 m",
			note: "2 tầng + tum · 4 phòng ngủ · thang chữ U ba cạnh sát tường, mái kính trên thang · bếp dọc gầm thang · hành lang thẳng ra sân sau."
		}]
	}
];
var v3 = (x, y, z) => P(x, y, z);
var built = (() => {
	let t0 = 16;
	return SEGS.map((s, si) => {
		if (si < SEGS.length - 1) s.keys = s.keys.map((k) => [
			k[0],
			k[1],
			k[2],
			k[3],
			k[4],
			(k[5] + k[2] - .25) / 2
		]);
		const pos = new CatmullRomCurve3(s.keys.map((k) => v3(k[0], k[1], k[2])), false, "centripetal");
		const look = new CatmullRomCurve3(s.keys.map((k) => v3(k[3], k[4], k[5])), false, "centripetal");
		const L = pos.getLengths(400);
		const total = L[L.length - 1];
		const keyS = s.keys.map((_, i) => L[Math.round(i / (s.keys.length - 1) * 400)] / total);
		const inv = (target) => {
			let lo = 0, hi = 1;
			for (let i = 0; i < 30; i++) {
				const m = (lo + hi) / 2;
				if (ease(m) < target) lo = m;
				else hi = m;
			}
			return lo;
		};
		const keyT = keyS.map((x) => t0 + inv(x) * s.dur);
		const out = {
			...s,
			pos,
			look,
			t0,
			keyT
		};
		t0 += s.dur;
		return out;
	});
})();
var DURATION = built[built.length - 1].t0 + built[built.length - 1].dur;
var FPS = 30;
var CUTS = built.filter((s) => s.cut).map((s) => s.t0);
var CAPTIONS = built.flatMap((s, si) => s.caps.map((c, ci) => ({
	t0: s.keyT[c.at] + (c.at === 0 ? .3 : 0),
	t1: ci + 1 < s.caps.length ? s.keyT[s.caps[ci + 1].at] : si + 1 < built.length ? built[si + 1].t0 : DURATION,
	title: c.title,
	note: c.note
})));
var TOP = new Vector3(2.5, 128, 15);
var AERIAL = new Vector3(-5, 24, -13);
var AERIAL_LOOK = new Vector3(2.5, 3.5, 14);
function cameraAt(t) {
	const up = new Vector3(1, 0, 0).lerp(new Vector3(0, 1, 0), smooth(5.5, 8.5, t)).normalize();
	if (t < 16) {
		const first = built[0];
		const street = first.pos.getPoint(0), streetLook = first.look.getPoint(0);
		if (t < 5) return {
			pos: TOP.clone().setY(128 - t * 1.6),
			look: new Vector3(2.5, 0, 15),
			fov: 8,
			up
		};
		if (t < 11) {
			const k = smooth(5, 11, t);
			return {
				pos: new Vector3(2.5, 120, 15).lerp(AERIAL, k),
				look: new Vector3(2.5, 0, 15).lerp(AERIAL_LOOK, k),
				fov: MathUtils.lerp(8, 32, k),
				up
			};
		}
		const k = smooth(11, 16, t);
		return {
			pos: AERIAL.clone().lerp(street, k),
			look: AERIAL_LOOK.clone().lerp(streetLook, k),
			fov: MathUtils.lerp(32, 58, k),
			up
		};
	}
	const s = [...built].reverse().find((b) => t >= b.t0) ?? built[0];
	const u = ease(Math.min(1, (t - s.t0) / s.dur));
	return {
		pos: s.pos.getPointAt(u),
		look: s.look.getPoint(s.pos.getUtoTmapping(u, 0)),
		fov: 58,
		up
	};
}
var cutHeight = (t) => t < 5 ? 1.65 : t < 10.5 ? MathUtils.lerp(1.65, 12.5, smooth(5, 10.5, t)) : 1e3;
var pocheAt = (t) => 1 - smooth(7, 10, t);
var gateAt = (t) => smooth(16.3, 18.6, t);
var porch = built[0].keyT[4];
var slideAt = (t) => smooth(porch - 3, porch - .6, t);
var fadeAt = (t) => Math.max(0, ...CUTS.map((c) => 1 - smooth(0, .45, Math.abs(t - c))));
var planLabelsAt = (t) => 1 - smooth(5.5, 7.5, t);
var STEP = .1;
var FLOOR_Y = [
	ZF.t1,
	ZF.t2,
	ZF.tum
];
var table = (() => {
	const st = {
		a: [
			-100,
			-100,
			-100
		],
		lo: [
			-100,
			-100,
			-100
		],
		hi: [
			-100,
			-100,
			-100
		]
	};
	const out = [];
	for (let t = 0; t <= DURATION + STEP; t += STEP) {
		if (t >= 11) {
			const k = smooth(11, 16, t);
			st.a = [
				MathUtils.lerp(-12, 8, k),
				MathUtils.lerp(-12, 9.2, k),
				MathUtils.lerp(-12, 12.4, k)
			].map((v, i) => Math.max(v, st.a[i]));
		}
		if (t >= 16) {
			const c = cameraAt(t).pos;
			FLOOR_Y.forEach((fy, l) => {
				if (c.y < fy - .3 || c.y > fy + 3.4) return;
				if (l === 0) st.a[0] = Math.max(st.a[0], c.z + 5);
				else {
					const fresh = st.lo[l] < -50;
					st.lo[l] = fresh ? c.z - 4 : Math.min(st.lo[l], c.z - 4);
					st.hi[l] = fresh ? c.z + 4 : Math.max(st.hi[l], c.z + 4);
				}
			});
		}
		const end = smooth(DURATION - 7, DURATION - 2.5, t);
		out.push({
			a: st.a.map((v) => MathUtils.lerp(v, 40, end)),
			lo: [...st.lo],
			hi: [...st.hi]
		});
	}
	return out;
})();
var inkAt = (t) => table[Math.min(table.length - 1, Math.max(0, Math.round(t / STEP)))];
//#endregion
export { CAPTIONS, DURATION, FPS, cameraAt, cutHeight, fadeAt, gateAt, inkAt, planLabelsAt, pocheAt, slideAt };
