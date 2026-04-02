import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#fdfbf7", fontFamily: "'Georgia', serif" }}>
      
      {/* Paper texture overlay */}
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
        backgroundSize: "20px 20px", opacity: 0.25
      }} />

      {/* Floating blobs */}
      <div style={{
        position: "fixed", top: "10%", left: "5%", width: 300, height: 300,
        background: "rgba(255,228,230,0.35)", borderRadius: "50%",
        filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        animation: "float 7s ease-in-out infinite"
      }} />
      <div style={{
        position: "fixed", bottom: "15%", right: "8%", width: 250, height: 250,
        background: "rgba(224,242,254,0.35)", borderRadius: "50%",
        filter: "blur(60px)", pointerEvents: "none", zIndex: 0,
        animation: "float 9s ease-in-out infinite 1s"
      }} />
      <div style={{
        position: "fixed", top: "50%", right: "15%", width: 180, height: 180,
        background: "rgba(254,243,199,0.4)", borderRadius: "50%",
        filter: "blur(50px)", pointerEvents: "none", zIndex: 0,
        animation: "float 6s ease-in-out infinite 2s"
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        .hand-border {
          border: 3px solid #4a4a4a;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow: 5px 5px 0 #4a4a4a;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hand-border:hover {
          transform: translate(-2px, -2px);
          box-shadow: 7px 7px 0 #4a4a4a;
        }
        .hand-border:active {
          transform: translate(2px, 2px);
          box-shadow: 3px 3px 0 #4a4a4a;
        }
        .card-tilt:hover {
          transform: rotate(-1deg) scale(1.02);
          transition: transform 0.3s ease;
        }
        .card-tilt {
          transition: transform 0.3s ease;
        }
        .paw-btn {
          border: 3px solid #4a4a4a;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow: 4px 4px 0 #4a4a4a;
          transition: all 0.2s cubic-bezier(0.68,-0.55,0.265,1.55);
          display: inline-flex; align-items: center; gap: 6px;
          padding: 10px 24px; font-weight: 700; color: #4a4a4a;
          text-decoration: none; font-size: 15px;
        }
        .paw-btn:hover {
          transform: translate(-2px,-2px);
          box-shadow: 6px 6px 0 #4a4a4a;
        }
        .tag-pill {
          border: 2px solid #4a4a4a;
          border-radius: 20px 5px 20px 5px / 5px 20px 5px 20px;
          padding: 4px 12px; font-size: 12px; font-weight: 700;
          display: inline-block;
        }
        .section-reveal {
          animation: fadeInUp 0.7s ease-out both;
        }
      `}</style>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ padding: "80px 24px 60px", maxWidth: 860, margin: "0 auto" }}>
          <div style={{ animation: "fadeInUp 0.6s ease-out both", display: "flex", flexWrap: "wrap", alignItems: "center", gap: 40 }}>
            
            {/* 左侧文字 */}
            <div style={{ flex: 1, minWidth: 280 }}>
              <div className="tag-pill" style={{ background: "#ffe4e6", marginBottom: 20, fontSize: 13 }}>
                🐾 Software Engineer · CS @ Northeastern
              </div>
              <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 4rem)", fontWeight: 800, color: "#2a2a2a", lineHeight: 1.15, marginBottom: 8, letterSpacing: "-0.02em" }}>
                Yutong (Fiona) Zheng
              </h1>
              <div style={{ width: 140, height: 5, marginBottom: 28, borderRadius: 999, background: "linear-gradient(90deg, #fda4af, #fde68a)" }} />
              <p style={{ fontSize: "1.15rem", color: "#555", maxWidth: 480, lineHeight: 1.75, marginBottom: 36 }}>
                I build thoughtful, interactive web applications — turning complex systems into intuitive user experiences. 🌸
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 32 }}>
                <Link href="/projects" className="paw-btn" style={{ background: "#1a1a1a", color: "#fff" }}>View Projects →</Link>
                <a href="/resume.pdf" className="paw-btn" style={{ background: "#ffe4e6" }}>Resume ↗</a>
                <a href="mailto:zheng.yuton@northeastern.edu" className="paw-btn" style={{ background: "#e0f2fe" }}>Email Me</a>
                <Link href="/travel" className="paw-btn" style={{ background: "#fef3c7" }}>
                  ✈️ Travel
                </Link>
                <Link href="/about" className="paw-btn" style={{ background: "#ffe4e6" }}>
                  🌸 About Me
                </Link>
              </div>
            </div>

            {/* 右侧图片 */}
            <div className="hand-border" style={{
              width: 260, height: 260, flexShrink: 0,
              overflow: "hidden", background: "#fff",
              animation: "wiggle 4s ease-in-out infinite"
            }}>
              <img src="/4.gif" alt="线条小狗" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

          </div>
        </section>

        {/* ── FEATURED PROJECT ── */}
        <section style={{
          padding: "0 24px 70px", maxWidth: 860, margin: "0 auto",
          animation: "fadeInUp 0.7s ease-out 0.15s both"
        }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 6 }}>
              Featured Project
            </h2>
            <p style={{ color: "#777", fontSize: 15 }}>One project I'm actively building and improving.</p>
          </div>

          <div className="hand-border card-tilt" style={{
            background: "#fff", padding: "28px 32px",
            display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: 24
          }}>
            {/* Left: colorful accent block */}
            <div style={{
              width: 8, flexShrink: 0, alignSelf: "stretch", minHeight: 80,
              background: "linear-gradient(180deg, #fda4af, #fde68a)",
              borderRadius: 4
            }} />

            <div style={{ flex: 1, minWidth: 240 }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#2a2a2a" }}>Sorting Visualizer</h3>
                  <p style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Interactive Algorithms · Frontend</p>
                </div>
                <span className="tag-pill" style={{ background: "#fef3c7" }}>In progress</span>
              </div>

              <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 18, fontSize: 15 }}>
                Step-by-step visualization of sorting algorithms with pause/resume controls
                and state-driven UI updates. Built to be extensible for new algorithms and styles.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/projects" className="paw-btn" style={{ background: "#1a1a1a", color: "#fff" }}>
                  View project →
                </Link>
                <a href="https://github.com/FionaZ-heng/Sorting-Visualizer" target="_blank" rel="noreferrer"
                  className="paw-btn" style={{ background: "#fff" }}>
                  Repo ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── OTHER PROJECTS ── */}
        <section style={{
          padding: "0 24px 70px", maxWidth: 860, margin: "0 auto",
          animation: "fadeInUp 0.7s ease-out 0.25s both"
        }}>
          <div style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 6 }}>
              Projects
            </h2>
            <p style={{ color: "#777", fontSize: 15 }}>A few highlights — full details on the Projects page.</p>
          </div>

          <div style={{ display: "grid", gap: 20 }}>
            {/* Sanguine */}
            <div className="hand-border card-tilt" style={{ background: "#fff", padding: "24px 28px" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 10 }}>
                <div>
                  <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#2a2a2a" }}>Sanguine</h3>
                  <p style={{ fontSize: 13, color: "#888", marginTop: 2 }}>Java MVC Application · OOP Design</p>
                </div>
                <a href="https://github.com/FionaZ-heng/cs3100" target="_blank" rel="noreferrer"
                  style={{ fontSize: 13, color: "#fda4af", fontWeight: 700, textDecoration: "underline", whiteSpace: "nowrap" }}>
                  Repo ↗
                </a>
              </div>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.65 }}>
                Object-oriented Java application with clean MVC separation and interface-based design.
              </p>
              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                {["Java", "OOP", "MVC"].map(t => (
                  <span key={t} className="tag-pill" style={{ background: "#e0f2fe", fontSize: 11 }}>{t}</span>
                ))}
              </div>
            </div>

            {/* RISC-V */}
            <div className="hand-border card-tilt" style={{ background: "#fff", padding: "24px 28px" }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 4 }}>
                Single-Cycle RISC-V CPU
              </h3>
              <p style={{ fontSize: 13, color: "#888", marginBottom: 10 }}>Computer Architecture · FPGA</p>
              <p style={{ color: "#555", fontSize: 15, lineHeight: 1.65 }}>
                FPGA implementation of a single-cycle RISC-V processor with custom datapath and control logic.
              </p>
              <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                {["RISC-V", "FPGA", "Digital Logic"].map(t => (
                  <span key={t} className="tag-pill" style={{ background: "#ffe4e6", fontSize: 11 }}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <Link href="/projects" style={{ fontSize: 14, color: "#fda4af", fontWeight: 700, textDecoration: "underline" }}>
              View all projects →
            </Link>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section style={{
          padding: "0 24px 70px", maxWidth: 860, margin: "0 auto",
          animation: "fadeInUp 0.7s ease-out 0.35s both"
        }}>
          <h2 style={{ fontSize: "1.7rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 18 }}>Skills</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Java", "C", "Python", "React / Next.js", "TypeScript", "Git", "Linux", "LaTeX"].map((s, i) => (
              <span key={s} className="tag-pill" style={{
                background: ["#ffe4e6","#e0f2fe","#fef3c7"][i % 3],
                fontSize: 13, animation: `fadeInUp 0.5s ease-out ${0.4 + i * 0.05}s both`
              }}>
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* ── LINKS ── */}
        <section style={{ padding: "0 24px 50px", maxWidth: 860, margin: "0 auto" }}>
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 16,
            borderTop: "2px dashed #e5e7eb", paddingTop: 32
          }}>
            <a href="https://github.com/FionaZ-heng" target="_blank" rel="noreferrer"
              style={{ fontSize: 14, color: "#555", fontWeight: 600, textDecoration: "underline" }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yutong-fiona-zheng" target="_blank" rel="noreferrer"
              style={{ fontSize: 14, color: "#555", fontWeight: 600, textDecoration: "underline" }}>
              LinkedIn
            </a>
            <Link href="/projects"
              style={{ fontSize: 14, color: "#555", fontWeight: 600, textDecoration: "underline" }}>
              Projects
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer style={{
          textAlign: "center", padding: "20px 24px 40px",
          fontSize: 13, color: "#aaa"
        }}>
          Built with Next.js · Deployed on Vercel 🐾
        </footer>

      </div>
    </main>
  );
}
