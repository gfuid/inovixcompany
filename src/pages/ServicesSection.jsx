"use client";

import React from "react";
import {
  Smartphone, Globe, Cpu, Palette,
  Ship, TrendingUp, ArrowUpRight, GraduationCap
} from "lucide-react";

// --- Service Data Configuration ---
const services = [
  // --- PILLAR 1: DIGITAL & TECH ---
  {
    id: "app-dev",
    category: "Digital",
    title: "App Development",
    desc: "Native and cross-platform mobile applications engineered for performance, scalability, and seamless user experiences on iOS and Android.",
    icon: Smartphone,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
  },
  {
    id: "web-dev",
    category: "Digital",
    title: "Web Development",
    desc: "High-conversion websites and custom web applications built with modern frameworks (React, Next.js) to dominate search engines.",
    icon: Globe,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "group-hover:border-indigo-500/50",
  },
  {
    id: "automation",
    category: "Tech",
    title: "Business Automation",
    desc: "Streamline operations with AI-powered workflows, chatbots, and CRM integrations to save time and reduce manual errors.",
    icon: Cpu,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "group-hover:border-emerald-500/50",
  },
  {
    id: "design",
    category: "Creative",
    title: "UI/UX & Brand Design",
    desc: "Compelling visual identities, logos, and user interfaces that resonate with your audience and define your brand's digital presence.",
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "group-hover:border-pink-500/50",
  },

  // --- PILLAR 2: BUSINESS & TRADE ---
  {
    id: "export-consult",
    category: "Trade",
    title: "Export & Global Trade",
    desc: "End-to-end guidance on international shipping, documentation, compliance, and market entry strategies for aspiring exporters.",
    icon: Ship,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "group-hover:border-orange-500/50",
  },
  {
    id: "trade-learning",
    category: "Education",
    title: "Learn Global Trade",
    desc: "Comprehensive training programs on import-export dynamics. Master the art of global logistics and find buyers worldwide.",
    icon: GraduationCap,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "group-hover:border-yellow-500/50",
  },
  {
    id: "biz-consult",
    category: "Strategy",
    title: "Business Consulting",
    desc: "Strategic advisory to scale your operations, optimize revenue models, and navigate complex market challenges.",
    icon: TrendingUp,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "group-hover:border-cyan-500/50",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
            Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Digital & Global</span> Future
          </h2>
          <p className="text-gray-400 text-lg">
            From coding scalable apps to navigating international waters, we provide the tools and expertise to build a borderless business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Mapping Services */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                group relative p-8 rounded-[2rem] border bg-zinc-900/60 backdrop-blur-md 
                border-white/10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50
                transition-all duration-300 ${service.border}
                ${index === 6 ? "md:col-span-2 lg:col-span-1" : ""} /* Makes the last item centered on tablet if needed */
              `}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.bg} rounded-bl-[4rem] rounded-tr-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Header: Icon & Category */}
              <div className="flex justify-between items-start mb-6 relative">
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg border border-white/5
                  ${service.bg} ${service.color}
                `}>
                  <service.icon size={32} strokeWidth={1.5} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full bg-white/5 ${service.color}`}>
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-50 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-8 text-sm min-h-[60px]">
                  {service.desc}
                </p>

                {/* Footer Action */}
                <button className="flex items-center gap-3 text-sm font-bold text-white group/btn">
                  <span className="group-hover:text-cyan-400 transition-colors">Explore Solution</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-white/10 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 group-hover:scale-110`}>
                    <ArrowUpRight size={16} />
                  </div>
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-20 p-8 rounded-[2rem] bg-gradient-to-r from-zinc-900 to-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to expand?</h3>
            <p className="text-gray-400 text-sm">Whether you need code or cargo solutions, we are ready.</p>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 px-8 rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Book a Free Consultation
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;