"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Athish Ravikant",
      role: "EXport Manager",
      feedback:
        "This agency completely transformed our online presence. From branding to ads, everything was handled with professionalism and creativity.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      name: "Deepak Rai",
      role: "Founder, Tech Startup",
      feedback:
        "The reels and video ads boosted my sales like crazy. Their content ideas and execution are top-notch.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      name: "Amit Verma",
      role: "Restaurant Owner",
      feedback:
        "Our business visibility increased with their social media marketing. They know how to target the right audience.",
      img: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 4,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-20 px-6 overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          What Our <span className="text-blue-500">Clients Say</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
        >
          We’re proud to have worked with amazing clients. Here’s what they
          think about our services.
        </motion.p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            >
              <img
                src={t.img}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-500 mb-4"
              />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-400">{t.role}</p>
              <p className="text-gray-300 text-sm mt-4 mb-4 italic">
                “{t.feedback}”
              </p>
              <div className="flex justify-center">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
