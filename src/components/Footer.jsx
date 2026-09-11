import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Sparkles,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Heart,
} from "lucide-react";

export default function Footer() {
  const links = {
    Solutions: [
      { name: "Web Engineering", path: "/services" },
      { name: "Mobile App Development", path: "/services" },
      { name: "Custom CRM & Software", path: "/services" },
      { name: "Page-1 Google SEO", path: "/services" },
      { name: "Export & Business Consulting", path: "/services" },
    ],
    "Free Tools": [
      { name: "Image Compressor", path: "/tools" },
      { name: "QR Code Studio", path: "/tools" },
      { name: "AI Background Remover", path: "/tools" },
      { name: "PDF Converter Toolkit", path: "/tools" },
      { name: "View All 16 Tools", path: "/tools" },
    ],
    Company: [
      { name: "About Inovix", path: "/about" },
      { name: "Blog & Guides", path: "/blog" },
      { name: "Pricing & Plans", path: "/#pricing" },
      { name: "Contact & Quotes", path: "/contact" },
      { name: "WhatsApp Support", path: "https://wa.me/918307967782" },
    ],
  };

  const socialIcons = [
    { icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com/inovix_official", color: "hover:text-pink-400" },
    { icon: <Linkedin className="w-4 h-4" />, href: "https://linkedin.com/company/inovix", color: "hover:text-cyan-400" },
    { icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com/inovix", color: "hover:text-blue-400" },
    { icon: <Youtube className="w-4 h-4" />, href: "https://youtube.com/@inovix", color: "hover:text-red-500" },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-20 pb-12 overflow-hidden border-t border-slate-800 selection:bg-blue-600/30">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-md">
                <span className="text-xs">IX</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-blue-400 transition-colors">
                Inovix<span className="text-blue-500">.co.in</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 max-w-sm">
              India's Most Affordable Digital Agency & Software House.
              High-speed web apps, custom CRMs, and lead machines starting at just ₹4,999.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-6">
              <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>Panipat & NCR, Haryana • Direct: +91 8307967782</span>
            </div>

            <div className="flex items-center gap-3">
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-200 hover:bg-slate-800 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([category, items], idx) => (
              <div key={idx}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-4">
                  {category}
                </h4>
                <ul className="space-y-2.5">
                  {items.map((item, iIdx) => (
                    <li key={iIdx}>
                      {item.path.startsWith("http") ? (
                        <a
                          href={item.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </a>
                      ) : (
                        <Link
                          to={item.path}
                          className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Inovix Digital Agency. Built with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>in Panipat, Haryana.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              All Systems Operational
            </span>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Support & WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}