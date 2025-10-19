import HeroSection from "@/components/home/1. HeroSection";
import FeaturesGrid from "@/components/home/2. FeaturesGrid";
import AboutFounder from "@/components/home/3. AboutFounder";
import SuccessStats from "@/components/home/4. SuccessStats";
import Testimonials from "@/components/home/5. Testimonials";
import CTASection from "@/components/home/6. CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <AboutFounder />
      <SuccessStats />
      <Testimonials />
      <CTASection />
    </>
  );
}
