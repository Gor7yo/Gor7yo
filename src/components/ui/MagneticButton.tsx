import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef } from "react";
import styles from "./MagneticButton.module.css";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "default" | "primary";
  onClick?: () => void;
};

export const MagneticButton = ({ children, href, variant = "default", onClick }: Props) => {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 15, stiffness: 200 });
  const sy = useSpring(y, { damping: 15, stiffness: 200 });

  const move = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const leave = () => { x.set(0); y.set(0); };

  const cls = `${styles.btn} ${variant === "primary" ? styles.primary : ""}`;

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        onMouseMove={move}
        onMouseLeave={leave}
        style={{ x: sx, y: sy }}
        className={cls}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={move}
      onMouseLeave={leave}
      style={{ x: sx, y: sy }}
      className={cls}
    >
      {children}
    </motion.button>
  );
};