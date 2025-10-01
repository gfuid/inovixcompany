"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="text-blue-500">Start Your Project?</span>
        </h2>
        <p className="text-gray-300 mb-12">
          Get in touch with us today for a free consultation. Let's craft a
          digital strategy that grows your business.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="mailto:contact@youragency.com"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium"
          >
            Get a Quote
          </a>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-xl font-medium"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
