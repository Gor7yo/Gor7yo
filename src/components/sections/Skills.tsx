import { motion } from "framer-motion";
import { skills, softSkills } from "../../data/resume";
import styles from "./Skills.module.css";

export const Skills = () => (
  <section id="skills" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="sectionTitle">
          Technical <span className="textGradient">Skills</span>
        </h2>
        <p className="sectionSub">02 / Skills</p>
      </motion.div>

      <div className={styles.grid}>
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            className={styles.skill}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
          >
            <div className={styles.head}>
              <span className={styles.name} style={{ color: s.color }}>
                {s.name}
              </span>
              <span className={styles.pct}>{s.level}%</span>
            </div>
            <div className={styles.track}>
              <motion.div
                className={styles.bar}
                style={{ background: s.color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.2 + i * 0.08,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className={styles.softWrap}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        {softSkills.map((s) => (
          <span key={s} className={styles.tag}>
            {s}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);
