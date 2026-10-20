
import { ArrowUp, Code, Users } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0c0e]">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-6">
        <a
          href="#top"
          className="w-fit text-base font-semibold tracking-tight text-white"
        >
          ASHOK<span className="text-[#65e6ee]">.</span>
        </a>

        <p className="text-xs leading-6 text-[#7f8999]">
          © 2026 {portfolio.name}. Built with Next.js and TypeScript.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={portfolio.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            title="GitHub"
            className="text-[#929baa] transition-colors hover:text-[#65e6ee]"
          >
            <Code size={18} />
          </a>

          <a
            href={portfolio.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            title="LinkedIn"
            className="text-[#929baa] transition-colors hover:text-[#65e6ee]"
          >
            <Users size={18} />
          </a>

          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-xs text-[#aab4c4] transition-colors hover:border-[#65e6ee]/40 hover:text-[#65e6ee]"
          >
            Back to top
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
