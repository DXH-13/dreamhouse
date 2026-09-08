import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Copy, i as Pause, n as RotateCcw, o as Check, r as Play } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C5xRomtn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
var FLOORS = [
	{
		id: "t1",
		label: "Tầng 1",
		title: "Mặt đất — đón khách, ở và chăm sóc người lớn tuổi",
		blurb: "Mặt bằng mở trước — riêng tư sau. Cầu thang và giếng trời cắt giữa nhà, WC chung kề phòng ngủ ông bà.",
		height: "Cao độ tầng 3.60 m · thông thủy 3.30 m",
		rooms: [
			{
				id: "t1-living",
				name: "Phòng khách",
				subtitle: "Không gian đón — mở ra sân trước",
				x: 0,
				y: 0,
				w: 5,
				h: 5.4,
				kind: "living",
				areaGross: 27,
				areaNet: 23.9,
				dims: "5.00 × 5.40 m (thông thủy 4.60 × 5.20 m)",
				light: "Kính lớn mặt tiền + đối lưu xuyên suốt về giếng trời",
				notes: [
					"Cửa kính trượt 4.20 m, lùi vào 0.60 m tạo mái hiên.",
					"Sofa chữ L tựa tường biên; tivi không chắn trục sáng.",
					"Cửa chính lệch phải, không đối cầu thang — tụ khí tốt."
				]
			},
			{
				id: "t1-kitchen",
				name: "Bếp + Ăn",
				subtitle: "Bếp chữ I — bàn ăn 6 ghế",
				x: 0,
				y: 5.4,
				w: 5,
				h: 4.2,
				kind: "kitchen",
				areaGross: 21,
				areaNet: 18.4,
				dims: "5.00 × 4.20 m (thông thủy 4.60 × 4.00 m)",
				light: "Mở thông phòng khách; cửa sổ cao / kính nhìn giếng trời giữa",
				notes: [
					"Bếp dọc tường trái 3.80 m: bếp — chậu — tủ lạnh (tam giác làm việc).",
					"Bàn ăn 1.60 × 0.90 m bên phải, 6 ghế.",
					"Bếp không đối cửa chính; hút mùi ống kỹ thuật lên tum."
				]
			},
			{
				id: "t1-stair",
				name: "Cầu thang",
				subtitle: "2 vế, bản 1.05 m",
				x: 0,
				y: 9.6,
				w: 1.2,
				h: 3.6,
				kind: "stair",
				areaGross: 4.3,
				areaNet: 3.6,
				dims: "1.10 × 3.60 m · 22 bậc × 164 mm",
				light: "Giếng trời kề bên, lan can kính",
				notes: [
					"U-stair 2 vế + chiếu nghỉ, đặt tường trái.",
					"Không đối cửa chính (cách 9.6 m qua khách và bếp).",
					"Gầm thang: kho kỹ thuật điện — nước — máy lọc."
				]
			},
			{
				id: "t1-void",
				name: "Giếng trời giữa",
				subtitle: "Lõi sáng — phổi của nhà",
				x: 1.2,
				y: 9.9,
				w: 1.55,
				h: 2.9,
				kind: "void",
				areaGross: 4.5,
				areaNet: 4.2,
				dims: "1.50 × 2.80 m · thông T1 → tum",
				light: "Ánh sáng đỉnh + hiệu ứng ống khói (stack effect)",
				notes: [
					"Mái kính cường lực + khe gió chu vi tại tum.",
					"Cây trong giếng, sàn T1 lát đá có thoát nước.",
					"Cấp sáng cho bếp, WC, phòng ngủ giữa tầng 2."
				]
			},
			{
				id: "t1-wc",
				name: "WC chung",
				subtitle: "Hai cửa — hành lang và phòng ông bà",
				x: 3.15,
				y: 10.3,
				w: 1.85,
				h: 2.5,
				kind: "wc",
				areaGross: 4.6,
				areaNet: 3.9,
				dims: "1.80 × 2.40 m",
				light: "Cửa sổ cao ra giếng trời; quạt hút lên mái",
				notes: [
					"Lavabo + bồn cầu + sen. Cửa phụ vào phòng ngủ 01.",
					"Trục ướt thẳng đứng với WC tầng 2 — không đè lên bếp.",
					"Người lớn tuổi đi tối đa 4 m từ giường."
				]
			},
			{
				id: "t1-bed",
				name: "Phòng ngủ 01",
				subtitle: "Người lớn tuổi — cuối nhà, yên tĩnh",
				x: 0,
				y: 13.2,
				w: 5,
				h: 4.8,
				kind: "bed",
				areaGross: 24,
				areaNet: 20.7,
				dims: "5.00 × 4.80 m (thông thủy 4.60 × 4.50 m)",
				light: "Cửa sổ lớn 3.20 m ra sân sau 4 m",
				notes: [
					"Giường 1.60 m kê tường biên, đầu giường không chĩa cửa.",
					"Tủ áo 0.60 m, ghế ngồi cửa sổ nhìn tiểu cảnh.",
					"Sân sau cách âm phố; gần WC; không phải lên tầng."
				]
			}
		]
	},
	{
		id: "t2",
		label: "Tầng 2",
		title: "Ba phòng ngủ — một WC rộng, lấy sáng từ hai giếng",
		blurb: "Master nhìn mặt tiền, phòng giữa vay sáng từ giếng trời, phòng cuối nhìn sân sau. WC chung 6 m² trên cùng trục ướt.",
		height: "Cao độ tầng 3.30 m · thông thủy 3.00 m",
		rooms: [
			{
				id: "t2-loggia",
				name: "Loggia mặt tiền",
				subtitle: "Bộ lọc nắng — khoảng thở master",
				x: 0,
				y: 0,
				w: 5,
				h: 1.1,
				kind: "outdoor",
				areaGross: 5.5,
				areaNet: 5.1,
				dims: "5.00 × 1.10 m",
				light: "Trực tiếp mặt tiền, điều tiết bằng lam gỗ teak",
				notes: ["Lùi khối tầng 2 tạo bóng đổ cho kính tầng 1.", "Lan can kính 1.10 m + lam đứng 40×80 mm, khoảng 80 mm."]
			},
			{
				id: "t2-master",
				name: "Phòng ngủ 02",
				subtitle: "Master — phụ huynh",
				x: 0,
				y: 1.1,
				w: 5,
				h: 4.3,
				kind: "bed",
				areaGross: 21.5,
				areaNet: 19.3,
				dims: "5.00 × 4.30 m (thông thủy 4.60 × 4.10 m)",
				light: "Loggia + lam chắn nắng mặt tiền",
				notes: ["Giường 1.80 m, tủ sliding 2.40 m tường biên.", "Cửa kính 3 cánh ra loggia, rèm voan + rèm blackout."]
			},
			{
				id: "t2-mid",
				name: "Phòng ngủ 03",
				subtitle: "Phòng giữa — vay sáng giếng trời",
				x: 0,
				y: 5.4,
				w: 5,
				h: 4.2,
				kind: "bed",
				areaGross: 21,
				areaNet: 18.4,
				dims: "5.00 × 4.20 m (thông thủy 4.60 × 4.00 m)",
				light: "Tường kính nhìn giếng trời giữa + cửa sổ cao",
				notes: [
					"Đây là phòng khó sáng nhất nhà ống — giải bằng kính lớn vào void.",
					"Tường sơn trắng, sàn sồi sáng, rèm voan. Có thể làm phòng con.",
					"Cửa ra hành lang lõi thang, không đi xuyên phòng khác."
				]
			},
			{
				id: "t2-stair",
				name: "Cầu thang",
				subtitle: "Tiếp tục 2 vế lên tum",
				x: 0,
				y: 9.6,
				w: 1.2,
				h: 3.6,
				kind: "stair",
				areaGross: 4.3,
				areaNet: 3.6,
				dims: "1.10 × 3.60 m",
				light: "Giếng trời kề bên",
				notes: ["Cùng vị trí tầng 1 — lõi giao thông ổn định."]
			},
			{
				id: "t2-void",
				name: "Giếng trời giữa",
				subtitle: "Thông tầng",
				x: 1.2,
				y: 9.9,
				w: 1.4,
				h: 2.9,
				kind: "void",
				areaGross: 4.1,
				areaNet: 3.8,
				dims: "1.40 × 2.80 m",
				light: "Ánh sáng đỉnh",
				notes: ["Thu hẹp 10 cm so với T1 để nới WC tầng 2.", "Lan can kính 1.10 m, nhìn xuyên xuống cây giếng."]
			},
			{
				id: "t2-wc",
				name: "WC chung rộng",
				subtitle: "Lavabo đôi — sen cabin — giặt sấy",
				x: 2.85,
				y: 10.05,
				w: 2.15,
				h: 2.85,
				kind: "wc",
				areaGross: 6.1,
				areaNet: 5.9,
				dims: "2.10 × 2.80 m",
				light: "Cửa sổ cao ra giếng trời",
				notes: [
					"Hai lavabo, bồn cầu, cabin sen 900 mm, máy giặt-sấy 60 cm.",
					"Đúng trục ướt T1 — ống đứng gọn, không đè bếp / phòng thờ.",
					"Phục vụ cả 3 phòng ngủ tầng 2."
				]
			},
			{
				id: "t2-rear",
				name: "Phòng ngủ 04",
				subtitle: "Cuối nhà — nhìn sân sau",
				x: 0,
				y: 13.2,
				w: 5,
				h: 4.8,
				kind: "bed",
				areaGross: 24,
				areaNet: 20.7,
				dims: "5.00 × 4.80 m (thông thủy 4.60 × 4.50 m)",
				light: "Cửa sổ lớn ra giếng trời sân sau",
				notes: [
					"Yên tĩnh nhất tầng 2, phù hợp con nhỏ hoặc khách.",
					"Có thể kê 2 giường 1.20 m hoặc 1 giường 1.60 m.",
					"Cửa sổ trên cao lấy gió đối lưu với loggia mặt tiền."
				]
			}
		]
	},
	{
		id: "tum",
		label: "Tầng tum",
		title: "Phòng thờ hướng mặt tiền — sân thượng trước, sân phơi sau",
		blurb: "Tum không phủ hết 18 m. Lùi 4.50 m trước để lấy khoảng thoáng cho ban thờ; lùi sau làm sân phơi và cụm máy.",
		height: "Cao độ tầng 3.00 m · thông thủy 2.70 m",
		rooms: [
			{
				id: "tum-terrace",
				name: "Sân thượng trước",
				subtitle: "Khoảng thoáng — ban thờ nhìn ra đây",
				x: 0,
				y: 0,
				w: 5,
				h: 4.5,
				kind: "outdoor",
				areaGross: 22.5,
				areaNet: 22.5,
				dims: "5.00 × 4.50 m",
				light: "Trời mở, nhìn phố",
				notes: [
					"Sàn gỗ teak ngoài trời trên lớp chống thấm XPS.",
					"Lan can kính 1.10 m, chậu cây lớn, ghế thấp.",
					"Ban thờ trong nhà nhìn xuyên kính ra khoảng này — không đụng tường."
				]
			},
			{
				id: "tum-worship",
				name: "Phòng thờ",
				subtitle: "Hướng ra mặt tiền",
				x: 0,
				y: 4.5,
				w: 5,
				h: 4.7,
				kind: "worship",
				areaGross: 23.5,
				areaNet: 20.7,
				dims: "5.00 × 4.70 m (thông thủy 4.60 × 4.50 m)",
				light: "Kính 3 cánh ra sân thượng, nắng dịu buổi sáng",
				notes: [
					"Ban thờ tựa tường hậu phòng, mặt nhìn ra sân thượng / phố.",
					"Trần gỗ thanh, sàn sồi, không đặt WC trên hoặc kề sát.",
					"Cửa phụ từ lõi thang, chậu rửa tay nhỏ ở hành lang (không trong phòng)."
				]
			},
			{
				id: "tum-core",
				name: "Lõi thang + kỹ thuật",
				subtitle: "Kết giếng trời — máy — kho",
				x: 0,
				y: 9.2,
				w: 5,
				h: 4,
				kind: "service",
				areaGross: 20,
				areaNet: 16,
				dims: "5.00 × 4.00 m",
				light: "Giếng trời mở mái kính",
				notes: [
					"Mái kính + lam gió chu vi — mưa không vào nhà, khí nóng thoát.",
					"Kho đồ thờ, inverter, tủ điện mái.",
					"Không bố trí WC tại tum để giữ trục sạch cho phòng thờ."
				]
			},
			{
				id: "tum-dry",
				name: "Sân phơi sau",
				subtitle: "Giàn phơi + dàn nóng",
				x: 0,
				y: 13.2,
				w: 5,
				h: 4.8,
				kind: "outdoor",
				areaGross: 24,
				areaNet: 24,
				dims: "5.00 × 4.80 m",
				light: "Trời mở, khuất tầm nhìn phố",
				notes: ["Giàn phơi xếp, pergola lam gỗ, dàn nóng VRV/máy lạnh.", "Không nhìn thấy từ mặt tiền; thoát nước riêng về sân sau."]
			}
		]
	}
];
var SITE_NOTES = [
	{
		title: "Sân trước 8.00 m",
		body: "0–0.50 m cổng nan ngang (thoáng 70%). 0.50–5.50 m chỗ đỗ 1 sedan dọc theo chiều sâu, lối đi 1.20 m bên phải. 5.50–8.00 m tiểu cảnh, bậc tam cấp, cây thấp — khoảng đệm 2.50 m trước kính khách."
	},
	{
		title: "Khối nhà 5.00 × 18.00 m",
		body: "90 m²/sàn. Tường biên 200 mm, thông thủy rộng 4.60 m. Lõi thang + giếng trời tại tim 9.60–13.20 m chia nhà thành vùng dương (trước) và vùng âm (sau)."
	},
	{
		title: "Sân sau 4.00 m",
		body: "Giếng trời thứ hai: cây tán nhỏ, sỏi, dương xỉ, lối đá. Cấp sáng và gió cho phòng ngủ cuối T1–T2, phơi phụ, giếng thấm nước mưa."
	}
];
var LIGHT_POINTS = [
	{
		title: "Hai giếng, một trục gió",
		body: "Gió vào từ cổng thoáng và kính khách, đi xuyên bếp mở, gặp giếng giữa rồi ra sân sau. Khí nóng bốc lên giếng (stack effect) thoát ở mái tum."
	},
	{
		title: "Chia sáng theo chiều sâu 18 m",
		body: "0–5.4 m: sáng trực tiếp mặt tiền. 5.4–9.6 m: sáng vay từ khách + void. 9.6–13.2 m: sáng đỉnh giếng. 13.2–18 m: sáng sân sau 4 m."
	},
	{
		title: "Phòng ngủ giữa",
		body: "Điểm yếu kinh điển nhà ống. Xử lý bằng tường kính vào giếng 1.50 m, sơn trắng, sàn sồi sáng, cửa sổ trên cao — không để phòng này thành ‘hộp tối’."
	},
	{
		title: "Vật liệu dẫn sáng",
		body: "Tường trắng ấm, lan can kính, gạch lớn mạch mảnh, kính low-e 2 lớp. Tránh gỗ tối và hành lang đặc."
	}
];
var MATERIALS = [
	{
		name: "Vôi bả ấm",
		use: "Toàn bộ khối đặc mặt tiền",
		swatch: "bg-mat-plaster",
		note: "Trắng ngà, không trắng lạnh. Bóng đổ của lam gỗ hiện rõ."
	},
	{
		name: "Teak / gỗ tếch",
		use: "Lam đứng tầng 2, loggia, sàn tum",
		swatch: "bg-mat-teak",
		note: "40 × 80 mm, khoảng 80 mm. Bộ lọc nắng, nhịp đứng cho mặt 5 m."
	},
	{
		name: "Than chì",
		use: "Khung nhôm, cổng, lan can sắt",
		swatch: "bg-mat-charcoal",
		note: "Sơn tĩnh điện matt. Cổng nan ngang, độ thoáng ~70%."
	},
	{
		name: "Đá granite xám",
		use: "Bệ plinth, bậc, sân đỗ xe",
		swatch: "bg-mat-stone",
		note: "30 mm, chống trượt. Tách khối nhà khỏi mặt đất."
	},
	{
		name: "Kính low-E",
		use: "Khách, loggia, phòng thờ, giếng",
		swatch: "bg-mat-glass",
		note: "2 lớp, khung nhôm cầu cách nhiệt. Mái giếng: cường lực + khe gió."
	},
	{
		name: "Sồi sáng",
		use: "Sàn trong nhà, cầu thang",
		swatch: "bg-mat-oak",
		note: "Engineered 14/3 mm. Phản xạ sáng xuống cuối nhà."
	}
];
var FENG_SHUI = [
	"Cầu thang lùi 9.6 m, không đối cửa chính.",
	"Bếp bên, sau phòng khách — không nhìn thẳng từ cổng.",
	"Trục ướt T1–T2 thẳng đứng, không đè bếp, không kề phòng thờ.",
	"Phòng thờ cao nhất, sạch, ban thờ nhìn ra khoảng thoáng mặt tiền.",
	"Người lớn tuổi ở tầng đất, cuối nhà, gần WC, tránh phố.",
	"Sân trước trồng cây thấp tán — chặn sát khí đường, giữ tầm nhìn.",
	"Hai khoảng nước/xanh (trước–sau) ôm khối nhà, khí đi được, không tù."
];
var MJ_PROMPT = `Photorealistic architectural rendering of a contemporary 5-meter-wide Vietnamese townhouse on a 5x30 meter urban lot, two storeys plus a setback rooftop tum. Cubic minimal volumes, warm off-white lime plaster, charcoal aluminum frames, vertical teak sun-shading fins across the second-floor window, recessed ground-floor full-height glass living room opening onto an 8-meter front garden with one dark sedan on stone pavers, tropical underplanting, and a slim horizontal-slat metal gate. Rooftop: timber deck facing the street and a quiet glass-walled ancestral room set back 4.5 meters. Granite plinth, no people, soft morning sunlight, long shadows, editorial architecture photography, 35mm --ar 16:9 --style raw --v 6.1`;
var DETAILS = [
	{
		id: "section",
		code: "CT-01",
		label: "Mặt cắt dọc",
		title: "Mặt cắt A–A qua giếng trời và lõi thang",
		scale: "Tỷ lệ 1:150 · đơn vị mét",
		blurb: "Cắt dọc suốt 30 m lô đất. Thấy được cả ba lớp: sân trước 8 m, khối nhà 18 m ba tầng, sân sau 4 m — và ống giếng trời xuyên từ sàn tầng 1 lên mái tum.",
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
				v: "1.50 × 2.80 m, thông 3 tầng"
			},
			{
				k: "Tum lùi",
				v: "4.50 m trước · 4.80 m sau"
			}
		],
		notes: [
			"Cốt nền +0.45 m: ba bậc tam cấp 150 mm, chống ngập và tách khối nhà khỏi mặt đường.",
			"Dầm sàn 300 mm — chiều cao thông thủy hoàn thiện còn 3.30 m (T1), 3.00 m (T2), 2.70 m (tum).",
			"Ống giếng trời liên tục ba tầng, đỉnh là mái kính + khe gió: khí nóng thoát ra ở điểm cao nhất.",
			"Tum lùi 4.50 m trước để sân thượng đón sáng cho phòng thờ và không đổ bóng lên kính tầng 2."
		]
	},
	{
		id: "elevation",
		code: "CT-02",
		label: "Mặt đứng",
		title: "Mặt đứng mặt tiền — 5.00 × 11.20 m",
		scale: "Tỷ lệ 1:100 · đơn vị mét",
		blurb: "Mặt tiền chỉ rộng 5 m nên nhịp phải là nhịp đứng: lam teak chia mặt kính tầng 2 thành 41 khe, bệ đá tách khối khỏi đất, tum lùi hẳn ra sau tầm nhìn.",
		specs: [
			{
				k: "Bề rộng mặt tiền",
				v: "5.00 m (tim trục)"
			},
			{
				k: "Kính phòng khách",
				v: "4.20 × 2.70 m, lùi 0.60 m"
			},
			{
				k: "Lam teak",
				v: "40 × 80 mm @ 120 mm (hở 80 mm)"
			},
			{
				k: "Lan can loggia",
				v: "kính 10 mm, cao 1.10 m"
			},
			{
				k: "Cổng nan ngang",
				v: "3.60 × 1.80 m, thoáng ~70%"
			},
			{
				k: "Bệ granite",
				v: "cao 0.45 m, dày 30 mm"
			}
		],
		notes: [
			"Khối tầng 2 nhô ra 0.60 m so với kính tầng 1 — mái hiên tự nhiên, che mưa tạt và nắng đứng bóng.",
			"41 thanh lam đứng suốt chiều cao loggia: buổi sáng đổ bóng sọc lên tường vôi bả, buổi chiều chắn nắng Tây.",
			"Tum chỉ nhìn thấy phần lan can — người đứng ở vỉa hè gần như không thấy khối tum.",
			"Không đắp phào chỉ. Toàn bộ hiệu ứng mặt tiền đến từ bóng đổ của lam và độ sâu 0.60 m của hốc kính."
		]
	},
	{
		id: "stair",
		code: "CT-03",
		label: "Cầu thang",
		title: "Chi tiết cầu thang — 22 bậc, hai vế, chiếu nghỉ giữa",
		scale: "Tỷ lệ 1:50 · đơn vị milimét",
		blurb: "Cao độ tầng 3.60 m chia đúng 22 bậc × 164 mm. Hai vế 11 bậc gập lại quanh chiếu nghỉ để rút chiều dài từ 5.70 m xuống còn 3.60 m chiều sâu lõi.",
		specs: [
			{
				k: "Số bậc / tầng",
				v: "22 bậc × 164 mm = 3 608 mm"
			},
			{
				k: "Mặt bậc",
				v: "260 mm + mũi bậc 25 mm"
			},
			{
				k: "Công thức bước chân",
				v: "2R + T = 588 mm"
			},
			{
				k: "Độ dốc",
				v: "32.2°"
			},
			{
				k: "Bản thang",
				v: "1.00 m · chiếu nghỉ 1.05 × 2.10 m"
			},
			{
				k: "Thông thủy đầu người",
				v: "≥ 2.10 m"
			},
			{
				k: "Lan can / tay vịn",
				v: "kính 10 mm cao 1.10 m · tay vịn 900 mm"
			}
		],
		notes: [
			"Vế 1 lên 11 bậc (1.804 m) — chiếu nghỉ — vế 2 lên 11 bậc, đổi hướng 180°.",
			"Mũi bậc gỗ sồi bo R8 + hai rãnh chống trượt; bậc hở không dùng vì nhà có người lớn tuổi.",
			"Gầm vế thứ nhất tại tầng 1 làm kho kỹ thuật: tủ điện, lọc nước, máy bơm.",
			"Triển khai kỹ thuật: hai vế 1.00 m + tường giữa cần lõi rộng ~2.10 m, trong khi mặt bằng ý tưởng đang ghi lõi 1.10 m. Khi lên hồ sơ xin phép phải chọn: nới lõi thang sang phần giếng trời, hoặc chuyển sang thang một vế thẳng dài 5.70 m."
		]
	},
	{
		id: "void",
		code: "CT-04",
		label: "Giếng trời",
		title: "Chi tiết mái kính giếng trời và khe thoát khí",
		scale: "Tỷ lệ 1:25 · đơn vị milimét",
		blurb: "Giếng trời chỉ hoạt động khi có lối cho khí nóng đi ra. Mái kính đậy nước mưa, khe gió chu vi 150 mm đưa khí ra — mưa không vào, nóng không đọng.",
		specs: [
			{
				k: "Ô thông tầng",
				v: "1.50 × 2.80 m (T2 thu còn 1.40 m)"
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
				k: "Lan can quanh giếng",
				v: "kính 10 mm cao 1.10 m"
			}
		],
		notes: [
			"Kính dán (laminated) chứ không phải cường lực đơn — vỡ thì mảnh dính màng PVB, không rơi xuống giếng.",
			"Khe gió đặt cao hơn mặt kính: khí nóng bốc lên thoát ngang, mưa tạt bị ba lớp lam chặn lại.",
			"Lưới inox 1.2 mm chống côn trùng đặt sau lam, tháo được để vệ sinh.",
			"Sàn đáy giếng ở tầng 1 lát đá, dốc 1% về ga thu — dội rửa và tưới cây thoải mái."
		]
	},
	{
		id: "wet",
		code: "CT-05",
		label: "Trục ướt",
		title: "Trục ướt WC tầng 1 – tầng 2 và hộp gen kỹ thuật",
		scale: "Tỷ lệ 1:50 · đơn vị milimét",
		blurb: "Hai WC chồng đúng trục nên chỉ cần một hộp gen. Đường ống ngắn, ít co, không chạy ngang trên trần bếp và không đi qua phòng thờ.",
		specs: [
			{
				k: "Hộp gen",
				v: "300 × 300 mm, kề tường lõi thang"
			},
			{
				k: "Ống thoát xí",
				v: "D110 PVC, dốc 2%"
			},
			{
				k: "Ống thoát sàn",
				v: "D90 · lavabo D60"
			},
			{
				k: "Ống thông hơi",
				v: "D60 lên quá mái tum 700 mm"
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
			"WC tầng 2 (2.10 × 2.80 m) nằm trọn trên WC tầng 1 (1.80 × 2.40 m) — mọi ống đứng gom về một hộp.",
			"Không có nhánh ống nào chạy ngang qua trần bếp hay trần phòng ngủ: rò rỉ chỉ ảnh hưởng đúng ô WC.",
			"Ống thông hơi bắt buộc — thiếu nó thì xả nước tầng 2 sẽ hút cạn bẫy nước tầng 1 và bốc mùi.",
			"Hộp gen bọc bông thủy tinh 25 mm chống ồn nước chảy, có cửa thăm 300 × 400 tại mỗi tầng."
		]
	}
];
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
				y: yz(1.8),
				width: "0.1",
				height: "1.8",
				fill: SOFT
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: .2,
				y: yz(2.1),
				s: .26,
				fill: MUTED,
				anchor: "start",
				children: "Cổng 1.80"
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
				d: `M7.55 ${Y0} L7.55 ${yz(.15)} L7.7 ${yz(.15)} L7.7 ${yz(.3)} L7.85 ${yz(.3)} L7.85 ${yz(.45)} L8 ${yz(.45)}`,
				fill: "none",
				stroke: INK,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: yz(.45),
				width: "18",
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: yz(4.05),
				width: "9.9",
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20.8",
				y: yz(4.05),
				width: "5.2",
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: yz(7.35),
				width: "9.9",
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20.8",
				y: yz(7.35),
				width: "5.2",
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12.5",
				y: yz(10.35),
				width: "5.4",
				height: "0.3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20.8",
				y: yz(10.35),
				width: "0.4",
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
				x: "8",
				y: yz(7.05),
				width: "0.2",
				height: "3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "21.05",
				y: yz(10.35),
				width: "0.15",
				height: "3",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "12.5",
				y: yz(10.35),
				width: "0.15",
				height: "3",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: yz(8.45),
				width: "0.15",
				height: "1.1",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25.85",
				y: yz(8.45),
				width: "0.15",
				height: "1.1",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8.55",
				y: yz(3.15),
				width: "0.12",
				height: "2.7",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "9.05",
				y: yz(6.75),
				width: "0.12",
				height: "2.7",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "8",
				y: yz(5.15),
				width: "0.12",
				height: "1.1",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25.88",
				y: yz(2.7),
				width: "0.12",
				height: "1.8",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "25.88",
				y: yz(6.3),
				width: "0.12",
				height: "1.8",
				...glass
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "17.9",
				y: yz(10.35),
				width: "2.9",
				height: 9.9,
				fill: "var(--color-plan-void)",
				opacity: "0.4"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "17.7",
				y: yz(10.8),
				width: "0.2",
				height: "0.45",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "20.8",
				y: yz(10.8),
				width: "0.2",
				height: "0.45",
				...cut
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M17.5 ${yz(11.15)} L21.2 ${yz(10.95)}`,
				stroke: GLASS,
				strokeWidth: "0.18",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M17.5 ${yz(11.15)} L21.2 ${yz(10.95)}`,
				stroke: INK,
				strokeWidth: "0.035"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: FAINT,
				strokeWidth: "0.06",
				strokeDasharray: "0.22 0.16",
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M17.75 ${yz(.45)} L20.35 ${yz(2.25)}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M20.95 ${yz(2.25)} L18.35 ${yz(4.05)}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M17.75 ${yz(4.05)} L20.35 ${yz(5.85)}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M20.95 ${yz(5.85)} L18.35 ${yz(7.35)}` })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 19.35,
				y: yz(3.05),
				s: .24,
				fill: FAINT,
				children: "thang (sau mặt cắt)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: SAGE,
				strokeWidth: "0.07",
				fill: "none",
				markerEnd: "url(#flow)",
				opacity: "0.9",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M9.4 ${yz(2.05)} L17.5 ${yz(2.05)}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M19.35 ${yz(1.2)} L19.35 ${yz(10.3)}` }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: `M25.6 ${yz(2.45)} L21.5 ${yz(2.45)}` })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 13.4,
				y: yz(2.25),
				s: .26,
				fill: SAGE,
				children: "gió xuyên phòng"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 19.6,
				y: yz(6.55),
				s: .26,
				fill: SAGE,
				anchor: "start",
				children: "khí nóng bốc lên"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M15.4 ${yz(12.5)} L18.5 ${yz(10.75)}`,
				stroke: OAK,
				strokeWidth: "0.06",
				strokeDasharray: "0.3 0.18",
				markerEnd: "url(#dm-arrow)",
				fill: "none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 15.2,
				y: yz(12.5),
				s: .26,
				fill: OAK,
				anchor: "end",
				children: "nắng đỉnh"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 11.2,
				y: yz(1.6),
				s: .32,
				children: "Phòng khách"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 15.5,
				y: yz(1.6),
				s: .32,
				children: "Bếp + Ăn"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 23.5,
				y: yz(1.6),
				s: .32,
				children: "Phòng ngủ 01"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 11.4,
				y: yz(5.2),
				s: .32,
				children: "Phòng ngủ 02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 15.5,
				y: yz(5.2),
				s: .32,
				children: "Phòng ngủ 03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 23.5,
				y: yz(5.2),
				s: .32,
				children: "Phòng ngủ 04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 8.62,
				y: yz(6.2),
				s: .24,
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
				x: 15.2,
				y: yz(8.5),
				s: .32,
				children: "Phòng thờ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 23.6,
				y: yz(8.3),
				s: .3,
				fill: MUTED,
				children: "Sân phơi"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 19.35,
				y: yz(9.1),
				s: .26,
				fill: SOFT,
				children: "Giếng trời"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 4,
				y: yz(2.7),
				s: .3,
				fill: MUTED,
				children: "Sân trước 8.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 28.2,
				y: yz(1),
				s: .3,
				fill: MUTED,
				children: "Sân sau 4.00"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: SAGE,
				opacity: "0.4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "28.2",
					cy: yz(1.5),
					r: "0.5"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "29.2",
					cy: yz(.75),
					r: "0.28"
				})]
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
				children: "cắt dọc qua giếng trời · nhìn về tường trái"
			})
		]
	});
}
var YE = 12.4;
var ye = (z) => YE - z;
var FINS = Array.from({ length: 41 }, (_, i) => .06 + i * .12);
function Elevation() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-2.1 0.35 14.7 13.9",
		className: "w-full",
		role: "img",
		"aria-label": "Mặt đứng mặt tiền và chi tiết cắt ngang lam gỗ",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-2.1",
				y: "0.35",
				width: "14.7",
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
				y: ye(10.35),
				width: "5",
				height: "3",
				fill: "var(--color-paper-2)",
				stroke: FAINT,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.4",
				y: ye(10.05),
				width: "4.2",
				height: "1.6",
				fill: GLASS,
				stroke: FAINT,
				strokeWidth: "0.03",
				opacity: "0.75"
			}),
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
				stroke: INK,
				strokeWidth: "0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(3.75),
				width: "0.4",
				height: "3.3",
				fill: PLASTER,
				stroke: INK,
				strokeWidth: "0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.6",
				y: ye(3.75),
				width: "0.4",
				height: "3.3",
				fill: PLASTER,
				stroke: INK,
				strokeWidth: "0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.4",
				y: ye(3.15),
				width: "4.2",
				height: "2.7",
				fill: GLASS,
				stroke: INK,
				strokeWidth: "0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.4",
				y: ye(3.15),
				width: "4.2",
				height: "0.4",
				fill: INK,
				opacity: "0.16"
			}),
			[
				1.45,
				2.5,
				3.55
			].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: x,
				y1: ye(3.15),
				x2: x,
				y2: ye(.45),
				stroke: INK,
				strokeWidth: "0.03"
			}, x)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.4",
				y: ye(3.75),
				width: "4.2",
				height: "0.6",
				fill: PLASTER,
				stroke: INK,
				strokeWidth: "0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(4.05),
				width: "5",
				height: "0.3",
				fill: PLASTER,
				stroke: INK,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(7.05),
				width: "5",
				height: "3",
				fill: GLASS,
				stroke: INK,
				strokeWidth: "0.04",
				opacity: "0.85"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(7.35),
				width: "5",
				height: "0.3",
				fill: PLASTER,
				stroke: INK,
				strokeWidth: "0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(5.15),
				width: "5",
				height: "1.1",
				fill: GLASS,
				stroke: INK,
				strokeWidth: "0.03",
				opacity: "0.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				fill: TEAK,
				children: FINS.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x,
					y: ye(7.25),
					width: "0.04",
					height: "3.1"
				}, x))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: ye(8.45),
				width: "5",
				height: "1.1",
				fill: GLASS,
				stroke: INK,
				strokeWidth: "0.03",
				opacity: "0.55"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: .2,
				y: ye(6),
				tx: -.6,
				ty: ye(6.6),
				label: "vôi bả ấm",
				s: .24,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.5,
				y: ye(6),
				tx: 5.4,
				ty: ye(6.5),
				label: "lam teak 40 × 80 @ 120",
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 3.4,
				y: ye(4.6),
				tx: 5.4,
				ty: ye(4.3),
				label: "lan can kính 1.10 m",
				s: .24
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.2,
				y: ye(9),
				tx: 5.4,
				ty: ye(9.2),
				label: "phòng thờ lùi 4.50 m",
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
					x: 7.9,
					y: 8.4,
					s: .28,
					fill: SAGE,
					anchor: "start",
					wide: true,
					children: "CHI TIẾT A"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 7.9,
					y: 8.82,
					s: .24,
					fill: MUTED,
					anchor: "start",
					children: "cắt ngang lam gỗ — nhìn từ trên xuống"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: 8,
					x2: 8.2,
					y: 9.92,
					label: "40",
					s: .22
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: 8.2,
					x2: 8.6,
					y: 9.92,
					label: "80",
					s: .22
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: 8,
					x2: 8.6,
					y: 9.45,
					label: "120",
					s: .22
				}),
				[
					0,
					1,
					2,
					3,
					4,
					5
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 8 + i * .6,
					y: 10.1,
					width: "0.2",
					height: "0.4",
					fill: TEAK,
					stroke: INK,
					strokeWidth: "0.03"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: 8.1 + i * .6,
					y1: 10.5,
					x2: 8.1 + i * .6,
					y2: 10.8,
					stroke: SOFT,
					strokeWidth: "0.045"
				})] }, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "7.9",
					y: "10.8",
					width: "3.6",
					height: "0.1",
					fill: "url(#hatch-fine)",
					stroke: INK,
					strokeWidth: "0.03"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "7.9",
					y: "10.94",
					width: "3.6",
					height: "0.16",
					fill: GLASS,
					stroke: INK,
					strokeWidth: "0.04"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 7.9,
					y: 11.55,
					s: .22,
					fill: SOFT,
					anchor: "start",
					children: "kính low-E 6 + 12 + 6, khung nhôm cầu cách nhiệt"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 7.9,
					y: 11.9,
					s: .22,
					fill: SOFT,
					anchor: "start",
					children: "bát thép mạ L50 @ 900 bắt vào đố nhôm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 7.9,
					y: 12.25,
					s: .22,
					fill: MUTED,
					anchor: "start",
					children: "41 thanh suốt bề rộng 5.00 m"
				})
			] })
		]
	});
}
var RISE = .164;
var TREAD = .26;
var YS = 4.35;
var ys = (z) => YS - z;
function flightPath() {
	let d = `M0 ${ys(0)}`;
	for (let i = 0; i < 11; i++) {
		d += ` L${i * TREAD} ${ys((i + 1) * RISE)}`;
		if (i < 10) d += ` L${(i + 1) * TREAD} ${ys((i + 1) * RISE)}`;
	}
	d += ` L3.6 ${ys(11 * RISE)} L3.6 ${ys(11 * RISE - .3)} L0 ${ys(-.145)} Z`;
	return d;
}
function StairDetail() {
	const stepLines = Array.from({ length: 10 }, (_, i) => i + 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-1.05 0.7 9.75 5.7",
		className: "w-full",
		role: "img",
		"aria-label": "Chi tiết cầu thang: mặt cắt vế thang và mặt bằng lõi thang",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-1.05",
				y: "0.7",
				width: "9.75",
				height: "5.7",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0 ${ys(0)} L2.6 ${ys(1.804)} L3.6 ${ys(1.804)} L3.6 ${ys(2.904)} L2.6 ${ys(2.904)} L0 ${ys(1.1)} Z`,
				fill: GLASS,
				opacity: "0.22"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.62",
				y: ys(0),
				width: "0.62",
				height: "0.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: flightPath(),
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.035"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0 ${ys(1.1)} L2.6 ${ys(2.904)} L3.6 ${ys(2.904)}`,
				fill: "none",
				stroke: SOFT,
				strokeWidth: "0.05",
				strokeLinecap: "round"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: `M0.4 ${ys(0)} a 0.55 0.55 0 0 1 0.47 0.3`,
				fill: "none",
				stroke: OAK,
				strokeWidth: "0.02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: .65,
				y: ys(-.14),
				s: .14,
				fill: OAK,
				anchor: "start",
				children: "32.2°"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 2.34,
				x2: 2.6,
				y: ys(1.95),
				label: "260",
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.6,
				y: ys(1.722),
				tx: 3.28,
				ty: ys(2.42),
				label: "cổ bậc 164",
				s: .14
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 0,
				x2: 2.6,
				y: 4.72,
				label: "2 600 = 10 × 260",
				s: .15
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 2.6,
				x2: 3.6,
				y: 4.72,
				label: "1 000",
				s: .15
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.78,
				y1: ys(0),
				y2: ys(1.804),
				label: "1 804 = 11 × 164",
				s: .15
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 1.7,
				y: ys(1.18),
				tx: .55,
				ty: ys(2.3),
				label: "tay vịn 900 · lan can kính 1 100",
				s: .14
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 1.6,
				y: ys(.86),
				tx: 2.62,
				ty: ys(.62),
				label: "bản BTCT dày 120",
				s: .14
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: .78,
				y: ys(.492),
				tx: 1.5,
				ty: 4.24,
				label: "mũi bậc sồi R8 + 2 rãnh nhám",
				s: .14
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 3.1,
				y: ys(1.95),
				s: .15,
				fill: SOFT,
				children: "chiếu nghỉ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -.95,
				y: 5.4,
				s: .17,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "(a) MẶT CẮT VẾ THANG"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -.95,
				y: 5.76,
				s: .15,
				fill: MUTED,
				anchor: "start",
				children: "11 bậc lên chiếu nghỉ · vế 2 gập lại 180°"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "5.2",
					y: "1.5",
					width: "2.1",
					height: "3.6",
					fill: "var(--color-plan-stair)",
					stroke: INK,
					strokeWidth: "0.045"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "6.2",
					y: "2.5",
					width: "0.1",
					height: "2.6",
					fill: "url(#hatch-cut)",
					stroke: INK,
					strokeWidth: "0.03"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "5.2",
					y1: "2.5",
					x2: "7.3",
					y2: "2.5",
					stroke: INK,
					strokeWidth: "0.035"
				}),
				stepLines.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "5.2",
					y1: 5.1 - i * TREAD,
					x2: "6.2",
					y2: 5.1 - i * TREAD,
					stroke: SOFT,
					strokeWidth: "0.025"
				}, `u${i}`)),
				stepLines.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "6.3",
					y1: 2.5 + i * TREAD,
					x2: "7.3",
					y2: 2.5 + i * TREAD,
					stroke: SOFT,
					strokeWidth: "0.025"
				}, `d${i}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M5.7 5.0 L5.7 2.0 L6.8 2.0 L6.8 4.9",
					fill: "none",
					stroke: SAGE,
					strokeWidth: "0.045",
					markerEnd: "url(#flow-s)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "5.7",
					cy: "5.0",
					r: "0.06",
					fill: SAGE
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 5.1,
					y: 4.72,
					s: .15,
					fill: SAGE,
					anchor: "end",
					children: "LÊN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 6.25,
					y: 2.1,
					s: .14,
					fill: SOFT,
					children: "chiếu nghỉ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: 5.2,
					x2: 6.2,
					y: 1.28,
					label: "1 000",
					s: .14
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: 6.3,
					x2: 7.3,
					y: 1.28,
					label: "1 000",
					s: .14
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
					x1: 5.2,
					x2: 7.3,
					y: .98,
					label: "2 100",
					s: .15
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
					x: 7.62,
					y1: 1.5,
					y2: 2.5,
					label: "1 000",
					s: .14,
					right: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
					x: 7.62,
					y1: 2.5,
					y2: 5.1,
					label: "2 600",
					s: .14,
					right: true
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 5.05,
					y: 5.4,
					s: .17,
					fill: SAGE,
					anchor: "start",
					wide: true,
					children: "(b) MẶT BẰNG LÕI THANG"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 5.2,
					y: 5.76,
					s: .15,
					fill: MUTED,
					anchor: "start",
					children: "hai vế song song quanh chiếu nghỉ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "5.14",
					y: "5.94",
					width: "3.5",
					height: "0.36",
					rx: "0.06",
					fill: "var(--color-plan-void)",
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
					x: 5.26,
					y: 6.19,
					s: .15,
					fill: SOFT,
					anchor: "start",
					children: "⚠ cần lõi 2 100 — mặt bằng ý tưởng ghi 1 100"
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
		"aria-label": "Chi tiết mái kính giếng trời và khe thoát khí",
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
				children: "GIẾNG TRỜI 1 500 × 2 800 — thông xuống tầng 1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -1.4,
				y: .62,
				s: .15,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "CT-04 · MÁI KÍNH GIẾNG TRỜI"
			})
		]
	});
}
function WetStack() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "-1.35 0.25 8.5 6.05",
		className: "w-full",
		role: "img",
		"aria-label": "Chi tiết trục ướt WC tầng 1 và tầng 2, hộp gen kỹ thuật",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Defs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-1.35",
				y: "0.25",
				width: "8.5",
				height: "6.05",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.2",
				y: "5.5",
				width: "3.1",
				height: "0.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.2",
				y: "1.9",
				width: "2.62",
				height: "0.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.68",
				y: "1.9",
				width: "0.22",
				height: "0.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.2",
				y: "2.2",
				width: "0.2",
				height: "3.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.7",
				y: "2.2",
				width: "0.2",
				height: "3.3",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-0.2",
				y: "0.62",
				width: "0.2",
				height: "1.28",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.7",
				y: "0.62",
				width: "0.2",
				height: "1.28",
				fill: "url(#hatch-cut)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M-0.32 0.68 q 0.26 -0.14 0.52 0 q 0.26 0.14 0.52 0",
				fill: "none",
				stroke: FAINT,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M2.3 0.68 q 0.26 -0.14 0.52 0 q 0.26 0.14 0.52 0",
				fill: "none",
				stroke: FAINT,
				strokeWidth: "0.03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.4",
				y: "0.62",
				width: "0.3",
				height: "4.88",
				fill: "url(#hatch-fine)",
				stroke: INK,
				strokeWidth: "0.025"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.4",
				y: "4.0",
				width: "0.3",
				height: "0.4",
				fill: "var(--color-paper)",
				stroke: INK,
				strokeWidth: "0.022"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.4",
				y: "0.95",
				width: "0.3",
				height: "0.4",
				fill: "var(--color-paper)",
				stroke: INK,
				strokeWidth: "0.022"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 5.55 L2.4 5.55",
				stroke: SAGE,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0.03 5.55 L0.03 5.25 M2.37 5.55 L2.37 5.25",
				stroke: SAGE,
				strokeWidth: "0.045"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0 1.95 L2.4 1.95",
				stroke: SAGE,
				strokeWidth: "0.05"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0.03 1.95 L0.03 1.65 M2.37 1.95 L2.37 1.65",
				stroke: SAGE,
				strokeWidth: "0.045"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				stroke: SOFT,
				strokeWidth: "0.03",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.2 5.55 L0.2 5.1 L0.74 5.1 L0.74 5.3 L0.57 5.55 Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.62 4.62 L2.12 4.62 L2.12 4.78 L1.62 4.78 Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "1.87",
						y1: "4.78",
						x2: "1.87",
						y2: "5.55"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0.2 1.95 L0.2 1.5 L0.74 1.5 L0.74 1.7 L0.57 1.95 Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M1.62 1.02 L2.12 1.02 L2.12 1.18 L1.62 1.18 Z" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "1.87",
						y1: "1.18",
						x2: "1.87",
						y2: "1.95"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M1.12 5.5 l0.12 0.12 l-0.24 0 z",
				fill: SOFT
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M1.12 1.9 l0.12 0.12 l-0.24 0 z",
				fill: SOFT
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: .47,
				y: 4.95,
				s: .11,
				fill: MUTED,
				children: "xí"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 1.87,
				y: 4.48,
				s: .11,
				fill: MUTED,
				children: "lavabo"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				fill: "none",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "2.47",
						y1: "1.95",
						x2: "2.47",
						y2: "5.72",
						stroke: SOFT,
						strokeWidth: "0.06"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "0.5",
						y1: "5.72",
						x2: "2.47",
						y2: "5.72",
						stroke: SOFT,
						strokeWidth: "0.06"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "2.47",
						y1: "5.72",
						x2: "3.05",
						y2: "5.95",
						stroke: SOFT,
						strokeWidth: "0.06"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "2.9",
						y1: "5.89",
						x2: "3.25",
						y2: "6.03",
						stroke: SOFT,
						strokeWidth: "0.03",
						markerEnd: "url(#ink-s)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "2.58",
						y1: "1.95",
						x2: "2.58",
						y2: "5.62",
						stroke: MUTED,
						strokeWidth: "0.04"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "1.25",
						y1: "5.62",
						x2: "2.58",
						y2: "5.62",
						stroke: MUTED,
						strokeWidth: "0.04"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "2.66",
						y1: "5.0",
						x2: "2.66",
						y2: "0.45",
						stroke: SAGE,
						strokeWidth: "0.035",
						markerEnd: "url(#flow-s)"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 3.32,
				y: 6.06,
				s: .11,
				fill: SOFT,
				anchor: "start",
				children: "bể tự hoại"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.47,
				y: 3.3,
				tx: 3.15,
				ty: 3.05,
				label: "D110 thoát xí, dốc 2%",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.58,
				y: 3.65,
				tx: 3.15,
				ty: 3.45,
				label: "D90 thoát sàn · D60 lavabo",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.66,
				y: 2.6,
				tx: 3.15,
				ty: 2.3,
				label: "D60 thông hơi lên quá mái +700",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 2.62,
				y: 4.2,
				tx: 3.15,
				ty: 4.35,
				label: "cửa thăm 300 × 400 mỗi tầng",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: 1.18,
				y: 5.5,
				tx: .62,
				ty: 5.95,
				label: "phễu thu · dốc sàn 1.5%",
				s: .11,
				anchor: "end"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leader, {
				x: .03,
				y: 5.35,
				tx: -1.3,
				ty: 5,
				label: "chống thấm 2 lớp",
				s: .11,
				anchor: "start"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -1.3,
				y: 5.24,
				s: .11,
				fill: SOFT,
				anchor: "start",
				children: "lên chân tường 300"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimV, {
				x: -.62,
				y1: 1.9,
				y2: 5.5,
				label: "3 600",
				s: .13
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DimH, {
				x1: 2.4,
				x2: 2.7,
				y: 6.15,
				label: "300",
				s: .11
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 1.35,
				y: .95,
				s: .14,
				fill: INK,
				children: "WC tầng 2 · 2 100 × 2 800"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: 1.35,
				y: 2.75,
				s: .14,
				fill: INK,
				children: "WC tầng 1 · 1 800 × 2 400"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: .15,
				y: 3.05,
				s: .11,
				fill: MUTED,
				anchor: "start",
				children: "cùng trục — một hộp gen duy nhất"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(T, {
				x: -1.3,
				y: .45,
				s: .15,
				fill: SAGE,
				anchor: "start",
				wide: true,
				children: "CT-05 · TRỤC ƯỚT"
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
					children: "Bấm từng phòng để xem kích thước thông thủy. Lõi thang + giếng trời cố định tại tim 9.60–13.20 m trên cả ba tầng."
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
		viewBox: "-1.7 -1.4 8.5 21.4",
		className: "w-full",
		role: "img",
		"aria-label": `Mặt bằng ${floorId}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "-1.7",
				y: "-1.4",
				width: "8.5",
				height: "21.4",
				fill: "var(--color-paper)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0",
				y: "0",
				width: "5",
				height: "18",
				fill: "none",
				stroke: "var(--color-ink)",
				strokeWidth: "0.08"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.04",
				y: "9.64",
				width: "4.92",
				height: "3.52",
				className: "plan-service"
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
				r.h >= 1.6 && r.w >= 1.2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: r.x + r.w / 2,
					y: r.y + r.h / 2 - (r.h >= 3 ? .15 : 0),
					textAnchor: "middle",
					fontSize: r.w < 2 ? .28 : .34,
					fill: "var(--color-ink)",
					fontFamily: "Outfit, sans-serif",
					pointerEvents: "none",
					children: shortLabel(r.name)
				}) : null,
				r.h >= 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
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
				x: "2.5",
				y: "18.85",
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
	return name.replace("Phòng ngủ ", "PN ").replace("Phòng khách", "Khách").replace("Phòng thờ", "Thờ").replace("Giếng trời giữa", "Giếng").replace("Cầu thang", "Thang").replace("WC chung rộng", "WC").replace("WC chung", "WC").replace("Loggia mặt tiền", "Loggia").replace("Sân thượng trước", "Sân trước").replace("Sân phơi sau", "Phơi").replace("Lõi thang + kỹ thuật", "Kỹ thuật").replace("Bếp + Ăn", "Bếp + Ăn");
}
function Furniture({ floorId }) {
	if (floorId === "t1") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--color-ink-soft)",
		strokeWidth: "0.035",
		opacity: "0.55",
		pointerEvents: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.45",
				y: "2.0",
				width: "2.5",
				height: "0.85",
				rx: "0.08"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.0",
				y: "3.05",
				width: "1.2",
				height: "0.55",
				rx: "0.04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "4.25",
				y: "1.7",
				width: "0.35",
				height: "1.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "0.25",
				y: "5.65",
				width: "0.6",
				height: "3.6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "2.35",
				y: "6.85",
				width: "1.7",
				height: "0.9"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "2.55",
				cy: "6.7",
				r: "0.12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "3.85",
				cy: "6.7",
				r: "0.12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "2.55",
				cy: "7.95",
				r: "0.12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "3.85",
				cy: "7.95",
				r: "0.12"
			}),
			Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0.12",
				y1: 9.75 + i * .28,
				x2: "1.12",
				y2: 9.75 + i * .28
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.5",
				y: "14.35",
				width: "2.0",
				height: "2.4",
				rx: "0.12"
			})
		]
	});
	if (floorId === "t2") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--color-ink-soft)",
		strokeWidth: "0.035",
		opacity: "0.55",
		pointerEvents: "none",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.35",
				y: "2.0",
				width: "2.3",
				height: "2.1",
				rx: "0.12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.4",
				y: "6.35",
				width: "2.0",
				height: "2.0",
				rx: "0.12"
			}),
			Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: "0.12",
				y1: 9.75 + i * .28,
				x2: "1.12",
				y2: 9.75 + i * .28
			}, i)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "1.5",
				y: "14.35",
				width: "2.0",
				height: "2.4",
				rx: "0.12"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "4.35",
				cy: "11.4",
				r: "0.22"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3.15",
				y: "10.3",
				width: "0.7",
				height: "0.7"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		fill: "none",
		stroke: "var(--color-ink-soft)",
		strokeWidth: "0.035",
		opacity: "0.55",
		pointerEvents: "none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.5",
			y: "6.2",
			width: "2.0",
			height: "0.55"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: "1.7",
			y: "6.85",
			width: "1.6",
			height: "0.35"
		})]
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
					children: "Giếng giữa nhà gắn cầu thang — sáng đỉnh, hút nóng. Sân sau 4 m là giếng thứ hai, cấp sáng cho hai phòng ngủ cuối. Gió đi trước–sau; khí nóng đi dưới–trên."
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
							alt: "Giếng trời thông tầng cạnh cầu thang gỗ và lan can kính",
							className: "aspect-portrait w-full object-cover sm:aspect-tall"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-xs tracking-wide text-paper/70",
							children: "Giếng trời giữa — stack effect + sáng đỉnh cho phòng ngủ 03"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl bg-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/rear.jpg",
							alt: "Sân sau 4 mét với cây và cửa sổ phòng ngủ cuối",
							className: "aspect-land w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
							className: "px-4 py-3 text-xs tracking-wide text-paper/70",
							children: "Sân sau 4.00 m — giếng trời thứ hai, phòng ngủ ông bà mở ra đây"
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
						width: "86",
						height: "60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "238",
						y: "150",
						width: "68",
						height: "60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "370",
						y: "150",
						width: "76",
						height: "60"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "152",
						y: "96",
						width: "86",
						height: "54"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "238",
						y: "96",
						width: "68",
						height: "54"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "370",
						y: "96",
						width: "76",
						height: "54"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "224",
						y: "48",
						width: "82",
						height: "48"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "306",
				y: "48",
				width: "64",
				height: "162",
				fill: "var(--color-plan-void)",
				stroke: "var(--color-ink)",
				strokeWidth: "1",
				strokeDasharray: "4 3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "338",
				y: "128",
				textAnchor: "middle",
				fill: "var(--color-sage)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Giếng giữa"
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
				x: "478",
				y: "128",
				textAnchor: "middle",
				fill: "var(--color-sage)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Sân sau"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "478",
				y: "142",
				textAnchor: "middle",
				fill: "var(--color-muted)",
				fontSize: "9",
				fontFamily: "Outfit, sans-serif",
				children: "4 m"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "152",
				y: "48",
				width: "72",
				height: "8",
				fill: "var(--color-plan-outdoor)",
				stroke: "var(--color-ink)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "370",
				y: "48",
				width: "76",
				height: "8",
				fill: "var(--color-plan-outdoor)",
				stroke: "var(--color-ink)",
				strokeWidth: "1"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "195",
				y: "184",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Khách"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "272",
				y: "184",
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
				x: "195",
				y: "126",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "PN 02"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "272",
				y: "126",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "PN 03"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "408",
				y: "126",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "PN 04"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "265",
				y: "76",
				textAnchor: "middle",
				fill: "var(--color-ink)",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				children: "Thờ"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M40 188 C 80 188, 120 188, 160 176",
				fill: "none",
				stroke: "var(--color-oak)",
				strokeWidth: "1.2",
				markerEnd: "url(#arr)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M200 168 H 300",
				fill: "none",
				stroke: "var(--color-oak)",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M370 168 H 470",
				fill: "none",
				stroke: "var(--color-oak)",
				strokeWidth: "1.2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M338 190 V 58",
				fill: "none",
				stroke: "var(--color-sage)",
				strokeWidth: "1.3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M478 190 V 58",
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
				x: "348",
				y: "54",
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
					children: "Mặt 5 m không chịu được trang trí. Khối vuông, vôi ấm, lam teak, khung than chì. Loggia tầng 2 tạo bóng; tum lùi 4.5 m để khối nhà đọc được hai tầng rưỡi, không bị ‘hộp’."
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
						children: "Chiều sâu 30 m bị cắt thành 8 + 18 + 4. Sân trước giữ xe và cây; khối nhà 18 m chứa toàn bộ công năng; sân sau 4 m là giếng trời thứ hai — không xây, không mái."
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
									x: "0.2",
									y: HOUSE.yardFront + 9.6,
									width: "1.1",
									height: "3.6",
									className: "plan-stair",
									stroke: "var(--color-ink)",
									strokeWidth: "0.02"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									x: "1.4",
									y: HOUSE.yardFront + 9.9,
									width: "1.5",
									height: "2.8",
									className: "plan-void",
									stroke: "var(--color-ink)",
									strokeWidth: "0.02"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "2.15",
									y: HOUSE.yardFront + 11.4,
									textAnchor: "middle",
									fontSize: "0.22",
									fill: "var(--color-ink-soft)",
									fontFamily: "Outfit, sans-serif",
									children: "GIẾNG"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
									y: HOUSE.yardFront + HOUSE.houseD,
									width: W,
									height: HOUSE.yardRear,
									className: "plan-outdoor",
									stroke: "var(--color-ink)",
									strokeWidth: "0.03"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "2.5",
									cy: D - 2,
									r: "0.55",
									fill: "var(--color-sage)",
									opacity: "0.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "1.3",
									cy: D - 1.2,
									r: "0.25",
									fill: "var(--color-sage)",
									opacity: "0.35"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "3.7",
									cy: D - 1.3,
									r: "0.28",
									fill: "var(--color-sage)",
									opacity: "0.35"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
									x: "2.5",
									y: D - .45,
									textAnchor: "middle",
									fontSize: "0.28",
									fill: "var(--color-ink-soft)",
									fontFamily: "Outfit, sans-serif",
									children: "SÂN SAU 4.00 m"
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
var SHOTS = [
	{
		label: "Từ phố",
		note: "Mặt tiền 5 m. Khối tầng 2 nhô ra 0.60 m, che nắng và mưa tạt cho kính tầng 1.",
		pos: [
			2.5,
			2.5,
			-7.5
		],
		look: [
			2.5,
			4.6,
			13
		]
	},
	{
		label: "Qua cổng",
		note: "Cổng nan ngang cao 1.80 m, độ thoáng ~70% — nhìn thấy sân nhưng vẫn kín đáo.",
		pos: [
			2.5,
			1.7,
			.6
		],
		look: [
			2.5,
			3.2,
			11
		]
	},
	{
		label: "Sân trước 8 m",
		note: "Chỗ đỗ một xe dọc theo chiều sâu, lối đi 1.20 m bên phải, cây thấp tán chắn bụi phố.",
		pos: [
			3.7,
			1.7,
			4.2
		],
		look: [
			2.2,
			2.6,
			10.5
		]
	},
	{
		label: "Hiên và tam cấp",
		note: "Nền nhà +0.45 m so với sân — ba bậc 150 mm, hiên sâu 0.60 m dưới khối tầng 2.",
		pos: [
			2.6,
			2,
			7.3
		],
		look: [
			2.4,
			2.2,
			13
		]
	},
	{
		label: "Phòng khách",
		note: "Kính trượt 4.20 m mở ra sân. Sofa tựa tường biên, trục nhìn chạy suốt về giếng trời.",
		pos: [
			3.6,
			2.05,
			10.4
		],
		look: [
			2,
			1.9,
			15.5
		]
	},
	{
		label: "Bếp và bàn ăn",
		note: "Bếp chữ I dọc tường trái 3.80 m, bàn ăn 6 ghế bên phải, mở thông với phòng khách.",
		pos: [
			2.6,
			2.05,
			12.8
		],
		look: [
			1.2,
			1.7,
			16.8
		]
	},
	{
		label: "Giếng trời",
		note: "Lõi sáng thông ba tầng lên mái kính. Đây là chỗ khí nóng thoát ra khỏi nhà.",
		pos: [
			2.75,
			2.05,
			19.2
		],
		look: [
			2.7,
			9.6,
			19.9
		]
	},
	{
		label: "Cầu thang",
		note: "22 bậc × 164 mm, hai vế quanh chiếu nghỉ, lan can kính để không chắn sáng.",
		pos: [
			2.95,
			4.8,
			20.9
		],
		look: [
			1.5,
			3.4,
			18.4
		]
	},
	{
		label: "Tầng 2",
		note: "Lên tới sàn +4.05 m. Lõi thang là điểm phân phối cho cả ba phòng ngủ.",
		pos: [
			2.2,
			5.65,
			17
		],
		look: [
			2.5,
			5.4,
			13.5
		]
	},
	{
		label: "Phòng ngủ 03",
		note: "Phòng giữa vay sáng từ giếng trời bằng tường kính — điểm yếu kinh điển của nhà ống.",
		pos: [
			2.5,
			5.65,
			15.4
		],
		look: [
			2.4,
			5.4,
			10.5
		]
	},
	{
		label: "Master và loggia",
		note: "Phòng ngủ 02 nhìn ra loggia mặt tiền, lam teak lọc nắng thành sọc trên sàn.",
		pos: [
			2.5,
			5.65,
			10.6
		],
		look: [
			2.5,
			5.2,
			6.5
		]
	},
	{
		label: "Quay về lõi thang",
		note: "Trong nhà ống, mọi phòng đều tựa vào một lõi giao thông duy nhất — không có hành lang thừa.",
		pos: [
			2.45,
			5.65,
			17.4
		],
		look: [
			2.7,
			7.4,
			19.4
		]
	},
	{
		label: "Lên tum",
		note: "Vế thang thứ hai đưa lên cốt +7.35 m, đi sát miệng giếng trời.",
		pos: [
			2.8,
			7.95,
			19.7
		],
		look: [
			2.4,
			8.8,
			17
		]
	},
	{
		label: "Phòng thờ",
		note: "Ban thờ tựa tường hậu, mặt nhìn xuyên kính ra sân thượng — không gian sạch, cao nhất nhà.",
		pos: [
			2.5,
			8.95,
			13.6
		],
		look: [
			2.5,
			8.7,
			17
		]
	},
	{
		label: "Sân thượng",
		note: "Sân thượng 5.00 × 4.50 m trước phòng thờ: sàn teak, lan can kính, mở thẳng ra phố.",
		pos: [
			2.7,
			9,
			12.1
		],
		look: [
			2.2,
			7.6,
			3
		]
	}
];
var DURATION = 60;
function Walkthrough() {
	const hostRef = (0, import_react.useRef)(null);
	const canvasRef = (0, import_react.useRef)(null);
	const progressRef = (0, import_react.useRef)(0);
	const playingRef = (0, import_react.useRef)(true);
	const [active, setActive] = (0, import_react.useState)(false);
	const [ready, setReady] = (0, import_react.useState)(false);
	const [failed, setFailed] = (0, import_react.useState)(false);
	const [playing, setPlaying] = (0, import_react.useState)(true);
	const [pct, setPct] = (0, import_react.useState)(0);
	const shotIndex = Math.min(SHOTS.length - 1, Math.floor(pct / 100 * (SHOTS.length - 1) + 1e-4));
	const shot = SHOTS[shotIndex];
	const seek = (0, import_react.useCallback)((value) => {
		progressRef.current = Math.min(1, Math.max(0, value));
		setPct(Math.round(progressRef.current * 100));
	}, []);
	const toggle = (0, import_react.useCallback)(() => {
		if (progressRef.current >= 1) progressRef.current = 0;
		playingRef.current = !playingRef.current;
		setPlaying(playingRef.current);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!active) return;
		const canvas = canvasRef.current;
		const host = hostRef.current;
		if (!canvas || !host) return;
		let stop = false;
		let cleanup = () => {};
		(async () => {
			let T;
			try {
				T = await import("../_libs/three.mjs").then((n) => n.t);
			} catch {
				if (!stop) setFailed(true);
				return;
			}
			if (stop) return;
			const renderer = new T.WebGLRenderer({
				canvas,
				antialias: true
			});
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = T.PCFSoftShadowMap;
			renderer.toneMapping = T.ACESFilmicToneMapping;
			renderer.toneMappingExposure = 1.05;
			const scene = new T.Scene();
			scene.background = new T.Color("#dbe3ea");
			scene.fog = new T.Fog("#dbe3ea", 44, 96);
			const camera = new T.PerspectiveCamera(58, 16 / 9, .08, 220);
			const mats = {
				plaster: new T.MeshStandardMaterial({
					color: "#f0ebe1",
					roughness: .92
				}),
				plasterIn: new T.MeshStandardMaterial({
					color: "#f6f2ea",
					roughness: .95
				}),
				teak: new T.MeshStandardMaterial({
					color: "#8b6f4e",
					roughness: .7
				}),
				charcoal: new T.MeshStandardMaterial({
					color: "#2c2c2c",
					roughness: .55,
					metalness: .35
				}),
				stone: new T.MeshStandardMaterial({
					color: "#8d8880",
					roughness: .9
				}),
				paving: new T.MeshStandardMaterial({
					color: "#a9a49b",
					roughness: 1
				}),
				asphalt: new T.MeshStandardMaterial({
					color: "#5d5b57",
					roughness: 1
				}),
				oak: new T.MeshStandardMaterial({
					color: "#d8c3a5",
					roughness: .75
				}),
				glass: new T.MeshStandardMaterial({
					color: "#c5d0d4",
					roughness: .08,
					metalness: .1,
					transparent: true,
					opacity: .24
				}),
				green: new T.MeshStandardMaterial({
					color: "#4f6b4a",
					roughness: 1
				}),
				trunk: new T.MeshStandardMaterial({
					color: "#6b5844",
					roughness: 1
				}),
				fabric: new T.MeshStandardMaterial({
					color: "#b9b3a6",
					roughness: 1
				}),
				neighbour: new T.MeshStandardMaterial({
					color: "#cdc7bd",
					roughness: 1
				}),
				dark: new T.MeshStandardMaterial({
					color: "#3a3d42",
					roughness: .4,
					metalness: .4
				})
			};
			const unit = new T.BoxGeometry(1, 1, 1);
			const disposables = [unit];
			const box = (x, y, z, m, opts = {}) => {
				const mesh = new T.Mesh(unit, mats[m]);
				mesh.scale.set(Math.max(.001, x[1] - x[0]), Math.max(.001, y[1] - y[0]), Math.max(.001, z[1] - z[0]));
				mesh.position.set((x[0] + x[1]) / 2, (y[0] + y[1]) / 2, (z[0] + z[1]) / 2);
				const shadow = opts.shadow ?? true;
				mesh.castShadow = shadow && m !== "glass";
				mesh.receiveShadow = shadow;
				scene.add(mesh);
				return mesh;
			};
			box([-9, 14], [-.14, -.02], [-11, 0], "asphalt");
			box([-9, 14], [-.03, .03], [-1.3, 0], "paving");
			box([0, 5], [-.08, .02], [0, 30], "paving");
			box([-6.4, -.2], [0, 12.6], [7.4, 26.6], "neighbour");
			box([5.2, 11.6], [0, 10.8], [7.4, 26.6], "neighbour");
			box([-.2, 0], [0, 2.2], [0, 8], "plaster");
			box([5, 5.2], [0, 2.2], [0, 8], "plaster");
			box([-.2, 5.2], [0, 2.4], [29.8, 30], "plaster");
			box([0, .16], [0, 1.85], [-.06, .16], "charcoal");
			box([4.84, 5], [0, 1.85], [-.06, .16], "charcoal");
			for (let i = 0; i < 6; i++) box([.16, 4.84], [.22 + i * .28, .34 + i * .28], [.02, .08], "charcoal");
			box([1, 2.9], [.28, 1.02], [1.2, 5.8], "dark");
			box([1.16, 2.74], [1.02, 1.46], [2.3, 4.6], "dark");
			box([.35, 4.65], [.02, .06], [5.6, 7.55], "stone");
			const tree = (cx, cz, r, h, base = 0) => {
				box([cx - .05, cx + .05], [base, base + h], [cz - .05, cz + .05], "trunk");
				const canopy = new T.Mesh(new T.IcosahedronGeometry(r, 1), mats.green);
				canopy.position.set(cx, base + h + r * .7, cz);
				canopy.castShadow = true;
				disposables.push(canopy.geometry);
				scene.add(canopy);
			};
			tree(4.1, 6.5, .62, 1.1);
			tree(.95, 6.9, .42, .8);
			tree(2.6, 27.4, .75, 1.3);
			tree(1.1, 28.5, .4, .7);
			tree(4, 28.3, .38, .7);
			box([.3, 4.7], [0, .04], [26.2, 29.6], "green");
			for (let i = 0; i < 3; i++) box([1.2, 3.8], [0, .15 * (i + 1)], [7.55 + i * .15, 8], "stone");
			box([0, 5], [.15, .45], [8, 26], "stone");
			[
				[
					[0, 5],
					[3.75, 4.05],
					[8, 17.6]
				],
				[
					[0, 5],
					[3.75, 4.05],
					[21.2, 26]
				],
				[
					[3.4, 5],
					[3.75, 4.05],
					[17.6, 21.2]
				],
				[
					[0, 5],
					[7.05, 7.35],
					[8, 17.6]
				],
				[
					[0, 5],
					[7.05, 7.35],
					[21.2, 26]
				],
				[
					[3.4, 5],
					[7.05, 7.35],
					[17.6, 21.2]
				],
				[
					[0, 5],
					[10.05, 10.35],
					[12.5, 17.6]
				],
				[
					[3.4, 5],
					[10.05, 10.35],
					[17.6, 21.2]
				]
			].forEach(([x, y, z]) => box(x, y, z, "plaster"));
			box([.2, 4.8], [.45, .47], [8.2, 25.8], "oak");
			box([.2, 4.8], [4.05, 4.07], [8.2, 17.6], "oak");
			box([.2, 4.8], [4.05, 4.07], [21.2, 25.8], "oak");
			box([3.4, 4.8], [4.05, 4.07], [17.6, 21.2], "oak");
			box([.2, 4.8], [7.35, 7.37], [12.6, 17.6], "oak");
			box([3.4, 4.8], [7.35, 7.37], [17.6, 21.1], "oak");
			box([.2, 4.8], [7.35, 7.38], [8.2, 12.5], "teak");
			[[0, .2], [4.8, 5]].forEach(([a, b]) => {
				box([a, b], [.45, 3.75], [8, 26], "plaster");
				box([a, b], [4.05, 7.05], [8, 26], "plaster");
				box([a, b], [7.35, 10.05], [12.5, 21.2], "plaster");
				box([a, b], [7.35, 8.45], [8, 12.5], "plaster");
				box([a, b], [7.35, 8.45], [21.2, 26], "plaster");
			});
			box([0, 5], [7.35, 8.45], [8, 8.2], "plaster");
			box([0, 5], [7.35, 8.45], [25.8, 26], "plaster");
			[[.45, 3.75], [4.05, 7.05]].forEach(([y0, y1]) => {
				box([0, .9], [y0, y1], [25.8, 26], "plaster");
				box([4.1, 5], [y0, y1], [25.8, 26], "plaster");
				box([.9, 4.1], [y0, y0 + .45], [25.8, 26], "plaster");
				box([.9, 4.1], [y0 + 2.25, y1], [25.8, 26], "plaster");
				box([.9, 4.1], [y0 + .45, y0 + 2.25], [25.86, 25.94], "glass");
			});
			box([0, .4], [.45, 3.75], [8, 8.2], "plaster");
			box([4.6, 5], [.45, 3.75], [8, 8.2], "plaster");
			box([.4, 4.6], [.45, 3.15], [8.55, 8.63], "glass");
			box([.4, 4.6], [3.15, 3.75], [8.5, 8.68], "plasterIn");
			box([.2, 4.8], [4.05, 5.15], [8, 8.06], "glass");
			box([.2, 4.8], [4.05, 6.75], [9.05, 9.13], "glass");
			box([.2, 4.8], [6.75, 7.05], [9, 9.18], "plasterIn");
			for (let i = 0; i < 41; i++) {
				const x = .06 + i * .12;
				box([x, x + .04], [4.15, 7.25], [7.96, 8.04], "teak");
			}
			box([.2, 2], [7.35, 10.05], [12.5, 12.58], "glass");
			box([3, 4.8], [7.35, 10.05], [12.5, 12.58], "glass");
			box([2, 3], [9.55, 10.05], [12.5, 12.58], "plasterIn");
			box([.2, 4.8], [8.45, 9.5], [8.06, 8.12], "glass");
			const partition = (z, y, door, m = "plasterIn") => {
				box([0, door[0]], y, z, m);
				box([door[1], 5], y, z, m);
				box(door, [y[0] + 2.1, y[1]], z, m);
			};
			partition([17.55, 17.65], [.45, 3.75], [2, 3]);
			partition([21.15, 21.25], [.45, 3.75], [3.2, 4.2]);
			partition([13.35, 13.45], [4.05, 7.05], [2, 3]);
			partition([17.55, 17.65], [4.05, 7.05], [1.8, 3]);
			partition([21.15, 21.25], [4.05, 7.05], [3.2, 4.2]);
			partition([17.1, 17.2], [7.35, 10.05], [1.9, 2.9]);
			box([0, 5], [7.35, 10.05], [21.1, 21.2], "plasterIn");
			box([3.45, 3.55], [.45, 3.75], [18.3, 20.8], "plasterIn");
			box([3.45, 5], [.45, 3.75], [18.25, 18.35], "plasterIn");
			box([3.45, 3.55], [4.05, 7.05], [17.65, 20.5], "plasterIn");
			const stair = (yBase, yTop) => {
				const r = (yTop - yBase) / 22;
				for (let i = 1; i <= 10; i++) box([.05, 1.05], [yBase, yBase + i * r], [17.6 + (i - 1) * .26, 17.6 + i * .26], "oak");
				box([.05, 2.05], [yBase + 11 * r - .18, yBase + 11 * r], [20.2, 21.2], "oak");
				for (let j = 1; j <= 10; j++) box([1.1, 2.1], [yBase, yBase + (11 + j) * r], [20.2 - j * .26, 20.2 - (j - 1) * .26], "oak");
			};
			stair(.45, 4.05);
			stair(4.05, 7.35);
			[4.05, 7.35].forEach((y) => {
				box([2.1, 3.4], [y, y + 1.1], [17.6, 17.66], "glass");
				box([3.34, 3.4], [y, y + 1.1], [17.6, 21.2], "glass");
				box([0, 3.4], [y, y + 1.1], [21.14, 21.2], "glass");
			});
			box([0, 3.5], [10.35, 10.7], [17.3, 17.5], "plaster");
			box([0, 3.5], [10.35, 10.7], [21.3, 21.5], "plaster");
			box([3.4, 3.5], [10.35, 10.7], [17.3, 21.5], "plaster");
			box([0, 3.55], [10.86, 10.92], [17.25, 21.55], "glass", { shadow: false });
			box([.45, 3], [.47, 1.15], [10, 10.9], "fabric");
			box([.45, 1.15], [.47, 1.15], [10, 12.2], "fabric");
			box([1.6, 2.8], [.47, .85], [11.2, 11.9], "teak");
			box([4.3, 4.78], [1, 1.75], [10.4, 12.2], "dark");
			box([.25, .85], [.47, 1.37], [13.8, 17.4], "plasterIn");
			box([2.35, 3.95], [.47, 1.22], [14.6, 15.5], "teak");
			box([1.5, 3.1], [.47, 1.02], [22.4, 24.4], "fabric");
			box([1.4, 3.2], [4.07, 4.62], [10.4, 12.4], "fabric");
			box([1.4, 3.2], [4.07, 4.62], [14.4, 16.4], "fabric");
			box([1.5, 3.1], [4.07, 4.62], [22.4, 24.4], "fabric");
			box([1.5, 3.5], [7.37, 8.55], [16.5, 17.05], "teak");
			box([.5, 1.3], [7.38, 7.9], [9, 9.8], "stone");
			box([3.7, 4.5], [7.38, 7.78], [9.4, 10], "stone");
			tree(.9, 9.4, .42, .35, 7.9);
			tree(4.1, 9.7, .34, .3, 7.78);
			tree(2.55, 20.6, .4, 1.2, .47);
			scene.add(new T.HemisphereLight(15134195, 12893356, 1.7));
			const sun = new T.DirectionalLight(16773855, 2.4);
			sun.position.set(-13, 24, -12);
			sun.target.position.set(2.5, 3, 15);
			sun.castShadow = true;
			sun.shadow.mapSize.set(2048, 2048);
			sun.shadow.camera.near = 1;
			sun.shadow.camera.far = 80;
			sun.shadow.camera.left = -22;
			sun.shadow.camera.right = 22;
			sun.shadow.camera.top = 26;
			sun.shadow.camera.bottom = -14;
			sun.shadow.bias = -6e-4;
			scene.add(sun);
			scene.add(sun.target);
			const fill = new T.DirectionalLight(14477038, .75);
			fill.position.set(10, 12, 34);
			scene.add(fill);
			const shaft = new T.PointLight(16773336, 26, 20, 2);
			shaft.position.set(2.7, 9.2, 19.4);
			scene.add(shaft);
			const posCurve = new T.CatmullRomCurve3(SHOTS.map((s) => new T.Vector3(...s.pos)), false, "catmullrom", .35);
			const lookCurve = new T.CatmullRomCurve3(SHOTS.map((s) => new T.Vector3(...s.look)), false, "catmullrom", .35);
			const p = new T.Vector3();
			const l = new T.Vector3();
			const resize = () => {
				const w = host.clientWidth;
				const h = Math.round(w * 9 / 16);
				renderer.setSize(w, h, false);
				camera.aspect = w / h;
				camera.updateProjectionMatrix();
			};
			resize();
			const ro = new ResizeObserver(resize);
			ro.observe(host);
			let last = performance.now();
			let shown = -1;
			renderer.setAnimationLoop(() => {
				const now = performance.now();
				const dt = Math.min(.06, (now - last) / 1e3);
				last = now;
				if (playingRef.current) {
					progressRef.current += dt / DURATION;
					if (progressRef.current >= 1) {
						progressRef.current = 1;
						playingRef.current = false;
						setPlaying(false);
					}
					const next = Math.round(progressRef.current * 100);
					if (next !== shown) {
						shown = next;
						setPct(next);
					}
				}
				const t = progressRef.current;
				posCurve.getPoint(t, p);
				lookCurve.getPoint(t, l);
				camera.position.copy(p);
				camera.lookAt(l);
				renderer.render(scene, camera);
			});
			setReady(true);
			cleanup = () => {
				renderer.setAnimationLoop(null);
				ro.disconnect();
				scene.traverse((o) => {
					const mesh = o;
					if (mesh.isMesh) mesh.geometry.dispose();
				});
				disposables.forEach((g) => g.dispose());
				Object.values(mats).forEach((m) => m.dispose());
				renderer.dispose();
			};
		})();
		return () => {
			stop = true;
			cleanup();
		};
	}, [active]);
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
					children: "Đi một vòng: từ vỉa hè vào tới bàn thờ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 max-w-2xl text-sm leading-relaxed text-muted",
					children: [
						"Mô hình dựng thẳng từ kích thước trong",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-ink",
							children: "house-data"
						}),
						" — không phải ảnh AI, nên tỉ lệ phòng, chiều cao tầng và vị trí giếng trời đúng như mặt bằng. Lõi thang được dựng theo phương án rộng 2.10 m nêu trong ghi chú CT-03."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: hostRef,
					className: "relative mt-8 aspect-photo w-full overflow-hidden rounded-xl bg-ink shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
							ref: canvasRef,
							className: cn("size-full", !active && "hidden")
						}),
						!active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setActive(true),
							className: "group absolute inset-0 size-full",
							"aria-label": "Bắt đầu phối cảnh 3D",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/facade.jpg",
								alt: "Phối cảnh mặt tiền ngôi nhà",
								className: "size-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-85"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "absolute inset-0 flex flex-col items-center justify-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex size-16 items-center justify-center rounded-full bg-paper/90 text-ink",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-6 translate-x-0.5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-2xl text-paper",
										children: "Bắt đầu tham quan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tracking-wide text-paper/80",
										children: "Dựng 3D thời gian thực · 60 giây · 15 điểm dừng"
									})
								]
							})]
						}) : null,
						active && !ready && !failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center text-sm text-paper/80",
							children: "Đang dựng mô hình…"
						}) : null,
						failed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 grid place-items-center px-6 text-center text-sm text-paper/85",
							children: "Trình duyệt không khởi tạo được WebGL. Xem lại mặt bằng và bản vẽ chi tiết phía trên nhé."
						}) : null,
						active && ready ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 sm:p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[11px] tracking-[0.2em] text-paper/70 uppercase",
									children: [
										String(shotIndex + 1).padStart(2, "0"),
										" / ",
										SHOTS.length
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 font-display text-2xl text-paper",
									children: shot.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 max-w-xl text-xs leading-relaxed text-paper/80 sm:text-sm",
									children: shot.note
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pointer-events-auto mt-4 flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
											type: "button",
											variant: "invert",
											size: "sm",
											className: "shrink-0 whitespace-nowrap",
											onClick: toggle,
											children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-4" }), playing ? "Tạm dừng" : pct >= 100 ? "Xem lại" : "Tiếp tục"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "range",
											min: 0,
											max: 1e3,
											value: Math.round(pct / 100 * 1e3),
											onChange: (e) => seek(Number(e.target.value) / 1e3),
											"aria-label": "Vị trí trong hành trình",
											className: "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-paper/30 accent-paper"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
											type: "button",
											variant: "invert",
											size: "sm",
											onClick: () => {
												seek(0);
												playingRef.current = true;
												setPlaying(true);
											},
											"aria-label": "Về đầu",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" })
										})
									]
								})
							]
						}) : null
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 flex flex-wrap gap-2",
					children: SHOTS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (!active) setActive(true);
							seek(i / (SHOTS.length - 1));
						},
						className: cn("h-9 rounded-md px-3 text-xs transition-colors duration-150", active && i === shotIndex ? "bg-sage text-accent-fg" : "bg-paper text-ink-soft hover:text-ink"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums opacity-60",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-1.5",
							children: s.label
						})]
					}) }, s.label))
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
					children: "Chiều sâu là vấn đề. Cầu thang đặt giữa là câu trả lời."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-sm leading-relaxed text-muted sm:text-base",
					children: "Nhà ống 5 m không chia được hai phòng cạnh nhau. Công năng phải xếp dọc: dương phía phố, âm phía vườn. Lõi thang 1.10 m kẹp giếng 1.50 m cắt nhà tại mét thứ mười — vừa đi, vừa thở, vừa sáng cho phòng ngủ giữa tầng 2."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1",
			children: [
				[
					"04",
					"Phòng ngủ",
					"Một dưới đất cho ông bà, ba trên lầu."
				],
				[
					"02",
					"WC",
					"Trục ướt thẳng đứng, WC tầng 2 rộng 6 m²."
				],
				[
					"01",
					"Phòng thờ",
					"Tum, hướng khoảng thoáng mặt tiền."
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
