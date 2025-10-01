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
} from "lucide-react";

export default function Fourth() {
  const services = [
    {
      icon: <PenTool className="w-10 h-10 text-blue-500" />,
      title: "Creative Design",
      desc: "Logos, branding, infographics, reels & presentation design.",
    },
    {
      icon: <Camera className="w-10 h-10 text-pink-500" />,
      title: "Video & Audio Production",
      desc: "Editing, dubbing, podcasts, background music, hosting.",
    },
    {
      icon: <Megaphone className="w-10 h-10 text-green-500" />,
      title: "Social Media Marketing",
      desc: "Content calendars, paid ads, influencer collaborations.",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-yellow-500" />,
      title: "Advertising & Promotions",
      desc: "Google Ads, retargeting campaigns, banner ads.",
    },
    {
      icon: <MonitorPlay className="w-10 h-10 text-purple-500" />,
      title: "Specialized Coverage",
      desc: "Event coverage, industrial shoots & drone services.",
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Business Skills",
      desc: "Quotations, negotiation, finance, communication & psychology.",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our <span className="text-blue-500">Services</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
        >
          End-to-end digital solutions — from branding and content creation to
          social media marketing, video production, and business growth
          strategies.
        </motion.p>

        {/* Service Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/40 hover:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
