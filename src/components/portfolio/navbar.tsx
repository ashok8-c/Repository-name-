
"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const navLinks = [
  { label: "PA-SAFE", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0b0c0e]/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex min-h-[68px] max-w-7xl items-center justify-between gap-5 px-5 md:px-8"
      >
        <a
          href="#top"
          className="shrink-0 text-base font-bold tracking-tight text-white"
        >
          Ashok S. Babu<span className="text-[#65e6ee]">.</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative py-2 text-sm text-[#aab4c4] transition-colors hover:text-[#65e6ee]"
            >
              {link.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[#65e6ee] transition-transform duration-200 group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <a
          href={portfolio.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-xs text-white transition-colors hover:border-[#65e6ee]/50 hover:text-[#65e6ee] sm:inline-flex"
        >
          GitHub <ArrowUpRight size={14} />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2 text-white hover:border-[#65e6ee]/50 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#0b0c0e] px-5 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-[#aab4c4] transition-colors hover:bg-white/5 hover:text-[#65e6ee]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
