import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { MJ_PROMPT } from "@/lib/house-data";
import { Button } from "@/components/ui/button";

export function PromptBlock() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(MJ_PROMPT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="prompt" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">07 — Prompt ảnh</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Midjourney / DALL·E
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Dán nguyên đoạn dưới. Thêm <span className="text-ink">--ar 3:4</span> nếu
          cần mặt đứng; giữ 16:9 cho góc 3/4 như phối cảnh đầu trang.
        </p>
        <div className="relative mt-8 rounded-xl bg-ink p-5 text-paper sm:p-6">
          <Button
            type="button"
            variant="invert"
            size="sm"
            className="absolute top-4 right-4"
            onClick={copy}
          >
            {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            {copied ? "Đã chép" : "Chép prompt"}
          </Button>
          <pre className="max-w-none overflow-x-auto pr-28 font-sans text-sm leading-relaxed text-paper/90 whitespace-pre-wrap">
            {MJ_PROMPT}
          </pre>
        </div>
      </div>
    </section>
  );
}
