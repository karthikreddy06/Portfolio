"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
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
  Sun,
  Moon,
  X,
  Brain,
  Cloud,
  type LucideIcon,
} from "lucide-react";

interface CaseStudy {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  tech: string[];
  github: string;
  challenge: string;
  solution: string;
  workflow: { step: string; name: string }[];
  features: string[];
  decisions: string[];
}

const roles = ["AI & Data Science Engineer", "Backend Developer", "Machine Learning Engineer"];

const abilities: [string, LucideIcon, string[]][] = [
  ["Programming", Braces, ["Python", "Java", "C++", "SQL"]],
  ["Backend Engineering", Code2, ["Django", "REST APIs", "PostgreSQL", "MySQL"]],
  ["AI & Machine Learning", Brain, ["Scikit-learn", "PyTorch", "Deep Learning", "Machine Learning"]],
  ["Data & Analytics", Database, ["Pandas", "NumPy", "Power BI", "Excel"]],
  ["Cloud & DevOps", Cloud, ["Git", "GitHub", "Docker", "AWS"]],
  ["Development", Network, ["React", "TypeScript", "APIs", "System Design"]],
];

const caseStudies: CaseStudy[] = [
  {
    id: "skillmatch",
    number: "01",
    name: "SkillMatch V3",
    subtitle: "Full-Stack Job Matching Platform",
    description: "A full-stack job-matching platform that brings job postings, candidate applications, and messaging into one connected experience.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Supabase", "REST APIs"],
    github: "https://github.com/karthikreddy06/SkillMatchV3",
    challenge: "Fragmented connections between employers and job candidates lead to lost communication and inefficient application tracking. Existing solutions often lack a cohesive workspace combining discovery, messaging, and application management.",
    solution: "Built a unified portal featuring dedicated dashboards for candidates and employers. Secure authentication protects application lifecycles, and a clean interface keeps messaging and job applications organized in one reliable API-driven system.",
    workflow: [
      { step: "01", name: "User Login" },
      { step: "02", name: "Dashboard Routing" },
      { step: "03", name: "API & Auth Validation" },
      { step: "04", name: "PostgreSQL Data Fetch" },
      { step: "05", name: "Interface Render" }
    ],
    features: [
      "Job discovery with key details like role, requirements, and status.",
      "Candidate applications tracking lifecycle stages from review to decision.",
      "Employer dashboards to manage job listings, review applicants, and update status.",
      "Integrated messaging system enabling direct communications.",
      "Secure token-based authentication to protect user accounts and data."
    ],
    decisions: [
      "Designed a normalized relational database schema in Supabase (PostgreSQL) to ensure referential integrity for employers, postings, applications, and messages.",
      "Implemented secure token-based authentication and structured application-state workflows to manage candidate application lifecycles safely.",
      "Structured isolated configuration environments to support scalable and clean production deployments."
    ]
  },
  {
    id: "study-assistant",
    number: "02",
    name: "AI Study Assistant",
    subtitle: "Intelligent Learning Companion",
    description: "An AI-powered study companion that helps students learn more effectively through automated summarization, interactive flashcards, and intelligent questioning using LLMs.",
    tech: ["Python", "LangChain", "OpenAI API", "Vector Databases", "ChromaDB", "Streamlit"],
    github: "https://github.com/karthikreddy06/AI-Study-Assistant",
    challenge: "Students are often overwhelmed by dense textbooks and study materials, making it difficult to extract key insights, generate study aids, or receive immediate, context-aware answers to questions.",
    solution: "Engineered a system that processes learning materials using Large Language Models and semantic search. It extracts key concepts to automatically generate summary notes, interactive flashcards, and a Q&A chat interface.",
    workflow: [
      { step: "01", name: "File Upload" },
      { step: "02", name: "Text Chunking & Embeddings" },
      { step: "03", name: "Vector Store (ChromaDB)" },
      { step: "04", name: "LangChain RAG Pipeline" },
      { step: "05", name: "Summary & Q&A Generation" }
    ],
    features: [
      "Automated text summarization extracting core definitions and structural summaries.",
      "Dynamic flashcard generation to facilitate active recall and memorization.",
      "Retrieval-Augmented Generation (RAG) enabling context-grounded Q&A over uploaded files.",
      "Interactive learning interface built for clean, recruiter-friendly validation."
    ],
    decisions: [
      "Utilized Retrieval-Augmented Generation (RAG) to ensure LLM responses are strictly grounded in user-provided documents, eliminating hallucinations.",
      "Implemented semantic chunking to split text based on logical structure, preserving context in embeddings.",
      "Designed prompt templates and conversational memory pipelines to sustain coherent, multi-turn study sessions."
    ]
  },
  {
    id: "spine-classifier",
    number: "03",
    name: "Lumbar Spine Classifier",
    subtitle: "Deep Learning Medical Diagnostic Assistant",
    description: "A deep learning system designed to automate the classification of lumbar spine degenerative conditions from MRI scans, assisting clinical teams with diagnostics.",
    tech: ["Python", "PyTorch", "EfficientNet", "OpenCV", "Deep Learning"],
    github: "https://github.com/karthikreddy06/Lumbar-Spine-Classifier",
    challenge: "Analyzing spinal MRI scans manually to grade severity levels is time-consuming and prone to inter-observer variability, which can delay diagnosis and treatment planning.",
    solution: "Developed a PyTorch-based deep learning pipeline using pre-trained EfficientNet backbones. The model processes sagittal and axial MRI views to classify and grade spinal stenosis and disc degeneration.",
    workflow: [
      { step: "01", name: "DICOM Scan Input" },
      { step: "02", name: "OpenCV Image Normalization" },
      { step: "03", name: "EfficientNet Backbone" },
      { step: "04", name: "Classification Head" },
      { step: "05", name: "Severity Grading Output" }
    ],
    features: [
      "Automated preprocessing of DICOM scans using OpenCV to normalize lighting and size.",
      "High-performance transfer learning models optimized for medical imaging datasets.",
      "Multi-class classification representing clinical severity grades.",
      "Visualized model confidence maps to aid explainability in diagnostic assistance."
    ],
    decisions: [
      "Adopted EfficientNet backbones with transfer learning to maximize performance on clinical datasets while maintaining parameter efficiency.",
      "Designed custom preprocessing functions to handle raw DICOM metadata and normalize intensity variations.",
      "Implemented stratified training and validation splits to ensure robust model evaluation and avoid overfitting."
    ]
  },
  {
    id: "water-potability",
    number: "04",
    name: "Water Potability ML",
    subtitle: "Environmental Water Quality Assessment",
    description: "A machine learning classification project that predicts whether a water sample is potable based on chemical and physical metrics.",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Power BI", "Data Cleaning"],
    github: "https://github.com/karthikreddy06/Water-Potability-ML",
    challenge: "Determining water safety is critical for public health. Manual laboratory testing is slow, and raw chemical data alone is difficult to assess quickly without predictive analytical models.",
    solution: "Built an end-to-end classification pipeline that cleans, imputes, and preprocesses environmental water quality datasets to train classifiers like Random Forests and XGBoost.",
    workflow: [
      { step: "01", name: "Chemical Water Metrics" },
      { step: "02", name: "Imputation & Cleaning" },
      { step: "03", name: "SMOTE Oversampling" },
      { step: "04", name: "Classifier Training" },
      { step: "05", name: "Potability Prediction (1 / 0)" }
    ],
    features: [
      "Detailed exploratory data analysis (EDA) visualized through analytical plots.",
      "Sophisticated preprocessing dealing with missing values and unbalanced classes.",
      "Comparative evaluation of machine learning models (Random Forest, SVM, XGBoost).",
      "Feature importance mapping showing which water attributes affect potability most."
    ],
    decisions: [
      "Used group-mean imputation for missing values in features like pH and sulfate to avoid reducing the dataset size.",
      "Applied SMOTE (Synthetic Minority Oversampling Technique) to balance target labels and improve model sensitivity.",
      "Used F1-Score and ROC-AUC metrics for optimization to balance precision and recall in public health predictions."
    ]
  }
];

