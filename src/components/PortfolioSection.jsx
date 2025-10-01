"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PortfolioSection() {
  const projects = [
    {
      title: "E-Commerce Website",
      category: "Web Development",
      img: "https://source.unsplash.com/600x400/?website,ecommerce",
    },
    {
      title: "Fashion Brand Reels",
      category: "Social Media Marketing",
      img: "https://source.unsplash.com/600x400/?fashion,video",
    },
    {
      title: "Restaurant Promo Video",
      category: "Video Production",
      img: "https://source.unsplash.com/600x400/?restaurant,food",
    },
    {
      title: "Corporate Presentation",
      category: "Business Design",
      img: "https://source.unsplash.com/600x400/?presentation,office",
    },
    {
      title: "Event Coverage",
      category: "Event Marketing",
      img: "https://source.unsplash.com/600x400/?event,stage",
    },
    {
      title: "Logo & Branding",
      category: "Graphic Design",
      img: "https://source.unsplash.com/600x400/?logo,design",
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-6 overflow-hidden">
      {/* Glow Effect Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Our <span className="text-blue-500">Work</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mb-12"
        >
          A glimpse into the projects we’ve crafted — from websites and branding
          to social media campaigns and video production.
        </motion.p>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12"
        >
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium shadow-lg hover:shadow-blue-500/30 transition-all">
            View More Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}
