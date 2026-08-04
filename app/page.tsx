"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Award,
  Braces,
  Code2,
  Database,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Menu,
  Network,
  Sparkles,
  X,
  type LucideIcon,
} from "lucide-react";

const roles = ["AI & Data Science Engineer", "Backend Developer", "Machine Learning Engineer"];

const abilities: [string, LucideIcon, string[]][] = [
  ["Programming", Braces, ["Java", "Python", "SQL"]],
  ["Backend systems", Code2, ["REST APIs", "Node.js", "Express.js"]],
  ["Data platforms", Database, ["PostgreSQL", "MySQL", "Supabase", "Power BI"]],
  ["Intelligent products", Sparkles, ["Machine Learning", "Deep Learning", "AI Agents", "EfficientNet"]],
];

const links = {
  email: "mailto:karthikkarthik05421@gmail.com",
  github: "https://github.com/karthikreddy06/SkillMatch-V3",
  linkedin: "https://www.linkedin.com",
  resume: "/Karthik_Reddy_GraduateEngineer.pdf",
};

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

function Mark({ children }: { children: ReactNode }) {
  return <p className="mark"><i /> {children}</p>;
}

function ProductScreen() {
  return (
    <div className="screen">
      <header>
        <b>skillmatch</b>
        <span>Overview</span>
        <span>Roles</span>
        <span>Messages</span>
        <i />
      </header>
      <section>
        <aside>
          <small>WORKSPACE</small>
          <b>Dashboard</b>
          <b>Applications</b>
          <b>Messages</b>
          <b>Settings</b>
        </aside>
        <article>
          <h5>Good morning, Karthik</h5>
          <div className="metrics">
            <div><b>24</b><small>Applications</small></div>
            <div><b>08</b><small>Interviews</small></div>
            <div><b>12</b><small>New matches</small></div>
          </div>
          <p>Recent activity</p>
          {[
            "Backend Engineer · In review",
            "Data Analyst · Interview scheduled",
            "Java Developer · New message",
          ].map((value) => (
            <div className="row" key={value}>
              <i />
              {value}
              <span>Open</span>
            </div>
          ))}
        </article>
      </section>
    </div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 110, damping: 25 });
  const [role, setRole] = useState(0);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setRole((index) => (index + 1) % roles.length), 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <main>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="texture" />
      <div className="orb orb1" />
      <div className="orb orb2" />

      <header className="nav">
        <a href="#top" className="brand">KR<span> / portfolio</span></a>
        <div className={menu ? "navlist active" : "navlist"}>
          {[
            ["Profile", "#profile"],
            ["Capabilities", "#capabilities"],
            ["Experience", "#experience"],
            ["Work", "#work"],
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </div>
        <a className="navbutton" href="#contact">Contact <ArrowUpRight size={14} /></a>
        <button className="menubutton" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero wrap" id="top">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Mark>Available for thoughtful engineering teams</Mark>
          <h1>I build software<br />that feels <em>considered.</em></h1>
          <p className="changing">Mukkamalla Karthik Reddy <span>—</span> <b key={role}>{roles[role]}</b></p>
          <p className="summary">Backend systems, intelligent products, and data-driven decisions—brought together with a clear eye for the people on the other side of the screen.</p>
          <div className="hero-actions">
            <a href="#work" className="dark-btn">Selected work <ArrowDownRight size={16} /></a>
            <a href={links.resume} download className="text-btn">Download résumé <Download size={15} /></a>
          </div>
          <div className="hero-meta">
            <span><b>8.27</b> CGPA</span>
            <span><b>2026</b> B.Tech, AI & DS</span>
            <span><b>01</b> Current internship</span>
          </div>
        </motion.div>

        <motion.div className="hero-portrait" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.12 }}>
          <div className="portrait-back" />
          <div className="portrait-photo">
            <Image src="/karthik-reddy.jpeg" alt="Mukkamalla Karthik Reddy" fill priority sizes="(max-width:760px) 82vw, 500px" />
          </div>
          <div className="portrait-caption">
            <span>01 / 06</span>
            <p>Engineering with<br />care and curiosity.</p>
          </div>
          <div className="portrait-chip">BLP Industry.AI <i /></div>
        </motion.div>
      </section>

      <section className="statement">
        <div className="wrap">
          <span>THE PRACTICE</span>
          <h2>Make complexity <em>quiet.</em></h2>
          <p>Reliable systems are rarely loud.</p>
        </div>
      </section>

      <section className="wrap profile" id="profile">
        <motion.div className="aside-title" {...fade}>
          <Mark>01 / Profile</Mark>
          <h2>More than a<br /><em>toolkit.</em></h2>
        </motion.div>

        <div className="profile-body">
          <motion.p className="profile-lead" {...fade}>
            I&apos;m an AI & Data Science engineer who enjoys translating fuzzy challenges into clear, dependable systems.
          </motion.p>

          <motion.div className="profile-notes" {...fade}>
            <article>
              <GraduationCap />
              <div>
                <small>WHAT I VALUE</small>
                <h3>Clarity earns trust.</h3>
                <p>Good engineering starts with an understandable problem and ends with an experience that works simply.</p>
              </div>
            </article>
            <article>
              <Network />
              <div>
                <small>WHAT I&apos;M BUILDING TOWARD</small>
                <h3>Software with staying power.</h3>
                <p>I&apos;m drawn to ambitious teams that value craft, technical depth, and meaningful outcomes.</p>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      <section className="wrap capabilities" id="capabilities">
        <motion.div className="section-head" {...fade}>
          <Mark>02 / Capabilities</Mark>
          <h2>A focused set of<br />ways to <em>contribute.</em></h2>
        </motion.div>

        <div className="ability-list">
          {abilities.map(([name, Icon, items], index) => (
            <motion.article {...fade} transition={{ delay: index * 0.07 }} key={name}>
              <div className="ability-title">
                <span>0{index + 1}</span>
                <span>ICON</span>
                <h3>{name}</h3>
              </div>
              <div>
                {items.map((item) => (
                  <button key={`${name}-${item}`} title={item}>
                    {item}
                    <i />
                  </button>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="wrap">
          <motion.div className="section-head ex-head" {...fade}>
            <Mark>03 / Experience</Mark>
            <h2>Learning in the<br /><em>real world.</em></h2>
          </motion.div>

          <motion.div className="vertical-timeline" {...fade}>
            <div className="time">
              <span>JUL 2026</span>
              <i />
              <span>NOW</span>
            </div>
            <article>
              <div className="company">B<span>.</span></div>
              <div>
                <small>BACKEND DEVELOPER INTERN</small>
                <h3>BLP Industry.AI</h3>
                <p>Building backend foundations for industrial AI solutions and data-driven platforms.</p>
                <ul>
                  <li>Engineer backend microservices and RESTful API endpoints.</li>
                  <li>Design and optimize relational database schemas and queries.</li>
                  <li>Collaborate across teams to debug workflows and maintain stable releases.</li>
                </ul>
                <div className="caps">
                  <span>JAVA</span>
                  <span>PYTHON</span>
                  <span>SQL</span>
                  <span>REST APIs</span>
                </div>
              </div>
            </article>
          </motion.div>
        </div>
      </section>

      <section className="wrap feature-project" id="work">
        <motion.div className="project-intro" {...fade}>
          <Mark>04 / Featured project</Mark>
          <h2>SkillMatch<span>V3</span></h2>
          <p>A full-stack job-matching platform that brings job postings, candidate applications, and messaging into one connected experience.</p>
        </motion.div>

        <motion.div className="product-stage" {...fade}>
          <div className="project-detail">
            <span>THE SYSTEM</span>
            <h3>Where opportunity<br />gets <em>organized.</em></h3>
            <p>Designed around a scalable backend architecture, secure authentication, and a normalized PostgreSQL data model.</p>
            <div className="benefits">
              <p><i /> Employer and candidate dashboards</p>
              <p><i /> Job, application & messaging workflows</p>
              <p><i /> Token-based authentication</p>
            </div>
            <div className="project-links">
              <a href={links.github} target="_blank"><Github size={16} /> View repository</a>
              <a href="#contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
            </div>
          </div>

          <div className="devices">
            <div className="laptop"><ProductScreen /></div>
            <div className="phone">
              <b>skillmatch</b>
              <span />
              <p>Active applications</p>
              <div><strong>Backend Engineer</strong><small>In review</small></div>
              <div><strong>New matches</strong><small>12 roles this week</small></div>
            </div>
          </div>
        </motion.div>

        <motion.div className="architecture" {...fade}>
          <div><small>BACKEND</small><b>Node.js + Express</b></div>
          <i />
          <div><small>DATABASE</small><b>Supabase + PostgreSQL</b></div>
          <i />
          <div><small>INTERFACE</small><b>RESTful APIs</b></div>
        </motion.div>
      </section>

      <section className="wrap credentials">
        <motion.div className="section-head" {...fade}>
          <Mark>05 / Credentials</Mark>
          <h2>Learning, made<br /><em>intentional.</em></h2>
        </motion.div>

        <div className="credential-list">
          {[
            ["OCI", "Oracle Generative AI Professional", "Oracle"],
            ["JAVA 17", "Oracle Java SE 17 Developer", "Oracle"],
            ["PY", "Python for Data Science & Machine Learning", "LinkedIn Learning"],
          ].map(([code, title, org], index) => (
            <motion.article {...fade} transition={{ delay: index * 0.06 }} key={code}>
              <span>{code}</span>
              <div>
                <small>{org} · CERTIFICATION 0{index + 1}</small>
                <h3>{title}</h3>
              </div>
              <Award />
            </motion.article>
          ))}
        </div>

        <motion.div className="milestones" {...fade}>
          <div>
            <Mark>Outside the system</Mark>
            <h3>Momentum comes<br />from practice.</h3>
          </div>
          <div>
            {[
              ["2024", "College Fest Organizing Team", "Coordinated cross-functional logistics for a high-attendance campus event."],
              ["ONGOING", "Problem solving", "Strengthening technical foundations through hands-on work."],
              ["DAILY", "Continuous learning", "Exploring backend systems, data, and intelligent automation."],
            ].map(([date, title, body]) => (
              <article key={title}>
                <span>{date}</span>
                <h4>{title}</h4>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="contact" id="contact">
        <div className="wrap contact-grid">
          <motion.div {...fade}>
            <Mark>06 / Contact</Mark>
            <h2>Let&apos;s build<br />what&apos;s <em>next.</em></h2>
          </motion.div>

          <motion.div className="contact-side" {...fade}>
            <p>If there&apos;s a meaningful problem to solve, I&apos;d be glad to start a conversation.</p>
            <a className="mail-link" href={links.email}>karthikkarthik05421@gmail.com <ArrowUpRight /></a>
            <div>
              <a href={links.github} target="_blank"><Github /> GitHub</a>
              <a href={links.linkedin} target="_blank"><Linkedin /> LinkedIn</a>
              <a href={links.resume} download><Download /> Résumé</a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="wrap">
        <a className="brand" href="#top">KR<span> / portfolio</span></a>
        <p>© 2026 Mukkamalla Karthik Reddy</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
