"use client";

import {
  ArrowDownRight,
  ArrowUpRight,
  Activity,
  BookOpen,
  Check,
  Clock3,
  Code,
  ExternalLink,
  Focus,
  LayoutDashboard,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { portfolio } from "@/data/portfolio";
import Reveal from "./Reveal";
import TechTags from "./TechTags";

const weeklyActivity = [
  [1, 0, 2, 1, 3, 0, 1],
  [0, 2, 3, 1, 0, 2, 1],
  [2, 1, 0, 3, 2, 1, 0],
  [1, 3, 2, 0, 1, 3, 2],
];

const activityColors = [
  "bg-white/[0.04]",
  "bg-cyan-300/20",
  "bg-cyan-300/40",
  "bg-cyan-300/75",
];

const chartBars = [30, 46, 36, 62, 44, 76, 55, 90, 67, 80, 57, 96];

export default function StudyTracker() {
  const project = portfolio.projects.find(
  (item) => item.name === "Study Tracker"
);

if (!project) {
  return null;
}

  // HYDRATION NOTE: this value is only used inside `transition` props, which
  // never appear in the server HTML. Do NOT use it in `initial`, `style`,
  // `className` or conditional JSX, or server and client markup can differ.
  const shouldReduceMotion = useReducedMotion();

  const stats = [
    { label: "Focus sessions", value: "Track", icon: Focus },
    { label: "Learning history", value: "Review", icon: BookOpen },
    { label: "Daily progress", value: "Improve", icon: Target },
  ];

  return (
    <section
      id="study-tracker"
      className="relative isolate mx-auto max-w-6xl scroll-mt-24 overflow-hidden px-5 py-24 md:px-6 md:py-32"
    >
      {/* Atmospheric background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[-12%] top-[20%] h-80 w-80 rounded-full bg-cyan-400/[0.045] blur-[110px]" />
        <div className="absolute right-[-10%] top-[50%] h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[120px]" />
      </div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
        {/* Dashboard preview */}
        <Reveal>
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group relative"
          >
            {/* Soft outer glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-300/25 via-blue-500/10 to-violet-400/20 opacity-60 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#090d14]/95 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              {/* App top bar */}
              <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-200/20 bg-cyan-200/[0.08] text-cyan-200">
                    <Activity size={17} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold tracking-tight text-white">
                      Focus.space
                    </p>
                    <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-500">
                      Study workspace
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-300/15 bg-emerald-300/[0.05] px-2.5 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  <span className="font-mono text-[9px] text-emerald-200 sm:text-[10px]">
                    UI PREVIEW
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {/* Greeting */}
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-slate-500">
                      Your learning, organised.
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                      Focus dashboard<span className="text-cyan-200">.</span>
                    </h3>
                  </div>

                  <div className="hidden rounded-xl border border-white/[0.08] bg-white/[0.03] p-3 text-slate-400 sm:block">
                    <LayoutDashboard size={19} />
                  </div>
                </div>

                {/* Feature cards */}
                <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
                  {stats.map((stat, index) => {
                    const Icon = stat.icon;

                    return (
                      <motion.div
                        key={stat.label}
                        whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                        transition={{ duration: 0.2 }}
                        className="min-w-0 rounded-xl border border-white/[0.08] bg-white/[0.025] p-3 transition-colors duration-300 hover:border-cyan-200/20 hover:bg-cyan-200/[0.035] sm:p-4"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-200/[0.07] text-cyan-200">
                          <Icon size={15} />
                        </div>
                        <p className="mt-4 text-[10px] leading-4 text-slate-400 sm:text-xs">
                          {stat.label}
                        </p>
                        <p className="mt-1.5 text-xs font-semibold text-slate-100 sm:text-sm">
                          {stat.value}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Main chart */}
                <div className="mt-4 rounded-xl border border-white/[0.08] bg-[#0d121b] p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <TrendingUp size={15} className="text-cyan-200" />
                        <p className="text-xs font-medium text-slate-200 sm:text-sm">
                          Consistency over time
                        </p>
                      </div>
                      <p className="mt-1.5 text-[10px] text-slate-500">
                        Sample activity visualization
                      </p>
                    </div>

                    <span className="rounded-lg border border-white/[0.08] px-2 py-1 font-mono text-[9px] text-slate-400">
                      12 POINTS
                    </span>
                  </div>

                  <div className="relative mt-6 flex h-28 items-end gap-1.5 overflow-hidden sm:gap-2">
                    {/* Chart guides */}
                    <div className="pointer-events-none absolute inset-0 flex flex-col justify-between">
                      {[0, 1, 2, 3].map((line) => (
                        <div
                          key={line}
                          className="border-t border-dashed border-white/[0.06]"
                        />
                      ))}
                    </div>

                    {chartBars.map((height, index) => (
                      <div
                        key={index}
                        className="relative flex h-full flex-1 items-end"
                      >
                        {/* Server and client both start at height 0%, then
                            animate to the target when scrolled into view. */}
                        <motion.div
                          initial={{ height: "0%" }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.65,
                            delay: shouldReduceMotion ? 0 : index * 0.045,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="relative w-full overflow-hidden rounded-t-sm bg-gradient-to-t from-blue-500/50 via-cyan-300/65 to-cyan-200/90"
                        >
                          <div className="absolute inset-x-0 top-0 h-px bg-white/70" />
                        </motion.div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3 flex justify-between font-mono text-[9px] text-slate-600">
                    <span>START</span>
                    <span>ACTIVITY TIMELINE</span>
                    <span>END</span>
                  </div>
                </div>

                {/* Weekly heatmap */}
                <div className="mt-4 rounded-xl border border-white/[0.08] bg-[#0d121b] p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-slate-200 sm:text-sm">
                        Activity map
                      </p>
                      <p className="mt-1 text-[10px] text-slate-500">
                        Example weekly learning pattern
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-slate-500">
                      <span className="font-mono text-[9px]">LESS</span>
                      {activityColors.map((color, index) => (
                        <span
                          key={index}
                          className={`h-2.5 w-2.5 rounded-[3px] ${color}`}
                        />
                      ))}
                      <span className="font-mono text-[9px]">MORE</span>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-7 gap-1.5 sm:gap-2">
                    {weeklyActivity.flatMap((week, weekIndex) =>
                      week.map((level, dayIndex) => (
                        <motion.div
                          key={`${weekIndex}-${dayIndex}`}
                          initial={{ opacity: 0, scale: 0.7 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: shouldReduceMotion ? 0 : 0.25,
                            delay: shouldReduceMotion
                              ? 0
                              : (weekIndex * 7 + dayIndex) * 0.012,
                          }}
                          className={`aspect-square rounded-[3px] ${activityColors[level]} transition-colors duration-200 hover:bg-cyan-200`}
                        />
                      )),
                    )}
                  </div>
                </div>

                <p className="mt-4 text-[10px] leading-5 text-slate-600">
                  Illustrative dashboard only. Charts and activity cells use
                  sample values, not live user records.
                </p>
              </div>

              {/* Bottom accent */}
              <div className="h-px bg-gradient-to-r from-transparent via-cyan-200/40 to-transparent" />
            </div>
          </motion.div>
        </Reveal>

        {/* Project storytelling */}
        <Reveal delay={0.12}>
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan-200">
                Project / 02
              </span>

              <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-slate-400">
                Full stack · Productivity
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
              {project.name}
              <span className="block bg-gradient-to-r from-cyan-200 via-blue-300 to-violet-300 bg-clip-text pb-1 text-transparent">
                Make time count.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-slate-400 sm:text-base">
              {project.description}
            </p>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              Designed to make study sessions easier to record and learning
              history easier to review, with a straightforward web interface.
            </p>

            {/* Product principles */}
            <div className="mt-7 space-y-3">
              {[
                {
                  icon: Clock3,
                  title: "Capture the session",
                  detail: "Keep study activity organised.",
                },
                {
                  icon: Activity,
                  title: "Review your journey",
                  detail: "Make past learning activity easier to revisit.",
                },
                {
                  icon: Target,
                  title: "Build consistency",
                  detail: "Use progress history to reflect and improve.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    whileHover={shouldReduceMotion ? undefined : { x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4 transition-colors hover:border-cyan-200/20 hover:bg-white/[0.035]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/15 bg-cyan-200/[0.06] text-cyan-200">
                      {index === 0 ? (
                        <Clock3 size={17} />
                      ) : index === 1 ? (
                        <BookOpen size={17} />
                      ) : (
                        <Target size={17} />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-slate-100">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {item.detail}
                      </p>
                    </div>

                    <Check size={15} className="shrink-0 text-cyan-200/50" />
                  </motion.div>
                );
              })}
            </div>

            {/* Tech stack */}
            <div className="mt-8">
              <div className="mb-3 flex items-center gap-2">
                <Sparkles size={14} className="text-cyan-200" />
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Built with
                </p>
              </div>
              <TechTags tags={project.technologies} />
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 items-center gap-2 rounded-xl bg-cyan-200 px-5 py-3 text-sm font-semibold text-[#071017] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-100 hover:shadow-[0_8px_35px_rgba(101,230,238,0.16)]"
                >
                  Open live project
                  <ExternalLink
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/15 bg-white/[0.025] px-5 py-3 text-sm font-medium text-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200/40 hover:text-cyan-100"
              >
                <Code size={16} />
                Source code
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 text-xs text-slate-500 transition-colors hover:text-cyan-200"
            >
              Have a project in mind? Let's talk
              <ArrowDownRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}