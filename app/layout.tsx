import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import "@/styles/commercial.css";
const title="Hospedios | Hospitality con IA";
const description="Cuida de tus huéspedes antes, durante y después de su estancia. Atención con IA, peticiones organizadas y un equipo que mantiene el control.";
export const metadata: Metadata = {
  metadataBase: new URL("https://staynex-website.vercel.app"),
  title: {default:title, template:"%s | Hospedios"}, description,
  alternates:{canonical:"/"},
  openGraph:{title,description,url:"https://staynex-website.vercel.app",siteName:"Hospedios",locale:"es_ES",type:"website",images:[{url:"/og-image.svg",width:1200,height:630,alt:"Hospedios · Hospitality con IA"}]},
  twitter:{card:"summary_large_image",title,description,images:["/og-image.svg"]},
  icons:{icon:[{url:"/icon.svg",type:"image/svg+xml"},{url:"/favicon.svg",type:"image/svg+xml"}],shortcut:"/favicon.svg",apple:[{url:"/apple-icon.svg",type:"image/svg+xml"}]}
};
export const viewport: Viewport = {width:"device-width",initialScale:1,themeColor:"#2864ff"};
export default function RootLayout({children}:{children:ReactNode}) {
 return <html lang="es"><body className="antialiased">{children}</body></html>;
}
