"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Github,
  Moon,
  Sun,
} from "lucide-react";

const screenshots = [
  {
    url: "/projects/devagent/dashboard.png",
    tag: "Control Center",
    title: "Autonomous Engineering Control Center",
    caption:
      "Operational dashboard displaying indexed repository statistics (1,360 AST search chunks), active tasks, Docker sandbox isolation status, recent task runs, and quick actions to import codebases or launch new agent tasks.",
  },
  {
    url: "/projects/devagent/repo.png",
    tag: "Codebase Intelligence",
    title: "Codebase Repositories View",
    caption:
      "Multi-repository management showing indexed target codebases (DevAgent and multi-document-rag-assistant) with branch tracking, file counts, AST chunk counts, disk sizes, and triggers for codebase re-indexing.",
  },
  {
    url: "/projects/devagent/agenttask.png",
    tag: "Task Orchestration",
    title: "Agent Tasks & Workflows Feed",
    caption:
      "Centralized task orchestration feed tracking autonomous bug-fixing, refactoring, and investigation runs across repositories with search filters, repository filters, execution iteration counters, and status badges.",
  },
  {
    url: "/projects/devagent/prediction.png",
    tag: "Safety & Lifecycle",
    title: "Task Lifecycle & NO_CONFIRMED_BUG Safety Outcome",
    caption:
      "Detailed task view demonstrating safe resolution: when no defect was confirmed, DevAgent left files untouched (0 modified, no patch generated) and concluded the task safely with full lifecycle transparency.",
  },
  {
    url: "/projects/devagent/result.png",
    tag: "RAG & Evidence",
    title: "RAG Context & Ranked Evidence Inspection",
    caption:
      "Deep-dive inspection view showing ranked semantic and symbol-level matches from repository retrieval, task objectives, authoritative outcome verdicts, and tabs for execution stream logs, diffs, and agent guidance.",
  },
];

const workflowSteps = [
  { step: "01", name: "React Frontend (Vite & SSE)", tag: "Interface" },
  { step: "02", name: "FastAPI REST API", tag: "API Layer" },
  { step: "03", name: "Task Orchestrator (arq & Redis)", tag: "Job Queue" },
  { step: "04", name: "RAG Retrieval (AST Chunks + pgvector)", tag: "Intelligence" },
  { step: "05", name: "Planner / Codebase / Debugger Agents", tag: "Multi-Agent Team" },
  { step: "06", name: "Structured Change Proposal (Unified Diff)", tag: "Dry-Run" },
  { step: "07", name: "Human Approval Gate (AWAITING_APPROVAL)", tag: "Safety Guard" },
  { step: "08", name: "Isolated Workspace Branching", tag: "Git Branch" },
  { step: "09", name: "Docker Sandbox Execution (runner-python)", tag: "Sandbox" },
  { step: "10", name: "Automated Pytest Verification", tag: "Test Runner" },
  { step: "11", name: "Completed / Failed / Rejected", tag: "Authoritative Status" },
];

const technologies = [
  "Python",
  "FastAPI",
  "React",
  "TypeScript",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "arq",
  "Docker",
  "Ollama",
  "SQLAlchemy",
  "Alembic",
  "RAG",
];

const safetyInvariants = [
  {
    num: "01",
    title: "AI cannot modify target repository before approval",
    desc: "The agent only reads and proposes. File writes to the target project are forbidden before explicit human review.",
  },
  {
    num: "02",
    title: "AWAITING_APPROVAL required before APPLYING",
    desc: "The state machine forbids transitioning to APPLYING without an authenticated approval record.",
  },
  {
    num: "03",
    title: "No approval means no patch application",
    desc: "If an approval is rejected or missing, patch application aborts immediately and workspaces stay clean.",
  },
  {
    num: "04",
    title: "Code execution remains sandboxed",
    desc: "Testing and execution only occur inside ephemeral, capability-dropped, network-isolated Docker containers.",
  },
  {
    num: "05",
    title: "Repository workspace paths remain contained",
    desc: "Path traversal attacks (../, symlinks) are blocked at the tool boundary.",
  },
  {
    num: "06",
    title: "Tool write permissions are phase-restricted",
    desc: "Write tools are strictly restricted based on current task phase and state.",
  },
  {
    num: "07",
    title: "No remote Git push is performed automatically",
    desc: "Changes are preserved on local Git branches inside the workspace; remote repositories are never modified.",
  },
  {
    num: "08",
    title: "Secrets and credentials redacted",
    desc: "Automatic redaction scrubs credentials, database connection strings, and tokens from logs and payloads.",
  },
  {
    num: "09",
    title: "Syntactic diff validation pre-check",
    desc: "Patches undergo syntactic diff validation and test dry-run in a temporary directory prior to approval.",
  },
  {
    num: "10",
    title: "NO_CONFIRMED_BUG prevents patch generation",
    desc: "When no bug is confirmed, the agent concludes safely without fabricating unsupported modifications.",
  },
];

