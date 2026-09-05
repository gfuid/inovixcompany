import React from "react";

export default function BorderBeam({
  size = 250,
  duration = 8,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "#00D4FF",
  colorTo = "#6366F1",
  delay = 0,
  className = "",
}) {
  return (
    <div
      style={{
        "--size": `${size}px`,
        "--duration": `${duration}s`,
        "--anchor": `${anchor}%`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `-${delay}s`,
      }}
      className={`pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] ${className}`}
    >
      <div
        className="absolute aspect-square w-[var(--size)] [animation:border-beam_var(--duration)_infinite_linear] [animation-delay:var(--delay)] [background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]"
      />
    </div>
  );
}
