"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Zap,
  UserCheck,
  Clock,
  ShieldAlert,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Coins,
} from "lucide-react";
import { Link } from "react-router-dom";
import devAvatar from "../assets/assets/brand/dev_avatar.png";

export default function WhyChooseUsSection() {
  const moats = [
    {
      icon: Coins,
      title: "Radical Affordability",
      desc: "Up to 70% lower investment than big-city agencies. No bloated agency markup — you pay only for direct engineering.",
      badge: "Save ₹1,50,000+",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      icon: UserCheck,
      title: "1-on-1 Founder Care",
      desc: "Never get passed around between 4 different junior account managers. You speak directly with the founder building your project.",
      badge: "Zero Bureaucracy",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      icon: Clock,
      title: "3 to 5 Day Turnaround",
      desc: "We don't waste 3 months on unnecessary Zoom meetings. We build, review, and launch your high-converting site in days.",
      badge: "Rapid Delivery",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200",
    },
    {
      icon: Cpu,
      title: "Modern Web Stack",
      desc: "Built with React, Vite & Next.js. Sub-second load times (<0.8s), 99.9% uptime, and 100% Google Core Web Vitals score.",
      badge: "No Bloated Templates",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-200",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "15-Min Quick Brief",
      desc: "Share your business details, target customers, and goals via WhatsApp or quick phone call.",
    },
    {
      step: "02",
      title: "Live Preview in 48h",
      desc: "We engineer a working live preview link so you can test and give feedback immediately.",
    },
    {
      step: "03",
      title: "SEO & Lead Tuning",
      desc: "We connect Google Maps, configure high-intent keywords, and test 1-click WhatsApp buttons.",
    },
    {
      step: "04",
      title: "Live Launch & Care",
      desc: "We deploy to high-speed cloud hosting with ongoing technical care starting at just ₹500/mo.",
    },
  ];

  return (
    <section id="why-us" className="relative w-full py-24 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-100/30 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>The Inovix Competitive Advantage</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            Why Business Owners <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Choose Inovix Over Others
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-500"
          >
            We stripped out the corporate fluff and built an agency that respects your hard-earned money and time.
          </motion.p>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {moats.map((m, index) => {
            const Icon = m.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-white border ${m.border} rounded-3xl p-6 hover:shadow-lg hover:border-blue-300 transition-all duration-300 flex flex-col justify-between shadow-sm`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${m.bg} ${m.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-500 border border-slate-200">
                      {m.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">{m.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Spotlight */}
        <div className="mb-20 p-6 sm:p-8 rounded-3xl bg-white border border-blue-200 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-lg shadow-blue-600/5">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-blue-300 shrink-0 group">
            <img
              src={devAvatar}
              alt="Sagar Punia — Founder & Lead Engineer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full shadow-sm" />
          </div>
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
              <span>Founder & Lead Engineer — Sagar Punia</span>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">
              Direct Senior Engineering. Zero Junior Middlemen.
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
              Certified AI Full-Stack & Automation Developer with a track record building high-performance SaaS platforms (₹50L+ volume), B2B pharmaceutical portals (Trireme Group, 90% latency reduction), and 22+ production websites. You get personal founder accountability on every commit.
            </p>
          </div>
        </div>

        {/* 4-Step Process */}
        <div className="pt-8 border-t border-slate-200">
          <div className="text-center max-w-xl mx-auto mb-14">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How We Work Together
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              From initial WhatsApp chat to live deployment in 4 straightforward steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((s, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                viewport={{ once: true }}
                className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-start hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-mono font-bold text-sm mb-4 shadow-sm">
                  {s.step}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{s.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="btn-press inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all"
            >
              <span>Get Your Project Started Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}