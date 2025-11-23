"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹10,000",
    description: "Perfect for small businesses starting their digital journey.",
    features: [
      "Basic Graphic Design",
      "Social Media Posts (5/mo)",
      "1 Marketing Campaign",
      "Email Support",
    ],
    highlight: false,
    color: "text-white",
  },
  {
    name: "Growth",
    price: "₹25,000",
    description: "Accelerate your brand with comprehensive tools.",
    features: [
      "All Starter Features",
      "Website / Landing Page",
      "5 Marketing Campaigns",
      "Video Reels / Shorts",
      "Priority Support",
    ],
    highlight: true, // This one gets the glow
    color: "text-cyan-400",
  },
  {
    name: "Premium",
    price: "₹50,000",
    description: "The ultimate package for market domination.",
    features: [
      "All Growth Features",
      "Full Digital Marketing",
      "Custom Video Production",
      "SEO Optimization",
      "Dedicated Manager",
    ],
    highlight: false,
    color: "text-blue-400",
  },
];

export default function PricingSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden selection:bg-cyan-500/30">

      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />

      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>Flexible Investment</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Pricing Built for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Every Stage
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Transparent pricing with no hidden fees. Choose the plan that aligns with your current growth velocity.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative group rounded-3xl p-8 border transition-all duration-500 ${plan.highlight
                ? "bg-neutral-900/80 border-cyan-500 shadow-[0_0_40px_rgba(34,211,238,0.15)] scale-105 z-10"
                : "bg-neutral-900/40 border-white/10 hover:border-white/20 hover:bg-neutral-900/60"
                }`}
            >
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-black px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                  <Zap className="w-3 h-3 fill-black" /> Most Popular
                </div>
              )}

              {/* Card Header */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <h3 className={`text-xl font-bold mb-2 ${plan.color}`}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 font-medium">/month</span>
                </div>
                <p className="text-sm text-gray-400">{plan.description}</p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                    <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${plan.highlight ? "bg-cyan-500/20 text-cyan-400" : "bg-white/10 text-white"
                      }`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.highlight
                  ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "bg-white text-black hover:bg-gray-200"
                  }`}
              >
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}