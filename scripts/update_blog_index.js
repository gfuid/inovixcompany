import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { haryanaDistrictPosts } from '../src/data/haryanaDistrictPosts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// District to supportive image mapping
const DISTRICT_IMAGES = {
  "website-design-development-company-gurugram": "/bannerimg/multiagent.png",
  "website-design-development-company-faridabad": "/bannerimg/vedagroup.png",
  "website-design-development-company-panipat": "/bannerimg/agilexports.png",
  "website-design-development-company-karnal": "/bannerimg/digitalpharma.png",
  "website-design-development-company-sonipat": "/bannerimg/zkbrothers.png",
  "website-design-development-company-ambala": "/bannerimg/ambavi.png",
  "website-design-development-company-rohtak": "/bannerimg/saksham.png",
  "website-design-development-company-hisar": "/bannerimg/vedagroup.png",
  "website-design-development-company-panchkula": "/bannerimg/trireme.png",
  "website-design-development-company-yamunanagar": "/bannerimg/vedagroup.png",
  "website-design-development-company-rewari": "/bannerimg/trireme.png",
  "website-design-development-company-bhiwani": "/bannerimg/ambavi.png",
  "website-design-development-company-kurukshetra": "/bannerimg/desinbuzz.png",
  "website-design-development-company-sirsa": "/bannerimg/agilexports.png",
  "website-design-development-company-jhajjar": "/bannerimg/zkbrothers.png",
  "website-design-development-company-jind": "/bannerimg/saksham.png",
  "website-design-development-company-kaithal": "/bannerimg/agilexports.png",
  "website-design-development-company-palwal": "/bannerimg/zkbrothers.png",
  "website-design-development-company-fatehabad": "/bannerimg/ambavi.png",
  "website-design-development-company-nuh": "/bannerimg/trireme.png",
  "website-design-development-company-charkhi-dadri": "/bannerimg/vedagroup.png",
  "website-design-development-company-mahendragarh": "/bannerimg/desinbuzz.png"
};

