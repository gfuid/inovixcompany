"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Utility: Scramble Text (Mini version for Loader) ---
const ScrambleText = ({ text, isComplete }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  useEffect(() => {
    let interval;
    if (!isComplete) {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (Math.random() < 0.5) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );
      }, 50);
    } else {
      setDisplayText(text);
    }
    return () => clearInterval(interval);
  }, [isComplete, text]);

  return <span className="font-mono tracking-widest">{displayText}</span>;
};

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate Loading Process
  useEffect(() => {
    const duration = 2000; // 2 seconds total load time
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          // Wait a moment at 100% before triggering exit
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 800);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          // Exit Animation: Slide up like a curtain
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white overflow-hidden"
        >
          {/* --- Background Elements (Matches your Contact Section) --- */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[100px] rounded-full" />
          </div>

          {/* --- Core Loader Animation --- */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-8">

            {/* Rotating Rings Container */}
            <div className="relative w-32 h-32 md:w-40 md:h-40">

              {/* Outer Ring (Cyan) */}
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-cyan-500/30 border-t-cyan-400 border-r-transparent shadow-[0_0_30px_rgba(34,211,238,0.2)]"
              />

              {/* Inner Ring (Purple - Counter Rotating) */}
              <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-purple-500/30 border-b-purple-400 border-l-transparent"
              />

              {/* Center Pulse */}
              <motion.div
                animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inset-0 m-auto w-16 h-16 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full blur-md opacity-50"
              />

              {/* Center Percentage */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-black text-white z-20">
                  {Math.round(count)}
                  <span className="text-sm text-cyan-400 align-top">%</span>
                </span>
              </div>
            </div>

            {/* --- Text Status --- */}
            <div className="text-center space-y-2">
              <h2 className="text-xl font-bold tracking-[0.3em] text-white/90 uppercase">
                <ScrambleText text="INITIALIZING" isComplete={count > 90} />
              </h2>

              {/* Progress Bar */}
              <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 box-shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                  style={{ width: `${count}%` }}
                />
              </div>

              <p className="text-xs text-gray-500 font-mono mt-2">
                ESTABLISHING SECURE CONNECTION...
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}