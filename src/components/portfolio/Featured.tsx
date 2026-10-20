
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
import { motion } from "motion/react";
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
      className="relative mx-auto max-w-7xl scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 md:py-32 lg:px-10"
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 top-48 -z-10 h-[600px] w-[600px] rounded-full bg-[#1768ff]/[0.07] blur-[150px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-64 top-[55%] -z-10 h-[480px] w-[480px] rounded-full bg-[#65e6ee]/[0.035] blur-[140px]"
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
          whileHover={{ borderColor: "rgba(101,230,238,0.28)" }}
          transition={{ duration: 0.3 }}
          className="group relative overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0d1118] shadow-[0_30px_100px_rgba(0,0,0,0.18)]"
        >
          {/* Top accent */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#65e6ee]/70 to-transparent"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-40 h-[440px] w-[440px] rounded-full bg-[#65e6ee]/[0.07] blur-[100px] transition-opacity duration-700 group-hover:opacity-150"
          />

          <div className="relative p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Project metadata */}
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#65e6ee] sm:text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#65e6ee] shadow-[0_0_12px_#65e6ee]" />
                  Featured project
                  <span className="text-white/20">/</span>
                  01
                </div>

                <p className="mt-3 text-xs text-white/40">
                  {project.subtitle}
                </p>
              </div>

              <div className="flex max-w-full items-start gap-3 self-start rounded-xl border border-amber-300/20 bg-amber-200/[0.045] px-4 py-3 sm:max-w-[300px]">
                <span className="mt-0.5 text-amber-200" aria-hidden="true">
                  ✦
                </span>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-amber-100/70">
                    Recognition
                  </p>
                  <p className="mt-1 text-xs leading-5 text-amber-50">
                    {project.award}
                  </p>
                </div>
              </div>
            </div>

            {/* Main project heading */}
            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_250px] lg:items-end">
              <div className="max-w-3xl">
                <h3 className="text-[clamp(3.6rem,9vw,7rem)] font-semibold leading-[0.86] tracking-[-0.085em] text-white">
                  PA<span className="text-[#65e6ee]">-</span>SAFE
                  <span className="ml-3 align-top font-mono text-sm font-normal tracking-normal text-white/30 sm:text-base">
                    / 001
                  </span>
                </h3>

                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#aab4c4] sm:text-base sm:leading-8">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="group/button inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#65e6ee] px-4 py-3 text-sm font-semibold text-[#071014] transition-colors hover:bg-[#9af1f2]"
                >
                  <Code size={16} />
                  View source code
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/button:translate-x-0.5 group-hover/button:-translate-y-0.5"
                  />
                </motion.a>

                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.025] px-4 py-3 text-sm text-white transition-colors hover:border-[#65e6ee]/40 hover:bg-white/[0.05] hover:text-[#65e6ee]"
                  >
                    Live project
                    <ExternalLink size={14} />
                  </motion.a>
                )}
              </div>
            </div>

            {/* Capability cards */}
            <div className="mt-12 grid gap-3 border-t border-white/[0.09] pt-7 sm:grid-cols-3">
              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.number}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease,
                    }}
                    className="group/capability relative overflow-hidden rounded-2xl border border-transparent p-4 transition-colors duration-300 hover:border-white/[0.09] hover:bg-white/[0.025] sm:p-5"
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

                    <h4 className="mt-6 text-sm font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs leading-6 text-[#8793a5]">
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
        <div className="mt-6 overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0c1017]">
          <div className="flex flex-col gap-4 border-b border-white/[0.08] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#65e6ee]">
                System architecture
              </p>
              <h3 className="mt-2 text-lg font-medium tracking-tight text-white sm:text-xl">
                How the system connects.
              </h3>
            </div>

            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-white/45">
              <Workflow size={13} />
              Hardware + software
            </div>
          </div>

          <div className="p-3 sm:p-5 md:p-7">
            <PasafeDiagram />
          </div>
        </div>
      </Reveal>

      {/* Engineering story */}
      <div className="mt-24 md:mt-32">
        <Reveal>
          <div className="mb-9 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#65e6ee]">
                Engineering notes
              </p>
              <h3 className="mt-3 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-4xl md:text-5xl">
                The thinking behind the build.
              </h3>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#8793a5]">
              A closer look at the challenge, system design, and engineering
              contributions behind the prototype.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {details.map((detail, index) => (
            <Reveal key={detail.number} delay={index * 0.07}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0e1219] p-6 sm:p-7 md:p-8"
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

                <p className="relative mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
                  {detail.eyebrow}
                </p>

                <h4 className="relative mt-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {detail.title}
                </h4>

                <p className="relative mt-4 text-sm leading-7 text-[#aab4c4]">
                  {detail.text}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <Reveal delay={0.08}>
        <div className="relative mt-12 overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1118] p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#1768ff]/[0.08] blur-[90px]"
          />

          <div className="relative mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#65e6ee]">
                Technology stack
              </p>
              <h4 className="mt-2 text-xl font-semibold tracking-tight text-white">
                Tools behind the system.
              </h4>
            </div>

            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/35">
              PA-SAFE / STACK
            </span>
          </div>

          <div className="relative">
            <TechTags tags={project.technologies} />
          </div>
        </div>
      </Reveal>

      {/* Section footer */}
      <div className="mt-9 flex flex-col gap-4 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-[#65e6ee]">
            <Workflow size={16} />
          </span>
          <p className="max-w-md text-xs leading-6 text-[#8793a5]">
            Built at the intersection of software, connected devices, and
            real-world safety.
          </p>
        </div>

        <a
          href="#projects"
          className="group inline-flex w-fit items-center gap-2 text-xs font-medium text-[#aab4c4] transition-colors hover:text-[#65e6ee]"
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
