import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ExternalLink,
  Zap,
  Globe,
  MessageCircle,
  Smartphone,
  ShieldCheck,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import BorderBeam from "../ui/BorderBeam.jsx";
import CountUp from "../ui/CountUp.jsx";

// Real project screenshots
const bannerTrireme = "/bannerimg/trireme.png";
const bannerSaksham = "/bannerimg/saksham.png";
const bannerVedaGroup = "/bannerimg/vedagroup.png";
const bannerDigitalPharma = "/bannerimg/digitalpharma.png";
const bannerVedomin = "/bannerimg/vedomin.png";

// Real client brand logos
const logoTrireme = "/brand/trireme.png";
const logoAppleveda = "/brand/appleveda.png";
const logoDigitalPharma = "/brand/digitalpharmapreneur.png";
const devAvatar = "/brand/dev_avatar.png";

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const showcaseProjects = [
    {
      id: "trireme",
      title: "Trireme Group & Life Sciences",
      category: "B2B Pharma Enterprise",
      metric: "90% Latency Drop (500ms → 50ms)",
      desc: "High-volume B2B pharmaceutical marketplace with multi-vendor catalogs, Redis caching, and RBAC permissions.",
      img: bannerTrireme,
      logo: logoTrireme,
      url: "https://triremegroup.in",
      urlDisplay: "triremegroup.in",
      tag: "Enterprise Portal",
      tech: ["Next.js", "MongoDB", "Redis", "REST APIs"],
    },
    {
      id: "saksham",
      title: "Saksham Appleveda",
      category: "D2C Ayurvedic Healthcare",
      metric: "Sub-0.7s Load Time & High SEO",
      desc: "Ayurvedic wellness storefront optimized for high mobile conversion, instant WhatsApp buyer funnels, and Google ranking.",
      img: bannerSaksham,
      logo: logoAppleveda,
      url: "https://sakshamappleveda.com",
      urlDisplay: "sakshamappleveda.com",
      tag: "D2C E-Commerce",
      tech: ["React.js", "Tailwind CSS", "WhatsApp CRM", "CDN"],
    },
    {
      id: "vedagroup",
      title: "Veda Group Conglomerate",
      category: "Enterprise Conglomerate",
      metric: "Multi-Division Architecture",
      desc: "Corporate industrial website presenting multi-vertical manufacturing divisions, certifications, and high-volume RFQ routing.",
      img: bannerVedaGroup,
      logo: null,
      url: "https://vedagroup.co.in",
      urlDisplay: "vedagroup.co.in",
      tag: "Enterprise Portal",
      tech: ["Next.js", "Enterprise UI", "CRM Integration", "Vite"],
    },
    {
      id: "digitalpharma",
      title: "Digital Pharmapreneur",
      category: "Pharma EdTech & Network",
      metric: "10,000+ Active Learners",
      desc: "Comprehensive learning and community platform empowering pharma founders with webinars, video modules, and sales pipelines.",
      img: bannerDigitalPharma,
      logo: logoDigitalPharma,
      url: "https://digitalpharmapreneur.com",
      urlDisplay: "digitalpharmapreneur.com",
      tag: "EdTech & Community",
      tech: ["React.js", "Node.js", "Video Funnels", "Razorpay"],
    },
    {
      id: "vedomin",
      title: "Vedomine Lifesciences",
      category: "PCD Pharma & Global Export",
      metric: "Page-1 Google Visibility",
      desc: "Targeted pharmaceutical distribution showcase generating high-intent commercial PCD franchise inquiries and international exports.",
      img: bannerVedomin,
      logo: null,
      url: "https://vedominelifesciences.com",
      urlDisplay: "vedominelifesciences.com",
      tag: "Pharma Export",
      tech: ["Next.js", "Schema SEO", "Lead Funnels", "Cloudflare"],
    },
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Clean Light Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-100/40 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-40 left-1/4 w-[400px] h-[300px] bg-indigo-100/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Top Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-pill inline-flex items-center gap-2.5 px-4 py-1.5 mb-6"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-bold text-slate-700 tracking-wide">
            India's Most Affordable Agency • Websites from ₹4,999 • Care ₹500/mo
          </span>
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 max-w-5xl"
        >
          High-Speed Websites, Custom CRMs &{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
            Automations That Drive Real Revenue.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-slate-500 max-w-3xl font-normal leading-relaxed"
        >
          Stop paying ₹1,50,000+ to slow agencies for generic templates. Inovix builds modern
          React & Next.js websites, WhatsApp automation pipelines, and custom software in{" "}
          <span className="text-slate-800 font-semibold">3 to 5 days</span> with{" "}
          <span className="text-blue-600 font-semibold">1-on-1 direct founder engineering</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/918307967782?text=Hi%20Sagar%2C%20I%20want%20a%20website%2Fsoftware%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2.5 transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp & Get Fast Quote</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#work"
            className="btn-press w-full sm:w-auto px-7 py-4 rounded-full font-semibold text-sm text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-blue-300 flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <span>See Live Proof (22+ Builds)</span>
            <span className="text-blue-600">↓</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-7 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium"
        >
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Live in 3–5 Days</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
            <span>Direct Founder (No Middlemen)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
            <span>100% Code Ownership</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>₹500/mo Hosting & Care</span>
          </div>
        </motion.div>

        {/* Showcase Window */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative mt-12 w-full max-w-5xl rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-900/10 overflow-hidden"
        >
          <BorderBeam size={350} duration={8} colorFrom="#2563eb" colorTo="#6366F1" />

          {/* Browser Header */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
              </div>
              <a
                href={showcaseProjects[activeTab].url}
                target="_blank"
                rel="noopener noreferrer"
                title="Click to visit live website"
                className="px-3 py-1 rounded-md bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-[11px] font-mono text-slate-500 hover:text-blue-600 flex items-center gap-1.5 transition-colors cursor-pointer group/link"
              >
                <Globe className="w-3 h-3 text-blue-500" />
                <span>https://{showcaseProjects[activeTab].urlDisplay}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-blue-500 transition-colors" />
              </a>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto py-1 sm:py-0">
              {showcaseProjects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    activeTab === idx
                      ? "bg-blue-600 text-white shadow-sm font-bold"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  }`}
                >
                  {p.title.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Preview Area */}
          <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-slate-100">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  if (showcaseProjects[activeTab].url && showcaseProjects[activeTab].url !== "#") {
                    window.open(showcaseProjects[activeTab].url, "_blank", "noopener,noreferrer");
                  }
                }}
                className="relative w-full h-full cursor-pointer group/preview"
              >
                <img
                  src={showcaseProjects[activeTab].img}
                  alt=""
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="w-full h-full object-cover object-top group-hover/preview:scale-[1.02] transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                {/* Hover Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/preview:opacity-100 transition-opacity duration-200 pointer-events-none z-30">
                  <span className="px-5 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs shadow-2xl flex items-center gap-2 transform group-hover/preview:scale-105 transition-transform duration-200">
                    <span>Open Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Metric Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-blue-700 text-xs font-bold shadow-lg">
                  <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
                  <span>{showcaseProjects[activeTab].metric}</span>
                </div>

                {/* Client Logo */}
                {showcaseProjects[activeTab].logo && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg flex items-center">
                    <img
                      src={showcaseProjects[activeTab].logo}
                      alt="Client logo"
                      onError={(e) => {
                        e.currentTarget.parentElement.style.display = "none";
                      }}
                      className="h-6 w-auto max-w-[110px] object-contain"
                    />
                  </div>
                )}

                {/* Bottom Details */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div className="text-left max-w-xl">
                    <div className="inline-block text-[11px] font-bold text-blue-300 uppercase tracking-wider mb-1">
                      {showcaseProjects[activeTab].category}
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white group-hover/preview:text-blue-200 transition-colors">
                      {showcaseProjects[activeTab].title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed line-clamp-2">
                      {showcaseProjects[activeTab].desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2.5">
                      {showcaseProjects[activeTab].tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/15 text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {showcaseProjects[activeTab].url !== "#" ? (
                    <a
                      href={showcaseProjects[activeTab].url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-press shrink-0 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center gap-2 shadow-lg transition-all"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="shrink-0 text-xs font-mono text-blue-300 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20">
                      Live Production Client
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-200 bg-slate-50 border-t border-slate-200 p-4 text-center">
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                <CountUp to={22} suffix="+" />
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Live Websites & Apps</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-black text-blue-600">
                <CountUp to={99} suffix="%" />
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Client Satisfaction</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                ₹500<span className="text-xs text-slate-400 font-normal">/mo</span>
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Hosting & Tech Care</div>
            </div>
            <div className="p-2">
              <div className="text-2xl sm:text-3xl font-black text-emerald-600">
                ₹<CountUp to={50} suffix="L+" />
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">Transactions Automated</div>
            </div>
          </div>
        </motion.div>

        {/* Founder Pill */}
        <div className="mt-8 flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs text-slate-600 shadow-sm">
          <img
            src={devAvatar}
            alt="Sagar Punia"
            className="w-6 h-6 rounded-full object-cover border border-blue-300"
          />
          <span>
            Talk directly to <strong className="text-slate-900">Sagar Punia</strong> (Lead Developer). No sales reps, no agency markups.
          </span>
          <a
            href="https://wa.me/918307967782"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-bold hover:underline inline-flex items-center gap-0.5"
          >
            <span>WhatsApp</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}