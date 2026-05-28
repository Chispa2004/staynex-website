import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import {
  ContactSection,
  DemoSection,
  HealthSection,
  MetricsStrip,
  OperationsSection,
  ProductSection,
  QualityLabSection,
  ReceptionSection,
  RevenueSection,
  StorytellingSection,
  WhyHotelsSection,
  WhatsAppSection
} from "@/components/LandingSections";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MetricsStrip />
        <StorytellingSection />
        <WhyHotelsSection />
        <ProductSection />
        <OperationsSection />
        <RevenueSection />
        <ReceptionSection />
        <WhatsAppSection />
        <HealthSection />
        <QualityLabSection />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
