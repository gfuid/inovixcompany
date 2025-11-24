"use client";

import React from "react";
import {
    Globe2, Code2, Rocket, Users,
    ArrowUpRight, CheckCircle2, Target
} from "lucide-react";

const About = () => {
    return (
        <section className="bg-black py-24 relative overflow-hidden" id="about">

            {/* --- Background Ambient Effects --- */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none"
                style={{ backgroundImage: "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- Top Header --- */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-cyan-400 font-bold tracking-widest uppercase text-xs mb-4 block">
                            Who We Are
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
                            We Bridge the Gap Between <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                                Code & Cargo.
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-400 max-w-md text-sm md:text-base leading-relaxed border-l border-white/20 pl-6">
                        We are a hybrid agency. We build software that scales businesses digitally, and we provide the consulting to expand them physically across borders.
                    </p>
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Column: The Image/Visual Block */}
                    <div className="lg:col-span-5 relative h-[500px] lg:h-auto">
                        <div className="absolute inset-0 bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/10 group">
                            {/* Abstract Visual Representation */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-black z-10" />
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team collaboration"
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 right-8 z-20 bg-black/80 backdrop-blur-md p-6 rounded-3xl border border-white/10">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                                        <Rocket size={24} />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-lg">Global Impact</p>
                                        <p className="text-gray-400 text-xs">Empowering businesses worldwide</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Details & Stats */}
                    <div className="lg:col-span-7 flex flex-col gap-8">

                        {/* Story Card */}
                        <div className="bg-zinc-900/50 border border-white/10 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-sm hover:border-white/20 transition-colors">
                            <h3 className="text-2xl font-bold text-white mb-4">Our Philosophy</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                In today's economy, you cannot rely on just one channel. You need a digital fortress (App/Web) and a global footprint (Import/Export).
                                We don't just act as a service provider; we act as your growth architect.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    "Digital Transformation Experts",
                                    "Licensed Export Consultants",
                                    "Business Process Automation",
                                    "Global Trade Education"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                                        <CheckCircle2 size={16} className="text-cyan-400" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6 flex-1">
                            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center group hover:border-cyan-500/30 transition-colors">
                                <Code2 size={32} className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-4xl font-black text-white mb-1">15+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Projects Delivered</p>
                            </div>

                            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 p-8 rounded-[2.5rem] flex flex-col justify-center items-center text-center group hover:border-cyan-500/30 transition-colors">
                                <Globe2 size={32} className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h4 className="text-4xl font-black text-white mb-1">12+</h4>
                                <p className="text-xs text-gray-500 uppercase tracking-wider">Countries Reached</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- Bottom Vision Bar --- */}
                <div className="mt-8 bg-cyan-900/20 border border-cyan-500/20 p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                            <Target size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-lg">Our Vision</h4>
                            <p className="text-cyan-200/60 text-sm max-w-xl">
                                To create a seamless ecosystem where a local business can digitize their operations and start exporting their products within 90 days.
                            </p>
                        </div>
                    </div>
                    <button className="whitespace-nowrap px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl flex items-center gap-2 transition-transform hover:scale-105">
                        Meet The Team <ArrowUpRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default About;