"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, ArrowRight, Sparkles } from "lucide-react";

// --- 1. Scramble Text Component ---
const ScrambleText = ({ text, className, trigger }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "XY01_<>[]{}—+*";

  useEffect(() => {
    let interval;
    if (trigger) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 2;
      }, 30);
    } else {
      setDisplayText(text);
    }
    return () => clearInterval(interval);
  }, [trigger, text]);

  return <span className={className}>{displayText}</span>;
};

// --- 2. Interactive Link Component ---
const FooterLink = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm block hover:translate-x-1 duration-200"
    >
      <ScrambleText text={text} trigger={isHovered} />
    </a>
  );
};

export default function Footer() {
  const links = {
    company: ["About Us", "Careers", "Our Team", "News"],
    services: ["Web Development", "Social Media", "Video Production", "SEO"],
    resources: ["Blog", "Case Studies", "Whitepapers", "Support"],
  };

  const socialIcons = [
    { icon: <Instagram className="w-5 h-5" />, href: "#", color: "hover:text-pink-500", glow: "hover:shadow-pink-500/50" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", color: "hover:text-cyan-400", glow: "hover:shadow-cyan-500/50" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", color: "hover:text-blue-500", glow: "hover:shadow-blue-500/50" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", color: "hover:text-blue-600", glow: "hover:shadow-blue-600/50" },
  ];

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden selection:bg-cyan-500/30">

      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Top Glow Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      {/* Animated Gradient Blob */}
      <motion.div
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <h2 className="text-3xl font-black tracking-tighter text-white mb-6 flex items-center gap-2">
                INOVIX<span className="text-cyan-400">.CO</span>
                <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm">
                Crafting digital experiences that merge creativity with future-tech. We build brands that don't just survive—they dominate.
              </p>

              {/* Magnetic Social Icons */}
              <div className="flex gap-4">
                {socialIcons.map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${social.color} hover:shadow-lg ${social.glow}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                viewport={{ once: true }}
              >
                <h3 className="text-white font-bold uppercase tracking-wider text-xs mb-6 text-cyan-500/80">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <FooterLink text={item} />
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-white/20 transition-colors"
            >
              <h3 className="text-white font-bold mb-2">Join the Future</h3>
              <p className="text-gray-400 text-xs mb-4">Get the latest trends in digital marketing weekly.</p>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all placeholder:text-gray-600"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 w-10 bg-cyan-600 rounded-lg flex items-center justify-center text-white hover:bg-cyan-500 transition-colors overflow-hidden group/btn">
                  <div className="absolute inset-0 bg-white/20 skew-x-12 -translate-x-full group-hover/btn:animate-[shimmer_1s_infinite]"></div>
                  <ArrowRight className="w-4 h-4 relative z-10" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © 2025 inovix.co.io Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms of Service" />
          </div>
        </div>
      </div>
    </footer>
  );
}