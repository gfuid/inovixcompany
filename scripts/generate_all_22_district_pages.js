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

// Helper to convert section markdown to clean HTML
function formatSectionContent(content) {
  if (!content) return '';
  const blocks = content.split(/\n\s*\n/);
  return blocks.map(block => {
    const trimmed = block.trim();
    if (!trimmed) return '';

    const lines = trimmed.split('\n').map(l => l.trim()).filter(Boolean);

    // Numbered list
    if (lines.every(l => /^\d+\.\s+/.test(l))) {
      const items = lines.map(line => {
        const cleaned = line.replace(/^\d+\.\s+/, '')
          .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        return `<li>${cleaned}</li>`;
      }).join('\n');
      return `<ol class="article-ol">${items}</ol>`;
    }

    // Bullet list
    if (lines.every(l => /^[-*]\s+/.test(l))) {
      const items = lines.map(line => {
        const cleaned = line.replace(/^[-*]\s+/, '')
          .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
        return `<li>${cleaned}</li>`;
      }).join('\n');
      return `<ul class="article-ul">${items}</ul>`;
    }

    // Regular paragraph with bold support
    const pContent = trimmed.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    return `<p>${pContent}</p>`;
  }).join('\n');
}

// Generate single article HTML
function generateDistrictHtml(post) {
  const heroImage = DISTRICT_IMAGES[post.slug] || '/blog/inovix-500-rs-website-plan.jpg';

  let sectionsHtml = '';
  if (post.sections && post.sections.length) {
    sectionsHtml = post.sections.map(sec => `
      <section id="${sec.id}" class="article-sec">
        <h2>${sec.heading}</h2>
        ${formatSectionContent(sec.content)}
      </section>
    `).join('\n');
  }

  let faqsHtml = '';
  if (post.faqs && post.faqs.length) {
    faqsHtml = `
      <div class="faq-section">
        <h3>Frequently Asked Questions (${post.badge})</h3>
        <div class="faq-list">
          ${post.faqs.map(faq => `
            <div class="faq-item">
              <div class="faq-q">${faq.q}</div>
              <div class="faq-a">${faq.a}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <title>${post.title} | Inovix Technologies</title>
  <meta name="description" content="${post.metaDescription}" />
  <meta name="keywords" content="${post.seoKeywords}" />
  <link rel="icon" type="image/png" href="/ino.png" />
  <link rel="canonical" href="https://www.inovix.co.in/blog/${post.slug}" />

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

    /* Article Container */
    .article-container {
      max-width: 860px;
      margin: 0 auto;
      padding: 110px 24px 80px;
    }

    .breadcrumbs {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 12.5px;
      color: var(--muted);
      margin-bottom: 24px;
    }
    .breadcrumbs a { color: var(--muted); text-decoration: none; }
    .breadcrumbs a:hover { color: #fff; }
    .breadcrumbs .sep { color: rgba(255, 255, 255, 0.2); }
    .breadcrumbs .current { color: #38bdf8; font-weight: 600; }

    .back-btn-row { margin-bottom: 24px; }
    .back-nav-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 600;
      color: var(--nav);
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      padding: 6px 14px;
      border-radius: 999px;
      text-decoration: none;
      transition: all 0.15s ease;
    }
    .back-nav-btn:hover { color: #fff; background: rgba(255, 255, 255, 0.1); }

    .article-meta-row {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    .blog-badge {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      border-radius: 6px;
      padding: 4px 10px;
      background: rgba(56, 189, 248, 0.15);
      color: #38bdf8;
      border: 1px solid rgba(56, 189, 248, 0.3);
    }
    .read-time-pill {
      font-size: 12.5px;
      color: var(--muted);
      font-family: 'JetBrains Mono', monospace;
    }

    .article-title {
      font-size: clamp(28px, 4.5vw, 42px);
      font-weight: 800;
      line-height: 1.25;
      color: #fff;
      margin-bottom: 16px;
      letter-spacing: -0.02em;
    }
    .article-subtitle {
      font-size: clamp(16px, 2.5vw, 19px);
      color: #cbd5e1;
      line-height: 1.6;
      margin-bottom: 28px;
    }

    /* Supportive Hero Image */
    .article-hero-media {
      margin: 28px 0 36px;
      border-radius: 20px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.12);
      background: #0c0c0e;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    }
    .article-hero-media img {
      width: 100%;
      height: auto;
      max-height: 440px;
      object-fit: cover;
      display: block;
    }

    /* Author Card */
    .author-card {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 16px 20px;
      border-radius: 14px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.06);
      margin-bottom: 40px;
    }
    .author-thumb {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid #38bdf8;
    }
    .author-name { font-size: 14px; font-weight: 700; color: #fff; }
    .author-role { font-size: 12px; color: var(--muted); }

    /* Content Typography */
    .article-content {
      font-size: 16px;
      color: #e2e8f0;
      line-height: 1.8;
    }
    .article-sec { margin-bottom: 44px; }
    .article-content h2 {
      font-size: clamp(20px, 3vw, 26px);
      font-weight: 800;
      color: #fff;
      margin: 36px 0 16px;
      letter-spacing: -0.01em;
      border-left: 3px solid #38bdf8;
      padding-left: 14px;
    }
    .article-content p { margin-bottom: 18px; }
    .article-content strong { color: #fff; font-weight: 700; }
    .article-ul, .article-ol {
      margin: 18px 0 22px 24px;
    }
    .article-ul li, .article-ol li {
      margin-bottom: 10px;
      line-height: 1.7;
    }

    /* FAQ Section */
    .faq-section {
      margin-top: 56px;
      padding-top: 40px;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .faq-section h3 {
      font-size: 22px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 24px;
    }
    .faq-list { display: flex; flex-direction: column; gap: 16px; }
    .faq-item {
      background: var(--surface);
      border: 1px solid var(--surface-border);
      border-radius: 14px;
      padding: 20px 24px;
    }
    .faq-q { font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 8px; }
    .faq-a { font-size: 14.5px; color: var(--muted); line-height: 1.6; }

    /* WhatsApp CTA Banner */
    .article-cta {
      margin: 60px 0 40px;
      background: linear-gradient(135deg, rgba(56, 189, 248, 0.12) 0%, rgba(14, 165, 233, 0.04) 100%);
      border: 1px solid rgba(56, 189, 248, 0.3);
      border-radius: 24px;
      padding: 44px 32px;
      text-align: center;
    }
    .article-cta h3 {
      font-size: 24px;
      font-weight: 800;
      color: #fff;
      margin-bottom: 10px;
    }
    .article-cta p {
      color: #cbd5e1;
      font-size: 15px;
      max-width: 580px;
      margin: 0 auto 24px;
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

    @media (max-width: 768px) {
      .topbar-wrap { padding: 14px 20px; }
      .nav-links { display: none; }
      .footer-inner { grid-template-columns: 1fr; gap: 30px; }
      .article-container { padding: 90px 18px 50px; }
      .article-cta { padding: 32px 20px; }
    }
  </style>

  <!-- Schema.org Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${post.title.replace(/"/g, '\\"')}",
    "description": "${post.metaDescription.replace(/"/g, '\\"')}",
    "image": "https://www.inovix.co.in${heroImage}",
    "author": {
      "@type": "Person",
      "name": "Sagar Punia",
      "jobTitle": "Founder & Lead Full-Stack Engineer",
      "url": "https://www.inovix.co.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inovix Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.inovix.co.in/ino.png"
      }
    },
    "datePublished": "2026-09-24",
    "mainEntityOfPage": "https://www.inovix.co.in/blog/${post.slug}"
  }
  </script>
</head>
<body>

  <!-- Topbar -->
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

  <!-- Main Container -->
  <main class="article-container">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span class="sep">/</span>
      <a href="/blog">Blog</a>
      <span class="sep">/</span>
      <span class="current">${post.badge}</span>
    </nav>

    <div class="back-btn-row">
      <a href="/blog" class="back-nav-btn">← Back to All Guides</a>
    </div>

    <div class="article-meta-row">
      <span class="blog-badge">${post.badge}</span>
      <span class="read-time-pill">${post.readTime} • Published ${post.publishDate}</span>
    </div>

    <h1 class="article-title">${post.title}</h1>
    <div class="article-subtitle">${post.subtitle}</div>

    <!-- Supportive Related Banner Image -->
    <div class="article-hero-media">
      <img src="${heroImage}" alt="${post.title}" loading="eager" onerror="this.src='/blog/inovix-500-rs-website-plan.jpg'" />
    </div>

    <!-- Author Bar -->
    <div class="author-card">
      <img src="/brand/dev_avatar.png" alt="Sagar Punia" class="author-thumb" onerror="this.src='/ino.png';" />
      <div>
        <div class="author-name">Sagar Punia</div>
        <div class="author-role">Founder &amp; Senior Web Engineer at Inovix Technologies • Panipat, Haryana</div>
      </div>
    </div>

    <!-- Article Content Sections -->
    <div class="article-content">
      ${sectionsHtml}
    </div>

    ${faqsHtml}

    <!-- WhatsApp Lead CTA -->
    <div class="article-cta">
      <h3>Need a High-Converting Website in ${post.badge.replace(' Spotlight', '').replace(' Hub', '')}?</h3>
      <p>Speak directly with Founder Sagar Punia for technical guidance, cost estimation, and a live roadmap for your business.</p>
      <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
        <a href="https://wa.me/918307967782?text=${encodeURIComponent('Hi Sagar, I read your guide "' + post.title + '" and want to discuss a website for my business.')}" target="_blank" rel="noopener noreferrer" class="pill" style="padding: 14px 34px; font-size: 15px;">
          <span>Discuss on WhatsApp ↗</span>
        </a>
        <a href="/blog" class="back-nav-btn" style="padding: 12px 24px; font-size: 14px;">← Explore All 22 Districts</a>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <h4>Inovix Technologies</h4>
        <p>India's Most Affordable Tech &amp; Web Agency. Sub-second web apps, custom CRMs, and lead machines starting at just ₹4,999.</p>
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
</html>`;
}

// Generate all 22 dedicated district pages
let createdCount = 0;
haryanaDistrictPosts.forEach(post => {
  const dir = path.join(rootDir, 'blog', post.slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  const filePath = path.join(dir, 'index.html');
  fs.writeFileSync(filePath, generateDistrictHtml(post), 'utf8');
  createdCount++;
  console.log(`[${createdCount}/22] Generated: blog/${post.slug}/index.html`);
});

console.log(`Successfully generated all ${createdCount} dedicated district pages!`);
