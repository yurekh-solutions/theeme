import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Materials } from "@/components/Materials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeSwitcher />
      <Hero />
      <Services />
      <Materials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
