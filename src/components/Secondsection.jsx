import React from "react";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BorderBeam from "../ui/BorderBeam.jsx";

export default function Secondsection() {
  const painPoints = [
    "Quotes ₹1,50,000+ upfront with hidden server & revision costs",
    "Takes 3 to 5 months of boring Zoom calls with account managers",
    "Bloated WordPress templates with 40 plugins that take 6s to load",
    "They ghost you right after the final invoice is paid",
  ];

  const inovixPoints = [
    "Transparent pricing starting at just ₹500/month (Hosting included)",
    "Delivered in 3 to 7 days with live preview link updates",
    "Engineered with React & Vite — sub-second load times & 100% SEO",
    "Direct founder access on WhatsApp whenever you need updates",
  ];

  return (
    <section id="problem-solution" className="relative py-24 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs font-semibold uppercase tracking-wider mb-4">
            The Traditional Agency Problem
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Why pay ₹2 Lakhs for a website that doesn't bring you leads?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500">
            Big agencies charge you for their AC office and 10 layers of management. At Inovix, you pay for pure engineering and direct results.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* The Old Agency Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-red-50/60 border border-red-200 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-100 border border-red-200 flex items-center justify-center text-red-500">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">The Expensive Agency Way</h3>
                <p className="text-xs text-slate-500">Slow, overpriced, and bloated</p>
              </div>
            </div>

            <ul className="space-y-4">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-600">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-red-200 text-xs text-red-500 font-mono">
              Result: Huge budget burned, zero measurable revenue growth.
            </div>
          </div>

          {/* The Inovix Way */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-blue-200 relative overflow-hidden shadow-lg shadow-blue-600/5">
            <BorderBeam size={260} duration={7} colorFrom="#2563eb" colorTo="#6366F1" />
            <div className="absolute top-0 right-0 bg-blue-600 px-4 py-1.5 rounded-bl-2xl text-[11px] font-bold uppercase tracking-wider text-white">
              The Inovix Standard
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <span>How Inovix Works</span>
                  <Zap className="w-4 h-4 text-blue-600 fill-blue-600" />
                </h3>
                <p className="text-xs text-blue-600 font-medium">Fast, lean, and founder-driven</p>
              </div>
            </div>

            <ul className="space-y-4">
              {inovixPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-blue-600 font-mono">
                Result: Premium brand authority & real inbound customer inquiries.
              </span>
              <Link
                to="/contact"
                className="btn-press px-4 py-2 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center gap-1.5 shrink-0 shadow-md shadow-blue-600/20"
              >
                <span>Switch to Inovix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}