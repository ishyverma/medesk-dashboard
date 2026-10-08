import { ArrowUpRight } from "lucide-react";
import { RevealCard } from "@/components/reveal";
import { departments } from "@/lib/data";

export function DepartmentLoad() {
  return (
    <RevealCard index={7} className="gap-0 rounded-[1.25rem] border-0 bg-card p-[1.375rem] shadow-none">
      <div className="flex h-[2.4rem] items-center justify-between">
        <h2 className="text-[1.3rem] font-medium leading-none tracking-[-0.025em]">Department Load</h2>
        <span className="flex items-center gap-[0.4rem] text-[0.95rem] leading-none">
          Details <ArrowUpRight className="size-[1.05rem]" />
        </span>
      </div>
      <div className="mt-[2.2rem] flex items-center justify-between">
        <span className="text-[1rem] leading-none text-subtle">Total Cases</span>
        <b className="text-[1.1rem] font-medium leading-none">129</b>
      </div>
      <div className="mt-[1.4rem] flex gap-[0.35rem]">
        {departments.map((d) => (
          <i key={d.name} className={`h-[2rem] rounded-[0.6rem] ${d.color}`} style={{ flexGrow: d.cases }} />
        ))}
      </div>
      <ul className="mt-[1.7rem] flex flex-col gap-[1.85rem]">
        {departments.map((d) => (
          <li key={d.name} className="flex items-center gap-[0.9rem] text-[1.2rem] leading-none tracking-[-0.015em]">
            <i className={`size-[1.3rem] rounded-[0.35rem] ${d.color}`} />
            <span>{d.name}</span>
            <span className="mx-[0.8rem] h-px flex-1 bg-[repeating-linear-gradient(to_right,var(--dash)_0,var(--dash)_0.55rem,transparent_0.55rem,transparent_1.1rem)]" />
            <b className="w-[1.8rem] text-right font-medium">{d.cases}</b>
            <span className="w-[3.8rem] text-right text-subtle">{d.pct}</span>
          </li>
        ))}
      </ul>
    </RevealCard>
  );
}
