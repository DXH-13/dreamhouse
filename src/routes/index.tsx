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
            Phương án A · 2 tầng + tum · 4 PN · 2 WC · 2026
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
          Chiều sâu là vấn đề. Cầu thang đặt giữa là câu trả lời.
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
          Nhà ống 5 m không chia được hai phòng cạnh nhau. Công năng phải xếp dọc:
          dương phía phố, âm phía vườn. Lõi thang 1.10 m kẹp giếng 1.50 m cắt nhà
          tại mét thứ mười — vừa đi, vừa thở, vừa sáng cho phòng ngủ giữa tầng 2.
        </p>
      </div>
      <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
        {[
          ["04", "Phòng ngủ", "Một dưới đất cho ông bà, ba trên lầu."],
          ["02", "WC", "Trục ướt thẳng đứng, WC tầng 2 rộng 6 m²."],
          ["01", "Phòng thờ", "Tum, hướng khoảng thoáng mặt tiền."],
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
