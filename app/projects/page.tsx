import Link from "next/link";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  tagColor: string;
  links?: { repo?: string; demo?: string };
  status?: "In progress" | "Shipped";
};

const PROJECTS: Project[] = [
  {
    title: "DevCircle",
    subtitle: "Full-Stack Web Application · Real-Time",
    description: "A skill-exchange platform for developers — teach what you know, learn what you want. Built end-to-end with real-time chat, smart matching, and user profiles.",
    bullets: [
      "Built full-stack with React + TypeScript frontend and Node.js + Express backend, deployed on Vercel and Railway",
      "Implemented real-time WebSocket chat and live notifications using Socket.io",
      "Designed smart skill-matching algorithm that ranks users by skill compatibility",
      "Added Cloudinary avatar upload, JWT authentication, skill ratings, and a personal stats dashboard with Recharts",
    ],
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Socket.io"],
    tagColor: "#ffe4e6",
    status: "Shipped",
    links: {
      demo: "https://devcircle-sigma.vercel.app",
      repo: "https://github.com/FionaZ-heng/devcircle",
    },
  },
  {
    title: "Sorting Visualizer",
    subtitle: "Interactive Algorithms · Frontend",
    description: "Step-by-step visualization of sorting algorithms with pause/resume controls and state-driven UI updates.",
    bullets: [
      "Step-based execution with pause / resume / reset controls",
      "State-driven rendering that maps algorithm logic directly to UI updates",
      "Designed to be extensible for adding more algorithms and visual styles",
    ],
    tags: ["React", "TypeScript", "Visualization"],
    tagColor: "#ffe4e6",
    status: "Shipped",
    links: {
      repo: "https://github.com/FionaZ-heng/Sorting-Visualizer",
      demo: "https://sorting-visualizer-five-alpha.vercel.app",
    },
  },
  {
    title: "Sanguine",
    subtitle: "Java MVC Application · OOP Design",
    description: "Java application built with MVC architecture, focusing on clean abstraction boundaries and interface-based design.",
    bullets: [
      "Clean separation between model / view / controller layers",
      "Modular architecture for maintainability and testability",
      "Interface-driven design to decouple implementation details",
    ],
    tags: ["Java", "OOP", "MVC"],
    tagColor: "#e0f2fe",
    status: "Shipped",
    links: { repo: "https://github.com/FionaZ-heng/cs3100" },
  },
  {
    title: "Single-Cycle RISC-V CPU",
    subtitle: "Computer Architecture · FPGA",
    description: "Implemented a single-cycle RISC-V CPU with a custom datapath and control logic.",
    bullets: [
      "Custom datapath + control logic integration",
      "Instruction execution under a single-cycle model",
      "Hardware-focused debugging and verification mindset",
    ],
    tags: ["RISC-V", "FPGA", "Digital Logic"],
    tagColor: "#fef3c7",
    status: "Shipped",
    links: { repo: "https://github.com/FionaZ-heng/cs3100" },
  },
];

export default function ProjectsPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#fdfbf7", fontFamily: "'Georgia', serif" }}>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .proj-card {
          background: #fff;
          border: 3px solid #4a4a4a;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow: 5px 5px 0 #4a4a4a;
          padding: 28px 32px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .proj-card:hover {
          transform: translate(-2px, -2px) rotate(-0.5deg);
          box-shadow: 7px 7px 0 #4a4a4a;
        }
        .tag-pill {
          border: 2px solid #4a4a4a;
          border-radius: 20px 5px 20px 5px / 5px 20px 5px 20px;
          padding: 4px 12px;
          font-size: 12px;
          font-weight: 700;
          display: inline-block;
        }
        .paw-btn {
          border: 3px solid #4a4a4a;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow: 4px 4px 0 #4a4a4a;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 20px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          color: #2a2a2a;
        }
        .paw-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0 #4a4a4a;
        }
        .status-pill {
          border: 2px solid #4a4a4a;
          border-radius: 999px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }
      `}</style>

      {/* Paper texture */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
        backgroundSize: "20px 20px", opacity: 0.25
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", padding: "60px 24px 60px" }}>

        {/* Header */}
        <div style={{
          display: "flex", alignItems: "flex-start", justifyContent: "space-between",
          gap: 16, marginBottom: 48, animation: "fadeInUp 0.6s ease-out both"
        }}>
          <div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 8, letterSpacing: "-0.02em" }}>
              Projects
            </h1>
            <div style={{ width: 80, height: 4, borderRadius: 999, background: "linear-gradient(90deg, #fda4af, #fde68a)", marginBottom: 12 }} />
            <p style={{ color: "#777", fontSize: 15 }}>
              Selected projects focused on software design, frontend engineering, and systems.
            </p>
          </div>
          <Link href="/" style={{ fontSize: 14, color: "#fda4af", fontWeight: 700, textDecoration: "underline", whiteSpace: "nowrap", marginTop: 8 }}>
            ← Home
          </Link>
        </div>

        {/* Project cards */}
        <div style={{ display: "grid", gap: 28 }}>
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="proj-card"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.1 + i * 0.12}s both` }}
            >
              {/* Title row */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
                <div>
                  <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 3 }}>{p.title}</h2>
                  <p style={{ fontSize: 13, color: "#888" }}>{p.subtitle}</p>
                </div>
                {p.status && (
                  <span className="status-pill" style={{
                    background: p.status === "In progress" ? "#fef3c7" : "#e0f2fe"
                  }}>
                    {p.status}
                  </span>
                )}
              </div>

              {/* Description */}
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.7, marginBottom: 14 }}>{p.description}</p>

              {/* Bullets */}
              <ul style={{ paddingLeft: 20, marginBottom: 16, display: "grid", gap: 4 }}>
                {p.bullets.map(b => (
                  <li key={b} style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>{b}</li>
                ))}
              </ul>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {p.tags.map(t => (
                  <span key={t} className="tag-pill" style={{ background: p.tagColor }}>{t}</span>
                ))}
              </div>

              {/* Links */}
              {(p.links?.repo || p.links?.demo) && (
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  {p.links.repo && (
                    <a href={p.links.repo} target="_blank" rel="noreferrer" className="paw-btn" style={{ background: "#fff" }}>
                      Repo ↗
                    </a>
                  )}
                  {p.links.demo && (
                    <a href={p.links.demo} target="_blank" rel="noreferrer" className="paw-btn" style={{ background: "#1a1a1a", color: "#fff" }}>
                      Live Demo ↗
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: 60, fontSize: 13, color: "#aaa" }}>
          Built with Next.js · Deployed on Vercel 🐾
        </footer>
      </div>
    </main>
  );
}
