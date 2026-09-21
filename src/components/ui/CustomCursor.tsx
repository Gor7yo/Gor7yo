import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import styles from "./CustomCursor.module.css";

export const CustomCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dotX = useSpring(x, { damping: 30, stiffness: 700 });
  const dotY = useSpring(y, { damping: 30, stiffness: 700 });
  const trailX = useSpring(x, { damping: 20, stiffness: 200 });
  const trailY = useSpring(y, { damping: 20, stiffness: 200 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <>
      <motion.div className={styles.trail} style={{ x: trailX, y: trailY }} />
      <motion.div className={styles.dot} style={{ x: dotX, y: dotY }} />
    </>
  );
};
