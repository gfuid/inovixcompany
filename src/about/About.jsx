"use client";

import React from "react";
import {
  Code2,
  Rocket,
  Users,
  ArrowUpRight,
  CheckCircle2,
  Target,
  Award,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";
import devAvatar from "../assets/assets/brand/dev_avatar.png";

const About = () => {
  const milestones = [
    { number: "22+", label: "Live Platforms Built", sub: "Web apps, SaaS, and B2B portals" },
    { number: "99%", label: "Client Satisfaction", sub: "Production-grade reliability & support" },
    { number: "₹50L+", label: "Volume Processed", sub: "Via automated payment & lead pipelines" },
    { number: "50ms", label: "Sub-Second Latency", sub: "90% speed optimization engineered" },
  ];

  const certifications = [
    "n8n Workflow Automation Certified (Simplilearn)",
    "Full-Stack Web Development (React, Next.js, Node.js)",
    "Search Engine Optimization (SEO) Certified",
    "Google Ads & Paid Lead Generation Certified",
    "Digital Marketing & Conversion Strategy",
    "BCA (Computer Science) — Kurukshetra University",
  ];

  return (
    <section className="bg-[#040407] py-28 text-white relative overflow-hidden selection:bg-cyan-500/30" id="about">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-cyan-900/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Founder Story & Agency Mission</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
              World-Class Engineering. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Radically Honest Pricing.
              </span>
            </h1>
          </div>
          <p className="text-slate-400 max-w-md text-sm sm:text-base leading-relaxed border-l-2 border-cyan-500/40 pl-6">
            Inovix was founded in Panipat, Haryana by full-stack engineer <span className="text-white font-medium">Sagar Punia</span> with a singular vision: eliminate the inflated ₹1,00,000+ agency markup and give businesses enterprise-grade software starting at just ₹500/month.
          </p>
        </div>

        {/* Founder Story & Vision Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Founder Persona & Core Tech */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-[#080814] border border-white/10 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />

            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-cyan-400/60 shadow-[0_0_20px_rgba(0,212,255,0.4)] shrink-0">
                  <img src={devAvatar} alt="Sagar Punia" className="w-full h-full object-cover" />
                  <span className="absolute bottom-1 right-1 w-3 h-3 bg-emerald-400 border-2 border-[#080814] rounded-full shadow-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sagar Punia</h3>
                  <p className="text-xs text-cyan-400 font-medium">Founder & Lead Full-Stack Architect</p>
                  <p className="text-[11px] text-slate-500">Panipat, Haryana • Remote / Global</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                "I started Inovix after seeing local business owners, restaurant founders, and manufacturers pay lakhs of rupees for slow, generic WordPress templates that took 5 months to deliver and generated zero leads.
                <br /><br />
                We write clean, high-performance code in React, Next.js, and Node.js with automated WhatsApp pipelines and SEO built right into the foundation."
              </p>

              {/* Tech Badges */}
              <div className="pt-4 border-t border-white/10">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Engineering Stack
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["React.js", "Next.js", "Node.js", "MongoDB", "Redis", "n8n Automation", "WhatsApp API", "AI Agents", "REST APIs", "Tailwind CSS"].map((tech, idx) => (
                    <span key={idx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">Direct Founder Access</span>
              <a
                href="https://wa.me/918307967782"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1"
              >
                <span>Chat with Sagar</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Proven Experience & Certifications */}
          <div className="lg:col-span-7 flex flex-col gap-6 justify-between">
            {/* Philosophy Card */}
            <div className="p-8 rounded-3xl bg-[#080814] border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-3">Our Core Philosophy</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Most agencies make money by dragging projects out and billing you for project managers who don't write code. At Inovix, we operate with founder-speed: automated workflows, sub-second load times, and direct engineering.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#080814] border border-white/10 flex flex-col justify-between"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white mb-1">
                    {m.number}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-200">{m.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{m.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#080814] to-blue-950/30 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-cyan-500/20 rounded-2xl text-cyan-400 shrink-0">
              <Target size={28} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white">The North Star Vision</h4>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-0.5">
                Scaling to a 50–100 person elite engineering team, building India's most affordable digital agency while serving ambition-driven brands nationally and globally.
              </p>
            </div>
          </div>
          <Link
            to="/contact"
            className="btn-press px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm rounded-full flex items-center gap-2 shrink-0 shadow-lg"
          >
            <span>Start Your Project</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;