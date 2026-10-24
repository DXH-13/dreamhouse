import { createFileRoute } from "@tanstack/react-router";
import { DetailDrawings } from "@/components/detail-drawings";
import { FloorPlans } from "@/components/floor-plan";
import { Hero } from "@/components/hero";
import { LightAir } from "@/components/light-air";
import { Materials } from "@/components/materials";
import { PromptBlock } from "@/components/prompt-block";
import { SiteHeader } from "@/components/site-header";
import { SitePlan } from "@/components/site-plan";
import { Walkthrough } from "@/components/walkthrough";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <main>
        <Hero />
        <Concept />
        <SitePlan />
        <FloorPlans />
        <DetailDrawings />
        <LightAir />
        <Materials />
        <Walkthrough />
        <PromptBlock />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-10 sm:flex-row sm:items-end sm:justify-between sm:px-6">
          <p className="font-display text-2xl">Nhà phố 5 × 30</p>
          <p className="text-xs tracking-wide text-faint">
            Phương án A · 2 tầng + tum · 4 PN · 3 WC · 2026
          </p>
        </div>
      </footer>
    </div>
  );
}

function Concept() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:py-20">
      <div className="lg:col-span-7">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">Ý đồ</p>
        <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl">
          Chiều sâu là vấn đề. Cầu thang kính dưới mái kính là câu trả lời.
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          Nhà ống 5 m không chia được hai phòng cạnh nhau. Công năng phải xếp dọc:
          dương phía phố, âm phía vườn. Thang chữ U ba cạnh: 3 bậc ngang từ bục gỗ sau phòng khách, vế dài 1.00 m ép sát tường trái (y 5.00–8.90),
          3 bậc quay ra lên tầng 2; vế dài và vế lên tum chồng đúng một dải, mái kính trùm ngay trên đầu thang — dải thang là giếng trời: vừa đi, vừa
          thở, vừa sáng cho khối tủ gầm thang, bếp chữ L + đảo, hành lang tầng 2 và sảnh tum.
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
        {[
          ["04", "Phòng ngủ", "Một dưới đất cho ông bà, cuối nhà, yên tĩnh, kín sân sau; ba trên lầu."],
          ["03", "WC", "WC tầng 1 là dải riêng cuối sân sau; tầng 2 có WC riêng cho Master (sau phòng thay đồ) và WC chung tách bồn cầu / khu sen giữa nhà — hai WC lưng đối lưng chung một hộp gen tường phải, giặt sấy tách hẳn ra khoang riêng ở sảnh sau."],
          ["01", "Phòng thờ", "Phía trước tum, ban thờ nhìn ra sân thượng và mặt tiền."],
        ].map(([n, t, d]) => (
          <li key={t} className="border-t border-line pt-4">
            <p className="font-display text-3xl text-oak">{n}</p>
            <p className="mt-1 font-medium">{t}</p>
            <p className="mt-1 text-sm text-muted">{d}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
