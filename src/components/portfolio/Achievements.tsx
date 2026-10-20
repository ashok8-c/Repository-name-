
import { ArrowUpRight, Award, Medal, Telescope } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

const achievementIcons = [Award, Telescope, Medal];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="mx-auto max-w-6xl scroll-mt-24 px-5 py-24 md:px-6 md:py-32"
    >
      <SectionHead
        number="04"
        eyebrow="Recognition"
        title="Milestones worth building on."
        description="A record of project work, technical exploration, and participation in innovation-focused challenges."
      />

      <div className="space-y-4">
        {portfolio.achievements.map((achievement, index) => {
          const Icon = achievementIcons[index] ?? Medal;

          return (
            <Reveal key={achievement.title} delay={index * 0.07}>
              <article
                className={`group flex flex-col gap-5 rounded-xl border p-5 transition-all duration-300 hover:border-[#65e6ee]/40 sm:flex-row sm:items-start sm:p-7 ${
                  achievement.featured
                    ? "border-[#65e6ee]/30 bg-[#101922]"
                    : "border-white/10 bg-[#10141b]"
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#65e6ee]/20 bg-[#65e6ee]/5 text-[#65e6ee]">
                  <Icon size={22} strokeWidth={1.6} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-[#f2f4f8] md:text-xl">
                      {achievement.title}
                    </h3>

                    {achievement.featured && (
                      <span className="rounded-md border border-[#65e6ee]/25 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-[#65e6ee]">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-[#aab4c4]">
                    {achievement.detail}
                  </p>
                </div>

                <span className="shrink-0 self-start font-mono text-xs text-[#687486]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.15}>
        <a
          href={portfolio.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 text-sm text-[#aab4c4] transition-colors hover:text-[#65e6ee]"
        >
          Explore more of my work on GitHub
          <ArrowUpRight size={15} />
        </a>
      </Reveal>
    </section>
  );
}
