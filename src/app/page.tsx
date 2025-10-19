import HeroSection from "@/components/home/1. HeroSection";
import FeaturesGrid from "@/components/home/2. FeaturesGrid";
import AboutFounder from "@/components/home/AboutFounder";
import CoursesOverview from "@/components/home/CoursesOverview";
import SuccessStats from "@/components/home/SuccessStats";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesGrid />
      <AboutFounder />
      <CoursesOverview />
      <SuccessStats />
      <Testimonials />
      <CTASection />
    </>
  );
}
