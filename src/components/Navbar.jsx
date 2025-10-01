import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger & close icons
import WrapButton from "../ui/WrapButton"; // Adjust relative path as needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black/80 backdrop-blur-lg shadow-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold tracking-wide text-white drop-shadow-[0_0_10px_rgba(192,192,192,0.6)]">
            Inovix
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl shadow-lg space-x-8 text-lg border border-white/10">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-white hover:text-silver-300 hover:drop-shadow-[0_0_10px_#00f7ff] transition font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <WrapButton className="px-6 py-2 rounded-full font-semibold shadow-xl transition-all duration-300 text-white 
              bg-gradient-to-r from-[#1a1a1a] via-[#3a3a3a] to-[#1a1a1a] text-silver-300 border border-gray-600
              hover:from-gray-900 hover:via-silver-600 hover:text-silver-300
              hover:shadow-[0_0_20px_#00f7ff] hover:text-silver-100">
              Get Started
            </WrapButton>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-silver-300 transition"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl shadow-lg rounded-lg mt-3 px-6 py-4 border border-white/10 animate-slideDown">
            {["Home", "Services", "About", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={closeMenu}
                className="block py-2 text-white text-lg hover:text-silver-300 transition"
              >
                {link}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <div className="mt-4">
              <WrapButton
                className="w-full sm:w-auto px-4 sm:px-6 py-1.5 sm:py-2 rounded-full font-medium sm:font-semibold shadow-xl transition-all duration-300 text-white 
                bg-gradient-to-r from-[#1a1a1a] via-[#3a3a3a] to-[#1a1a1a] text-silver-300 border border-gray-600
                hover:from-gray-900 hover:via-silver-600 hover:text-silver-300
                hover:shadow-[0_0_20px_#00f7ff] hover:text-silver-100 text-sm sm:text-base"
              >
                Get Started
              </WrapButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
