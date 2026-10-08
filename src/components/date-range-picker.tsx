"use client";

import { useState } from "react";
import type { DateRange } from "react-day-picker";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const md = (d: Date) => d.toLocaleDateString("en-US", { month: "short", day: "numeric" });

function formatRange(range?: DateRange) {
  const { from, to } = range ?? {};
  if (!from) return "Select dates";
  if (!to) return `${md(from)}, ${from.getFullYear()}`;
  if (from.getFullYear() !== to.getFullYear())
    return `${md(from)}, ${from.getFullYear()} - ${md(to)}, ${to.getFullYear()}`;
  if (from.getMonth() === to.getMonth())
    return `${md(from)} - ${to.getDate()}, ${to.getFullYear()}`;
  return `${md(from)} - ${md(to)}, ${to.getFullYear()}`;
}

export function DateRangePicker({ className }: { className?: string }) {
  const [range, setRange] = useState<DateRange | undefined>({
    from: new Date(2026, 3, 1),
    to: new Date(2026, 3, 25),
  });

  return (
    <Popover>
      <PopoverTrigger render={<Button className={className} />}>
        <CalendarIcon className="size-[1.1rem]" />
        {formatRange(range)}
        <ChevronDown className="ml-[0.3rem] size-[1.1rem]" />
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} className="w-auto p-0">
        <Calendar
          mode="range"

          defaultMonth={range?.from}
          selected={range}
          onSelect={setRange}
        />
      </PopoverContent>
    </Popover>
  );
}
