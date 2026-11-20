// Branded 1200x630 cover images for blog posts (hero image, blog card, og:image).
// Needs sharp:  npm i --no-save sharp
import fs from 'fs';
import path from 'path';

const ACCENTS = {
  cyan: '#38bdf8',
  green: '#34d399',
  purple: '#a855f7',
  amber: '#fbbf24',
  rose: '#fb7185',
};
const ACCENT_KEYS = Object.keys(ACCENTS);
const FONT = "'Segoe UI', 'Helvetica Neue', Arial, sans-serif";

const esc = (s) => String(s).replace(/&amp;/g, '&').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function hash(str) {
  let h = 0;
  for (const c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return h;
}

export function accentFor(slug) {
  return ACCENT_KEYS[hash(slug) % ACCENT_KEYS.length];
}

function wrap(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    if (line && (line + ' ' + w).length > maxChars) {
      lines.push(line);
      line = w;
    } else {
      line = line ? line + ' ' + w : w;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// Pick the largest type size that keeps the title to 3 lines or fewer.
function layoutTitle(title) {
  for (const [size, chars] of [[66, 17], [58, 20], [50, 23], [44, 27]]) {
    const lines = wrap(title, chars);
    if (lines.length <= 3) return { size, lines };
  }
  return { size: 44, lines: wrap(title, 27).slice(0, 3) };
}

// ---- Right-hand illustrations, drawn inside a 400x380 box at (0,0) ----
const line = (x, y, w, c = '#ffffff', o = 0.14, h = 10) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}" opacity="${o}"/>`;

const windowFrame = (inner) => `
  <rect x="0" y="0" width="400" height="380" rx="22" fill="#0d1017" stroke="#ffffff" stroke-opacity="0.14"/>
  <rect x="0" y="0" width="400" height="46" rx="22" fill="#ffffff" opacity="0.05"/>
  <circle cx="26" cy="23" r="6" fill="#fb7185"/><circle cx="46" cy="23" r="6" fill="#fbbf24"/><circle cx="66" cy="23" r="6" fill="#34d399"/>
  <rect x="96" y="13" width="210" height="20" rx="10" fill="#ffffff" opacity="0.08"/>
  ${inner}`;

const MOTIFS = {
  browser: (a) => windowFrame(`
    <rect x="24" y="68" width="352" height="120" rx="14" fill="${a}" opacity="0.16"/>
    ${line(44, 92, 180, '#ffffff', 0.85, 14)}${line(44, 118, 130, '#ffffff', 0.4)}
    <rect x="44" y="142" width="96" height="30" rx="15" fill="${a}"/>
    <rect x="24" y="206" width="108" height="92" rx="12" fill="#ffffff" opacity="0.06"/>
    <rect x="146" y="206" width="108" height="92" rx="12" fill="#ffffff" opacity="0.06"/>
    <rect x="268" y="206" width="108" height="92" rx="12" fill="#ffffff" opacity="0.06"/>
    <circle cx="48" cy="232" r="12" fill="${a}" opacity="0.8"/><circle cx="170" cy="232" r="12" fill="${a}" opacity="0.8"/><circle cx="292" cy="232" r="12" fill="${a}" opacity="0.8"/>
    ${line(36, 258, 80)}${line(158, 258, 80)}${line(280, 258, 80)}${line(36, 276, 54)}${line(158, 276, 54)}${line(280, 276, 54)}
    ${line(24, 322, 352, '#ffffff', 0.08)}${line(24, 344, 240, '#ffffff', 0.08)}`),

  code: (a) => windowFrame(`
    ${line(30, 76, 90, a, 0.9)}${line(130, 76, 140, '#ffffff', 0.35)}
    ${line(54, 104, 120, '#a855f7', 0.85)}${line(184, 104, 90, '#ffffff', 0.3)}
    ${line(54, 132, 70, '#34d399', 0.85)}${line(134, 132, 170, '#ffffff', 0.3)}
    ${line(78, 160, 150, '#fbbf24', 0.85)}${line(238, 160, 60, '#ffffff', 0.3)}
    ${line(78, 188, 100, a, 0.9)}${line(188, 188, 120, '#ffffff', 0.3)}
    ${line(54, 216, 60, '#fb7185', 0.85)}
    ${line(30, 244, 110, '#a855f7', 0.85)}${line(150, 244, 80, '#ffffff', 0.3)}
    ${line(54, 272, 190, '#34d399', 0.85)}
    ${line(54, 300, 130, a, 0.9)}${line(194, 300, 90, '#ffffff', 0.3)}
    ${line(30, 328, 40, '#fb7185', 0.85)}
    <rect x="258" y="318" width="118" height="38" rx="19" fill="${a}"/>
    <text x="317" y="343" text-anchor="middle" font-family="${FONT}" font-size="16" font-weight="700" fill="#06070b">&lt;/&gt; ship</text>`),

  phone: (a) => `
    <rect x="96" y="0" width="208" height="380" rx="34" fill="#0d1017" stroke="#ffffff" stroke-opacity="0.2" stroke-width="2"/>
    <rect x="160" y="14" width="80" height="12" rx="6" fill="#ffffff" opacity="0.18"/>
    <rect x="116" y="44" width="168" height="92" rx="16" fill="${a}" opacity="0.2"/>
    ${line(132, 62, 96, '#ffffff', 0.85, 12)}${line(132, 84, 70, '#ffffff', 0.4)}
    <rect x="132" y="104" width="64" height="20" rx="10" fill="${a}"/>
    <rect x="116" y="150" width="78" height="70" rx="12" fill="#ffffff" opacity="0.07"/>
    <rect x="206" y="150" width="78" height="70" rx="12" fill="#ffffff" opacity="0.07"/>
    <circle cx="155" cy="176" r="12" fill="${a}" opacity="0.85"/><circle cx="245" cy="176" r="12" fill="#a855f7" opacity="0.85"/>
    ${line(130, 200, 50)}${line(220, 200, 50)}
    <rect x="116" y="234" width="168" height="40" rx="12" fill="#ffffff" opacity="0.07"/>
    <rect x="116" y="284" width="168" height="40" rx="12" fill="#ffffff" opacity="0.07"/>
    ${line(130, 249, 110)}${line(130, 299, 84)}
    <rect x="156" y="350" width="88" height="8" rx="4" fill="#ffffff" opacity="0.3"/>
    <rect x="0" y="92" width="120" height="58" rx="16" fill="#111620" stroke="${a}" stroke-opacity="0.6"/>
    <circle cx="28" cy="121" r="12" fill="${a}"/>${line(50, 108, 54, '#ffffff', 0.7)}${line(50, 126, 38, '#ffffff', 0.3)}
    <rect x="290" y="232" width="110" height="58" rx="16" fill="#111620" stroke="#34d399" stroke-opacity="0.6"/>
    <circle cx="316" cy="261" r="12" fill="#34d399"/>${line(336, 248, 48, '#ffffff', 0.7)}${line(336, 266, 34, '#ffffff', 0.3)}`,

  cart: (a) => windowFrame(`
    <rect x="24" y="66" width="168" height="134" rx="14" fill="#ffffff" opacity="0.06"/>
    <rect x="208" y="66" width="168" height="134" rx="14" fill="#ffffff" opacity="0.06"/>
    <rect x="40" y="80" width="136" height="70" rx="10" fill="${a}" opacity="0.28"/>
    <rect x="224" y="80" width="136" height="70" rx="10" fill="#a855f7" opacity="0.28"/>
    ${line(40, 162, 86, '#ffffff', 0.6)}${line(224, 162, 86, '#ffffff', 0.6)}
    ${line(40, 180, 48, a, 0.9)}${line(224, 180, 48, a, 0.9)}
    <rect x="24" y="216" width="352" height="140" rx="16" fill="#111620" stroke="${a}" stroke-opacity="0.5"/>
    <g transform="translate(52 246)" fill="none" stroke="${a}" stroke-width="7" stroke-linecap="round" stroke-linejoin="round">
      <path d="M0 0h16l12 50h52l10-36H22"/><circle cx="34" cy="68" r="6" fill="${a}"/><circle cx="72" cy="68" r="6" fill="${a}"/>
    </g>
    ${line(176, 246, 150, '#ffffff', 0.7, 12)}${line(176, 272, 100, '#ffffff', 0.3)}
    <rect x="176" y="300" width="176" height="36" rx="18" fill="${a}"/>
    <text x="264" y="324" text-anchor="middle" font-family="${FONT}" font-size="16" font-weight="700" fill="#06070b">Checkout →</text>`),

  chart: (a) => windowFrame(`
    <rect x="24" y="66" width="108" height="64" rx="12" fill="#ffffff" opacity="0.06"/>
    <rect x="146" y="66" width="108" height="64" rx="12" fill="#ffffff" opacity="0.06"/>
    <rect x="268" y="66" width="108" height="64" rx="12" fill="#ffffff" opacity="0.06"/>
    ${line(38, 82, 50, '#ffffff', 0.35, 8)}${line(160, 82, 50, '#ffffff', 0.35, 8)}${line(282, 82, 50, '#ffffff', 0.35, 8)}
    ${line(38, 102, 70, a, 0.95, 14)}${line(160, 102, 60, '#34d399', 0.95, 14)}${line(282, 102, 76, '#fbbf24', 0.95, 14)}
    <rect x="24" y="146" width="352" height="210" rx="16" fill="#111620" stroke="#ffffff" stroke-opacity="0.08"/>
    <g opacity="0.9">
      <rect x="52" y="286" width="34" height="46" rx="6" fill="${a}" opacity="0.35"/>
      <rect x="104" y="262" width="34" height="70" rx="6" fill="${a}" opacity="0.45"/>
      <rect x="156" y="244" width="34" height="88" rx="6" fill="${a}" opacity="0.55"/>
      <rect x="208" y="222" width="34" height="110" rx="6" fill="${a}" opacity="0.7"/>
      <rect x="260" y="196" width="34" height="136" rx="6" fill="${a}" opacity="0.85"/>
      <rect x="312" y="172" width="34" height="160" rx="6" fill="${a}"/>
    </g>
    <polyline points="52,270 121,244 173,226 225,204 277,180 346,160" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="346" cy="160" r="8" fill="#ffffff"/>`),

  chat: (a) => `
    <rect x="0" y="0" width="400" height="380" rx="22" fill="#0d1017" stroke="#ffffff" stroke-opacity="0.14"/>
    <rect x="0" y="0" width="400" height="64" rx="22" fill="#ffffff" opacity="0.05"/>
    <circle cx="40" cy="32" r="18" fill="#34d399"/>
    <path d="M32 32l6 6 11-12" fill="none" stroke="#06070b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
    ${line(70, 20, 120, '#ffffff', 0.8, 12)}${line(70, 40, 70, '#34d399', 0.8, 8)}
    <rect x="24" y="86" width="230" height="58" rx="18" fill="#ffffff" opacity="0.08"/>
    ${line(42, 104, 180, '#ffffff', 0.6)}${line(42, 122, 120, '#ffffff', 0.3)}
    <rect x="146" y="158" width="230" height="58" rx="18" fill="#34d399" opacity="0.9"/>
    ${line(164, 176, 190, '#06070b', 0.7)}${line(164, 194, 130, '#06070b', 0.4)}
    <rect x="24" y="230" width="200" height="58" rx="18" fill="#ffffff" opacity="0.08"/>
    ${line(42, 248, 150, '#ffffff', 0.6)}${line(42, 266, 96, '#ffffff', 0.3)}
    <rect x="186" y="302" width="190" height="54" rx="18" fill="${a}" opacity="0.95"/>
    ${line(204, 318, 150, '#06070b', 0.7)}${line(204, 336, 96, '#06070b', 0.4)}`,

  pin: (a) => `
    <rect x="0" y="0" width="400" height="380" rx="22" fill="#0d1017" stroke="#ffffff" stroke-opacity="0.14"/>
    <clipPath id="mapclip"><rect x="1" y="1" width="398" height="378" rx="21"/></clipPath>
    <g clip-path="url(#mapclip)">
      <g stroke="#ffffff" stroke-opacity="0.07" stroke-width="2">
        <path d="M0 95h400M0 190h400M0 285h400M100 0v380M200 0v380M300 0v380"/>
      </g>
      <path d="M-10 250C80 210 120 300 200 250S330 150 410 190" fill="none" stroke="${a}" stroke-opacity="0.35" stroke-width="14" stroke-linecap="round"/>
      <path d="M60 -10C90 80 40 140 110 200S150 320 130 390" fill="none" stroke="#ffffff" stroke-opacity="0.1" stroke-width="10" stroke-linecap="round"/>
    </g>
    <circle cx="200" cy="246" r="46" fill="${a}" opacity="0.16"/><circle cx="200" cy="246" r="20" fill="${a}" opacity="0.3"/>
    <path d="M200 60c-42 0-76 33-76 75 0 55 76 118 76 118s76-63 76-118c0-42-34-75-76-75z" fill="${a}"/>
    <circle cx="200" cy="134" r="30" fill="#06070b"/>
    <rect x="232" y="284" width="150" height="74" rx="14" fill="#111620" stroke="#ffffff" stroke-opacity="0.16"/>
    <g fill="#fbbf24"><circle cx="252" cy="306" r="6"/><circle cx="270" cy="306" r="6"/><circle cx="288" cy="306" r="6"/><circle cx="306" cy="306" r="6"/><circle cx="324" cy="306" r="6"/></g>
    ${line(246, 324, 110, '#ffffff', 0.5)}${line(246, 340, 70, '#ffffff', 0.25)}`,

  gear: (a) => windowFrame(`
    <rect x="24" y="66" width="92" height="290" rx="14" fill="#ffffff" opacity="0.05"/>
    <circle cx="70" cy="100" r="18" fill="${a}"/>
    ${line(42, 136, 56, '#ffffff', 0.5)}${line(42, 162, 56)}${line(42, 188, 56)}${line(42, 214, 56)}${line(42, 240, 56)}
    <rect x="132" y="66" width="116" height="78" rx="14" fill="${a}" opacity="0.18"/>
    <rect x="260" y="66" width="116" height="78" rx="14" fill="#34d399" opacity="0.18"/>
    ${line(148, 84, 60, '#ffffff', 0.4, 8)}${line(276, 84, 60, '#ffffff', 0.4, 8)}
    ${line(148, 108, 84, a, 0.95, 16)}${line(276, 108, 72, '#34d399', 0.95, 16)}
    <rect x="132" y="160" width="244" height="196" rx="14" fill="#111620" stroke="#ffffff" stroke-opacity="0.08"/>
    ${line(148, 178, 212, '#ffffff', 0.18, 12)}
    ${[0, 1, 2, 3, 4].map((i) => `
      <circle cx="158" cy="${216 + i * 28}" r="7" fill="${[a, '#34d399', '#fbbf24', a, '#a855f7'][i]}"/>
      ${line(176, 211 + i * 28, 90, '#ffffff', 0.4)}${line(282, 211 + i * 28, 40, '#ffffff', 0.2)}
      <rect x="334" y="${208 + i * 28}" width="28" height="16" rx="8" fill="${[a, '#34d399', '#fbbf24', a, '#a855f7'][i]}" opacity="0.55"/>`).join('')}`),

  rupee: (a) => `
    <rect x="0" y="0" width="400" height="380" rx="22" fill="#0d1017" stroke="#ffffff" stroke-opacity="0.14"/>
    <circle cx="128" cy="130" r="88" fill="${a}" opacity="0.16"/>
    <circle cx="128" cy="130" r="64" fill="${a}"/>
    <text x="128" y="162" text-anchor="middle" font-family="${FONT}" font-size="92" font-weight="800" fill="#06070b">₹</text>
    <rect x="228" y="52" width="148" height="64" rx="14" fill="#ffffff" opacity="0.06"/>
    ${line(244, 68, 70, '#ffffff', 0.4, 8)}${line(244, 88, 110, a, 0.95, 14)}
    <rect x="228" y="130" width="148" height="64" rx="14" fill="#ffffff" opacity="0.06"/>
    ${line(244, 146, 70, '#ffffff', 0.4, 8)}${line(244, 166, 86, '#34d399', 0.95, 14)}
    <rect x="24" y="236" width="352" height="120" rx="16" fill="#111620" stroke="#ffffff" stroke-opacity="0.08"/>
    ${[0, 1, 2].map((i) => `
      <path d="M${44} ${262 + i * 30}l6 6 10-11" fill="none" stroke="#34d399" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      ${line(72, 259 + i * 30, [170, 130, 150][i], '#ffffff', 0.45)}${line(296, 259 + i * 30, 60, a, 0.8)}`).join('')}`,
};

export const MOTIF_NAMES = Object.keys(MOTIFS);

export function coverSvg({ title, kicker, motif = 'browser', accent = 'cyan' }) {
  const a = ACCENTS[accent] || ACCENTS.cyan;
  const { size, lines } = layoutTitle(esc(title).replace(/&amp;/g, '&'));
  const lh = Math.round(size * 1.16);
  const blockH = lines.length * lh;
  const titleTop = 250 + Math.round((250 - blockH) / 2) - 40;
  const kick = esc(kicker.toUpperCase());
  const kickW = Math.round(kick.replace(/&amp;/g, '&').length * 11.4 + 44);
  const draw = MOTIFS[motif] || MOTIFS.browser;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="g1" cx="78%" cy="18%" r="62%"><stop offset="0" stop-color="${a}" stop-opacity="0.34"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
    <radialGradient id="g2" cx="8%" cy="100%" r="55%"><stop offset="0" stop-color="${a}" stop-opacity="0.16"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" fill="none" stroke="#ffffff" stroke-opacity="0.045" stroke-width="1"/></pattern>
    <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#06070b" stop-opacity="0"/><stop offset="1" stop-color="#06070b" stop-opacity="0.85"/></linearGradient>
  </defs>
  <rect width="1200" height="630" fill="#06070b"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#g1)"/>
  <rect width="1200" height="630" fill="url(#g2)"/>
  <rect y="430" width="1200" height="200" fill="url(#fade)"/>

  <rect x="64" y="56" width="52" height="52" rx="13" fill="#1e2433" stroke="#ffffff" stroke-opacity="0.2"/>
  <text x="90" y="90" text-anchor="middle" font-family="${FONT}" font-size="19" font-weight="800" fill="#ffffff">IX</text>
  <text x="132" y="93" font-family="${FONT}" font-size="30" font-weight="800" fill="#ffffff">Inovix<tspan fill="${a}">.</tspan></text>

  <rect x="64" y="${titleTop - 70}" width="${kickW}" height="38" rx="19" fill="${a}" fill-opacity="0.14" stroke="${a}" stroke-opacity="0.5"/>
  <text x="${64 + kickW / 2}" y="${titleTop - 44}" text-anchor="middle" font-family="${FONT}" font-size="16" font-weight="700" letter-spacing="2" fill="${a}">${kick}</text>

  ${lines.map((l, i) => `<text x="64" y="${titleTop + size + i * lh - 8}" font-family="${FONT}" font-size="${size}" font-weight="800" letter-spacing="-1.5" fill="#ffffff">${esc(l)}</text>`).join('\n  ')}

  <rect x="64" y="548" width="56" height="5" rx="2.5" fill="${a}"/>
  <text x="64" y="590" font-family="${FONT}" font-size="21" font-weight="700" fill="#ffffff">inovix.co.in</text>
  <text x="212" y="590" font-family="${FONT}" font-size="21" font-weight="500" fill="#94a3b8">•  WhatsApp +91 83079 67782</text>

  <g transform="translate(736 124)">
    <rect x="-18" y="-18" width="436" height="416" rx="34" fill="${a}" opacity="0.07"/>
    ${draw(a)}
  </g>
</svg>`;
}

export async function writeCover(outDir, slug, opts) {
  const { default: sharp } = await import('sharp');
  fs.mkdirSync(outDir, { recursive: true });
  const file = path.join(outDir, `${slug}.jpg`);
  await sharp(Buffer.from(coverSvg(opts)), { density: 96 })
    .resize(1200, 630)
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(file);
  return file;
}
