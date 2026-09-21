import { motion } from "framer-motion";
import { Folder, ExternalLink } from "lucide-react";
import { TiltCard } from "../ui/TiltCard";
import { GithubIcon } from "../ui/GithubIcon";
import styles from "./Projects.module.css";

const PROJECTS = [
  {
    name: "Pet Projects Collection",
    desc: "A set of personal projects to practice frontend development: UI components, API work, animations.",
    tags: ["React", "TypeScript", "Vite"],
    link: "https://github.com/Gor7yo",
  },
  {
    name: "REST API Service",
    desc: "Backend service with REST API, data processing, and integrations. Optimized queries and logic.",
    tags: ["Node.js", "Nest.js", "REST"],
    link: "https://github.com/Gor7yo",
  },
  {
    name: "Fullstack Web App",
    desc: "Fullstack application with frontend and backend. Architecture design, database, deployment.",
    tags: ["Next.js", "Node.js", "DB"],
    link: "https://github.com/Gor7yo",
  },
  {
    name: "UI Experiments",
    desc: "Experiments with modern UI approaches: animations, 3D, interactive elements.",
    tags: ["React", "Framer Motion", "Three.js"],
    link: "https://github.com/Gor7yo",
  },
];

export const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="sectionTitle">
          Projects & <span className="textGradient">Work</span>
        </h2>
        <p className="sectionSub">06 / Projects</p>
      </motion.div>

      <div className={styles.grid}>
        {PROJECTS.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <TiltCard className={styles.card}>
              <div className={styles.icon}>
                <Folder size={20} />
              </div>
              <div className={styles.name}>{p.name}</div>
              <p className={styles.desc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tags.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                className={styles.link}
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={14} /> GitHub <ExternalLink size={14} />
              </a>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
