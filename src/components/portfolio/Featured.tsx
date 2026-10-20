
"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Code,
  ExternalLink,
  Cpu,
  Radio,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import TechTags from "./TechTags";
import PasafeDiagram from "./PasafeDiagram";

const ease = [0.22, 1, 0.36, 1] as const;

const capabilities = [
  {
    number: "01",
    title: "Device telemetry",
    description: "Sensor inputs and vehicle data",
    icon: Cpu,
  },
  {
    number: "02",
    title: "Connected infrastructure",
    description: "Device-to-backend communication",
    icon: Radio,
  },
  {
    number: "03",
    title: "Safety workflows",
    description: "Monitoring and emergency alerts",
    icon: ShieldCheck,
  },
];

export default function Featured() {
  const project = portfolio.pasafe;
  const shouldReduceMotion = useReducedMotion();

  const details = [
    {
      number: "01",
      eyebrow: "THE PROBLEM",
      title: "When seconds matter.",
      text: project.problem,
    },
    {
      number: "02",
      eyebrow: "SYSTEM DESIGN",
      title: "Connecting the pieces.",
      text: project.solution,
    },
    {
      number: "03",
      eyebrow: "MY ROLE",
      title: "From architecture to integration.",
      text: project.contribution,
    },
    {
      number: "04",
      eyebrow: "ENGINEERING",
      title: "Beyond the interface.",
      text: "Backend APIs, device communication, data persistence, authentication, and hardware-software integration.",
    },
  ];

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl scroll-mt-24 overflow-hidden px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-32 lg:px-10"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-48 -z-10 h-[360px] w-[360px] rounded-full bg-[#1768ff]/[0.07] blur-[110px] sm:-right-64 sm:h-[600px] sm:w-[600px] sm:blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-[55%] -z-10 h-[320px] w-[320px] rounded-full bg-[#65e6ee]/[0.035] blur-[100px] sm:-left-64 sm:h-[480px] sm:w-[480px] sm:blur-[140px]"
      />

      <SectionHead
        number="01"
        eyebrow="Featured engineering · Case study"
        title="Software meets the physical world."
        description="Connected systems demand more than code. They require thoughtful architecture across devices, communication, backend services, and real-world constraints."
      />

      {/* Featured project */}
      <Reveal>
        <motion.article
          whileHover={
            shouldReduceMotion
              ? undefined
              : { borderColor: "rgba(101,230,238,0.28)" }
          }
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-2xl border border-white/[0.1] bg-[#0d1118] shadow-[0_30px_100px_rgba(0,0,0,0.18)] sm:rounded-3xl"
        >
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#65e6ee]/70 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-[280px] w-[280px] rounded-full bg-[#65e6ee]/[0.07] blur-[80px] transition-opacity duration-700 group-hover:opacity-150 sm:-right-20 sm:-top-40 sm:h-[440px] sm:w-[440px] sm:blur-[100px]"
          />

          <div className="relative p-4 sm:p-8 md:p-10 lg:p-12">
            {/* Project metadata */}
            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
              <div className="min-w-0">
                <div className="inline-flex flex-wrap items-center gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#65e6ee] sm:text-[11px] sm:tracking-[0.2em]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#65e6ee] shadow-[0_0_12px_#65e6ee]" />
                  Featured project
                  <span className="text-white/20">/</span>
                  01
                </div>

                <p className="mt-3 break-words text-xs leading-5 text-white/40">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex w-full min-w-0 items-start gap-3 rounded-xl border border-amber-300/20 bg-amber-200/[0.045] px-3 py-3 sm:w-auto sm:max-w-[300px] sm:px-4">
                <span
                  className="mt-0.5 shrink-0 text-amber-200"
                  aria-hidden="true"
                >
                  ✦
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-amber-100/70 sm:tracking-[0.15em]">
                    Recognition
                  </p>
                  <p className="mt-1 break-words text-xs leading-5 text-amber-50">
                    {project.award}
                  </p>
                </div>
              </div>
            </div>

            {/* Main project heading */}
            <div className="mt-8 grid min-w-0 gap-7 sm:mt-12 sm:gap-10 lg:grid-cols-[minmax(0,1fr)_250px] lg:items-end">
              <div className="min-w-0 max-w-3xl">
                <h3 className="break-words text-[clamp(2.8rem,13vw,5rem)] font-semibold leading-[0.9] tracking-[-0.085em] text-white sm:text-[clamp(3.6rem,9vw,7rem)] sm:leading-[0.86]">
                  PA<span className="text-[#65e6ee]">-</span>SAFE
                  <span className="ml-2 align-top font-mono text-xs font-normal tracking-normal text-white/30 sm:ml-3 sm:text-base">
                    / 001
                  </span>
                </h3>

                <p className="mt-5 max-w-2xl break-words text-sm leading-7 text-[#aab4c4] sm:mt-7 sm:text-base sm:leading-8">
                  {project.description}
                </p>
              </div>

              <div className="flex min-w-0 flex-col gap-3 min-[420px]:flex-row lg:flex-col">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                  whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                  className="group/button inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#65e6ee] px-3 py-3 text-sm font-semibold text-[#071014] transition-colors hover:bg-[#9af1f2] min-[420px]:flex-1 min-[420px]:px-4 lg:w-full"
                >
                  <Code size={16} className="shrink-0" />
                  <span>View source code</span>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </motion.a>

                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.025] px-3 py-3 text-sm text-white transition-colors hover:border-[#65e6ee]/40 hover:bg-white/[0.05] hover:text-[#65e6ee] min-[420px]:flex-1 min-[420px]:px-4 lg:w-full"
                  >
                    Live project
                    <ExternalLink size={14} className="shrink-0" />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Capability cards */}
            <div className="mt-8 grid gap-2 border-t border-white/[0.09] pt-5 sm:mt-12 sm:grid-cols-3 sm:gap-3 sm:pt-7">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: shouldReduceMotion ? 0 : 0.6,
                      delay: shouldReduceMotion ? 0 : index * 0.1,
                      ease,
                    }}
                    className="group/capability relative min-w-0 overflow-hidden rounded-xl border border-white/[0.06] p-4 transition-colors duration-300 hover:border-white/[0.09] hover:bg-white/[0.025] sm:rounded-2xl sm:border-transparent sm:p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-[#65e6ee]">
                        {item.number}
                      </span>
                      <Icon
                        size={17}
                        strokeWidth={1.5}
                        className="text-white/35 transition-colors duration-300 group-hover/capability:text-[#65e6ee]"
                      />
                    </div>

                    <h4 className="mt-4 break-words text-sm font-medium text-white sm:mt-6">
                      {item.title}
                    </h4>
                    <p className="mt-2 break-words text-xs leading-6 text-[#8793a5]">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.article>
      </Reveal>

      {/* Architecture */}
      <Reveal delay={0.1}>
        <div className="mt-4 min-w-0 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0c1017] sm:mt-6 sm:rounded-3xl">
          <div className="flex min-w-0 flex-col gap-4 border-b border-white/[0.08] px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7 sm:py-5">
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#65e6ee] sm:text-[10px] sm:tracking-[0.18em]">
                System architecture
              </p>
              <h3 className="mt-2 break-words text-lg font-medium tracking-tight text-white sm:text-xl">
                How the system connects.
              </h3>
            </div>

            <div className="inline-flex w-fit max-w-full items-center gap-2 rounded-full border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white/45 sm:tracking-[0.12em]">
              <Workflow size={13} className="shrink-0" />
              Hardware + software
            </div>
          </div>

          <div className="min-w-0 overflow-x-auto p-2 sm:p-5 md:p-7">
            <PasafeDiagram />
          </div>
        </div>
      </Reveal>

      {/* Engineering story */}
      <div className="mt-16 sm:mt-24 md:mt-32">
        <Reveal>
          <div className="mb-7 flex min-w-0 flex-col gap-4 sm:mb-9 sm:gap-5 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#65e6ee] sm:text-[10px] sm:tracking-[0.18em]">
                Engineering notes
              </p>
              <h3 className="mt-3 max-w-xl break-words text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                The thinking behind the build.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#8793a5]">
              A closer look at the challenge, system design, and engineering
              contributions behind the prototype.
            </p>
          </div>
        </Reveal>

        <div className="grid min-w-0 gap-3 sm:grid-cols-2">
          {details.map((detail, index) => (
            <Reveal key={detail.number} delay={index * 0.07}>
              <motion.article
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="group relative h-full min-w-0 overflow-hidden rounded-xl border border-white/[0.09] bg-[#0e1219] p-5 sm:rounded-2xl sm:p-7 md:p-8"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#65e6ee]/[0.035] blur-3xl transition-colors duration-500 group-hover:bg-[#65e6ee]/[0.1]"
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.12em] text-[#65e6ee]">
                    {detail.number} <span className="text-white/25">/ 04</span>
                  </span>

                  <ArrowDownRight
                    size={17}
                    className="text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-[#65e6ee]"
                  />
                </div>

                <p className="relative mt-6 font-mono text-[9px] uppercase tracking-[0.14em] text-white/35 sm:mt-8 sm:tracking-[0.18em]">
                  {detail.eyebrow}
                </p>

                <h4 className="relative mt-3 break-words text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {detail.title}
                </h4>

                <p className="relative mt-4 break-words text-sm leading-7 text-[#aab4c4]">
                  {detail.text}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <Reveal delay={0.08}>
        <div className="relative mt-8 min-w-0 overflow-hidden rounded-xl border border-white/[0.09] bg-[#0d1118] p-4 sm:mt-12 sm:rounded-2xl sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#1768ff]/[0.08] blur-[90px]"
          />

          <div className="relative mb-5 flex min-w-0 flex-col gap-3 sm:mb-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#65e6ee] sm:text-[10px] sm:tracking-[0.18em]">
                Technology stack
              </p>
              <h4 className="mt-2 break-words text-xl font-semibold tracking-tight text-white">
                Tools behind the system.
              </h4>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/35">
              PA-SAFE / STACK
            </span>
          </div>

          <div className="relative min-w-0">
            <TechTags tags={project.technologies} />
          </div>
        </div>
      </Reveal>

      {/* Section footer */}
      <div className="mt-7 flex min-w-0 flex-col gap-4 border-t border-white/[0.08] pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
        <div className="flex min-w-0 items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-[#65e6ee]">
            <Workflow size={16} />
          </span>
          <p className="max-w-md text-xs leading-6 text-[#8793a5]">
            Built at the intersection of software, connected devices, and
            real-world safety.
          </p>
        </div>

        <a
          href="#projects"
          className="group inline-flex min-h-10 w-fit shrink-0 items-center gap-2 text-xs font-medium text-[#aab4c4] transition-colors hover:text-[#65e6ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65e6ee]"
        >
          Explore another project
          <ArrowDownRight
            size={15}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  );
}
