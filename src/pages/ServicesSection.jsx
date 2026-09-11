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
    <section className="bg-slate-50 py-28 relative overflow-hidden text-slate-900 border-b border-slate-200 selection:bg-blue-600/20">

      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="mb-20 md:text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Building Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">Digital & Global</span> Future
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From coding high-speed web apps to navigating international export trade, we provide the tools and expertise to build a borderless business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Mapping Services */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`
                group relative p-8 rounded-[2rem] border bg-white shadow-sm hover:shadow-xl
                border-slate-200 hover:border-blue-400 hover:-translate-y-1.5
                transition-all duration-300
                ${index === 6 ? "md:col-span-2 lg:col-span-1" : ""}
              `}
            >
              {/* Header: Icon & Category */}
              <div className="flex justify-between items-start mb-6 relative">
                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-slate-200/80
                  ${service.bg} ${service.color}
                `}>
                  <service.icon size={28} strokeWidth={1.75} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full bg-slate-100 ${service.color}`}>
                  {service.category}
                </span>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm min-h-[50px]">
                  {service.desc}
                </p>

                {/* Footer Action */}
                <a href="/contact" className="inline-flex items-center gap-2.5 text-sm font-bold text-blue-600 group/btn">
                  <span>Explore Solution</span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center bg-blue-50 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <ArrowUpRight size={14} />
                  </div>
                </a>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-white border border-blue-200/80 shadow-md flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to expand your business?</h3>
            <p className="text-slate-600 text-sm">Whether you need custom code or global trade solutions, our senior engineers are ready.</p>
          </div>
          <a
            href="https://wa.me/918307967782?text=Hi%20Sagar%2C%20I%20want%20to%20discuss%20a%20project%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-md shadow-blue-500/20 whitespace-nowrap"
          >
            Book Free Consultation
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;