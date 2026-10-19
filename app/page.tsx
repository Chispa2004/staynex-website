import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import { BenefitsSection, JourneySection, TeamSection, ContactSection } from "@/components/LandingSections";
import { Nav } from "@/components/Nav";
export default function Home() {
  return <LanguageProvider><Nav/><main id="content" tabIndex={-1}><Hero/><BenefitsSection/><JourneySection/><TeamSection/><ContactSection/></main><Footer/></LanguageProvider>;
}
