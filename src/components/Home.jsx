import React, { Suspense } from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Secondsection from "./Secondsection.jsx"; // Keep Top Sections Normal (Better for SEO)
import ToolsSection from "../tools/ToolsSection.jsx";
import { Helmet } from "react-helmet-async";

// --- LAZY LOAD: Bottom Sections (Speed Optimization) ---
// Yeh components tabhi load honge jab zaroorat hogi, isse site superfast ho jayegi.
const Third = React.lazy(() => import("./Third.jsx"));
const Fourth = React.lazy(() => import("./Fourth.jsx"));
const TestimonialsSection = React.lazy(() => import("./TestimonialsSection.jsx"));
const PortfolioSection = React.lazy(() => import("./PortfolioSection.jsx"));
const WhyChooseUsSection = React.lazy(() => import("./WhyChooseUsSection.jsx"));
const PricingSection = React.lazy(() => import("./PricingSection.jsx"));
const ContactSection = React.lazy(() => import("./ContactSection.jsx"));
const Footer = React.lazy(() => import("./Footer.jsx"));

// Simple Loading Spinner for Lazy Components
const Loader = () => (
  <div className="flex justify-center items-center py-20 bg-black text-cyan-500">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
  </div>
);

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Helmet>
        <title>Inovix: Best Digital Marketing Agency in Panipat & Haryana</title>
        <meta
          name="description"
          content="Grow your business with Inovix. We are Haryana's leading digital marketing agency offering SEO, Web Design, and Social Media Marketing services."
        />
        <link rel="canonical" href="https://www.inovix.co.in/" />
      </Helmet>

      <Navbar />

      {/* Top Fold Content (Load Instantly for SEO) */}
      <Hero />
      <Secondsection />
      <ToolsSection />

      {/* Below Fold Content (Lazy Load for Speed) */}
      <Suspense fallback={<Loader />}>
        <Third />
        <Fourth />
        <TestimonialsSection />
        <PortfolioSection />
        <WhyChooseUsSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;