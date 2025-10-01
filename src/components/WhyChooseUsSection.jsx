"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Rocket, Users } from "lucide-react";

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
      title: "End-to-End Solutions",
      desc: "From branding to digital marketing — everything under one roof.",
    },
    {
      icon: <Target className="w-10 h-10 text-green-500" />,
      title: "Result-Driven Approach",
      desc: "Focused on ROI, sales growth, and brand visibility.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-purple-500" />,
      title: "Creative & Modern",
      desc: "Unique designs, viral content & data-driven campaigns.",
    },
    {
      icon: <Users className="w-10 h-10 text-pink-500" />,
      title: "Trusted by Clients",
      desc: "Proven success with startups, brands & businesses.",
    },
  ];

  const steps = [
    { step: "01", title: "Consultation", desc: "We discuss goals, vision & requirements." },
    { step: "02", title: "Strategy & Planning", desc: "Crafting a custom marketing & design roadmap." },
    { step: "03", title: "Execution", desc: "Designing, marketing & campaigns go live." },
    { step: "04", title: "Growth & Support", desc: "Continuous optimization, reports & support." },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-6"
        >
          Why <span className="text-blue-500">Choose Us</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12"
        >
          We combine creativity, strategy, and technology to help your business
          grow and succeed in the digital world.
        </motion.p>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((r, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 hover:bg-gray-900/80 rounded-2xl p-6 text-center shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <div className="mb-4 flex justify-center">{r.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-gray-400 text-sm">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Process Timeline */}
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Our <span className="text-blue-500">Process</span>
        </motion.h3>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative bg-gray-900/50 hover:bg-gray-900/80 rounded-2xl p-6 text-center shadow-lg hover:shadow-blue-500/20 transition-all"
            >
              <div className="text-4xl font-extrabold text-blue-500 mb-4">
                {s.step}
              </div>
              <h4 className="text-xl font-semibold mb-2">{s.title}</h4>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
