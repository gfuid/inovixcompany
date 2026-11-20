// One-stop blog build:
//   1. renders a cover image for every blog post  -> public/blog/covers/<slug>.jpg
//   2. patches existing blog pages with the cover (hero image, og:image, schema image)
//   3. generates pages for the posts in content/posts/*.mjs
//   4. refreshes blog/index.html (cards), public/sitemap.xml and new-blog-urls.txt
// Run:  npm i --no-save sharp   then   node scripts/build_blog.mjs
// Safe to re-run. (The older generate_*.js scripts are out of date - do not run them.)
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { writeCover, accentFor } from './blog_covers.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.inovix.co.in';
const WA = '918307967782';
const PUBLISH = { label: 'Nov 20, 2026', iso: '2026-11-20', month: 'Nov 2026' };
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const write = (p, s) => fs.writeFileSync(path.join(root, p), s, 'utf8');
const attr = (s) => String(s).replace(/&(?!amp;|lt;|gt;|quot;)/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const coverPath = (slug) => `/blog/covers/${slug}.jpg`;

// ---------- cover copy for the posts that already existed ----------
const EXISTING_COVERS = {
  '500-rs-website-design-truth': ['₹500 Website: Truth vs Scam', 'Starter Plan', 'rupee'],
  'best-web-design-company-panipat': ['Best Web Design Company in Panipat', 'Panipat • 2026', 'browser'],
  'best-web-development-company-panipat': ['Best Web Development Company in Panipat', 'Panipat • 2026', 'code'],
  'custom-software-development-company-panipat': ['Custom Software Company in Panipat', 'CRM • ERP • Web Apps', 'gear'],
  'custom-software-development-cost-india-2026': ['Custom Software Cost in India 2026', 'Price Guide', 'rupee'],
  'digital-marketing-agency-panipat-roi': ['Digital Marketing Agency in Panipat', 'ROI & Leads', 'chart'],
  'doctor-clinic-hospital-website-panipat': ['Doctor & Clinic Websites in Panipat', 'Healthcare', 'browser'],
  'ecommerce-website-development-panipat': ['Ecommerce Website Development Panipat', 'Online Store', 'cart'],
  'google-my-business-seo-services-panipat': ['Google Business Profile SEO Panipat', 'Local SEO', 'pin'],
  'mobile-app-development-company-panipat': ['Mobile App Development in Panipat', 'Android • iOS', 'phone'],
  'professional-website-design-services-panipat': ['Professional Website Design Panipat', 'Web Design', 'browser'],
  'textile-exporter-website-design-panipat': ['Textile Exporter Website Design', 'Export & B2B', 'browser'],
  'textile-factory-erp-billing-software-panipat': ['Textile Factory ERP & Billing Software', 'Factory Software', 'gear'],
  'top-reasons-hire-web-designer-panipat': ['Why Hire a Web Designer in Panipat', 'Hiring Guide', 'code'],
  'website-design-cost-panipat-2026': ['Website Design Cost in Panipat 2026', 'Price Guide', 'rupee'],
  'website-vs-web-app-vs-mobile-app-guide': ['Website vs Web App vs Mobile App', 'Decision Guide', 'phone'],
};
const DISTRICT_PREFIX = 'website-design-development-company-';
const titleCase = (s) => s.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');

function coverMetaForExisting(slug) {
  if (EXISTING_COVERS[slug]) {
    const [title, kicker, motif] = EXISTING_COVERS[slug];
    return { title, kicker, motif };
  }
  if (slug.startsWith(DISTRICT_PREFIX)) {
    const district = titleCase(slug.slice(DISTRICT_PREFIX.length));
    return { title: `Website Design Company in ${district}`, kicker: `Haryana • ${district}`, motif: 'pin' };
  }
  return null;
}

// ---------- load new posts ----------
const postsDir = path.join(root, 'content', 'posts');
const posts = [];
if (fs.existsSync(postsDir)) {
  for (const f of fs.readdirSync(postsDir).filter((f) => f.endsWith('.mjs')).sort()) {
    const mod = await import(pathToFileURL(path.join(postsDir, f)).href);
    posts.push(mod.default);
  }
}
const newSlugs = new Set(posts.map((p) => p.slug));

// ---------- 1. covers ----------
const coversDir = path.join(root, 'public', 'blog', 'covers');
const existingSlugs = fs.readdirSync(path.join(root, 'blog'), { withFileTypes: true })
  .filter((d) => d.isDirectory() && !newSlugs.has(d.name)).map((d) => d.name);

const coverAlt = {};
for (const slug of existingSlugs) {
  const meta = coverMetaForExisting(slug);
  if (!meta) { console.warn('  ! no cover copy for', slug); continue; }
  coverAlt[slug] = meta.title;
  await writeCover(coversDir, slug, { ...meta, accent: accentFor(slug) });
}
for (const p of posts) {
  coverAlt[p.slug] = p.coverTitle;
  await writeCover(coversDir, p.slug, { title: p.coverTitle, kicker: p.coverKicker, motif: p.motif, accent: accentFor(p.slug) });
}
console.log(`covers: ${Object.keys(coverAlt).length}`);

// ---------- 2. patch existing pages ----------
const HERO_CSS = `
    .article-hero-media { margin: 0 0 32px; border-radius: 20px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.12); background: #0c0c0e; box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6); }
    .article-hero-media img { width: 100%; height: auto; display: block; }
`;
const heroBlock = (slug) => `<div class="article-hero-media">
      <img src="${coverPath(slug)}" alt="${attr(coverAlt[slug])} - Inovix Technologies" width="1200" height="630" loading="eager" fetchpriority="high" />
    </div>`;
const socialMeta = (slug) => `<meta property="og:image" content="${SITE}${coverPath(slug)}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${SITE}${coverPath(slug)}" />`;

let patched = 0;
for (const slug of existingSlugs) {
  if (!coverAlt[slug]) continue;
  const file = `blog/${slug}/index.html`;
  let html = read(file);
  const before = html;

  // hero image
  if (/<div class="article-hero-media">[\s\S]*?<\/div>/.test(html)) {
    html = html.replace(/<div class="article-hero-media">[\s\S]*?<\/div>/, heroBlock(slug));
  } else if (html.includes('<div class="author-card">')) {
    html = html.replace('<div class="author-card">', `${heroBlock(slug)}\n\n    <div class="author-card">`);
    if (!html.includes('.article-hero-media {')) html = html.replace('</style>', `${HERO_CSS}  </style>`);
  } else {
    console.warn('  ! no hero slot in', slug);
  }

  // social meta
  html = html.replace(/\s*<meta (?:property="og:image(?::width|:height)?"|name="twitter:(?:card|image)") content="[^"]*" \/>/g, '');
  if (/<meta property="og:site_name"[^>]*>/.test(html)) {
    html = html.replace(/(<meta property="og:site_name"[^>]*>)/, `$1\n  ${socialMeta(slug)}`);
  } else {
    html = html.replace('</head>', `  ${socialMeta(slug)}\n</head>`);
  }

  // schema image
  const img = `"image": "${SITE}${coverPath(slug)}",`;
  if (/"image":\s*"[^"]*",/.test(html)) html = html.replace(/"image":\s*"[^"]*",/, img);
  else html = html.replace(/("@type":\s*"(?:BlogPosting|Article)",)/, `$1\n    ${img}`);

  if (html !== before) { write(file, html); patched++; }
}
console.log(`existing pages patched: ${patched}`);

// ---------- 3. new pages ----------
const index0 = read('blog/index.html');
const dataMatch = index0.match(/const BLOG_DATA = (\[[\s\S]*?\n\]);/);
if (!dataMatch) throw new Error('BLOG_DATA not found in blog/index.html');
const oldCards = JSON.parse(dataMatch[1]).filter((c) => !newSlugs.has(c.slug));
const cardBySlug = Object.fromEntries(oldCards.map((c) => [c.slug, c]));
for (const p of posts) cardBySlug[p.slug] = { slug: p.slug, badge: p.badge, badgeClass: p.badgeClass, readTime: p.readTime, title: p.title, excerpt: p.excerpt };

function relatedCards(p) {
  return (p.related || []).filter((s) => cardBySlug[s]).slice(0, 3).map((s) => {
    const c = cardBySlug[s];
    return `        <a href="/blog/${s}" class="related-card">
          <div class="related-badge-row">
            <span class="blog-badge ${c.badgeClass}">${attr(c.badge)}</span>
            <span style="font-size: 11.5px; color: #94a3b8;">${c.readTime}</span>
          </div>
          <h4>${attr(c.title)}</h4>
          <p>${attr(c.excerpt.length > 110 ? c.excerpt.slice(0, 107).replace(/\s+\S*$/, '') + '…' : c.excerpt)}</p>
          <div class="related-arrow">Read Guide →</div>
        </a>`;
  }).join('\n');
}

function pageHtml(p) {
  const url = `${SITE}/blog/${p.slug}`;
  const waLink = `https://wa.me/${WA}?text=${encodeURIComponent(p.waText)}`;
  const schema = [
    {
      '@context': 'https://schema.org', '@type': 'BlogPosting',
      headline: p.title, description: p.metaDescription, image: `${SITE}${coverPath(p.slug)}`,
      author: { '@type': 'Person', name: 'Sagar Punia', jobTitle: 'Founder & Senior Web Engineer', worksFor: { '@type': 'Organization', name: 'Inovix Technologies', url: SITE } },
      publisher: { '@type': 'Organization', name: 'Inovix Technologies', logo: { '@type': 'ImageObject', url: `${SITE}/ino.png` } },
      datePublished: PUBLISH.iso, dateModified: PUBLISH.iso, mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org', '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE}/blog` },
        { '@type': 'ListItem', position: 3, name: p.coverTitle, item: url },
      ],
    },
  ].map((s) => `  <script type="application/ld+json">\n${JSON.stringify(s, null, 2).replace(/<\//g, '<\\/')}\n  </script>`).join('\n');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${attr(p.metaTitle)}</title>
  <meta name="description" content="${attr(p.metaDescription)}" />
  <meta name="keywords" content="${attr(p.keywords)}" />
  <link rel="icon" type="image/png" href="/ino.png" />
  <link rel="canonical" href="${url}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:title" content="${attr(p.metaTitle)}" />
  <meta property="og:description" content="${attr(p.metaDescription)}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:site_name" content="Inovix Technologies" />
  ${socialMeta(p.slug)}
  <meta property="article:published_time" content="${PUBLISH.iso}" />
  <meta property="article:author" content="Sagar Punia" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet" />

  <style>
    :root { --bg: #050505; --surface: #0d0f14; --surface-border: rgba(255, 255, 255, 0.08); --text: #f8fafc; --muted: #94a3b8; --cyan: #38bdf8; --green: #34d399; --purple: #a855f7; --amber: #fbbf24; }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: var(--bg); color: var(--text); font-family: 'Manrope', -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; -webkit-font-smoothing: antialiased; overflow-x: hidden; }

    .topbar-wrap { position: sticky; top: 0; z-index: 100; display: flex; align-items: center; justify-content: space-between; padding: 16px 32px; background: rgba(5, 5, 5, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
    .brand-group { display: flex; align-items: center; gap: 10px; text-decoration: none; color: #fff; }
    .brand-mark { width: 32px; height: 32px; border-radius: 8px; background: #1e2433; border: 1px solid rgba(255, 255, 255, 0.15); display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; color: #fff; }
    .brand-text { font-size: 18px; font-weight: 800; letter-spacing: -0.02em; }
    .brand-text .dot { color: var(--cyan); }
    .nav-links { display: flex; align-items: center; gap: 28px; }
    .nav-links a { color: var(--muted); text-decoration: none; font-size: 14px; font-weight: 500; transition: color 0.15s; }
    .nav-links a:hover, .nav-links a.active { color: #fff; }
    .badge-nav { font-size: 10px; background: rgba(56, 189, 248, 0.15); color: var(--cyan); padding: 2px 6px; border-radius: 4px; font-weight: 700; margin-left: 4px; }
    .pill { display: inline-flex; align-items: center; gap: 8px; background: #ffffff; color: #050505; font-weight: 700; font-size: 13.5px; padding: 10px 22px; border-radius: 999px; text-decoration: none; transition: transform 0.15s ease, box-shadow 0.15s ease; }
    .pill:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 255, 255, 0.2); }

    .article-container { max-width: 880px; margin: 0 auto; padding: 40px 24px 100px; }
    .breadcrumbs { display: flex; align-items: center; gap: 8px; font-size: 13px; color: var(--muted); margin-bottom: 24px; flex-wrap: wrap; }
    .breadcrumbs a { color: var(--muted); text-decoration: none; transition: color 0.15s; }
    .breadcrumbs a:hover { color: var(--cyan); }
    .breadcrumbs .sep { color: rgba(255, 255, 255, 0.2); }
    .breadcrumbs .current { color: #cbd5e1; font-weight: 600; }
    .back-btn-row { margin-bottom: 32px; }
    .back-nav-btn { display: inline-flex; align-items: center; gap: 8px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.1); color: var(--muted); padding: 8px 16px; border-radius: 999px; font-size: 13px; font-weight: 600; text-decoration: none; transition: all 0.15s ease; }
    .back-nav-btn:hover { background: rgba(255, 255, 255, 0.1); color: #fff; border-color: rgba(255, 255, 255, 0.25); }

    .article-meta-row { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
    .blog-badge { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; border-radius: 6px; padding: 4px 10px; }
    .badge-green { background: rgba(52, 211, 153, 0.12); color: #34d399; border: 1px solid rgba(52, 211, 153, 0.3); }
    .badge-cyan, .badge-blue { background: rgba(56, 189, 248, 0.12); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); }
    .badge-purple { background: rgba(168, 85, 247, 0.12); color: #c084fc; border: 1px solid rgba(168, 85, 247, 0.3); }
    .badge-amber { background: rgba(251, 191, 36, 0.12); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); }
    .badge-rose { background: rgba(251, 113, 133, 0.12); color: #fb7185; border: 1px solid rgba(251, 113, 133, 0.3); }
    .read-time-pill { font-size: 13px; color: var(--muted); }

    .article-title { font-size: clamp(28px, 4vw, 42px); font-weight: 800; color: #fff; line-height: 1.22; letter-spacing: -0.03em; margin-bottom: 20px; }
    .article-subtitle { font-size: clamp(16px, 1.8vw, 19px); color: #94a3b8; line-height: 1.65; margin-bottom: 32px; padding-left: 18px; border-left: 3px solid var(--green); }
${HERO_CSS}
    .author-card { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; margin-bottom: 40px; }
    .author-thumb { width: 48px; height: 48px; border-radius: 50%; background: #1a1e29; object-fit: cover; border: 1.5px solid rgba(255, 255, 255, 0.2); }
    .author-name { font-size: 15px; font-weight: 700; color: #fff; margin-bottom: 2px; }
    .author-role { font-size: 12.5px; color: var(--muted); }

    .article-content { font-size: 16.5px; color: #cbd5e1; line-height: 1.85; margin-bottom: 48px; }
    .article-content h2 { font-size: clamp(22px, 2.5vw, 28px); font-weight: 800; color: #fff; margin: 44px 0 16px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.08); }
    .article-content h3 { font-size: clamp(18px, 2vw, 21px); font-weight: 700; color: var(--cyan); margin: 28px 0 12px; }
    .article-content p { margin-bottom: 20px; }
    .article-content ul, .article-content ol { margin: 0 0 24px 24px; }
    .article-content li { margin-bottom: 10px; }
    .article-content strong { color: #fff; font-weight: 700; }
    .article-content a { color: var(--cyan); text-decoration: underline; text-underline-offset: 3px; }
    .article-content a:hover { color: #fff; }

    .article-table-wrap { overflow-x: auto; margin: 32px 0; background: rgba(0, 0, 0, 0.45); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; }
    .article-table { width: 100%; border-collapse: collapse; font-size: 14.5px; text-align: left; }
    .article-table th, .article-table td { padding: 16px 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); }
    .article-table th { background: rgba(255, 255, 255, 0.04); color: #fff; font-weight: 700; }
    .article-table td { color: #cbd5e1; }

    .reader-faq-box { margin-top: 48px; border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 36px; }
    .reader-faq-item { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; margin-bottom: 14px; padding: 20px 24px; }
    .reader-faq-q { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 8px; }
    .reader-faq-a { font-size: 14.5px; color: var(--muted); line-height: 1.65; }

    .article-cta { margin-top: 54px; background: linear-gradient(135deg, rgba(20, 24, 34, 0.95) 0%, rgba(10, 12, 18, 0.98) 100%); border: 1px solid rgba(52, 211, 153, 0.35); border-radius: 24px; padding: 40px 32px; text-align: center; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4); }
    .article-cta h3 { font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 10px; }
    .article-cta p { font-size: 15px; color: var(--muted); max-width: 620px; margin: 0 auto 24px; }

    .related-section { margin-top: 70px; padding-top: 40px; border-top: 1px solid rgba(255, 255, 255, 0.08); }
    .related-title { font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 24px; }
    .related-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
    .related-card { background: var(--surface); border: 1px solid var(--surface-border); border-radius: 16px; padding: 24px; text-decoration: none; color: inherit; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.2s ease; }
    .related-card:hover { border-color: rgba(56, 189, 248, 0.4); transform: translateY(-3px); }
    .related-badge-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; gap: 8px; }
    .related-card h4 { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 8px; line-height: 1.4; }
    .related-card p { font-size: 13px; color: var(--muted); line-height: 1.5; margin-bottom: 16px; }
    .related-arrow { font-size: 12.5px; font-weight: 700; color: var(--cyan); }

    .footer { border-top: 1px solid rgba(255, 255, 255, 0.06); padding: 60px 24px 40px; background: #050505; margin-top: 80px; }
    .footer-inner { max-width: 1240px; margin: 0 auto 40px; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; }
    .footer-brand h4 { font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 12px; }
    .footer-brand p { font-size: 13.5px; color: var(--muted); line-height: 1.6; }
    .footer-col h5 { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #fff; margin-bottom: 16px; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 10px; }
    .footer-col a { color: var(--muted); text-decoration: none; font-size: 13.5px; transition: color 0.15s; }
    .footer-col a:hover { color: #fff; }
    .footer-bottom { max-width: 1240px; margin: 0 auto; padding-top: 24px; border-top: 1px solid rgba(255, 255, 255, 0.04); display: flex; justify-content: space-between; align-items: center; font-size: 12.5px; color: #64748b; flex-wrap: wrap; gap: 12px; }

    @media (max-width: 768px) {
      .topbar-wrap { padding: 14px 20px; }
      .nav-links { display: none; }
      .footer-inner { grid-template-columns: 1fr; gap: 30px; }
      .article-container { padding: 24px 16px 60px; }
      .article-cta { padding: 30px 20px; }
      .article-table th, .article-table td { padding: 12px 14px; }
    }
  </style>

${schema}
</head>
<body>

  <header class="topbar-wrap">
    <a href="/" class="brand-group" aria-label="Inovix Home">
      <div class="brand-mark"><span>IX</span></div>
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
    <a href="/contact" class="pill"><span>Start a Project</span></a>
  </header>

  <main class="article-container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="sep">/</span>
      <a href="/blog">Blog</a>
      <span class="sep">/</span>
      <span class="current">${attr(p.coverTitle)}</span>
    </nav>

    <div class="back-btn-row">
      <a href="/blog" class="back-nav-btn">← Back to All Articles</a>
    </div>

    <div class="article-meta-row">
      <span class="blog-badge ${p.badgeClass}">${attr(p.badge)}</span>
      <span class="blog-badge badge-cyan">${attr(p.badge2)}</span>
      <span class="read-time-pill">${p.readTime} • Updated ${PUBLISH.month}</span>
    </div>

    <h1 class="article-title">${attr(p.title)}</h1>
    <div class="article-subtitle">${attr(p.subtitle)}</div>

    ${heroBlock(p.slug)}

    <div class="author-card">
      <img src="/brand/dev_avatar.png" alt="Sagar Punia" class="author-thumb" onerror="this.src='/ino.png';" />
      <div>
        <div class="author-name">Sagar Punia</div>
        <div class="author-role">Founder &amp; Senior Web Engineer at Inovix Technologies • Panipat &amp; NCR</div>
      </div>
    </div>

    <div class="article-content">
${p.content.trim()}
    </div>

    <div class="reader-faq-box">
      <h2 style="font-size: 22px; font-weight: 800; color: #fff; margin-bottom: 20px;">Frequently Asked Questions</h2>
${p.faqs.map((f) => `      <div class="reader-faq-item">
        <div class="reader-faq-q">Q: ${attr(f.q)}</div>
        <div class="reader-faq-a">${attr(f.a)}</div>
      </div>`).join('\n')}
    </div>

    <div class="article-cta">
      <h3>${attr(p.ctaTitle)}</h3>
      <p>${attr(p.ctaText)}</p>
      <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
        <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="pill" style="padding: 14px 32px; font-size: 15px;">
          <span>Chat on WhatsApp ↗</span>
        </a>
        <a href="/pricing" class="back-nav-btn" style="padding: 12px 24px; font-size: 14px;">See Pricing Plans</a>
      </div>
    </div>

    <div class="related-section">
      <h3 class="related-title">Related Inovix Guides</h3>
      <div class="related-grid">
${relatedCards(p)}
      </div>
    </div>
  </main>

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

</body>
</html>
`;
}

for (const p of posts) {
  fs.mkdirSync(path.join(root, 'blog', p.slug), { recursive: true });
  write(`blog/${p.slug}/index.html`, pageHtml(p));
}
console.log(`new pages written: ${posts.length}`);

// ---------- 4. blog index, sitemap, url list ----------
const newCards = posts.map((p) => ({
  slug: p.slug, bcat: p.bcat, badge: p.badge, badgeClass: p.badgeClass, readTime: p.readTime,
  date: PUBLISH.label, image: coverPath(p.slug), title: p.title, excerpt: p.excerpt, statsPill: p.statsPill,
}));
const allCards = [...newCards, ...oldCards.map((c) => ({ ...c, image: coverAlt[c.slug] ? coverPath(c.slug) : c.image }))];
let index = index0.replace(dataMatch[0], () => `const BLOG_DATA = ${JSON.stringify(allCards, null, 2)};`);
index = index.replace(/All Articles \(\d+\)/, `All Articles (${allCards.length})`);
write('blog/index.html', index);
console.log(`blog index cards: ${allCards.length}`);

let sitemap = read('public/sitemap.xml');
let added = 0;
for (const p of posts) {
  const loc = `${SITE}/blog/${p.slug}`;
  if (sitemap.includes(`<loc>${loc}</loc>`)) continue;
  sitemap = sitemap.replace('</urlset>', `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${PUBLISH.iso}</lastmod>\n    <priority>0.80</priority>\n  </url>\n\n</urlset>`);
  added++;
}
write('public/sitemap.xml', sitemap);
console.log(`sitemap urls added: ${added}`);

if (posts.length) write('new-blog-urls.txt', posts.map((p) => `${SITE}/blog/${p.slug}`).join('\n') + '\n');
