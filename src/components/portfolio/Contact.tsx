"use client";
import {
  ArrowUpRight,
  Code,
  Users,
  Mail,
  Copy,
  Code2,
  Check,
} from "lucide-react";
import { useState } from "react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const contacts = [
  {
    label: "EMAIL",
    value: portfolio.email,
    href: `mailto:${portfolio.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "GITHUB",
    value: "Explore my code and projects",
    href: portfolio.links.github,
    icon: Code,
    external: true,
  },
  {
    label: "LINKEDIN",
    value: "Connect professionally",
    href: portfolio.links.linkedin,
    icon: Users,
    external: true,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(portfolio.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${portfolio.email}`;
    }
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-6 md:py-32"
    >
      <SectionHead
        number="05"
        eyebrow="Contact"
        title="Let's build something meaningful."
        description="I'm a final-year Computer Science student and Software Developer interested in backend engineering, full-stack development, and applied AI. Let's connect."
      />

      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#10141b] p-6 md:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#65e6ee]/10 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#65e6ee]/20 bg-[#65e6ee]/5 px-3 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#65e6ee]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#65e6ee]">
                  Open to software opportunities
                </span>
              </div>

              <h3 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#f2f4f8] md:text-5xl">
                From APIs to intelligent systems.
                <span className="mt-2 block text-[#65e6ee]">
                  Let's create impact.
                </span>
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#aab4c4] md:text-base">
                I've built backend services, IoT integrations, and
                machine-learning pipelines, and gained research and
                data-analysis experience through an AI Data Analyst
                internship. I'm ready to contribute, learn, and build
                reliable software with a great team.
              </p>

              <a
                href={`mailto:${portfolio.email}?subject=${encodeURIComponent(
                  "Software Development Opportunity",
                )}`}
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#2f6bff] px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4a7fff]"
              >
                <Mail size={16} />
                Get in touch
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="relative space-y-3">
              {contacts.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#0b0c0e]/70 p-4 transition-all duration-200 hover:border-[#65e6ee]/40 hover:bg-[#141b25]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#65e6ee]/20 bg-[#65e6ee]/5 text-[#65e6ee] transition-colors group-hover:bg-[#65e6ee]/10">
                      <Icon size={19} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[10px] tracking-[0.14em] text-[#7f8999]">
                        {contact.label}
                      </p>

                      <p className="mt-1 break-words text-sm text-[#e4e9f1] transition-colors group-hover:text-[#65e6ee]">
                        {contact.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-[#687486] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#65e6ee]"
                    />
                  </a>
                );
              })}

              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-1 pt-2 text-xs text-[#929baa] transition-colors hover:text-[#65e6ee]"
              >
                {copied ? <Check size={13} /> : <Copy size={13} />}
                {copied ? "Email copied!" : "Copy email address"}
              </button>
            </div>
          </div>

          <div className="relative mt-10 border-t border-white/10 pt-5">
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#687486]">
              <span className="inline-flex items-center gap-2">
                <Code2 size={13} className="text-[#65e6ee]" />
                Backend engineering
              </span>
              <span>Full-stack development</span>
              <span>Applied AI / ML</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
