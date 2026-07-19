import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent } from "react";

type MagneticButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function MagneticButton({
  children,
  variant = "primary",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, {
    stiffness: 150,
    damping: 12,
  });

  const mouseY = useSpring(y, {
    stiffness: 150,
    damping: 12,
  });

  function handleMove(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.18);
    y.set(offsetY * 0.18);
  }

  function reset() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      style={{
        x: mouseX,
        y: mouseY,
      }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.97 }}
      className={`relative overflow-hidden rounded-2xl px-8 py-4 text-base font-semibold transition-all duration-300 ${
        variant === "primary"
          ? "bg-blue-600 text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)]"
          : "border border-white/10 bg-white/5 text-white backdrop-blur-md"
      }`}
    >
      <motion.div
        className="absolute inset-0 bg-white/10"
        initial={{ x: "-120%" }}
        whileHover={{ x: "120%" }}
        transition={{ duration: 0.7 }}
        style={{
          skewX: "-25deg",
        }}
      />

      <span className="relative z-10">
        {children}
      </span>
    </motion.button>
  );
}