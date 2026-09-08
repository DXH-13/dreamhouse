import { useState } from "react";
import { DETAILS, type DetailId } from "@/lib/house-data";
import {
  Elevation,
  SectionAA,
  StairDetail,
  VoidDetail,
  WetStack,
} from "@/components/detail-svg";
import { cn } from "@/lib/utils";

export function DetailDrawings() {
  const [id, setId] = useState<DetailId>("section");
  const detail = DETAILS.find((d) => d.id === id) ?? DETAILS[0];

  return (
    <section id="chi-tiet" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">03 — Bản vẽ chi tiết</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Từ ý đồ xuống kích thước thi công
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Năm bản vẽ kiểm chứng phương án: mặt cắt dọc, mặt đứng, cầu thang, giếng
          trời và trục ướt. Mọi con số lấy thẳng từ mặt bằng phía trên — chỗ nào
          chưa khớp thì ghi rõ trong ghi chú.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {DETAILS.map((d) => (
            <button
              key={d.id}
              type="button"
              onClick={() => setId(d.id)}
              className={cn(
                "h-11 rounded-md px-4 text-left text-sm font-medium transition-colors duration-150",
                id === d.id ? "bg-sage text-accent-fg" : "bg-surface text-ink-soft hover:text-ink",
              )}
            >
              <span className="tabular-nums opacity-70">{d.code}</span>
              <span className="ml-2">{d.label}</span>
            </button>
          ))}
        </div>

        <figure className="mt-8 overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]">
          <div className="border-b border-line px-5 py-4 sm:px-6">
            <p className="text-[11px] tracking-[0.2em] text-oak uppercase">{detail.code}</p>
            <h3 className="mt-1 font-display text-2xl font-medium">{detail.title}</h3>
          </div>
          <div className="overflow-x-auto p-3 sm:p-6">
            <div className="min-w-[32rem]">
              {id === "section" ? <SectionAA /> : null}
              {id === "elevation" ? <Elevation /> : null}
              {id === "stair" ? <StairDetail /> : null}
              {id === "void" ? <VoidDetail /> : null}
              {id === "wet" ? <WetStack /> : null}
            </div>
          </div>
          <figcaption className="border-t border-line px-5 py-3 text-[11px] tracking-wide text-faint sm:px-6">
            {detail.code} · {detail.scale} · bản vẽ ý tưởng, chưa phải hồ sơ xin phép
          </figcaption>
        </figure>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-sm leading-relaxed text-ink-soft">{detail.blurb}</p>
            <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm leading-relaxed text-muted">
              {detail.notes.map((n) => (
                <li key={n} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-oak" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <dl className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)] sm:p-6">
              <p className="text-[11px] tracking-[0.2em] text-oak uppercase">Thông số</p>
              {detail.specs.map((s) => (
                <div
                  key={s.k}
                  className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-line pt-3 text-sm"
                >
                  <dt className="text-muted">{s.k}</dt>
                  <dd className="tabular-nums text-ink">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
