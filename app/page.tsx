import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LanguageProvider } from "@/components/LanguageProvider";
import {
  ContactSection,
  BuiltForHotelsSection,
  DemoSection,
  DemoFormSection,
  FinalCtaSection,
  HealthSection,
  HowItWorksSection,
  MetricsStrip,
  OperationsSection,
  ProductSection,
  QualityLabSection,
  ReceptionSection,
  RevenueSection,
  ScenariosSection,
  StorytellingSection,
  WhyHotelsSection,
  WhatsAppSection
} from "@/components/LandingSections";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <LanguageProvider>
      <Nav />
      <main>
        <Hero />
        <MetricsStrip />
        <StorytellingSection />
        <HowItWorksSection />
        <WhyHotelsSection />
        <BuiltForHotelsSection />
        <ScenariosSection />
        <ProductSection />
        <OperationsSection />
        <RevenueSection />
        <ReceptionSection />
        <WhatsAppSection />
        <HealthSection />
        <QualityLabSection />
        <DemoSection />
        <DemoFormSection />
        <FinalCtaSection />
        <ContactSection />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
