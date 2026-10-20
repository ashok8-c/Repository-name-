
import { ArrowUpRight, Code } from "lucide-react";
import Reveal from "./Reveal";
import TechTags from "./TechTags";

type Project = {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  github: string;
  demo: string | null;
};

type ProjectCardProps = {
  project: Project;
  index?: number;
};

export default function ProjectCard({
  project,
  index = 0,
}: ProjectCardProps) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#10141b] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#65e6ee]/40 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-[#65e6ee]">
            / {project.number}
          </span>

          <span className="text-right text-xs text-[#929baa]">
            {project.category}
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[#f2f4f8]">
          {project.name}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-7 text-[#aab4c4]">
          {project.description}
        </p>

        <div className="mt-6">
          <TechTags tags={project.technologies} />
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#2f6bff] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4a7fff]"
          >
            <Code size={15} />
            Source code
            <ArrowUpRight size={14} />
          </a>

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 text-sm text-[#e4e9f1] transition-colors hover:border-[#65e6ee]/60 hover:text-[#65e6ee]"
            >
              Live demo
              <ArrowUpRight size={14} />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}
