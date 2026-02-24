export type JobPriority = "Emergency" | "High" | "Normal" | "Low";

export type JobStatus = "Undispatched" | "In Progress" | "Completed" | "On Hold";

export interface Job {
  id: string;
  client: string;
  site: string;
  type: string;
  status: JobStatus;
  priority: JobPriority;
  slaBreached: boolean;
  scheduledFor: string;
  technician: string;
  revenue: number;
  feedbackScore?: number;
}

export const kpiSummary = {
  revenueThisMonth: 184250,
  completionRate: 92,
  avgResponseMinutes: 38,
  openEmergencies: 7,
};

export const jobsByStatus = {
  completed: 126,
  inProgress: 34,
  undispatched: 19,
  onHold: 8,
  emergency: 17,
};

export const monthlyPerformance = [
  { month: "Jan", revenue: 132_000, completedJobs: 94, emergencyJobs: 12, avgSlaMinutes: 46 },
  { month: "Feb", revenue: 148_800, completedJobs: 101, emergencyJobs: 15, avgSlaMinutes: 44 },
  { month: "Mar", revenue: 153_200, completedJobs: 107, emergencyJobs: 18, avgSlaMinutes: 41 },
  { month: "Apr", revenue: 162_450, completedJobs: 112, emergencyJobs: 14, avgSlaMinutes: 39 },
  { month: "May", revenue: 171_900, completedJobs: 119, emergencyJobs: 16, avgSlaMinutes: 37 },
  { month: "Jun", revenue: 184_250, completedJobs: 126, emergencyJobs: 17, avgSlaMinutes: 35 },
];

export const jobs: Job[] = [
  {
    id: "FM-1042",
    client: "Northbridge Logistics",
    site: "Warehouse 3 - Dock Levelers",
    type: "Hydraulic Dock Repair",
    status: "In Progress",
    priority: "Emergency",
    slaBreached: false,
    scheduledFor: "Today · 14:30",
    technician: "Lewis / Park",
    revenue: 5200,
    feedbackScore: undefined,
  },
  {
    id: "FM-1038",
    client: "Skyline Healthcare",
    site: "Chiller Plant - Roof",
    type: "Chiller Preventive Maintenance",
    status: "Completed",
    priority: "High",
    slaBreached: false,
    scheduledFor: "Today · 09:00",
    technician: "Nguyen",
    revenue: 8600,
    feedbackScore: 4.9,
  },
  {
    id: "FM-1032",
    client: "Metro Offices",
    site: "Tower B - 11F",
    type: "HVAC Comfort Call",
    status: "Undispatched",
    priority: "Normal",
    slaBreached: false,
    scheduledFor: "Today · 16:00",
    technician: "Unassigned",
    revenue: 1250,
  },
  {
    id: "FM-1029",
    client: "Harbor Retail Group",
    site: "Retail Park - Unit 7",
    type: "Lighting Circuit Failure",
    status: "In Progress",
    priority: "High",
    slaBreached: false,
    scheduledFor: "Today · 13:15",
    technician: "Silva",
    revenue: 2100,
  },
  {
    id: "FM-1021",
    client: "City Data Center",
    site: "MDF / IDF Rooms",
    type: "UPS Battery Replacement",
    status: "Completed",
    priority: "Emergency",
    slaBreached: false,
    scheduledFor: "Yesterday · 22:10",
    technician: "Patel / Greene",
    revenue: 14250,
    feedbackScore: 4.7,
  },
  {
    id: "FM-1018",
    client: "Harbor Retail Group",
    site: "Retail Park - Back of House",
    type: "Fire Damper Testing",
    status: "On Hold",
    priority: "Low",
    slaBreached: false,
    scheduledFor: "Tomorrow · 10:00",
    technician: "Mendoza",
    revenue: 3900,
  },
];

export type FeedbackOutcome =
  | "Confirmed Complete"
  | "Unsatisfactory with Feedback"
  | "Follow-up Scheduled";

export interface CustomerFeedback {
  client: string;
  comment: string;
  outcome: FeedbackOutcome;
  jobId: string;
}

export const customerFeedback: CustomerFeedback[] = [
  {
    client: "Skyline Healthcare",
    comment:
      "Work validated with nursing leadership. Environmental comfort restored on all affected wards.",
    outcome: "Confirmed Complete",
    jobId: "FM-1038",
  },
  {
    client: "City Data Center",
    comment:
      "Shutdown, replacement and start-up all confirmed by facilities and IT. No alarms raised in post-change window.",
    outcome: "Confirmed Complete",
    jobId: "FM-1021",
  },
  {
    client: "Metro Offices",
    comment:
      "Comfort restored but delays due to parts availability triggered staff complaints. Requesting tighter ETA updates.",
    outcome: "Unsatisfactory with Feedback",
    jobId: "FM-0994",
  },
];

