"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import BorderBeam from "../ui/BorderBeam.jsx";
import SpotlightCard from "../ui/SpotlightCard.jsx";

const plans = [
  {
    name: "Web Care & Hosting",
    badge: "Lowest in India",
    price: "₹500",
    period: "/month",
    description: "Zero headache website hosting, security, and technical maintenance for local businesses.",
    features: [
      "Ultra-Fast Cloud Hosting",
      "Free SSL Certificate",
      "99.9% Uptime Guarantee",
      "Monthly Content / Menu Updates",
      "Direct WhatsApp Tech Support",
    ],
    highlight: false,
    cta: "Start for ₹500/mo",
  },
  {
    name: "Launchpad Website",
    badge: "Best for Local Businesses",
    price: "₹4,999",
    period: "one-time",
    description: "Modern, professional website built to convert visitors into phone calls and visits.",
    features: [
      "High-Converting Modern Web Design",
      "Google Maps & Local SEO Setup",
      "Direct 1-Click WhatsApp Lead Button",
      "100% Mobile & Tablet Optimized",
      "Delivered in 3 to 5 Days",
      "1 Month Free Maintenance Included",
    ],
    highlight: false,
    cta: "Launch My Website",
  },
  {
    name: "Growth Engine",
    badge: "Most Popular",
    price: "₹19,999",
    period: "one-time",
    description: "Complete digital dominance package to rank on Google and capture maximum leads.",
    features: [
      "Full Multi-Page React/Vite Web App",
      "Targeted Google Page-1 SEO Campaign",
      "Automated Lead Capture & Email/SMS Alerts",
      "Sub-Second Page Load Speeds (< 0.8s)",
      "High-Converting Sales Copy & Visuals",
      "Founder-Level Priority Consultation",
    ],
    highlight: true,
    cta: "Scale With Growth Plan",
  },
  {
    name: "Custom Software & CRM",
    badge: "Enterprise & Exporters",
    price: "₹49,999+",
    period: "custom scope",
    description: "Custom internal software, billing, staff dashboards, and export consulting for scaling companies.",
    features: [
      "Bespoke Internal Business Software",
      "Inventory, Billing & Staff Tracking CRM",
      "WhatsApp Business API Bots",
      "Export/Import Digital Consulting",
      "Role-Based Multi-User Access",
      "Full Source Code & Architecture Handoff",
    ],
    highlight: false,
    cta: "Discuss Enterprise Build",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative w-full py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-blue-100/40 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Radical Transparency • Zero Hidden Fees</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            India's Most Affordable <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              Agency Pricing
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-500"
          >
            Whether you are a local shopkeeper starting with ₹500/month or an exporter building custom enterprise software — we have a predictable, high-ROI tier for you.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-300 ${
                plan.highlight
                  ? "bg-white border-2 border-blue-500 shadow-xl shadow-blue-600/10 lg:-translate-y-2"
                  : "bg-white border border-slate-200 hover:border-blue-200 hover:shadow-lg shadow-sm"
              }`}
            >
              {plan.highlight && (
                <>
                  <BorderBeam size={220} duration={6} colorFrom="#2563eb" colorTo="#6366F1" />
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-3.5 py-0.5 rounded-full text-xs font-black tracking-wide uppercase shadow-lg flex items-center gap-1 z-20">
                    <Zap className="w-3 h-3 fill-white" />
                    <span>{plan.badge}</span>
                  </div>
                </>
              )}

              <div>
                {!plan.highlight && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2 inline-block">
                    {plan.badge}
                  </span>
                )}

                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>

                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {plan.description}
                </p>

                <div className="w-full h-px bg-slate-200 mb-6" />

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <div
                        className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          plan.highlight ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/contact">
                <button
                  className={`btn-press w-full py-3 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer ${
                    plan.highlight
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Notes */}
        <div className="mt-12 text-center flex flex-wrap justify-center items-center gap-6 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>No Long-Term Contracts • Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Transparent Estimates Before Coding Starts</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Free Migration from Slow Hosting</span>
          </div>
        </div>
      </div>
    </section>
  );
}