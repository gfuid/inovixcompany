import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
    Mail, Phone, MapPin, Send,
    ArrowRight, CheckCircle2, Globe2, AlertCircle
} from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "digital", // digital, trade, consulting
        message: ""
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

        const serviceLabels = {
            digital: "App / Web Dev",
            trade: "Export / Trade",
            consulting: "Consulting"
        };

        const templateParams = {
            name: formData.name,
            email: formData.email,
            service: serviceLabels[formData.service] || formData.service,
            message: formData.message,
            from_name: formData.name,
            from_email: formData.email,
            reply_to: formData.email
        };

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_iqshmc2",
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_re1lme9",
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "IDBDCu2O5cW6nI1pm"
            );
            setIsSent(true);
            setFormData({ name: "", email: "", service: "digital", message: "" });
        } catch (error) {
            console.error("EmailJS submission error:", error);
            setErrorMessage(error?.text || "Failed to send message. Please try again or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-black py-24 relative overflow-hidden" id="contact">

            {/* --- Background Ambience --- */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-16 max-w-3xl">
                    <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block">
                        Contact Us
                    </span>
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
                        Let's Build Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                            Global Future.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Whether you need a custom app, export consulting, or a complete digital transformation, our team is ready to deploy.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* --- Left Column: Contact Info --- */}
                    <div className="lg:col-span-5 space-y-8">

                        {/* Info Cards */}
                        <div className="bg-zinc-900/50 border border-white/10 p-8 rounded-[2rem] space-y-8 backdrop-blur-sm">

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Chat to us</h4>
                                    <p className="text-gray-400 text-sm mb-2">Our friendly team is here to help.</p>
                                    <a href="mailto:hello@inovix.co" className="text-cyan-400 font-mono hover:underline">info@inovix.co.in</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Visit us</h4>
                                    <p className="text-gray-400 text-sm mb-2">Our studio base.</p>
                                    <p className="text-gray-300 text-sm">Panipat, Haryana, 132103, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Call us</h4>
                                    <p className="text-gray-400 text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
                                    <p className="text-gray-300 text-sm">+91 83079 67782</p>
                                </div>
                            </div>

                        </div>

                        {/* Global Status Card */}
                        <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border border-cyan-500/20 p-6 rounded-[2rem] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <Globe2 className="text-cyan-400" size={24} />
                                    <span className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                                </div>
                                <span className="text-white font-bold text-sm">Accepting New Projects</span>
                            </div>
                            <span className="text-xs text-cyan-200/60 uppercase tracking-widest font-bold">Worldwide</span>
                        </div>

                    </div>

                    {/* --- Right Column: Form --- */}
                    <div className="lg:col-span-7">
                        <div className="bg-zinc-900 border border-white/10 p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden">

                            {/* Success Overlay */}
                            {isSent && (
                                <div className="absolute inset-0 bg-zinc-900 z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-300">
                                    <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">We'll be in touch within 24 hours.</p>
                                    <button onClick={() => setIsSent(false)} className="mt-8 text-sm text-gray-500 hover:text-white underline">Send another message</button>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Your Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Interested In</label>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, service: 'digital' })}
                                            className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${formData.service === 'digital' ? 'bg-cyan-500 border-cyan-500 text-black' : 'bg-black/50 border-white/10 text-gray-400 hover:text-white'}`}
                                        >
                                            App / Web Dev
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, service: 'trade' })}
                                            className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${formData.service === 'trade' ? 'bg-cyan-500 border-cyan-500 text-black' : 'bg-black/50 border-white/10 text-gray-400 hover:text-white'}`}
                                        >
                                            Export / Trade
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData({ ...formData, service: 'consulting' })}
                                            className={`py-3 px-4 rounded-xl text-sm font-bold border transition-all ${formData.service === 'consulting' ? 'bg-cyan-500 border-cyan-500 text-black' : 'bg-black/50 border-white/10 text-gray-400 hover:text-white'}`}
                                        >
                                            Consulting
                                        </button>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Message</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="Tell us about your project goals..."
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-6 py-4 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all resize-none"
                                    />
                                </div>

                                {errorMessage && (
                                    <div className="flex items-center gap-2 text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-3 rounded-xl text-sm">
                                        <AlertCircle size={18} className="shrink-0" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-cyan-900/20"
                                >
                                    {isSubmitting ? "Sending..." : <>Send Message <Send size={18} /></>}
                                </button>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;