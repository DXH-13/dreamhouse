import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

/* Trang dựng video 1920×1080. scripts/render-video.mjs gọi window.__tour.frame(t) cho từng khung hình
   rồi chụp lại; mở /render trên trình duyệt để xem chạy thời gian thực (?t=30 để dừng ở một giây). */

export const Route = createFileRoute("/render")({ component: Render });

const W = 1920, H = 1080;

declare global {
  interface Window {
    __tour?: { duration: number; fps: number; frame: (t: number) => void };
  }
}

function Render() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const capRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const gradRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let stop = false;
    let raf = 0;
    (async () => {
      const THREE = await import("three");
      const { buildHouse, P } = await import("@/lib/house-scene");
      const tour = await import("@/lib/tour");
      const { FLOORS } = await import("@/lib/house-data");
      await document.fonts.ready;
      if (stop || !canvasRef.current) return;

      const { RoomEnvironment } = await import("three/examples/jsm/environments/RoomEnvironment.js");
      const { EffectComposer } = await import("three/examples/jsm/postprocessing/EffectComposer.js");
      const { RenderPass } = await import("three/examples/jsm/postprocessing/RenderPass.js");
      const { GTAOPass } = await import("three/examples/jsm/postprocessing/GTAOPass.js");
      const { OutputPass } = await import("three/examples/jsm/postprocessing/OutputPass.js");
      if (stop || !canvasRef.current) return;
      const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, preserveDrawingBuffer: true });
      // dựng 2× rồi trình duyệt thu về 1920×1080 khi chụp: cạnh mảnh, không răng cưa
      const DPR = Number(new URLSearchParams(location.search).get("dpr") ?? 2);
      renderer.setPixelRatio(DPR);
      renderer.setSize(W, H, false);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      renderer.localClippingEnabled = true;

      const house = buildHouse();
      const { scene } = house;
      // phản chiếu phòng studio cho đá, kim loại, kính; mặt cắt áp cho mọi vật liệu (cả lượt AO)
      scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04).texture;
      scene.environmentIntensity = 0.22;
      renderer.clippingPlanes = [house.cut];
      const camera = new THREE.PerspectiveCamera(58, W / H, 0.06, 600);

      // đổ bóng góc (GTAO): chân tường, gầm tủ, khe bậc — kính và nét mực không che sáng
      const composer = new EffectComposer(renderer);
      composer.setPixelRatio(DPR);
      composer.setSize(W, H);
      composer.addPass(new RenderPass(scene, camera));
      const ao = new GTAOPass(scene, camera, W * DPR, H * DPR);
      ao.updateGtaoMaterial({ radius: 0.45, distanceExponent: 1.4, thickness: 1.2, scale: 1.1, samples: 16 });
      ao.updatePdMaterial({ radius: 6, samples: 16 });
      ao.blendIntensity = 1.0;
      const aoAny = ao as unknown as { _overrideVisibility: () => void; _visibilityCache: unknown[] };
      const hideLines = aoAny._overrideVisibility.bind(ao);
      aoAny._overrideVisibility = () => {
        hideLines();
        scene.traverse((o) => {
          if (o instanceof THREE.Mesh && o.visible && (o.material as { transparent: boolean }).transparent) {
            o.visible = false;
            aoAny._visibilityCache.push(o);
          }
        });
      };
      composer.addPass(ao);
      composer.addPass(new OutputPass());
      // nền đi qua OutputPass (ACES): nghịch đảo trước để giấy/trời ra đúng màu như khi chưa có hậu kỳ
      const outInv = new THREE.Matrix3().set(1.60475, -0.53108, -0.07367, -0.10208, 1.10813, -0.00605, -0.00327, -0.07276, 1.07602).invert();
      const inInv = new THREE.Matrix3().set(0.59719, 0.35458, 0.04823, 0.076, 0.90834, 0.01566, 0.0284, 0.13383, 0.83777).invert();
      const unTone = (hex: string) => {
        const c = new THREE.Color(hex);
        const y = new THREE.Vector3(c.r, c.g, c.b).applyMatrix3(outInv);
        const x = [y.x, y.y, y.z].map((v) => {
          const a = 1 - 0.983729 * v, b = 0.0245786 - 0.432951 * v, k = -(0.000090537 + 0.238081 * v);
          return (-b + Math.sqrt(Math.max(b * b - 4 * a * k, 0))) / (2 * a);
        });
        const r = new THREE.Vector3(...x).applyMatrix3(inInv).multiplyScalar(0.6);
        return new THREE.Color(Math.max(0, r.x), Math.max(0, r.y), Math.max(0, r.z));
      };
      const paper = unTone("#f4f1ea"), sky = unTone("#cfd9e0");
      const fog = new THREE.Fog(sky, 55, 150);

      // nhãn phòng trên tờ mặt bằng tầng 1
      const rooms = FLOORS[0].rooms.filter((r) => r.w * r.h >= 4);
      const labels = rooms.map((r) => {
        const el = document.createElement("div");
        el.className = "absolute -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap";
        el.innerHTML = `<div style="font:500 17px Outfit;letter-spacing:.14em;text-transform:uppercase;color:#1c1a17">${r.name}</div><div style="font:400 14px Outfit;color:#6b6560;margin-top:2px">${r.w.toFixed(2)} × ${r.h.toFixed(2)}</div>`;
        labelsRef.current?.appendChild(el);
        return { el, at: P(r.x + r.w / 2, r.y + r.h / 2, 0.5) };
      });
      const tmp = new THREE.Vector3();
      const camQ = new URLSearchParams(location.search).get("cam")?.split(",").map(Number) ?? null;

      const frame = (t: number) => {
        const cam = tour.cameraAt(t);
        camera.position.copy(cam.pos);
        camera.up.copy(cam.up);
        camera.fov = cam.fov;
        camera.updateProjectionMatrix();
        camera.lookAt(cam.look);
        // ?cam=x,y,z,lx,ly,lz (toạ độ mặt bằng, z trên sàn T1) — soát một góc nhìn bất kỳ
        if (camQ) {
          camera.position.copy(P(camQ[0], camQ[1], camQ[2] + 0.45));
          camera.up.set(0, 1, 0);
          camera.lookAt(P(camQ[3], camQ[4], camQ[5] + 0.45));
        }

        const ink = tour.inkAt(t);
        house.ink.uA.value.set(ink.a[0], ink.a[1], ink.a[2]);
        house.ink.uLo.value.set(ink.lo[0], ink.lo[1], ink.lo[2]);
        house.ink.uHi.value.set(ink.hi[0], ink.hi[1], ink.hi[2]);
        house.ink.uPoche.value = tour.pocheAt(t);
        house.cut.constant = tour.cutHeight(t);
        house.gate(tour.gateAt(t));
        house.slide(tour.slideAt(t));

        const k = Math.min(1, Math.max(0, (t - 9) / 5));
        scene.background = paper.clone().lerp(sky, k);
        scene.fog = t > 11 ? fog : null;
        ao.enabled = t > 11; // tờ mặt bằng mở đầu giữ nét giấy phẳng
        composer.render();

        // lớp chữ
        const lab = tour.planLabelsAt(t);
        if (sheetRef.current) sheetRef.current.style.opacity = String(lab);
        if (gradRef.current) gradRef.current.style.opacity = String(1 - lab);
        labels.forEach(({ el, at }) => {
          tmp.copy(at).project(camera);
          el.style.left = `${((tmp.x + 1) / 2) * W}px`;
          el.style.top = `${((1 - tmp.y) / 2) * H}px`;
          el.style.opacity = String(lab);
        });
        const cap = tour.CAPTIONS.find((c) => t >= c.t0 && t < c.t1);
        const capEl = capRef.current;
        if (capEl) {
          if (cap) {
            const i = tour.CAPTIONS.indexOf(cap);
            const o = Math.min(1, (t - cap.t0) / 0.6, (cap.t1 - t) / 0.4);
            capEl.style.opacity = String(Math.max(0, o));
            capEl.style.transform = `translateY(${(1 - Math.min(1, (t - cap.t0) / 0.6)) * 12}px)`;
            const key = `${i}`;
            if (capEl.dataset.key !== key) {
              capEl.dataset.key = key;
              (capEl.children[0] as HTMLElement).textContent = `${String(i + 1).padStart(2, "0")} / ${tour.CAPTIONS.length}`;
              (capEl.children[1] as HTMLElement).textContent = cap.title;
              (capEl.children[2] as HTMLElement).textContent = cap.note;
            }
          } else capEl.style.opacity = "0";
        }
        if (fadeRef.current) fadeRef.current.style.opacity = String(tour.fadeAt(t));
      };

      window.__tour = { duration: tour.DURATION, fps: tour.FPS, frame };
      const fixed = new URLSearchParams(location.search).get("t");
      if (fixed !== null) {
        frame(Number(fixed));
        return;
      }
      if (new URLSearchParams(location.search).has("capture")) return;
      const start = performance.now();
      const loop = () => {
        frame(((performance.now() - start) / 1000) % tour.DURATION);
        raf = requestAnimationFrame(loop);
      };
      loop();
    })();

    // thu vừa khung 1920×1080 vào cửa sổ khi xem trực tiếp
    const fit = () => {
      const s = Math.min(window.innerWidth / W, window.innerHeight / H);
      if (stageRef.current) stageRef.current.style.transform = `scale(${s})`;
    };
    fit();
    window.addEventListener("resize", fit);
    return () => {
      stop = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-ink">
      <div ref={stageRef} className="relative origin-top-left overflow-hidden" style={{ width: W, height: H }}>
        <canvas ref={canvasRef} width={W} height={H} className="absolute inset-0 h-full w-full" />
        <div ref={labelsRef} className="pointer-events-none absolute inset-0" />

        <div ref={sheetRef} className="pointer-events-none absolute inset-0">
          <div className="absolute top-14 left-16">
            <p className="text-[15px] tracking-[0.32em] text-sage uppercase">Mặt bằng tầng 1 · cắt tại +1.20 m</p>
            <p className="mt-3 font-display text-[64px] leading-none text-ink">Nhà phố 5 × 30</p>
          </div>
          <div className="absolute right-16 bottom-14 text-right text-[15px] leading-relaxed text-muted">
            <p>Sân trước 8.00 · Nhà 18.00 · Sân sau 4.00</p>
            <p>2 tầng + tum · lõi thang 2.10 × 4.60 · giếng trời 1.60 × 1.60</p>
          </div>
          <div className="absolute bottom-14 left-16 flex items-center gap-3 text-[13px] text-muted">
            <span className="h-[3px] w-[60px] bg-ink" /> 5 m
          </div>
        </div>

        <div ref={gradRef} className="pointer-events-none absolute inset-x-0 bottom-0 h-[340px] bg-gradient-to-t from-black/55 to-transparent" />
        <div ref={capRef} className="pointer-events-none absolute bottom-16 left-16 max-w-[900px] opacity-0">
          <p className="text-[15px] tracking-[0.3em] text-paper/70 uppercase" />
          <p className="mt-2 font-display text-[60px] leading-tight text-paper" />
          <p className="mt-2 text-[22px] leading-relaxed text-paper/85" />
        </div>
        <div ref={fadeRef} className="pointer-events-none absolute inset-0 bg-paper opacity-0" />
      </div>
    </div>
  );
}