// Base 8 Articles
const ORIGINAL_BLOGS = [
  {
    slug: "500-rs-website-design-truth",
    bcat: "pricing",
    badge: "Trending Starter Plan",
    badgeClass: "badge-blue",
    readTime: "5 min read",
    date: "Sep 11, 2026",
    image: "/blog/inovix-500-rs-website-plan.jpg",
    title: "Kya ₹500 Me Professional Website Ban Sakti Hai? The Truth, Market Scams & Inovix ₹500 Plan",
    excerpt: "Market ke ₹10,000 hidden renewal traps se bachiye aur dekhiye kaise Inovix ne chhote dukaandaaron, clinics aur freelancers ke liye 1-Click WhatsApp lead micro-site launch ki hai.",
    statsPill: "Sub-Second Load • 1-Click WhatsApp Lead • ₹0 Hidden Fees",
    subtitle: "The complete 2026 reality check on low-cost websites in India. Why 99% of ₹500 ads are traps, and how modern cloud engineering makes an honest starter site possible."
  },
  {
    slug: "textile-exporter-website-design-panipat",
    bcat: "export",
    badge: "Textile Hub Spotlight",
    badgeClass: "badge-green",
    readTime: "7 min read",
    date: "Sep 11, 2026",
    image: "/bannerimg/agilexports.png",
    title: "Textile & Handloom Exporter Website Design in Panipat: B2B Digital Catalogs & Global Buyers",
    excerpt: "Why Panipat mink blanket, rug, and yarn manufacturers lose foreign buyers with clumsy PDF catalogs — and how a custom sub-second B2B platform generates overseas export inquiries.",
    statsPill: "Interactive Swatches • RFQ Quotes • Global Edge CDN",
    subtitle: "The 2026 playbook for Panipat home textile, carpet, and recycled yarn manufacturers in Sector 25 and Barsat Road."
  },
  {
    slug: "best-web-development-company-panipat",
    bcat: "tech",
    badge: "Founder Guide",
    badgeClass: "badge-purple",
    readTime: "7 min read",
    date: "Sep 9, 2026",
    image: "/bannerimg/trireme.png",
    title: "Best Web Development Company in Panipat (2026 Guide): Cost, Speed & Real Lead Generation",
    excerpt: "Why modern businesses in Panipat and Haryana are switching from slow ₹5,000 WordPress sites to high-speed custom web platforms that rank #1 on Google and drive real B2B inquiries.",
    statsPill: "99 PageSpeed • React/Next.js • Zero Bloatware",
    subtitle: "How Inovix engineers web platforms that load in under 500ms, rank on page 1 of Google, and turn passive visitors into paying customers."
  },
  {
    slug: "mobile-app-development-company-panipat",
    bcat: "tech",
    badge: "App Development",
    badgeClass: "badge-blue",
    readTime: "6 min read",
    date: "Sep 11, 2026",
    image: "/bannerimg/multiagent.png",
    title: "Mobile App Development Company in Panipat: Custom Android & iOS Apps for Local Businesses",
    excerpt: "Stop spending ₹3 to 5 Lakhs on Delhi agencies. How local Panipat businesses, delivery startups, and retail chains are building ultra-fast mobile apps with Inovix.",
    statsPill: "Cross-Platform • 60 FPS Native • Play Store Launch",
    subtitle: "From B2B wholesale order booking to hyperlocal delivery apps, build production-grade mobile applications in Panipat without Delhi-NCR agency bloat."
  },
  {
    slug: "google-my-business-seo-services-panipat",
    bcat: "seo",
    badge: "Local SEO Guide",
    badgeClass: "badge-green",
    readTime: "5 min read",
    date: "Sep 11, 2026",
    image: "/bannerimg/zkbrothers.png",
    title: "Google My Business (GMB) SEO in Panipat: Local Map Ranking Se Rozana 50+ Inquiries Kaise Payen",
    excerpt: "Panipat ke local dukaandar aur clinics Google Maps ke top-3 rankings me kaise aate hain. The proven local citation and review optimization blueprint for 2026.",
    statsPill: "Google 3-Pack • Local Schema • 50+ Inquiries/Wk",
    subtitle: "How to rank your shop, factory, or clinic #1 on Google Maps in Panipat without spending thousands on paid ads every single month."
  },
  {
    slug: "ecommerce-website-development-panipat",
    bcat: "export",
    badge: "D2C Growth",
    badgeClass: "badge-amber",
    readTime: "7 min read",
    date: "Sep 11, 2026",
    image: "/bannerimg/saksham.png",
    title: "E-Commerce Website Development in Panipat: Apni Dukan Ko D2C Online Store Me Kaise Badlen",
    excerpt: "Why Panipat clothing brands, home decor creators, and blanket manufacturers are shifting from wholesale middlemen to direct-to-consumer (D2C) online stores with 40-60% margins.",
    statsPill: "UPI/Razorpay • Shiprocket Tracking • WhatsApp CRM",
    subtitle: "Launch your own branded e-commerce store with automated payments, courier dispatch, and WhatsApp order notifications."
  },
  {
    slug: "digital-marketing-agency-panipat-roi",
    bcat: "seo",
    badge: "Performance Marketing",
    badgeClass: "badge-rose",
    readTime: "6 min read",
    date: "Sep 11, 2026",
    image: "/bannerimg/digitalpharma.png",
    title: "Digital Marketing Agency in Panipat: Stop Wasting Money on Fake Likes & Get Real B2B Leads",
    excerpt: "Why spending ₹10,000/month on generic Instagram posters fails — and how performance Meta & Google lead funnels generate high-ticket clients in Haryana.",
    statsPill: "Google Search Ads • Meta WhatsApp Funnels • Qualified Leads",
    subtitle: "Stop paying for vanity metrics. Discover how direct-response digital advertising puts verified B2B customer inquiries straight into your phone."
  },
  {
    slug: "doctor-clinic-hospital-website-panipat",
    bcat: "tech",
    badge: "Healthcare Tech",
    badgeClass: "badge-blue",
    readTime: "5 min read",
    date: "Sep 11, 2026",
    image: "/bannerimg/holistic.png",
    title: "Doctor & Hospital Website Design in Panipat: Patient Appointment Booking & Google Authority",
    excerpt: "How clinics on GT Road and Model Town are modernizing patient scheduling, building medical trust, and winning high-intent local patient appointments with 1-click booking.",
    statsPill: "WhatsApp OPD Booking • Google Maps Sync • Doctor Profiles",
    subtitle: "Turn Google searchers into verified clinic patients with online appointments, doctor credentials, and automated WhatsApp confirmations."
  }
];

