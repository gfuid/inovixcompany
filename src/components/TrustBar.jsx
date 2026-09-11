import React from "react";
import { ShieldCheck, Globe, Stethoscope, Factory, Rocket, UtensilsCrossed, Building2 } from "lucide-react";

const logoTrireme = "/brand/trireme.png";
const logoAppleveda = "/brand/appleveda.png";
const logoDigitalPharma = "/brand/digitalpharmapreneur.png";
const logoAgileExports = "/brand/agileexports.png";
const logoDesignHouzz = "/brand/designHouzz.png";
const logoHolistic = "/brand/holiestic.png";
const logoVisaWebs = "/brand/visawebs.png";
const logoTravelTrade = "/brand/traveltrade.png";
const logoCQST = "/brand/cqst.png";
const logoInnovationSoch = "/brand/innovationsoch.png";

export default function TrustBar() {
  const clientLogos = [
    { name: "Trireme Group", logo: logoTrireme, category: "Pharma Enterprise", url: "https://triremegroup.in" },
    { name: "Saksham Appleveda", logo: logoAppleveda, category: "Ayurvedic Healthcare", url: "https://sakshamappleveda.com" },
    { name: "Digital Pharmapreneur", logo: logoDigitalPharma, category: "EdTech Network", url: "https://digitalpharmapreneur.com" },
    { name: "ZK Brothers", logo: null, category: "Panipat Denim Exporter", url: "https://www.zkbrother.com/" },
    { name: "Ambavi Pvt Ltd", logo: null, category: "Agro Global Trade", url: "https://ambavi.in/" },
    { name: "Agile Exports", logo: logoAgileExports, category: "Global Trade", url: "https://agilexports.com/" },
    { name: "DesignHouzz", logo: logoDesignHouzz, category: "Architecture Studio", url: "https://frenchise-model-nl5z.vercel.app" },
    { name: "Holistic Foundation", logo: logoHolistic, category: "Healthcare NGO", url: "https://holisticjeevandhara.org" },
    { name: "VisaWebs", logo: logoVisaWebs, category: "Overseas Education", url: "https://unicoach-blush.vercel.app" },
    { name: "Travel Trade", logo: logoTravelTrade, category: "Travel Network", url: "https://sakshamappleveda.com" },
    { name: "CQST", logo: logoCQST, category: "Quality Tech", url: "https://vedominelifesciences.com" },
    { name: "Innovation Soch", logo: logoInnovationSoch, category: "Digital Consultancy", url: "https://vedagroup.co.in" },
  ];

  const categories = [
    { icon: Globe, label: "E-Commerce & Digital Brands" },
    { icon: Stethoscope, label: "Pharma & Lifesciences" },
    { icon: Factory, label: "Textiles & Global Exporters" },
    { icon: Rocket, label: "SaaS & AI Platforms" },
    { icon: UtensilsCrossed, label: "Restaurants & Retail" },
    { icon: Building2, label: "Corporate Groups & Franchise" },
  ];

  return (
    <section className="relative py-14 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-blue-100/40 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        {/* Trust Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-8">
          <ShieldCheck className="w-4 h-4 text-blue-600" />
          <span>Trusted by 22+ Production Brands, Exporters & SaaS Platforms • Click To Visit</span>
        </div>

        {/* Marquee */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] mb-10">
          <div className="animate-marquee hover:[animation-play-state:paused] flex items-center gap-6 sm:gap-8 py-2">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <a
                key={idx}
                href={client.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${client.name} live website`}
                className="group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-300 shrink-0 shadow-sm cursor-pointer"
              >
                <div className="h-8 sm:h-9 w-24 sm:w-28 flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0";
                    }}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-all duration-200"
                  />
                </div>
                <div className="text-left border-l border-slate-200 pl-3 hidden sm:block">
                  <div className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors whitespace-nowrap">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {client.category}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Industry Badges */}
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3">
          {categories.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-slate-500 text-xs font-medium hover:text-blue-600 hover:border-blue-300 transition-colors shadow-xs"
              >
                <Icon className="w-3.5 h-3.5 text-blue-500" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
