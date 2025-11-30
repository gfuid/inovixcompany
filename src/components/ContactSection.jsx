"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Mail, MessageCircle, MapPin, Phone, ArrowRight, Sparkles, Clock } from "lucide-react";

// --- 1. Scramble Text Component ---
const ScrambleText = ({ text, className, trigger }) => {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  useEffect(() => {
    let interval;
    if (trigger) {
      let iteration = 0;
      interval = setInterval(() => {
        setDisplayText((prev) =>
          text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
    } else {
      setDisplayText(text);
    }
    return () => clearInterval(interval);
  }, [trigger, text]);

  return <span className={className}>{displayText}</span>;
};

// --- 2. 3D Tilt Card Component (Enhanced) ---
const TiltCard = ({ children, className }) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const xRotation = useSpring(0, { stiffness: 300, damping: 30 });
  const yRotation = useSpring(0, { stiffness: 300, damping: 30 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width - 0.5) * 20;
        const yPct = (mouseY / height - 0.5) * -20;

        xRotation.set(yPct);
        yRotation.set(xPct);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        xRotation.set(0);
        yRotation.set(0);
      }}
      style={{
        rotateX: xRotation,
        rotateY: yRotation,
        transformStyle: "preserve-3d",
      }}
      className={`relative perspective-1000 ${className}`}
    >
      {/* Pass hover state to children via render prop or cloneElement if needed, 
          but here we just pass simple children for layout, so we handle logic inside specific wrappers if needed.
          Actually, let's wrap the child in a div that receives the hover state logic if we want to trigger ScrambleText from here. 
      */}
      {React.Children.map(children, child =>
        React.isValidElement(child) ? React.cloneElement(child, { isHovered }) : child
      )}
    </motion.div>
  );
};

export default function ContactSection() {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "info@inovix.com",
      link: "mailto:info@inovix.co.in",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
      glow: "group-hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)]"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+91 83079 67782",
      link: "tel:+918307967782",
      color: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      glow: "group-hover:shadow-[0_0_50px_-10px_rgba(74,222,128,0.3)]"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      value: "Cyber City, Panipat",
      link: "#",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
      glow: "group-hover:shadow-[0_0_50px_-10px_rgba(192,132,252,0.3)]"
    },
  ];

  return (
    <section className="relative w-full py-32 px-6 bg-black text-white overflow-hidden selection:bg-cyan-500/30">

      {/* --- 1. Background Effects --- */}

      {/* Moving Grid Scanner */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none perspective-500">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="absolute left-0 w-full h-[2px] bg-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 5 + i * 2,
            repeat: Infinity,
            delay: i,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-cyan-500 rounded-full blur-[1px]"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 80}%`,
          }}
        />
      ))}

      {/* Central Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-900/20 to-cyan-900/20 blur-[120px] rounded-full pointer-events-none" />


      {/* --- 2. Content --- */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Interactive Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative inline-flex flex-col items-center group mb-10 cursor-pointer"
        >
          <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl group-hover:border-green-500/30 transition-all duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-400 group-hover:text-green-400 transition-colors">
              Accepting New Projects
            </span>
          </div>

          {/* Tooltip on Hover */}
          <div className="absolute top-full mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-900/80 border border-green-500/30 rounded-lg text-xs text-green-300 backdrop-blur-md">
              <Clock className="w-3 h-3" />
              <span>Avg. Response: 2 Hours</span>
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-8xl font-black mb-10 tracking-tighter"
        >
          Ready to <br />
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 blur-2xl opacity-20 animate-pulse"></span>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Ignite Growth?
            </span>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Let's engineer a digital presence that dominates your market.
        </motion.p>

        {/* Primary CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-8 mb-24"
        >
          {/* Shimmer Button Effect */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:info@inovix.co.in"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-neutral-900 font-lg rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative flex items-center gap-3 bg-black rounded-full px-8 py-4 leading-none transition-all group-hover:bg-neutral-900">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-gray-400 group-hover:text-white" />
            </div>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/918307967782"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-transparent border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/[0.05] hover:border-white/30 transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" />
            <span>WhatsApp Us</span>
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full max-w-4xl mx-auto h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20"></div>

        {/* 3D Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {contactDetails.map((item, index) => (
            <TiltCard key={index} className="h-full">
              {/* We clone the child to pass hover state for ScrambleText trigger */}
              <ContactCardContent item={item} />
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
}

// Sub-component to handle the card content and hover state logic cleanly
const ContactCardContent = ({ item, isHovered }) => {
  return (
    <a
      href={item.link}
      className={`group flex flex-col items-center justify-center p-10 h-full rounded-3xl bg-neutral-900/40 border border-white/5 backdrop-blur-xl transition-all duration-500 ${item.border} hover:bg-neutral-900/80 ${item.glow}`}
      style={{ transform: "translateZ(0)" }}
    >
      {/* Floating Icon */}
      <div
        className={`w-16 h-16 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
        style={{ transform: "translateZ(30px)" }}
      >
        {item.icon}
      </div>

      {/* Text Content */}
      <div style={{ transform: "translateZ(20px)" }} className="text-center">
        <h3 className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em] mb-3 min-h-[1.5em]">
          <ScrambleText text={item.title} trigger={isHovered} />
        </h3>
        <p className="text-white font-bold text-xl tracking-tight">{item.value}</p>
      </div>
    </a>
  );
};