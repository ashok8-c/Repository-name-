
"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Atom,
  Code,
  Orbit,
  Radio,
  ScanSearch,
  Sparkles,
  Telescope,
  Waves,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import TechTags from "./TechTags";
import LightCurve from "./LightCurve";

const pipeline = [
  {
    number: "01",
    title: "Observe",
    subtitle: "Kepler / TESS",
    description:
      "Start with stellar brightness measurements collected across time.",
    icon: Telescope,
    color: "#8b9dff",
  },
  {
    number: "02",
    title: "Prepare",
    subtitle: "Signal processing",
    description:
      "Clean, normalize, and detrend light curves to reveal useful patterns.",
    icon: Waves,
    color: "#65e6ee",
  },
  {
    number: "03",
    title: "Investigate",
    subtitle: "Transit analysis",
    description:
      "Look for recurring brightness dips that may indicate a planetary transit.",
    icon: ScanSearch,
    color: "#c4a1ff",
  },
  {
    number: "04",
    title: "Classify",
    subtitle: "ML pipeline",
    description:
      "Analyse candidate signals with machine-learning classification.",
    icon: Atom,
    color: "#91f2c3",
  },
];

const stars = [
  { x: "7%", y: "17%", delay: 0.1, size: 2 },
  { x: "16%", y: "73%", delay: 0.8, size: 1 },
  { x: "26%", y: "30%", delay: 1.3, size: 2 },
  { x: "37%", y: "83%", delay: 0.4, size: 1 },
  { x: "49%", y: "12%", delay: 1.1, size: 2 },
  { x: "58%", y: "66%", delay: 0.6, size: 1 },
  { x: "69%", y: "23%", delay: 1.5, size: 2 },
  { x: "78%", y: "78%", delay: 0.2, size: 2 },
  { x: "88%", y: "38%", delay: 0.9, size: 1 },
  { x: "94%", y: "15%", delay: 1.7, size: 2 },
];