// Transform 22 Haryana District posts
const DISTRICT_BLOGS = haryanaDistrictPosts.map(post => {
  return {
    slug: post.slug,
    bcat: "haryana",
    badge: post.badge,
    badgeClass: "badge-blue",
    readTime: post.readTime,
    date: "Sep 24, 2026",
    image: DISTRICT_IMAGES[post.slug] || "/bannerimg/vedagroup.png",
    title: post.title,
    excerpt: post.summary || post.subtitle || post.metaDescription,
    statsPill: `${post.defaultService} • Sub-Second Speed • 1-Click WhatsApp`,
    subtitle: post.subtitle
  };
});

const ALL_BLOGS = [...ORIGINAL_BLOGS, ...DISTRICT_BLOGS];

console.log(`Total blogs compiled for blog/index.html: ${ALL_BLOGS.length}`);

// Generate updated blog/index.html
const blogIndexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>Engineering, Web Design &amp; Growth Blog | Inovix Technologies</title>
  <meta name="description" content="Explore 30 actionable web design, SEO blueprints, and local business growth guides covering all 22 districts of Haryana by Inovix Technologies." />
  <link rel="icon" type="image/png" href="/ino.png" />
  <link rel="canonical" href="https://www.inovix.co.in/blog" />

  <!-- Google Fonts: Manrope & JetBrains Mono -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet" />

  <style>
    :root {
      --ink: #fafafa;
      --muted: #a7a6a6;
      --nav: #b6b5b5;
      --pill: #ffffff;
      --pill-ink: #050505;
      --bg: #050505;
      --surface: #0c0c0c;
      --surface-border: rgba(255, 255, 255, 0.08);
      --surface-hover: rgba(255, 255, 255, 0.04);
      --accent-blue: #38bdf8;
    }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background-color: var(--bg);
      color: var(--ink);
      font-family: 'Manrope', system-ui, sans-serif;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
      line-height: 1.6;
    }

    /* Topbar */
    .topbar-wrap {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 40px;
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      background: rgba(5, 5, 5, 0.85);
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
      transition: padding 0.2s ease, background 0.2s ease;
    }
    .topbar-wrap.scrolled {
      padding: 12px 40px;
      background: rgba(5, 5, 5, 0.94);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
      color: #fff;
    }
    .brand-mark {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.18);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 13px;
    }
    .brand-text { font-size: 17px; font-weight: 700; }
    .brand-text .dot { color: #38bdf8; }

    .nav-links { display: flex; align-items: center; gap: 26px; }
    .nav-links a {
      color: var(--nav);
      text-decoration: none;
      font-size: 13.5px;
      font-weight: 500;
      transition: color 0.15s ease;
    }
    .nav-links a:hover, .nav-links a.active { color: #fff; font-weight: 600; }
    .badge-nav {
      font-size: 9.5px;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
      margin-left: 4px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--pill);
      color: var(--pill-ink);
      border-radius: 999px;
      padding: 10px 22px;
      font-size: 13.5px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .pill:hover { opacity: 0.92; transform: translateY(-2px); box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2); }

    .burger {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 8px;
    }
    .burger i {
      width: 22px;
      height: 2px;
      background: #fff;
      transition: all 0.2s ease;
    }

    /* Page Hero */
    .page-hero {
      padding: 130px 24px 44px;
      text-align: center;
      max-width: 960px;
      margin: 0 auto;
    }
    .page-tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 14px;
      border-radius: 999px;
      background: rgba(56, 189, 248, 0.1);
      border: 1px solid rgba(56, 189, 248, 0.25);
      color: #38bdf8;
      font-size: 11.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 20px;
    }
    .page-title {
      font-size: clamp(32px, 5vw, 54px);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.15;
      color: #fff;
      margin-bottom: 16px;
    }
    .page-desc {
      font-size: clamp(15px, 2vw, 17px);
      color: var(--muted);
      line-height: 1.65;
      max-width: 720px;
      margin: 0 auto 30px;
    }

    /* Live Search Bar */
    .blog-search-box {
      max-width: 600px;
      margin: 0 auto 28px;
      position: relative;
    }
    .blog-search-input {
      width: 100%;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 999px;
      padding: 14px 22px 14px 46px;
      color: #fff;
      font-size: 14.5px;
      outline: none;
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .blog-search-input:focus {
      background: rgba(255, 255, 255, 0.08);
      border-color: #38bdf8;
      box-shadow: 0 0 20px rgba(56, 189, 248, 0.2);
    }
    .blog-search-icon {
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      color: var(--muted);
      pointer-events: none;
    }

    /* Container */
    .container {
      max-width: 1240px;
      margin: 0 auto;
      padding: 0 24px;
    }

    /* Filter Bar */
    .blog-filter-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: 40px;
    }
    .blog-filter-btn {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: var(--muted);
      padding: 8px 18px;
      border-radius: 999px;
      font-size: 12.5px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: inherit;
    }
    .blog-filter-btn:hover,
    .blog-filter-btn.active {
      background: #ffffff;
      color: #050505;
      border-color: #ffffff;
      box-shadow: 0 4px 16px rgba(255, 255, 255, 0.15);
    }

    /* District Tag Quick Bar */
    .district-tags-bar {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 6px;
      margin-bottom: 44px;
      padding: 16px 20px;
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 16px;
    }
    .district-tag-label {
      font-size: 11.5px;
      font-weight: 700;
      color: #38bdf8;
      display: inline-flex;
      align-items: center;
      margin-right: 6px;
    }
    .district-pill-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: var(--nav);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
    }
    .district-pill-btn:hover {
      background: rgba(56, 189, 248, 0.2);
      color: #fff;
      border-color: rgba(56, 189, 248, 0.4);
    }

    /* Blog Grid */
    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
      gap: 24px;
      margin-bottom: 80px;
    }
    .blog-card {
      background: var(--surface);
      border: 1px solid var(--surface-border);
      border-radius: 20px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.25s ease;
      cursor: pointer;
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      position: relative;
    }
    .blog-card:hover {
      border-color: rgba(56, 189, 248, 0.4);
      transform: translateY(-4px);
      box-shadow: 0 16px 36px rgba(0, 0, 0, 0.6);
    }

    /* Card Media Thumbnail */
    .blog-card-media {
      width: 100%;
      height: 180px;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 16px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(255, 255, 255, 0.02);
    }
    .blog-card-media img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
      display: block;
    }
    .blog-card:hover .blog-card-media img {
      transform: scale(1.04);
    }

    .blog-badge-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .blog-badge {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-radius: 6px;
      padding: 3px 8px;
    }
    .badge-blue { background: rgba(56, 189, 248, 0.1); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.25); }
    .badge-green { background: rgba(52, 211, 153, 0.1); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.25); }
    .badge-purple { background: rgba(168, 85, 247, 0.1); color: #a855f7; border: 1px solid rgba(168, 85, 247, 0.25); }
    .badge-amber { background: rgba(251, 191, 36, 0.1); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.25); }
    .badge-rose { background: rgba(244, 63, 94, 0.1); color: #f43f5e; border: 1px solid rgba(244, 63, 94, 0.25); }

    .blog-read-time { font-size: 11.5px; color: var(--muted); }
    .blog-title {
      font-size: 18px;
      font-weight: 700;
      color: #fff;
      line-height: 1.35;
      margin-bottom: 10px;
    }
    .blog-excerpt {
      font-size: 13.5px;
      color: var(--muted);
      line-height: 1.6;
      margin-bottom: 16px;
    }
    .blog-stats-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 10.5px;
      color: #38bdf8;
      background: rgba(56, 189, 248, 0.08);
      border: 1px solid rgba(56, 189, 248, 0.15);
      border-radius: 8px;
      padding: 6px 10px;
      margin-bottom: 14px;
    }
    .blog-footer-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding-top: 14px;
    }
    .blog-date { font-size: 12px; color: var(--muted); }
    .read-article-btn {
      font-size: 12.5px;
      font-weight: 700;
      color: #38bdf8;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      background: rgba(56, 189, 248, 0.1);
      padding: 5px 12px;
      border-radius: 999px;
      border: 1px solid rgba(56, 189, 248, 0.25);
      transition: all 0.15s ease;
    }
    .read-article-btn:hover {
      background: #38bdf8;
      color: #050505;
    }

    /* Footer */
    .footer {
      background: #030303;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      padding: 60px 24px 30px;
      margin-top: 80px;
    }
    .footer-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr;
      gap: 40px;
      margin-bottom: 40px;
    }
    .footer-brand h4 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 12px; }
    .footer-brand p { font-size: 13.5px; color: var(--muted); line-height: 1.6; }
    .footer-col h5 { font-size: 13px; font-weight: 700; text-transform: uppercase; color: #fff; margin-bottom: 16px; letter-spacing: 0.06em; }
    .footer-col ul { list-style: none; }
    .footer-col li { margin-bottom: 10px; }
    .footer-col a { color: var(--muted); text-decoration: none; font-size: 13px; transition: color 0.15s ease; }
    .footer-col a:hover { color: #fff; }
    .footer-bottom {
      max-width: 1100px;
      margin: 0 auto;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, 0.06);
      display: flex;
      justify-content: space-between;
      color: #64748b;
      font-size: 12px;
      flex-wrap: wrap;
      gap: 12px;
    }

    @media (max-width: 960px) {
      .nav-links { display: none; }
      .burger { display: flex; }
      .blog-grid { grid-template-columns: 1fr; }
      .footer-inner { grid-template-columns: 1fr 1fr; }
      .topbar-wrap { padding: 14px 20px; }
      .page-hero { padding: 110px 20px 40px; }
    }
    @media (max-width: 560px) {
      .topbar-wrap .pill { display: none; }
      .topbar-wrap { padding: 12px 16px; }
      .page-hero { padding: 100px 16px 36px; }
      .footer-inner { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- Navigation -->
  <header class="topbar-wrap" id="topbar">
    <a href="/" class="brand-group">
      <div class="brand-mark">IX</div>
      <span class="brand-text">Inovix<span class="dot">.</span></span>
    </a>

    <nav class="nav-links">
      <a href="/why-inovix">Why Inovix</a>
      <a href="/work">Work</a>
      <a href="/pricing">Pricing</a>
      <a href="/process">Process</a>
      <a href="/tools">Tools <span class="badge-nav">Free</span></a>
      <a href="/blog" class="active">Blog</a>
      <a href="/faq">FAQ</a>
      <a href="/contact">Contact</a>
    </nav>

    <a href="/contact" class="pill">Start a Project</a>

    <button class="burger" id="burger" aria-label="Toggle Menu">
      <i></i>
      <i></i>
    </button>
  </header>

  <!-- Page Hero -->
  <section class="page-hero">
    <div class="page-tag">Actionable Guides &amp; Market Intelligence</div>
    <h1 class="page-title">Inovix Engineering &amp; Growth Blog</h1>
    <p class="page-desc">Pura sach, realistic pricing, aur live engineering formulas jo aapke business ko Google par #1 rank karwayen aur daily qualified customer inquiries generate karein. Click any guide below to open its dedicated page.</p>

    <!-- Live Search Bar -->
    <div class="blog-search-box">
      <span class="blog-search-icon">🔍</span>
      <input type="text" id="blogSearchInput" class="blog-search-input" placeholder="Search by district e.g. Gurugram, Karnal, Faridabad, Hisar..." />
    </div>
  </section>

  <div class="container">
    <!-- Filter Bar -->
    <div class="blog-filter-bar">
      <button class="blog-filter-btn active" data-bcat="all">All Articles (${ALL_BLOGS.length})</button>
      <button class="blog-filter-btn" data-bcat="haryana">Haryana Districts (22)</button>
      <button class="blog-filter-btn" data-bcat="pricing">Pricing &amp; Small Business</button>
      <button class="blog-filter-btn" data-bcat="export">Export &amp; B2B</button>
      <button class="blog-filter-btn" data-bcat="tech">Web &amp; App Tech</button>
      <button class="blog-filter-btn" data-bcat="seo">Local SEO &amp; Leads</button>
    </div>

    <!-- Quick District Filter Bar -->
    <div class="district-tags-bar">
      <span class="district-tag-label">📍 Fast Jump to District:</span>
      ${[
        "Gurugram", "Faridabad", "Panipat", "Karnal", "Sonipat", "Ambala",
        "Rohtak", "Hisar", "Panchkula", "Yamunanagar", "Rewari", "Bhiwani",
        "Kurukshetra", "Sirsa", "Jhajjar", "Jind", "Kaithal", "Palwal",
        "Fatehabad", "Nuh", "Charkhi Dadri", "Mahendragarh"
      ].map(c => `<button class="district-pill-btn" onclick="filterByDistrict('${c}')">${c}</button>`).join('\n      ')}
    </div>

    <!-- Blog Grid -->
    <div class="blog-grid" id="blogGrid">
      <!-- Cards rendered via JavaScript dynamically from BLOG_DATA -->
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h4>Inovix Technologies</h4>
        <p>India's Most Affordable Digital Agency &amp; Software House. High-speed web apps, custom CRMs, and lead machines starting at just ₹4,999.</p>
        <p style="margin-top: 12px; color: #fff; font-size: 13px;">Panipat &amp; NCR, Haryana • Direct: +91 83079 67782</p>
      </div>

      <div class="footer-col">
        <h5>Solutions</h5>
        <ul>
          <li><a href="/work">Web Engineering</a></li>
          <li><a href="/work">Mobile App Development</a></li>
          <li><a href="/pricing">Custom CRM &amp; Software</a></li>
          <li><a href="/process">Page-1 Google SEO</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Navigation</h5>
        <ul>
          <li><a href="/why-inovix">Why Inovix</a></li>
          <li><a href="/work">Live Builds</a></li>
          <li><a href="/pricing">Pricing Plans</a></li>
          <li><a href="/process">4-Step Process</a></li>
          <li><a href="/tools">16 Free Tools</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h5>Knowledge</h5>
        <ul>
          <li><a href="/blog">Engineering Blog</a></li>
          <li><a href="/faq">Frequently Asked Questions</a></li>
          <li><a href="/contact">Contact Founder</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>&copy; 2026 Inovix Technologies. All rights reserved. Panipat, Haryana.</span>
      <span>Built for Speed, Engineered for Growth.</span>
    </div>
  </footer>

  <script>
    // Complete 30 Articles Data Store (8 Original + 22 Haryana Districts)
    const BLOG_DATA = ${JSON.stringify(ALL_BLOGS, null, 2)};

    const blogGrid = document.getElementById('blogGrid');
    const searchInput = document.getElementById('blogSearchInput');
    let currentFilter = 'all';
    let currentSearch = '';

    // Render Cards
    function renderBlogCards() {
      blogGrid.innerHTML = '';

      const filtered = BLOG_DATA.filter((blog) => {
        const matchesCat = currentFilter === 'all' || blog.bcat === currentFilter;
        const q = currentSearch.toLowerCase().trim();
        const matchesQuery = !q ||
          blog.title.toLowerCase().includes(q) ||
          blog.excerpt.toLowerCase().includes(q) ||
          blog.slug.toLowerCase().includes(q) ||
          blog.badge.toLowerCase().includes(q);

        return matchesCat && matchesQuery;
      });

      if (filtered.length === 0) {
        blogGrid.innerHTML = \`
          <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px;">
            <p style="font-size: 18px; color: #fff; font-weight: 700; margin-bottom: 8px;">No matching guides found</p>
            <p style="font-size: 14px; color: var(--muted); margin-bottom: 20px;">Try searching for another district name or clear the search filter.</p>
            <button onclick="resetFilters()" class="pill" style="font-size: 13px; padding: 8px 20px;">Reset All Filters</button>
          </div>
        \`;
        return;
      }

      filtered.forEach((blog) => {
        const card = document.createElement('a');
        card.href = \`/blog/\${blog.slug}\`;
        card.className = 'blog-card';
        card.setAttribute('data-bcat', blog.bcat);
        card.innerHTML = \`
          <div class="blog-card-media">
            <img src="\${blog.image || '/blog/inovix-500-rs-website-plan.jpg'}" alt="\${blog.title}" loading="lazy" onerror="this.src='/blog/inovix-500-rs-website-plan.jpg'" />
          </div>
          <div class="blog-card-top">
            <div class="blog-badge-row">
              <span class="blog-badge \${blog.badgeClass}">\${blog.badge}</span>
              <span class="blog-read-time">\${blog.readTime}</span>
            </div>
            <h2 class="blog-title">\${blog.title}</h2>
            <p class="blog-excerpt">\${blog.excerpt}</p>
          </div>
          <div class="blog-card-meta">
            <div class="blog-stats-pill">\${blog.statsPill}</div>
            <div class="blog-footer-row">
              <span class="blog-date">\${blog.date}</span>
              <span class="read-article-btn">Open Dedicated Guide ↗</span>
            </div>
          </div>
        \`;

        blogGrid.appendChild(card);
      });
    }

    function filterByDistrict(district) {
      searchInput.value = district;
      currentSearch = district;
      currentFilter = 'all';
      filterBtns.forEach(b => b.classList.remove('active'));
      document.querySelector('.blog-filter-btn[data-bcat="all"]').classList.add('active');
      renderBlogCards();
      blogGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function resetFilters() {
      searchInput.value = '';
      currentSearch = '';
      currentFilter = 'all';
      filterBtns.forEach(b => b.classList.remove('active'));
      document.querySelector('.blog-filter-btn[data-bcat="all"]').classList.add('active');
      renderBlogCards();
    }

    // Search input listener
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      renderBlogCards();
    });

    // Filter Buttons
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.getAttribute('data-bcat');
        renderBlogCards();
      });
    });

    // Topbar & Mobile Menu
    const topbar = document.getElementById('topbar');
    const burger = document.getElementById('burger');
    window.addEventListener('scroll', () => {
      topbar.classList.toggle('scrolled', window.scrollY > 30);
    });

    // Initial render
    renderBlogCards();
  </script>
</body>
</html>`;

const blogIndexPath = path.join(rootDir, 'blog', 'index.html');
fs.writeFileSync(blogIndexPath, blogIndexHtml, 'utf8');
console.log('Successfully updated blog/index.html with all 30 articles and supportive images!');
