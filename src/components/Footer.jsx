"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold text-white mb-4">YourAgency</h2>
          <p className="text-gray-400">
            Crafting modern digital experiences for businesses worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2 hover:text-blue-500 cursor-pointer">Home</li>
            <li className="mb-2 hover:text-blue-500 cursor-pointer">Services</li>
            <li className="mb-2 hover:text-blue-500 cursor-pointer">Portfolio</li>
            <li className="mb-2 hover:text-blue-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-blue-500 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-blue-300 transition-colors" />
            </a>
          </div>
          <p>Email: contact@youragency.com</p>
          <p>Phone: +91-XXXXXXXXXX</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} YourAgency. All rights reserved.
      </div>
    </footer>
  );
}
