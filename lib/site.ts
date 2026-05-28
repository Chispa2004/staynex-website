export type IconKey =
  | "message"
  | "reception"
  | "revenue"
  | "health"
  | "lab"
  | "workflow"
  | "globe"
  | "handover"
  | "monitor"
  | "booking"
  | "alert";

export const siteConfig = {
  name: "Staynex",
  descriptor: "AI Hospitality Operations Platform",
  headline: "AI operations for modern hotels",
  description:
    "Staynex centralizes guest communication, hotel operations, AI workflows, revenue opportunities and hospitality intelligence in one platform.",
  future: {
    defaultLocale: "en",
    plannedLocales: ["en", "es"],
    cmsReady: true,
    analyticsReady: true,
    demoBookingReady: true
  }
};

export const navItems = [
  { label: "Product", href: "#product" },
  { label: "Operations", href: "#operations" },
  { label: "Revenue", href: "#revenue" },
  { label: "Pre check-in", href: "#reception" },
  { label: "AI + WhatsApp", href: "#ai-whatsapp" },
  { label: "Health", href: "#health" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" }
];

export const productPillars = [
  {
    eyebrow: "AI Concierge",
    title: "WhatsApp guest journeys with operational context.",
    body:
      "Automate multilingual guest conversations across booking, arrival, stay and post-stay moments while keeping reception in control.",
    icon: "message" as IconKey,
    points: ["WhatsApp first", "Multilingual by design", "24/7 availability", "Human takeover"]
  },
  {
    eyebrow: "Reception Operations",
    title: "Arrival readiness before the guest reaches the desk.",
    body:
      "Prepare pre check-in, guest lookup, folio preview and readiness signals so teams can resolve friction before arrival peaks.",
    icon: "reception" as IconKey,
    points: ["Pre check-in", "Guest lookup", "Folio preview", "Operational readiness"]
  },
  {
    eyebrow: "Experience Marketplace",
    title: "Revenue opportunities inside every guest conversation.",
    body:
      "Present curated providers, excursions, upgrades and services at the right moment without turning hospitality into spam.",
    icon: "revenue" as IconKey,
    points: ["Provider bookings", "Excursions", "Upsells", "Revenue visibility"]
  },
  {
    eyebrow: "Hotel Health",
    title: "A live view of automation quality and hotel operations.",
    body:
      "Monitor alerts, AI quality, missed opportunities and guest journey health from one operational control layer.",
    icon: "health" as IconKey,
    points: ["Monitoring", "Alerts", "AI quality", "Operational visibility"]
  },
  {
    eyebrow: "AI Quality Lab",
    title: "Test long guest journeys before guests experience them.",
    body:
      "Use failure intelligence, long journey simulation and replay mode to understand where automation needs improvement.",
    icon: "lab" as IconKey,
    points: ["Failure Intelligence", "Long Journey Simulation", "Replay mode", "QA workflows"]
  }
];

export const operationCards = [
  {
    title: "Guest readiness",
    body: "Identify missing documents, arrival timing, special requests and room readiness from a single operational view.",
    metric: "92%",
    label: "ready arrivals"
  },
  {
    title: "Reception focus",
    body: "Route routine messages to AI and bring staff into conversations only when judgment or empathy is needed.",
    metric: "38%",
    label: "less repetitive work"
  },
  {
    title: "Service recovery",
    body: "Escalate issues when intent, urgency or sentiment suggests a human should step in immediately.",
    metric: "<2m",
    label: "priority alerting"
  }
];

export const revenueCards = [
  "Late check-out offers aligned with occupancy",
  "Local providers and excursions with booking context",
  "Spa, restaurant and transport recommendations",
  "Revenue reporting across upsells and guest intent"
];

export const healthSignals = [
  { label: "AI confidence", value: "97.4%", tone: "green" },
  { label: "Unresolved journeys", value: "12", tone: "amber" },
  { label: "Escalations", value: "4", tone: "coral" },
  { label: "Revenue intents", value: "86", tone: "blue" }
];

export const liveOperationCards = [
  {
    title: "Guest requested airport transfer",
    meta: "WhatsApp",
    time: "Now",
    status: "Routed",
    tone: "green"
  },
  {
    title: "Late checkout approved",
    meta: "Reception",
    time: "1m ago",
    status: "Confirmed",
    tone: "blue"
  },
  {
    title: "Housekeeping notified",
    meta: "Room 304",
    time: "2m ago",
    status: "Task sent",
    tone: "amber"
  },
  {
    title: "Provider booking sent",
    meta: "Experiences",
    time: "4m ago",
    status: "Revenue",
    tone: "gold"
  },
  {
    title: "AI resolved automatically",
    meta: "Policy answer",
    time: "6m ago",
    status: "Closed",
    tone: "green"
  },
  {
    title: "Review request scheduled",
    meta: "Post-stay",
    time: "12m ago",
    status: "Queued",
    tone: "blue"
  },
  {
    title: "VIP guest arriving tomorrow",
    meta: "Front desk",
    time: "Tomorrow",
    status: "Flagged",
    tone: "coral"
  }
];

export const metricStripItems = [
  "24/7 multilingual AI",
  "Multi-hotel operations",
  "AI + human workflows",
  "Hospitality-focused automation",
  "Revenue opportunity detection",
  "Operational visibility"
];

export const journeySections = [
  {
    eyebrow: "Before arrival",
    title: "Before guests even arrive",
    body:
      "Staynex prepares pre check-in, transfer intent, arrival readiness, WhatsApp communication and guest preferences before the front desk gets busy.",
    stage: "Pre-arrival flow",
    primary: "Guest lands in WhatsApp",
    secondary: "Reception sees readiness, missing details and preference signals in one place.",
    points: ["Pre check-in", "Transfer", "Arrival readiness", "WhatsApp", "Guest preferences"]
  },
  {
    eyebrow: "During stay",
    title: "AI concierge connected to hotel operations",
    body:
      "Requests become operational work: housekeeping, maintenance, restaurant, experiences and human takeover all stay connected to the guest context.",
    stage: "In-stay operations",
    primary: "AI understands request",
    secondary: "The right department receives the context, urgency and next action.",
    points: ["Requests", "Housekeeping", "Maintenance", "Restaurant", "Experiences", "Human takeover"]
  },
  {
    eyebrow: "After checkout",
    title: "Operations don't stop at checkout",
    body:
      "Automate folio reminders, review journeys, guest retention and direct communication so each stay keeps creating operational and revenue value.",
    stage: "Post-stay automation",
    primary: "Checkout completed",
    secondary: "Reviews, folio reminders and repeat-stay journeys continue with control.",
    points: ["Folio reminders", "Reviews", "Guest retention", "Direct communication", "Repeat stays"]
  }
];

export const hotelPainPoints = [
  ["Repetitive guest questions", "AI handles routine questions while teams focus on hospitality moments."],
  ["Disconnected departments", "Guest requests move from conversation to the right operational workflow."],
  ["OTA dependency", "Direct WhatsApp communication creates owned guest relationships."],
  ["Slow operations", "Live statuses surface what needs action before it becomes visible friction."],
  ["Missed upsells", "Revenue opportunities are detected from real guest intent."],
  ["Fragmented communication", "Reception, service teams and AI share one source of guest context."],
  ["Operational overload", "Staynex prioritizes what matters, what can be automated and what needs people."]
];

export const demoFlow = [
  {
    label: "WhatsApp conversation",
    title: "Guest asks for early arrival and a transfer",
    body: "Staynex answers instantly and checks which details reception needs."
  },
  {
    label: "Reception dashboard",
    title: "Arrival readiness updates live",
    body: "Documents, arrival time, folio status and guest notes stay visible."
  },
  {
    label: "Provider booking",
    title: "Airport transfer options are sent",
    body: "The guest receives curated providers without leaving the conversation."
  },
  {
    label: "AI monitoring",
    title: "Quality and escalation are tracked",
    body: "Confidence, policy match and unresolved steps are monitored."
  },
  {
    label: "Human takeover",
    title: "Staff steps in when judgment matters",
    body: "Reception gets context, urgency and the conversation history."
  }
];

export const labFeatures = [
  {
    title: "Failure Intelligence",
    body: "Understand where AI got stuck, which policy was missing and what hotel context should be improved."
  },
  {
    title: "Long Journey Simulation",
    body: "Simulate multi-day guest conversations that include pre-arrival, in-stay support and upsell opportunities."
  },
  {
    title: "Replay mode",
    body: "Replay real or synthetic journeys step by step to compare response quality and human handover timing."
  }
];
