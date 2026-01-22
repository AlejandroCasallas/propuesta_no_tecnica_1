import HeroSection from "@/components/HeroSection";
import CVSection from "@/components/CVSection";
import PortfolioSection from "@/components/PortfolioSection";
import ScopeSection from "@/components/ScopeSection";
import TimelineSection from "@/components/TimelineSection";
import MethodologySection from "@/components/MethodologySection";
import QuoteSection from "@/components/QuoteSection";
import TechnicalSection from "@/components/TechnicalSection";
import TermsSection from "@/components/TermSection";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <CVSection />
      <PortfolioSection />
      <ScopeSection />
      <TimelineSection />
      <MethodologySection />
      <QuoteSection />
      <TechnicalSection />
      <TermsSection />
      {/* <DeliverablesSection />
      <CTASection /> */}
    </main>
  );
};

export default Index;
