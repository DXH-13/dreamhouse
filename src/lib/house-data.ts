export const HOUSE = {
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
  hTum: 3.0,
  heightTotal: 11.2,
} as const;

export type RoomKind =
  | "living"
  | "kitchen"
  | "bed"
  | "wc"
  | "stair"
  | "void"
  | "worship"
  | "outdoor"
  | "service"
  | "parking";

export type Room = {
  id: string;
  name: string;
  subtitle: string;
  x: number;
  y: number;
  w: number;
  h: number;
  kind: RoomKind;
  areaGross: number;
  areaNet: number;
  dims: string;
  light: string;
  notes: string[];
};

export type FloorId = "t1" | "t2" | "tum";

export type Floor = {
  id: FloorId;
  label: string;
  title: string;
  blurb: string;
  height: string;
  rooms: Room[];
};

export const FLOORS: Floor[] = [
  {
    id: "t1",
    label: "Tầng 1",
    title: "Mặt đất — đón khách, ở và chăm sóc người lớn tuổi",
    blurb:
      "Mặt bằng mở trước — riêng tư sau. Cầu thang và giếng trời cắt giữa nhà, WC chung kề phòng ngủ ông bà.",
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
          "Cửa chính lệch phải, không đối cầu thang — tụ khí tốt.",
        ],
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
          "Bếp không đối cửa chính; hút mùi ống kỹ thuật lên tum.",
        ],
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
          "Gầm thang: kho kỹ thuật điện — nước — máy lọc.",
        ],
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
          "Cấp sáng cho bếp, WC, phòng ngủ giữa tầng 2.",
        ],
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
          "Người lớn tuổi đi tối đa 4 m từ giường.",
        ],
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
          "Sân sau cách âm phố; gần WC; không phải lên tầng.",
        ],
      },
    ],
  },
  {
    id: "t2",
    label: "Tầng 2",
    title: "Ba phòng ngủ — một WC rộng, lấy sáng từ hai giếng",
    blurb:
      "Master nhìn mặt tiền, phòng giữa vay sáng từ giếng trời, phòng cuối nhìn sân sau. WC chung 6 m² trên cùng trục ướt.",
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
        notes: [
          "Lùi khối tầng 2 tạo bóng đổ cho kính tầng 1.",
          "Lan can kính 1.10 m + lam đứng 40×80 mm, khoảng 80 mm.",
        ],
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
        notes: [
          "Giường 1.80 m, tủ sliding 2.40 m tường biên.",
          "Cửa kính 3 cánh ra loggia, rèm voan + rèm blackout.",
        ],
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
          "Cửa ra hành lang lõi thang, không đi xuyên phòng khác.",
        ],
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
        notes: ["Cùng vị trí tầng 1 — lõi giao thông ổn định."],
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
        notes: [
          "Thu hẹp 10 cm so với T1 để nới WC tầng 2.",
          "Lan can kính 1.10 m, nhìn xuyên xuống cây giếng.",
        ],
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
          "Phục vụ cả 3 phòng ngủ tầng 2.",
        ],
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
          "Cửa sổ trên cao lấy gió đối lưu với loggia mặt tiền.",
        ],
      },
    ],
  },
  {
    id: "tum",
    label: "Tầng tum",
    title: "Phòng thờ hướng mặt tiền — sân thượng trước, sân phơi sau",
    blurb:
      "Tum không phủ hết 18 m. Lùi 4.50 m trước để lấy khoảng thoáng cho ban thờ; lùi sau làm sân phơi và cụm máy.",
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
          "Ban thờ trong nhà nhìn xuyên kính ra khoảng này — không đụng tường.",
        ],
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
          "Cửa phụ từ lõi thang, chậu rửa tay nhỏ ở hành lang (không trong phòng).",
        ],
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
          "Không bố trí WC tại tum để giữ trục sạch cho phòng thờ.",
        ],
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
        notes: [
          "Giàn phơi xếp, pergola lam gỗ, dàn nóng VRV/máy lạnh.",
          "Không nhìn thấy từ mặt tiền; thoát nước riêng về sân sau.",
        ],
      },
    ],
  },
];

