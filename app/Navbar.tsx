"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        
        <div className="h-[2px] w-full bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400" />

        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-3">
            
            {/* Logo */}
            <Link href="/" className="font-semibold tracking-tight">
            Fiona
            </Link>

            {/* Nav */}
            <nav className="flex items-center gap-6 text-sm">
            
            <Link
                href="/projects"
                className={`nav-link ${pathname === "/projects" ? "nav-active" : ""}`}
            >
                Projects
            </Link>

            <a
                href="/resume.pdf"
                className="nav-link"
            >
                Resume
            </a>

            <a
                href="https://github.com/FionaZ-heng"
                target="_blank"
                rel="noreferrer"
                className="nav-link"
            >
                GitHub
            </a>

            </nav>
        </div>
        </header>
    );
}
