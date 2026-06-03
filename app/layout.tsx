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
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Staynex AI Hospitality Operations Platform"
      }
    ]
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: "/favicon.svg",
    apple: [{ url: "/apple-icon.svg", type: "image/svg+xml" }]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2864ff"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
