"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Clock,
  Send,
  ShieldCheck,
} from "lucide-react";
import contactAvatar from "../assets/assets/brand/contact_avatar.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    service: "Launchpad Website (₹4,999)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = `Hi Inovix! My name is ${formData.name} from ${formData.business || "my business"}. I am interested in ${formData.service}. Additional note: ${formData.notes || "None"}. Phone: ${formData.phone}`;
    const url = `https://wa.me/918307967782?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Direct Founder Phone",
      value: "+91 83079 67782",
      link: "tel:+918307967782",
      label: "Call Anytime (9am - 9pm)",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Priority Chat",
      value: "Chat on WhatsApp",
      link: "https://wa.me/918307967782?text=Hi%20Inovix%2C%20I%20want%20a%20quote%20for%20my%20business",
      label: "Instant response < 15 mins",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
    },
    {
      icon: MapPin,
      title: "Engineering Studio",
      value: "Panipat, Haryana, India",
      link: "#",
      label: "Serving Clients Globally",
      color: "text-violet-600",
      bg: "bg-violet-50",
      border: "border-violet-200",
    },
  ];

  return (
    <section id="contact" className="relative w-full py-24 px-4 sm:px-6 bg-slate-50 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-100/50 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Execution • Direct Founder Attention</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900">
            Let's Build Something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600">
              Unstoppable Together.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-500">
            Tell us about your brand or shop. We will send you a fixed, transparent quote and live concept in under 24 hours.
          </p>
        </div>

        {/* 2-Column Section: Quick Quote Form + Direct Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-lg shadow-slate-900/5">
            <h3 className="text-xl font-bold text-slate-900 mb-1">Get an Instant Quote</h3>
            <p className="text-xs text-slate-500 mb-6">
              Takes 60 seconds. Zero sales harassment, guaranteed.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Business / Shop Name
                  </label>
                  <input
                    type="text"
                    value={formData.business}
                    onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                    placeholder="e.g. Panipat Handlooms / My Cafe"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Select Required Package
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all"
                  >
                    <option value="Launchpad Website (₹4,999)">Launchpad Website (₹4,999)</option>
                    <option value="Growth Engine & SEO (₹19,999)">Growth Engine & SEO (₹19,999)</option>
                    <option value="Custom CRM & Software (₹49,999+)">Custom CRM & Software (₹49,999+)</option>
                    <option value="Web Care & Hosting (₹500/mo)">Web Care & Hosting (₹500/mo)</option>
                    <option value="Export & Business Consulting">Export & Business Consulting</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Brief Requirements / Goal (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. I need a modern restaurant website with menu & Google Maps ranking..."
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 focus:outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-press w-full py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Send via WhatsApp & Get Instant Quote</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>100% Privacy • Direct response from the founder in 15 mins</span>
              </div>
            </form>
          </div>

          {/* Direct Channels Side */}
          <div className="lg:col-span-5 space-y-4">
            {/* Founder Direct Card */}
            <div className="p-5 rounded-2xl bg-white border border-blue-200 flex items-center gap-4 shadow-md shadow-blue-600/5">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-blue-300 shrink-0">
                <img src={contactAvatar} alt="Sagar Punia" className="w-full h-full object-cover" />
                <span className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">Direct Founder Line</div>
                <div className="text-sm font-bold text-slate-900">Sagar Punia — Lead Architect</div>
                <div className="text-[11px] text-emerald-600 flex items-center gap-1.5 mt-0.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
                  <span>Available on WhatsApp & Call (&lt;15m reply)</span>
                </div>
              </div>
            </div>

            {contactCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <a
                  key={idx}
                  href={card.link}
                  className={`block p-5 rounded-2xl bg-white border ${card.border} hover:border-blue-300 hover:shadow-md transition-all duration-200 group`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${card.bg} ${card.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500">{card.title}</div>
                      <div className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {card.value}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{card.label}</div>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}