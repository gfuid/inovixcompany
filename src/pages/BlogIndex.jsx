import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Zap,
  CheckCircle2,
  BookOpen,
  Layers,
  Search,
} from "lucide-react";
import devAvatar from "../assets/assets/brand/dev_avatar.png";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const posts = [
    {
      slug: "500-rs-website-design-truth",
      title: "Kya ₹500 Me Professional Website Ban Sakti Hai? The Truth, Market Scams & Inovix ₹500 Plan",
      excerpt:
        "Market ke ₹10,000 hidden renewal traps se bachiye aur dekhiye kaise Inovix ne chhote dukaandaaron, clinics aur freelancers ke liye 1-Click WhatsApp lead micro-site launch ki hai.",
      category: "Micro-Business & Pricing",
      badge: "Trending Starter Plan",
      badgeClass: "bg-blue-600 text-white font-bold",
      image: "/blog/inovix-500-rs-website-plan.jpg",
      date: "September 11, 2026",
      readTime: "5 min read",
      stats: "Sub-Second Load • 1-Click WhatsApp Lead • ₹0 Hidden Fees",
    },
    {
      slug: "textile-exporter-website-design-panipat",
      title: "Textile & Handloom Exporter Website Design in Panipat: B2B Digital Catalogs & Global Buyers",
      excerpt:
        "Why Panipat mink blanket, rug, and yarn manufacturers lose foreign buyers with clumsy PDF catalogs — and how a custom sub-second B2B platform generates overseas export inquiries.",
      category: "Export & B2B Manufacturing",
      badge: "Textile Hub Spotlight",
      badgeClass: "bg-emerald-600 text-white font-bold",
      image: "/blog/inovix-500-rs-website-plan.jpg",
      date: "September 11, 2026",
      readTime: "7 min read",
      stats: "Interactive Swatches • RFQ Quotes • Global Edge CDN",
    },
    {
      slug: "best-web-development-company-panipat",
      title: "Best Web Development Company in Panipat (2026 Guide): Cost, Speed & Real Lead Generation",
      excerpt:
        "Why modern businesses in Panipat and Haryana are switching from slow ₹5,000 WordPress sites to high-speed custom web platforms that rank #1 on Google and drive real B2B inquiries.",
      category: "Web Engineering & ROI",
      badge: "Founder Guide",
      badgeClass: "bg-indigo-600 text-white font-bold",
      image: null,
      date: "September 9, 2026",
      readTime: "7 min read",
      stats: "99 PageSpeed • React/Next.js • Zero Bloatware",
    },
    {
      slug: "mobile-app-development-company-panipat",
      title: "Mobile App Development Company in Panipat (2026): Custom Android & iOS Apps for Local Businesses",
      excerpt:
        "Stop spending ₹3 to 5 Lakhs on Delhi agencies. How local Panipat businesses, delivery startups, and retail chains are building ultra-fast mobile apps with Inovix.",
      category: "Mobile Apps",
      badge: "App Development",
      badgeClass: "bg-purple-600 text-white font-bold",
      image: null,
      date: "September 11, 2026",
      readTime: "6 min read",
      stats: "Cross-Platform • 60 FPS Native • Play Store Launch",
    },
    {
      slug: "google-my-business-seo-services-panipat",
      title: "Google My Business (GMB) SEO in Panipat: Local Map Ranking Se Rozana 50+ Inquiries Kaise Payen",
      excerpt:
        "Panipat ke local dukaandar aur clinics Google Maps ke top-3 rankings me kaise aate hain. The proven local citation and review optimization blueprint for 2026.",
      category: "Local SEO & Leads",
      badge: "Local SEO",
      badgeClass: "bg-amber-600 text-white font-bold",
      image: null,
      date: "September 11, 2026",
      readTime: "5 min read",
      stats: "Google 3-Pack • Local Schema • 50+ Phone Calls/Wk",
    },
    {
      slug: "ecommerce-website-development-panipat",
      title: "E-Commerce Website Development in Panipat: Apni Dukan Ko D2C Online Store Me Kaise Badlen",
      excerpt:
        "Why Panipat clothing brands, home decor creators, and blanket manufacturers are shifting from wholesale middlemen to direct-to-consumer (D2C) online stores with 40-60% margins.",
      category: "E-Commerce",
      badge: "D2C Growth",
      badgeClass: "bg-teal-600 text-white font-bold",
      image: null,
      date: "September 11, 2026",
      readTime: "7 min read",
      stats: "UPI/Razorpay • Shiprocket Tracking • WhatsApp CRM",
    },
    {
      slug: "digital-marketing-agency-panipat-roi",
      title: "Digital Marketing Agency in Panipat: Stop Wasting Money on Fake Likes & Get Real B2B Leads",
      excerpt:
        "Why spending ₹10,000/month on generic Instagram posters fails — and how performance Meta & Google lead funnels generate high-ticket clients in Haryana.",
      category: "Performance Marketing",
      badge: "High ROI Leads",
      badgeClass: "bg-rose-600 text-white font-bold",
      image: null,
      date: "September 11, 2026",
      readTime: "6 min read",
      stats: "Google Search Ads • Meta WhatsApp Funnels • Qualified B2B",
    },
    {
      slug: "doctor-clinic-hospital-website-panipat",
      title: "Doctor & Hospital Website Design in Panipat: Patient Appointment Booking & Google Authority",
      excerpt:
        "How clinics on GT Road and Model Town are modernizing patient scheduling, building medical trust, and winning high-intent local patient appointments with 1-click booking.",
      category: "Healthcare & Clinics",
      badge: "Healthcare Tech",
      badgeClass: "bg-cyan-700 text-white font-bold",
      image: null,
      date: "September 11, 2026",
      readTime: "5 min read",
      stats: "WhatsApp OPD Booking • Google Maps Sync • Doctor Profiles",
    },
  ];

  const categories = ["All", "Micro-Business & Pricing", "Export & B2B Manufacturing", "Mobile Apps", "Local SEO & Leads", "E-Commerce", "Performance Marketing", "Healthcare & Clinics"];

  const filteredPosts = selectedCategory === "All"
    ? posts
    : posts.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen pt-28 pb-20 selection:bg-blue-600/20">
      <Helmet>
        <title>Business Growth, Web Engineering & SEO Guides | Inovix Panipat</title>
        <meta
          name="description"
          content="In-depth actionable guides for business owners in Panipat & Haryana on web design, export catalogs, mobile apps, local SEO, and digital lead generation."
        />
        <link rel="canonical" href="https://www.inovix.co.in/blog" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Inovix Business Growth & Engineering Blog</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Actionable Guides For Panipat & Haryana Businesses
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Pura sach, realistic pricing, aur live formulas jo aapke business ko Google par #1 rank karwayen aur daily WhatsApp leads lekar aayein.
        </p>

        {/* Category Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
        {filteredPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-blue-300 transition-all overflow-hidden"
          >
            {post.image && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-slate-100 max-h-72">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 mb-3 text-xs">
              <span className={`px-3 py-1 rounded-full uppercase tracking-wider text-[11px] ${post.badgeClass}`}>
                {post.badge}
              </span>
              <div className="flex items-center gap-4 text-slate-500 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-snug">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="p-2.5 px-3 rounded-lg bg-slate-50 border border-slate-200/80 text-xs font-mono text-blue-700 mb-6 inline-block font-medium">
              {post.stats}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={devAvatar}
                  alt="Sagar Punia"
                  className="w-9 h-9 rounded-full object-cover border border-blue-600/30"
                />
                <div>
                  <div className="text-xs font-bold text-slate-900">Sagar Punia</div>
                  <div className="text-[11px] text-slate-500">Founder & Lead Full-Stack Engineer</div>
                </div>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 hover:bg-blue-600 hover:text-white text-blue-700 font-bold text-xs border border-blue-200 transition-all group-hover:gap-3"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
