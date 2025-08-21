import React from "react";
import { Header } from "../components/Header";
import { HeroSection } from "../components/HeroSaction";
import { FeaturesSection } from "../components/FeturesSection";
import { ScannerSection } from "../components/ScannerSection";
import { Footer } from "../components/Footer";
import Tokenomics from "../components/TokenomicsSection";
import { RoadmapSection } from "../components/RoadmapSection";
import { FAQSection } from "../components/Faq";

export const HomePage = () => {
  const appStyle = {
    background: "#070630",
    backgroundImage: `linear-gradient(
      90deg,
      rgba(7, 6, 48, 1) 0%,
      rgba(7, 7, 62, 1) 0%,
      rgba(0, 0, 3, 1) 38%,
      rgba(9, 9, 121, 1) 100%,
      rgba(3, 150, 214, 1) 100%,
      rgba(0, 212, 255, 1) 100%
    )`,
  };

  return (
    <div id="home" style={appStyle}>
      {/* Full-width Header */}
      {/* Section with image background */}
      <div className="h-[700px]">
        <div className="max-w-6xl mx-auto">
          <Header />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-12 ">
            {/* Hero Section: 1/3 width */}
            <div className="h-fit md:max-w-sm lg:max-w-md">
              <HeroSection />
            </div>

            {/* Right side empty or optional content */}
            <div className="max-w-5xl -ml-70 overflow-visible pr-30 hidden md:block">
              <img src="/image.png" alt="image" style={{ maxWidth: "130%" }} />
            </div>
          </div>
        </div>
      </div>

      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <FeaturesSection />
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScannerSection />
      </section>

      <section
        id="tokenomics"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <Tokenomics />
      </section>
      <section
        id="roadmap"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        <RoadmapSection />
      </section>
      <section id="faq" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FAQSection />
      </section>
      <Footer />
    </div>
  );
};
