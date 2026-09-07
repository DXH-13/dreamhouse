import { useMemo, useState } from "react";
import { FLOORS, type FloorId, type Room, type RoomKind } from "@/lib/house-data";
import { cn } from "@/lib/utils";

const KIND_CLASS: Record<RoomKind, string> = {
  living: "plan-living",
  kitchen: "plan-kitchen",
  bed: "plan-bed",
  wc: "plan-wc",
  stair: "plan-stair",
  void: "plan-void",
  worship: "plan-worship",
  outdoor: "plan-outdoor",
  service: "plan-service",
  parking: "plan-parking",
};

export function FloorPlans() {
  const [floorId, setFloorId] = useState<FloorId>("t1");
  const floor = FLOORS.find((f) => f.id === floorId) ?? FLOORS[0];
  const [roomId, setRoomId] = useState(floor.rooms[0]?.id ?? "");

  const room = useMemo(
    () => floor.rooms.find((r) => r.id === roomId) ?? floor.rooms[0],
    [floor, roomId],
  );

  function pickFloor(id: FloorId) {
    setFloorId(id);
    const next = FLOORS.find((f) => f.id === id);
    setRoomId(next?.rooms[0]?.id ?? "");
  }

  return (
    <section id="mat-bang" className="scroll-mt-20 border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="text-[11px] tracking-[0.28em] text-sage uppercase">02 — Mặt bằng công năng</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium sm:text-4xl">
          Trước mở, giữa thở, sau yên
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          Bấm từng phòng để xem kích thước thông thủy. Lõi thang + giếng trời cố định
          tại tim 9.60–13.20 m trên cả ba tầng.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {FLOORS.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => pickFloor(f.id)}
              className={cn(
                "h-11 rounded-md px-4 text-sm font-medium transition-colors duration-150",
                floorId === f.id ? "bg-sage text-accent-fg" : "bg-paper text-ink-soft hover:text-ink",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <p className="mt-6 font-display text-xl text-ink">{floor.title}</p>
        <p className="mt-1 text-sm text-muted">
          {floor.height} · {floor.blurb}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="rounded-xl bg-paper p-3 shadow-[var(--shadow-border)] lg:col-span-7 sm:p-4">
            <FloorSvg
              rooms={floor.rooms}
              selectedId={room.id}
              onSelect={setRoomId}
              floorId={floorId}
            />
          </div>
          <aside className="lg:col-span-5">
            <div className="rounded-xl bg-paper p-5 shadow-[var(--shadow-border)] sm:p-6">
              <p className="text-[11px] tracking-[0.2em] text-oak uppercase">{room.subtitle}</p>
              <h3 className="mt-2 font-display text-3xl font-medium">{room.name}</h3>
              <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-[11px] tracking-wide text-faint uppercase">Tim trục</dt>
                  <dd className="mt-1 tabular-nums text-ink">{room.areaGross.toFixed(1)} m²</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-wide text-faint uppercase">Thông thủy</dt>
                  <dd className="mt-1 tabular-nums text-ink">{room.areaNet.toFixed(1)} m²</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-ink-soft">{room.dims}</p>
              <p className="mt-3 text-sm text-muted">
                <span className="text-ink">Sáng / gió. </span>
                {room.light}
              </p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm leading-relaxed text-muted">
                {room.notes.map((n) => (
                  <li key={n} className="flex gap-2">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-oak" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
            <RoomLegend rooms={floor.rooms} selectedId={room.id} onSelect={setRoomId} />
          </aside>
        </div>
      </div>
    </section>
  );
}

function RoomLegend({
  rooms,
  selectedId,
  onSelect,
}: {
  rooms: Room[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="mt-4 grid grid-cols-2 gap-2">
      {rooms.map((r) => (
        <li key={r.id}>
          <button
            type="button"
            onClick={() => onSelect(r.id)}
            className={cn(
              "flex h-12 w-full items-center gap-2 rounded-md px-3 text-left text-xs transition-colors duration-150",
              selectedId === r.id ? "bg-sage text-accent-fg" : "bg-paper text-ink-soft hover:text-ink",
            )}
          >
            <span className={cn("size-3 shrink-0 rounded-xs", KIND_CLASS[r.kind])} />
            <span className="truncate">{r.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

function FloorSvg({
  rooms,
  selectedId,
  onSelect,
  floorId,
}: {
  rooms: Room[];
  selectedId: string;
  onSelect: (id: string) => void;
  floorId: FloorId;
}) {
  const vb = "-1.7 -1.4 8.5 21.4";
  return (
    <svg viewBox={vb} className="w-full" role="img" aria-label={`Mặt bằng ${floorId}`}>
      <rect x="-1.7" y="-1.4" width="8.5" height="21.4" fill="var(--color-paper)" />
      <rect x="0" y="0" width="5" height="18" fill="none" stroke="var(--color-ink)" strokeWidth="0.08" />
      <rect x="0.04" y="9.64" width="4.92" height="3.52" className="plan-service" />
      {rooms.map((r) => (
        <g key={r.id}>
          <rect
            x={r.x + 0.04}
            y={r.y + 0.04}
            width={r.w - 0.08}
            height={r.h - 0.08}
            className={KIND_CLASS[r.kind]}
            stroke={selectedId === r.id ? "var(--color-sage)" : "var(--color-ink)"}
            strokeWidth={selectedId === r.id ? 0.09 : 0.035}
            role="button"
            tabIndex={0}
            aria-label={r.name}
            onClick={() => onSelect(r.id)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(r.id);
              }
            }}
          />
          {r.h >= 1.6 && r.w >= 1.2 ? (
            <text
              x={r.x + r.w / 2}
              y={r.y + r.h / 2 - (r.h >= 3 ? 0.15 : 0)}
              textAnchor="middle"
              fontSize={r.w < 2 ? 0.28 : 0.34}
              fill="var(--color-ink)"
              fontFamily="Outfit, sans-serif"
              pointerEvents="none"
            >
              {shortLabel(r.name)}
            </text>
          ) : null}
          {r.h >= 3 ? (
            <text
              x={r.x + r.w / 2}
              y={r.y + r.h / 2 + 0.32}
              textAnchor="middle"
              fontSize="0.26"
              fill="var(--color-muted)"
              fontFamily="Outfit, sans-serif"
              pointerEvents="none"
            >
              {r.w.toFixed(2)} × {r.h.toFixed(2)}
            </text>
          ) : null}
        </g>
      ))}
      <Furniture floorId={floorId} />
      <text x="2.5" y="-0.7" textAnchor="middle" fontSize="0.32" fill="var(--color-sage)" fontFamily="Outfit, sans-serif" letterSpacing="0.14">
        MẶT TIỀN
      </text>
      <text x="2.5" y="18.85" textAnchor="middle" fontSize="0.32" fill="var(--color-sage)" fontFamily="Outfit, sans-serif" letterSpacing="0.14">
        SÂN SAU
      </text>
      <line x1="0" y1="-0.35" x2="5" y2="-0.35" stroke="var(--color-oak)" strokeWidth="0.025" />
      <text x="2.5" y="-0.45" textAnchor="middle" fontSize="0.26" fill="var(--color-oak)" fontFamily="Outfit, sans-serif">
        5.00
      </text>
      <line x1="-0.45" y1="0" x2="-0.45" y2="18" stroke="var(--color-oak)" strokeWidth="0.025" />
      <text
        x="-0.7"
        y="9"
        textAnchor="middle"
        fontSize="0.26"
        fill="var(--color-oak)"
        fontFamily="Outfit, sans-serif"
        transform="rotate(-90 -0.7 9)"
      >
        18.00
      </text>
    </svg>
  );
}

function shortLabel(name: string) {
  return name
    .replace("Phòng ngủ ", "PN ")
    .replace("Phòng khách", "Khách")
    .replace("Phòng thờ", "Thờ")
    .replace("Giếng trời giữa", "Giếng")
    .replace("Cầu thang", "Thang")
    .replace("WC chung rộng", "WC")
    .replace("WC chung", "WC")
    .replace("Loggia mặt tiền", "Loggia")
    .replace("Sân thượng trước", "Sân trước")
    .replace("Sân phơi sau", "Phơi")
    .replace("Lõi thang + kỹ thuật", "Kỹ thuật")
    .replace("Bếp + Ăn", "Bếp + Ăn");
}

function Furniture({ floorId }: { floorId: FloorId }) {
  if (floorId === "t1") {
    return (
      <g fill="none" stroke="var(--color-ink-soft)" strokeWidth="0.035" opacity="0.55" pointerEvents="none">
        <rect x="0.45" y="2.0" width="2.5" height="0.85" rx="0.08" />
        <rect x="1.0" y="3.05" width="1.2" height="0.55" rx="0.04" />
        <rect x="4.25" y="1.7" width="0.35" height="1.6" />
        <rect x="0.25" y="5.65" width="0.6" height="3.6" />
        <rect x="2.35" y="6.85" width="1.7" height="0.9" />
        <circle cx="2.55" cy="6.7" r="0.12" />
        <circle cx="3.85" cy="6.7" r="0.12" />
        <circle cx="2.55" cy="7.95" r="0.12" />
        <circle cx="3.85" cy="7.95" r="0.12" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="0.12" y1={9.75 + i * 0.28} x2="1.12" y2={9.75 + i * 0.28} />
        ))}
        <rect x="1.5" y="14.35" width="2.0" height="2.4" rx="0.12" />
      </g>
    );
  }
  if (floorId === "t2") {
    return (
      <g fill="none" stroke="var(--color-ink-soft)" strokeWidth="0.035" opacity="0.55" pointerEvents="none">
        <rect x="1.35" y="2.0" width="2.3" height="2.1" rx="0.12" />
        <rect x="1.4" y="6.35" width="2.0" height="2.0" rx="0.12" />
        {Array.from({ length: 10 }).map((_, i) => (
          <line key={i} x1="0.12" y1={9.75 + i * 0.28} x2="1.12" y2={9.75 + i * 0.28} />
        ))}
        <rect x="1.5" y="14.35" width="2.0" height="2.4" rx="0.12" />
        <circle cx="4.35" cy="11.4" r="0.22" />
        <rect x="3.15" y="10.3" width="0.7" height="0.7" />
      </g>
    );
  }
  return (
    <g fill="none" stroke="var(--color-ink-soft)" strokeWidth="0.035" opacity="0.55" pointerEvents="none">
      <rect x="1.5" y="6.2" width="2.0" height="0.55" />
      <rect x="1.7" y="6.85" width="1.6" height="0.35" />
    </g>
  );
}
