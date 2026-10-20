// Render video phối cảnh từ trang /render (dev server phải đang chạy).
//   node scripts/render-video.mjs                    → public/video/dreamhouse-tour.mp4 + poster.jpg
//   node scripts/render-video.mjs --stills 0,8,30    → screenshots/tour-<t>.png để soát nhanh
//   --url http://127.0.0.1:8080  --fps 30  --from 0 --to 20 (render một đoạn)
import { spawn } from "node:child_process";
import { mkdirSync } from "node:fs";
import ffmpeg from "ffmpeg-static";
import { chromium } from "playwright";

const arg = (k, d) => {
  const i = process.argv.indexOf(`--${k}`);
  return i > 0 ? process.argv[i + 1] : d;
};
const base = arg("url", "http://127.0.0.1:8080");

// Chrome cài sẵn dùng GPU thật; Chromium của Playwright rơi về SwiftShader rất chậm
const browser = await chromium.launch({
  channel: arg("channel", "chrome"),
  args: ["--ignore-gpu-blocklist", "--enable-gpu-rasterization", "--use-angle=d3d11"],
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
page.on("pageerror", (e) => console.error("pageerror:", e.message));
page.on("console", (m) => m.type() === "error" && console.error("console:", m.text()));
await page.goto(`${base}/render?capture${arg("cam") ? `&cam=${arg("cam")}` : ""}`, { waitUntil: "networkidle" }); // --cam x,y,z,lx,ly,lz: góc soát cố định
await page.waitForFunction(() => window.__tour, null, { timeout: 120000 });
const { duration, fps: defFps } = await page.evaluate(() => ({ duration: window.__tour.duration, fps: window.__tour.fps }));

const shot = async (t, opts) => {
  await page.evaluate((t) => window.__tour.frame(t), t);
  return page.screenshot(opts);
};

const stills = arg("stills");
if (stills) {
  mkdirSync("screenshots", { recursive: true });
  for (const t of stills.split(",").map(Number)) {
    await shot(t, { path: `screenshots/tour-${String(t).padStart(5, "0")}.png` });
    console.log("still", t);
  }
  await browser.close();
  process.exit(0);
}

const fps = Number(arg("fps", defFps));
const from = Number(arg("from", 0)), to = Number(arg("to", duration));
mkdirSync("public/video", { recursive: true });
const out = arg("out", "public/video/dreamhouse-tour.mp4");
const enc = spawn(
  ffmpeg,
  ["-y", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "mjpeg", "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-crf", "21", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out],
  { stdio: ["pipe", "ignore", "inherit"] },
);
const n = Math.round((to - from) * fps);
const t0 = Date.now();
for (let i = 0; i < n; i++) {
  const buf = await shot(from + i / fps, { type: "jpeg", quality: 93 });
  if (!enc.stdin.write(buf)) await new Promise((r) => enc.stdin.once("drain", r));
  if (i % 60 === 0) {
    const eta = ((Date.now() - t0) / (i + 1)) * (n - i) / 1000;
    console.log(`frame ${i}/${n} · còn ~${Math.round(eta)} s`);
  }
}
enc.stdin.end();
await new Promise((r) => enc.on("close", r));
await shot(Math.min(duration - 0.1, 62), { path: "public/video/poster.jpg", type: "jpeg", quality: 85 });
await browser.close();
console.log("xong:", out);
