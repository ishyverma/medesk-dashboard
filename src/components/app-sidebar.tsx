"use client";

import { useState } from "react";
import {
  Building2, CalendarCheck, ChartColumn, ChevronDown, ChevronUp, ChevronsLeft, ChevronsRight,
  Contact, FileText, House, Layers, Loader, Moon, Plug, Settings, ShieldCheck,
  Sparkles, Sun, TrendingUp, type LucideIcon,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader,
  SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,
} from "@/components/ui/sidebar";
import { nav } from "@/lib/data";
import { toggleTheme, useTheme } from "@/lib/theme";

const iconMap: Record<string, LucideIcon> = {
  Home: House, CalendarCheck, Contact, Building2, Layers, ChartColumn,
  FileText, TrendingUp, Sparkles, Loader, Settings, Plug, ShieldCheck,
};

// In icon (collapsed) mode every button becomes a centred square with just the icon.
const iconMode =
  "group-data-[collapsible=icon]:mx-auto group-data-[collapsible=icon]:size-[2.9rem]! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-0! group-data-[collapsible=icon]:[&>span:last-of-type]:hidden";

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";
  const dark = useTheme() === "dark";
  const [closed, setClosed] = useState<Record<string, boolean>>({});

  return (
    <Sidebar variant="inset" collapsible="icon" className="border-0">
      <SidebarHeader className="flex-row items-center justify-between gap-0 px-[0.8rem] pb-0 pt-[1.2rem] group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:justify-start group-data-[collapsible=icon]:gap-[0.9rem] group-data-[collapsible=icon]:px-0">
        <div className="flex items-center gap-[0.8rem] pl-[0.2rem] group-data-[collapsible=icon]:pl-0">
          <div className="grid size-[2.25rem] shrink-0 grid-cols-2 gap-[2px]">
            <span className="rounded-tl-full rounded-br-md bg-ink" />
            <span className="rounded-tr-full bg-ink" />
            <span className="rounded-bl-full bg-ink" />
            <span className="rounded-full bg-ink" />
          </div>
          <span className="text-[1.4rem] font-medium leading-none tracking-[-0.03em] group-data-[collapsible=icon]:hidden">
            Medesk
          </span>
        </div>
        <button
          type="button"
          onClick={toggleSidebar}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="mr-[0.4rem] grid size-[2.1rem] place-items-center rounded-lg text-ink-2 transition-colors hover:bg-hover group-data-[collapsible=icon]:mr-0"
        >
          {collapsed ? (
            <ChevronsRight className="size-[1.25rem]" strokeWidth={1.5} />
          ) : (
            <ChevronsLeft className="size-[1.25rem]" strokeWidth={1.5} />
          )}
        </button>
      </SidebarHeader>

      <SidebarContent className="mt-[1.6rem] gap-[0.6rem] overflow-y-auto overflow-x-hidden pb-[0.5rem] group-data-[collapsible=icon]:gap-[0.6rem]">
        {nav.map(({ group, items }) => (
          <Collapsible
            key={group}
            // Keep every group open while collapsed so its icons stay reachable.
            open={collapsed || !closed[group]}
            onOpenChange={(open) => setClosed((c) => ({ ...c, [group]: !open }))}
            className="group/collapsible shrink-0"
          >
            <SidebarGroup className="px-[0.8rem] py-0 group-data-[collapsible=icon]:px-0">
              <div className="flex h-[1.5rem] items-center justify-between pr-[0.4rem] group-data-[collapsible=icon]:hidden">
                <span className="pl-[0.2rem] text-[1.05rem] leading-none tracking-[-0.01em] text-faint">
                  {group}
                </span>
                {group !== "Overview" && (
                  <CollapsibleTrigger
                    aria-label={`Toggle ${group}`}
                    className="grid size-[1.75rem] place-items-center rounded-md text-faint transition-colors hover:bg-hover"
                  >
                    <ChevronUp className="size-[1.2rem] rotate-180 transition-transform group-data-[open]/collapsible:rotate-0" />
                  </CollapsibleTrigger>
                )}
              </div>
              <CollapsibleContent>
                <SidebarMenu className="mt-[0.3rem] gap-[0.1rem] group-data-[collapsible=icon]:mt-0">
                  {items.map((item) => {
                    const Icon = iconMap[item.icon];
                    const active = "active" in item && item.active;
                    return (
                      <SidebarMenuItem key={item.label}>
                        <SidebarMenuButton
                          render={<a href="#" />}
                          isActive={active}
                          tooltip={item.label}
                          className={`h-[2.4rem] gap-[0.8rem] rounded-[0.7rem] px-[0.8rem] text-[1.05rem] leading-[1.45] tracking-[-0.015em] text-ink-2 transition-colors hover:bg-hover data-[active=true]:bg-transparent data-[active=true]:font-medium data-[active=true]:text-ink [&>svg]:size-[1.2rem]! ${iconMode}`}
                        >
                          <Icon fill={active ? "currentColor" : "none"} strokeWidth={1.5} />
                          <span>{item.label}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      <SidebarFooter className="px-[0.8rem] pb-[0.8rem] group-data-[collapsible=icon]:px-0">
        <SidebarMenu className="gap-[0.1rem]">
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={toggleTheme}
              tooltip={dark ? "Light mode" : "Dark mode"}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              className={`h-[2.4rem] gap-[0.8rem] rounded-[0.7rem] px-[0.8rem] text-[1.05rem] leading-[1.45] tracking-[-0.015em] text-ink-2 transition-colors hover:bg-hover [&>svg]:size-[1.2rem]! ${iconMode}`}
            >
              {dark ? <Sun strokeWidth={1.5} /> : <Moon strokeWidth={1.5} />}
              <span>{dark ? "Light mode" : "Dark mode"}</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip="Shyam Verma"
              className={`h-[2.9rem] gap-[0.7rem] rounded-[0.7rem] px-[0.7rem] text-[1.05rem] font-medium leading-[1.45] tracking-[-0.015em] hover:bg-hover ${iconMode}`}
            >
              <Avatar className="size-[2.3rem] after:hidden">
                <AvatarFallback className="bg-gradient-to-br from-[#f2eefb] via-[#dfe6f8] to-[#f6e3d6] dark:from-[#3a3358] dark:via-[#2d3a5e] dark:to-[#4a3a3a]" />
              </Avatar>
              <span>Shyam Verma</span>
              <ChevronDown className="ml-auto size-[1.2rem] group-data-[collapsible=icon]:hidden" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
