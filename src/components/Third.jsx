import React from "react";
import { TextScroll } from "../ui/TextScroll";

const Third = () => {
  return (
    <section className="relative w-full bg-[#040407] py-14 overflow-hidden border-b border-white/5">
      {/* Infinite Scrolling Text Banner */}
      <TextScroll
        className="font-display text-center text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white/90 gap-6 sm:gap-10"
        text="Inovix • India's Most Affordable Agency • Sub-Second Web Apps • Custom CRMs • Zero Hidden Markups •"
        default_velocity={1}
      />
    </section>
  );
};

export default Third;
