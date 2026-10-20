import { useMemo, useState, type ReactNode } from "react";
import { CORE, FLOORS, FURN, RAILS, WALLS, type FloorId, type Room, type RoomKind } from "@/lib/house-data";
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
  hall: "plan-hall",
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
          Bấm từng phòng để xem kích thước thông thủy. Lõi thang kính + giếng trời cố định
          là thang chữ U ba cạnh — vế dài ép sát tường trái, hai chiếu nghỉ ở hai góc — ngay sau phòng khách; mái kính trên dải thang. Mọi phòng có lối riêng ra hành lang.
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
  const vb = "-1.7 -1.4 8.5 24";
  return (
    <svg viewBox={vb} className="w-full" role="img" aria-label={`Mặt bằng ${floorId}`}>
      <rect x="-1.7" y="-1.4" width="8.5" height="24" fill="var(--color-paper)" />
      {floorId === "t1" ? <rect x="0" y="18" width="5" height="4" fill="none" stroke="var(--color-ink)" strokeWidth="0.04" strokeDasharray="0.15 0.1" /> : null}
      <rect x="0" y="0" width="5" height="18" fill="none" stroke="var(--color-ink)" strokeWidth="0.08" />
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
          {r.h >= 1.4 && r.w >= 1.2 && shortLabel(r.name).length * 0.16 < r.w ? (
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
          {r.h >= 3 && r.w >= 1.5 ? (
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
      {floorId === "t1" ? (
        <line x1="3.85" y1="18" x2="4.75" y2="18" stroke="var(--color-paper)" strokeWidth="0.12" />
      ) : null}
      <text x="2.5" y="-0.7" textAnchor="middle" fontSize="0.32" fill="var(--color-sage)" fontFamily="Outfit, sans-serif" letterSpacing="0.14">
        MẶT TIỀN
      </text>
      <text x={floorId === "t1" ? 3.5 : 2.5} y="19.05" textAnchor="middle" fontSize="0.32" fill="var(--color-sage)" fontFamily="Outfit, sans-serif" letterSpacing="0.14">
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
    .replace("Cầu thang kính + giếng trời", "Thang")
    .replace("Sảnh sinh hoạt", "Sinh hoạt")
    .replace("Kho gầm thang", "Kho")
    .replace("Cầu thang", "Thang")
    .replace("WC chung rộng", "WC")
    .replace("WC chung", "WC")
    .replace("Loggia mặt tiền", "Loggia")
    .replace("Sân thượng trước", "Sân trước")
    .replace("Sân phơi sau", "Phơi")
    .replace("Lõi thang + kỹ thuật", "Kỹ thuật")
    .replace("Bếp + Ăn", "Bếp + Ăn");
}

// Tường ngăn (đặc / kính), lan can, bậc thang và đồ đạc — vẽ từ house-data, cùng nguồn với 3D và CAD
function Furniture({ floorId }: { floorId: FloorId }) {
  const walls: ReactNode[] = [];
  WALLS[floorId].forEach(([axis, at, a0, a1, gaps = []], i) => {
    let from = a0;
    const seg = (a: number, b: number, kind: string) => {
      const [x1, y1, x2, y2] = axis === "h" ? [a, at, b, at] : [at, a, at, b];
      walls.push(
        <line
          key={`${i}-${a}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={kind === "glass" ? "#6f9bb0" : "var(--color-ink)"}
          strokeWidth={kind === "glass" ? 0.05 : 0.1}
        />,
      );
    };
    for (const [s0, e0, kind] of [...gaps].sort((p, q) => p[0] - q[0])) {
      if (s0 > from) seg(from, s0, "solid");
      if (kind !== "door") seg(s0, e0, "glass");
      from = e0;
    }
    if (a1 > from) seg(from, a1, "solid");
  });
  // thang: cạnh 1 + chiếu nghỉ trước (T1, chữ U) rồi vế dài sát tường, mũi tên lên về phía sau
  const fl = floorId === "tum" ? null : CORE.flights[floorId];
  const steps = fl ? Array.from({ length: fl.risers }, (_, k) => fl.y + k * CORE.tread) : [];
  const cx = (CORE.x[0] + CORE.x[1]) / 2, top = steps[steps.length - 1] ?? 0;
  const lead = fl ? Array.from({ length: fl.lead }, (_, k) => CORE.x[1] + k * CORE.tread) : [];
  const [ly0, ly1] = CORE.landing.y, ym = (ly0 + ly1) / 2, xf = CORE.x[1] + (fl ? fl.lead - 1 : 0) * CORE.tread;
  // cạnh 3 thang chữ U: bậc ngang sau chiếu nghỉ sau, mép sàn trên tại xe
  const tail = fl ? Array.from({ length: fl.tail }, (_, k) => CORE.x[1] + k * CORE.tread) : [];
  const [ty0, ty1] = CORE.landing.top, tm = (ty0 + ty1) / 2, xe = CORE.x[1] + (fl && fl.tail ? fl.tail - 1 : 0) * CORE.tread;
  return (
    <g pointerEvents="none">
      {walls}
      {RAILS[floorId].map(([x1, y1, x2, y2]) => (
        <line key={`r${x1}${y1}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#6f9bb0" strokeWidth="0.04" strokeDasharray="0.12 0.06" />
      ))}
      <g stroke="var(--color-ink-soft)" strokeWidth="0.025" opacity="0.7">
        {steps.map((y) => (
          <line key={y} x1={CORE.x[0]} y1={y} x2={CORE.x[1]} y2={y} />
        ))}
        {lead.map((x) => (
          <line key={`l${x}`} x1={x} y1={ly0} x2={x} y2={ly1} />
        ))}
        {lead.length ? <rect x={CORE.x[0]} y={ly0} width={xf - CORE.x[0]} height={ly1 - ly0} fill="none" /> : null}
        {tail.map((x) => (
          <line key={`t${x}`} x1={x} y1={ty0} x2={x} y2={ty1} />
        ))}
        {tail.length ? <rect x={CORE.x[0]} y={ty0} width={xe - CORE.x[0]} height={ty1 - ty0} fill="none" /> : null}
        {fl ? (
          <>
            {tail.length ? (
              <>
                <path d={`M${xf - 0.1} ${ym} H${cx} V${tm} H${xe - 0.1}`} fill="none" strokeWidth="0.03" />
                <path d={`M${xe - 0.35} ${tm - 0.15} L${xe - 0.1} ${tm} L${xe - 0.35} ${tm + 0.15}`} fill="none" strokeWidth="0.03" />
              </>
            ) : (
              <>
                <path d={lead.length ? `M${xf - 0.1} ${ym} H${cx} V${top - 0.15}` : `M${cx} ${fl.y + 0.15} V${top - 0.15}`} fill="none" strokeWidth="0.03" />
                <path d={`M${cx - 0.15} ${top - 0.4} L${cx} ${top - 0.15} L${cx + 0.15} ${top - 0.4}`} fill="none" strokeWidth="0.03" />
              </>
            )}
          </>
        ) : null}
      </g>
      <g fill="none" stroke="var(--color-ink-soft)" strokeWidth="0.03" opacity="0.6">
        {FURN[floorId].map((f, i) =>
          f[0] === "r" ? (
            <rect key={i} x={f[1]} y={f[2]} width={f[3]} height={f[4]} rx="0.03" />
          ) : (
            <circle key={i} cx={f[1]} cy={f[2]} r={f[3]} />
          ),
        )}
      </g>
    </g>
  );
}
