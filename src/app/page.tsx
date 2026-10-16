
"use client";

import { motion } from "motion/react";

import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Code2,
  Globe,
} from "lucide-react";


const projects = [
  {
    number: "01",
    name: "PA-SAFE",
    category: "IoT / BACKEND / EMBEDDED SYSTEMS",
    description:
      "An intelligent vehicle safety system combining accident detection, driver monitoring, GPS tracking and emergency alerts.",
    tags: ["Node.js", "MQTT", "SQLite", "Raspberry Pi"],
    theme: "vehicle",
    outcome: "2nd place · IIT Bombay Techfest challenge",
    href: "",
  },
  {
    number: "02",
    name: "Exoplanet Detection",
    category: "AI / MACHINE LEARNING / ASTRONOMY",
    description:
      "A data pipeline exploring deep learning for exoplanet candidate detection using TESS and Kepler light curves.",
    tags: ["Python", "Lightkurve", "CNN", "Transformer"],
    theme: "space",
    outcome: "TESS / Kepler data pipeline",
    href: "",
  },
  {
    number: "03",
    name: "Crop Disease Detection",
    category: "COMPUTER VISION / DEEP LEARNING",
    description:
      "A computer vision project using transfer learning to classify plant diseases from leaf imagery.",
    tags: ["Python", "PyTorch", "ResNet50"],
    theme: "leaf",
    outcome: "Applied machine learning",
    href: "",
  },
  {
    number: "04",
    name: "Study Tracker",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A productivity application designed to track study activity and make progress easier to understand.",
    tags: ["React", "Supabase"],
    theme: "dashboard",
    outcome: "Personal productivity tool",
    href: "",
  },
];

const skills = [
  { name: "Languages", detail: "JavaScript · Python · Java · SQL" },
  { name: "Web & backend", detail: "React · Node.js · Express · REST APIs" },
  { name: "AI & data", detail: "PyTorch · ResNet50 · CNNs · Lightkurve" },
  { name: "Systems & tools", detail: "Git · SQLite · MQTT · Supabase" },
];


function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}


function ProjectArtwork({ theme }: { theme: string }) {
  if (theme === "vehicle") {
    return (
      <div className="artwork artwork-vehicle">
        <div className="vehicle-orbit">
          <div className="vehicle-core">
            <span>PA</span>
            <span>SAFE</span>
          </div>
        </div>
        <span className="art-label">GPS / SYSTEM ACTIVE</span>
        <span className="art-corner">01—IOT</span>
      </div>
    );
  }

  if (theme === "space") {
    return (
      <div className="artwork artwork-space">
        <div className="space-orbit orbit-a" />
        <div className="space-orbit orbit-b" />
        <div className="space-planet" />
        <span className="art-label">SIGNAL / 002</span>
        <span className="art-corner">TESS × KEPLER</span>
      </div>
    );
  }

  if (theme === "leaf") {
    return (
      <div className="artwork artwork-leaf">
        <div className="leaf-symbol">✳</div>
        <span className="art-label">COMPUTER VISION</span>
        <span className="art-corner">IMAGE → PREDICTION</span>
      </div>
    );
  }

  return (
    <div className="artwork artwork-dashboard">
      <div className="dashboard-window">
        <div className="dashboard-dots">
          <i />
          <i />
          <i />
        </div>
        <div className="dashboard-content">
          <span className="dashboard-line line-large" />
          <span className="dashboard-line line-medium" />
          <div className="dashboard-progress">
            <span />
          </div>
          <span className="dashboard-line line-small" />
        </div>
      </div>
      <span className="art-label">DAILY / PROGRESS</span>
    </div>
  );
}

