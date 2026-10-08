"use client";

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig,
} from "@/components/ui/chart";
import { weeks } from "@/lib/data";

const config = {
  scheduled: { label: "Scheduled", color: "var(--blue)" },
  completed: { label: "Completed", color: "var(--green)" },
  noShow: { label: "No-show", color: "var(--amber)" },
} satisfies ChartConfig;

// Recharts sizes are in px, so scale them with the fluid root font size.
function useRem() {
  const [rem, setRem] = useState(16);
  useEffect(() => {
    const read = () => setRem(parseFloat(getComputedStyle(document.documentElement).fontSize));
    read();
    window.addEventListener("resize", read);
    return () => window.removeEventListener("resize", read);
  }, []);
  return rem;
}

export function VolumeChart() {
  const rem = useRem();
  const tick = { fontSize: 0.95 * rem, fill: "var(--ink-3)" };
  const r = 0.45 * rem;

  return (
    <ChartContainer config={config} className="aspect-auto h-[20.5rem] w-full">
      <BarChart data={weeks} barCategoryGap="18%" barGap={2} margin={{ top: 0.75 * rem, right: 0, left: 0, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="var(--line)" />
        <YAxis
          width={2.9 * rem}
          domain={[0, 250]}
          ticks={[0, 50, 100, 150, 200, 250]}
          tick={tick}
          tickLine={false}
          axisLine={false}
        />
        <XAxis
          dataKey="label"
          height={2.1 * rem}
          tickMargin={0.4 * rem}
          tick={{ ...tick, fill: "var(--ink-2)" }}
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Bar dataKey="scheduled" fill="var(--color-scheduled)" radius={[r, r, 0, 0]} />
        <Bar dataKey="completed" fill="var(--color-completed)" radius={[r, r, 0, 0]} />
        <Bar dataKey="noShow" fill="var(--color-noShow)" radius={[r, r, 0, 0]} />
      </BarChart>
    </ChartContainer>
  );
}
