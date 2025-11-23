"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Rocket, Users, Zap, BarChart, ShieldCheck, ArrowRight } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed & Efficiency",
      desc: "Rapid deployment strategies that get your brand to market faster.",
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Precision Targeting",
      desc: "AI-driven audience analysis to ensure every ad dollar converts.",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Scalable Growth",
      desc: "Frameworks designed to handle 10x traffic and sales volume.",
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Brand Integrity",
      desc: "Consistent, high-quality messaging that builds long-term trust.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
  ];

  const steps = [
    { step: "01", title: "Discovery", desc: "We map your goals & audit your current digital footprint." },
    { step: "02", title: "Strategy", desc: "Architecting a custom roadmap for maximum ROI." },
    { step: "03", title: "Execution", desc: "Deploying campaigns with precision and creativity." },
    { step: "04", title: "Optimization", desc: "Real-time data analysis to refine and scale results." },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden selection:bg-cyan-500/30">

      {/* --- Background Effects --- */}
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Why Partner With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              The Future?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We don't just follow trends; we engineer them. Here is how we bridge the gap between your brand and the digital frontier.
          </motion.p>
        </div>

        {/* --- Part 1: The Core Pillars (Grid) --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {reasons.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative bg-neutral-900/50 border ${r.border} rounded-3xl p-6 hover:bg-neutral-900 transition-all duration-300 overflow-hidden`}
            >
              {/* Soft glow background based on color */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${r.bg.replace('/10', '/30')}`} />

              <div className={`w-14 h-14 rounded-2xl ${r.bg} ${r.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {r.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">{r.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Part 2: The Workflow (Timeline) --- */}
        <div className="relative">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Our Process
          </motion.h3>

          {/* Connected Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent -translate-y-8 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group text-center"
              >
                {/* Step Number Circle */}
                <div className="w-16 h-16 mx-auto bg-black border border-cyan-500/30 rounded-full flex items-center justify-center text-xl font-bold text-cyan-400 mb-6 shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] transition-all duration-300">
                  {s.step}
                </div>

                {/* Card Content */}
                <div className="bg-neutral-900/40 border border-white/5 rounded-2xl p-6 backdrop-blur-sm hover:border-cyan-500/30 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-gray-400">{s.desc}</p>
                </div>

                {/* Connector Arrow (Mobile Only) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4 text-white/20">
                    <ArrowRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}