import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon } from "../ui/GithubIcon";
import { languages, profile } from "../../data/resume";
import styles from "./Contact.module.css";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const CONTACTS = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: <GithubIcon size={18} />,
    label: "GitHub",
    value: "github.com/Gor7yo",
    href: profile.github,
  },
  { icon: <MapPin size={18} />, label: "Location", value: profile.location },
];

export const Contact = () => (
  <section id="contact" className="section">
    <div className="container">
      <motion.div
        variants={fade}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h2 className="sectionTitle">
          Get in <span className="textGradient">Touch</span>
        </h2>
        <p className="sectionSub">07 / Contact</p>
      </motion.div>

      <div className={styles.grid}>
        <motion.div
          className={styles.list}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {CONTACTS.map((c) => {
            const inner = (
              <>
                <div className={styles.icon}>{c.icon}</div>
                <div>
                  <div className={styles.label}>{c.label}</div>
                  <div className={styles.value}>{c.value}</div>
                </div>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                className={styles.row}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className={styles.row}>
                {inner}
              </div>
            );
          })}
        </motion.div>

        <motion.div
          className={styles.langBlock}
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className={styles.langTitle}>Languages</div>
          {languages.map((l, i) => (
            <div key={l.lang} className={styles.lang}>
              <div className={styles.langHead}>
                <span>{l.lang}</span>
                <span className={styles.langLevel}>{l.level}</span>
              </div>
              <div className={styles.track}>
                <motion.div
                  className={styles.bar}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${l.pct}%` }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);
