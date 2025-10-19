import React from "react";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black text-white overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 spline-container">
        <iframe
          src="https://my.spline.design/ehciw8thxps58a0i/scene"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D Background"
        ></iframe>
        <div className="pointer-events-none absolute bottom-4 right-4 w-36 h-10 rounded-xl bg-black backdrop-blur-sm"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          We Help Businesses sagar <br />
          <span className="text-blue-500">
            <ReactTyped
              strings={[
                "Build Stunning Websites",
                "Grow with Digital Marketing",
                "Boost Sales with AI",
                "Scale Your Online Presence",
              ]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mb-6">
          A full-service digital agency crafting modern experiences that drive
          real business growth.
        </p>

        <div className="flex gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-medium">
            Get Free Consultation
          </button>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black rounded-xl font-medium">
            Our Services
          </button>
        </div>
      </div>
    </section>
  );
}