export default function Exoplanet() {
  const project = portfolio.projects[0];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative isolate mx-auto max-w-6xl scroll-mt-24 overflow-hidden px-5 py-24 md:px-6 md:py-32"
    >
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[45%] top-32 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/[0.07] blur-[100px]" />
        <div className="absolute right-[-10%] top-[45%] h-72 w-72 rounded-full bg-cyan-400/[0.05] blur-[100px]" />

        {stars.map((star, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: star.x,
              top: star.y,
              width: star.size,
              height: star.size,
              boxShadow: "0 0 12px rgba(150,190,255,0.7)",
            }}
            animate={
              shouldReduceMotion
                ? undefined
                : { opacity: [0.2, 0.9, 0.3], scale: [1, 1.5, 1] }
            }
            transition={{
              duration: 3 + star.delay,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <SectionHead
        number="02"
        eyebrow="Machine learning · Space"
        title="Finding signals in stellar data."
        description="Exploring how machine learning can help analyse astronomical light curves and identify potential exoplanet candidates."
      />

      {/* Project identity */}
      <Reveal>
        <div className="relative mb-8 overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0b101a]/90 p-5 shadow-[0_20px_100px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-7 md:p-9">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(101,230,238,0.09),transparent_45%),radial-gradient(ellipse_at_0%_100%,rgba(139,157,255,0.08),transparent_40%)]" />

          <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-cyan-200 sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  Research project
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] tracking-wider text-slate-400 sm:text-xs">
                  PROJECT / 01
                </span>
              </div>

              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                {project.name}
                <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text text-transparent">
                  Beyond the visible.
                </span>
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                {project.description}
              </p>
            </div>

            {/* Orbital visual */}
            <div
              aria-label="Decorative illustration of an exoplanet orbiting a star"
              role="img"
              className="relative mx-auto flex h-48 w-48 shrink-0 items-center justify-center sm:h-56 sm:w-56 md:mr-4"
            >
              <div className="absolute h-40 w-40 rounded-full border border-white/[0.07] sm:h-48 sm:w-48" />
              <div className="absolute h-32 w-32 rounded-full border border-cyan-200/[0.12] sm:h-40 sm:w-40" />

              <motion.div
                className="absolute h-36 w-36 rounded-full border border-dashed border-indigo-300/25 sm:h-44 sm:w-44"
                animate={
                  shouldReduceMotion ? undefined : { rotate: 360 }
                }
                transition={{
                  duration: 45,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <div className="absolute h-20 w-20 rounded-full bg-amber-300/20 blur-2xl sm:h-24 sm:w-24" />
              <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-white via-amber-200 to-orange-400 shadow-[0_0_35px_rgba(255,197,110,0.55)] sm:h-14 sm:w-14">
                <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/90 to-transparent" />
              </div>

              <motion.div
                className="absolute h-36 w-36 sm:h-44 sm:w-44"
                animate={
                  shouldReduceMotion ? undefined : { rotate: 360 }
                }
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border border-cyan-100/50 bg-gradient-to-br from-cyan-100 to-blue-500 shadow-[0_0_22px_rgba(101,230,238,0.7)] sm:h-5 sm:w-5" />
              </motion.div>

              <span className="absolute bottom-0 font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
                Stellar system / concept
              </span>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Research visualisation */}
      <div className="grid items-stretch gap-5 lg:grid-cols-[1.12fr_0.88fr]">
        <Reveal>
          <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c111a] p-5 transition-colors duration-500 hover:border-cyan-200/25 sm:p-7">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(101,230,238,0.07),transparent_55%)]" />

            <div className="relative flex items-start justify-between gap-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
                  Signal laboratory
                </p>
                <h4 className="mt-2 text-lg font-medium tracking-tight text-white sm:text-xl">
                  Stellar brightness
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Illustrative transit-like signal
                </p>
              </div>

              <div className="rounded-xl border border-cyan-200/15 bg-cyan-200/[0.05] p-3 text-cyan-200">
                <Waves size={19} strokeWidth={1.5} />
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-xl border border-white/[0.06] bg-[#080d14] p-2 sm:p-3">
              <LightCurve />
            </div>

            <div className="relative mt-5 grid grid-cols-3 gap-2">
              {[
                { label: "INPUT", value: "Light curve" },
                { label: "SIGNAL", value: "Brightness dip" },
                { label: "GOAL", value: "Candidate search" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-3"
                >
                  <p className="font-mono text-[9px] tracking-[0.16em] text-slate-500 sm:text-[10px]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-[10px] font-medium leading-4 text-slate-300 sm:text-xs">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[11px] leading-5 text-slate-500">
              Conceptual signal only — not measured astronomical data.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c111a] p-5 sm:p-7">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-violet-400/[0.06] blur-3xl" />

            <div className="relative flex items-center gap-3">
              <div className="rounded-xl border border-violet-300/15 bg-violet-300/[0.06] p-3 text-violet-200">
                <Workflow size={19} strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-violet-200 sm:text-xs">
                  Engineering approach
                </p>
                <h4 className="mt-1 text-lg font-medium text-white">
                  From data to candidates
                </h4>
              </div>
            </div>

            <div className="relative mt-8 space-y-0">
              {pipeline.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.number} className="relative flex gap-4 pb-7 last:pb-0">
                    {index < pipeline.length - 1 && (
                      <div className="absolute bottom-0 left-[17px] top-9 w-px bg-gradient-to-b from-white/20 to-white/[0.03]" />
                    )}

                    <div
                      className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
                      style={{
                        color: step.color,
                        borderColor: `${step.color}40`,
                        backgroundColor: `${step.color}12`,
                      }}
                    >
                      <Icon size={16} strokeWidth={1.7} />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h5 className="text-sm font-medium text-slate-100">
                          {step.title}
                        </h5>
                        <span className="font-mono text-[10px] text-slate-600">
                          {step.number}
                        </span>
                      </div>
                      <p className="mt-1 text-xs font-medium" style={{ color: step.color }}>
                        {step.subtitle}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Stack and links */}
      <Reveal>
        <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-[#0c111a]">
          <div className="grid gap-7 p-5 sm:p-7 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="flex items-center gap-2">
                <Radio size={15} className="text-cyan-200" />
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-200 sm:text-xs">
                  Tools & technologies
                </p>
              </div>

              <div className="mt-4">
                <TechTags tags={project.technologies} />
              </div>
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-cyan-200/20 bg-cyan-200/[0.06] px-5 py-3 text-sm font-medium text-cyan-100 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-200/[0.11] hover:shadow-[0_0_35px_rgba(101,230,238,0.08)]"
            >
              <Code size={16} />
              Explore repository
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.07] px-5 py-4 sm:px-7 md:px-8">
            <span className="inline-flex items-center gap-2 text-xs text-slate-500">
              <Sparkles size={13} className="text-violet-300" />
              Astronomy meets machine learning
            </span>

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-xs text-slate-400 transition-colors hover:text-white"
            >
              Discuss the project
              <ArrowDownRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
