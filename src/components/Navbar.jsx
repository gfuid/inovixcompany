import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/#pricing" },
    { name: "Tools", path: "/tools", badge: "Free" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? "bg-[#06060c]/80 backdrop-blur-xl border border-cyan-500/20 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.8),0_0_20px_rgba(0,212,255,0.1)]"
            : "bg-[#0a0a14]/60 backdrop-blur-lg border border-white/10 shadow-xl"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,212,255,0.4)] group-hover:scale-105 transition-transform duration-200">
              <span className="text-sm tracking-tighter">IX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Inovix<span className="text-cyan-400">.</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-medium">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-full transition-colors ${
                location.pathname === "/"
                  ? "text-cyan-400 bg-cyan-500/10 font-semibold"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                  location.pathname === link.path
                    ? "text-cyan-400 bg-cyan-500/10 font-semibold"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/918307967782?text=Hi%20Inovix%2C%20I%20want%20to%20discuss%20a%20project%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-full transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="btn-press inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-[0_0_20px_rgba(0,212,255,0.35)] transition-all duration-200"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-cyan-500 hover:bg-cyan-400 transition"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-gray-300 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-3 pt-3 border-t border-white/10 md:hidden flex flex-col space-y-2 pb-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <Link
              to="/"
              onClick={closeMenu}
              className="px-4 py-2 rounded-xl text-gray-200 hover:bg-white/5 font-medium"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="px-4 py-2 rounded-xl text-gray-200 hover:bg-white/5 font-medium flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded-full bg-cyan-500/20 text-cyan-300">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white text-sm"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
