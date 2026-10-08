import { ArrowUpRight, FileDown, SlidersHorizontal } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { RevealCard } from "@/components/reveal";
import { appointments, staff } from "@/lib/data";

const pill = {
  "In progress": "bg-[#e4ecf9] text-[#3b78e0] dark:bg-[#1f2d4a] dark:text-[#7ea8f5]",
  Waiting: "bg-[#f7ecd9] text-[#c9923a] dark:bg-[#3a2f1a] dark:text-[#e5ae56]",
} as const;
const cols = "grid-cols-[5.6rem_12rem_10.5rem_11.5rem_minmax(0,1fr)]";
// Light, soft gradients for the avatar placeholders (cycled per person).
const avatarGradients = [
  "from-[#eef3fc] to-[#cddbf3] dark:from-[#2a3a5c] dark:to-[#3d5280]",
  "from-[#fbf0e8] to-[#f1d6c3] dark:from-[#5a3d2c] dark:to-[#7a5540]",
  "from-[#eaf6f0] to-[#cde8da] dark:from-[#2a4a3c] dark:to-[#3b6a56]",
  "from-[#f2eefb] to-[#d9d0f1] dark:from-[#3d3560] dark:to-[#5a4d8a]",
];
const card = "gap-0 rounded-[1.25rem] border-0 bg-card p-[1.375rem] shadow-none";

export function AppointmentsTable() {
  return (
    <RevealCard index={8} className={card}>
      <div className="flex h-[2.4rem] items-center justify-between">
        <h2 className="text-[1.3rem] font-medium leading-none tracking-[-0.025em]">Today&apos;s appointments</h2>
        <div className="flex gap-[2.3rem] text-[1.15rem] leading-none">
          <span className="flex items-center gap-[0.6rem]"><FileDown className="size-[1.25rem]" strokeWidth={1.5} />Import</span>
          <span className="flex items-center gap-[0.6rem]"><SlidersHorizontal className="size-[1.25rem]" strokeWidth={1.5} />Filter</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[44rem]">
          <div className={`mt-[2rem] grid ${cols} border-b border-line pb-[1.1rem] pl-[1.55rem] text-[1.2rem] font-medium leading-none text-subtle`}>
            {["Time", "Patient", "Type", "Doctor", "Status"].map((h) => <span key={h}>{h}</span>)}
          </div>
          {appointments.map((a) => (
            <div
              key={a.time}
              className={`grid h-[4.9rem] ${cols} items-center border-b border-line pl-[1.55rem] text-[1.2rem] font-medium leading-none tracking-[-0.015em] last:border-0`}
            >
              <span className="font-semibold">{a.time}</span><span className="font-semibold">{a.patient}</span><span>{a.type}</span><span>{a.doctor}</span>
              <span>
                <Badge
                  variant="secondary"
                  className={`h-[2rem] rounded-full border-0 px-[0.8rem] text-[0.95rem] font-medium leading-none ${pill[a.status]}`}
                >
                  {a.status}
                </Badge>
              </span>
            </div>
          ))}
        </div>
      </div>
    </RevealCard>
  );
}

export function StaffPerformance() {
  return (
    <RevealCard index={9} className={card}>
      <div className="flex h-[2.4rem] items-center justify-between">
        <h2 className="text-[1.3rem] font-medium leading-none tracking-[-0.025em]">Staff performance</h2>
        <span className="flex items-center gap-[0.4rem] text-[0.95rem] leading-none">
          View all <ArrowUpRight className="size-[1.05rem]" />
        </span>
      </div>
      <ul className="mt-[0.6rem]">
        {staff.map((s, i) => (
          <li
            key={s.name}
            className="relative flex h-[6.6rem] items-center gap-[1rem] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[repeating-linear-gradient(to_right,var(--dash)_0,var(--dash)_0.55rem,transparent_0.55rem,transparent_1.1rem)] last:after:hidden"
          >
            <Avatar className="size-[3.9rem] rounded-[0.7rem] after:hidden">
              <AvatarFallback className={`rounded-[0.7rem] bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]}`} />
            </Avatar>
            <div className="flex-1">
              <div className="text-[1.2rem] font-medium leading-tight tracking-[-0.02em]">{s.name}</div>
              <div className="mt-[0.55rem] text-[1.05rem] leading-none text-subtle">{s.role}</div>
            </div>
            <div className="text-right">
              <div className="flex justify-end gap-[1.6rem] text-[1.2rem] leading-none">
                <span>{s.patients}</span><span>{s.rating}</span>
              </div>
              <div className="mt-[0.55rem] flex gap-[0.8rem] text-[1.05rem] leading-none text-subtle">
                <span>pts today</span><span>rating</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </RevealCard>
  );
}