export const SITE_NOTES = [
  {
    title: "Sân trước 8.00 m",
    body: "0–0.50 m cổng nan ngang (thoáng 70%). 0.50–5.50 m chỗ đỗ 1 sedan dọc theo chiều sâu, lối đi 1.20 m bên phải. 5.50–8.00 m tiểu cảnh, bậc tam cấp, cây thấp — khoảng đệm 2.50 m trước kính khách.",
  },
  {
    title: "Khối nhà 5.00 × 18.00 m",
    body: "90 m²/sàn. Tường biên 200 mm, thông thủy rộng 4.60 m. Lõi thang + giếng trời tại tim 9.60–13.20 m chia nhà thành vùng dương (trước) và vùng âm (sau).",
  },
  {
    title: "Sân sau 4.00 m",
    body: "Giếng trời thứ hai: cây tán nhỏ, sỏi, dương xỉ, lối đá. Cấp sáng và gió cho phòng ngủ cuối T1–T2, phơi phụ, giếng thấm nước mưa.",
  },
];

export const LIGHT_POINTS = [
  {
    title: "Hai giếng, một trục gió",
    body: "Gió vào từ cổng thoáng và kính khách, đi xuyên bếp mở, gặp giếng giữa rồi ra sân sau. Khí nóng bốc lên giếng (stack effect) thoát ở mái tum.",
  },
  {
    title: "Chia sáng theo chiều sâu 18 m",
    body: "0–5.4 m: sáng trực tiếp mặt tiền. 5.4–9.6 m: sáng vay từ khách + void. 9.6–13.2 m: sáng đỉnh giếng. 13.2–18 m: sáng sân sau 4 m.",
  },
  {
    title: "Phòng ngủ giữa",
    body: "Điểm yếu kinh điển nhà ống. Xử lý bằng tường kính vào giếng 1.50 m, sơn trắng, sàn sồi sáng, cửa sổ trên cao — không để phòng này thành ‘hộp tối’.",
  },
  {
    title: "Vật liệu dẫn sáng",
    body: "Tường trắng ấm, lan can kính, gạch lớn mạch mảnh, kính low-e 2 lớp. Tránh gỗ tối và hành lang đặc.",
  },
];

export const MATERIALS = [
  {
    name: "Vôi bả ấm",
    use: "Toàn bộ khối đặc mặt tiền",
    swatch: "bg-mat-plaster",
    note: "Trắng ngà, không trắng lạnh. Bóng đổ của lam gỗ hiện rõ.",
  },
  {
    name: "Teak / gỗ tếch",
    use: "Lam đứng tầng 2, loggia, sàn tum",
    swatch: "bg-mat-teak",
    note: "40 × 80 mm, khoảng 80 mm. Bộ lọc nắng, nhịp đứng cho mặt 5 m.",
  },
  {
    name: "Than chì",
    use: "Khung nhôm, cổng, lan can sắt",
    swatch: "bg-mat-charcoal",
    note: "Sơn tĩnh điện matt. Cổng nan ngang, độ thoáng ~70%.",
  },
  {
    name: "Đá granite xám",
    use: "Bệ plinth, bậc, sân đỗ xe",
    swatch: "bg-mat-stone",
    note: "30 mm, chống trượt. Tách khối nhà khỏi mặt đất.",
  },
  {
    name: "Kính low-E",
    use: "Khách, loggia, phòng thờ, giếng",
    swatch: "bg-mat-glass",
    note: "2 lớp, khung nhôm cầu cách nhiệt. Mái giếng: cường lực + khe gió.",
  },
  {
    name: "Sồi sáng",
    use: "Sàn trong nhà, cầu thang",
    swatch: "bg-mat-oak",
    note: "Engineered 14/3 mm. Phản xạ sáng xuống cuối nhà.",
  },
];

