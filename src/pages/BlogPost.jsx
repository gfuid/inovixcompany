import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
  Layers,
  Award,
} from "lucide-react";
import devAvatar from "../assets/assets/brand/dev_avatar.png";

export default function BlogPost() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const publishDate = "September 9, 2026";
  const readTime = "7 min read";
  const pageUrl = "https://www.inovix.co.in/blog/best-web-development-company-panipat";

  // FAQ Data used for both UI and FAQPage Schema
  const faqs = [
    {
      q: "How much does a custom business website cost in Panipat?",
      a: "In Panipat, a modern, high-speed business website typically ranges from ₹15,000 for standard lead-generation websites to ₹45,000+ for custom React/Next.js platforms with automated CRM/WhatsApp integrations. Unlike slow ₹5,000 templates that break quickly, custom platforms deliver 10x ROI by loading under 1 second and ranking on Google.",
    },
    {
      q: "Why should businesses in Panipat choose custom code over WordPress?",
      a: "Traditional WordPress sites are weighed down by 30+ plugins, resulting in 5-8 second load times, security vulnerabilities, and high bounce rates. Custom platforms built with React or Next.js load in under 500ms, achieve 95+ Google PageSpeed scores, and convert 3x more mobile visitors into real WhatsApp leads.",
    },
    {
      q: "How long does it take Inovix to build and launch a website?",
      a: "A standard high-performance business website is delivered within 5 to 7 business days. Complex B2B portals or export catalogs with API and WhatsApp automation take approximately 10 to 14 days with zero downtime.",
    },
    {
      q: "Can Inovix help my website rank #1 on Google for local queries in Panipat?",
      a: "Yes. Every website built by Inovix comes engineered with technical SEO, Google LocalBusiness Schema, sub-second Core Web Vitals, and semantic keyword architecture to rank for competitive commercial queries in Haryana and across India.",
    },
    {
      q: "Do I get direct founder access during the project?",
      a: "Absolutely. At Inovix, you communicate directly with Founder & Lead Engineer Sagar Punia. There are zero account managers or junior middlemen, guaranteeing 100% technical accountability and instant revisions.",
    },
  ];

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Best Web Development Company in Panipat (2026 Guide): Cost, Tech & How to Get High ROI",
    "description": "Looking for the top web development and digital marketing agency in Panipat, Haryana? Learn how custom modern web engineering beats slow WordPress templates and generates real B2B leads.",
    "author": {
      "@type": "Person",
      "name": "Sagar Punia",
      "jobTitle": "Lead Full-Stack Developer & Founder",
      "url": "https://www.inovix.co.in/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inovix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inovix.co.in/ino.png"
      }
    },
    "datePublished": "2026-09-09",
    "dateModified": "2026-09-09",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    }
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-[#040407] text-slate-200 min-h-screen pt-28 pb-20 selection:bg-cyan-500/30">
      <Helmet>
        <title>Best Web Development Company in Panipat (2026 Guide) | Inovix</title>
        <meta
          name="description"
          content="Complete 2026 guide to choosing the best web development & digital marketing agency in Panipat. Compare costs, speed, SEO, and WhatsApp automation for 10x ROI."
        />
        <meta
          name="keywords"
          content="Best Web Development Company in Panipat, Web Design Panipat, Digital Marketing Agency Panipat, Website Development Cost Haryana, Custom React Web Development Panipat, Inovix"
        />
        <link rel="canonical" href={pageUrl} />

        {/* OpenGraph & Social Cards */}
        <meta property="og:title" content="Best Web Development Company in Panipat (2026 Guide)" />
        <meta
          property="og:description"
          content="Why modern Panipat businesses are switching from slow WordPress sites to high-speed custom web platforms that rank #1 and drive real leads."
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Inovix" />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative px-4 sm:px-6 max-w-4xl mx-auto mb-12">
        {/* Glow ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-cyan-400 truncate">Best Web Development in Panipat</span>
        </div>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Panipat Business & Tech Guide</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
          Best Web Development Company in Panipat (2026 Guide): Cost, Speed & Real Lead Generation
        </h1>

        {/* Meta details */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-3">
            <img
              src={devAvatar}
              alt="Sagar Punia"
              className="w-10 h-10 rounded-full object-cover border border-cyan-400/40"
            />
            <div>
              <div className="font-semibold text-white">Sagar Punia</div>
              <div className="text-xs text-cyan-400">Founder & Lead Full-Stack Engineer</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Quick Summary Box / Google Featured Snippet Bait */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-blue-950/20 border border-cyan-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />
          <div className="flex items-start gap-3">
            <Award className="w-6 h-6 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                Executive Summary: Best Web Development in Panipat
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                The best web development company in Panipat is <strong>Inovix</strong>, led by certified Full-Stack developer Sagar Punia. Unlike traditional agencies selling slow, bloated ₹5,000 WordPress templates, Inovix builds modern, sub-second React/Next.js platforms with automated WhatsApp lead pipelines, 95+ Google PageSpeed ratings, and transparent founder accountability.
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 p-6 rounded-xl bg-white/[0.02] border border-white/10">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Table of Contents</span>
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
            <li>
              <a href="#why-panipat-businesses-fail" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">01.</span> Why Most Business Websites in Panipat Fail to Generate Leads
              </a>
            </li>
            <li>
              <a href="#custom-vs-wordpress" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">02.</span> Custom Modern Code vs. Cheap WordPress Templates
              </a>
            </li>
            <li>
              <a href="#cost-breakdown" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">03.</span> Website Development Cost in Panipat & Haryana (2026 Guide)
              </a>
            </li>
            <li>
              <a href="#real-case-studies" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">04.</span> Real Client Results: Trireme Group & Saksham Appleveda
              </a>
            </li>
            <li>
              <a href="#key-factors-to-choose" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">05.</span> 5 Questions You Must Ask Before Hiring Any Panipat Agency
              </a>
            </li>
            <li>
              <a href="#faq-section" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">06.</span> Frequently Asked Questions (FAQs)
              </a>
            </li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="why-panipat-businesses-fail" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            1. Why Most Business Websites in Panipat Fail to Generate Leads
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Panipat is globally known as the textile, handloom, and industrial capital of Haryana. Every month, dozens of exporters, manufacturers, retail brands, and healthcare clinics invest money into new websites hoping to unlock inquiries from international buyers and domestic clients.
          </p>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Yet, <strong>over 85% of these business owners end up with zero leads</strong> after spending ₹10,000 to ₹30,000. Why? Because most local agencies make three fatal mistakes:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="text-red-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> 5-8s Load Times
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                53% of mobile visitors abandon a website if it takes more than 3 seconds to load. Slow sites bleed high-intent buyers before they even see your products.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="text-red-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> No WhatsApp Automation
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traditional contact forms lose 70% of inquiries because Indian buyers prefer instant WhatsApp chat. If you don’t offer 1-click WhatsApp quotes, competitors win.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <div className="text-red-400 font-bold text-sm mb-1 flex items-center gap-1.5">
                <XCircle className="w-4 h-4" /> Zero Technical SEO
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Copy-pasted WordPress templates lack Schema.org markup, semantic headings, and clean URL routing, making it virtually impossible to rank on Google Page 1.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Comparison */}
        <section id="custom-vs-wordpress" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            2. Custom Modern Code (React / Next.js) vs. Cheap WordPress Templates
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            When you hire an agency in Panipat or Delhi NCR, the first technical decision determines whether your website becomes a revenue-generating asset or an ongoing headache. Here is an honest technical comparison:
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#06060e] mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white font-semibold border-b border-white/10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Feature / Metric</th>
                  <th className="p-4 text-red-400">₹5K - ₹10K Cheap Agency (WordPress)</th>
                  <th className="p-4 text-cyan-400">Inovix Engineering (React / Custom)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 font-semibold text-white">Google PageSpeed Score</td>
                  <td className="p-4 text-red-400">30 – 55 / 100 (Fails Core Web Vitals)</td>
                  <td className="p-4 text-emerald-400 font-semibold">95 – 100 / 100 (Instant Sub-Second)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Mobile Load Speed</td>
                  <td className="p-4 text-slate-400">5.2 – 8.0 Seconds</td>
                  <td className="p-4 text-cyan-400 font-semibold">0.4 – 0.8 Seconds</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Lead Capture Funnel</td>
                  <td className="p-4 text-slate-400">Basic form (frequently broken by spam)</td>
                  <td className="p-4 text-emerald-400 font-semibold">Automated WhatsApp + n8n CRM sync</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Security & Maintenance</td>
                  <td className="p-4 text-slate-400">High plugin crash risk & malware attacks</td>
                  <td className="p-4 text-cyan-400 font-semibold">Zero plugin vulnerabilities, rock-solid</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Point of Contact</td>
                  <td className="p-4 text-slate-400">Junior sales reps / interns</td>
                  <td className="p-4 text-emerald-400 font-semibold">Direct Founder & Lead Developer</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Lead Magnet Callout Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-blue-900/40 border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-6 my-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                Free Technical Consultation
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Want to know why your current website isn’t ranking?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                Get a free 15-minute Core Web Vitals & SEO audit of your website directly on WhatsApp with Sagar Punia.
              </p>
            </div>
            <a
              href="https://wa.me/918307967782?text=Hi%20Sagar,%20I%20read%20your%20Panipat%20web%20dev%20guide%20and%20want%20a%20free%20website%20audit%20and%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Audit My Website on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Section 3: Cost Breakdown */}
        <section id="cost-breakdown" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            3. Website Development Cost in Panipat & Haryana (2026 Transparent Guide)
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            One of the most frequent questions business owners ask is: <em>"Panipat me ek achhi website kitne me banti hai?"</em> (How much does a good website cost in Panipat?).
          </p>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Pricing varies widely depending on your business requirements, design complexity, and backend automation. Here is our transparent market breakdown:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {/* Tier 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col">
              <div className="text-xs text-slate-400 font-mono uppercase mb-2">Tier 1: Business Starter</div>
              <div className="text-2xl font-black text-white mb-1">₹8,000 – ₹15,000</div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">For Local Services & Clinics</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>5-8 High-Converting Pages</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Mobile-First Responsive Layout</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>1-Click Direct WhatsApp Integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Google My Business Map Sync</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center text-xs font-semibold transition-colors"
              >
                Inquire Starter Plan
              </Link>
            </div>

            {/* Tier 2: Popular */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-[#080812] border-2 border-cyan-500/40 relative flex flex-col shadow-[0_0_30px_rgba(0,212,255,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-wider">
                Most Popular for Exporters
              </div>
              <div className="text-xs text-slate-400 font-mono uppercase mb-2">Tier 2: Growth & Export</div>
              <div className="text-2xl font-black text-white mb-1">₹18,000 – ₹28,000</div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">For Manufacturers & B2B Brands</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Ultra-Fast React/Next.js Codebase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Full Technical SEO & Schema Markup</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Interactive Product/Fabric Catalogs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Automated WhatsApp Lead Capture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>95+ Google PageSpeed Guarantee</span>
                </li>
              </ul>
              <a
                href="https://wa.me/918307967782?text=Hi%20Sagar,%20I%20am%20interested%20in%20the%20Growth%20&%20Export%20web%20package"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-center text-xs font-bold transition-all shadow-md"
              >
                Get Growth Plan Quote
              </a>
            </div>

            {/* Tier 3 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col">
              <div className="text-xs text-slate-400 font-mono uppercase mb-2">Tier 3: Enterprise Platform</div>
              <div className="text-2xl font-black text-white mb-1">₹35,000 – ₹70,000+</div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">SaaS, Portals & Custom CRM</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Custom Full-Stack Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>n8n Workflow Automation & Webhooks</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Multi-Tenant Auth & Role Portals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Sub-50ms API Latency with Redis</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center text-xs font-semibold transition-colors"
              >
                Discuss Enterprise Needs
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: Real Case Studies */}
        <section id="real-case-studies" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            4. Real Client Proof: Trireme Group & Saksham Appleveda
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Generic agencies show mockups and stock photos. At Inovix, we measure success in real business metrics:
          </p>

          <div className="space-y-6 my-6">
            {/* Case 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white">Trireme Group — B2B Pharmaceutical Portal</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    90% Speed Boost
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Trireme Group required an ultra-fast B2B portal to display complex pharmaceutical catalogs to international buyers. By re-architecting their web infrastructure using Next.js and Redis caching, we cut page latency from 2.4 seconds to <strong>under 50 milliseconds</strong>, boosting international distributor inquiries by 65%.
                </p>
                <div className="text-xs font-mono text-cyan-400">
                  Result: Sub-second catalog queries & automated distributor lead routing.
                </div>
              </div>
            </div>

            {/* Case 2 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-lg font-bold text-white">Saksham Appleveda — Healthcare & Ayurvedic Brand</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    3.8x Mobile Leads
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Replaced an outdated, slow WordPress website with a bespoke responsive brand experience engineered for mobile conversions. Integrated instant WhatsApp consultation triggers and technical SEO schema, resulting in <strong>page-1 Google rankings</strong> for target Ayurvedic consultation terms.
                </p>
                <div className="text-xs font-mono text-emerald-400">
                  Result: 380% increase in daily qualified customer inquiries via WhatsApp.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Buyer Checklist */}
        <section id="key-factors-to-choose" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            5. 5 Questions You Must Ask Before Hiring Any Web Agency in Panipat
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Before signing an agreement or transferring an advance payment to any web design company, ask them these 5 critical questions:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                1. "Will my website score 90+ on Google PageSpeed Insights on mobile?"
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                If they evade the question or say "PageSpeed doesn't matter," walk away. Google explicitly uses mobile page speed as a primary ranking signal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                2. "Will I have direct access to the developer writing my code?"
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Most big agencies have sales reps who promise the world, then hand your project to an unpaid intern. Ensure you speak directly to the technical lead.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                3. "Are you building on a custom modern stack or a bloated pirated theme?"
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Many low-cost agencies install nulled/pirated WordPress themes containing hidden malware and backdoors that crash within 6 months.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                4. "Does the website integrate automated WhatsApp lead notifications?"
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                If an inquiry comes in at 9 PM and sits in an unmonitored email inbox, that lead goes to a competitor. Instant WhatsApp alerts are mandatory.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                5. "Do I own 100% of the code, domain, and hosting rights?"
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Never let an agency hold your domain or code hostage. At Inovix, clients have full, unconditional ownership of all repository and hosting credentials.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section id="faq-section" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            6. Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            Quick answers to common questions about web development, pricing, and timelines in Panipat.
          </p>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-white text-sm sm:text-base hover:text-cyan-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 text-slate-400 ${
                      openFaq === idx ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final High-Converting Bottom Banner */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a0f1d] via-[#06060c] to-[#0d1527] border border-cyan-500/30 text-center relative overflow-hidden shadow-[0_10px_50px_-10px_rgba(0,212,255,0.2)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Founder Direct Guarantee</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
              Ready to Build a Website That Actually Generates Business Inquiries?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
              Stop wasting money on slow WordPress sites. Let's build a sub-second, Page-1 ranking web platform designed specifically for your business growth.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918307967782?text=Hi%20Sagar,%20I%20want%20to%20discuss%20a%20new%20website%20for%20my%20business"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with Sagar on WhatsApp (+91 8307967782)</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                Send Direct Inquiry
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Free Strategy Call</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Sales Pressure</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>5-7 Day Delivery</span>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
