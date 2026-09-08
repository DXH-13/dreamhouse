import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#tong-mat-bang", label: "Lô đất" },
  { href: "#mat-bang", label: "Mặt bằng" },
  { href: "#chi-tiet", label: "Chi tiết" },
  { href: "#anh-sang", label: "Ánh sáng" },
  { href: "#vat-lieu", label: "Vật liệu" },
  { href: "#phoi-canh", label: "Phối cảnh 3D" },
  { href: "#prompt", label: "Prompt" },
];

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-200",
        solid ? "bg-paper/95 shadow-[var(--shadow-border)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a href="#top" className="flex items-baseline gap-2 text-ink">
          <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            5×30
          </span>
          <span className="hidden text-[11px] tracking-[0.18em] text-muted uppercase sm:inline">
            Phương án A
          </span>
        </a>
        <nav className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="shrink-0 px-2 py-2 text-xs tracking-wide text-ink-soft hover:text-ink sm:px-3 sm:text-sm"
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
