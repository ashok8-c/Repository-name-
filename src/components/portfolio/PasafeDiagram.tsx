
"use client";

import { motion, useReducedMotion } from "motion/react";

const stages = [
  {
    number: "01",
    name: "SENSOR ARRAY",
    subtitle: "Physical inputs",
    detail: "MPU6050 · MQ-3",
    description: "Collect signals",
    color: "#65e6ee",
    icon: "sensor",
  },
  {
    number: "02",
    name: "EDGE DEVICE",
    subtitle: "Raspberry Pi",
    detail: "Processing · Logic",
    description: "Evaluate conditions",
    color: "#65e6ee",
    icon: "chip",
  },
  {
    number: "03",
    name: "CONNECTIVITY",
    subtitle: "GPS · GSM · MQTT",
    detail: "Data transmission",
    description: "Route information",
    color: "#8baaff",
    icon: "network",
  },
  {
    number: "04",
    name: "BACKEND",
    subtitle: "API · Database",
    detail: "Services · Alerts",
    description: "Process and respond",
    color: "#65e6ee",
    icon: "server",
  },
];

function StageIcon({ type }: { type: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "sensor") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" {...common}>
        <path d="M3 16h5l4-9 6 18 5-12 3 3h3" />
        <circle cx="16" cy="16" r="14" strokeOpacity=".18" />
      </svg>
    );
  }

  if (type === "chip") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" {...common}>
        <rect x="7" y="7" width="18" height="18" rx="3" />
        <rect x="12" y="12" width="8" height="8" rx="1" />
        <path d="M11 2v5m10-5v5M11 25v5m10-5v5M2 11h5m-5 10h5m18-10h5m-5 10h5" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg viewBox="0 0 32 32" className="h-7 w-7" {...common}>
        <circle cx="16" cy="16" r="3" />
        <path d="M9 9a10 10 0 0 0 0 14m14-14a10 10 0 0 1 0 14M5 5a16 16 0 0 0 0 22m22-22a16 16 0 0 1 0 22" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" {...common}>
      <rect x="4" y="4" width="24" height="24" rx="4" />
      <path d="M9 11h14M9 16h14M9 21h8" />
      <circle cx="23" cy="22" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Connector({
  index,
  reducedMotion,
}: {
  index: number;
  reducedMotion: boolean | null;
}) {
  const color = index === 1 ? "#8baaff" : "#65e6ee";

  return (
    <div className="relative hidden min-w-0 flex-1 items-center md:flex">
      <div
        className="h-px w-full"
        style={{
          background: `linear-gradient(90deg, ${color}30, ${color}90, ${color}30)`,
        }}
      />

      <motion.div
        className="absolute left-0 h-1.5 w-1.5 rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 12px ${color}`,
        }}
        animate={reducedMotion ? undefined : { left: ["0%", "100%"], opacity: [0, 1, 0] }}
        transition={{
          duration: 2.1,
          delay: index * 0.35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <svg
        className="absolute right-0 h-3 w-3 translate-x-1"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path d="m3 2 4 4-4 4" stroke={color} strokeWidth="1.4" />
      </svg>
    </div>
  );
}

export default function PasafeDiagram() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-[#080d14] p-5 transition-colors duration-500 hover:border-[#65e6ee]/25 sm:p-7 md:p-9">
      {/* Ambient light and technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(141,164,200,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(141,164,200,.035) 1px,transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom,black,transparent 90%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-[#1768ff]/[0.1] blur-[110px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/4 h-72 w-72 rounded-full bg-[#65e6ee]/[0.045] blur-[100px]"
      />

      {/* Header */}
      <div className="relative flex flex-wrap items-start justify-between gap-5 border-b border-white/[0.09] pb-6">
        <div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#65e6ee]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#65e6ee]/40" />
              <span className="relative h-2 w-2 rounded-full bg-[#65e6ee]" />
            </span>
            Architecture / 001
          </div>

          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-white sm:text-3xl">
            Inside the system<span className="text-[#65e6ee]">.</span>
          </h3>

          <p className="mt-2 max-w-lg text-sm leading-6 text-[#8996a9]">
            From physical signals to connected services — a conceptual view of
            the PA-SAFE data path.
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.025] px-3.5 py-3">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-white/35">
            System model
          </p>
          <p className="mt-1.5 flex items-center gap-2 text-xs text-white/75">
            <span className="h-1.5 w-1.5 rounded-full bg-[#65e6ee]" />
            Hardware + software
          </p>
        </div>
      </div>

      {/* Architecture stages */}
      <div className="relative mt-8">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_28px_1fr_28px_1fr_28px_1fr] md:items-center md:gap-1">
          {stages.map((stage, index) => (
            <div key={stage.number} className="contents">
              <motion.article
                initial={false}
                whileHover={{ y: -4, borderColor: `${stage.color}65` }}
                transition={{ duration: 0.25 }}
                className="relative min-w-0 overflow-hidden rounded-2xl border border-white/[0.1] bg-gradient-to-br from-[#151e2a] to-[#0c121b] p-4 sm:p-5"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: stage.color }}
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.15em] text-white/35">
                    NODE / {stage.number}
                  </span>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      backgroundColor: stage.color,
                      boxShadow: `0 0 10px ${stage.color}70`,
                    }}
                  />
                </div>

                <div
                  className="relative mt-5 flex h-12 w-12 items-center justify-center rounded-xl border bg-white/[0.025]"
                  style={{
                    color: stage.color,
                    borderColor: `${stage.color}30`,
                  }}
                >
                  <StageIcon type={stage.icon} />
                </div>

                <h4 className="relative mt-5 text-[11px] font-semibold tracking-[0.08em] text-white sm:text-xs">
                  {stage.name}
                </h4>

                <p className="relative mt-2 text-sm font-medium text-[#e0e7f1]">
                  {stage.subtitle}
                </p>

                <div className="relative mt-4 border-t border-white/[0.08] pt-3">
                  <p className="text-[11px] leading-5 text-[#8996a9]">
                    {stage.detail}
                  </p>
                  <p
                    className="mt-2 font-mono text-[9px] uppercase tracking-[0.12em]"
                    style={{ color: stage.color }}
                  >
                    {stage.description}
                  </p>
                </div>
              </motion.article>

              {index < stages.length - 1 && (
                <>
                  <div className="hidden md:block">
                    <Connector index={index} reducedMotion={reducedMotion} />
                  </div>

                  <div className="flex justify-center md:hidden" aria-hidden="true">
                    <motion.div
                      animate={reducedMotion ? undefined : { y: [0, 4, 0] }}
                      transition={{
                        duration: 1.8,
                        delay: index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex h-7 w-7 items-center justify-center rounded-full border border-[#65e6ee]/20 text-[#65e6ee]"
                    >
                      ↓
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Data-flow footer */}
      <div className="relative mt-8 grid gap-4 border-t border-white/[0.09] pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#65e6ee]">
            Data flow
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {["Sense", "Process", "Transmit", "Respond"].map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <span className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-xs text-[#c1cad7]">
                  {label}
                </span>
                {index < 3 && (
                  <span className="text-xs text-[#65e6ee]/60" aria-hidden="true">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="max-w-xs text-xs leading-6 text-[#68778b] sm:text-right">
          Conceptual architecture. The diagram does not imply validation of
          every module in a deployed vehicle.
        </p>
      </div>
    </section>
  );
}
