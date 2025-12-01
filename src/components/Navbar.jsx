import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center px-4">
      <nav className="w-full max-w-3xl bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl px-6 py-3 relative">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" onClick={closeMenu}>
              <div className="text-xl font-bold tracking-wide text-white drop-shadow-[0_0_10px_rgba(192,192,192,0.6)]">
                Inovix
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition duration-300">
              Services
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition duration-300">
              Contact
            </Link>
            <Link to="/tools" className="text-gray-300 hover:text-white transition duration-300">
              Tools
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white transition p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl overflow-hidden animate-slideDown">
            <div className="flex flex-col p-4 space-y-3">

              <Link
                to="/"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-center"
              >
                Home
              </Link>

              <Link
                to="/services"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-center"
              >
                Services
              </Link>

              <Link
                to="/about"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-center"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-center"
              >
                Contact
              </Link>

              <Link
                to="/tools"
                onClick={closeMenu}
                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition text-center"
              >
                Tools
              </Link>

            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
