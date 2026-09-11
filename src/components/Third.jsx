import React from "react";
import { TextScroll } from "../ui/TextScroll";

const Third = () => {
  return (
    <section className="relative w-full bg-slate-950 py-12 sm:py-14 overflow-hidden border-y border-slate-800">
      {/* Infinite Scrolling Text Banner */}
      <TextScroll
        className="font-display text-center text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-white gap-6 sm:gap-10"
        text="Inovix • India's Most Affordable Agency • Sub-Second Web Apps • Custom CRMs • Zero Hidden Markups •"
        default_velocity={1}
      />
    </section>
  );
};

export default Third;
