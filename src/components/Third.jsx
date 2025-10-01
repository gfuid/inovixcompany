import React from "react";
import { TextScroll } from "../ui/TextScroll"; // Adjust the path as needed

const Third = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 py-16 overflow-hidden">
      {/* Scrolling Text */}
      <TextScroll
        className="font-display text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white opacity-90 gap-6 sm:gap-9"
        text="Innovix • Digital Agency • Innovix • Creative Solutions •"
        default_velocity={1}
      />

      {/* Sub tagline */}
      <div className="text-center mt-10 px-4 sm:px-6 lg:px-8">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">
          We blend <span className="text-purple-400">Creativity</span> with{" "}
          <span className="text-blue-400">Technology</span>.
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
          Our mission is to craft stunning digital experiences that help
          businesses grow, connect, and inspire.
        </p>
      </div>
    </section>
  );
};

export default Third;
