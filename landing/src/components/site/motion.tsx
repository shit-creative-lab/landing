import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

/* ------------------------------------------------------------------
   Editorial reveal primitives — sober scroll-in fade + slide.
   Used across all sections for a consistent, restrained motion language.
   Honors prefers-reduced-motion (Framer Motion does this automatically
   for whileInView when the OS setting is on).
------------------------------------------------------------------ */

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
};

/* Stagger container — children animate in sequence */
export const staggerParent: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

type RevealProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  /** delay in seconds */
  delay?: number;
  /** vertical travel in px */
  y?: number;
};

/** Single element that fades + slides up once when scrolled into view. */
export const Reveal = ({ children, delay = 0, y = 28, ...rest }: RevealProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-12% 0px" }}
    transition={{ duration: 0.7, ease: EASE, delay }}
    {...rest}
  >
    {children}
  </motion.div>
);

/** Wrapper that staggers its <RevealItem> children. */
export const RevealGroup = ({ children, ...rest }: HTMLMotionProps<"div"> & { children: ReactNode }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-10% 0px" }}
    variants={staggerParent}
    {...rest}
  >
    {children}
  </motion.div>
);

/** Child of <RevealGroup>. */
export const RevealItem = ({ children, ...rest }: HTMLMotionProps<"div"> & { children: ReactNode }) => (
  <motion.div variants={fadeUp} {...rest}>
    {children}
  </motion.div>
);

/** Line-by-line masked text reveal for big editorial headlines. */
export const MaskLine = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      whileInView={{ y: "0%" }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export { motion };
