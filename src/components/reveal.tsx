"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "motion/react";
import { Card } from "@/components/ui/card";

// Strong ease-out; content waits for the sidebar, then staggers in.
export const EASE_OUT = [0.23, 1, 0.32, 1] as const;
const BASE_DELAY = 0.24;
const STEP = 0.06;

/** Fade up out of a soft blur. Reduced motion keeps only a quick fade. */
function useReveal(index: number) {
  const reduce = useReducedMotion();
  return {
    initial: reduce
      ? { opacity: 0 }
      : { opacity: 0, transform: "translateY(10px)", filter: "blur(6px)" },
    animate: reduce
      ? { opacity: 1 }
      : { opacity: 1, transform: "translateY(0px)", filter: "blur(0px)" },
    transition: {
      duration: reduce ? 0.2 : 0.45,
      ease: EASE_OUT,
      delay: reduce ? 0 : BASE_DELAY + index * STEP,
    },
  };
}

type RevealProps = Omit<HTMLMotionProps<"div">, "initial" | "animate" | "transition"> & {
  /** Position in the entrance stagger. */
  index: number;
};

export function RevealDiv({ index, ...props }: RevealProps) {
  return <motion.div {...useReveal(index)} {...props} />;
}

const MotionCard = motion.create(Card);

export function RevealCard({ index, ...props }: RevealProps) {
  return <MotionCard {...useReveal(index)} {...props} />;
}
