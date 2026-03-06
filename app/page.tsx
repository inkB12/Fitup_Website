import AppJourneySection from "@/features/home/components/AppJourneySection";
import CoachesSection from "@/features/home/components/CoachesSection";
import CtaSection from "@/features/home/components/CtaSection";
import FeaturesSection from "@/features/home/components/FeaturesSection";
import HeroSection from "@/features/home/components/HeroSection";
import NewsDataSection from "@/features/home/components/NewsDataSection";
import StatsSection from "@/features/home/components/StatsSection";
import TestimonialsSection from "@/features/home/components/TestimonialsSection";
import WorkoutPackagesSection from "@/features/home/components/WorkoutPackagesSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <FeaturesSection />
      <CoachesSection />
      <StatsSection />
      <AppJourneySection />
      <WorkoutPackagesSection />
      <NewsDataSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}


