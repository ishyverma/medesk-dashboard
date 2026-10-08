export const stats = [
  { label: "Today's appointments", value: "48", unit: "", trend: "up", note: "6", rest: "more than yesterday", color: "bg-blue", bars: [30, 55, 40, 70, 90, 65, 50] },
  { label: "Avg. wait time", value: "14", unit: "min", trend: "down", note: "3min", rest: "above target", color: "bg-amber", bars: [45, 70, 55, 85, 75, 60, 50] },
  { label: "Bed occupancy", value: "82", unit: "%", trend: "up", note: "+2.4%", rest: "vs last run", color: "bg-green", bars: [40, 50, 45, 80, 95, 70, 60] },
  { label: "Patient satisfaction", value: "47", unit: "/5", trend: "up", note: "0.3pts", rest: "this month", color: "bg-purple", bars: [25, 40, 60, 55, 85, 70, 90] },
] as const;

export const weeks = [
  { label: "Week 1", scheduled: 232, completed: 188, noShow: 12 },
  { label: "Week 2", scheduled: 197, completed: 162, noShow: 35 },
  { label: "Week 3", scheduled: 201, completed: 177, noShow: 10 },
  { label: "Week 4", scheduled: 226, completed: 155, noShow: 37 },
];

export const departments = [
  { name: "General", cases: 38, pct: "39.2%", color: "bg-blue" },
  { name: "Cardiology", cases: 22, pct: "22.7%", color: "bg-purple" },
  { name: "Paediatrics", cases: 17, pct: "17.5%", color: "bg-green" },
  { name: "Orthopaedics", cases: 11, pct: "11.3%", color: "bg-amber" },
  { name: "Obs/Gynae", cases: 9, pct: "9.3%", color: "bg-coral" },
];

export const appointments = [
  { time: "10:30", patient: "Fatima Ali", type: "Oncology", doctor: "Dr. Johnson", status: "In progress" },
  { time: "11:00", patient: "Oliver Wright", type: "General", doctor: "Dr. Thompson", status: "Waiting" },
] as const;

export const staff = [
  { name: "Dr. Harrison", role: "Cardiologist", patients: 18, rating: "94%", initials: "DH" },
  { name: "Dr. Patel", role: "Cardiologist", patients: 22, rating: "88%", initials: "DP" },
];

export const nav = [
  { group: "Overview", items: [{ label: "Dashboard", icon: "Home", active: true }] },
  { group: "Operations", items: [
    { label: "Appointment", icon: "CalendarCheck" }, { label: "Staff", icon: "Contact" },
    { label: "Departments", icon: "Building2" }, { label: "Resources", icon: "Layers" } ] },
  { group: "Insights", items: [
    { label: "Analytics", icon: "ChartColumn" }, { label: "Reports", icon: "FileText" }, { label: "Trends", icon: "TrendingUp" } ] },
  { group: "Assistant", items: [{ label: "AI Assistant", icon: "Sparkles" }, { label: "Smart Queries", icon: "Loader" }] },
  { group: "Admin", items: [
    { label: "Settings", icon: "Settings" }, { label: "Integrations", icon: "Plug" }, { label: "Permissions", icon: "ShieldCheck" } ] },
] as const;
