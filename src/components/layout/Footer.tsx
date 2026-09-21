import { Mail, Phone } from "lucide-react";
import { GithubIcon } from "../ui/GithubIcon";
import { profile } from "../../data/resume";
import styles from "./Footer.module.css";

export const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.inner}>
        <span>© {new Date().getFullYear()} {profile.name}. Built with React + Three.js.</span>
        <div className={styles.socials}>
          <a className={styles.social} href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
          <a className={styles.social} href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={16} />
          </a>
          <a className={styles.social} href={`tel:${profile.phone.replace(/\s/g, "")}`} aria-label="Phone">
            <Phone size={16} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);