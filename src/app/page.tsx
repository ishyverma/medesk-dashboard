import type { CSSProperties } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Header } from "@/components/header";
import { StatCards } from "@/components/stat-cards";
import { AppointmentVolume } from "@/components/appointment-volume";
import { DepartmentLoad } from "@/components/department-load";
import { AppointmentsTable, StaffPerformance } from "@/components/bottom-row";

export default function DashboardPage() {
  return (
    <SidebarProvider
      style={{ "--sidebar-width": "20.5rem", "--sidebar-width-icon": "4.5rem" } as CSSProperties}
    >
      <AppSidebar />
      <SidebarInset className="bg-canvas md:peer-data-[variant=inset]:m-[0.65rem] md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-[1.25rem]">
        <div className="px-[1.6rem] pb-[2rem] pt-[1.2rem]">
          <Header />
          <StatCards />
          <div className="mt-[2.1rem] grid gap-[1.05rem] lg:grid-cols-[3fr_2fr]">
            <AppointmentVolume />
            <DepartmentLoad />
          </div>
          <div className="mt-[2.1rem] grid gap-[1.05rem] lg:grid-cols-[3fr_2fr]">
            <AppointmentsTable />
            <StaffPerformance />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
