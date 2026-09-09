"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen, ExternalLink, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import BorderBeam from "../ui/BorderBeam.jsx";

// Direct static paths from public/bannerimg & public/brand
// Guaranteed instant HTTP delivery with zero module-resolution or bundling failures
const bannerTrireme = "/bannerimg/trireme.png";
const bannerSaksham = "/bannerimg/saksham.png";
const bannerVedomin = "/bannerimg/vedomin.png";
const bannerDigitalPharma = "/bannerimg/digitalpharma.png";
const bannerVedaGroup = "/bannerimg/vedagroup.png";
const bannerHolistic = "/bannerimg/holistic.png";
const bannerMultiAgent = "/bannerimg/multiagent.png";
const bannerDesinBuzz = "/bannerimg/desinbuzz.png";

const logoTrireme = "/brand/trireme.png";
const logoAppleveda = "/brand/appleveda.png";
const logoDigitalPharma = "/brand/digitalpharmapreneur.png";
const logoHolistic = "/brand/holiestic.png";
const logoDesignHouzz = "/brand/designHouzz.png";

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState("all");

  const realProjects = [
    {
      title: "Trireme Group & Life Sciences",
      category: "pharma",
      tag: "B2B Pharma Enterprise",
      result: "90% Latency Drop (500ms → 50ms)",
      desc: "High-volume B2B pharmaceutical enterprise platform with multi-vendor catalogs, role-based access, and high-speed Redis caching architecture.",
      img: bannerTrireme,
      logo: logoTrireme,
      size: "md:col-span-2",
      tech: ["Next.js", "MongoDB", "Redis", "B2B APIs"],
      link: "https://triremegroup.in",
      liveLabel: "triremegroup.in",
    },
    {
      title: "Saksham Appleveda",
      category: "pharma",
      tag: "D2C & Ayurvedic Platform",
      result: "Sub-0.7s Load Time & High SEO",
      desc: "Ayurvedic wellness and healthcare digital storefront optimized for mobile conversion, instant WhatsApp customer acquisition, and search engine ranking.",
      img: bannerSaksham,
      logo: logoAppleveda,
      size: "md:col-span-1",
      tech: ["React.js", "Tailwind CSS", "Technical SEO", "Fast CDN"],
      link: "https://sakshamappleveda.com",
      liveLabel: "sakshamappleveda.com",
    },
    {
      title: "Veda Group Conglomerate",
      category: "enterprise",
      tag: "Enterprise Conglomerate",
      result: "Multi-Division Architecture",
      desc: "Corporate group website presenting multi-vertical industrial manufacturing, global compliance certifications, and enterprise inquiry routing.",
      img: bannerVedaGroup,
      logo: null,
      size: "md:col-span-1",
      tech: ["Next.js", "Enterprise UI", "CRM Integration", "Vite"],
      link: "https://vedagroup.co.in",
      liveLabel: "vedagroup.co.in",
    },
    {
      title: "Digital Pharmapreneur",
      category: "saas",
      tag: "Pharma EdTech & Network",
      result: "10,000+ Pharma Learners",
      desc: "Comprehensive educational and business growth ecosystem empowering pharma entrepreneurs with digital modules, community webinars, and lead funnels.",
      img: bannerDigitalPharma,
      logo: logoDigitalPharma,
      size: "md:col-span-2",
      tech: ["React.js", "Node.js", "Video Funnels", "Payment Gateway"],
      link: "https://digitalpharmapreneur.com",
      liveLabel: "digitalpharmapreneur.com",
    },
    {
      title: "Vedomine Lifesciences",
      category: "pharma",
      tag: "PCD Pharma & Export Portal",
      result: "Page-1 Google Visibility",
      desc: "Comprehensive pharmaceutical digital assets targeting commercial PCD franchise search queries and international export procurement inquiries.",
      img: bannerVedomin,
      logo: null,
      size: "md:col-span-1",
      tech: ["Next.js", "Content SEO", "Lead Funnels", "Schema Markup"],
      link: "https://vedominelifesciences.com",
      liveLabel: "vedominelifesciences.com",
    },
    {
      title: "Holistic Jeevandhara Foundation",
      category: "enterprise",
      tag: "Healthcare Foundation & NGO",
      result: "5,000+ Community Beneficiaries",
      desc: "Non-profit digital foundation portal enabling transparent donation pipelines, community health initiatives, and volunteer onboarding workflows.",
      img: bannerHolistic,
      logo: logoHolistic,
      size: "md:col-span-2",
      tech: ["React.js", "Razorpay", "CMS Integration", "Tailwind"],
      link: "https://holisticjeevandhara.org",
      liveLabel: "holisticjeevandhara.org",
    },
    {
      title: "Multi-Agent AI Research System",
      category: "saas",
      tag: "Autonomous AI Workflows",
      result: "10x Research Speed Automation",
      desc: "Distributed multi-agent research engine orchestrating autonomous LLMs, web crawlers, and automated synthesis pipelines built with n8n and Python.",
      img: bannerMultiAgent,
      logo: null,
      size: "md:col-span-2",
      tech: ["AI Agents", "Python", "n8n Workflows", "FastAPI"],
      link: "https://github.com/sagarpunia",
      liveLabel: "Proprietary AI Architecture",
    },
    {
      title: "DesignBuzz Creative Studio",
      category: "enterprise",
      tag: "Creative Brand & Digital Agency",
      result: "Fluid 60 FPS Micro-Interactions",
      desc: "Ultra-slick portfolio experience engineered for brand consultants and digital creatives with interactive showcases, dark aesthetics, and rapid load times.",
      img: bannerDesinBuzz,
      logo: logoDesignHouzz,
      size: "md:col-span-1",
      tech: ["React.js", "Framer Motion", "Tailwind CSS", "Canvas"],
      link: "https://frenchise-model-nl5z.vercel.app",
      liveLabel: "Live App Showcase",
    },
  ];

  const filteredProjects = activeTab === "all"
    ? realProjects
    : realProjects.filter((p) => p.category === activeTab);

  const handleCardClick = (link) => {
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="work" className="relative w-full py-24 px-4 sm:px-6 bg-[#040407] text-white overflow-hidden border-b border-white/5 selection:bg-cyan-500/30">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <FolderOpen className="w-3.5 h-3.5" />
              <span>Real Live Production Builds • Click Any Card To Open</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Real Clients. Live URLs. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Click To Inspect Live Builds.
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-[#090914] p-1.5 rounded-full border border-white/10 self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "all" ? "bg-cyan-500 text-black shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              All Builds ({realProjects.length})
            </button>
            <button
              onClick={() => setActiveTab("saas")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "saas" ? "bg-cyan-500 text-black shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              SaaS & AI
            </button>
            <button
              onClick={() => setActiveTab("pharma")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "pharma" ? "bg-cyan-500 text-black shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              Pharma & Healthcare
            </button>
            <button
              onClick={() => setActiveTab("enterprise")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === "enterprise" ? "bg-cyan-500 text-black shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              Enterprise & Creative
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              onClick={() => handleCardClick(project.link)}
              className={`group relative overflow-hidden rounded-3xl bg-[#090914] border border-white/10 hover:border-cyan-500/60 ${project.size} min-h-[420px] flex flex-col justify-end transition-all duration-300 shadow-xl cursor-pointer hover:shadow-[0_15px_40px_-10px_rgba(0,212,255,0.25)]`}
            >
              {/* Border Beam on Featured Project */}
              {index === 0 && (
                <BorderBeam size={320} duration={8} colorFrom="#00D4FF" colorTo="#6366F1" />
              )}

              {/* Background Cover Screenshot with Crisp Overlay */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-br from-[#0b0c16] to-[#040408]">
                <img
                  src={project.img}
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040408] via-[#040408]/85 to-black/30" />
              </div>

              {/* Floating Result Badge & Client Logo */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-cyan-300 bg-[#06060c]/90 backdrop-blur-md rounded-full border border-cyan-500/30 shadow-lg">
                  <Zap className="w-3 h-3 text-cyan-400 fill-cyan-400" />
                  <span>{project.result}</span>
                </span>

                <div className="flex items-center gap-2">
                  {project.logo && (
                    <div className="px-2.5 py-1 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex items-center shadow-lg">
                      <img
                        src={project.logo}
                        alt={`${project.title} logo`}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.parentElement.style.display = "none";
                        }}
                        className="h-5 sm:h-6 w-auto max-w-[100px] object-contain brightness-95 group-hover:brightness-110 transition-all"
                      />
                    </div>
                  )}

                  {/* Open Icon Tag */}
                  <span className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 group-hover:bg-cyan-500 group-hover:text-black transition-all shadow-md">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Content Panel */}
              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {project.tech.map((t, tIdx) => (
                    <span key={tIdx} className="text-[10px] uppercase font-mono font-semibold px-2 py-0.5 rounded bg-white/10 text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {project.desc}
                </p>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-medium text-cyan-400">
                  <span className="text-slate-400 font-mono text-[11px]">{project.liveLabel}</span>
                  <span className="inline-flex items-center gap-1 font-bold text-cyan-300 group-hover:text-cyan-200 group-hover:translate-x-0.5 transition-all">
                    <span>Open Live Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center p-6 rounded-2xl glass-panel border border-white/10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white">Need a platform engineered for your business?</div>
            <div className="text-xs text-slate-400">We build full-stack web apps, custom CRMs, and automated lead pipelines starting at ₹4,999.</div>
          </div>
          <Link
            to="/contact"
            className="btn-press px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-cyan-500 to-blue-600 shrink-0 flex items-center gap-1.5"
          >
            <span>Discuss Architecture</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}