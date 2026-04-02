"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <style>{`
        .nav-hand-link {
          position: relative;
          color: #4a4a4a;
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
          transition: color 0.2s ease;
        }
        .nav-hand-link::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #fda4af, #fde68a);
          transition: width 0.25s ease;
          border-radius: 2px;
        }
        .nav-hand-link:hover { color: #fda4af; }
        .nav-hand-link:hover::after,
        .nav-hand-link.active::after { width: 100%; }
        .nav-hand-link.active { color: #fda4af; }
      `}</style>

      <header style={{
        position: "sticky", top: 0, zIndex: 50,
        backgroundColor: "rgba(253,251,247,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "2px solid rgba(74,74,74,0.1)",
      }}>
        {/* Thin gradient top bar */}
        <div style={{
          height: 3, width: "100%",
          background: "linear-gradient(90deg, #fda4af, #fde68a, #a5f3fc, #fda4af)"
        }} />

        <div style={{
          maxWidth: 860, margin: "0 auto",
          padding: "12px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          {/* Logo */}
          <Link href="/" style={{
            fontWeight: 800, fontSize: 17, color: "#2a2a2a",
            textDecoration: "none", letterSpacing: "-0.01em",
            display: "flex", alignItems: "center", gap: 8
          }}>
            <span style={{ fontSize: 20 }}>🐾</span>
            Fiona
          </Link>

          {/* Nav links */}
          <nav style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <Link
              href="/projects"
              className={`nav-hand-link${pathname === "/projects" ? " active" : ""}`}
            >
              Projects
            </Link>
            <Link
              href="/travel"
              className={`nav-hand-link${pathname === "/travel" ? " active" : ""}`}
            >
              Travel
            </Link>
            <Link href="/about" className={`nav-hand-link${pathname === "/about" ? " active" : ""}`}>
              About
            </Link>
            <a href="/resume.pdf" className="nav-hand-link">
              Resume
            </a>
            <a
              href="https://github.com/FionaZ-heng"
              target="_blank"
              rel="noreferrer"
              className="nav-hand-link"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
