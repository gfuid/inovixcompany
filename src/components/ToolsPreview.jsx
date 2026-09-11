import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Wrench,
  Image as ImageIcon,
  QrCode,
  FileText,
  Volume2,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard.jsx";

export default function ToolsPreview() {
  const featuredTools = [
    {
      name: "Smart Image Compressor",
      desc: "Lossless compression for web and mobile images. Reduce file size by up to 80% instantly.",
      icon: ImageIcon,
      path: "/tools",
      badge: "Popular",
    },
    {
      name: "QR Studio & Generator",
      desc: "Generate high-resolution branded QR codes for UPI payments, menus, and marketing campaigns.",
      icon: QrCode,
      path: "/tools",
      badge: "Fast",
    },
    {
      name: "AI Background Remover",
      desc: "One-click background removal for product photos and e-commerce listings.",
      icon: Sparkles,
      path: "/tools",
      badge: "AI Powered",
    },
    {
      name: "PDF & Document Toolkit",
      desc: "Compress PDFs, convert images to PDF, and extract text without installing heavy software.",
      icon: FileText,
      path: "/tools",
      badge: "Free",
    },
  ];

  return (
    <section className="relative py-20 px-4 sm:px-6 bg-slate-50 text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-blue-600/20">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Inovix Labs — Product-Led Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              We Don’t Just Code Websites. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
                We Build Functional Software.
              </span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Try our 16+ completely free in-browser utility tools built for daily business workflows — zero signups, zero ads.
            </p>
          </div>

          <Link
            to="/tools"
            className="btn-press self-start md:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 text-sm font-semibold transition-all duration-200 shadow-sm"
          >
            <span>Explore All 16 Free Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Featured Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredTools.map((tool, idx) => {
            const Icon = tool.icon;
            return (
              <Link
                key={idx}
                to={tool.path}
                className="h-full block"
              >
                <SpotlightCard
                  spotlightColor="rgba(37, 99, 235, 0.08)"
                  borderSpotlightColor="rgba(37, 99, 235, 0.3)"
                  className="group p-6 rounded-3xl bg-white border border-slate-200 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between h-full shadow-sm hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 transition-all duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:text-blue-700 group-hover:bg-blue-50 transition-colors">
                        {tool.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tool.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-blue-600">
                    <span>Launch Tool</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </SpotlightCard>
              </Link>
            );
          })}
        </div>

        {/* Conversion callout */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-600">
            Want a custom internal tool, dashboard, or client portal for your team?{" "}
            <Link to="/contact" className="text-blue-600 hover:underline font-bold">
              We can build it for you →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
