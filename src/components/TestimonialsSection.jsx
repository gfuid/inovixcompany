"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquareHeart } from "lucide-react";
import athish from "../assets/athish.png"
import deepak from "../assets/deepak.png"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Athish Ravikant",
      role: "Export Manager",
      feedback:
        "This agency completely transformed our online presence. From branding to ads, everything was handled with professionalism and creativity.",
      img: athish,
      rating: 5,
    },
    {
      name: "Deepeka Rai",
      role: "Founder, Tech Startup",
      feedback:
        "The reels and video ads boosted my sales like crazy. Their content ideas and execution are top-notch. Highly recommended for scaling.",
      img: deepak,
      rating: 5,
    },
    {
      name: "Nirjan ",
      role: "Bussiness Owner",
      feedback:
        "Our business visibility increased significantly with their social media marketing. They truly know how to target the right audience.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden selection:bg-cyan-500/30">

      {/* --- Background Effects (Unified Theme) --- */}

      {/* 1. Technical Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* 2. Glow Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />


      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
          >
            <MessageSquareHeart className="w-4 h-4" />
            <span>Client Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
          >
            Trusted by <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Industry Leaders
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-relaxed"
          >
            Don't just take our word for it. Here is what founders and managers are saying about our impact on their growth.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative flex flex-col h-full bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-white/[0.05] transition-all duration-500"
            >
              {/* Giant Quote Icon Background */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-cyan-500/10 transition-colors duration-500">
                <Quote className="w-16 h-16 fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating
                      ? "text-cyan-400 fill-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                      : "text-gray-700"
                      }`}
                  />
                ))}
              </div>

              {/* Feedback Text */}
              <p className="text-lg text-gray-200 leading-relaxed mb-8 flex-grow relative z-10">
                "{t.feedback}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/10 relative z-10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <img
                    src={t.img}
                    alt={t.name}
                    className="relative w-12 h-12 rounded-full object-cover border-2 border-black"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}