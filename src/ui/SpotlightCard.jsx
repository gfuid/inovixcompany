import React, { useRef, useState } from "react";

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(0, 212, 255, 0.15)",
  borderSpotlightColor = "rgba(0, 212, 255, 0.4)",
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden transition-all duration-300 ${className}`}
    >
      {/* Background Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 65%)`,
        }}
      />

      {/* Border Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[inherit]"
        style={{
          opacity,
          border: "1px solid transparent",
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, ${borderSpotlightColor}, transparent 70%) border-box`,
          WebkitMask:
            "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
