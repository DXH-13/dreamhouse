import { n as __exportAll$1 } from "../_runtime.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/house-data-B6isfp8C.js
var house_data_B6isfp8C_exports = /* @__PURE__ */ __exportAll$1({
	a: () => FURN,
	c: () => MATERIALS,
	d: () => SITE_NOTES,
	f: () => WALLS,
	g: () => stairSoffit,
	h: () => riseOf,
	i: () => FLOORS,
	l: () => MJ_PROMPT,
	m: () => house_data_exports,
	n: () => DETAILS,
	o: () => HOUSE,
	p: () => flightTop,
	r: () => FENG_SHUI,
	s: () => LIGHT_POINTS,
	t: () => CORE,
	u: () => RAILS
});
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var house_data_exports = /* @__PURE__ */ __exportAll({
	CORE: () => CORE,
	DETAILS: () => DETAILS,
	FENG_SHUI: () => FENG_SHUI,
	FLOORS: () => FLOORS,
	FURN: () => FURN,
	HOUSE: () => HOUSE,
	LIGHT_POINTS: () => LIGHT_POINTS,
	MATERIALS: () => MATERIALS,
	MJ_PROMPT: () => MJ_PROMPT,
	RAILS: () => RAILS,
	SITE_NOTES: () => SITE_NOTES,
	WALLS: () => WALLS,
	flightTop: () => flightTop,
	riseOf: () => riseOf,
	stairSoffit: () => stairSoffit
});
var HOUSE = {
	lotW: 5,
	lotD: 30,
	yardFront: 8,
	houseD: 18,
	yardRear: 4,
	width: 5,
	netW: 4.6,
	floors: "2 tầng + 1 tum",
	areaFloor: 90,
	areaLot: 150,
	h1: 3.6,
	h2: 3.3,
	hTum: 3,
	heightTotal: 11.2
};
var CORE = {
	x: [.2, 1.2],
	tread: .26,
	flights: {
		t1: {
			y: 5,
			risers: 16,
			lead: 4,
			tail: 4
		},
		t2: {
			y: 6,
			risers: 20,
			lead: 0,
			tail: 0
		}
	},
	landing: {
		y: [4, 5],
		top: [8.9, 9.9]
	},
	holes: {
		t2: [6, 9.9],
		tum: [7.1, 10.94]
	},
	tailHole: {
		x: [1.2, 1.98],
		y: [8.9, 9.9]
	},
	y0: 5,
	y1: 11.5,
	spine: [3.8, 4.8]
};
var flightTop = (id) => CORE.flights[id].y + (CORE.flights[id].risers - 1) * CORE.tread;
var riseOf = (id) => {
	const f = CORE.flights[id];
	return (id === "t1" ? HOUSE.h1 : HOUSE.h2) / (f.lead + f.risers + f.tail);
};
var stairSoffit = (y) => {
	const f = CORE.flights.t1, R = riseOf("t1");
	if (y < flightTop("t1")) return Math.min(3.3, (f.lead + (y - f.y) / CORE.tread) * R - .25);
	return y < CORE.landing.top[1] ? (f.lead + f.risers) * R - .25 : 3.3;
};
function spine(id, y, h, sub) {
	return {
		id: `${id}-spine`,
		name: "Lối đi",
		subtitle: sub,
		x: CORE.spine[0],
		y,
		w: 1.2,
		h,
		kind: "hall",
		areaGross: +(1.2 * h).toFixed(1),
		areaNet: +(.95 * h).toFixed(1),
		dims: `1.00 × ${h.toFixed(2)} m`,
		light: "Đèn hắt chân tường; cuối lối đi là cửa ra sân / cửa phòng",
		notes: ["Lối đi thẳng dọc tường phải — cửa phòng mở ra đây, không phòng nào đi xuyên phòng khác."]
	};
}
var FLOORS = [
	{
		id: "t1",
		label: "Tầng 1",
		title: "Khách — thang chữ U ba cạnh sát tường, tủ liền gầm thang, bếp L + đảo — phòng ông bà cuối nhà, WC cuối sân",
		blurb: "Như mặt bằng mẫu: phòng khách sofa góc L, thang chữ U ba cạnh — 3 bậc ngang từ bục gỗ, vế dài ép sát tường trái, 3 bậc quay ra lên tầng 2 — dãy bếp chạy ngay dưới và cạnh thang, khối tủ đặc dưới gầm thang nối liền tủ lạnh và bếp chữ L có đảo, bàn ăn 6 ghế giữa nhà. Hành lang dài dọc tường phải ra sân sau; WC tách thành khối riêng cuối sân để trong nhà dài thêm.",
		height: "Cao độ tầng 3.60 m · thông thủy 3.30 m",
		rooms: [
			{
				id: "t1-living",
				name: "Phòng khách",
				subtitle: "Sofa góc L — vách tivi ốp gỗ nan",
				x: 0,
				y: 0,
				w: 5,
				h: CORE.y0,
				kind: "living",
				areaGross: 25,
				areaNet: 20.2,
				dims: "5.00 × 5.00 m (thông thủy 4.60 × 4.40 m sau kính)",
				light: "Kính lớn mặt tiền + rèm voan hai lớp, sáng đỉnh dọc dải thang phía sau",
				notes: [
					"Sofa da góc L tựa tường trái, đèn cây giấy ở góc, bàn trà đá vân trên chân đen.",
					"Vách tivi tường phải: panel be + dải gỗ nan, kệ gỗ treo hắt LED.",
					"Góc cây xanh + bàn thờ Thần Tài cuối vách tivi, nhìn ra cửa chính.",
					"Bục gỗ chân thang ngay sau sofa, như ảnh mẫu."
				]
			},
			{
				id: "t1-stair",
				name: "Thang + tủ gầm",
				subtitle: "Thang chữ U ba cạnh, vế dài 1.00 m sát tường — khối tủ liền dưới gầm",
				x: 0,
				y: CORE.y0,
				w: 1.2,
				h: 13.4 - CORE.y0,
				kind: "stair",
				areaGross: 10.1,
				areaNet: 8.4,
				dims: "vế dài 1.00 × 3.90 m + 2 chiếu nghỉ 1.00 × 1.00 m · 24 bậc × 150 mm",
				light: "Mái kính trên đầu thang, sáng rơi qua lỗ sàn tầng 2 và tum",
				notes: [
					"Như ảnh mẫu: bục gỗ chân thang → 3 bậc đá đặc chạy ngang nhà lên chiếu nghỉ góc tường trước (y 4.00–5.00) → vế dài 15 bậc bay dọc tường trái → chiếu nghỉ góc sau (y 8.90–9.90) → 3 bậc quay ra phía trong lên tầng 2 tại x 1.98.",
					"24 bậc đá trắng × 150 mm hắt LED, lan can kính gấp tại hai chiếu nghỉ, tay vịn đồng.",
					"Gầm thang là một khối tủ đặc, mặt tủ thẳng mép thang x 1.20, đỉnh tủ chạy theo dốc: kệ rượu ở đầu thấp → tủ kính khung đen có đèn trên tủ thấp; dưới chiếu nghỉ sau (bản treo 200, mặt +3.00) tủ cao tới 2.75 m.",
					"Hết đoạn thấp: tủ cao, tủ lạnh 4 cánh đen, tháp lò nướng + hốc đồ điện — cùng một mặt phẳng, kịch trần."
				]
			},
			{
				id: "t1-kitchen",
				name: "Bếp + Ăn",
				subtitle: "Bếp chữ L + đảo — bàn ăn 6 ghế",
				x: 1.2,
				y: CORE.y0,
				w: 3.8,
				h: 13.4 - CORE.y0,
				kind: "kitchen",
				areaGross: 31.9,
				areaNet: 29.6,
				dims: "3.60 × 8.40 m",
				light: "Sáng đỉnh dọc dải thang + mở thông phòng khách",
				notes: [
					"Nhánh dọc là khối tủ gầm thang + tủ lạnh + tháp lò; nhánh ngang tường sau có chậu rửa, bếp từ, hút mùi, tủ trên hai tầng kịch trần hắt LED.",
					"Đảo bếp gỗ vân dọc mặt đá đen 0.95 × 1.50 m, 2 ghế bar, chân hắt LED như ảnh mẫu.",
					"Bàn ăn mặt đá 0.90 × 2.00 m, 6 ghế da be, đặt dọc giữa phòng; đèn thả cụm cầu trắng."
				]
			},
			{
				id: "t1-bed",
				name: "Phòng ngủ 01",
				subtitle: "Người lớn tuổi — cuối nhà, yên tĩnh, kín sân sau",
				x: 0,
				y: 13.4,
				w: 3.8,
				h: 4.6,
				kind: "bed",
				areaGross: 17.5,
				areaNet: 15.4,
				dims: "3.80 × 4.60 m (thông thủy 3.55 × 4.30 m)",
				light: "Ô kính trên cao (transom) ra hành lang + điều hòa — phòng yên tĩnh, tường hậu kín",
				notes: ["Cửa vào từ hành lang; tủ áo tường trước, giường đầu bọc nệm tựa tường trái, bàn làm việc sát hành lang.", "Tường hậu kín, không mở ra sân sau: phòng yên tĩnh, kín đáo; lấy sáng và thông gió qua ô kính trên cao ra hành lang (sáng từ cửa sau), điều hòa. WC đưa ra cuối sân nên phòng dài thêm 1 m."]
			},
			spine("t1", 13.4, 4.6, "Hành lang dài: phòng ngủ, ra sân sau + WC"),
			{
				id: "t1-wc",
				name: "WC",
				subtitle: "Dải dọc sát tường trái, nối liền sau phòng ngủ",
				x: 0,
				y: 18,
				w: 1.6,
				h: 3.8,
				kind: "wc",
				areaGross: 6.1,
				areaNet: 4.7,
				dims: "1.30 × 3.60 m",
				light: "Ô thoáng trên cao tường phải + cửa kính mờ nhìn ra vườn",
				notes: ["Dải dọc 1.60 × 3.80 m ép sát tường trái, nối liền tường hậu phòng ngủ, chạy hết chiều sâu sân: lavabo — bồn cầu — sen kính cuối dải. Phần sân còn lại là vườn liền 3.40 × 2.40 m bên phải.", "Cửa WC ở tường phải sát đầu nhà, cách cửa sau 2 m dưới mái kính. Nền +0.45 bằng nền nhà, ống thẳng ra hố ga sân sau."]
			}
		]
	},
	{
		id: "t2",
		label: "Tầng 2",
		title: "Ba phòng ngủ — hành lang dọc giếng thang",
		blurb: "Thang chữ U đổ lên đầu thang phía sau (cạnh 3 lên sàn tại x 1.98, y 8.90–9.90): đi hành lang kính dọc giếng thang về phía trước là Master và sảnh sinh hoạt; phía sau là phòng 03, phòng 04. Vế lên tum nằm chồng đúng trên vế dài tầng 1.",
		height: "Cao độ tầng 3.30 m · thông thủy 3.00 m",
		rooms: [
			{
				id: "t2-loggia",
				name: "Loggia mặt tiền",
				subtitle: "Khung trắng bo cong — lan can nan đen, bồn cây",
				x: 0,
				y: 0,
				w: 5,
				h: 1.1,
				kind: "outdoor",
				areaGross: 5.5,
				areaNet: 5.1,
				dims: "5.00 × 1.10 m",
				light: "Trực tiếp mặt tiền, khung đặc che nắng đứng bóng",
				notes: ["Khung bê tông trắng bo góc nhô 0.60 m, trần gỗ có đèn lon.", "Lan can nan sắt đen 1.10 m, bồn cây be bên phải."]
			},
			{
				id: "t2-master",
				name: "Phòng ngủ 02",
				subtitle: "Master — phụ huynh",
				x: 0,
				y: 1.1,
				w: 5,
				h: CORE.y0 - 1.1,
				kind: "bed",
				areaGross: 19.5,
				areaNet: 17,
				dims: "5.00 × 3.90 m (thông thủy 4.60 × 3.70 m)",
				light: "Cửa kính 3 cánh ra loggia, rèm voan + rèm vải",
				notes: ["Cửa vào từ đầu hành lang giếng thang.", "Giường 1.80 m đầu bọc nệm, vách sau ốp gỗ hắt LED; tủ sliding 2.40 m tường phải."]
			},
			{
				id: "t2-stair",
				name: "Thang + giếng trời",
				subtitle: "Vế lên tum chồng trên vế dài tầng 1",
				x: 0,
				y: CORE.y0,
				w: 1.2,
				h: CORE.y1 - CORE.y0,
				kind: "stair",
				areaGross: 7.8,
				areaNet: 6.5,
				dims: "1.00 × 4.94 m · 20 bậc × 165 mm",
				light: "Mái kính phía trên, lỗ sàn 1.00 × 3.90 m + ô 0.78 × 1.00 m trên cạnh 3 nhìn xuống bếp",
				notes: ["Chân vế lên tum ở chiếu tới phía trước (y 5.0–6.0); thang tầng 1 lên tới chiếu nghỉ sau (y 8.9–9.9) rồi cạnh 3 quay ra đổ lên đầu thang tại x 1.98.", "Lan can kính 1.10 m dọc mép lỗ sàn phía hành lang (x 1.20), gấp quanh ô lỗ trên cạnh 3."]
			},
			{
				id: "t2-corridor",
				name: "Hành lang giếng thang",
				subtitle: "Nối đầu thang phía sau với chân vế lên tum phía trước",
				x: 1.2,
				y: CORE.y0,
				w: 1.2,
				h: 8.4 - CORE.y0,
				kind: "hall",
				areaGross: 4.1,
				areaNet: 3.4,
				dims: "1.10 × 3.40 m",
				light: "Sáng mái kính rơi qua lan can kính",
				notes: ["Một bên là lan can kính nhìn xuống bếp, một bên mở ra sảnh sinh hoạt."]
			},
			{
				id: "t2-lounge",
				name: "Sảnh sinh hoạt",
				subtitle: "Ghế ngồi — bàn học — kệ sách",
				x: 2.4,
				y: CORE.y0,
				w: 2.6,
				h: 8.4 - CORE.y0,
				kind: "hall",
				areaGross: 8.8,
				areaNet: 7.6,
				dims: "2.30 × 3.30 m",
				light: "Sáng mái kính qua hành lang",
				notes: ["Ghế dài có ngăn kéo, bàn học treo tường, kệ sách ô vuông tường phải — như ảnh mẫu sảnh."]
			},
			{
				id: "t2-wc",
				name: "WC chung",
				subtitle: "Lavabo — sen — giặt sấy",
				x: 2.9,
				y: 8.4,
				w: 2.1,
				h: 2,
				kind: "wc",
				areaGross: 4.2,
				areaNet: 3.4,
				dims: "2.00 × 1.90 m",
				light: "Quạt hút lên mái qua hộp gen tường phải",
				notes: ["Cửa ra đầu thang (tường x 2.90), phục vụ 3 phòng ngủ.", "Ống thoát xuống hộp gen 300 × 300 sát tường phải."]
			},
			{
				id: "t2-landing",
				name: "Đầu thang",
				subtitle: "Cạnh 3 của thang chữ U đổ lên đây",
				x: 1.2,
				y: 8.4,
				w: 1.7,
				h: 2,
				kind: "hall",
				areaGross: 3.4,
				areaNet: 2.6,
				dims: "1.70 × 2.00 m",
				light: "Ngay dưới mái kính",
				notes: ["Bước lên từ cạnh 3 (x 1.98) quay về trước theo hành lang giếng thang, hoặc ra sau tới phòng 03, 04; cửa WC chung ngay bên phải."]
			},
			{
				id: "t2-hall",
				name: "Sảnh đầu thang",
				subtitle: "Sau đầu thang — vào lối đi phòng 03, 04",
				x: 1.2,
				y: 10.4,
				w: 3.8,
				h: CORE.y1 - 10.4,
				kind: "hall",
				areaGross: 4.2,
				areaNet: 3.6,
				dims: "3.60 × 1.10 m",
				light: "Ngay dưới mái kính",
				notes: ["Từ đầu thang đi thẳng ra sau vào lối đi phòng 03, 04; ô kính trên cao phòng 03 đón sáng mái kính."]
			},
			{
				id: "t2-mid",
				name: "Phòng ngủ 03",
				subtitle: "Sau thang — yên tĩnh",
				x: 0,
				y: CORE.y1,
				w: 3.8,
				h: 14.9 - CORE.y1,
				kind: "bed",
				areaGross: 12.9,
				areaNet: 11.7,
				dims: "3.80 × 3.40 m (thông thủy 3.55 × 3.30 m)",
				light: "Ô kính trên cao ra sảnh đầu thang dưới mái kính",
				notes: ["Giường 1.60 m tựa tường trái, tủ áo tường sau. Cửa ra lối đi."]
			},
			spine("t2", CORE.y1, 14.9 - CORE.y1, "Nối sảnh đầu thang với phòng 03, 04"),
			{
				id: "t2-rear",
				name: "Phòng ngủ 04",
				subtitle: "Cuối nhà — nhìn sân sau",
				x: 0,
				y: 14.9,
				w: 5,
				h: 18 - 14.9,
				kind: "bed",
				areaGross: 15.5,
				areaNet: 13.3,
				dims: "5.00 × 3.10 m (thông thủy 4.60 × 2.90 m)",
				light: "Cửa sổ lớn ra sân sau",
				notes: ["Cửa ở cuối lối đi. Giường 1.60 m tựa tường trái, tủ áo tường phải.", "Cửa sổ 3.20 m nhìn sân sau."]
			}
		]
	},
	{
		id: "tum",
		label: "Tầng tum",
		title: "Sân thượng pergola — phòng thờ nhìn ra phố — sảnh tum",
		blurb: "Phòng thờ trở lại phía trước, nhìn qua kính ra sân thượng giàn pergola. Vế thang đổ lên phía sau vào sảnh tum, mái kính trùm ngay trên dải thang.",
		height: "Cao độ tầng 3.00 m · thông thủy 2.70 m",
		rooms: [
			{
				id: "tum-terrace",
				name: "Sân thượng trước",
				subtitle: "Giàn pergola lam đen — bồn cây",
				x: 0,
				y: 0,
				w: 5,
				h: 4.5,
				kind: "outdoor",
				areaGross: 22.5,
				areaNet: 22.5,
				dims: "5.00 × 4.50 m",
				light: "Nắng lọc qua giàn lam",
				notes: ["Sàn gỗ teak ngoài trời trên lớp chống thấm XPS.", "Giàn pergola thép đen tựa trụ be cao bên phải, bồn cây lớn góc trái."]
			},
			{
				id: "tum-worship",
				name: "Phòng thờ",
				subtitle: "Hướng ra mặt tiền — nhìn qua sân thượng",
				x: 0,
				y: 4.5,
				w: 5,
				h: 8.2 - 4.5,
				kind: "worship",
				areaGross: 24.5,
				areaNet: 20.5,
				dims: "4.60 × 3.50 m trừ góc giếng thang",
				light: "Kính 3 cánh ra sân thượng, nắng dịu buổi sáng",
				notes: [
					"Ban thờ tựa giữa tường hậu phòng, mặt nhìn ra sân thượng / phố.",
					"Cửa phụ góc sau phải từ sảnh tum — không nằm sau lưng ban thờ.",
					"Không có WC phía trên; WC tầng 2 nằm lệch sang phải."
				]
			},
			{
				id: "tum-hall",
				name: "Sảnh tum",
				subtitle: "Đầu thang — bàn trà, tủ đồ thờ",
				x: 0,
				y: 8.2,
				w: 5,
				h: 13.8 - 8.2,
				kind: "hall",
				areaGross: 19,
				areaNet: 16.5,
				dims: "4.60 × 5.40 m",
				light: "Ngay dưới mái kính thang",
				notes: ["Bàn trà thấp, tủ đồ thờ + kỹ thuật tường sau.", "Cửa ra sân phơi góc sau phải."]
			},
			{
				id: "tum-stair",
				name: "Thang + giếng trời",
				subtitle: "Mái kính ngay trên",
				x: 0,
				y: CORE.holes.tum[0],
				w: 1.2,
				h: 12 - CORE.holes.tum[0],
				kind: "stair",
				areaGross: 5.5,
				areaNet: 4.6,
				dims: "1.00 × 3.84 m lỗ sàn",
				light: "Mái kính dán + khe gió",
				notes: ["Vế đổ lên phía sau vào sảnh tum; vách đặc ngăn với phòng thờ."]
			},
			{
				id: "tum-dry",
				name: "Sân phơi sau",
				subtitle: "Giàn phơi + dàn nóng",
				x: 0,
				y: 13.8,
				w: 5,
				h: 4.2,
				kind: "outdoor",
				areaGross: 21,
				areaNet: 21,
				dims: "5.00 × 4.20 m",
				light: "Trời mở, khuất tầm nhìn phố",
				notes: ["Giàn phơi xếp, dàn nóng máy lạnh.", "Không nhìn thấy từ mặt tiền; thoát nước riêng về sân sau."]
			}
		]
	}
];
var SITE_NOTES = [
	{
		title: "Sân trước 8.00 m",
		body: "0–0.50 m cổng hai cánh trong khung cổng trắng: nan sắt đen phía ngoài, tấm gỗ nan phía trong. 0.50–5.50 m chỗ đỗ 1 sedan dọc theo chiều sâu, lối đi 1.20 m bên phải. 5.50–8.00 m bồn cỏ, cây tán, bậc tam cấp — khoảng đệm 2.50 m trước kính khách."
	},
	{
		title: "Khối nhà 5.00 × 18.00 m",
		body: "90 m²/sàn. Tường biên 200 mm, thông thủy rộng 4.60 m. Thang chữ U ba cạnh: 3 bậc ngang từ bục gỗ sau sofa, vế dài 1.00 m ép sát tường trái (x 0.20–1.20, y 5.00–8.90) giữa hai chiếu nghỉ, 3 bậc quay ra lên tầng 2; vế dài T1 và vế T2→tum chồng đúng một dải, mái kính trùm đầu thang nên dải thang chính là giếng trời. Phía trước là khách / master / sân thượng; giữa nhà là khối tủ đặc dưới gầm thang + bếp chữ L có đảo + bàn ăn 6 ghế (T1), sảnh sinh hoạt + WC chung (T2), phòng thờ (tum); cuối nhà là phòng ông bà yên tĩnh, kín sân sau (T1), phòng 03, 04 (T2), sân phơi. WC T1 tách thành khối riêng cuối sân sau; WC T2 thoát qua hộp gen tường phải."
	},
	{
		title: "Sân sau 4.00 m",
		body: "Giếng trời thứ hai: cây tán nhỏ, sỏi, dương xỉ, lối đá. Hành lang tầng 1 ra thẳng cửa sau, mái kính (x 1.60–4.80, y 18.00–19.40) che lối đi sang cửa WC ở tường phải dải WC một tầng ép sát tường trái, nối liền sau tường hậu phòng ngủ 01 và chạy hết chiều sâu sân (x 0.00–1.60, y 18.00–21.80, nền +0.45, mái bằng +3.23); vườn liền x 1.60–5.00, y 19.40–21.80 (≈ 3.40 × 2.40 m). Cấp sáng và gió cho cửa sau hành lang tầng 1 và cửa sổ phòng ngủ 04; hố ga, bể tự hoại và giếng thấm nước mưa nằm dưới sân."
	}
];
var LIGHT_POINTS = [
	{
		title: "Hai giếng, một trục gió",
		body: "Gió vào từ cổng nan và kính khách, xuyên bếp – ăn mở thông cạnh thang, theo hành lang dài dọc tường phải ra sân sau. Khí nóng bốc lên dọc dải thang (stack effect) thoát ra khe gió dưới mái kính."
	},
	{
		title: "Chia sáng theo chiều sâu 18 m",
		body: "0–5.0 m: sáng trực tiếp mặt tiền. 5.0–11.5 m: sáng đỉnh từ mái kính trên đầu thang, rơi qua lỗ sàn tum (y 7.10–10.94) và tầng 2 (y 6.00–9.90, thêm ô trên cạnh 3) dọc dải thang 1.00 m xuống khối tủ gầm thang, đảo bếp và bàn ăn tầng 1; tầng 2 có hành lang lan can kính dọc lỗ sàn chia sáng cho sảnh sinh hoạt. 11.5–14.9 m: phòng 03 vay sáng qua ô kính trên cao ra sảnh đầu thang, sảnh tum nằm ngay dưới mái kính. 13.4–18 m tầng 1: hành lang sáng từ cửa sau kính ra sân sau, phòng ông bà vay sáng qua ô kính trên cao ra hành lang; 14.9–18 m tầng 2: sáng sân sau 4 m qua cửa sổ 3.20 m phòng 04."
	},
	{
		title: "Phòng ngủ giữa",
		body: "Điểm yếu kinh điển nhà ống. Phòng 03 nằm ngay sau sảnh đầu thang: ô kính 2.20 m trên cao tường trước (x 1.40–3.60) đón sáng mái kính, tường trắng, sàn gỗ xương cá sáng màu — không để phòng này thành ‘hộp tối’. Phòng ông bà tầng 1 nằm cuối nhà (y 13.40–18.00), tường hậu kín — yên tĩnh, kín sân sau như một phòng nghỉ: lấy sáng và gió qua ô kính trên cao ra hành lang (sáng từ cửa sau), điều hòa."
	},
	{
		title: "Vật liệu dẫn sáng",
		body: "Tường trắng ấm, lan can kính dọc lỗ sàn thang, bậc đá marble trắng hắt LED, sàn đá trắng khổ lớn. Tránh gỗ tối và hành lang đặc."
	}
];
var MATERIALS = [
	{
		name: "Bê tông sơn trắng",
		use: "Khung bo cong loggia, tường biên, lan can tum",
		swatch: "bg-mat-plaster",
		note: "Trắng ngà, không trắng lạnh. Khung nhô 0.60 m bo góc cong đổ bóng sâu lên loggia."
	},
	{
		name: "Gỗ nan",
		use: "Trần hiên, trần loggia, vách tivi, cánh cổng trong",
		swatch: "bg-mat-teak",
		note: "Gỗ ấm làm lớp trong: trần hiên T1 + loggia có đèn lon, tấm nan phía sau nan sắt cổng."
	},
	{
		name: "Than chì",
		use: "Khung nhôm, nan cổng, lan can nan, giàn pergola",
		swatch: "bg-mat-charcoal",
		note: "Sơn tĩnh điện matt. Nan đứng đen tạo nhịp đứng cho mặt 5 m: cổng, lan can loggia, lan can tum, lam pergola."
	},
	{
		name: "Đá be",
		use: "Dải ốp trên kính T1, bồn cây, trụ pergola",
		swatch: "bg-mat-beige",
		note: "Dải đá be trên kính khách, bồn cây loggia / sân thượng và trụ cao đỡ pergola cùng một tông."
	},
	{
		name: "Kính low-E",
		use: "Khách, loggia, tum, mái thang",
		swatch: "bg-mat-glass",
		note: "2 lớp, khung nhôm cầu cách nhiệt. Mái kính trên đầu thang: kính dán 8 + 8 mm + khe gió. Lan can kính 10 mm dọc lỗ sàn thang."
	},
	{
		name: "Đá marble trắng · gỗ xương cá",
		use: "Khách, bếp, sảnh, bậc thang · phòng ngủ",
		swatch: "bg-mat-marble",
		note: "Đá trắng vân xám khổ lớn cho vùng chung, bậc đá mỏng hắt LED; sàn sồi xương cá cho phòng ngủ."
	}
];
var FENG_SHUI = [
	"Cầu thang thẳng ép sát tường trái, chân thang sau sofa — không đối cửa chính.",
	"Bếp nấu ở nhánh L tường sau, cuối dãy tủ gầm thang — không nhìn thẳng từ cổng.",
	"WC T1 là khối riêng cuối sân sau, ngoài khối nhà — mùi và ẩm không vào nhà, nhìn từ bếp không thấy cửa WC; WC T2 không nằm trên bếp nấu; không có WC nào đặt trên phòng thờ.",
	"Phòng thờ cao nhất, phía trước tum, ban thờ tựa tường hậu nhìn ra sân thượng / mặt tiền.",
	"Người lớn tuổi ở tầng đất, cuối nhà, yên tĩnh, kín sân sau, tránh phố; WC chỉ cách vài bước qua lối có mái kính.",
	"Góc cây xanh + Thần Tài trong phòng khách nhìn ra cửa chính.",
	"Hai khoảng xanh (trước–sau) ôm khối nhà, khí đi được, không tù."
];
var MJ_PROMPT = `Photorealistic architectural rendering of a contemporary 5-meter-wide Vietnamese townhouse on a 5x30 meter urban lot, two storeys plus a setback rooftop tum. Warm off-white walls; the second-floor loggia is wrapped by a thick curved white concrete frame projecting 0.6 m, with a black vertical-bar railing and a beige planter box spilling greenery; recessed ground-floor full-height glass living room under a beige stone band and a warm wood soffit with downlights. Rooftop terrace with a black-slat pergola carried on a tall beige pier, white parapet with black bars, planter box. Front garden 8 meters deep with one dark sedan on stone pavers, lawn and small trees, and a two-leaf gate of black vertical bars backed by slatted wood inside a white portal frame. Charcoal aluminum frames, no people, soft late-afternoon sunlight, long shadows, editorial architecture photography, 35mm --ar 16:9 --style raw --v 6.1`;
var DETAILS = [
	{
		id: "section",
		code: "CT-01",
		label: "Mặt cắt dọc",
		title: "Mặt cắt A–A qua dải thang và giếng trời",
		scale: "Tỷ lệ 1:150 · đơn vị mét",
		blurb: "Cắt dọc suốt 30 m lô đất qua dải thang sát tường trái (x 0.70). Thấy được cả ba lớp: sân trước 8 m, khối nhà 18 m ba tầng, sân sau 4 m — và thang chồng nhau trong cùng một dải: thang chữ U tầng 1 qua chiếu nghỉ trước y 4.00–5.00, vế dài y 5.00 lên 8.90, bản chiếu nghỉ sau y 8.90–9.90; vế T2 thẳng từ y 6.00 lên 10.94, mái kính trùm lỗ sàn tum ngay trên đầu thang.",
		specs: [
			{
				k: "Cao độ tầng",
				v: "3.60 / 3.30 / 3.00 m"
			},
			{
				k: "Thông thủy sau dầm",
				v: "3.30 / 3.00 / 2.70 m"
			},
			{
				k: "Cốt nền tầng 1",
				v: "+0.45 m so với vỉa hè"
			},
			{
				k: "Tổng cao công trình",
				v: "11.20 m"
			},
			{
				k: "Giếng trời",
				v: "chính là dải thang 1.00 m: lỗ sàn T2 y 6.00–9.90 (+ ô 0.78 × 1.00 trên cạnh 3) · lỗ sàn tum + mái kính y 7.10–10.94"
			},
			{
				k: "Tum",
				v: "y 4.50–13.80 · sân thượng 4.50 m trước · sân phơi 4.20 m sau"
			}
		],
		notes: [
			"Cốt nền +0.45 m: ba bậc tam cấp 150 mm, chống ngập và tách khối nhà khỏi mặt đường.",
			"Dầm sàn 300 mm — chiều cao thông thủy hoàn thiện còn 3.30 m (T1), 3.00 m (T2), 2.70 m (tum).",
			"Mái kính + khe gió trùm lỗ sàn tum ngay trên đầu thang: sáng rơi dọc dải thang xuống tầng 1, khí nóng thoát ra ở điểm cao nhất.",
			"T1 thang chữ U ba cạnh, 24 bậc × 150 qua hai chiếu nghỉ; T2 → tum một vế thẳng. Gầm vế dài T1 là một khối tủ đặc, mặt tủ thẳng mép thang, đỉnh tủ chạy theo dốc bản thang: kệ rượu, tủ thấp có tủ kính khung đen phía trên, tủ cao, tủ lạnh, tháp lò nướng; sau đó là bếp chữ L tường y 13.40 và đảo bếp.",
			"Tum lùi 4.50 m trước cho sân thượng có giàn pergola; phòng thờ ở phía trước tum, sảnh tum nơi thang đổ lên, phía sau là sân phơi 4.20 m trên phòng ngủ 04."
		]
	},
	{
		id: "elevation",
		code: "CT-02",
		label: "Mặt đứng",
		title: "Mặt đứng mặt tiền — 5.00 × 11.20 m",
		scale: "Tỷ lệ 1:100 · đơn vị mét",
		blurb: "Mặt tiền 5 m đọc bằng ba lớp: kính tầng 1 lùi sâu dưới dải đá be và trần gỗ, khung bê tông trắng bo cong ôm loggia tầng 2, trên cùng là giàn pergola lam đen tựa trụ be cao. Nhịp đứng đến từ nan sắt đen của cổng và lan can.",
		specs: [
			{
				k: "Bề rộng mặt tiền",
				v: "5.00 m (tim trục)"
			},
			{
				k: "Kính phòng khách",
				v: "4.20 × 2.70 m, lùi 0.60 m · dải đá be 0.60 m phía trên"
			},
			{
				k: "Khung loggia",
				v: "bê tông trắng bo cong, nhô 0.60 m · ô mở 4.10 × 2.90 m"
			},
			{
				k: "Lan can loggia",
				v: "nan sắt đen 20 mm @ 100, cao 1.05 m + bồn cây be"
			},
			{
				k: "Sân thượng tum",
				v: "tường trắng 0.45 m + nan đen, tổng cao 1.10 m"
			},
			{
				k: "Pergola",
				v: "lam thép đen 50 @ 220 mm, trụ be 0.25 m cao 2.60 m"
			},
			{
				k: "Cổng",
				v: "2 cánh 2.34 × 2.05 m: nan đen ngoài + gỗ nan trong, khung cổng trắng"
			},
			{
				k: "Bệ granite",
				v: "cao 0.45 m, dày 30 mm"
			}
		],
		notes: [
			"Khung trắng nhô 0.60 m khỏi mặt kính master — mái hiên tự nhiên cho loggia, che mưa tạt và nắng đứng bóng; góc trên phải và góc dưới trái ô mở bo cong R 0.75 m.",
			"Kính tầng 1 lùi 0.60 m dưới trần gỗ nan có đèn lon: chiều tối mặt tiền sáng ấm từ dưới lên.",
			"Tum chỉ lộ lan can trắng, nan đen và giàn pergola — người đứng ở vỉa hè gần như không thấy khối tum.",
			"Không đắp phào chỉ, không lam gỗ. Hiệu ứng mặt tiền đến từ bóng đổ của khung bo cong và độ sâu 0.60 m của hốc kính."
		]
	},
	{
		id: "stair",
		code: "CT-03",
		label: "Cầu thang",
		title: "Chi tiết cầu thang — chữ U ba cạnh 24 bậc, hai chiếu nghỉ",
		scale: "Tỷ lệ 1:50 · đơn vị milimét",
		blurb: "Cao độ tầng 3.60 m chia đúng 24 cổ bậc × 150 mm = 4 + 16 + 4: cạnh 1 — từ bục gỗ 3 bậc đá đặc chạy ngang nhà (x 1.98 → 1.20, y 4.00–5.00) lên chiếu nghỉ góc tường trước +0.60; cạnh 2 — vế dài 15 mặt bậc × 260 = 3.90 m dọc tường trái (x 0.20–1.20) từ y 5.00 tới chiếu nghỉ góc sau +3.00 (y 8.90–9.90); cạnh 3 — 3 bậc quay ra phía trong (x 1.20 → 1.98) lên sàn T2 tại x 1.98. Vế T2 → tum 20 bậc × 165 mm thẳng, chồng đúng phía trên cạnh 2, chân tại y 6.00, đầu tại y 10.94.",
		specs: [
			{
				k: "Số bậc / tầng",
				v: "T1: 24 × 150 mm = 3 600 (cạnh 1: 4 · cạnh 2: 16 · cạnh 3: 4) · T2: 20 × 165 mm = 3 300"
			},
			{
				k: "Mặt bậc",
				v: "260 mm · đá marble trắng mỏng, LED hắt dưới mũi"
			},
			{
				k: "Công thức bước chân",
				v: "T1: 2R + T = 560 mm · T2: 590 mm"
			},
			{
				k: "Độ dốc",
				v: "T1 30.0° · T2 32.4°"
			},
			{
				k: "Bản thang",
				v: "rộng 1.00 m · T1: cạnh 2 dài 3.90 m, cạnh 1 / cạnh 3 mỗi cạnh 3 × 260 = 0.78 m, 2 chiếu nghỉ 1.00 × 1.00 m (chiếu nghỉ sau bản 200) · T2: 4.94 m, chiếu chân thang 1.00 × 1.00 m"
			},
			{
				k: "Thông thủy đầu người",
				v: "≈ 2.25 m tại mép lỗ sàn T2 (y 6.00) · ≈ 2.10 m tại mép lỗ sàn tum (y 7.10)"
			},
			{
				k: "Lan can / tay vịn",
				v: "kính 10 mm cao 1.10 m · tay vịn đồng 900 mm"
			}
		],
		notes: [
			"Từ bục gỗ sau sofa bước lên 3 bậc ngang nhà tới chiếu nghỉ góc tường trước, quay 90° vào vế dài 16 cổ bậc dọc tường trái tới chiếu nghỉ góc sau, quay 90° lên 3 bậc + cổ cuối đổ lên đầu thang T2 (x 1.98, y 8.90–9.90).",
			"Sàn T2 khoét hai lỗ: x 0.20–1.20, y 6.00–9.90 trên vế dài + chiếu nghỉ sau, và x 1.20–1.98, y 8.90–9.90 trên cạnh 3; lan can kính gấp quanh cả hai.",
			"Vế T2 chân tại y 6.00 (chiếu y 5.00–6.00 trước cửa Master), 20 cổ bậc lên sàn tum tại y 10.94 — đổ vào sảnh tum.",
			"Bậc đá trắng mỏng có hai rãnh chống trượt ở mũi, LED hắt dưới mỗi bậc — đủ sáng ban đêm cho người lớn tuổi.",
			"Gầm vế dài T1 là một khối tủ đặc mặt x 1.20 thẳng mép thang, đỉnh cắt theo mặt dưới bản thang: kệ rượu y 5.55–6.45, tủ thấp 0.80 + tủ kính khung đen có đèn y 6.45–8.90 rồi tủ cao dưới chiếu nghỉ sau, tủ cao, tủ lạnh, tháp lò nướng tới y 11.65; tiếp theo là nhánh L dọc tường trái và nhánh ngang tường y 13.40 có chậu rửa + bếp từ, đảo bếp ở giữa."
		]
	},
	{
		id: "void",
		code: "CT-04",
		label: "Giếng trời",
		title: "Chi tiết mái kính trên dải thang và khe thoát khí",
		scale: "Tỷ lệ 1:25 · đơn vị milimét",
		blurb: "Giếng trời chỉ hoạt động khi có lối cho khí nóng đi ra. Mái kính đậy nước mưa, khe gió chu vi 150 mm đưa khí ra — mưa không vào, nóng không đọng.",
		specs: [
			{
				k: "Ô thông tầng",
				v: "lỗ sàn tum + mái kính 1.00 × 3.84 m (x 0.20–1.20, y 7.10–10.94) · lỗ sàn T2 1.00 × 3.90 m (y 6.00–9.90) + 0.78 × 1.00 m trên cạnh 3 (x 1.20–1.98, y 8.90–9.90)"
			},
			{
				k: "Mái kính",
				v: "cường lực dán 8 + 8 mm, dốc 5%"
			},
			{
				k: "Khe gió chu vi",
				v: "150 mm, lam chắn mưa 3 lớp"
			},
			{
				k: "Máng thu nước",
				v: "inox 200 × 100, ống thoát D90"
			},
			{
				k: "Khung đỡ",
				v: "hộp thép mạ 100 × 50 × 2.5 mm @ 900"
			},
			{
				k: "Lan can miệng thang",
				v: "kính 10 mm cao 1.10 m dọc mép lỗ sàn (x 1.20), gấp quanh lỗ cạnh 3 (y 8.90 / 9.90)"
			}
		],
		notes: [
			"Kính dán (laminated) chứ không phải cường lực đơn — vỡ thì mảnh dính màng PVB, không rơi xuống giếng.",
			"Khe gió đặt cao hơn mặt kính: khí nóng bốc lên thoát ngang, mưa tạt bị ba lớp lam chặn lại.",
			"Lưới inox 1.2 mm chống côn trùng đặt sau lam, tháo được để vệ sinh.",
			"Dải thang 1.00 m chính là giếng: sáng rơi dọc thang qua lỗ sàn tum và T2 xuống khối tủ gầm thang và đảo bếp tầng 1; lan can kính dọc hành lang giếng thang T2 không chắn sáng."
		]
	},
	{
		id: "wet",
		code: "CT-05",
		label: "Trục ướt",
		title: "WC tầng 2 trong nhà, WC tầng 1 khối riêng cuối sân — hộp gen và đường ống",
		scale: "Tỷ lệ 1:50 · đơn vị milimét",
		blurb: "Hai WC không chồng nhau: WC T1 là dải một tầng riêng ép sát tường trái, nối liền sau tường hậu phòng ngủ 01 (x 0.00–1.60, y 18.00–21.80, nền +0.45 trên bệ, mái bằng +3.23, cửa ở tường phải sát đầu nhà quay ra vườn, mái kính x 1.60–4.80 · y 18.00–19.40 che lối từ cửa sau hành lang), WC chung T2 ở giữa nhà bên phải (x 2.90–5.00, y 8.40–10.40, cửa ra đầu thang). WC T2 xả vào ống đứng trong hộp gen 300 × 300 ở góc sau phải sát tường phải (y 10.10–10.40), đi thẳng xuống, chạy ngang dưới nền tầng 1 dọc hành lang ra hố ga sân sau; WC T1 xả thẳng vào hố ga / bể tự hoại ngay cạnh dải WC. Không ống nào treo dưới trần bếp hay trần phòng ngủ; thông hơi đi âm tường phải sảnh tum, không qua phòng thờ.",
		specs: [
			{
				k: "Vị trí",
				v: "WC T1: dải riêng sát tường trái x 0.00–1.60 · y 18.00–21.80 (thông thủy 1.30 × 3.60 m) · WC T2: x 2.90–5.00 · y 8.40–10.40 (2.00 × 1.90 m)"
			},
			{
				k: "Hộp gen",
				v: "300 × 300 mm, góc sau phải WC T2 (x 4.50–4.80, y 10.10–10.40), ốp góc tường phải bếp T1 xuống nền"
			},
			{
				k: "Ống thoát xí",
				v: "D110 PVC · WC T2: nhánh ngang dưới nền T1 dọc hành lang, dốc 2% về hố ga sân sau · WC T1: ống ngắn thẳng vào hố ga / bể tự hoại"
			},
			{
				k: "Ống thoát sàn",
				v: "D90 · lavabo D60"
			},
			{
				k: "Ống thông hơi",
				v: "D60 âm tường phải sảnh tum, lên quá mái 700 mm"
			},
			{
				k: "Hạ cốt sàn WC",
				v: "50 mm, dốc 1.5% về phễu"
			},
			{
				k: "Chống thấm",
				v: "2 lớp gốc xi măng, lên chân tường 300 mm"
			}
		],
		notes: [
			"WC chung tầng 2 (lavabo, sen, máy giặt-sấy) không nằm trên WC tầng 1: nhánh ngang nằm trong lớp hạ cốt sàn, ống đứng xuống hộp gen ốp góc tường phải bếp tầng 1, có cửa thăm.",
			"WC T1 là dải riêng sát tường trái sân sau, cửa quay ra vườn dưới mái kính lối đi: xả thẳng vào hố ga / bể tự hoại sân sau — đường ống ngắn nhất, không ống nào chạy dưới phòng ngủ, mùi và ẩm ở ngoài khối nhà.",
			"Ống thông hơi bắt buộc — thiếu nó thì xả nước tầng 2 sẽ hút cạn bẫy nước tầng 1 và bốc mùi.",
			"Hộp gen bọc bông thủy tinh 25 mm chống ồn nước chảy, có cửa thăm 300 × 400 tại mỗi tầng."
		]
	}
];
var WALLS = {
	t1: [
		[
			"h",
			13.4,
			.2,
			3.8
		],
		[
			"v",
			3.8,
			13.4,
			17.8,
			[[
				13.6,
				14.4,
				"door"
			]]
		],
		[
			"v",
			.1,
			18,
			21.8,
			[],
			200,
			2.6
		],
		[
			"v",
			1.55,
			18,
			21.8,
			[[
				18.4,
				19.1,
				"door"
			]],
			100,
			2.6
		],
		[
			"h",
			21.7,
			0,
			1.6,
			[],
			200,
			2.6
		]
	],
	t2: [
		[
			"h",
			CORE.y0,
			.2,
			4.8,
			[[
				1.35,
				2.15,
				"door"
			]]
		],
		[
			"h",
			8.4,
			2.4,
			4.8
		],
		[
			"v",
			2.9,
			8.4,
			10.4,
			[[
				8.6,
				9.3,
				"door"
			]]
		],
		[
			"h",
			10.4,
			2.9,
			4.8
		],
		[
			"h",
			CORE.y1,
			.2,
			3.8,
			[[
				1.4,
				3.6,
				"glass"
			]]
		],
		[
			"v",
			3.8,
			CORE.y1,
			14.9,
			[[
				11.7,
				12.5,
				"door"
			]]
		],
		[
			"h",
			14.9,
			.2,
			4.8,
			[[
				3.9,
				4.7,
				"door"
			]]
		]
	],
	tum: [
		[
			"h",
			CORE.holes.tum[0],
			.2,
			1.2
		],
		[
			"v",
			1.2,
			CORE.holes.tum[0],
			8.2
		],
		[
			"h",
			8.2,
			1.2,
			4.8,
			[[
				3.9,
				4.7,
				"door"
			]]
		],
		[
			"h",
			13.8,
			.2,
			4.8,
			[[
				3.9,
				4.7,
				"door"
			]],
			200
		]
	]
};
var RAILS = {
	t1: [],
	t2: [
		[
			1.2,
			CORE.holes.t2[0],
			1.2,
			CORE.tailHole.y[0]
		],
		[
			1.2,
			CORE.tailHole.y[0],
			CORE.tailHole.x[1],
			CORE.tailHole.y[0]
		],
		[
			.2,
			CORE.tailHole.y[1],
			CORE.tailHole.x[1],
			CORE.tailHole.y[1]
		]
	],
	tum: [[
		1.2,
		8.2,
		1.2,
		CORE.holes.tum[1]
	]]
};
function bed(x, y, w, l, head) {
	if (head === "S") return [
		[
			"r",
			x,
			y - l,
			w,
			l,
			.5,
			"white",
			"bedS"
		],
		[
			"r",
			x - .08,
			y - .1,
			w + .16,
			.1,
			1.1,
			"leather"
		],
		[
			"r",
			x + .12,
			y - .4,
			w / 2 - .17,
			.25,
			.66,
			"fabric"
		],
		[
			"r",
			x + w / 2 + .05,
			y - .4,
			w / 2 - .17,
			.25,
			.66,
			"fabric"
		],
		[
			"r",
			x - .5,
			y - .4,
			.4,
			.4,
			.5,
			"black",
			"nstand"
		],
		[
			"r",
			x + w + .1,
			y - .4,
			.4,
			.4,
			.5,
			"black",
			"nstand"
		]
	];
	const x0 = head === "W" ? x : x - l;
	const px = head === "W" ? x + .15 : x - .4;
	const nx = head === "W" ? x : x - .4;
	const hx = head === "W" ? x : x - .1;
	return [
		[
			"r",
			x0,
			y,
			l,
			w,
			.5,
			"white",
			head === "W" ? "bedW" : "bedE"
		],
		[
			"r",
			hx,
			y - .08,
			.1,
			w + .16,
			1.1,
			"leather"
		],
		[
			"r",
			px,
			y + .12,
			.25,
			w / 2 - .17,
			.66,
			"fabric"
		],
		[
			"r",
			px,
			y + w / 2 + .05,
			.25,
			w / 2 - .17,
			.66,
			"fabric"
		],
		[
			"r",
			nx,
			y - .5,
			.4,
			.4,
			.5,
			"black",
			"nstand"
		],
		[
			"r",
			nx,
			y + w + .1,
			.4,
			.4,
			.5,
			"black",
			"nstand"
		]
	];
}
var FURN = {
	t1: [
		[
			"r",
			.25,
			1.3,
			.9,
			2.2,
			.7,
			"leather",
			"sofa"
		],
		[
			"r",
			1.15,
			2.7,
			.8,
			.8,
			.62,
			"leather",
			"chaise"
		],
		[
			"r",
			1.5,
			1.55,
			.8,
			.8,
			.38,
			"marble",
			"ctable"
		],
		[
			"r",
			4.4,
			1.3,
			.4,
			3,
			.45,
			"oak"
		],
		[
			"c",
			.5,
			1,
			.2,
			.03,
			"black"
		],
		[
			"r",
			4.35,
			4.5,
			.4,
			.4,
			.6,
			"white"
		],
		[
			"c",
			4.35,
			5.5,
			.35,
			.12,
			"stone"
		],
		[
			"r",
			1.98,
			3.9,
			.5,
			1.15,
			.08,
			"oak"
		],
		[
			"r",
			.2,
			5.55,
			1,
			.9,
			3.3,
			"oak"
		],
		[
			"r",
			.2,
			6.45,
			1,
			3,
			.8,
			"cabinet"
		],
		[
			"r",
			.2,
			9.45,
			1,
			.6,
			3.3,
			"cabinet"
		],
		[
			"r",
			.3,
			10.05,
			.9,
			.9,
			1.85,
			"black",
			"fridge"
		],
		[
			"r",
			.2,
			10.95,
			1,
			.7,
			3.3,
			"cabinet",
			"otower"
		],
		[
			"r",
			.2,
			11.65,
			.65,
			1.1,
			.9,
			"cabinet"
		],
		[
			"r",
			.2,
			12.75,
			3.6,
			.6,
			.9,
			"cabinet"
		],
		[
			"r",
			3.2,
			11.75,
			.6,
			1,
			.9,
			"cabinet"
		],
		[
			"r",
			1.25,
			12.85,
			.75,
			.42,
			.91,
			"stone"
		],
		[
			"r",
			2.75,
			12.82,
			.75,
			.48,
			.935,
			"black"
		],
		[
			"r",
			2.1,
			10,
			1.1,
			1.3,
			.85,
			"teak"
		],
		[
			"c",
			2.33,
			9.48,
			.18,
			.68,
			"black"
		],
		[
			"c",
			2.97,
			9.48,
			.18,
			.68,
			"black"
		],
		[
			"r",
			3,
			6.2,
			.9,
			2,
			.75,
			"marble",
			"dtable"
		],
		[
			"c",
			2.62,
			6.6,
			.2,
			.8,
			"leather"
		],
		[
			"c",
			2.62,
			7.2,
			.2,
			.8,
			"leather"
		],
		[
			"c",
			2.62,
			7.8,
			.2,
			.8,
			"leather"
		],
		[
			"c",
			4.28,
			6.6,
			.2,
			.8,
			"leather"
		],
		[
			"c",
			4.28,
			7.2,
			.2,
			.8,
			"leather"
		],
		[
			"c",
			4.28,
			7.8,
			.2,
			.8,
			"leather"
		],
		[
			"r",
			.25,
			13.5,
			2.8,
			.6,
			2.2,
			"oak"
		],
		...bed(.75, 17.8, 1.6, 2, "S"),
		[
			"r",
			3.2,
			14.6,
			.55,
			1.1,
			.75,
			"oak"
		],
		[
			"c",
			2.85,
			15.15,
			.22,
			.8,
			"white"
		],
		[
			"r",
			.2,
			18.3,
			.45,
			.7,
			.85,
			"white"
		],
		[
			"r",
			.2,
			19.75,
			.2,
			.45,
			.8,
			"white"
		],
		[
			"c",
			.62,
			19.97,
			.18,
			.4,
			"white"
		],
		[
			"r",
			.2,
			20.6,
			1.3,
			1,
			.05,
			"stone"
		]
	],
	t2: [
		...bed(.2, 2.2, 1.8, 2, "W"),
		[
			"r",
			4.15,
			1.5,
			.6,
			2.4,
			2.2,
			"oak"
		],
		[
			"r",
			2.55,
			5.1,
			1.6,
			.45,
			.45,
			"white"
		],
		[
			"r",
			2.6,
			7.85,
			1.1,
			.5,
			.75,
			"oak"
		],
		[
			"c",
			3.15,
			7.5,
			.22,
			.8,
			"white"
		],
		[
			"r",
			4.45,
			5.6,
			.35,
			1.8,
			2.1,
			"oak"
		],
		[
			"r",
			4.55,
			8.5,
			.2,
			.45,
			.8,
			"white"
		],
		[
			"c",
			4.32,
			8.72,
			.18,
			.4,
			"white"
		],
		[
			"r",
			3.2,
			8.45,
			.7,
			.42,
			.85,
			"white"
		],
		[
			"r",
			3.85,
			9.45,
			.9,
			.9,
			.05,
			"stone"
		],
		[
			"r",
			3,
			9.75,
			.6,
			.6,
			1.7,
			"white"
		],
		...bed(.2, 12.4, 1.6, 2, "W"),
		[
			"r",
			2.4,
			14.25,
			1.35,
			.6,
			2.2,
			"oak"
		],
		...bed(.2, 15.6, 1.6, 2, "W"),
		[
			"r",
			4.15,
			15.6,
			.6,
			2,
			2.2,
			"oak"
		]
	],
	tum: [
		[
			"c",
			4.4,
			.7,
			.35,
			.6,
			"stone"
		],
		[
			"r",
			.3,
			1.6,
			.45,
			2,
			.4,
			"teak"
		],
		[
			"r",
			1.8,
			2,
			1,
			1,
			.4,
			"teak"
		],
		[
			"r",
			1.9,
			7.55,
			2,
			.6,
			1.1,
			"teak"
		],
		[
			"r",
			2.1,
			6.95,
			1.6,
			.35,
			.75,
			"teak"
		],
		[
			"r",
			2.4,
			11.2,
			1.2,
			.8,
			.35,
			"teak"
		],
		[
			"r",
			1.4,
			13.35,
			2.2,
			.4,
			1.8,
			"oak"
		],
		[
			"r",
			.8,
			16.5,
			3.4,
			.05,
			1.6,
			"dark"
		],
		[
			"r",
			.8,
			16.9,
			3.4,
			.05,
			1.6,
			"dark"
		],
		[
			"r",
			.8,
			17.3,
			3.4,
			.05,
			1.6,
			"dark"
		],
		[
			"r",
			.4,
			14.2,
			.9,
			.35,
			.7,
			"white"
		],
		[
			"r",
			1.5,
			14.2,
			.9,
			.35,
			.7,
			"white"
		]
	]
};
//#endregion
export { FURN as a, MATERIALS as c, SITE_NOTES as d, WALLS as f, stairSoffit as g, riseOf as h, FLOORS as i, MJ_PROMPT as l, house_data_B6isfp8C_exports as m, DETAILS as n, HOUSE as o, flightTop as p, FENG_SHUI as r, LIGHT_POINTS as s, CORE as t, RAILS as u };
