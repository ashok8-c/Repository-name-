
import { Code2, Globe, Server, Wrench, BrainCircuit } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const icons = [Code2, Globe, Server, Wrench, BrainCircuit];

export default function Toolkit() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-6 md:py-32"
    >
      <SectionHead
        number="03"
        eyebrow="Technical toolkit"
        title="Tools for building things that work."
        description="The languages, frameworks, and engineering tools I use across software development and machine-learning projects."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolio.skills.map((group, index) => {
          const Icon = icons[index] ?? Code2;

          return (
            <Reveal key={group.group} delay={index * 0.06}>
              <article className="group h-full rounded-xl border border-white/10 bg-[#10141b] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#65e6ee]/35 hover:bg-[#121923] md:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#65e6ee]/20 bg-[#65e6ee]/5 text-[#65e6ee] transition-colors group-hover:bg-[#65e6ee]/10">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <span className="font-mono text-xs text-[#687486]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#f2f4f8]">
                  {group.group}
                </h3>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-white/10 bg-[#0b0c0e] px-3 py-2 text-xs text-[#b4bccb] transition-colors hover:border-[#65e6ee]/30 hover:text-[#65e6ee]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15}>
        <div className="mt-6 flex flex-col gap-3 rounded-xl border border-white/10 bg-[#0d1118] p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[#65e6ee]">
              Current direction
            </p>
            <p className="mt-2 text-sm leading-6 text-[#aab4c4]">
              Strengthening data structures, algorithms, backend engineering,
              and practical software design.
            </p>
          </div>

          <span className="shrink-0 font-mono text-xs text-[#7f8999]">
            LEARN · BUILD · ITERATE
          </span>
        </div>
      </Reveal>
    </section>
  );
}
