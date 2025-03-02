import { useEffect, useState } from "react";
import { animate } from "motion/react";

export function useCounter(value: number, duration = 0.5, delay = 0) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: duration,
      delay: delay,
      ease: "easeOut",
      onUpdate: (value) => setDisplayValue(value),
    });

    return () => controls.stop();
  }, [value, duration, delay, displayValue]);

  return displayValue;
}
