"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type FadeUpProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  travel?: number;
  duration?: number;
  once?: boolean;
  onView?: boolean;
};

export function FadeUp({
  children,
  delay = 0,
  travel = 8,
  duration = 0.4,
  once = true,
  onView = true,
  className,
  ...rest
}: FadeUpProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const initial = { opacity: 0, y: travel };
  const animate = { opacity: 1, y: 0 };
  const transition = { duration, delay, ease: [0.22, 1, 0.36, 1] as const };

  if (onView) {
    return (
      <motion.div
        initial={initial}
        whileInView={animate}
        viewport={{ once, margin: "-80px" }}
        transition={transition}
        className={className}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
