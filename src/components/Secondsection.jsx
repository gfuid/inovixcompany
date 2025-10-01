import React from "react";
import { motion } from "framer-motion";
import FlipLink from "../ui/FlipLink"; // Adjust path

const Secondsection = () => {
  // fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section className="relative w-full py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
        >
          Let’s Build Your Digital Presence 🚀
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          We craft stunning websites, seamless apps, and powerful digital
          solutions to help brands stand out in today’s fast-paced world.
        </motion.p>

        {/* Social / Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-lg sm:text-xl font-semibold"
        >
          {["LINKEDIN", "GITHUB", "TWITTER"].map((label) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Secondsection;
