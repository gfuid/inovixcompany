"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Database,
  Ship,
  TrendingUp,
  Search,
  Video,
  Palette,
  ArrowUpRight,
  Layers,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import SpotlightCard from "../ui/SpotlightCard.jsx";

export default function Fourth() {
  const services = [
    {
      id: "01",
      badge: "High Demand",
      icon: <Code2 className="w-6 h-6 text-cyan-400" />,
      title: "Web Engineering & Apps",
      desc: "Blazing fast web apps built with React, Vite & Next.js. Sub-second load speeds, modern animations, and lead capture systems.",
      features: ["Custom React/Next.js", "Lead Generation Funnels", "Mobile Responsive", "₹500/mo Hosting Option"],
      accent: "cyan",
    },
    {
      id: "02",
      badge: "Scale",
      icon: <Smartphone className="w-6 h-6 text-indigo-400" />,
      title: "Cross-Platform Mobile Apps",
      desc: "iOS & Android mobile apps engineered for speed, clean UX, offline sync, and real-time push notifications for customer retention.",
      features: ["iOS & Android", "Payment Gateway Integration", "Push Notifications", "App Store Publishing"],
      accent: "indigo",
    },
    {
      id: "03",
      badge: "Enterprise",
      icon: <Database className="w-6 h-6 text-emerald-400" />,
      title: "Custom CRM & Software",
      desc: "Automate your daily business operations. Custom billing, inventory systems, lead management CRMs, and staff tracking.",
      features: ["Custom Business Workflows", "Automated Invoicing", "WhatsApp API Bots", "Role-Based Access"],
      accent: "emerald",
    },
    {
      id: "04",
      badge: "Strategic",
      icon: <Ship className="w-6 h-6 text-blue-400" />,
      title: "Business & Export Consulting",
      desc: "Specialized consulting for Panipat manufacturers, exporters, and local businesses looking to tap domestic and international buyers.",
      features: ["Export Catalog Setup", "Buyer Outreach", "B2B Positioning", "Process Automation"],
      accent: "blue",
    },
    {
      id: "05",
      badge: "ROI Driven",
      icon: <Search className="w-6 h-6 text-amber-400" />,
      title: "Page-1 Google SEO & Local Maps",
      desc: "Dominate Google search results for your high-intent local and national keywords. Real organic traffic that converts into calls.",
      features: ["Google Maps Local Ranking", "Technical SEO Audit", "Long-Tail Keywords", "Monthly Progress Reports"],
      accent: "amber",
    },
    {
      id: "06",
      badge: "Creative",
      icon: <Video className="w-6 h-6 text-purple-400" />,
      title: "Social Media & Video Production",
      desc: "High-retention viral reels, industrial shoots, product videos, and complete social media management that builds brand fame.",
      features: ["Short-form Viral Reels", "Ad Creatives", "Brand Identity & Logos", "Ad Spend Optimization"],
      accent: "purple",
    },
  ];

  return (
    <section id="services" className="relative w-full py-24 px-4 sm:px-6 bg-slate-50 text-slate-900 overflow-hidden border-b border-slate-200 selection:bg-blue-600/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-500/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Full-Spectrum Digital Capabilities</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            Engineered to Scale. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              Priced to Win.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-600"
          >
            From ₹500/month basic storefronts to enterprise-grade custom CRMs and export consulting — we build everything in-house with zero agency bloat.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.23, 1, 0.32, 1] }}
              viewport={{ once: true }}
              className="h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(37, 99, 235, 0.08)"
                borderSpotlightColor="rgba(37, 99, 235, 0.3)"
                className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-xl h-full"
              >
                <div>
                  {/* Top Row: Icon + Badge + Number */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors">
                      {service.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.badge}
                      </span>
                      <span className="text-xl font-bold font-mono text-slate-300 group-hover:text-blue-500/40 transition-colors">
                        {service.id}
                      </span>
                    </div>
                  </div>

                  {/* Service Details */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to="/contact"
                    className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group/link"
                  >
                    <span>Request Proposal</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>
                  <span className="text-[11px] text-slate-400 font-mono">100% In-House</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-blue-200/80 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Need a custom software or business tool not listed here?</span>
              <Sparkles className="w-4 h-4 text-blue-600" />
            </h4>
            <p className="text-sm text-slate-600 mt-1">
              We design custom billing systems, WhatsApp automations, and proprietary tools tailored specifically for your workflow.
            </p>
          </div>
          <Link
            to="/contact"
            className="btn-press px-6 py-3 rounded-full text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/20 whitespace-nowrap shrink-0 transition-all"
          >
            Discuss Custom Build →
          </Link>
        </div>
      </div>
    </section>
  );
}