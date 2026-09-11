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
  AlertTriangle,
  HelpCircle,
  Check,
  Smartphone,
  Globe2,
} from "lucide-react";
import devAvatar from "../assets/assets/brand/dev_avatar.png";

export default function CheapWebsiteBlog() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const publishDate = "September 11, 2026";
  const readTime = "5 min read";
  const pageUrl = "https://www.inovix.co.in/blog/500-rs-website-design-truth";
  const heroImage = "https://www.inovix.co.in/blog/inovix-500-rs-website-plan.jpg";
  const pricingGraphic = "/blog/inovix-pricing-tier-breakdown.jpg";

  // FAQ Data used for UI and FAQPage Schema
  const faqs = [
    {
      q: "Kya Inovix sach me sirf ₹500 me website bana kar deta hai?",
      a: "Haan, bilkul! Inovix ka ₹500 Starter Plan khas taur par local dukaandar, clinic, freelancers aur chhote business owners ke liye banaya gaya hai. Isme aapko ek superfast, mobile-friendly 1-page Micro-Site milti hai jisme 1-Click WhatsApp lead button, business details, photos aur location map shamil hota hai — wo bhi bina kisi hidden charges ke.",
    },
    {
      q: "Market ke ₹500 scammers aur Inovix ke ₹500 plan me kya fark hai?",
      a: "Market ke scammers ₹500 bol kar aapko fasate hain aur baad me ₹8,000–₹10,000 renewal mangte hain ya virus-infested pirated themes daal dete hain. Inovix me zero hidden charges hain: clean hand-crafted code, 99 PageSpeed, automated WhatsApp direct lead flow aur 100% honest transparency.",
    },
    {
      q: "₹500 wali website me kya-kya milta hai?",
      a: "Aapko milta hai: (1) High-converting single-page digital visiting card/micro-site, (2) Direct 1-Click WhatsApp inquiry button, (3) Fast cloud hosting setup, (4) Call to action & phone call buttons, (5) Business timings, address & Google Maps integration, (6) 24-hours me delivery guarantee.",
    },
    {
      q: "Kya baad me hum ₹500 website ko full multi-page website me upgrade kar sakte hain?",
      a: "Haan! Jab aapka business grow ho jaye, aap aasani se Inovix ke Growth Launchpad (₹4,999) ya Custom Enterprise plan par upgrade kar sakte hain. Aapka data aur leads seamlessly transfer ho jayenge.",
    },
    {
      q: "Website shuru karwane ke liye mujhe kya provide karna hoga?",
      a: "Sirf aapki dukaan/business ka naam, 4-5 photos, phone number, address aur services ki list. Baaki poora setup, design aur WhatsApp connection Inovix team 24 ghante ke andar complete karke degi.",
    },
  ];

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "Kya ₹500 Me Website Ban Sakti Hai? Market Ke Scams Aur Inovix Ka ₹500 Starter Plan (2026)",
    "description": "Janiye market me ₹500 websites ke hidden traps aur kaise Inovix ne chhote business ke liye India ka sabse honest ₹500 Starter Micro-Site plan launch kiya hai.",
    "image": heroImage,
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
    "datePublished": "2026-09-11",
    "dateModified": "2026-09-11",
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
        <title>Kya ₹500 Me Website Ban Sakti Hai? The Truth & Inovix ₹500 Plan (2026) | Inovix</title>
        <meta
          name="description"
          content="Kya ₹500 me professional website possible hai? Market ke hidden scams se bachiye aur dekhiye kaise Inovix ka ₹500 Starter Micro-Site plan aapke business ko live karta hai."
        />
        <meta
          name="keywords"
          content="500 rupees website design, website in 500 rs, kya 500 me website banti hai, inovix 500 rs website, cheap website design India, 500 rs website maker Panipat, low cost website maker Haryana, website development pricing"
        />
        <link rel="canonical" href={pageUrl} />

        {/* OpenGraph */}
        <meta property="og:title" content="Kya ₹500 Me Website Ban Sakti Hai? Market Scams & Inovix ₹500 Plan" />
        <meta
          property="og:description"
          content="Explore market scams and how Inovix offers an authentic ₹500 Starter Micro-Site for small businesses in India."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Inovix" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kya ₹500 Me Website Ban Sakti Hai? Inovix ₹500 Starter Plan" />
        <meta name="twitter:description" content="Get your business online for just ₹500 with Inovix - fast loading, 1-click WhatsApp leads, zero hidden traps." />
        <meta name="twitter:image" content={heroImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative px-4 sm:px-6 max-w-4xl mx-auto mb-10">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-600/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-cyan-400 truncate">₹500 Website Guide & Plans</span>
        </div>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Small Business Digital Revolution (2026)</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
          Kya ₹500 Me Professional Website Ban Sakti Hai? <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
            Market Ke Hidden Scams Aur Inovix Ka ₹500 Starter Plan!
          </span>
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
              <div className="text-xs text-cyan-400">Founder & Lead Full-Stack Engineer at Inovix</div>
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
        
        {/* Featured Visual Image */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_10px_40px_-10px_rgba(6,182,212,0.3)] relative group">
          <img
            src="/blog/inovix-500-rs-website-plan.jpg"
            alt="Inovix 500 rupees website plan with WhatsApp button and 99 pagespeed score"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="p-3 bg-[#06060c]/90 border-t border-white/10 text-xs text-slate-300 font-mono text-center flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Figure 1: Inovix ₹500 Starter Micro-Site — Sub-second speed, clean mobile UI, and direct 1-click WhatsApp leads.</span>
          </div>
        </div>

        {/* Quick Executive Summary Callout */}
        <div className="mb-10 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-cyan-950/40 via-slate-900/60 to-blue-950/30 border border-cyan-500/30 relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <Zap className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                Seedha Jawab: Kya ₹500 Me Website Sambhav Hai?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed mb-3">
                <strong>Haan, 100% sambhav hai — lekin sahi tareeke se!</strong> Market me chal rahe zyadatar ₹500 ke ads "scam" hote hain kyunki wo purane templates daal kar aapse baad me ₹10,000 vasoolte hain.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Lekin Inovix ne is pure market model ko badal diya hai: <span className="text-cyan-300 font-semibold">Humne chhote dukaandaaron, doctors, aur freelancers ke liye "₹500 Starter Micro-Site Plan" launch kiya hai</span> — jisme aapko clean, modern, mobile-friendly landing site milti hai with 1-click WhatsApp lead buttons aur zero hidden trap!
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mb-12 p-6 rounded-xl bg-white/[0.02] border border-white/10">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Is Guide Me Aap Kya Seekhenge:</span>
          </h3>
          <ul className="space-y-2.5 text-sm text-slate-300 font-medium">
            <li>
              <a href="#market-scam-trap" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">01.</span> Market Ke Cheap ₹500 Scams Kaise Kaam Karte Hain (Bait-and-Switch)
              </a>
            </li>
            <li>
              <a href="#inovix-500-solution" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">02.</span> Inovix Ka ₹500 Starter Plan: Chhote Business Ke Liye Digital Kranti
              </a>
            </li>
            <li>
              <a href="#comparison-table" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">03.</span> Market Scammer vs Inovix ₹500 Plan vs ₹4,999 Growth Platform
              </a>
            </li>
            <li>
              <a href="#pricing-breakdown" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">04.</span> Inovix Official Website Packages (2026 Price Guide)
              </a>
            </li>
            <li>
              <a href="#how-to-order-500" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">05.</span> 24 Ghante Me Apni ₹500 Website Live Kaise Karwayen (Simple Steps)
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">06.</span> Frequently Asked Questions (Aam Sawal-Jawab)
              </a>
            </li>
          </ul>
        </div>

        {/* Section 1: Market Traps */}
        <section id="market-scam-trap" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            1. Market Ke Cheap ₹500 Scams Kaise Kaam Karte Hain
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Aapne Instagram reels ya Facebook ads par dekha hoga: <em>"Apni dukaan ki website banwayen sirf ₹499 me!"</em>
          </p>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Panipat, Haryana aur pure India ke seedhe-saadhe dukaandar aur clinics is jhaanse me fas jate hain. Market ke unverified freelancers aapse ₹500 advance lene ke baad ye karte hain:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/25 flex flex-col justify-between">
              <div>
                <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> Free Clumsy Subdomain
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aapko branded URL nahi dete, balki <code>yourshop.freewebsite.site</code> jaisa cheap address dete hain jisse customers ka trust toot jata hai.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/25 flex flex-col justify-between">
              <div>
                <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> Hidden ₹10,000 Extortion
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Pehle ₹500 lete hain, fir SSL ke ₹2,000, mobile view ke ₹3,000 aur saal baad renewal ke ₹10,000 maang kar blackmail karte hain.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/25 flex flex-col justify-between">
              <div>
                <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> Broken Nulled Code
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Chori ke malware-infected WordPress plugins daal dete hain jo 10 second me khulti hai aur form submit hone par koi email ya notification nahi aata.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Inovix Solution */}
        <section id="inovix-500-solution" className="mb-14 scroll-mt-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>The Inovix Innovation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            2. Inovix Ka ₹500 Starter Plan: Chhote Business Ke Liye Digital Kranti
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Humara manna hai ki <strong className="text-white font-bold">har chhote dukaandar aur entrepreneur ka haq hai online aana</strong>. Isi soch ke sath Inovix ne shuru kiya hai <strong className="text-white font-bold">₹500 Starter Micro-Site Plan</strong>. Hum purani slow WordPress ki jagah modern, lightning-fast edge code use karte hain jisme zero maintenance cost lagti hai.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-cyan-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Smartphone size={18} />
                </div>
                <h4 className="font-bold text-white text-sm">Ultra-Fast Mobile Micro-Site</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mobile par 1 second se bhi kam me load hoti hai. Aapki dukaan ka naam, photo gallery, timings aur services sab ek jagah.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <MessageCircle size={18} />
                </div>
                <h4 className="font-bold text-white text-sm">1-Click Direct WhatsApp Lead</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Customer jaise hi click karega, seedha aapke personal WhatsApp number par pre-filled order/inquiry aayegi. Zero missed leads!
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-purple-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Globe2 size={18} />
                </div>
                <h4 className="font-bold text-white text-sm">High-Speed Edge Cloud Hosting Included</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Website 24x7 bina kisi crash ke live rahegi. High-speed SSL security ke sath.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-zinc-900/60 border border-amber-500/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400">
                  <ShieldCheck size={18} />
                </div>
                <h4 className="font-bold text-white text-sm">100% Transparent, No Hidden Charges</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Jo kaha wahi milega. Koi extra surprise charge nahi, koi extortion renewals nahi. Honest founder commitment!
              </p>
            </div>
          </div>

          {/* Direct WhatsApp CTA Button */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/50 via-cyan-950/40 to-[#0c1322] border border-emerald-500/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1">
                Special Launch Offer (Only ₹500)
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Apni Dukaan Ko Aaj Hi Online Shuru Karein!
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                Sagar Punia (Founder, Inovix) se seedha WhatsApp par baat karein aur 24 ghante me apni website live karwayen.
              </p>
            </div>
            <a
              href="https://wa.me/918307967782?text=Hi%20Sagar,%20mujhe%20Inovix%20ki%20₹500%20wali%20Starter%20website%20banwani%20hai."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order ₹500 Website On WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Section 3: Honest Comparison Table */}
        <section id="comparison-table" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            3. Market Scammers vs. Inovix ₹500 Plan vs. Growth Launchpad
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Yeh table aapko poora sach batata hai taaki aap samajh sakein ki aapko kis plan ki zaroorat hai:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#06060e] mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white font-semibold border-b border-white/10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-red-400">Market ₹500 Fake Scam</th>
                  <th className="p-4 text-cyan-400">Inovix Starter (₹500)</th>
                  <th className="p-4 text-emerald-400">Inovix Growth (₹4,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 font-semibold text-white">Target Audience</td>
                  <td className="p-4 text-slate-400">Trap for anyone</td>
                  <td className="p-4 text-cyan-300 font-semibold">Local Shops, Clinics, Freelancers</td>
                  <td className="p-4 text-emerald-300 font-semibold">Established Businesses & Brands</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Speed & Performance</td>
                  <td className="p-4 text-red-400">8–12 seconds (Terrible)</td>
                  <td className="p-4 text-cyan-300 font-semibold">Sub-1 Second Instant Load</td>
                  <td className="p-4 text-emerald-300 font-semibold">99 PageSpeed Sub-500ms</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Lead Generation</td>
                  <td className="p-4 text-slate-400">Dead forms (Zero leads)</td>
                  <td className="p-4 text-cyan-300 font-semibold">1-Click Direct WhatsApp Funnel</td>
                  <td className="p-4 text-emerald-300 font-semibold">WhatsApp + EmailJS + CRM Funnel</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Hidden Charges</td>
                  <td className="p-4 text-red-400 font-bold">₹10,000+ Renewal Trap</td>
                  <td className="p-4 text-emerald-400 font-bold">₹0 Hidden Charges</td>
                  <td className="p-4 text-emerald-400 font-bold">₹0 Hidden Charges</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Custom .com / .in Domain</td>
                  <td className="p-4 text-slate-400">Spam Subdomain</td>
                  <td className="p-4 text-slate-300">Inovix Cloud Link (or bring own)</td>
                  <td className="p-4 text-emerald-300 font-semibold">Free Custom Domain Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Founder Support</td>
                  <td className="p-4 text-red-400">Blocked on WhatsApp</td>
                  <td className="p-4 text-cyan-300 font-semibold">Direct Sagar Punia WhatsApp Support</td>
                  <td className="p-4 text-emerald-300 font-semibold">Priority 24/7 Founder Support</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Visual Pricing Graphic & Price Guide */}
        <section id="pricing-breakdown" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            4. Inovix Official Website Packages (2026 Price Guide)
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Aapki requirement aur budget ke anusar Inovix ke transparent packages:
          </p>

          {/* Pricing Graphic Image */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl relative group">
            <img
              src={pricingGraphic}
              alt="Inovix website pricing tier breakdown: Starter 500 rs, Growth Launchpad 4999 rs, and Enterprise"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="p-3 bg-[#06060c]/90 border-t border-white/10 text-xs text-slate-400 font-mono text-center">
              Figure 2: Transparent Inovix Pricing — Choose what fits your current business stage.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {/* Tier 1: 500 Plan */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/40 to-[#080812] border-2 border-cyan-500/50 relative flex flex-col shadow-[0_0_25px_rgba(6,182,212,0.2)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-wider">
                Micro-Business Hero
              </div>
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">Starter Micro-Site</div>
              <div className="text-3xl font-black text-white mb-1">₹500 <span className="text-xs font-normal text-slate-400">one-time</span></div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">Shops, Doctors, Clinics & Freelancers</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Single-Page Modern Mobile Micro-Site</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>1-Click Direct WhatsApp Order Button</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Photo Gallery, Address & Call Button</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>High-Speed Cloud Hosting Included</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Live in 24 Hours Guarantee</span>
                </li>
              </ul>
              <a
                href="https://wa.me/918307967782?text=Hi%20Sagar,%20mujhe%20Inovix%20ki%20₹500%20wali%20Starter%20website%20banwani%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black text-center text-xs font-extrabold transition-all shadow-md"
              >
                Get ₹500 Micro-Site
              </a>
            </div>

            {/* Tier 2: 4,999 Plan */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/30 to-[#080812] border-2 border-emerald-500/40 relative flex flex-col shadow-[0_0_25px_rgba(16,185,129,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-400 text-black text-[10px] font-black uppercase tracking-wider">
                Full Business
              </div>
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">Growth Launchpad</div>
              <div className="text-3xl font-black text-white mb-1">₹4,999</div>
              <div className="text-xs text-emerald-400 font-semibold mb-4">Growing Brands & Service Providers</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Complete Multi-Section Website</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Custom .com / .in Domain & SSL</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Google Search SEO & Maps Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>EmailJS Automated Lead Alerts</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>99 PageSpeed Score Guarantee</span>
                </li>
              </ul>
              <a
                href="https://wa.me/918307967782?text=Hi%20Sagar,%20I%20am%20interested%20in%20the%20Growth%20Launchpad%20package."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black text-center text-xs font-bold transition-all"
              >
                Choose Growth ₹4,999
              </a>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col">
              <div className="text-xs text-slate-400 font-mono uppercase mb-1">Custom Enterprise</div>
              <div className="text-3xl font-black text-white mb-1">₹18,000+</div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">Exporters, Factories & SaaS Apps</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>React / Next.js Custom Codebase</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Interactive Product Catalogs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Automated n8n Webhook CRM Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Dedicated Account Manager</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center text-xs font-semibold transition-colors"
              >
                Custom Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Easy Order Steps */}
        <section id="how-to-order-500" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            5. 24 Ghante Me Apni ₹500 Website Live Kaise Karwayen
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Aapko koi coding ya technical knowledge ki zaroorat nahi hai. Bas 3 simple steps:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  WhatsApp Par Apni Details Bhejiye
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Apni shop/business ka naam, 4-5 photos, phone number aur address WhatsApp par share karein.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  Inovix Team 24 Ghante Me Site Ready Karegi
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Hum aapka modern single-page design, WhatsApp lead button aur cloud hosting setup karke aapko live preview link bhejenge.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                  Check Karein Aur Apni Dukaan Online Chalu Karein!
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  Aap preview dekh kar approve karein aur apni website ka link apne visiting card, WhatsApp status aur Instagram bio me share karna shuru karein!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section id="faqs" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            6. Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            ₹500 websites aur Inovix plans se jude aam sawal aur sachhe jawab:
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

        {/* Read Next Section */}
        <div className="mb-14 p-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-cyan-400 font-mono uppercase mb-1">Read Next Guide</div>
            <h4 className="text-base font-bold text-white">
              Best Web Development Company in Panipat (2026 Guide)
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Cost comparison, client case studies (Trireme Group & Saksham Appleveda), and SEO secrets.
            </p>
          </div>
          <Link
            to="/blog/best-web-development-company-panipat"
            className="px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 text-xs font-bold border border-cyan-500/30 whitespace-nowrap transition-colors"
          >
            Read Panipat Guide →
          </Link>
        </div>

        {/* Final High-Converting Bottom Banner */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a0f1d] via-[#06060c] to-[#0d1527] border border-cyan-500/40 text-center relative overflow-hidden shadow-[0_10px_50px_-10px_rgba(0,212,255,0.25)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Founder Promise & Support</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
              Apne Business Ko Online Layein — Sirf ₹500 Se Shuru Karein!
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
              Sub-second speed, 1-Click WhatsApp lead system aur direct founder Sagar Punia ka bharosa. Koi hidden fee nahi, koi trap nahi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918307967782?text=Hi%20Sagar,%20mujhe%20Inovix%20ki%20₹500%20wali%20Starter%20website%20banwani%20hai."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm shadow-[0_0_25px_rgba(0,212,255,0.4)] flex items-center justify-center gap-2 transition-all hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat With Sagar on WhatsApp (+91 8307967782)</span>
              </a>

              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/10 transition-colors"
              >
                Contact Form
              </Link>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-[11px] text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>₹500 Transparent Pricing</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Hidden Fees</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>24-Hour Delivery</span>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
