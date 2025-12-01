import React from "react";
import Hero from "./Hero.jsx";
import Navbar from "./Navbar.jsx";
import Secondsection from "./Secondsection.jsx";
import Third from "./Third.jsx";
import Fourth from "./Fourth.jsx";
import TestimonialsSection from "./TestimonialsSection.jsx";
import PortfolioSection from "./PortfolioSection.jsx";
import WhyChooseUsSection from "./WhyChooseUsSection.jsx";

import ContactSection from "./ContactSection.jsx";
import PricingSection from "./PricingSection.jsx";
import Footer from "./Footer.jsx";
import ToolsSection from "../tools/ToolsSection.jsx";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Best Digital Marketing Agency in Panipat | Inovix</title>
        <meta name="description" content="Inovix helps Panipat businesses grow with SEO and Web Design." />
      </Helmet>
      <Navbar />
      <Hero />
      <Secondsection />
      <ToolsSection />
      <Third />
      <Fourth />
      <TestimonialsSection />
      <PortfolioSection />
      <WhyChooseUsSection />

      <PricingSection />
      <ContactSection />
      <Footer />



    </div>
  );
};

export default Home;
