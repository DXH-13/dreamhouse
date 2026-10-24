/* Phối cảnh hoàn thiện: video là file MP4 dựng sẵn (không còn Three.js chạy ở trình duyệt)
   + bộ ảnh render tĩnh của phương án mới. */
const RENDERS = [
  {
    src: "/images/exterior-finished.jpg",
    alt: "Phối cảnh mặt tiền nhà phố 5 × 30 khi hoàn thiện, chiều muộn",
    cap: "Mặt tiền hoàn thiện — khung loggia bo cong, cổng nan gỗ, sân trước 8 m",
  },
  {
    src: "/images/floor2-master-suite.jpg",
    alt: "Suite Master tầng 2 mới: phòng ngủ, loggia, phòng thay đồ và WC riêng",
    cap: "Tầng 2 mới — suite Master: ngủ · loggia · thay đồ walk-in · WC riêng",
  },
  {
    src: "/images/floor2-stair.jpg",
    alt: "Đầu thang tầng 2 dưới mái kính, lan can kính và ghế đọc",
    cap: "Đầu thang tầng 2 — ghế đọc dưới mái kính, lan can kính tay vịn đồng",
  },
  {
    src: "/images/floor2-rear-bedroom.jpg",
    alt: "Phòng ngủ cuối tầng 2 nhìn ra sân sau xanh",
    cap: "Phòng ngủ 04 — bàn học cạnh cửa sổ lớn nhìn sân sau",
  },
];

export function Walkthrough() {
  return (
    <section id="phoi-canh" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">06 — Phối cảnh hoàn thiện</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Bộ ảnh và video của ngôi nhà khi hoàn thiện
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Trang không còn dựng 3D trực tiếp bằng Three.js nữa — phần phối cảnh đã được render thành
          ảnh tĩnh và một file video nhẹ, trình duyệt chỉ việc phát. Dưới đây là bộ ảnh hoàn thiện theo
          phương án tầng 2 mới: Master khép kín có phòng thay đồ và WC riêng, WC chung tách khô / ướt,
          giặt sấy riêng, và PN03 có cửa sổ mở ra giếng sáng phụ.
        </p>

        <video
          className="mt-8 aspect-video w-full rounded-xl bg-ink shadow-[var(--shadow-border)]"
          src="/video/dreamhouse-tour.mp4"
          poster="/video/poster.jpg"
          controls
          playsInline
          preload="metadata"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {RENDERS.map((r) => (
            <figure key={r.src} className="overflow-hidden rounded-xl bg-paper shadow-[var(--shadow-border)]">
              <img src={r.src} alt={r.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
              <figcaption className="px-4 py-3 text-sm text-muted">{r.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