export const FENG_SHUI = [
  "Cầu thang lùi 9.6 m, không đối cửa chính.",
  "Bếp bên, sau phòng khách — không nhìn thẳng từ cổng.",
  "Trục ướt T1–T2 thẳng đứng, không đè bếp, không kề phòng thờ.",
  "Phòng thờ cao nhất, sạch, ban thờ nhìn ra khoảng thoáng mặt tiền.",
  "Người lớn tuổi ở tầng đất, cuối nhà, gần WC, tránh phố.",
  "Sân trước trồng cây thấp tán — chặn sát khí đường, giữ tầm nhìn.",
  "Hai khoảng nước/xanh (trước–sau) ôm khối nhà, khí đi được, không tù.",
];

export const MJ_PROMPT = `Photorealistic architectural rendering of a contemporary 5-meter-wide Vietnamese townhouse on a 5x30 meter urban lot, two storeys plus a setback rooftop tum. Cubic minimal volumes, warm off-white lime plaster, charcoal aluminum frames, vertical teak sun-shading fins across the second-floor window, recessed ground-floor full-height glass living room opening onto an 8-meter front garden with one dark sedan on stone pavers, tropical underplanting, and a slim horizontal-slat metal gate. Rooftop: timber deck facing the street and a quiet glass-walled ancestral room set back 4.5 meters. Granite plinth, no people, soft morning sunlight, long shadows, editorial architecture photography, 35mm --ar 16:9 --style raw --v 6.1`;

/* ── Cao độ (floor-to-floor, đo từ cốt vỉa hè ±0.00) ─────────────────────── */

export const LEVELS = [
  { key: "san", label: "Sân / vỉa hè", z: 0, note: "±0.00" },
  { key: "t1", label: "Cốt nền tầng 1", z: 0.45, note: "3 bậc tam cấp 150 mm" },
  { key: "t2", label: "Sàn tầng 2", z: 4.05, note: "cao độ tầng 3.60 m" },
  { key: "tum", label: "Sàn tum", z: 7.35, note: "cao độ tầng 3.30 m" },
  { key: "mai", label: "Mái tum", z: 10.35, note: "cao độ tầng 3.00 m" },
  { key: "dinh", label: "Đỉnh lan can mái", z: 11.2, note: "tổng cao 11.20 m" },
] as const;

export type DetailId = "section" | "elevation" | "stair" | "void" | "wet";

export type Detail = {
  id: DetailId;
  code: string;
  label: string;
  title: string;
  scale: string;
  blurb: string;
  specs: { k: string; v: string }[];
  notes: string[];
};

