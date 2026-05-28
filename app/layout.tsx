import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://staynex.ai"),
  title: {
    default: "Staynex | AI operations for modern hotels",
    template: "%s | Staynex"
  },
  description:
    "Staynex centralizes guest communication, hotel operations, AI workflows, revenue opportunities and hospitality intelligence in one platform.",
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
      "AI operations for modern hotels across guest communication, reception readiness, revenue experiences and AI quality monitoring.",
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
