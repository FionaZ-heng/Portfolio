"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#fdfbf7", fontFamily: "'Georgia', serif" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-1deg); }
          50%       { transform: rotate(1.5deg); }
        }
        .hand-border {
          border: 3px solid #4a4a4a;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow: 5px 5px 0 #4a4a4a;
        }
        .interest-card {
          background: #fff;
          border: 3px solid #4a4a4a;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow: 5px 5px 0 #4a4a4a;
          padding: 22px 26px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .interest-card:hover {
          transform: translate(-2px, -2px) rotate(-0.5deg);
          box-shadow: 7px 7px 0 #4a4a4a;
        }
        .currently-card {
          background: #fff;
          border: 3px solid #4a4a4a;
          border-radius: 20px 5px 20px 5px / 5px 20px 5px 20px;
          box-shadow: 4px 4px 0 #4a4a4a;
          padding: 16px 22px;
          display: flex;
          align-items: center;
          gap: 14px;
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
      `}</style>

      {/* Paper texture */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)", backgroundSize: "20px 20px", opacity: 0.25 }} />

      {/* Floating blobs */}
      <div style={{ position: "fixed", top: "8%", left: "3%", width: 300, height: 300, background: "rgba(255,228,230,0.3)", borderRadius: "50%", filter: "blur(60px)", animation: "float 8s ease-in-out infinite", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "10%", right: "4%", width: 240, height: 240, background: "rgba(224,242,254,0.35)", borderRadius: "50%", filter: "blur(60px)", animation: "float 10s ease-in-out infinite 1s", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", top: "45%", right: "12%", width: 180, height: 180, background: "rgba(254,243,199,0.4)", borderRadius: "50%", filter: "blur(50px)", animation: "float 7s ease-in-out infinite 2s", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 860, margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Back link */}
        <div style={{ marginBottom: 40, animation: "fadeInUp 0.5s ease-out both" }}>
          <Link href="/" className="paw-btn" style={{ background: "#fff" }}>← Home</Link>
        </div>

        {/* ── HERO ── */}
        <section style={{ marginBottom: 64, animation: "fadeInUp 0.6s ease-out 0.1s both" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 48 }}>

            {/* Photo */}
            <div className="hand-border" style={{
              width: 240, height: 290, flexShrink: 0,
              overflow: "hidden",
              animation: "wiggle 5s ease-in-out infinite",
            }}>
              <img
                src="/about-me.jpeg"
                alt="Fiona"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            {/* SVG cartoon avatar */}
            <div className="hand-border" style={{
              width: 200, height: 200, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: "#fff8f0",
              animation: "wiggle 6s ease-in-out infinite 0.5s",
            }}>
              <svg width="160" height="180" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Hair back */}
                <ellipse cx="80" cy="72" rx="52" ry="58" fill="#c8860a" stroke="#3a2a0a" strokeWidth="2.5"/>
                {/* Long hair left */}
                <path d="M30 80 Q18 130 26 165 Q34 145 38 120 Q40 100 36 80Z" fill="#c8860a" stroke="#3a2a0a" strokeWidth="2"/>
                {/* Long hair right */}
                <path d="M130 80 Q142 130 134 165 Q126 145 122 120 Q120 100 124 80Z" fill="#c8860a" stroke="#3a2a0a" strokeWidth="2"/>
                {/* Face */}
                <ellipse cx="80" cy="78" rx="44" ry="46" fill="#f5c9a0" stroke="#3a2a0a" strokeWidth="2.5"/>
                {/* Hair top / fringe */}
                <path d="M36 62 Q48 38 80 36 Q112 38 124 62 Q110 52 80 50 Q50 52 36 62Z" fill="#c8860a" stroke="#3a2a0a" strokeWidth="2"/>
                {/* Eyes */}
                <ellipse cx="64" cy="76" rx="7" ry="8" fill="#2a1a0a"/>
                <ellipse cx="96" cy="76" rx="7" ry="8" fill="#2a1a0a"/>
                {/* Eye shine */}
                <circle cx="67" cy="73" r="2.5" fill="white"/>
                <circle cx="99" cy="73" r="2.5" fill="white"/>
                {/* Nose */}
                <path d="M77 88 Q80 92 83 88" stroke="#c08060" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
                {/* Smile */}
                <path d="M68 100 Q80 110 92 100" stroke="#3a2a0a" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
                {/* Blush */}
                <ellipse cx="57" cy="96" rx="9" ry="5" fill="#ffb3ba" opacity="0.5"/>
                <ellipse cx="103" cy="96" rx="9" ry="5" fill="#ffb3ba" opacity="0.5"/>
                {/* Earrings */}
                <circle cx="36" cy="90" r="3" fill="#93c5fd" stroke="#3a2a0a" strokeWidth="1.5"/>
                {/* Necklace */}
                <path d="M58 128 Q80 135 102 128" stroke="#d4af37" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <circle cx="80" cy="136" r="3" fill="#d4af37"/>
                {/* Shoulders / top */}
                <path d="M36 140 Q36 160 50 168 L110 168 Q124 160 124 140 Q110 132 80 130 Q50 132 36 140Z" fill="#f5c9a0" stroke="#3a2a0a" strokeWidth="2"/>
                {/* Little heart */}
                <text x="118" y="48" fontSize="18" fill="#fda4af">♡</text>
              </svg>
            </div>

            {/* Text */}
            <div style={{ flex: 1, minWidth: 240 }}>
              <h1 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 8, letterSpacing: "-0.02em" }}>
                Hi, I'm Fiona 🌸
              </h1>
              <div style={{ width: 100, height: 4, borderRadius: 999, background: "linear-gradient(90deg, #fda4af, #fde68a)", marginBottom: 20 }} />
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.8, marginBottom: 16 }}>
                CS student at Northeastern, but honestly pretty chill about life in general. I adapt fast — new cities, new codebases, new people — it all clicks pretty naturally for me.
              </p>
              <p style={{ fontSize: "1.05rem", color: "#555", lineHeight: 1.8 }}>
                I make friends easily, learn things quickly, and tend to go with the flow. Whether I'm debugging code at 2am or planning a spontaneous trip, same energy. 😌
              </p>
            </div>

          </div>
        </section>

        {/* ── INTERESTS ── */}
        <section style={{ marginBottom: 56, animation: "fadeInUp 0.6s ease-out 0.2s both" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 8 }}>A bit about me</h2>
          <div style={{ width: 80, height: 4, borderRadius: 999, background: "linear-gradient(90deg, #fda4af, #fde68a)", marginBottom: 28 }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>

            <div className="interest-card" style={{ background: "#ffe4e6" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🎵</div>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 6, color: "#2a2a2a" }}>Music</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
                R&B and EDM all day. Always have something playing — silence is underrated but music hits different.
              </p>
            </div>

            <div className="interest-card" style={{ background: "#e0f2fe" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🏔️</div>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 6, color: "#2a2a2a" }}>Skiing & Snowboarding</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
                Nothing beats flying down a slope. Swiss Alps checked — the views were unreal.
              </p>
            </div>

            <div className="interest-card" style={{ background: "#fef3c7" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>📚</div>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 6, color: "#2a2a2a" }}>Books</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
                Mystery, sci-fi, satirical fiction. Big Keigo Higashino fan — his plots never go where you expect.
              </p>
            </div>

            <div className="interest-card" style={{ background: "#ffe4e6" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>✈️</div>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 6, color: "#2a2a2a" }}>Travel</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
                11 countries so far — Greece, Malta, Japan, France, Spain, Switzerland and more. Always planning the next one.
              </p>
              <Link href="/travel" style={{ fontSize: 13, color: "#fda4af", fontWeight: 700, textDecoration: "underline" }}>
                See my photos →
              </Link>
            </div>

            <div className="interest-card" style={{ background: "#e0f2fe" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🌊</div>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 6, color: "#2a2a2a" }}>Adventure</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
                Scuba dived in Greece, snorkeled in Malta — I'll try pretty much anything once. Twice if it's fun.
              </p>
            </div>

            <div className="interest-card" style={{ background: "#fef3c7" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>👥</div>
              <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 6, color: "#2a2a2a" }}>People person</h3>
              <p style={{ fontSize: 14, color: "#666", lineHeight: 1.6 }}>
                I make friends wherever I go. New environments don't scare me — I just find my people and settle in.
              </p>
            </div>

          </div>
        </section>

        {/* ── CURRENTLY ── */}
        <section style={{ animation: "fadeInUp 0.6s ease-out 0.3s both" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 8 }}>Currently</h2>
          <div style={{ width: 80, height: 4, borderRadius: 999, background: "linear-gradient(90deg, #fda4af, #fde68a)", marginBottom: 28 }} />

          <div style={{ display: "grid", gap: 14 }}>

            <div className="currently-card">
              <span style={{ fontSize: 24, flexShrink: 0 }}>🎵</span>
              <div>
                <div style={{ fontSize: 12, color: "#aaa", fontWeight: 700, marginBottom: 2 }}>LISTENING TO</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#2a2a2a" }}>Knock2</div>
              </div>
            </div>

            <div className="currently-card">
              <span style={{ fontSize: 24, flexShrink: 0 }}>📖</span>
              <div>
                <div style={{ fontSize: 12, color: "#aaa", fontWeight: 700, marginBottom: 2 }}>READING</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#2a2a2a" }}>Nothing right now — always open to recs 👀</div>
              </div>
            </div>

            <div className="currently-card">
              <span style={{ fontSize: 24, flexShrink: 0 }}>🔨</span>
              <div>
                <div style={{ fontSize: 12, color: "#aaa", fontWeight: 700, marginBottom: 2 }}>BUILDING</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#2a2a2a" }}>This portfolio — and looking for co-op opportunities (July–Dec 2026)</div>
              </div>
            </div>

            <div className="currently-card">
              <span style={{ fontSize: 24, flexShrink: 0 }}>📍</span>
              <div>
                <div style={{ fontSize: 12, color: "#aaa", fontWeight: 700, marginBottom: 2 }}>BASED IN</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#2a2a2a" }}>Boston, MA — Northeastern University</div>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: "center", marginTop: 64, fontSize: 13, color: "#aaa" }}>
          Built with Next.js · Deployed on Vercel 🐾
        </footer>

      </div>
    </main>
  );
}
