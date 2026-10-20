
"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y: 48,
              scale: 0.985,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 1,
        delay: shouldReduceMotion ? 0 : delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}
