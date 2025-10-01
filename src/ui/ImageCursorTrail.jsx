import React from "react";

const ImageCursorTrail = () => {
  return (
    <section className="relative w-full bg-black text-white min-h-screen overflow-hidden">
      {/* Cursor Trail Effect (only inside this section) */}
      <ImageCursorTrail
        items={["/d.png", "/image.png"]} // dono ek sath pass kar diye
        maxNumberOfImages={6}
        distance={25}
        imgClass="sm:w-40 w-28 sm:h-48 h-36"
        className="absolute inset-0 z-0" // section ke andar hi bind hoga
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-24 px-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-8">
          Our Creative Work ✨
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          A glimpse of projects where we combined design, strategy, and
          technology to deliver unique digital experiences.
        </p>
      </div>
    </section>
  );
};

export default ImageCursorTrail;
