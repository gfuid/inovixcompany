import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  Search,
  MapPin,
  Sparkles,
} from "lucide-react";
import devAvatar from "../assets/assets/brand/dev_avatar.png";
import { blogPosts } from "../data/blogPosts";

export default function BlogIndex() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Base special posts if not already present in blogPosts
  const staticSpecialPosts = [
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
  ];

  // Convert blogPosts into display structure
  const formattedPosts = useMemo(() => {
    const list = [...staticSpecialPosts];

    blogPosts.forEach((post) => {
      // Avoid duplicates
      if (!list.some((item) => item.slug === post.slug)) {
        list.push({
          slug: post.slug,
          title: post.title,
          excerpt: post.summary || post.subtitle || post.metaDescription,
          category: post.category || "Haryana Web Design",
          badge: post.badge || "Industry Guide",
          badgeClass: post.badgeClass || "bg-blue-600 text-white font-bold",
          image: post.heroImage || null,
          date: post.publishDate || "September 2026",
          readTime: post.readTime || "6 min read",
          stats: post.defaultService
            ? `${post.defaultService} • Sub-Second Speed • 1-Click WhatsApp`
            : "Sub-Second Speed • Top Google Rank • Verified Leads",
          seoKeywords: post.seoKeywords || "",
        });
      }
    });

    return list;
  }, []);

  const categories = [
    "All",
    "Haryana Web Design",
    "Export & B2B Manufacturing",
    "Micro-Business & Pricing",
    "Mobile & Software Engineering",
    "Local SEO & Lead Generation",
    "E-Commerce & Online Stores",
    "Healthcare & Clinics",
  ];

  const filteredPosts = useMemo(() => {
    return formattedPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        (post.seoKeywords && post.seoKeywords.toLowerCase().includes(q)) ||
        post.slug.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [formattedPosts, selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen pt-28 pb-20 selection:bg-blue-600/20">
      <Helmet>
        <title>Business Growth, Web Engineering & SEO Guides | Inovix Haryana</title>
        <meta
          name="description"
          content="Comprehensive web design, SEO, and lead generation guides for all 22 districts of Haryana: Gurugram, Faridabad, Panipat, Karnal, Sonipat, Ambala, Rohtak, Hisar, and more."
        />
        <link rel="canonical" href="https://www.inovix.co.in/blog" />
      </Helmet>

      {/* Hero Header */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Inovix Business Growth & Engineering Blog</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Actionable Guides For Haryana's 22 Districts
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Pura sach, realistic pricing, aur live formulas jo aapke business ko Google par #1 rank karwayen aur daily high-ticket WhatsApp leads lekar aayein.
        </p>

        {/* Live Search Bar */}
        <div className="mt-8 max-w-xl mx-auto relative">
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by city e.g. Gurugram, Faridabad, Karnal, Hisar, Ambala..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 text-slate-900 text-sm shadow-sm focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
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

        {/* District Quick Tags */}
        <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-center gap-1.5 text-xs text-slate-500">
          <span className="font-semibold text-slate-700 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-blue-600" /> All 22 Districts:
          </span>
          {[
            "Gurugram", "Faridabad", "Panipat", "Karnal", "Sonipat", "Ambala",
            "Rohtak", "Hisar", "Panchkula", "Yamunanagar", "Rewari", "Bhiwani",
            "Kurukshetra", "Sirsa", "Jhajjar", "Jind", "Kaithal", "Palwal",
            "Fatehabad", "Nuh", "Charkhi Dadri", "Mahendragarh"
          ].map((city) => (
            <button
              key={city}
              onClick={() => {
                setSearchQuery(city);
                setSelectedCategory("All");
              }}
              className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 transition-colors cursor-pointer text-[11px]"
            >
              {city}
            </button>
          ))}
        </div>
      </section>

      {/* Results Count */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-4 flex items-center justify-between text-xs text-slate-500 font-medium">
        <span>Showing {filteredPosts.length} Guides</span>
        {searchQuery && (
          <span>Filtering by: &ldquo;{searchQuery}&rdquo;</span>
        )}
      </div>

      {/* Post Grid */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8">
            <Sparkles className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No matching articles found</h3>
            <p className="text-sm text-slate-500 mb-4">Try searching for another Haryana district or reset filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-full bg-blue-600 text-white font-bold text-xs"
            >
              Show All Guides
            </button>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="group relative rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs hover:shadow-md hover:border-blue-300 transition-all overflow-hidden"
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
                  <span>Read Full Guide & Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))
        )}
      </section>
    </div>
  );
}
