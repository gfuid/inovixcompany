"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen, Layers } from "lucide-react";

export default function PortfolioSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Neon E-Commerce",
      category: "Web Development",
      img: "https://images.unsplash.com/photo-1481487484168-9b930d552086?q=80&w=1000&auto=format&fit=crop",
      size: "md:col-span-2", // Wide card
    },
    {
      title: "Vogue Reels",
      category: "Social Media",
      img: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&w=1000&auto=format&fit=crop",
      size: "md:col-span-1", // Square card
    },
    {
      title: "Gourmet Experience",
      category: "Video Production",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
      size: "md:col-span-1",
    },
    {
      title: "FinTech Dashboard",
      category: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      size: "md:col-span-2",
    },
    {
      title: "Tech Summit 2025",
      category: "Event Coverage",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1000&auto=format&fit=crop",
      size: "md:col-span-2",
    },
    {
      title: "Apex Branding",
      category: "Identity Design",
      img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
      size: "md:col-span-1",
    },
  ];

  // Animation Variants (AOS Style)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full min-h-screen bg-black text-white py-24 px-6 overflow-hidden selection:bg-cyan-500/30">

      {/* --- Background Effects --- */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <FolderOpen className="w-4 h-4" />
              <span>Selected Works</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              We Craft <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                Digital Masterpieces
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-2"
          >
            <button className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              View All Projects
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 ${project.size} h-[300px] md:h-[400px] cursor-pointer`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image with Zoom Effect */}
              <div className="absolute inset-0">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">

                {/* Text Container - Slides up on hover */}
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

                  {/* Category Tag */}
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider text-cyan-300 uppercase bg-cyan-950/50 backdrop-blur-md rounded-full border border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {project.category}
                  </span>

                  {/* Title & Arrow Row */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-50 transition-colors">
                      {project.title}
                    </h3>

                    {/* Circle Arrow Button */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Glowing Border on Hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 rounded-3xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}