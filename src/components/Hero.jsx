import React from "react";
import { Button } from "../ui/Button";
import WrapButton from "../ui/WrapButton";
import { motion } from "framer-motion";
import { ArrowRight, Globe } from "lucide-react";
import b1 from "../assets/t.png"
import b2 from "../assets/a.png"
import b3 from "../assets/logo.png"
import { Link } from "react-router-dom";


export default function Hero() {
  // ---------------------------
  // Dynamic Rotating Text (ASOS Fade)
  // ---------------------------
  const phrases = [
    "Next-Generation Digital Growth",
    "AI-Powered Marketing",
    "High-Performance Branding",
    "ROI-Driven Digital Strategy",
  ];

  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const dynamicText = phrases[index];

  // ---------------------------
  // Heading Dynamic Text
  // ---------------------------
  const headingPhrases = [
    "Businesses Online",
    "Brands Globally",
    "Ideas Into Growth",
    "Digital Presence",
    "Marketing Through AI",
  ];

  const [headingIndex, setHeadingIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setHeadingIndex((prev) => (prev + 1) % headingPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const dynamicHeading = headingPhrases[headingIndex];

  // ---------------------------
  // ASOS-Style Animation Variants
  // ---------------------------
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeScale = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-black text-white overflow-hidden selection:bg-cyan-500/30">

      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 px-6 max-w-5xl mx-auto text-center"
      >
        {/* Dynamic Pill Badge */}
        <motion.div
          variants={fadeScale}
          key={dynamicText} // makes it fade like ASOS
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm mt-12"
        >
          <Globe className="w-4 h-4" />
          <span className="transition-opacity duration-500">{dynamicText}</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          Transforming <br className="hidden md:block" />

          {/* Gradient First Word */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            {dynamicHeading.split(" ")[0]}
          </span>{" "}

          {/* Dynamic Second Part */}
          <motion.span
            key={dynamicHeading} // ASOS fade effect
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 relative inline-block"
          >
            {dynamicHeading.split(" ").slice(1).join(" ")}

            <svg
              className="absolute w-full h-3 -bottom-1 left-0 text-cyan-500 opacity-60"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <path
                d="M0 5 Q 50 10 100 5"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          We help brands dominate the digital world with AI-driven marketing,
          performance-focused campaigns, and modern creative strategies.
          Elevate your presence, attract customers, and scale revenue with
          precision.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <Link to="/contact">
              <WrapButton className="relative px-8 py-3 rounded-full font-semibold text-white bg-black border border-gray-800 hover:bg-gray-900 transition-all duration-300 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </WrapButton>
            </Link>

          </div>
          <Link to="/about">
            <Button
              size="lg"
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-white/5 rounded-full px-8 py-3 transition-all border border-transparent hover:border-white/10"
            >
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Social Proof */}
        {/* Social Proof */}
        <motion.div
          variants={fadeUp}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <p className="text-sm text-gray-500 mb-4">TRUSTED BY GROWING BRANDS</p>

          <div className="flex justify-center gap-8 opacity-40 grayscale">

            {/* Logo 1 */}
            <div className="h-8 w-24 flex items-center justify-center">
              <img src={b1} alt="Brand 1" className="h-full object-contain" />
            </div>

            {/* Logo 2 */}
            <div className="h-8 w-24 flex items-center justify-center">
              <img src={b2} alt="Brand 2" className="h-full object-contain" />
            </div>

            {/* Placeholder Logos */}
            <div className="h-8 w-24 bg-white/20 rounded flex items-center justify-center text-xs font-medium tracking-wide">
              Supplix
            </div>

            <div className="h-8 w-24 flex items-center justify-center">
              <img src={b3} alt="Brand 2" className="h-full object-contain" />
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
