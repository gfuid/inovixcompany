"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic Meaningful Brand Milestones
  const getStage = (c) => {
    if (c < 30) {
      return {
        step: "PHASE 01",
        title: "Eliminating Agency Markups",
        desc: "Affordable websites & software starting at just ₹4,999",
      };
    }
    if (c < 65) {
      return {
        step: "PHASE 02",
        title: "Powering High-Speed Workflows",
        desc: "Sub-second React apps & automated WhatsApp lead funnels",
      };
    }
    if (c < 92) {
      return {
        step: "PHASE 03",
        title: "1-on-1 Founder Accountability",
        desc: "Direct senior engineering with Sagar Punia",
      };
    }
    return {
      step: "READY",
      title: "Welcome to Inovix Studio",
      desc: "Delivering world-class digital scale for ambitious businesses",
    };
  };

  const currentStage = getStage(count);

  useEffect(() => {
    // Fast, respectful, theatrical timing: ~1.4s total
    const totalDuration = 1400;
    const intervalTime = 16;
    const totalSteps = totalDuration / intervalTime;
    const increment = 100 / totalSteps;

    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsLoading(false);
            if (onComplete) onComplete();
          }, 350);
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
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col justify-between p-6 sm:p-12 bg-[#040407] text-white overflow-hidden select-none"
        >
          {/* Subtle Ambient Background Lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/15 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute inset-0 bg-grid-subtle opacity-15 pointer-events-none" />

          {/* Top Bar: Brand & Founder Tag */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span className="text-slate-300 font-semibold tracking-wider uppercase">Inovix Studio</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-slate-500">
              <span>Panipat, Haryana</span>
              <span>•</span>
              <span className="text-cyan-400">Serving Ambitions Globally</span>
            </div>
          </div>

          {/* Centerpiece: Brand Emblem & Meaningful Stage */}
          <div className="relative z-10 max-w-xl mx-auto text-center flex flex-col items-center">
            {/* Logo Icon with Glowing Aura */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-400 to-blue-600 flex items-center justify-center font-black text-white text-2xl shadow-[0_0_40px_rgba(0,212,255,0.4)] mb-6"
            >
              IX
              {/* Outer Pulsing Ring */}
              <div className="absolute -inset-2 rounded-3xl border border-cyan-500/30 animate-pulse pointer-events-none" />
            </motion.div>

            {/* Brand Title */}
            <div className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-3">
              Inovix<span className="text-cyan-400">.</span>
            </div>

            {/* Dynamic Stage Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono font-bold tracking-wider uppercase mb-3">
              <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400" />
              <span>{currentStage.step}</span>
            </div>

            {/* Meaningful Stage Headline */}
            <h2 className="text-lg sm:text-2xl font-bold text-white tracking-tight min-h-[32px] transition-all">
              {currentStage.title}
            </h2>

            {/* Stage Description */}
            <p className="text-xs sm:text-sm text-slate-400 mt-1 min-h-[24px] max-w-md">
              {currentStage.desc}
            </p>
          </div>

          {/* Bottom Bar: Precision Progress Bar & Percentage */}
          <div className="relative z-10 max-w-2xl w-full mx-auto space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-500">SYSTEM CALIBRATION</span>
              <span className="text-cyan-400 font-bold text-sm">
                {Math.round(count)}%
              </span>
            </div>

            {/* Progress Track */}
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 rounded-full shadow-[0_0_15px_rgba(0,212,255,0.8)]"
                style={{ width: `${count}%` }}
              />
            </div>

            {/* Bottom Proof Strip */}
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-1">
              <span>22+ Live Platforms Built</span>
              <span>99% Client Satisfaction</span>
              <span className="text-emerald-400 font-semibold">Founder-Led Engineering</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}