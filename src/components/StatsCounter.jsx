import React from "react";
import { motion } from "framer-motion";
import { Award, Zap, Users, TrendingUp, Sparkles, Cpu, Layers } from "lucide-react";
import SpotlightCard from "../ui/SpotlightCard.jsx";
import CountUp from "../ui/CountUp.jsx";

export default function StatsCounter() {
  const stats = [
    {
      value: 22,
      suffix: "+",
      label: "Live Platforms Built",
      desc: "Delivered across SaaS, B2B Pharma, Education, and Export/Import",
      icon: Layers,
    },
    {
      value: 150,
      suffix: "+",
      label: "Gyms on GymFlow",
      desc: "Powering 7,500+ active members with automated WhatsApp billing",
      icon: Users,
    },
    {
      prefix: "₹",
      value: 50,
      suffix: "L+",
      label: "Volume Processed",
      desc: "Automated payment and lead pipelines built with n8n and REST APIs",
      icon: TrendingUp,
    },
    {
      value: 50,
      suffix: "ms",
      label: "Sub-Second Latency",
      desc: "90% API latency reduction engineered via Redis & modern Next/React code",
      icon: Zap,
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#06060e] text-white border-b border-white/5 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Engineering Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-100">
            Real Software Metrics. Zero Vanity.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Every number below is backed by real deployed code, active database transactions, and live users.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true }}
              >
                <SpotlightCard
                  spotlightColor="rgba(0, 212, 255, 0.12)"
                  borderSpotlightColor="rgba(0, 212, 255, 0.45)"
                  className="p-7 rounded-3xl bg-[#090914] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-2">
                      <CountUp
                        to={stat.value}
                        prefix={stat.prefix || ""}
                        suffix={stat.suffix || ""}
                        duration={2}
                      />
                    </div>

                    <div className="text-base font-bold text-slate-200 mb-2">
                      {stat.label}
                    </div>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed pt-4 border-t border-white/5">
                    {stat.desc}
                  </p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
