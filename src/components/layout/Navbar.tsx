import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const LINKS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.div className={styles.progress} style={{ scaleX }} />
      <nav className={styles.nav}>
        <span className={styles.logo}>&lt;GS /&gt;</span>
        <div className={styles.links}>
          {LINKS.map((l) => (
            <button
              key={l.id}
              className={`${styles.link} ${active === l.id ? styles.linkActive : ""}`}
              onClick={() => scrollTo(l.id)}
            >
              {active === l.id && (
                <motion.span
                  layoutId="nav-pill"
                  className={styles.pill}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
};