import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { I as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/render-DaDW2_XD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var W = 1920;
var H = 1080;
function Render() {
	const canvasRef = (0, import_react.useRef)(null);
	const stageRef = (0, import_react.useRef)(null);
	const labelsRef = (0, import_react.useRef)(null);
	const sheetRef = (0, import_react.useRef)(null);
	const capRef = (0, import_react.useRef)(null);
	const fadeRef = (0, import_react.useRef)(null);
	const gradRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		let stop = false;
		let raf = 0;
		(async () => {
			const THREE = await import("../_libs/three.mjs").then((n) => n.l);
			const { buildHouse, P } = await import("./house-scene-D2LOrMYb.mjs");
			const tour = await import("./tour-CAB01g4Z.mjs");
			const { FLOORS } = await import("./house-data-B6isfp8C.mjs").then((n) => n.m).then((n) => n.m);
			await document.fonts.ready;
			if (stop || !canvasRef.current) return;
			const { RoomEnvironment } = await import("../_libs/three.mjs").then((n) => n.a);
			const { EffectComposer } = await import("../_libs/three.mjs").then((n) => n.i);
			const { RenderPass } = await import("../_libs/three.mjs").then((n) => n.t);
			const { GTAOPass } = await import("../_libs/three.mjs").then((n) => n.r);
			const { OutputPass } = await import("../_libs/three.mjs").then((n) => n.n);
			if (stop || !canvasRef.current) return;
			const renderer = new THREE.WebGLRenderer({
				canvas: canvasRef.current,
				antialias: true,
				preserveDrawingBuffer: true
			});
			const DPR = Number(new URLSearchParams(location.search).get("dpr") ?? 2);
			renderer.setPixelRatio(DPR);
			renderer.setSize(W, H, false);
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFSoftShadowMap;
			renderer.toneMapping = THREE.ACESFilmicToneMapping;
			renderer.toneMappingExposure = 1;
			renderer.localClippingEnabled = true;
			const house = buildHouse();
			const { scene } = house;
			scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
			scene.environmentIntensity = .22;
			renderer.clippingPlanes = [house.cut];
			const camera = new THREE.PerspectiveCamera(58, W / H, .06, 600);
			const composer = new EffectComposer(renderer);
			composer.setPixelRatio(DPR);
			composer.setSize(W, H);
			composer.addPass(new RenderPass(scene, camera));
			const ao = new GTAOPass(scene, camera, W * DPR, H * DPR);
			ao.updateGtaoMaterial({
				radius: .45,
				distanceExponent: 1.4,
				thickness: 1.2,
				scale: 1.1,
				samples: 16
			});
			ao.updatePdMaterial({
				radius: 6,
				samples: 16
			});
			ao.blendIntensity = 1;
			const aoAny = ao;
			const hideLines = aoAny._overrideVisibility.bind(ao);
			aoAny._overrideVisibility = () => {
				hideLines();
				scene.traverse((o) => {
					if (o instanceof THREE.Mesh && o.visible && o.material.transparent) {
						o.visible = false;
						aoAny._visibilityCache.push(o);
					}
				});
			};
			composer.addPass(ao);
			composer.addPass(new OutputPass());
			const outInv = new THREE.Matrix3().set(1.60475, -.53108, -.07367, -.10208, 1.10813, -.00605, -.00327, -.07276, 1.07602).invert();
			const inInv = new THREE.Matrix3().set(.59719, .35458, .04823, .076, .90834, .01566, .0284, .13383, .83777).invert();
			const unTone = (hex) => {
				const c = new THREE.Color(hex);
				const y = new THREE.Vector3(c.r, c.g, c.b).applyMatrix3(outInv);
				const x = [
					y.x,
					y.y,
					y.z
				].map((v) => {
					const a = 1 - .983729 * v, b = .0245786 - .432951 * v, k = -(90537e-9 + .238081 * v);
					return (-b + Math.sqrt(Math.max(b * b - 4 * a * k, 0))) / (2 * a);
				});
				const r = new THREE.Vector3(...x).applyMatrix3(inInv).multiplyScalar(.6);
				return new THREE.Color(Math.max(0, r.x), Math.max(0, r.y), Math.max(0, r.z));
			};
			const paper = unTone("#f4f1ea"), sky = unTone("#cfd9e0");
			const fog = new THREE.Fog(sky, 55, 150);
			const labels = FLOORS[0].rooms.filter((r) => r.w * r.h >= 4).map((r) => {
				const el = document.createElement("div");
				el.className = "absolute -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap";
				el.innerHTML = `<div style="font:500 17px Outfit;letter-spacing:.14em;text-transform:uppercase;color:#1c1a17">${r.name}</div><div style="font:400 14px Outfit;color:#6b6560;margin-top:2px">${r.w.toFixed(2)} × ${r.h.toFixed(2)}</div>`;
				labelsRef.current?.appendChild(el);
				return {
					el,
					at: P(r.x + r.w / 2, r.y + r.h / 2, .5)
				};
			});
			const tmp = new THREE.Vector3();
			const camQ = new URLSearchParams(location.search).get("cam")?.split(",").map(Number) ?? null;
			const frame = (t) => {
				const cam = tour.cameraAt(t);
				camera.position.copy(cam.pos);
				camera.up.copy(cam.up);
				camera.fov = cam.fov;
				camera.updateProjectionMatrix();
				camera.lookAt(cam.look);
				if (camQ) {
					camera.position.copy(P(camQ[0], camQ[1], camQ[2] + .45));
					camera.up.set(0, 1, 0);
					camera.lookAt(P(camQ[3], camQ[4], camQ[5] + .45));
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
				ao.enabled = t > 11;
				composer.render();
				const lab = tour.planLabelsAt(t);
				if (sheetRef.current) sheetRef.current.style.opacity = String(lab);
				if (gradRef.current) gradRef.current.style.opacity = String(1 - lab);
				labels.forEach(({ el, at }) => {
					tmp.copy(at).project(camera);
					el.style.left = `${(tmp.x + 1) / 2 * W}px`;
					el.style.top = `${(1 - tmp.y) / 2 * H}px`;
					el.style.opacity = String(lab);
				});
				const cap = tour.CAPTIONS.find((c) => t >= c.t0 && t < c.t1);
				const capEl = capRef.current;
				if (capEl) {
					if (cap) {
						const i = tour.CAPTIONS.indexOf(cap);
						const o = Math.min(1, (t - cap.t0) / .6, (cap.t1 - t) / .4);
						capEl.style.opacity = String(Math.max(0, o));
						capEl.style.transform = `translateY(${(1 - Math.min(1, (t - cap.t0) / .6)) * 12}px)`;
						const key = `${i}`;
						if (capEl.dataset.key !== key) {
							capEl.dataset.key = key;
							capEl.children[0].textContent = `${String(i + 1).padStart(2, "0")} / ${tour.CAPTIONS.length}`;
							capEl.children[1].textContent = cap.title;
							capEl.children[2].textContent = cap.note;
						}
					} else capEl.style.opacity = "0";
				}
				if (fadeRef.current) fadeRef.current.style.opacity = String(tour.fadeAt(t));
			};
			window.__tour = {
				duration: tour.DURATION,
				fps: tour.FPS,
				frame
			};
			const fixed = new URLSearchParams(location.search).get("t");
			if (fixed !== null) {
				frame(Number(fixed));
				return;
			}
			if (new URLSearchParams(location.search).has("capture")) return;
			const start = performance.now();
			const loop = () => {
				frame((performance.now() - start) / 1e3 % tour.DURATION);
				raf = requestAnimationFrame(loop);
			};
			loop();
		})();
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 overflow-hidden bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: stageRef,
			className: "relative origin-top-left overflow-hidden",
			style: {
				width: W,
				height: H
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
					ref: canvasRef,
					width: W,
					height: H,
					className: "absolute inset-0 h-full w-full"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: labelsRef,
					className: "pointer-events-none absolute inset-0"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: sheetRef,
					className: "pointer-events-none absolute inset-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-14 left-16",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[15px] tracking-[0.32em] text-sage uppercase",
								children: "Mặt bằng tầng 1 · cắt tại +1.20 m"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 font-display text-[64px] leading-none text-ink",
								children: "Nhà phố 5 × 30"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-16 bottom-14 text-right text-[15px] leading-relaxed text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sân trước 8.00 · Nhà 18.00 · Sân sau 4.00" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "2 tầng + tum · lõi thang 2.10 × 4.60 · giếng trời 1.60 × 1.60" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-14 left-16 flex items-center gap-3 text-[13px] text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[3px] w-[60px] bg-ink" }), " 5 m"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: gradRef,
					className: "pointer-events-none absolute inset-x-0 bottom-0 h-[340px] bg-gradient-to-t from-black/55 to-transparent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: capRef,
					className: "pointer-events-none absolute bottom-16 left-16 max-w-[900px] opacity-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-[15px] tracking-[0.3em] text-paper/70 uppercase" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 font-display text-[60px] leading-tight text-paper" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-2 text-[22px] leading-relaxed text-paper/85" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: fadeRef,
					className: "pointer-events-none absolute inset-0 bg-paper opacity-0"
				})
			]
		})
	});
}
//#endregion
export { Render as component };
