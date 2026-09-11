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
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 transition-all duration-300">
      <nav
        className={`w-full max-w-5xl rounded-full transition-all duration-300 px-4 sm:px-6 py-2.5 sm:py-3 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-md shadow-slate-900/5"
            : "bg-white/80 backdrop-blur-lg border border-slate-200/70 shadow-xs"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-white shadow-sm shadow-blue-500/30 group-hover:scale-105 transition-transform duration-200">
              <span className="text-sm tracking-tighter">IX</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                Inovix<span className="text-blue-600">.</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-sm font-semibold">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-full transition-colors ${
                location.pathname === "/"
                  ? "text-blue-600 bg-blue-50 font-bold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
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
                    ? "text-blue-600 bg-blue-50 font-bold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {link.name}
                {link.badge && (
                  <span className="px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full bg-blue-100 text-blue-700 border border-blue-200">
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
              className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <Link
              to="/contact"
              className="btn-press inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all duration-200"
            >
              <span>Get Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-full text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Quote
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-3 pt-3 border-t border-slate-200 md:hidden flex flex-col space-y-1.5 pb-2 animate-in fade-in slide-in-from-top-3 duration-200">
            <Link
              to="/"
              onClick={closeMenu}
              className="px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-100 font-semibold"
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className="px-4 py-2 rounded-xl text-slate-700 hover:bg-slate-100 font-semibold flex items-center justify-between"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="px-2 py-0.5 text-[10px] uppercase font-bold rounded-full bg-blue-100 text-blue-700">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-blue-600 font-bold text-white text-sm shadow-md"
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
