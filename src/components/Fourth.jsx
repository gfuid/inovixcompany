"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MonitorPlay,
  Camera,
  PenTool,
  Megaphone,
  BarChart3,
  Users,
  ArrowUpRight,
  Layers,
} from "lucide-react";

export default function Fourth() {
  const services = [
    {
      id: "01",
      icon: <PenTool className="w-6 h-6" />,
      title: "Creative Design",
      desc: "Logos, branding, infographics, reels & presentation design.",
    },
    {
      id: "02",
      icon: <Camera className="w-6 h-6" />,
      title: "Video Production",
      desc: "Editing, dubbing, podcasts, background music, hosting.",
    },
    {
      id: "03",
      icon: <Megaphone className="w-6 h-6" />,
      title: "Social Marketing",
      desc: "Content calendars, paid ads, influencer collaborations.",
    },
    {
      id: "04",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Ads & Promotion",
      desc: "Google Ads, retargeting campaigns, banner ads.",
    },
    {
      id: "05",
      icon: <MonitorPlay className="w-6 h-6" />,
      title: "Specialized Coverage",
      desc: "Event coverage, industrial shoots & drone services.",
    },
    {
      id: "06",
      icon: <Users className="w-6 h-6" />,
      title: "Business Skills",
      desc: "Quotations, negotiation, finance, communication & psychology.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden selection:bg-cyan-500/30">

      {/* --- Background Effects (Matched to Hero) --- */}

      {/* 1. Technical Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 2. Glow Spotlights (Cyan/Blue) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />


      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Layers className="w-4 h-4" />
            <span>Comprehensive Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Capabilities for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Global Scale
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            We don't just offer services; we provide a complete ecosystem designed to optimize and expand your business reach.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-full bg-black/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-cyan-500/50 hover:bg-white/[0.02] transition-all duration-500"
            >
              {/* Hover Glow Effect inside card */}
              <div className="absolute -inset-2 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

              {/* Top Row: Icon & Number */}
              <div className="relative flex justify-between items-start mb-8 z-10">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/30 transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-5xl font-bold text-white/5 group-hover:text-cyan-500/10 transition-colors duration-500 font-mono">
                  {service.id}
                </span>
              </div>

              {/* Bottom Row: Text */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Arrow Icon that appears on hover */}
              <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-cyan-400">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}