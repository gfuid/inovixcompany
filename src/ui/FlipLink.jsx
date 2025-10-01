import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children = "", href = "#" }) => {
  // Ensure children is a string
  if (typeof children !== "string") {
    children = String(children);
  }

  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-semibold uppercase text-white sm:text-7xl md:text-8xl"
      style={{ lineHeight: 0.75 }}
    >
      {/* Top Layer */}
      <div>
        {children.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Bottom Layer */}
      <div className="absolute inset-0">
        {children.split("").map((letter, i) => (
          <motion.span
            key={i}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default FlipLink;
