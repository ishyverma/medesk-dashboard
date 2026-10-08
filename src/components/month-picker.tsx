"use client";

import { useState } from "react";
import { Calendar as CalendarIcon, ChevronDown } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const label = (d: Date) =>
  `${d.toLocaleDateString("en-US", { month: "short" })}, ${d.getFullYear()}`;

export function MonthPicker() {
  const [date, setDate] = useState<Date>(new Date(2025, 7, 1));
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex items-center gap-[0.6rem] rounded-md text-[0.95rem] leading-none outline-none focus-visible:ring-2 focus-visible:ring-ring/50">
        <CalendarIcon className="size-[1.1rem]" strokeWidth={1.5} />
        {label(date)}
        <ChevronDown className="ml-[0.5rem] size-[1.1rem]" />
      </PopoverTrigger>
      <PopoverContent align="end" sideOffset={8} className="w-auto p-0">
        <Calendar
          mode="single"
          captionLayout="dropdown"
          startMonth={new Date(2020, 0)}
          endMonth={new Date(2030, 11)}
          defaultMonth={date}
          selected={date}
          onSelect={(d) => {
            if (d) {
              setDate(d);
              setOpen(false);
            }
          }}
        />
      </PopoverContent>
    </Popover>
  );
}
