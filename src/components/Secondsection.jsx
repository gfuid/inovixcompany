import React from "react";
import { motion } from "framer-motion";
import FlipLink from "../ui/FlipLink"; // Ensure this path is correct

// --- Internal Helper for the "ASOS" Masked Text Reveal ---
const MaskedReveal = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={`overflow-hidden relative inline-block ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{
          duration: 0.75,
          ease: [0.33, 1, 0.68, 1], // "Cubic Bezier" for that snappy premium feel
          delay: delay
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const Secondsection = () => {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden py-24">

      {/* --- 1. Ambient Background Effects --- */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {/* Grain Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

        {/* Animated Glow Blob */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">

        {/* --- 2. Headline with Masked Reveal (The ASOS Effect) --- */}
        <div className="flex flex-col items-center justify-center leading-none mb-8">
          {/* We split the heading to control the reveal of each line */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            <MaskedReveal delay={0.1}>Let’s Build</MaskedReveal>
          </h2>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-300">
            <MaskedReveal delay={0.2}>
              Your Digital <span className="text-indigo-500">Presence</span> 🚀
            </MaskedReveal>
          </h2>
        </div>

        {/* --- 3. Paragraph with Staggered Fade --- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-16 font-light leading-relaxed"
        >
          We craft stunning websites, seamless apps, and powerful digital
          solutions to help brands stand out in today’s fast-paced world.
        </motion.p>

        {/* --- 4. Social Links with Magnetic Feel --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16">
          {["LINKEDIN", "GITHUB", "TWITTER"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + (i * 0.1), duration: 0.5 }}
              className="group relative"
            >
              <div className="text-xl sm:text-2xl font-semibold tracking-wide">
                <FlipLink
                  href={
                    label === "LINKEDIN"
                      ? "https://linkedin.com"
                      : label === "GITHUB"
                        ? "https://github.com"
                        : "https://twitter.com"
                  }
                >
                  {label}
                </FlipLink>
              </div>

              {/* Tiny decorative dot that appears on hover */}
              <span className="absolute -bottom-2 left-1/2 w-1 h-1 bg-indigo-500 rounded-full opacity-0 -translate-x-1/2 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Secondsection;