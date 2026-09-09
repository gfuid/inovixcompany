import React from "react";
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
  AlertTriangle,
} from "lucide-react";
import devAvatar from "../assets/assets/brand/dev_avatar.png";

export default function BlogIndex() {
  const posts = [
    {
      slug: "500-rs-website-design-truth",
      title: "The Truth About '₹500 Website Design' in India (2026): Scam, Hidden Traps & Real Costs",
      excerpt:
        "Can you really get a legitimate business website for ₹500 in India? Uncover the hidden renewal traps, malware risks, zero Google ranking, and what real lead-generating websites actually cost.",
      category: "Pricing & Consumer Alert",
      badge: "Trending Reality Check",
      badgeClass: "bg-amber-400 text-black font-extrabold",
      image: "/blog/500-rupees-website-truth-vs-reality.jpg",
      date: "September 9, 2026",
      readTime: "6 min read",
      stats: "Domain Reality • Zero SEO Trap • Realistic Pricing",
    },
    {
      slug: "best-web-development-company-panipat",
      title: "Best Web Development Company in Panipat (2026 Guide): Cost, Speed & Real Lead Generation",
      excerpt:
        "Why modern businesses in Panipat and Haryana are switching from slow ₹5,000 WordPress sites to high-speed custom web platforms that rank #1 on Google and drive real B2B inquiries.",
      category: "Web Engineering & ROI",
      badge: "Featured Guide",
      badgeClass: "bg-cyan-400 text-black font-extrabold",
      image: null,
      date: "September 9, 2026",
      readTime: "7 min read",
      stats: "95+ PageSpeed • Sub-Second Latency • WhatsApp CRM",
    },
  ];

  return (
    <div className="bg-[#040407] text-slate-200 min-h-screen pt-28 pb-20 selection:bg-cyan-500/30">
      <Helmet>
        <title>Tech Insights & Web Development Blog | Inovix Panipat</title>
        <meta
          name="description"
          content="Actionable web development, SEO, and digital growth guides for business owners in Panipat, Haryana, and across India by Inovix."
        />
        <link rel="canonical" href="https://www.inovix.co.in/blog" />
      </Helmet>

      {/* Hero */}
      <section className="relative px-4 sm:px-6 max-w-5xl mx-auto mb-16 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Inovix Engineering Blog</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
          Insights on Web Engineering, SEO & Business Growth
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Honest, technical breakdowns for business owners on building modern websites, avoiding cheap traps, and ranking #1 on Google.
        </p>
      </section>

      {/* Post Listing */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative rounded-3xl bg-gradient-to-br from-[#090e1c] via-[#05060d] to-[#0a1122] border border-cyan-500/30 p-6 sm:p-10 shadow-[0_10px_40px_-10px_rgba(0,212,255,0.15)] hover:border-cyan-400/60 transition-all overflow-hidden"
          >
            {post.image && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-white/10 max-h-72">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-4 mb-4 text-xs">
              <span className={`px-3 py-1 rounded-full uppercase tracking-wider text-[11px] ${post.badgeClass}`}>
                {post.badge}
              </span>
              <div className="flex items-center gap-4 text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {post.readTime}
                </span>
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors mb-4 leading-snug">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {post.excerpt}
            </p>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono text-cyan-400 mb-8 inline-block">
              {post.stats}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={devAvatar}
                  alt="Sagar Punia"
                  className="w-9 h-9 rounded-full object-cover border border-cyan-400/50"
                />
                <div>
                  <div className="text-xs font-semibold text-white">Sagar Punia</div>
                  <div className="text-[11px] text-slate-400">Founder & Lead Engineer</div>
                </div>
              </div>

              <Link
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 font-bold text-xs border border-cyan-500/30 transition-all group-hover:gap-3"
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