const links = {
  email: "mailto:karthikkarthik05421@gmail.com",
  github: "https://github.com/karthikreddy06/SkillMatchV3",
  profileGithub: "https://github.com/karthikreddy06",
  linkedin: "https://www.linkedin.com",
  resume: "/resume",
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
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const activeTheme = savedTheme || systemTheme;
    setTheme(activeTheme);
    document.documentElement.setAttribute('data-theme', activeTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  useEffect(() => {
    const timer = setInterval(() => setRole((index) => (index + 1) % roles.length), 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveCaseStudy(null);
      }
    };
    if (activeCaseStudy) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeCaseStudy]);

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
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {mounted && theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a className="navbutton" href="#contact">Contact <ArrowUpRight size={14} /></a>
          <button className="menubutton" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <section className="hero wrap" id="top">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Mark>Available for thoughtful engineering teams</Mark>
          <h1>I build software<br />that feels <em>considered.</em></h1>
          <p className="changing">Mukkamalla Karthik Reddy <span>—</span> <b key={role}>{roles[role]}</b></p>
          <p className="summary">Backend systems, intelligent products, and data-driven decisions—brought together with a clear eye for the people on the other side of the screen.</p>
          <div className="hero-actions">
            <a href="#work" className="dark-btn">Selected work <ArrowDownRight size={16} /></a>
            <Link href={links.resume} className="text-btn">Download résumé <Download size={15} /></Link>
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
        <div className="profile-left">
          <motion.div className="aside-title" {...fade}>
            <Mark>01 / Profile</Mark>
            <h2>More than a<br /><em>toolkit.</em></h2>
          </motion.div>

          <div className="profile-intro-content">
            <motion.p className="profile-lead" {...fade}>
              I&apos;m M. Karthik Reddy, an AI & Data Science engineer focused on backend systems, machine learning, and intelligent applications. I build practical software that connects data, APIs, AI models, and real-world workflows.
            </motion.p>
            <motion.p className="profile-sublead" {...fade}>
              I am interested in backend engineering, AI/ML, data-driven systems, intelligent applications, and developing production-ready, scalable software.
            </motion.p>
          </div>
        </div>

        <motion.div className="profile-right-card" {...fade}>
          <div className="profile-card-header">
            <h3>WHAT I ENJOY BUILDING</h3>
          </div>
          <div className="enjoy-items">
            <article className="enjoy-item">
              <span className="enjoy-num">01</span>
              <span className="enjoy-icon"><Code2 size={16} /></span>
              <div className="enjoy-content">
                <h4>BACKEND ENGINEERING</h4>
                <p>Django, REST APIs, databases and scalable backend systems.</p>
              </div>
            </article>
            <article className="enjoy-item">
              <span className="enjoy-num">02</span>
              <span className="enjoy-icon"><Brain size={16} /></span>
              <div className="enjoy-content">
                <h4>AI & MACHINE LEARNING</h4>
                <p>Machine learning, deep learning, computer vision and predictive systems.</p>
              </div>
            </article>
            <article className="enjoy-item">
              <span className="enjoy-num">03</span>
              <span className="enjoy-icon"><Database size={16} /></span>
              <div className="enjoy-content">
                <h4>DATA & ANALYTICS</h4>
                <p>Python, SQL, Power BI and data-driven decision making.</p>
              </div>
            </article>
            <article className="enjoy-item">
              <span className="enjoy-num">04</span>
              <span className="enjoy-icon"><Sparkles size={16} /></span>
              <div className="enjoy-content">
                <h4>INTELLIGENT APPLICATIONS</h4>
                <p>AI assistants, AI-powered products and automation.</p>
              </div>
            </article>
          </div>
        </motion.div>
      </section>

      <section className="wrap capabilities" id="capabilities">
        <motion.div className="section-head" {...fade}>
          <Mark>02 / Capabilities</Mark>
          <h2>A focused set of<br />ways to <em>contribute.</em></h2>
        </motion.div>

        <div className="ability-grid">
          {abilities.map(([name, Icon, items], index) => (
            <motion.article 
              className="ability-card" 
              {...fade} 
              transition={{ delay: index * 0.07 }} 
              key={name}
            >
              <div className="ability-card-header">
                <span className="ability-card-number">0{index + 1}</span>
                <span className="ability-card-icon"><Icon /></span>
              </div>
              <h3>{name}</h3>
              <div className="ability-card-divider" />
              <div className="ability-pills">
                {items.map((item) => (
                  <span className="ability-pill" key={`${name}-${item}`}>
                    {item}
                  </span>
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
              <a href={links.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> View repository</a>
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

        <div className="project-section-title">
          <h2>Engineering Case Studies</h2>
        </div>

        <div className="project-grid">
          {caseStudies.map((project) => (
            <motion.article 
              className="project-card" 
              {...fade} 
              key={project.id}
            >
              <div className="project-card-header">
                <span className="project-card-number">{project.number}</span>
                <span className="project-card-subtitle">{project.subtitle}</span>
              </div>
              <div className="project-card-title-area">
                <h3>{project.name}</h3>
              </div>
              <p className="project-card-desc">{project.description}</p>
              <div className="project-card-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-card-actions">
                <button 
                  className="project-btn-primary" 
                  onClick={() => setActiveCaseStudy(project)}
                >
                  View Case Study <ArrowUpRight size={14} />
                </button>
                <a 
                  className="project-btn-secondary" 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Codebase <Github size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
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
              <a href={links.profileGithub} target="_blank" rel="noopener noreferrer"><Github /> GitHub</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin /> LinkedIn</a>
              <Link href={links.resume}><Download /> Résumé</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="wrap">
        <a className="brand" href="#top">KR<span> / portfolio</span></a>
        <p>© 2026 Mukkamalla Karthik Reddy</p>
        <a href="#top">Back to top ↑</a>
      </footer>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeCaseStudy && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCaseStudy(null)}
          >
            <motion.div
              className="modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close" 
                onClick={() => setActiveCaseStudy(null)} 
                aria-label="Close case study details"
              >
                <X size={20} />
              </button>

              <div className="modal-content">
                <div className="modal-top">
                  <span className="modal-tag">AI / SOFTWARE ENGINEERING · CASE STUDY</span>
                  <h2>{activeCaseStudy.name}</h2>
                  <p className="modal-subtitle">{activeCaseStudy.subtitle}</p>
                </div>

                <div className="modal-body">
                  <section className="modal-section">
                    <h4>THE CHALLENGE</h4>
                    <p>{activeCaseStudy.challenge}</p>
                  </section>

                  <section className="modal-section">
                    <h4>THE SYSTEM / SOLUTION</h4>
                    <p>{activeCaseStudy.solution}</p>
                  </section>

                  <section className="modal-section">
                    <h4>ARCHITECTURE / WORKFLOW</h4>
                    <div className="workflow-diagram">
                      {activeCaseStudy.workflow.map((item, idx) => (
                        <div key={item.step} className="workflow-step-wrapper">
                          <div className="workflow-step">
                            <span>{item.step}</span>
                            <p>{item.name}</p>
                          </div>
                          {idx < activeCaseStudy.workflow.length - 1 && (
                            <div className="workflow-arrow">↓</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="modal-section">
                    <h4>KEY FEATURES</h4>
                    <ul>
                      {activeCaseStudy.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </section>

                  <section className="modal-section">
                    <h4>TECHNOLOGY STACK</h4>
                    <div className="modal-tech-pills">
                      {activeCaseStudy.tech.map((t) => (
                        <span key={t} className="modal-tech-pill">{t}</span>
                      ))}
                    </div>
                  </section>

                  <section className="modal-section">
                    <h4>KEY TECHNICAL DECISIONS</h4>
                    <ul className="decisions-list">
                      {activeCaseStudy.decisions.map((decision, idx) => (
                        <li key={idx}>{decision}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="modal-footer">
                  <a
                    href={activeCaseStudy.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-codebase-btn"
                  >
                    View Codebase <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