export default function Home() {
  

  return (
    <main id="home">
      <header className="site-header">
        <a className="logo" href="#home" aria-label="Ashok home">
          a<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="availability" href="#contact">
          <span className="status-dot" />
          Open to opportunities
        </a>
      </header>

      <section className="hero section-shell">
        <Reveal>
          <div className="eyebrow">
            <span className="eyebrow-line" />
            COMPUTER SCIENCE · SOFTWARE ENGINEERING
            <span className="hero-edition">PORTFOLIO / 2026</span>
          </div>
        </Reveal>

        <div className="hero-heading">
          
<motion.h1
  initial={{ opacity: 0, y: 45 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    ease: [0.22, 1, 0.36, 1],
  }}
>

            I build
            <br />
            things that <span className="accent">work.</span>
          </motion.h1>
        </div>

        <Reveal delay={0.2}>
          <div className="hero-bottom">
            <p className="hero-description">
              I'm Ashok, a computer science engineer interested in
              building useful software, intelligent systems and
              products that solve real problems.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a
                className="button button-outline"
                href="/resume.pdf"
                download
              >
                Download résumé <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </Reveal>

        <div className="hero-footer">
          <span>BASED IN INDIA</span>
          <span>ENGINEERING · AI · PRODUCT</span>
          <a href="#work">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="intro-band">
        <div className="section-shell intro-grid">
          <Reveal>
            <p className="section-kicker">A LITTLE ABOUT MY APPROACH</p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="intro-statement">
              I like turning <span>ambitious ideas</span> into{" "}
              <span>working systems.</span> I care about understanding
              the problem, building thoughtfully and learning from
              what happens next.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="work-section section-shell" id="work">
        <Reveal>
          <div className="section-heading">
            <div>
              <p className="section-kicker">01 / SELECTED WORK</p>
              <h2>
                Built with
                <br />
                <span className="accent">intent.</span>
              </h2>
            </div>
            <p className="section-aside">
              Engineering projects, experiments and ideas brought
              closer to reality.
            </p>
          </div>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index % 2 ? 0.1 : 0}>
              <article className="project-card">
                <div className="project-meta">
                  <span>{project.number} / 04</span>
                  <span>{project.category}</span>
                </div>

                <ProjectArtwork theme={project.theme} />

                <div className="project-info">
                  <div className="project-title">
                    <h3>{project.name}</h3>
                    {project.href ? (
                      <a
                        className="project-arrow"
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.name}`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    ) : (
                      <span className="project-arrow muted-arrow">
                        <ArrowUpRight size={20} />
                      </span>
                    )}
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <p className="project-outcome">{project.outcome}</p>

                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

{/* FEATURED CASE STUDY */}
<section className="featured-section section-padding" id="featured-work">
  <div className="section-container">
    <Reveal>
      <div className="section-heading">
        <p className="eyebrow">01 / FEATURED CASE STUDY</p>
        <h2>
          Engineering for
          <br />
          <span className="text-accent">real-world impact.</span>
        </h2>
      </div>
    </Reveal>

    <Reveal delay={0.1}>
      <article className="featured-card">
        <div className="featured-topline">
          <span className="featured-label">FLAGSHIP PROJECT</span>
          <span className="featured-award">
            2ND PLACE · IIT BOMBAY TECHFEST CHALLENGE
          </span>
        </div>

        <div className="featured-main">
          <div className="featured-copy">
            <p className="eyebrow">IOT / BACKEND / EMBEDDED SYSTEMS</p>

            <h3>PA-SAFE</h3>

            <p className="featured-description">
              An intelligent vehicle safety and accident-alert system
              designed to connect vehicle monitoring, location tracking,
              and emergency response in one integrated platform.
            </p>

            <div className="featured-tags">
              {[
                "Node.js",
                "Express",
                "MQTT",
                "SQLite",
                "Raspberry Pi",
                "GPS / GSM",
              ].map((tag) => (
                <span key={tag} className="featured-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="featured-actions">
              <a
                className="button button-primary"
                href="https://github.com/ashok8-c/pasafe"
                target="_blank"
                rel="noreferrer"
              >
                Explore repository <ArrowUpRight size={17} />
              </a>

              <a
                className="featured-text-link"
                href="https://pasafe.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View project site <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="featured-visual" aria-label="PA-SAFE system overview">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-center">
              <span className="visual-status">
                <span className="status-dot" />
                SYSTEM OVERVIEW
              </span>
              <div className="visual-symbol">
                <Code2 size={34} strokeWidth={1.4} />
              </div>
              <p>PA-SAFE</p>
              <span className="visual-subtitle">VEHICLE SAFETY NETWORK</span>
            </div>

            <div className="architecture-node node-top">
              <span>01</span>
              <div>
                <strong>DETECTION</strong>
                <small>Impact · Alcohol</small>
              </div>
            </div>

            <div className="architecture-node node-right">
              <span>02</span>
              <div>
                <strong>CONNECTIVITY</strong>
                <small>GPS · GSM · MQTT</small>
              </div>
            </div>

            <div className="architecture-node node-bottom">
              <span>03</span>
              <div>
                <strong>RESPONSE</strong>
                <small>Alerts · Tracking</small>
              </div>
            </div>
          </div>
        </div>

        <div className="featured-divider" />

        <div className="featured-details">
          <div className="featured-detail">
            <span className="eyebrow">THE CHALLENGE</span>
            <p>
              Vehicle safety systems need reliable ways to detect incidents
              and communicate useful information when a driver may need help.
            </p>
          </div>

          <div className="featured-detail">
            <span className="eyebrow">THE APPROACH</span>
            <p>
              Integrate sensor inputs, GPS and GSM communication, and a
              backend service using MQTT to connect monitoring with alerts.
            </p>
          </div>

          <div className="featured-detail">
            <span className="eyebrow">MY CONTRIBUTION</span>
            <p>
              As team leader, contributed to system architecture, firmware
              logic, hardware-software integration, IoT pipeline development,
              debugging, and market research.
            </p>
          </div>
        </div>
      </article>
    </Reveal>
  </div>
</section>

      <section className="about-band" id="about">
        <div className="section-shell about-grid">
          <Reveal>
            <p className="section-kicker">02 / THE TOOLKIT</p>
            <h2>
              Curious
              <br />
              by nature.
              <br />
              <span className="accent">Technical</span>
              <br />
              by practice.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="about-content">
              <p className="about-description">
                I enjoy moving between layers of a system — writing
                application logic, working with data, exploring AI
                models and understanding how everything fits together.
              </p>

              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill-row" key={skill.name}>
                    <span className="skill-index">0{index + 1}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-detail">{skill.detail}</span>
                  </div>
                ))}
              </div>

              <p className="skills-note">
                The technologies shown reflect my current toolkit.
                Project details will demonstrate how I use them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <Reveal>
          <p className="section-kicker">03 / WHAT'S NEXT?</p>
          <h2>
            Have a good
            <br />
            problem? <span className="accent">Let's talk.</span>
          </h2>

          <p className="contact-description">
            Open to conversations about software engineering,
            internships, backend systems, applied AI and interesting
            technical challenges.
          </p>

          <a className="button button-dark" href="mailto:YOUR_EMAIL">
            Get in touch <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </section>

      <footer className="site-footer">
        <a className="logo" href="#home">
          a<span>.</span>
        </a>

        <p>DESIGNED WITH INTENT. BUILT TO EVOLVE.</p>

        <div className="social-links">
          
<a
  href="https://github.com/"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
>
  <Code2 size={18} />
</a>

         
<a
  href="https://linkedin.com/"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
>
  <Globe size={18} />
</a>

          <a href="mailto:YOUR_EMAIL" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>

        <a className="back-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}
