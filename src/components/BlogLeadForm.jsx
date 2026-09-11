import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, MessageCircle, Sparkles, ShieldCheck } from "lucide-react";

export default function BlogLeadForm({ blogTitle, defaultService = "Website Development" }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      service: `${formData.service} (From Blog: ${blogTitle || "Panipat Guide"})`,
      message: `Phone: ${formData.phone}\nMessage: ${formData.message}`,
      from_name: formData.name,
      from_email: formData.email,
      reply_to: formData.email,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_iqshmc2",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_re1lme9",
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "IDBDCu2O5cW6nI1pm"
      );
      setIsSent(true);
      setFormData({ name: "", phone: "", email: "", service: defaultService, message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(error?.text || "Inquiry send nahi ho payi. Kripya hume seedha WhatsApp par contact karein.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi Sagar, maine aapka blog "${blogTitle || "Website Guide"}" padha. Mujhe apne business ke liye digital solution discuss karna hai.`
  );

  return (
    <div className="my-14 p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden text-slate-800">
      {/* Decorative top accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600" />

      {/* Header */}
      <div className="max-w-2xl mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Get Free Consultation & Quote</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Apne Business Ko Online Grow Karna Chahte Hain?
        </h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          Neeche apni details fill karein ya seedha WhatsApp par Founder <strong>Sagar Punia</strong> se connect karein. Hum 24 ghante ke andar direct plan & proposal provide karenge.
        </p>
      </div>

      {isSent ? (
        <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 size={36} />
          </div>
          <h4 className="text-2xl font-bold text-emerald-900 mb-2">Inquiry Received Successfully!</h4>
          <p className="text-sm text-emerald-700 max-w-md mx-auto">
            Dhanyawad! Sagar Punia aur Inovix team aapse jaldi contact karegi. Agar urgent inquiry hai, toh aap hume seedha WhatsApp par message kar sakte hain.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`https://wa.me/918307967782?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md transition-colors flex items-center gap-2"
            >
              <MessageCircle size={16} />
              <span>Direct WhatsApp Chat</span>
            </a>
            <button
              onClick={() => setIsSent(false)}
              className="px-5 py-2.5 rounded-full bg-white border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              Send Another Inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Aapka Naam *
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Ramesh Kumar"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all shadow-xs"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone / WhatsApp Number *
              </label>
              <input
                required
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all shadow-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ramesh@company.com"
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all shadow-xs"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Kis Service Me Interest Hai?
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all shadow-xs"
              >
                <option value="₹500 Starter Micro-Site">₹500 Starter Micro-Site</option>
                <option value="Textile / Export Catalog Website">Textile / Export Catalog Website</option>
                <option value="Business Website (React/Next.js)">Business Website (₹4,999+)</option>
                <option value="Mobile App Development (Android/iOS)">Mobile App Development</option>
                <option value="E-Commerce Online Store">E-Commerce Online Store</option>
                <option value="Google My Business (GMB) Local SEO">Google Maps & Local SEO</option>
                <option value="Digital Marketing & Lead Ads">Digital Marketing & Leads</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Project Ki Details Ya Requirements (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              placeholder="Jaise: Meri Panipat me blanket manufacturing unit hai, mujhe overseas export ke liye online catalog chahiye..."
              className="w-full bg-slate-50 border border-slate-200 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 outline-none transition-all resize-none shadow-xs"
            />
          </div>

          {errorMessage && (
            <div className="flex items-center gap-2 text-rose-700 bg-rose-50 border border-rose-200 px-4 py-3 rounded-xl text-xs">
              <AlertCircle size={16} className="shrink-0 text-rose-600" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Buttons Group */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isSubmitting ? "Sending Inquiry..." : <>Submit Direct Inquiry <Send size={16} /></>}
            </button>

            <span className="text-xs text-slate-400 font-semibold uppercase">Ya fir</span>

            <a
              href={`https://wa.me/918307967782?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <MessageCircle size={18} />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-5 text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Direct Founder Response (Sagar Punia)</span>
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Spam & Privacy Guaranteed</span>
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
