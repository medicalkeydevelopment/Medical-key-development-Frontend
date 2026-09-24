import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import CampaignSection from "@/components/home/CampaignSection";
import OffersSection from "@/components/home/OffersSection";
import StatisticsBar from "@/components/home/StatisticsBar";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Testimonials from "@/components/home/Testimonials";
import AppDownloadBanner from "@/components/home/AppDownloadBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CampaignSection />
      <OffersSection />
      <StatisticsBar />
      <WhyChooseUs />
      <Testimonials />
      <AppDownloadBanner />
    </>
  );
}
