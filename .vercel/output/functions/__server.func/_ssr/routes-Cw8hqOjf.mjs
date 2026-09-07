import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Copy, r as Check } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cw8hqOjf.js
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
		height: "Trần 3.60 m",
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
		height: "Trần 3.30 m",
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
		height: "Trần 3.00 m",
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
function cn(...inputs) {
	return twMerge(clsx(inputs));
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
					children: "03 — Sáng và gió"
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
					children: "04 — Mặt tiền"
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
					children: "05 — Prompt 3D"
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
		href: "#anh-sang",
		label: "Ánh sáng"
	},
	{
		href: "#vat-lieu",
		label: "Vật liệu"
	},
	{
		href: "#prompt",
		label: "Prompt 3D"
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightAir, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Materials, {}),
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
