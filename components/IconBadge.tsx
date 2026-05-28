import {
  AlertTriangle,
  BadgeCheck,
  Bot,
  CalendarCheck2,
  CircleDollarSign,
  ClipboardCheck,
  Globe2,
  HeartPulse,
  MessageCircle,
  MonitorCheck,
  Sparkles,
  Workflow
} from "lucide-react";

import type { IconKey } from "@/lib/site";

const icons = {
  message: MessageCircle,
  reception: ClipboardCheck,
  revenue: CircleDollarSign,
  health: HeartPulse,
  lab: Sparkles,
  workflow: Workflow,
  globe: Globe2,
  handover: BadgeCheck,
  monitor: MonitorCheck,
  booking: CalendarCheck2,
  alert: AlertTriangle
};

type IconBadgeProps = {
  icon: IconKey;
  label?: string;
  size?: "sm" | "md";
};

export function IconBadge({ icon, label, size = "md" }: IconBadgeProps) {
  const Icon = icons[icon] ?? Bot;

  return (
    <span className={`icon-badge icon-badge-${size}`} aria-label={label}>
      <Icon aria-hidden="true" />
    </span>
  );
}