const fade = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: "easeOut" as const },
};

export default function DevAgentCaseStudy() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = savedTheme || systemTheme;
    setTheme(activeTheme);
    document.documentElement.setAttribute("data-theme", activeTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div className="case-study-page">
      <div className="texture" />
      <div className="orb orb1" />
      <div className="orb orb2" />

      {/* Navigation Header */}
      <header className="case-study-header">
        <Link href="/" className="case-study-header-brand">
          KR<span> / portfolio</span>
        </Link>
        <div className="case-study-header-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {mounted && theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link href="/" className="case-study-nav-btn case-study-nav-btn-back">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          <a
            href="https://github.com/karthikreddy06/DevAgent"
            target="_blank"
            rel="noopener noreferrer"
            className="case-study-nav-btn case-study-nav-btn-github"
          >
            <Github size={14} /> GitHub Repo
          </a>
        </div>
      </header>

      <main className="wrap">
        {/* Hero Section */}
        <section className="case-study-hero">
          <motion.div {...fade}>
            <div className="case-study-hero-badge">
              <i /> CASE STUDY 01 · AUTONOMOUS SWE PLATFORM
            </div>
            <h1>DevAgent</h1>
            <p className="case-study-hero-sub">Autonomous AI Software Engineering Agent</p>

            <div className="case-study-principle">
              <span>Core Principle:</span> &ldquo;AI proposes. Human approves. Sandbox verifies.&rdquo;
            </div>

            <p className="case-study-lead">
              An AI-powered software engineering platform that analyzes repositories using RAG,
              investigates software issues, generates structured code-change proposals, requires
              explicit human approval, and verifies approved changes inside an isolated Docker sandbox.
            </p>

            <div className="case-study-meta-bar">
              <div className="case-study-meta-item">
                <small>Core Architecture</small>
                <b>FastAPI + arq + Redis</b>
              </div>
              <div className="case-study-meta-item">
                <small>Code Intelligence</small>
                <b>AST Chunks + pgvector</b>
              </div>
              <div className="case-study-meta-item">
                <small>Safety Barrier</small>
                <b>Mandatory Human Approval</b>
              </div>
              <div className="case-study-meta-item">
                <small>Sandbox Execution</small>
                <b>Docker (--network none)</b>
              </div>
            </div>

            <div className="case-study-hero-tech">
              {technologies.map((t) => (
                <span key={t} className="modal-tech-pill">
                  {t}
                </span>
              ))}
            </div>

            <div className="case-study-hero-actions">
              <a
                href="https://github.com/karthikreddy06/DevAgent"
                target="_blank"
                rel="noopener noreferrer"
                className="modal-codebase-btn"
              >
                View Repository on GitHub <Github size={16} />
              </a>
              <Link href="/#work" className="case-study-nav-btn-back case-study-nav-btn">
                <ArrowLeft size={14} /> Back to Projects Grid
              </Link>
            </div>
          </motion.div>
        </section>

        {/* 12 Detailed Case Study Sections */}
        <div className="case-study-content">
          {/* Section 1: Problem */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>01 / The Problem</span>
              <h2>The Danger of Uncontrolled Autonomous AI Coding</h2>
            </div>
            <div className="case-study-grid-2">
              <div className="case-study-card">
                <h3>Uncontained Code Mutations</h3>
                <p>
                  Most autonomous coding assistants operate either as disconnected chat windows
                  or as speculative agents with direct, uncontained write access to local file
                  trees. Granting AI models unrestricted write permissions risks catastrophic file
                  corruption, phantom changes, and broken development environments.
                </p>
              </div>
              <div className="case-study-card">
                <h3>Hallucinated Fixes & Lack of Sandboxes</h3>
                <p>
                  When an AI agent cannot locate a reproducible defect, it frequently invents
                  speculative bugs to satisfy the user prompt. Furthermore, running untrusted
                  generated code directly on host machines exposes local environments to
                  arbitrary shell command execution, security breaches, and network exfiltration.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 2: Solution */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>02 / The Solution</span>
              <h2>AI Proposes. Human Approves. Sandbox Verifies.</h2>
            </div>
            <div className="case-study-card">
              <p>
                DevAgent re-engineers autonomous software engineering from the ground up around
                strict security invariants and a deterministic state machine.
              </p>
              <p>
                The platform ingests repositories, computes AST chunks, indexes semantic symbols in
                PostgreSQL using pgvector, and orchestrates a multi-agent team (Planner, Codebase,
                Debugger). Changes are generated as unified diffs and dry-run validated in temporary
                workspaces before reaching the developer.
              </p>
              <p>
                Crucially, no modification is ever written to the active repository without explicit
                human approval. Once approved, the patch is tested inside a hardened, network-isolated
                Docker sandbox with automated pytest validation and self-repair loops.
              </p>
            </div>
          </motion.section>

          {/* Section 3: Architecture */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>03 / System Architecture</span>
              <h2>End-to-End Orchestration & Workflow</h2>
            </div>
            <div className="architecture-flow-container">
              <div className="architecture-flow-wrapper">
                {workflowSteps.map((s, idx) => (
                  <div key={s.step} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div className="arch-node">
                      <div className="arch-node-left">
                        <span className="arch-node-step">{s.step}</span>
                        <span className="arch-node-name">{s.name}</span>
                      </div>
                      <span className="arch-node-tag">{s.tag}</span>
                    </div>
                    {idx < workflowSteps.length - 1 && <div className="arch-connector">↓</div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Section 4: Repository Intelligence / RAG */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>04 / Repository Intelligence</span>
              <h2>AST-Aware Code Retrieval & Hybrid Vector Search</h2>
            </div>
            <div className="case-study-grid-3">
              <div className="case-study-card">
                <h3>AST-Level Chunking</h3>
                <p>
                  Rather than splitting files by arbitrary line counts, DevAgent parses Python
                  abstract syntax trees to extract functions, classes, and symbol signatures
                  intact, preserving lexical hierarchy.
                </p>
              </div>
              <div className="case-study-card">
                <h3>PostgreSQL + pgvector</h3>
                <p>
                  Embeddings generated via local Ollama (<code>nomic-embed-text</code>) or cloud
                  providers are indexed in PostgreSQL using the <code>pgvector</code> extension for
                  sub-millisecond cosine similarity search.
                </p>
              </div>
              <div className="case-study-card">
                <h3>Hybrid Retrieval (FTS + Vector)</h3>
                <p>
                  Combines semantic vector matching with PostgreSQL Full-Text Keyword Search (FTS)
                  to retrieve both conceptual queries and exact symbol/variable names with high
                  precision.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 5: Agent Workflow */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>05 / Multi-Agent Workflow</span>
              <h2>Specialized Collaborative Agent Roles</h2>
            </div>
            <div className="case-study-grid-3">
              <div className="case-study-card">
                <h3>1. Planner Agent</h3>
                <p>
                  Deconstructs incoming task objectives, maps target repositories, establishes file
                  edit boundaries, and defines the validation strategy before any code is examined.
                </p>
              </div>
              <div className="case-study-card">
                <h3>2. Codebase Agent</h3>
                <p>
                  Navigates AST symbol indices, traverses import trees, and queries hybrid vector
                  stores to locate the exact source files and functions relevant to the issue.
                </p>
              </div>
              <div className="case-study-card">
                <h3>3. Debugger Agent</h3>
                <p>
                  Reproduces defects, crafts structured unified diffs, runs pre-checks in temporary
                  directories, and parses test failure stack traces during self-repair iterations.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Human Approval & NO_CONFIRMED_BUG */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>06 / Human Approval & Safety</span>
              <h2>The Mandatory Approval Gate & NO_CONFIRMED_BUG</h2>
            </div>
            <div className="case-study-card">
              <h3>Strict State Machine Invariant: AWAITING_APPROVAL</h3>
              <p>
                The state machine forbids transitioning from <code>FIX_PROPOSED</code> to{" "}
                <code>APPLYING</code> without an explicit human approval record. If an approval is
                denied, the task moves cleanly to <code>REJECTED</code> without modifying the codebase.
              </p>
              <div className="safety-callout">
                <h4>Authoritative Safety Behavior: NO_CONFIRMED_BUG</h4>
                <p>
                  When repository evidence does not establish a reproducible defect, DevAgent concludes:
                  <strong style={{ color: "var(--olive)", display: "block", marginTop: "4px" }}>
                    NO_CONFIRMED_BUG
                  </strong>
                  rather than hallucinating speculative modifications or inventing an unsupported patch.
                  Files remain untouched, and an explanatory report is delivered to the operator.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 7: Isolated Workspace */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>07 / Workspace Isolation</span>
              <h2>Dedicated Workspace & Local Branching</h2>
            </div>
            <div className="case-study-grid-2">
              <div className="case-study-card">
                <h3>Ephemeral Task Workspaces</h3>
                <p>
                  Each task executes in its own isolated temporary workspace on disk. Path traversal
                  protections block directory escapes (e.g. <code>../</code>, symlinks) at the tool
                  boundary.
                </p>
              </div>
              <div className="case-study-card">
                <h3>Local Git Branch Containment</h3>
                <p>
                  Verified patches are committed solely to local <code>devagent/task-*</code> Git
                  branches. DevAgent never performs remote pushes automatically, keeping developers
                  in complete control of upstream repositories.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 8: Docker Sandbox */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>08 / Sandboxed Execution</span>
              <h2>Hardened Docker Execution Sandbox</h2>
            </div>
            <div className="case-study-grid-3">
              <div className="case-study-card">
                <h3>Non-Root User & Dropped Capabilities</h3>
                <p>
                  Test commands execute inside custom <code>runner-python:3.12</code> containers
                  running as an unprivileged non-root user with dropped Linux capabilities.
                </p>
              </div>
              <div className="case-study-card">
                <h3>Network Isolation (--network none)</h3>
                <p>
                  Containers execute with <code>--network none</code> to completely prevent untrusted
                  code from making external network calls, contacting command-and-control servers, or
                  leaking credentials.
                </p>
              </div>
              <div className="case-study-card">
                <h3>Resource Quotas</h3>
                <p>
                  Hard memory limits, strict CPU shares, and execution timeouts guard against infinite
                  loops, memory exhaustion, and fork bombs during test execution.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 9: Automated Verification */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>09 / Automated Verification</span>
              <h2>Targeted Pytest Selection & Self-Repair Loops</h2>
            </div>
            <div className="case-study-card">
              <p>
                Verification is not an afterthought—it is automated and rigorous. DevAgent executes
                targeted unit tests before and after applying proposed patches.
              </p>
              <p>
                If a verification run fails, DevAgent enters an <strong>automated self-repair loop</strong>.
                Stack traces, assertion failures, and stdout/stderr logs from the sandbox are captured
                and fed back to the Debugger Agent to diagnose the regression and craft an updated
                proposal (up to configured budget limits).
              </p>
            </div>
          </motion.section>

          {/* Section 10: Screenshots Gallery */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>10 / Runtime Evidence</span>
              <h2>System Screenshots & Platform Interfaces</h2>
            </div>
            <div className="screenshot-showcase-grid">
              {screenshots.map((s, idx) => (
                <article key={s.url} className="screenshot-card">
                  <div className="screenshot-img-container">
                    <Image
                      src={s.url}
                      alt={s.title}
                      width={1280}
                      height={720}
                      priority={idx === 0}
                    />
                  </div>
                  <div className="screenshot-info">
                    <div className="screenshot-header">
                      <h3>{s.title}</h3>
                      <span className="screenshot-pill">{s.tag}</span>
                    </div>
                    <p>{s.caption}</p>
                  </div>
                </article>
              ))}
            </div>
          </motion.section>

          {/* Section 11: Engineering Highlights & Invariants */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>11 / Engineering Invariants</span>
              <h2>10 Core Architectural Security Guarantees</h2>
            </div>
            <div className="invariants-grid">
              {safetyInvariants.map((inv) => (
                <div key={inv.num} className="invariant-item">
                  <span className="invariant-num">{inv.num}</span>
                  <div className="invariant-text">
                    <strong>{inv.title}</strong>
                    <p>{inv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 12: GitHub Repository */}
          <motion.section className="case-study-section" {...fade}>
            <div className="case-study-section-header">
              <span>12 / Repository Access</span>
              <h2>Explore the Source Code</h2>
            </div>
            <div className="case-study-card" style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start" }}>
              <p>
                The complete codebase—including the FastAPI backend, arq background workers,
                PostgreSQL pgvector migrations, React glassmorphic dashboard, and hardened Docker
                sandbox configuration—is available on GitHub.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a
                  href="https://github.com/karthikreddy06/DevAgent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-codebase-btn"
                >
                  <Github size={16} /> Open karthikreddy06/DevAgent on GitHub
                </a>
                <Link href="/" className="case-study-nav-btn-back case-study-nav-btn">
                  <ArrowLeft size={14} /> Return to Portfolio
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="wrap" style={{ marginTop: "100px" }}>
        <Link className="brand" href="/">
          KR<span> / portfolio</span>
        </Link>
        <p>© 2026 Mukkamalla Karthik Reddy</p>
        <a href="#top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}
