import GreetingSection from "@/features/about/components/GreetingSection";
import MissionSection from "@/features/about/components/MissionSection";
import CoreValuesSection from "@/features/about/components/CoreValuesSection";

export const metadata = {
  title: "About Us | FITUP",
  description:
    "Tìm hiểu thêm về sứ mệnh và tầm nhìn của ứng dụng fitness FITUP.",
};

export default function AboutPage() {
  return (
    <div className="flex w-full flex-col items-center overflow-hidden">
      <GreetingSection />
      <MissionSection />
      <CoreValuesSection />
    </div>
  );
}
