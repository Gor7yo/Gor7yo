import { motion } from "framer-motion";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { MagneticButton } from "../ui/MagneticButton";
import { GithubIcon } from "../ui/GithubIcon";
import { profile } from "../../data/resume";
import styles from "./Hero.module.css";

const ROLES = [
  "Frontend Developer",
  "React / TypeScript",
  "Aspiring Fullstack Engineer",
];

const useTypewriter = (words: string[], speed = 80, pause = 1500) => {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const timeout = setTimeout(
      () => {
        if (!del) {
          const next = word.slice(0, text.length + 1);
          setText(next);
          if (next === word) setTimeout(() => setDel(true), pause);
        } else {
          const next = word.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setI((v) => v + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(timeout);
  }, [text, del, i, words, speed, pause]);

  return text;
};

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export const Hero = () => {
  const typed = useTypewriter(ROLES);

  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          <motion.div
            className={styles.badge}
            variants={fade}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className={styles.dot} />
            {profile.status}
          </motion.div>

          <motion.h1
            className={styles.title}
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
          >
            <span>Hi, I'm</span>
            <span className="textGradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            className={styles.role}
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
          >
            {typed}
            <span className={styles.cursor} />
          </motion.div>

          <motion.p
            className={styles.summary}
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
          >
            {profile.summary}
          </motion.p>

          <motion.div
            className={styles.actions}
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
          >
            <MagneticButton href="#projects" variant="primary">
              View Projects <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton href={profile.github}>
              <GithubIcon size={16} /> GitHub
            </MagneticButton>
          </motion.div>

          <motion.div
            className={styles.meta}
            variants={fade}
            initial="hidden"
            animate="show"
            custom={5}
          >
            <div className={styles.metaItem}>
              <MapPin size={14} /> {profile.location}
            </div>
            <div className={styles.metaItem}>
              <Mail size={14} /> {profile.email}
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
};
