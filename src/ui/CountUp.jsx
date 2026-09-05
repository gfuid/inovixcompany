import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
}) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let start = from;
    const end = parseFloat(to.toString().replace(/[^0-9.]/g, ""));
    if (isNaN(end)) {
      setCount(to);
      return;
    }

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const updateCount = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease out quartic
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + (end - start) * easeProgress);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [inView, to, from, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
