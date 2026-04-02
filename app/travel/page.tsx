"use client";
import Link from "next/link";

type Photo = {
  src: string;
  location: string;
  country: string;
  emoji: string;
  rotate: number;
  accent: string;
};

const PHOTOS: Photo[] = [
  { src: "/travel/tokyo-tower.jpeg",      location: "Tokyo Tower",              country: "Japan",   emoji: "🇯🇵", rotate: -1.5, accent: "#ffe4e6" },
  { src: "/travel/malta-boat.jpeg",       location: "Blue Lagoon, Malta",       country: "Malta",   emoji: "🇲🇹", rotate:  1.2, accent: "#e0f2fe" },
  { src: "/travel/malta-snorkel.jpeg",    location: "Snorkeling, Malta",        country: "Malta",   emoji: "🇲🇹", rotate: -0.8, accent: "#e0f2fe" },
  { src: "/travel/thessaloniki.jpeg",     location: "Thessaloniki, Greece",     country: "Greece",  emoji: "🇬🇷", rotate:  1.8, accent: "#fef3c7" },
  { src: "/travel/greece-dive.jpeg",      location: "Scuba diving, Greece",     country: "Greece",  emoji: "🇬🇷", rotate: -1.2, accent: "#fef3c7" },
  { src: "/travel/athens.jpeg",           location: "Parthenon, Athens",        country: "Greece",  emoji: "🇬🇷", rotate:  0.9, accent: "#fef3c7" },
  { src: "/travel/milan.jpeg",            location: "Duomo di Milano, Italy",   country: "Italy",   emoji: "🇮🇹", rotate: -2.0, accent: "#ffe4e6" },
  { src: "/travel/vienna.jpeg",           location: "St. Stephen's, Vienna",    country: "Austria", emoji: "🇦🇹", rotate:  1.5, accent: "#e0f2fe" },
  { src: "/travel/swiss1.jpeg",           location: "Swiss Alps",               country: "Switzerland", emoji: "🇨🇭", rotate: -1.0, accent: "#fef3c7" },
  { src: "/travel/swiss2.jpeg",           location: "Swiss Alps",               country: "Switzerland", emoji: "🇨🇭", rotate:  2.0, accent: "#fef3c7" },
  { src: "/travel/swiss3.jpeg",           location: "Swiss Alps",               country: "Switzerland", emoji: "🇨🇭", rotate: -0.5, accent: "#fef3c7" },
  { src: "/travel/swiss-selfie.jpeg",     location: "Swiss Alps viewpoint",     country: "Switzerland", emoji: "🇨🇭", rotate:  1.3, accent: "#fef3c7" },
  { src: "/travel/cologne.jpeg",          location: "Cologne Cathedral, Germany","country": "Germany", emoji: "🇩🇪", rotate: -1.8, accent: "#ffe4e6" },
  { src: "/travel/louvre-outside.jpeg",   location: "Louvre Pyramid, Paris",    country: "France",  emoji: "🇫🇷", rotate:  0.7, accent: "#e0f2fe" },
  { src: "/travel/louvre-inside.jpeg",    location: "Venus de Milo, Louvre",    country: "France",  emoji: "🇫🇷", rotate: -1.5, accent: "#e0f2fe" },
  { src: "/travel/paris-wheel.jpeg",      location: "Christmas Market, Paris",  country: "France",  emoji: "🇫🇷", rotate:  1.0, accent: "#e0f2fe" },
  { src: "/travel/arc.jpeg",              location: "Arc de Triomphe, Paris",   country: "France",  emoji: "🇫🇷", rotate: -0.8, accent: "#e0f2fe" },
  { src: "/travel/eiffel.jpeg",           location: "Eiffel Tower, Paris",      country: "France",  emoji: "🇫🇷", rotate:  2.2, accent: "#e0f2fe" },
  { src: "/travel/sagrada-outside.jpeg",  location: "Sagrada Família, Barcelona","country": "Spain", emoji: "🇪🇸", rotate: -1.3, accent: "#fef3c7" },
  { src: "/travel/sagrada-inside.jpeg",   location: "Sagrada Família interior", country: "Spain",   emoji: "🇪🇸", rotate:  0.5, accent: "#fef3c7" },
];

