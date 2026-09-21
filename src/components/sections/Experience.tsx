import { motion } from "framer-motion";
import { experience, education, volunteer } from "../../data/resume";
import styles from "./Experience.module.css";

type Item = {
  company: string;
  role: string;
  period: string;
  points: string[];
};

const Block = ({
  title,
  sub,
  items,
  delay = 0,
}: {
  title: string;
  sub: string;
  items: Item[];
  delay?: number;
}) => (
  <div style={{ marginBottom: 64 }}>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="sectionTitle">{title}</h2>
      <p className="sectionSub">{sub}</p>
    </motion.div>

    <div className={styles.timeline}>
      {items.map((it, i) => (
        <motion.div
          key={it.company + it.period}
          className={styles.item}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            delay: i * 0.1,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className={styles.head}>
            <div>
              <div className={styles.role}>{it.role}</div>
              <div className={styles.company}>@ {it.company}</div>
            </div>
            <span className={styles.period}>{it.period}</span>
          </div>
          <ul className={styles.points}>
            {it.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);

export const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <Block title="Work Experience" sub="03 / Experience" items={experience} />
      <Block
        title="Education"
        sub="04 / Education"
        delay={0.1}
        items={[
          {
            company: education.place,
            role: education.program,
            period: education.period,
            points: [education.desc],
          },
        ]}
      />
    </div>
  </section>
);
