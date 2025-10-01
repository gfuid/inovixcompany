import React from "react";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Secondsection from "./Secondsection.jsx";
import Third from "./Third.jsx";
import Fourth from "./Fourth.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import PortfolioSection from "./PortfolioSection.jsx";
import WhyChooseUsSection from "./WhyChooseUsSection.jsx";
import ProcessSection from "./ProcessSection.jsx";
import ContactSection   from "./ContactSection.jsx";
import PricingSection from "./PricingSection.jsx";
import Footer from "./Footer.jsx";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Secondsection />
      <Third />
      <Fourth />
      <TestimonialsSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <PricingSection />
      <ContactSection />
      <Footer />
      
    

    </div>
  );
};

export default Home;
