import { RevealCard } from "@/components/reveal";
import { MonthPicker } from "@/components/month-picker";
import { VolumeChart } from "@/components/volume-chart";

const legend = [["Scheduled", "bg-blue"], ["Completed", "bg-green"], ["No-show", "bg-amber"]];
const summary = [["1024", "Total this month"], ["91%", "Completion rate"], ["47", "No - shows"]];

export function AppointmentVolume() {
  return (
    <RevealCard index={6} className="gap-0 rounded-[1.25rem] border-0 bg-card p-[1.375rem] shadow-none">
      <div className="flex h-[2.4rem] items-center justify-between">
        <h2 className="text-[1.3rem] font-medium leading-none tracking-[-0.025em]">Appointment Volume</h2>
        <MonthPicker />
      </div>
      <div className="mt-[1.2rem] flex flex-wrap justify-end gap-[1.5rem] pr-[1.4rem] text-[0.95rem] leading-none">
        {legend.map(([l, c]) => (
          <span key={l} className="flex items-center gap-[0.6rem]">
            <i className={`size-[1.1rem] rounded-[0.35rem] ${c}`} />{l}
          </span>
        ))}
      </div>
      <div className="mt-[0.7rem] flex">
        <div className="w-[11rem] shrink-0 pt-[1rem]">
          {summary.map(([n, l], i) => (
            <div key={l} className={i ? "mt-[2.3rem]" : ""}>
              <div className="text-[2.1rem] font-medium leading-none tracking-[-0.04em]">{n}</div>
              <div className="mt-[0.9rem] text-[0.9rem] leading-tight text-ink-3">{l}</div>
            </div>
          ))}
        </div>
        <div className="min-w-0 flex-1">
          <VolumeChart />
        </div>
      </div>
    </RevealCard>
  );
}
