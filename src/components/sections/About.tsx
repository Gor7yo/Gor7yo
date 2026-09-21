import { motion } from "framer-motion";
import styles from "./About.module.css";

const STATS = [
  { value: "3+", label: "years coding" },
  { value: "6+", label: "tech in stack" },
  { value: "3", label: "languages" },
  { value: "100%", label: "ready to relocate" },
];

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export const About = () => (
  <section id="about" className="section">
    <div className="container">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="sectionTitle">
          About <span className="textGradient">Me</span>
        </h2>
        <p className="sectionSub">01 / About</p>
      </motion.div>

      <div className={styles.grid}>
        <motion.p
          className={styles.text}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          I'm a <strong>Junior Frontend Developer</strong> actively growing
          toward fullstack development. I have hands-on experience building pet
          projects and working commercially with{" "}
          <strong>REST APIs, databases, and backend logic optimization</strong>.
          <br />
          <br />I work with{" "}
          <strong>
            JavaScript, TypeScript, React, Node.js, Nest.js, and Next.js
          </strong>
          . I pick up new technologies quickly, pay attention to detail, and
          focus on results. Ready to relocate and work in a team.
        </motion.p>

        <motion.div
          className={styles.stats}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
