import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProblemStatementSection from "@/components/ProblemStatementSection";
import VisionTeaseSection from "@/components/VisionTeaseSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <Layout>
      <HeroSection />
      <ProblemStatementSection />
      <VisionTeaseSection />
      <WaitlistSection />
      <Footer />
    </Layout>
  );
}
