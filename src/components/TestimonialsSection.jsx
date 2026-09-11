"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquareHeart, CheckCircle2 } from "lucide-react";
import athish from "../assets/athish.png";
import deepak from "../assets/deepak.png";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Athish Ravikant",
      role: "Export Manager, Panipat Textiles",
      metric: "40+ International Inquiries",
      feedback:
        "Inovix built our B2B export catalog and automated WhatsApp RFQ system. Other agencies in Delhi quoted ₹2,00,000 for this — Inovix delivered in 10 days at a fraction of the cost with zero bugs.",
      img: athish,
      rating: 5,
    },
    {
      name: "Deepak Rai",
      role: "Founder, Haryana Retail & Tech",
      metric: "Page-1 Google Ranking",
      feedback:
        "The best decision for our business. The website loads in under a second, our Google local ranking hit page 1, and customers now contact us directly through the 1-click WhatsApp button every single day.",
      img: deepak,
      rating: 5,
    },
    {
      name: "Nirjan Sharma",
      role: "Restaurant & Cafe Owner",
      metric: "₹500/mo Care Plan Active",
      feedback:
        "Whenever we update our menu or offer a seasonal discount, I just text them on WhatsApp and it's live on the website within an hour. The ₹500/month hosting plan is an absolute blessing for local shops.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="relative w-full py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-blue-100/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <MessageSquareHeart className="w-3.5 h-3.5" />
            <span>Real Founder & Client Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900"
          >
            Proof from Businesses <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              Just Like Yours
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 text-base sm:text-lg text-slate-500"
          >
            Real results delivered for real business owners across Haryana, Delhi-NCR, and beyond.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative flex flex-col justify-between bg-white border border-slate-200 rounded-3xl p-7 hover:border-blue-300 hover:shadow-lg transition-all duration-300 shadow-sm"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-slate-100 group-hover:text-blue-100 transition-colors duration-300 pointer-events-none">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              <div>
                {/* Metric Badge */}
                <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                  <span>{t.metric}</span>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-amber-400"
                    />
                  ))}
                </div>

                {/* Feedback */}
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                  "{t.feedback}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3.5 pt-5 border-t border-slate-200">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-blue-200"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500">
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