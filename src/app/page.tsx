import { LPHeroSection } from "@/components/sections/lp-hero-section";
import { LPTabsSection } from "@/components/sections/lp-tabs-section";
import { LPBentoSection } from "@/components/sections/lp-bento-section";
import { LPQuoteSection } from "@/components/sections/lp-quote-section";
import { LPTestimonialSection } from "@/components/sections/lp-testimonial-section";
import { LPOfferSection } from "@/components/sections/lp-offer-section";
import { LPFooterSection } from "@/components/sections/lp-footer-section";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <LPHeroSection />
      <LPTabsSection />
      <LPBentoSection />
      <LPQuoteSection />
      <LPTestimonialSection />
      <LPOfferSection />
      <LPFooterSection />
    </main>
  );
}
