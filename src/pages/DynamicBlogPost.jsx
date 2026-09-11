import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Calendar,
  Clock,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  MessageCircle,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  HelpCircle,
  Check,
} from "lucide-react";
import devAvatar from "../assets/assets/brand/dev_avatar.png";
import { blogPosts } from "../data/blogPosts";
import BlogLeadForm from "../components/BlogLeadForm";

// Helper to parse inline markdown like **bold text** into proper <strong> tags without raw asterisks
const renderInlineFormatted = (text) => {
  if (!text) return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const inner = part.slice(2, -2);
      return (
        <strong key={i} className="font-bold text-slate-900">
          {inner}
        </strong>
      );
    }
    return part;
  });
};

// Formats section content into clean paragraphs, numbered cards, and bullet lists without unrendered markdown
const renderRichContent = (content) => {
  if (!content) return null;

  const rawBlocks = content.split(/\n\s*\n/);

  return rawBlocks.map((rawBlock, bIdx) => {
    const trimmed = rawBlock.trim();
    if (!trimmed) return null;

    const rawLines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);

    // If all lines are numbered list items (e.g. "1. **Title:** Desc")
    if (rawLines.every((l) => /^\d+\.\s+/.test(l))) {
      return (
        <div key={bIdx} className="space-y-3.5 my-6">
          {rawLines.map((line, lIdx) => {
            const match = line.match(/^(\d+)\.\s+(.*)$/);
            const num = match ? match[1] : lIdx + 1;
            const lineContent = match ? match[2] : line;

            return (
              <div
                key={lIdx}
                className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200 mt-0.5">
                  {String(num).padStart(2, "0")}
                </div>
                <div className="text-sm sm:text-base leading-relaxed text-slate-700 flex-1">
                  {renderInlineFormatted(lineContent)}
                </div>
              </div>
            );
          })}
        </div>
      );
    }

    // If all lines are bullet list items (e.g. "- **Title:** Desc")
    if (rawLines.every((l) => /^[-*]\s+/.test(l))) {
      return (
        <ul key={bIdx} className="space-y-3 my-5 pl-1">
          {rawLines.map((line, lIdx) => {
            const lineContent = line.replace(/^[-*]\s+/, "");
            return (
              <li key={lIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2.5" />
                <div className="flex-1">{renderInlineFormatted(lineContent)}</div>
              </li>
            );
          })}
        </ul>
      );
    }

    // If there is a mix of intro text and list items inside this block:
    const hasListItems = rawLines.some((l) => /^\d+\.\s+/.test(l) || /^[-*]\s+/.test(l));

    if (hasListItems) {
      const elements = [];
      let currentList = [];
      let currentListType = null;

      const flushList = (keyPrefix) => {
        if (currentList.length === 0) return;
        if (currentListType === "numbered") {
          elements.push(
            <div key={`${keyPrefix}-num`} className="space-y-3.5 my-6">
              {currentList.map((item, iIdx) => {
                const match = item.match(/^(\d+)\.\s+(.*)$/);
                const num = match ? match[1] : iIdx + 1;
                const lineContent = match ? match[2] : item;
                return (
                  <div
                    key={iIdx}
                    className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-mono font-bold text-xs flex items-center justify-center shrink-0 border border-blue-200 mt-0.5">
                      {String(num).padStart(2, "0")}
                    </div>
                    <div className="text-sm sm:text-base leading-relaxed text-slate-700 flex-1">
                      {renderInlineFormatted(lineContent)}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        } else if (currentListType === "bullet") {
          elements.push(
            <ul key={`${keyPrefix}-bullet`} className="space-y-3 my-5 pl-1">
              {currentList.map((item, iIdx) => {
                const lineContent = item.replace(/^[-*]\s+/, "");
                return (
                  <li key={iIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700 leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-2.5" />
                    <div className="flex-1">{renderInlineFormatted(lineContent)}</div>
                  </li>
                );
              })}
            </ul>
          );
        }
        currentList = [];
        currentListType = null;
      };

      rawLines.forEach((line, lIdx) => {
        if (/^\d+\.\s+/.test(line)) {
          if (currentListType !== "numbered") flushList(`line-${lIdx}`);
          currentListType = "numbered";
          currentList.push(line);
        } else if (/^[-*]\s+/.test(line)) {
          if (currentListType !== "bullet") flushList(`line-${lIdx}`);
          currentListType = "bullet";
          currentList.push(line);
        } else {
          flushList(`line-${lIdx}`);
          elements.push(
            <p key={`p-${lIdx}`} className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
              {renderInlineFormatted(line)}
            </p>
          );
        }
      });

      flushList(`end`);
      return <div key={bIdx}>{elements}</div>;
    }

    // Default regular paragraph
    return (
      <p key={bIdx} className="text-base sm:text-lg text-slate-700 leading-relaxed mb-4">
        {renderInlineFormatted(trimmed)}
      </p>
    );
  });
};

export default function DynamicBlogPost() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pageUrl = `https://www.inovix.co.in/blog/${post.slug}`;
  const fullHeroImage = post.heroImage.startsWith("http")
    ? post.heroImage
    : `https://www.inovix.co.in${post.heroImage}`;

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": fullHeroImage,
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
    "mainEntity": (post.faqs || []).map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen pt-28 pb-20 selection:bg-blue-600/20">
      <Helmet>
        <title>{post.title} | Inovix Panipat</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.seoKeywords} />
        <link rel="canonical" href={pageUrl} />

        {/* OpenGraph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={fullHeroImage} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Inovix" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={fullHeroImage} />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {post.faqs && post.faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      {/* Header Section */}
      <section className="px-4 sm:px-6 max-w-4xl mx-auto mb-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-6 font-mono">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-md">{post.category}</span>
        </div>

        {/* Category Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{post.category}</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-5">
          {post.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-medium">
          {post.subtitle}
        </p>

        {/* Meta details */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-3">
            <img
              src={devAvatar}
              alt="Sagar Punia"
              className="w-11 h-11 rounded-full object-cover border-2 border-blue-600/30"
            />
            <div>
              <div className="font-bold text-slate-900">Sagar Punia</div>
              <div className="text-xs text-blue-600 font-medium">Founder & Lead Full-Stack Engineer</div>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              <span>{post.publishDate}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="px-4 sm:px-6 max-w-4xl mx-auto">
        
        {/* Executive Summary Callout */}
        <div className="mb-10 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm relative">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                Executive Overview (For Panipat Business Owners)
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed">
                {renderInlineFormatted(post.summary)}
              </p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        {post.tableOfContents && post.tableOfContents.length > 0 && (
          <div className="mb-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Is Article Ke Mukhya Bindu:</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700 font-medium">
              {post.tableOfContents.map((toc, idx) => (
                <li key={idx}>
                  <a href={`#${toc.id}`} className="hover:text-blue-600 transition-colors flex items-center gap-2">
                    <span className="text-blue-600 font-mono text-xs">0{idx + 1}.</span> {toc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Rich Article Sections */}
        <div className="space-y-12 mb-12">
          {post.sections.map((sec, idx) => (
            <section key={sec.id || idx} id={sec.id} className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-6 tracking-tight">
                {sec.heading}
              </h2>
              <div className="text-base text-slate-700 leading-relaxed">
                {renderRichContent(sec.content)}
              </div>
            </section>
          ))}
        </div>

        {/* High Converting WhatsApp Callout Card */}
        <div className="my-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block mb-1">
              Direct Local Founder Support
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              Apne Project Ka Free Quote Ya Audit Chahte Hain?
            </h3>
            <p className="text-sm text-emerald-100 mt-1 max-w-lg">
              Sagar Punia (+91 83079 67782) se seedha WhatsApp par connect karein. Hum aapke business ke hisab se custom solution aur price batayenge.
            </p>
          </div>
          <a
            href={`https://wa.me/918307967782?text=${encodeURIComponent(`Hi Sagar, maine aapka blog "${post.title}" padha. Mujhe consultation chahiye.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-full bg-white text-emerald-800 hover:bg-emerald-50 font-black text-sm shadow-md flex items-center gap-2 whitespace-nowrap transition-transform hover:scale-105 shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Embedded EmailJS Contact Form */}
        <BlogLeadForm blogTitle={post.title} defaultService={post.defaultService} />

        {/* FAQ Accordion */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="mb-14">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
              Aksar Puche Jaane Wale Sawal (FAQs)
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              {post.category} se jude aam sawal aur unke realistic technical jawab:
            </p>

            <div className="space-y-3">
              {post.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 text-slate-400 ${
                        openFaq === idx ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Read More Navigation */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <div className="text-xs text-blue-600 font-bold uppercase mb-1">More Insights</div>
            <h4 className="text-base font-bold text-slate-900">
              Explore All Inovix Guides & Industry Case Studies
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Panipat businesses ke liye technical guides, pricing audits aur growth formulas.
            </p>
          </div>
          <Link
            to="/blog"
            className="px-5 py-2.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold border border-blue-200 whitespace-nowrap transition-colors"
          >
            All Blogs & Guides →
          </Link>
        </div>

      </main>
    </div>
  );
}