export const DETAILS: Detail[] = [
  {
    id: "section",
    code: "CT-01",
    label: "Mặt cắt dọc",
    title: "Mặt cắt A–A qua giếng trời và lõi thang",
    scale: "Tỷ lệ 1:150 · đơn vị mét",
    blurb:
      "Cắt dọc suốt 30 m lô đất. Thấy được cả ba lớp: sân trước 8 m, khối nhà 18 m ba tầng, sân sau 4 m — và ống giếng trời xuyên từ sàn tầng 1 lên mái tum.",
    specs: [
      { k: "Cao độ tầng", v: "3.60 / 3.30 / 3.00 m" },
      { k: "Thông thủy sau dầm", v: "3.30 / 3.00 / 2.70 m" },
      { k: "Cốt nền tầng 1", v: "+0.45 m so với vỉa hè" },
      { k: "Tổng cao công trình", v: "11.20 m" },
      { k: "Giếng trời", v: "1.50 × 2.80 m, thông 3 tầng" },
      { k: "Tum lùi", v: "4.50 m trước · 4.80 m sau" },
    ],
    notes: [
      "Cốt nền +0.45 m: ba bậc tam cấp 150 mm, chống ngập và tách khối nhà khỏi mặt đường.",
      "Dầm sàn 300 mm — chiều cao thông thủy hoàn thiện còn 3.30 m (T1), 3.00 m (T2), 2.70 m (tum).",
      "Ống giếng trời liên tục ba tầng, đỉnh là mái kính + khe gió: khí nóng thoát ra ở điểm cao nhất.",
      "Tum lùi 4.50 m trước để sân thượng đón sáng cho phòng thờ và không đổ bóng lên kính tầng 2.",
    ],
  },
  {
    id: "elevation",
    code: "CT-02",
    label: "Mặt đứng",
    title: "Mặt đứng mặt tiền — 5.00 × 11.20 m",
    scale: "Tỷ lệ 1:100 · đơn vị mét",
    blurb:
      "Mặt tiền chỉ rộng 5 m nên nhịp phải là nhịp đứng: lam teak chia mặt kính tầng 2 thành 41 khe, bệ đá tách khối khỏi đất, tum lùi hẳn ra sau tầm nhìn.",
    specs: [
      { k: "Bề rộng mặt tiền", v: "5.00 m (tim trục)" },
      { k: "Kính phòng khách", v: "4.20 × 2.70 m, lùi 0.60 m" },
      { k: "Lam teak", v: "40 × 80 mm @ 120 mm (hở 80 mm)" },
      { k: "Lan can loggia", v: "kính 10 mm, cao 1.10 m" },
      { k: "Cổng nan ngang", v: "3.60 × 1.80 m, thoáng ~70%" },
      { k: "Bệ granite", v: "cao 0.45 m, dày 30 mm" },
    ],
    notes: [
      "Khối tầng 2 nhô ra 0.60 m so với kính tầng 1 — mái hiên tự nhiên, che mưa tạt và nắng đứng bóng.",
      "41 thanh lam đứng suốt chiều cao loggia: buổi sáng đổ bóng sọc lên tường vôi bả, buổi chiều chắn nắng Tây.",
      "Tum chỉ nhìn thấy phần lan can — người đứng ở vỉa hè gần như không thấy khối tum.",
      "Không đắp phào chỉ. Toàn bộ hiệu ứng mặt tiền đến từ bóng đổ của lam và độ sâu 0.60 m của hốc kính.",
    ],
  },
  {
    id: "stair",
    code: "CT-03",
    label: "Cầu thang",
    title: "Chi tiết cầu thang — 22 bậc, hai vế, chiếu nghỉ giữa",
    scale: "Tỷ lệ 1:50 · đơn vị milimét",
    blurb:
      "Cao độ tầng 3.60 m chia đúng 22 bậc × 164 mm. Hai vế 11 bậc gập lại quanh chiếu nghỉ để rút chiều dài từ 5.70 m xuống còn 3.60 m chiều sâu lõi.",
    specs: [
      { k: "Số bậc / tầng", v: "22 bậc × 164 mm = 3 608 mm" },
      { k: "Mặt bậc", v: "260 mm + mũi bậc 25 mm" },
      { k: "Công thức bước chân", v: "2R + T = 588 mm" },
      { k: "Độ dốc", v: "32.2°" },
      { k: "Bản thang", v: "1.00 m · chiếu nghỉ 1.05 × 2.10 m" },
      { k: "Thông thủy đầu người", v: "≥ 2.10 m" },
      { k: "Lan can / tay vịn", v: "kính 10 mm cao 1.10 m · tay vịn 900 mm" },
    ],
    notes: [
      "Vế 1 lên 11 bậc (1.804 m) — chiếu nghỉ — vế 2 lên 11 bậc, đổi hướng 180°.",
      "Mũi bậc gỗ sồi bo R8 + hai rãnh chống trượt; bậc hở không dùng vì nhà có người lớn tuổi.",
      "Gầm vế thứ nhất tại tầng 1 làm kho kỹ thuật: tủ điện, lọc nước, máy bơm.",
      "Triển khai kỹ thuật: hai vế 1.00 m + tường giữa cần lõi rộng ~2.10 m, trong khi mặt bằng ý tưởng đang ghi lõi 1.10 m. Khi lên hồ sơ xin phép phải chọn: nới lõi thang sang phần giếng trời, hoặc chuyển sang thang một vế thẳng dài 5.70 m.",
    ],
  },
  {
    id: "void",
    code: "CT-04",
    label: "Giếng trời",
    title: "Chi tiết mái kính giếng trời và khe thoát khí",
    scale: "Tỷ lệ 1:25 · đơn vị milimét",
    blurb:
      "Giếng trời chỉ hoạt động khi có lối cho khí nóng đi ra. Mái kính đậy nước mưa, khe gió chu vi 150 mm đưa khí ra — mưa không vào, nóng không đọng.",
    specs: [
      { k: "Ô thông tầng", v: "1.50 × 2.80 m (T2 thu còn 1.40 m)" },
      { k: "Mái kính", v: "cường lực dán 8 + 8 mm, dốc 5%" },
      { k: "Khe gió chu vi", v: "150 mm, lam chắn mưa 3 lớp" },
      { k: "Máng thu nước", v: "inox 200 × 100, ống thoát D90" },
      { k: "Khung đỡ", v: "hộp thép mạ 100 × 50 × 2.5 mm @ 900" },
      { k: "Lan can quanh giếng", v: "kính 10 mm cao 1.10 m" },
    ],
    notes: [
      "Kính dán (laminated) chứ không phải cường lực đơn — vỡ thì mảnh dính màng PVB, không rơi xuống giếng.",
      "Khe gió đặt cao hơn mặt kính: khí nóng bốc lên thoát ngang, mưa tạt bị ba lớp lam chặn lại.",
      "Lưới inox 1.2 mm chống côn trùng đặt sau lam, tháo được để vệ sinh.",
      "Sàn đáy giếng ở tầng 1 lát đá, dốc 1% về ga thu — dội rửa và tưới cây thoải mái.",
    ],
  },
  {
    id: "wet",
    code: "CT-05",
    label: "Trục ướt",
    title: "Trục ướt WC tầng 1 – tầng 2 và hộp gen kỹ thuật",
    scale: "Tỷ lệ 1:50 · đơn vị milimét",
    blurb:
      "Hai WC chồng đúng trục nên chỉ cần một hộp gen. Đường ống ngắn, ít co, không chạy ngang trên trần bếp và không đi qua phòng thờ.",
    specs: [
      { k: "Hộp gen", v: "300 × 300 mm, kề tường lõi thang" },
      { k: "Ống thoát xí", v: "D110 PVC, dốc 2%" },
      { k: "Ống thoát sàn", v: "D90 · lavabo D60" },
      { k: "Ống thông hơi", v: "D60 lên quá mái tum 700 mm" },
      { k: "Hạ cốt sàn WC", v: "50 mm, dốc 1.5% về phễu" },
      { k: "Chống thấm", v: "2 lớp gốc xi măng, lên chân tường 300 mm" },
    ],
    notes: [
      "WC tầng 2 (2.10 × 2.80 m) nằm trọn trên WC tầng 1 (1.80 × 2.40 m) — mọi ống đứng gom về một hộp.",
      "Không có nhánh ống nào chạy ngang qua trần bếp hay trần phòng ngủ: rò rỉ chỉ ảnh hưởng đúng ô WC.",
      "Ống thông hơi bắt buộc — thiếu nó thì xả nước tầng 2 sẽ hút cạn bẫy nước tầng 1 và bốc mùi.",
      "Hộp gen bọc bông thủy tinh 25 mm chống ồn nước chảy, có cửa thăm 300 × 400 tại mỗi tầng.",
    ],
  },
];
