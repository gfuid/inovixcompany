import React, { Suspense } from "react";
import Hero from "./Hero.jsx";
import TrustBar from "./TrustBar.jsx";
import Secondsection from "./Secondsection.jsx"; // Problem vs Solution
import StatsCounter from "./StatsCounter.jsx";
import { Helmet } from "react-helmet-async";

// --- LAZY LOAD: Below the Fold Sections for Performance & Fast Initial Paint ---
const Third = React.lazy(() => import("./Third.jsx")); // Marquee Strip
const Fourth = React.lazy(() => import("./Fourth.jsx")); // Services Bento Grid
const PortfolioSection = React.lazy(() => import("./PortfolioSection.jsx")); // Case Studies
const WhyChooseUsSection = React.lazy(() => import("./WhyChooseUsSection.jsx")); // Moats & Workflow
const PricingSection = React.lazy(() => import("./PricingSection.jsx")); // 4-Tier Pricing
const ToolsPreview = React.lazy(() => import("./ToolsPreview.jsx")); // Inovix Labs Tools Spotlight
const TestimonialsSection = React.lazy(() => import("./TestimonialsSection.jsx")); // Social Proof
const FAQSection = React.lazy(() => import("./FAQSection.jsx")); // Objection Handling
const ContactSection = React.lazy(() => import("./ContactSection.jsx")); // Form + WhatsApp CTA
const Footer = React.lazy(() => import("./Footer.jsx"));

const SectionLoader = () => (
  <div className="flex justify-center items-center py-16 bg-[#040407] text-cyan-400">
    <div className="animate-spin rounded-full h-8 w-8 border-2 border-cyan-500 border-t-transparent"></div>
  </div>
);

const Home = () => {
  return (
    <div className="bg-[#040407] min-h-screen text-slate-100 selection:bg-cyan-500/30">
      <Helmet>
        <title>Inovix: India's Most Affordable Agency | Web Apps, CRMs & Growth</title>
        <meta
          name="description"
          content="Get world-class websites, mobile apps, and custom CRMs engineered without the bloated agency markup. Plans starting at just ₹500/mo. Based in Panipat, Haryana."
        />
        <link rel="canonical" href="https://www.inovix.co.in/" />
      </Helmet>

      {/* Top Fold (Immediate Render for SEO & First Impression) */}
      <main>
        <Hero />
        <TrustBar />
        <Secondsection />
        <StatsCounter />

        {/* Below Fold (Lazy Loaded for Speed) */}
        <Suspense fallback={<SectionLoader />}>
          <Third />
          <Fourth />
          <PortfolioSection />
          <WhyChooseUsSection />
          <PricingSection />
          <ToolsPreview />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;