import { Calendar, FileUp, House, Plus, Search } from "lucide-react";
import { DateRangePicker } from "@/components/date-range-picker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { RevealDiv } from "@/components/reveal";
import { SidebarTrigger } from "@/components/ui/sidebar";

const btn =
  "h-[2.6rem] gap-[0.5rem] rounded-[0.75rem] border-0 px-[0.8rem] text-[0.95rem] font-normal leading-none tracking-[-0.01em] shadow-none";

export function Header() {
  return (
    <>
      <RevealDiv index={0} className="flex items-center justify-between">
        <div className="flex items-center gap-[0.9rem]">
          <SidebarTrigger className="md:hidden" />
          <House className="size-[1.3rem]" fill="currentColor" />
          <span className="text-[1.3rem] font-medium leading-none tracking-[-0.02em]">Dashboard</span>
          <span className="ml-[0.2rem] flex items-center gap-[0.45rem] text-[0.85rem] leading-none text-ink-3">
            <i className="size-[0.4rem] rounded-full bg-ink-3" />
            Last synced <b className="font-semibold text-ink">5 min ago</b>
          </span>
        </div>
        <div className="relative hidden md:block">
          <Search className="absolute left-[0.85rem] top-1/2 size-[1.05rem] -translate-y-1/2 text-subtle" />
          <Input
            placeholder="Search patients, staff..."
            className="h-[2.375rem] w-[23.125rem] rounded-[0.65rem] border-0 bg-card pl-[2.6rem] pr-[4rem] text-[0.9rem] shadow-none placeholder:text-subtle md:text-[0.9rem]"
          />
          <KbdGroup className="absolute right-[0.6rem] top-1/2 -translate-y-1/2 gap-[0.2rem]">
            <Kbd className="h-[1.35rem] min-w-[1.35rem] rounded-[0.35rem] bg-canvas px-[0.3rem] text-[0.75rem] text-subtle shadow-[0_0_0_1px_var(--color-line)]">⌘ K</Kbd>
          </KbdGroup>
        </div>
      </RevealDiv>

      <RevealDiv index={1} className="mt-[3.8rem] flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-[1.65rem] font-medium leading-[1.1] tracking-[-0.03em]">Good Morning Dr. Shyam</h1>
          <p className="mt-[0.7rem] flex items-center gap-[0.5rem] text-[0.95rem] leading-none text-subtle">
            <Calendar className="size-[1rem]" /> Monday, Aug 04, 2025
          </p>
        </div>
        <div className="flex items-center gap-[0.7rem]">
          <Button className={`${btn} bg-card text-ink hover:bg-hover`}>
            <FileUp className="size-[1.1rem]" />Export
          </Button>
          <DateRangePicker className={`${btn} bg-card text-ink hover:bg-hover`} />
          <Button className={`${btn} bg-ink text-on-ink hover:bg-ink/85`}>
            <Plus className="size-[1.1rem]" />Add New
          </Button>
        </div>
      </RevealDiv>
    </>
  );
}
