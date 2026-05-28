import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://staynex.ai"),
  title: {
    default: "Staynex | AI Hospitality Operations Platform",
    template: "%s | Staynex"
  },
  description:
    "AI operations platform for hotels: guest communication, reception workflows, WhatsApp AI, provider bookings, revenue opportunities and hotel health monitoring.",
  keywords: [
    "AI hospitality operations",
    "hotel operations platform",
    "WhatsApp hotel concierge",
    "hotel AI monitoring",
    "pre check-in",
    "guest journey automation"
  ],
  openGraph: {
    title: "Staynex | AI Hospitality Operations Platform",
    description:
      "AI operations platform for hotels: guest communication, reception workflows, WhatsApp AI, provider bookings, revenue opportunities and hotel health monitoring.",
    url: "https://staynex.ai",
    siteName: "Staynex",
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b12"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
