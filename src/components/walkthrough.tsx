import { useCallback, useEffect, useRef, useState } from "react";
import type * as THREE from "three";
import { Pause, Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ── Kịch bản camera: ngoài phố → sân → tầng 1 → giếng trời → tầng 2 → tum ── */

type Shot = {
  label: string;
  note: string;
  pos: [number, number, number];
  look: [number, number, number];
};

const SHOTS: Shot[] = [
  {
    label: "Từ phố",
    note: "Mặt tiền 5 m. Khối tầng 2 nhô ra 0.60 m, che nắng và mưa tạt cho kính tầng 1.",
    pos: [2.5, 2.5, -7.5],
    look: [2.5, 4.6, 13],
  },
  {
    label: "Qua cổng",
    note: "Cổng nan ngang cao 1.80 m, độ thoáng ~70% — nhìn thấy sân nhưng vẫn kín đáo.",
    pos: [2.5, 1.7, 0.6],
    look: [2.5, 3.2, 11],
  },
  {
    label: "Sân trước 8 m",
    note: "Chỗ đỗ một xe dọc theo chiều sâu, lối đi 1.20 m bên phải, cây thấp tán chắn bụi phố.",
    pos: [3.7, 1.7, 4.2],
    look: [2.2, 2.6, 10.5],
  },
  {
    label: "Hiên và tam cấp",
    note: "Nền nhà +0.45 m so với sân — ba bậc 150 mm, hiên sâu 0.60 m dưới khối tầng 2.",
    pos: [2.6, 2.0, 7.3],
    look: [2.4, 2.2, 13],
  },
  {
    label: "Phòng khách",
    note: "Kính trượt 4.20 m mở ra sân. Sofa tựa tường biên, trục nhìn chạy suốt về giếng trời.",
    pos: [3.6, 2.05, 10.4],
    look: [2.0, 1.9, 15.5],
  },
  {
    label: "Bếp và bàn ăn",
    note: "Bếp chữ I dọc tường trái 3.80 m, bàn ăn 6 ghế bên phải, mở thông với phòng khách.",
    pos: [2.6, 2.05, 12.8],
    look: [1.2, 1.7, 16.8],
  },
  {
    label: "Giếng trời",
    note: "Lõi sáng thông ba tầng lên mái kính. Đây là chỗ khí nóng thoát ra khỏi nhà.",
    pos: [2.75, 2.05, 19.2],
    look: [2.7, 9.6, 19.9],
  },
  {
    label: "Cầu thang",
    note: "22 bậc × 164 mm, hai vế quanh chiếu nghỉ, lan can kính để không chắn sáng.",
    pos: [2.95, 4.8, 20.9],
    look: [1.5, 3.4, 18.4],
  },
  {
    label: "Tầng 2",
    note: "Lên tới sàn +4.05 m. Lõi thang là điểm phân phối cho cả ba phòng ngủ.",
    pos: [2.2, 5.65, 17.0],
    look: [2.5, 5.4, 13.5],
  },
  {
    label: "Phòng ngủ 03",
    note: "Phòng giữa vay sáng từ giếng trời bằng tường kính — điểm yếu kinh điển của nhà ống.",
    pos: [2.5, 5.65, 15.4],
    look: [2.4, 5.4, 10.5],
  },
  {
    label: "Master và loggia",
    note: "Phòng ngủ 02 nhìn ra loggia mặt tiền, lam teak lọc nắng thành sọc trên sàn.",
    pos: [2.5, 5.65, 10.6],
    look: [2.5, 5.2, 6.5],
  },
  {
    label: "Quay về lõi thang",
    note: "Trong nhà ống, mọi phòng đều tựa vào một lõi giao thông duy nhất — không có hành lang thừa.",
    pos: [2.45, 5.65, 17.4],
    look: [2.7, 7.4, 19.4],
  },
  {
    label: "Lên tum",
    note: "Vế thang thứ hai đưa lên cốt +7.35 m, đi sát miệng giếng trời.",
    pos: [2.8, 7.95, 19.7],
    look: [2.4, 8.8, 17.0],
  },
  {
    label: "Phòng thờ",
    note: "Ban thờ tựa tường hậu, mặt nhìn xuyên kính ra sân thượng — không gian sạch, cao nhất nhà.",
    pos: [2.5, 8.95, 13.6],
    look: [2.5, 8.7, 17.0],
  },
  {
    label: "Sân thượng",
    note: "Sân thượng 5.00 × 4.50 m trước phòng thờ: sàn teak, lan can kính, mở thẳng ra phố.",
    pos: [2.7, 9.0, 12.1],
    look: [2.2, 7.6, 3.0],
  },
];

const DURATION = 60;

export function Walkthrough() {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progressRef = useRef(0);
  const playingRef = useRef(true);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [pct, setPct] = useState(0);

  const shotIndex = Math.min(SHOTS.length - 1, Math.floor((pct / 100) * (SHOTS.length - 1) + 0.0001));
  const shot = SHOTS[shotIndex];

  const seek = useCallback((value: number) => {
    progressRef.current = Math.min(1, Math.max(0, value));
    setPct(Math.round(progressRef.current * 100));
  }, []);

  const toggle = useCallback(() => {
    if (progressRef.current >= 1) progressRef.current = 0;
    playingRef.current = !playingRef.current;
    setPlaying(playingRef.current);
  }, []);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    const host = hostRef.current;
    if (!canvas || !host) return;

    let stop = false;
    let cleanup = () => {};

    (async () => {
      let T: typeof import("three");
      try {
        T = await import("three");
      } catch {
        if (!stop) setFailed(true);
        return;
      }
      if (stop) return;

      const renderer = new T.WebGLRenderer({ canvas, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = T.PCFSoftShadowMap;
      renderer.toneMapping = T.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;

      const scene = new T.Scene();
      scene.background = new T.Color("#dbe3ea");
      scene.fog = new T.Fog("#dbe3ea", 44, 96);

      const camera = new T.PerspectiveCamera(58, 16 / 9, 0.08, 220);

      const mats = {
        plaster: new T.MeshStandardMaterial({ color: "#f0ebe1", roughness: 0.92 }),
        plasterIn: new T.MeshStandardMaterial({ color: "#f6f2ea", roughness: 0.95 }),
        teak: new T.MeshStandardMaterial({ color: "#8b6f4e", roughness: 0.7 }),
        charcoal: new T.MeshStandardMaterial({ color: "#2c2c2c", roughness: 0.55, metalness: 0.35 }),
        stone: new T.MeshStandardMaterial({ color: "#8d8880", roughness: 0.9 }),
        paving: new T.MeshStandardMaterial({ color: "#a9a49b", roughness: 1 }),
        asphalt: new T.MeshStandardMaterial({ color: "#5d5b57", roughness: 1 }),
        oak: new T.MeshStandardMaterial({ color: "#d8c3a5", roughness: 0.75 }),
        glass: new T.MeshStandardMaterial({
          color: "#c5d0d4",
          roughness: 0.08,
          metalness: 0.1,
          transparent: true,
          opacity: 0.24,
        }),
        green: new T.MeshStandardMaterial({ color: "#4f6b4a", roughness: 1 }),
        trunk: new T.MeshStandardMaterial({ color: "#6b5844", roughness: 1 }),
        fabric: new T.MeshStandardMaterial({ color: "#b9b3a6", roughness: 1 }),
        neighbour: new T.MeshStandardMaterial({ color: "#cdc7bd", roughness: 1 }),
        dark: new T.MeshStandardMaterial({ color: "#3a3d42", roughness: 0.4, metalness: 0.4 }),
      };
      type MatKey = keyof typeof mats;

      const unit = new T.BoxGeometry(1, 1, 1);
      const disposables: THREE.BufferGeometry[] = [unit];

      const box = (
        x: [number, number],
        y: [number, number],
        z: [number, number],
        m: MatKey,
        opts: { shadow?: boolean } = {},
      ) => {
        const mesh = new T.Mesh(unit, mats[m]);
        mesh.scale.set(
          Math.max(0.001, x[1] - x[0]),
          Math.max(0.001, y[1] - y[0]),
          Math.max(0.001, z[1] - z[0]),
        );
        mesh.position.set((x[0] + x[1]) / 2, (y[0] + y[1]) / 2, (z[0] + z[1]) / 2);
        const shadow = opts.shadow ?? true;
        mesh.castShadow = shadow && m !== "glass";
        mesh.receiveShadow = shadow;
        scene.add(mesh);
        return mesh;
      };

      /* ── bối cảnh đô thị ─────────────────────────────────────────────── */
      box([-9, 14], [-0.14, -0.02], [-11, 0], "asphalt");
      box([-9, 14], [-0.03, 0.03], [-1.3, 0], "paving");
      box([0, 5], [-0.08, 0.02], [0, 30], "paving");
      box([-6.4, -0.2], [0, 12.6], [7.4, 26.6], "neighbour");
      box([5.2, 11.6], [0, 10.8], [7.4, 26.6], "neighbour");
      box([-0.2, 0], [0, 2.2], [0, 8], "plaster");
      box([5, 5.2], [0, 2.2], [0, 8], "plaster");
      box([-0.2, 5.2], [0, 2.4], [29.8, 30], "plaster");

      // cổng nan ngang
      box([0, 0.16], [0, 1.85], [-0.06, 0.16], "charcoal");
      box([4.84, 5], [0, 1.85], [-0.06, 0.16], "charcoal");
      for (let i = 0; i < 6; i++) {
        box([0.16, 4.84], [0.22 + i * 0.28, 0.34 + i * 0.28], [0.02, 0.08], "charcoal");
      }

      // xe + tiểu cảnh sân trước
      box([1.0, 2.9], [0.28, 1.02], [1.2, 5.8], "dark");
      box([1.16, 2.74], [1.02, 1.46], [2.3, 4.6], "dark");
      box([0.35, 4.65], [0.02, 0.06], [5.6, 7.55], "stone");
      const tree = (cx: number, cz: number, r: number, h: number, base = 0) => {
        box([cx - 0.05, cx + 0.05], [base, base + h], [cz - 0.05, cz + 0.05], "trunk");
        const canopy = new T.Mesh(new T.IcosahedronGeometry(r, 1), mats.green);
        canopy.position.set(cx, base + h + r * 0.7, cz);
        canopy.castShadow = true;
        disposables.push(canopy.geometry);
        scene.add(canopy);
      };
      tree(4.1, 6.5, 0.62, 1.1);
      tree(0.95, 6.9, 0.42, 0.8);
      tree(2.6, 27.4, 0.75, 1.3);
      tree(1.1, 28.5, 0.4, 0.7);
      tree(4.0, 28.3, 0.38, 0.7);
      box([0.3, 4.7], [0, 0.04], [26.2, 29.6], "green");

      // bậc tam cấp
      for (let i = 0; i < 3; i++) {
        box([1.2, 3.8], [0, 0.15 * (i + 1)], [7.55 + i * 0.15, 8.0], "stone");
      }

      /* ── sàn, mái ────────────────────────────────────────────────────── */
      box([0, 5], [0.15, 0.45], [8, 26], "stone");
      const slabs: [number, number][][] = [
        [
          [0, 5],
          [3.75, 4.05],
          [8, 17.6],
        ],
        [
          [0, 5],
          [3.75, 4.05],
          [21.2, 26],
        ],
        [
          [3.4, 5],
          [3.75, 4.05],
          [17.6, 21.2],
        ],
        [
          [0, 5],
          [7.05, 7.35],
          [8, 17.6],
        ],
        [
          [0, 5],
          [7.05, 7.35],
          [21.2, 26],
        ],
        [
          [3.4, 5],
          [7.05, 7.35],
          [17.6, 21.2],
        ],
        [
          [0, 5],
          [10.05, 10.35],
          [12.5, 17.6],
        ],
        [
          [3.4, 5],
          [10.05, 10.35],
          [17.6, 21.2],
        ],
      ];
      slabs.forEach(([x, y, z]) => box(x, y, z, "plaster"));

      // sàn gỗ trong nhà
      box([0.2, 4.8], [0.45, 0.47], [8.2, 25.8], "oak");
      box([0.2, 4.8], [4.05, 4.07], [8.2, 17.6], "oak");
      box([0.2, 4.8], [4.05, 4.07], [21.2, 25.8], "oak");
      box([3.4, 4.8], [4.05, 4.07], [17.6, 21.2], "oak");
      box([0.2, 4.8], [7.35, 7.37], [12.6, 17.6], "oak");
      box([3.4, 4.8], [7.35, 7.37], [17.6, 21.1], "oak");
      // sàn gỗ ngoài trời tum
      box([0.2, 4.8], [7.35, 7.38], [8.2, 12.5], "teak");

      /* ── tường biên ──────────────────────────────────────────────────── */
      const sideWalls: [number, number][] = [
        [0, 0.2],
        [4.8, 5],
      ];
      sideWalls.forEach(([a, b]) => {
        box([a, b], [0.45, 3.75], [8, 26], "plaster");
        box([a, b], [4.05, 7.05], [8, 26], "plaster");
        box([a, b], [7.35, 10.05], [12.5, 21.2], "plaster");
        box([a, b], [7.35, 8.45], [8, 12.5], "plaster");
        box([a, b], [7.35, 8.45], [21.2, 26], "plaster");
      });
      box([0, 5], [7.35, 8.45], [8, 8.2], "plaster");
      box([0, 5], [7.35, 8.45], [25.8, 26], "plaster");

      // tường hậu + cửa sổ phòng ngủ cuối nhà
      [
        [0.45, 3.75],
        [4.05, 7.05],
      ].forEach(([y0, y1]) => {
        box([0, 0.9], [y0, y1], [25.8, 26], "plaster");
        box([4.1, 5], [y0, y1], [25.8, 26], "plaster");
        box([0.9, 4.1], [y0, y0 + 0.45], [25.8, 26], "plaster");
        box([0.9, 4.1], [y0 + 2.25, y1], [25.8, 26], "plaster");
        box([0.9, 4.1], [y0 + 0.45, y0 + 2.25], [25.86, 25.94], "glass");
      });

      /* ── mặt tiền ────────────────────────────────────────────────────── */
      box([0, 0.4], [0.45, 3.75], [8, 8.2], "plaster");
      box([4.6, 5], [0.45, 3.75], [8, 8.2], "plaster");
      box([0.4, 4.6], [0.45, 3.15], [8.55, 8.63], "glass");
      box([0.4, 4.6], [3.15, 3.75], [8.5, 8.68], "plasterIn");
      box([0.2, 4.8], [4.05, 5.15], [8.0, 8.06], "glass");
      box([0.2, 4.8], [4.05, 6.75], [9.05, 9.13], "glass");
      box([0.2, 4.8], [6.75, 7.05], [9.0, 9.18], "plasterIn");
      for (let i = 0; i < 41; i++) {
        const x = 0.06 + i * 0.12;
        box([x, x + 0.04], [4.15, 7.25], [7.96, 8.04], "teak");
      }
      // kính phòng thờ ra sân thượng, chừa lối đi giữa
      box([0.2, 2.0], [7.35, 10.05], [12.5, 12.58], "glass");
      box([3.0, 4.8], [7.35, 10.05], [12.5, 12.58], "glass");
      box([2.0, 3.0], [9.55, 10.05], [12.5, 12.58], "plasterIn");
      // lan can kính sân thượng và sân phơi
      box([0.2, 4.8], [8.45, 9.5], [8.06, 8.12], "glass");

      /* ── vách ngăn trong nhà ─────────────────────────────────────────── */
      const partition = (
        z: [number, number],
        y: [number, number],
        door: [number, number],
        m: MatKey = "plasterIn",
      ) => {
        box([0, door[0]], y, z, m);
        box([door[1], 5], y, z, m);
        box(door, [y[0] + 2.1, y[1]], z, m);
      };
      partition([17.55, 17.65], [0.45, 3.75], [2.0, 3.0]);
      partition([21.15, 21.25], [0.45, 3.75], [3.2, 4.2]);
      partition([13.35, 13.45], [4.05, 7.05], [2.0, 3.0]);
      partition([17.55, 17.65], [4.05, 7.05], [1.8, 3.0]);
      partition([21.15, 21.25], [4.05, 7.05], [3.2, 4.2]);
      partition([17.1, 17.2], [7.35, 10.05], [1.9, 2.9]);
      box([0, 5], [7.35, 10.05], [21.1, 21.2], "plasterIn");

      // WC tầng 1 và tầng 2 (khối kính mờ + tường)
      box([3.45, 3.55], [0.45, 3.75], [18.3, 20.8], "plasterIn");
      box([3.45, 5], [0.45, 3.75], [18.25, 18.35], "plasterIn");
      box([3.45, 3.55], [4.05, 7.05], [17.65, 20.5], "plasterIn");

      /* ── cầu thang + lan can giếng trời ──────────────────────────────── */
      const stair = (yBase: number, yTop: number) => {
        const r = (yTop - yBase) / 22;
        for (let i = 1; i <= 10; i++) {
          box([0.05, 1.05], [yBase, yBase + i * r], [17.6 + (i - 1) * 0.26, 17.6 + i * 0.26], "oak");
        }
        box([0.05, 2.05], [yBase + 11 * r - 0.18, yBase + 11 * r], [20.2, 21.2], "oak");
        for (let j = 1; j <= 10; j++) {
          box(
            [1.1, 2.1],
            [yBase, yBase + (11 + j) * r],
            [20.2 - j * 0.26, 20.2 - (j - 1) * 0.26],
            "oak",
          );
        }
      };
      stair(0.45, 4.05);
      stair(4.05, 7.35);

      [4.05, 7.35].forEach((y) => {
        box([2.1, 3.4], [y, y + 1.1], [17.6, 17.66], "glass");
        box([3.34, 3.4], [y, y + 1.1], [17.6, 21.2], "glass");
        box([0, 3.4], [y, y + 1.1], [21.14, 21.2], "glass");
      });

      /* ── mái kính giếng trời ─────────────────────────────────────────── */
      box([0, 3.5], [10.35, 10.7], [17.3, 17.5], "plaster");
      box([0, 3.5], [10.35, 10.7], [21.3, 21.5], "plaster");
      box([3.4, 3.5], [10.35, 10.7], [17.3, 21.5], "plaster");
      box([0, 3.55], [10.86, 10.92], [17.25, 21.55], "glass", { shadow: false });

      /* ── nội thất ────────────────────────────────────────────────────── */
      // phòng khách
      box([0.45, 3.0], [0.47, 1.15], [10.0, 10.9], "fabric");
      box([0.45, 1.15], [0.47, 1.15], [10.0, 12.2], "fabric");
      box([1.6, 2.8], [0.47, 0.85], [11.2, 11.9], "teak");
      box([4.3, 4.78], [1.0, 1.75], [10.4, 12.2], "dark");
      // bếp + ăn
      box([0.25, 0.85], [0.47, 1.37], [13.8, 17.4], "plasterIn");
      box([2.35, 3.95], [0.47, 1.22], [14.6, 15.5], "teak");
      // giường các tầng
      box([1.5, 3.1], [0.47, 1.02], [22.4, 24.4], "fabric");
      box([1.4, 3.2], [4.07, 4.62], [10.4, 12.4], "fabric");
      box([1.4, 3.2], [4.07, 4.62], [14.4, 16.4], "fabric");
      box([1.5, 3.1], [4.07, 4.62], [22.4, 24.4], "fabric");
      // bàn thờ + tiểu cảnh tum
      box([1.5, 3.5], [7.37, 8.55], [16.5, 17.05], "teak");
      box([0.5, 1.3], [7.38, 7.9], [9.0, 9.8], "stone");
      box([3.7, 4.5], [7.38, 7.78], [9.4, 10.0], "stone");
      tree(0.9, 9.4, 0.42, 0.35, 7.9);
      tree(4.1, 9.7, 0.34, 0.3, 7.78);
      // cây trong giếng trời
      tree(2.55, 20.6, 0.4, 1.2, 0.47);

      /* ── ánh sáng ────────────────────────────────────────────────────── */
      scene.add(new T.HemisphereLight(0xe6edf3, 0xc4bcac, 1.7));
      const sun = new T.DirectionalLight(0xfff2df, 2.4);
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
      sun.shadow.bias = -0.0006;
      scene.add(sun);
      scene.add(sun.target);
      const fill = new T.DirectionalLight(0xdce6ee, 0.75);
      fill.position.set(10, 12, 34);
      scene.add(fill);
      const shaft = new T.PointLight(0xfff0d8, 26, 20, 2);
      shaft.position.set(2.7, 9.2, 19.4);
      scene.add(shaft);

      /* ── đường bay ───────────────────────────────────────────────────── */
      const posCurve = new T.CatmullRomCurve3(
        SHOTS.map((s) => new T.Vector3(...s.pos)),
        false,
        "catmullrom",
        0.35,
      );
      const lookCurve = new T.CatmullRomCurve3(
        SHOTS.map((s) => new T.Vector3(...s.look)),
        false,
        "catmullrom",
        0.35,
      );
      const p = new T.Vector3();
      const l = new T.Vector3();

      const resize = () => {
        const w = host.clientWidth;
        const h = Math.round((w * 9) / 16);
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
        const dt = Math.min(0.06, (now - last) / 1000);
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
          const mesh = o as THREE.Mesh;
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

  return (
    <section id="phoi-canh" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">06 — Phối cảnh 3D</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Đi một vòng: từ vỉa hè vào tới bàn thờ
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Mô hình dựng thẳng từ kích thước trong{" "}
          <span className="text-ink">house-data</span> — không phải ảnh AI, nên tỉ lệ
          phòng, chiều cao tầng và vị trí giếng trời đúng như mặt bằng. Lõi thang được
          dựng theo phương án rộng 2.10 m nêu trong ghi chú CT-03.
        </p>

        <div
          ref={hostRef}
          className="relative mt-8 aspect-photo w-full overflow-hidden rounded-xl bg-ink shadow-[var(--shadow-border)]"
        >
          <canvas ref={canvasRef} className={cn("size-full", !active && "hidden")} />

          {!active ? (
            <button
              type="button"
              onClick={() => setActive(true)}
              className="group absolute inset-0 size-full"
              aria-label="Bắt đầu phối cảnh 3D"
            >
              <img
                src="/images/facade.jpg"
                alt="Phối cảnh mặt tiền ngôi nhà"
                className="size-full object-cover opacity-70 transition-opacity duration-300 group-hover:opacity-85"
              />
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <span className="flex size-16 items-center justify-center rounded-full bg-paper/90 text-ink">
                  <Play className="size-6 translate-x-0.5" />
                </span>
                <span className="font-display text-2xl text-paper">Bắt đầu tham quan</span>
                <span className="text-xs tracking-wide text-paper/80">
                  Dựng 3D thời gian thực · 60 giây · 15 điểm dừng
                </span>
              </span>
            </button>
          ) : null}

          {active && !ready && !failed ? (
            <div className="absolute inset-0 grid place-items-center text-sm text-paper/80">
              Đang dựng mô hình…
            </div>
          ) : null}

          {failed ? (
            <div className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-paper/85">
              Trình duyệt không khởi tạo được WebGL. Xem lại mặt bằng và bản vẽ chi tiết
              phía trên nhé.
            </div>
          ) : null}

          {active && ready ? (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent p-4 sm:p-6">
              <p className="text-[11px] tracking-[0.2em] text-paper/70 uppercase">
                {String(shotIndex + 1).padStart(2, "0")} / {SHOTS.length}
              </p>
              <p className="mt-1 font-display text-2xl text-paper">{shot.label}</p>
              <p className="mt-1 max-w-xl text-xs leading-relaxed text-paper/80 sm:text-sm">
                {shot.note}
              </p>
              <div className="pointer-events-auto mt-4 flex items-center gap-3">
                <Button type="button" variant="invert" size="sm" className="shrink-0 whitespace-nowrap" onClick={toggle}>
                  {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
                  {playing ? "Tạm dừng" : pct >= 100 ? "Xem lại" : "Tiếp tục"}
                </Button>
                <input
                  type="range"
                  min={0}
                  max={1000}
                  value={Math.round((pct / 100) * 1000)}
                  onChange={(e) => seek(Number(e.target.value) / 1000)}
                  aria-label="Vị trí trong hành trình"
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-paper/30 accent-paper"
                />
                <Button
                  type="button"
                  variant="invert"
                  size="sm"
                  onClick={() => {
                    seek(0);
                    playingRef.current = true;
                    setPlaying(true);
                  }}
                  aria-label="Về đầu"
                >
                  <RotateCcw className="size-4" />
                </Button>
              </div>
            </div>
          ) : null}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {SHOTS.map((s, i) => (
            <li key={s.label}>
              <button
                type="button"
                onClick={() => {
                  if (!active) setActive(true);
                  seek(i / (SHOTS.length - 1));
                }}
                className={cn(
                  "h-9 rounded-md px-3 text-xs transition-colors duration-150",
                  active && i === shotIndex
                    ? "bg-sage text-accent-fg"
                    : "bg-paper text-ink-soft hover:text-ink",
                )}
              >
                <span className="tabular-nums opacity-60">{String(i + 1).padStart(2, "0")}</span>
                <span className="ml-1.5">{s.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
