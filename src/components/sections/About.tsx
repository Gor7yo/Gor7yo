import { motion } from "framer-motion";
import styles from "./About.module.css";

const STATS = [
  { value: "3+", label: "years commercial" },
  { value: "1 mo", label: "to start" },
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
          I'm a <strong>Fullstack Developer</strong> with 3+ years of
          commercial freelance experience building web applications
          end-to-end, from requirements and architecture to{" "}
          <strong>production deployment</strong>.
          <br />
          <br />I'm strong in{" "}
          <strong>React/Next.js and TypeScript</strong> on the frontend and{" "}
          <strong>Node.js/NestJS with PostgreSQL</strong> on the backend. Used
          to owning projects solo, communicating directly with clients, and
          delivering on deadlines. Looking to join a product team where I can
          grow and take ownership of meaningful features.
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
