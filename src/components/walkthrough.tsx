/* Video phối cảnh render từ mô hình 3D trong house-data (scripts/render-video.mjs → public/video). */
export function Walkthrough() {
  return (
    <section id="phoi-canh" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">06 — Phối cảnh 3D</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Từ tờ mặt bằng tới bàn thờ, trong hai phút
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Mở đầu là mặt bằng tầng 1 cắt ở cao độ +1.20 m. Đó không phải hình vẽ mà là chính mô hình 3D nhìn
          từ trên xuống. Mặt cắt nâng lên thì tường mọc lên, rồi camera xuống phố, đi qua từng phòng. Phòng nào
          cũng giữ nét vẽ cho tới khi camera bước vào. Kích thước lấy thẳng từ{" "}
          <span className="text-ink">house-data</span>, cùng nguồn với mặt bằng và bản vẽ CAD.
        </p>

        <video
          className="mt-8 aspect-video w-full rounded-xl bg-ink shadow-[var(--shadow-border)]"
          src="/video/dreamhouse-tour.mp4"
          poster="/video/poster.jpg"
          controls
          playsInline
          preload="metadata"
        />
      </div>
    </section>
  );
}
