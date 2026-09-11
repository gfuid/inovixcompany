import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Why is Inovix so affordable compared to agencies charging ₹1,00,000+?",
      a: "Traditional agencies spend your money on fancy air-conditioned offices, sales teams, and 5 layers of account managers who can't even code. At Inovix, you work directly with the founder and engineers. We use modern, automated tech stacks that cut build time by 70%, passing 100% of the savings directly to you.",
    },
    {
      q: "How long does it take to design and launch my website?",
      a: "Our Launchpad websites go live in just 3 to 5 business days. Full-scale multi-page web applications and custom CRMs typically take 10 to 18 days. You receive a private live development link from day 1 to track progress in real-time.",
    },
    {
      q: "What is included in the ₹500/month hosting & maintenance plan?",
      a: "It includes ultra-fast cloud hosting, free SSL security, 99.9% uptime monitoring, automated backups, and monthly content/photo/menu updates whenever you need them. Just text us on WhatsApp and we handle the technical side.",
    },
    {
      q: "Do I get full ownership of my domain and source code?",
      a: "100% yes. You retain complete ownership of your domain, brand assets, and custom code. We never lock clients into hostage proprietary platforms.",
    },
    {
      q: "How does Inovix ensure my website generates actual customer leads?",
      a: "We don't build digital brochures. We build conversion funnels: high-contrast 1-click WhatsApp buttons, quick call triggers, Google Maps local integration, and instant inquiry forms that notify your phone the second a buyer clicks.",
    },
    {
      q: "Can you build custom internal software, inventory, or CRM tools for my factory?",
      a: "Yes! We specialize in custom business tools, billing software, staff portals, and export-import buyer catalog systems for Panipat manufacturers, exporters, and service businesses.",
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 bg-white text-slate-900 border-b border-slate-200 overflow-hidden selection:bg-blue-600/20">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Honest Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Everything you need to know about our pricing, timelines, and execution process.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? "bg-blue-50/40 border-blue-300 shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-slate-900">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-blue-100 text-blue-700 rotate-180" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Have a specific question not covered here?</div>
              <div className="text-xs text-slate-600">Ask the founder directly on WhatsApp. No sales bot.</div>
            </div>
          </div>
          <a
            href="https://wa.me/918307967782?text=Hi%20Sagar%2C%20I%20have%20a%20question%20about%20Inovix%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-press px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
          >
            <span>Chat on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
