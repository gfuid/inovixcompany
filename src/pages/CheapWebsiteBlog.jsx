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
  DollarSign,
  Lock,
  Server,
  Award,
} from "lucide-react";
import devAvatar from "../assets/assets/brand/dev_avatar.png";

export default function CheapWebsiteBlog() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const publishDate = "September 9, 2026";
  const readTime = "6 min read";
  const pageUrl = "https://www.inovix.co.in/blog/500-rs-website-design-truth";
  const heroImage = "https://www.inovix.co.in/blog/500-rupees-website-truth-vs-reality.jpg";
  const costBreakdownImage = "https://www.inovix.co.in/blog/real-website-cost-breakdown-india.jpg";

  // FAQ Data used for UI and FAQPage Schema
  const faqs = [
    {
      q: "Kya sach me ₹500 me professional business website ban sakti hai?",
      a: "Nahi, bilkul nahi. Ek standard .com ya .in domain ka wholesale cost hi ₹750 se ₹1,200/saal hota hai aur reliable cloud hosting ₹2,500+ aati hai. Jo log ₹500 me 'poori website' ka dawa karte hain, wo purane nulled/pirated templates use karte hain jo 8-10 seconds me load hote hain aur bad me renewal ke naam par ₹8,000 se ₹15,000 vasoolte hain.",
    },
    {
      q: "Why do freelancers and small agencies advertise websites for ₹500 or ₹999?",
      a: "Ye classic 'bait-and-switch' trap hota hai. ₹500 sirf aapko fasane ke liye hota hai. Jaise hi aap advance dete hain, wo aapse SSL certificate, domain connection, business email, GST aur content upload ke alag-alag charges mangne lagte hain.",
    },
    {
      q: "What is the true minimum cost to build a legitimate business website in India?",
      a: "Ek fast, secure aur leads generate karne wali business website ka realistic cost ₹8,000 se ₹15,000 ke beech hota hai. Isme aapka genuine domain, fast cloud hosting, mobile responsive UI, Google Maps sync aur direct 1-click WhatsApp integration shamil hota hai.",
    },
    {
      q: "Can cheap ₹500 websites rank on Google Page 1?",
      a: "Kabhi nahi. Google ka Core Web Vitals algorithm slow loading (3+ seconds), unoptimized JavaScript aur security vulnerability wali sites ko penalize karta hai. ₹500 wali sites me zero Schema markup aur technical SEO hota hai, isliye wo Google par kabhi rank nahi karti.",
    },
    {
      q: "How can I protect my business from web design scams in Panipat & Haryana?",
      a: "Hamesha apna domain name khud register karein (Namecheap ya Cloudflare par) aur developer ko sirf DNS access dein. Agency se past client websites ka mobile Google PageSpeed score mangiye (jo 90+ hona chahiye), aur ensure karein ki 100% code aur hosting credentials aapke paas rahein.",
    },
  ];

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": "The Truth About '₹500 Website Design' in India (2026 Reality Check): Hidden Traps & Real Costs",
    "description": "Can you really get a business website for ₹500 in India? Uncover the hidden renewal traps, malware risks, zero Google ranking, and what real business websites actually cost.",
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
        <title>The Truth About ₹500 Website Design in India (2026 Reality Check) | Inovix</title>
        <meta
          name="description"
          content="Can you really get a website for ₹500 in India? Uncover the hidden renewal traps, malware risks, zero Google ranking, and what real business websites actually cost."
        />
        <meta
          name="keywords"
          content="500 rupees website design, website in 500 rs, kya 500 me website banti hai, cheap website design India, 500 rs website maker Panipat, low cost website maker Haryana, website development cost reality, web design scam India"
        />
        <link rel="canonical" href={pageUrl} />

        {/* OpenGraph & Social Cards */}
        <meta property="og:title" content="The Truth About ₹500 Website Design in India (2026 Reality Check)" />
        <meta
          property="og:description"
          content="The hidden costs, hostage domains, and security risks behind ₹500 cheap websites in India, and what real business websites actually cost."
        />
        <meta property="og:image" content={heroImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Inovix" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Truth About ₹500 Website Design in India (2026 Reality Check)" />
        <meta name="twitter:description" content="Why ₹500 websites ruin business reputation and how much real lead-generating websites cost in 2026." />
        <meta name="twitter:image" content={heroImage} />

        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* Hero Header Section */}
      <section className="relative px-4 sm:px-6 max-w-4xl mx-auto mb-12">
        {/* Glow ambient */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[140px] rounded-full pointer-events-none" />

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 font-mono">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-cyan-400 truncate">₹500 Website Design Reality</span>
        </div>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Consumer Awareness & Web Pricing</span>
        </div>

        {/* Main H1 Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] mb-6">
          The Truth About "₹500 Website Design" in India (2026): Scam, Hidden Traps & Real Costs
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
        {/* Featured Visual Image */}
        <div className="mb-10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] relative group">
          <img
            src="/blog/500-rupees-website-truth-vs-reality.jpg"
            alt="Comparison of a 500 rupees cheap broken website vs high performance modern website"
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
          />
          <div className="p-3 bg-[#06060c]/90 border-t border-white/10 text-xs text-slate-400 font-mono text-center">
            Figure 1: The stark contrast between a slow, error-ridden ₹500 template versus a 99 PageSpeed modern platform.
          </div>
        </div>

        {/* Quick Executive Summary Callout */}
        <div className="mb-10 p-6 rounded-2xl bg-gradient-to-br from-amber-950/40 via-red-950/20 to-slate-900/40 border border-amber-500/30 relative overflow-hidden">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white mb-2">
                Quick Reality Check: Kya ₹500 Me Website Possible Hai?
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                <strong>Sach ye hai:</strong> Ek genuine <code>.com</code> ya <code>.in</code> domain name wholesale me hi ₹800–₹1,200 ka aata hai aur reliable hosting ₹2,500+ aati hai. Isliye <strong>₹500 me koi legitimate website possible hi nahi hai</strong>. Ye ads sirf ek trap hote hain jisme aapko fasa kar bad me ₹8,000–₹15,000 ke renewal charges liye jaate hain aur domain hostage banaya jata hai.
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
              <a href="#how-500-trap-works" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">01.</span> The Anatomy of the "₹500 Website" Trap (How It Works)
              </a>
            </li>
            <li>
              <a href="#hidden-costs-breakdown" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">02.</span> True Baseline Costs: What Raw Web Infrastructure Actually Costs
              </a>
            </li>
            <li>
              <a href="#cheap-vs-custom-comparison" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">03.</span> ₹500 Cheap Template vs. Professional Inovix Engineering
              </a>
            </li>
            <li>
              <a href="#real-website-pricing" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">04.</span> Realistic Website Investment in India (2026 Price Guide)
              </a>
            </li>
            <li>
              <a href="#how-to-stay-safe" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">05.</span> 4 Golden Rules to Avoid Web Design Scams in Panipat
              </a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                <span className="text-cyan-500 font-mono text-xs">06.</span> Frequently Asked Questions (FAQs)
              </a>
            </li>
          </ul>
        </div>

        {/* Section 1 */}
        <section id="how-500-trap-works" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            1. The Anatomy of the "₹500 Website" Trap (How It Works)
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Aapne Instagram reels, Facebook ads ya OLX par zaroor dekha hoga: <em>"Apni dukaan ya business ki website banwaiye sirf ₹500 me!"</em> ya <em>"Get 5-page responsive website in ₹499 only!"</em>
          </p>
          <p className="text-base text-slate-300 leading-relaxed mb-4">
            Panipat, Sonipat, Karnal aur pure India ke chhote business owners, doctors aur exporters ke liye ye deal bohot attractive lagti hai. Lekin jaise hi aap ₹500 pay karte hain, ye 3 bade scams samne aate hain:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/25 flex flex-col justify-between">
              <div>
                <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> Free Clumsy Subdomain
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Aapko <code>yourbrand.com</code> nahi milta. Wo aapko <code>yourbrand.freewebsite.site</code> jaisa cheap URL dete hain, jise dekh kar koi bhi B2B customer inquiry nahi deta.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/25 flex flex-col justify-between">
              <div>
                <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> Hostage Domain Blackmail
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Agar domain khareeda bhi, to wo <strong>apne email</strong> par register karte hain. Saal baad renewal ke waqt aapse ₹10,000 mangte hain, warna domain competitor ko bech dete hain.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/25 flex flex-col justify-between">
              <div>
                <div className="text-red-400 font-bold text-sm mb-2 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 shrink-0" /> Pirated Nulled Malware
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Chori ke themes download karke daal dete hain jisme hidden crypto miners aur backdoor scripts hoti hain. 30 dino ke andar Google aapki site ko <em>"Dangerous Site"</em> mark karke block kar deta hai.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Infographic & Real Economics */}
        <section id="hidden-costs-breakdown" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            2. True Baseline Costs: What Web Infrastructure Actually Costs
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Ek website banane ke liye kuch zaroori third-party costs hoti hain jo koi bhi developer apni jeb se nahi de sakta:
          </p>

          {/* Infographic Image */}
          <div className="mb-8 rounded-2xl overflow-hidden border border-white/10 shadow-xl relative group">
            <img
              src="/blog/real-website-cost-breakdown-india.jpg"
              alt="Infographic showing realistic website development investment layers including domain hosting, technical SEO, and WhatsApp conversion funnels"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="p-3 bg-[#06060c]/90 border-t border-white/10 text-xs text-slate-400 font-mono text-center">
              Figure 2: The 3 core pillars of real digital business infrastructure: Cloud hosting, sub-second code, and automated lead funnels.
            </div>
          </div>

          {/* Infrastructure Breakdown Table */}
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#06060e] mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white font-semibold border-b border-white/10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Infrastructure Element</th>
                  <th className="p-4 text-emerald-400">Actual Direct Cost (Yearly)</th>
                  <th className="p-4 text-red-400">How ₹500 Offers Cheat You</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 font-semibold text-white">Domain Name (.com / .in)</td>
                  <td className="p-4 text-emerald-400">₹800 – ₹1,200 / year</td>
                  <td className="p-4 text-slate-400">Unbranded free subdomain or registered on developer's name</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">High-Speed Cloud Hosting & SSL</td>
                  <td className="p-4 text-emerald-400">₹2,400 – ₹4,800 / year</td>
                  <td className="p-4 text-slate-400">Shared hosting packed with 5,000 spam sites that crashes daily</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Mobile Speed Engineering</td>
                  <td className="p-4 text-emerald-400">Sub-second code & caching</td>
                  <td className="p-4 text-red-400">Bloated 8-second load times that lose 60% of buyers</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">WhatsApp Lead Automation</td>
                  <td className="p-4 text-emerald-400">1-click WhatsApp trigger</td>
                  <td className="p-4 text-slate-400">Broken static contact form where messages disappear</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="p-4 font-bold text-white">Total Real Raw Minimum</td>
                  <td className="p-4 font-bold text-cyan-400">₹3,200+ (Sirf raw infrastructure)</td>
                  <td className="p-4 font-bold text-red-400">₹500 me dena mathematically impossible hai</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Detailed Comparison */}
        <section id="cheap-vs-custom-comparison" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            3. ₹500 Cheap Template vs. Professional Inovix Engineering
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Jab aap Inovix jaise specialized engineering studio ke saath kaam karte hain, to aap sirf ek webpage nahi, balki ek 24/7 lead machine bana rahe hote hain:
          </p>

          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#06060e] mb-8">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/5 text-white font-semibold border-b border-white/10 text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 text-red-400">The ₹500 "Budget" Scam</th>
                  <th className="p-4 text-cyan-400">Inovix Custom Engineering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 font-semibold text-white">Mobile PageSpeed</td>
                  <td className="p-4 text-red-400">15 – 35 / 100 (Fails Core Web Vitals)</td>
                  <td className="p-4 text-emerald-400 font-semibold">95 – 100 / 100 (Sub-Second Click)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Mobile Load Latency</td>
                  <td className="p-4 text-slate-400">6.5 – 9.0 Seconds</td>
                  <td className="p-4 text-cyan-400 font-semibold">0.4 – 0.8 Seconds</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Google SEO Indexing</td>
                  <td className="p-4 text-slate-400">Never ranks beyond Page 10</td>
                  <td className="p-4 text-emerald-400 font-semibold">Page 1 Schema.org Architecture</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Lead Inquiries</td>
                  <td className="p-4 text-slate-400">0 leads (Dead forms)</td>
                  <td className="p-4 text-cyan-400 font-semibold">Automated WhatsApp + Direct Phone Calls</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Asset Ownership</td>
                  <td className="p-4 text-red-400">Developer controls your domain</td>
                  <td className="p-4 text-emerald-400 font-semibold">Client owns 100% of code, domain & hosting</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Post-Launch Support</td>
                  <td className="p-4 text-slate-400">Ghosted / Number blocked</td>
                  <td className="p-4 text-emerald-400 font-semibold">Direct Founder Access (Sagar Punia)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* WhatsApp Callout Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/60 to-blue-900/40 border border-cyan-400/40 flex flex-col sm:flex-row items-center justify-between gap-6 my-8">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
                Free Honest Website Audit
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Fas gaye kisi cheap web designer ke trap me?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
                Apni current website ka link WhatsApp par bhejiye. Hum check karke batayenge ki aapka domain secure hai ya nahi aur speed kaise theek ho sakti hai.
              </p>
            </div>
            <a
              href="https://wa.me/918307967782?text=Hi%20Sagar,%20I%20read%20your%20500%20rupees%20website%20article%20and%20want%20you%20to%20audit%20my%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-sm shadow-[0_0_20px_rgba(16,185,129,0.4)] flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Talk to Sagar on WhatsApp</span>
            </a>
          </div>
        </section>

        {/* Section 4: Realistic Pricing */}
        <section id="real-website-pricing" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            4. Realistic Website Investment in India (2026 Price Guide)
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Ek real business ke liye jo genuine leads aur brand trust chahta hai, market me authentic pricing kya hoti hai?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {/* Tier 1 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col">
              <div className="text-xs text-slate-400 font-mono uppercase mb-2">Starter Tier</div>
              <div className="text-2xl font-black text-white mb-1">₹8,000 – ₹15,000</div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">Retail Shops, Clinics & Services</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>100% Genuine Domain & SSL</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Sub-1 Second Mobile Speed</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>1-Click Direct WhatsApp Quote</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Google My Business Map Link</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center text-xs font-semibold transition-colors"
              >
                Inquire Starter Package
              </Link>
            </div>

            {/* Tier 2 */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-cyan-950/30 to-[#080812] border-2 border-cyan-500/40 relative flex flex-col shadow-[0_0_30px_rgba(0,212,255,0.15)]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-400 text-black text-[10px] font-black uppercase tracking-wider">
                Most Popular
              </div>
              <div className="text-xs text-slate-400 font-mono uppercase mb-2">Growth & Export</div>
              <div className="text-2xl font-black text-white mb-1">₹18,000 – ₹28,000</div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">Exporters & Manufacturers</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Custom React / Next.js Stack</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Interactive Fabric / Product Catalogs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Complete Schema.org Local SEO</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Automated WhatsApp CRM Funnel</span>
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
                Discuss Growth Project
              </a>
            </div>

            {/* Tier 3 */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col">
              <div className="text-xs text-slate-400 font-mono uppercase mb-2">Custom Enterprise</div>
              <div className="text-2xl font-black text-white mb-1">₹35,000 – ₹70,000+</div>
              <div className="text-xs text-cyan-400 font-semibold mb-4">SaaS, Portals & Automated Apps</div>
              <ul className="space-y-2 text-xs text-slate-300 mb-6 flex-1">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Full-Stack Database Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>n8n Webhook Workflow Pipelines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Multi-Tenant Auth Portals</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Redis Caching with Sub-50ms API</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="w-full py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-center text-xs font-semibold transition-colors"
              >
                Inquire Enterprise Platform
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Buyer Checklist */}
        <section id="how-to-stay-safe" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            5. 4 Golden Rules to Avoid Web Design Scams in Panipat
          </h2>
          <p className="text-base text-slate-300 leading-relaxed mb-6">
            Kisi bhi agency ya freelancer ko advance dene se pehle ye 4 baatein zaroor confirm karein:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                1. Domain hamesha apne account se khareedein
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Cloudflare ya Namecheap par apna free account banaiye aur khud domain buy kijiye. Developer ko sirf DNS records point karne ke liye bolein. Isse koi bhi aapka domain hostage nahi bana sakta.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                2. Live PageSpeed test mangiye
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Agency se unke banaye huye pichle 2 websites ka link maang kar <code>pagespeed.web.dev</code> par check karein. Agar unka mobile score 50 se kam hai, to samajh jaiye aapka project bhi slow hoga.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                3. Nulled themes par saaf "NO" boliye
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Agar agency WordPress par kaam kar rahi hai, to licensed theme purchase ka invoice mangiye ya custom code (React/Next.js) choose karein taaki malware aur hacks se surakshit rahein.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/10">
              <h3 className="text-sm sm:text-base font-bold text-white mb-1">
                4. WhatsApp lead generation mandatory karein
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                India me customers email forms nahi bharte. Website par har product aur service ke paas 1-click WhatsApp quote button hona chahiye jo sidha aapke phone par notification bheje.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ Accordion */}
        <section id="faqs" className="mb-14 scroll-mt-28">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            6. Frequently Asked Questions (FAQs)
          </h2>
          <p className="text-sm text-slate-400 mb-6">
            ₹500 websites aur web development pricing se jude aam sawal aur unke sachhe jawab.
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

        {/* Read Next Section (Internal Linking) */}
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
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0a0f1d] via-[#06060c] to-[#0d1527] border border-cyan-500/30 text-center relative overflow-hidden shadow-[0_10px_50px_-10px_rgba(0,212,255,0.2)]">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>100% Founder Direct Engineering</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tight">
              Don't Risk Your Brand on a ₹500 Broken Template
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
              Let's engineer a sub-second, Page-1 ranking web platform with automated WhatsApp lead routing that turns visitors into high-value clients.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918307967782?text=Hi%20Sagar,%20I%20want%20to%20discuss%20a%20professional%20website%20for%20my%20business"
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
                <span>Zero Hidden Fees</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Code Ownership</span>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
