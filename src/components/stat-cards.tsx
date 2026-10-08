import { ArrowDownRight, ArrowUpRight, Clock } from "lucide-react";
import { RevealCard } from "@/components/reveal";
import { stats } from "@/lib/data";

export function StatCards() {
  return (
    <section className="mt-[2.65rem] grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((s, i) => (
        <RevealCard
          key={s.label}
          index={i + 2}
          className="h-[12.75rem] justify-between gap-0 rounded-[1.25rem] border-0 bg-card p-[1.375rem] shadow-none"
        >
          <div className="flex items-center justify-between text-[1.05rem] leading-none tracking-[-0.01em] text-ink-2">
            {s.label} <Clock className="size-[1.3rem]" strokeWidth={1.5} />
          </div>
          <div className="flex items-end justify-between">
            <div>
              <div className="flex items-baseline gap-[0.45rem]">
                <span className="text-[2.4rem] font-medium leading-none tracking-[-0.04em]">{s.value}</span>
                <span className="text-[1.4rem] leading-none tracking-[-0.02em] text-ink-3">{s.unit}</span>
              </div>
              <p className="mt-[0.85rem] flex items-center gap-[0.55rem] font-mono text-[0.9rem] leading-tight tracking-[-0.03em]">
                {s.trend === "up" ? (
                  <ArrowUpRight className="size-[1.1rem] text-green" />
                ) : (
                  <ArrowDownRight className="size-[1.1rem] text-coral" />
                )}
                <b className="font-medium">{s.note}</b> <span className="text-ink-3">{s.rest}</span>
              </p>
            </div>
            <div className="flex h-[2.5rem] items-end gap-[0.1875rem]">
              {s.bars.map((h, i) => (
                <span
                  key={i}
                  className={`w-[0.3125rem] rounded-t-full rounded-b-none ${s.color}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </RevealCard>
      ))}
    </section>
  );
}