const COUNTRIES = [
  { name: "Japan",        emoji: "🇯🇵", color: "#ffe4e6" },
  { name: "Malta",        emoji: "🇲🇹", color: "#e0f2fe" },
  { name: "Greece",       emoji: "🇬🇷", color: "#fef3c7" },
  { name: "Italy",        emoji: "🇮🇹", color: "#ffe4e6" },
  { name: "Austria",      emoji: "🇦🇹", color: "#e0f2fe" },
  { name: "Switzerland",  emoji: "🇨🇭", color: "#fef3c7" },
  { name: "Germany",      emoji: "🇩🇪", color: "#ffe4e6" },
  { name: "France",       emoji: "🇫🇷", color: "#e0f2fe" },
  { name: "Spain",        emoji: "🇪🇸", color: "#fef3c7" },
  { name: "South Korea",  emoji: "🇰🇷", color: "#ffe4e6" },
  { name: "Hong Kong",    emoji: "🇭🇰", color: "#e0f2fe" },
];

export default function TravelPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#fdfbf7", fontFamily: "'Georgia', serif" }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        .photo-card {
          background: #fff;
          border: 3px solid #4a4a4a;
          border-radius: 255px 15px 225px 15px / 15px 225px 15px 255px;
          box-shadow: 5px 5px 0 #4a4a4a;
          overflow: hidden;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
          break-inside: avoid;
          margin-bottom: 24px;
        }
        .photo-card:hover {
          transform: rotate(0deg) scale(1.03) translateY(-4px) !important;
          box-shadow: 8px 8px 0 #4a4a4a;
          z-index: 10;
          position: relative;
        }
        .country-pill {
          border: 2px solid #4a4a4a;
          border-radius: 20px 5px 20px 5px / 5px 20px 5px 20px;
          padding: 5px 14px;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
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
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage: "radial-gradient(#d1d5db 1px, transparent 1px)",
        backgroundSize: "20px 20px", opacity: 0.25,
      }} />

      {/* Floating blobs */}
      <div style={{ position: "fixed", top: "8%", left: "3%", width: 280, height: 280, background: "rgba(255,228,230,0.3)", borderRadius: "50%", filter: "blur(60px)", animation: "float 8s ease-in-out infinite", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "fixed", bottom: "12%", right: "5%", width: 220, height: 220, background: "rgba(224,242,254,0.35)", borderRadius: "50%", filter: "blur(60px)", animation: "float 10s ease-in-out infinite 1s", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 960, margin: "0 auto", padding: "60px 24px 80px" }}>

        {/* Header */}
        <div style={{ animation: "fadeInUp 0.6s ease-out both", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <div>
              <h1 style={{ fontSize: "2.8rem", fontWeight: 800, color: "#2a2a2a", marginBottom: 8, letterSpacing: "-0.02em" }}>
                ✈️ Places I've Been
              </h1>
              <div style={{ width: 120, height: 5, borderRadius: 999, background: "linear-gradient(90deg, #fda4af, #fde68a, #93c5fd)", marginBottom: 16 }} />
              <p style={{ color: "#777", fontSize: 15, maxWidth: 500, lineHeight: 1.7 }}>
                From the Alps to the Aegean — I collect experiences, not souvenirs. Here's a glimpse of my travels so far 🌍
              </p>
            </div>
            <Link href="/" className="paw-btn" style={{ background: "#fff", marginTop: 8 }}>← Home</Link>
          </div>

          {/* Country count */}
          <div style={{ marginTop: 28, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: "#999", fontWeight: 600 }}>
              {COUNTRIES.length} countries & regions:
            </span>
            {COUNTRIES.map(c => (
              <span key={c.name} className="country-pill" style={{ background: c.color }}>
                {c.emoji} {c.name}
              </span>
            ))}
          </div>
        </div>

        {/* Photo masonry grid */}
        <div style={{
          columns: "3 280px",
          gap: 24,
          animation: "fadeInUp 0.6s ease-out 0.2s both",
        }}>
          {PHOTOS.map((p, i) => (
            <div
              key={i}
              className="photo-card"
              style={{ transform: `rotate(${p.rotate}deg)` }}
            >
              <div style={{ position: "relative" }}>
                <img
                  src={p.src}
                  alt={p.location}
                  style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: 340 }}
                />
                {/* Location label */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.55))",
                  padding: "24px 14px 12px",
                }}>
                  <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}>
                    {p.emoji} {p.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ textAlign: "center", marginTop: 64, animation: "fadeInUp 0.6s ease-out 0.4s both" }}>
          <div style={{
            display: "inline-block",
            background: "#fff",
            border: "3px solid #4a4a4a",
            borderRadius: "255px 15px 225px 15px / 15px 225px 15px 255px",
            boxShadow: "5px 5px 0 #4a4a4a",
            padding: "20px 36px",
          }}>
            <p style={{ fontSize: 15, color: "#555", margin: 0, lineHeight: 1.7 }}>
              🗺️ Next on the list: always somewhere new
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
