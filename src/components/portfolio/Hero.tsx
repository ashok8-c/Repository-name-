
"use client";

import { ArrowDown, ArrowDownRight, Download } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { portfolio } from "@/data/portfolio";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease },
  },
};

function OrbitalVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-label="Abstract animated orbital system representing software and connected technologies"
      role="img"
      className="relative mx-auto aspect-square w-full max-w-[470px] overflow-visible"
    >
      {/* Ambient light */}
      <div className="absolute inset-[18%] rounded-full bg-[#2864ff]/20 blur-[75px]" />
      <div className="absolute inset-[30%] rounded-full bg-[#65e6ee]/10 blur-[50px]" />

      {/* Orbital rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-white/[0.11]"
          style={{
            inset: `${12 + ring * 12}%`,
            rotate: ring === 1 ? 58 : ring === 2 ? -58 : 0,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : { rotate: [ring * 35, ring * 35 + 360] }
          }
          transition={{
            duration: 42 + ring * 14,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span
            className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#65e6ee] shadow-[0_0_18px_#65e6ee]"
            style={{ opacity: ring === 1 ? 1 : 0.55 }}
          />
        </motion.div>
      ))}

      {/* Fine circular details */}
      <div className="absolute inset-[25%] rounded-full border border-dashed border-[#65e6ee]/20" />
      <div className="absolute inset-[35%] rounded-full border border-white/[0.08]" />

      {/* Central core */}
      <motion.div
        className="absolute inset-0 m-auto flex h-[34%] w-[34%] items-center justify-center rounded-full border border-[#65e6ee]/30 bg-[#0b111b]/80 shadow-[0_0_70px_rgba(47,107,255,0.2)] backdrop-blur-xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                boxShadow: [
                  "0 0 40px rgba(47,107,255,0.12)",
                  "0 0 85px rgba(101,230,238,0.2)",
                  "0 0 40px rgba(47,107,255,0.12)",
                ],
              }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center gap-1.5 sm:gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#65e6ee] sm:h-14 sm:w-14 sm:rounded-2xl">
            <span className="font-mono text-lg font-semibold tracking-[-0.1em] sm:text-2xl">
              AS.
            </span>
          </div>
          <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-white/50 sm:text-[9px] sm:tracking-[0.22em]">
            Systems online
          </span>
        </div>
      </motion.div>

      {/* Floating data labels */}
      <motion.div
        className="absolute left-0 top-[24%] rounded-lg border border-white/10 bg-[#10141b]/90 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:left-[2%] sm:rounded-xl sm:px-3 sm:py-2.5"
        animate={shouldReduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-white/40 sm:text-[9px] sm:tracking-[0.16em]">
          Focus
        </p>
        <p className="mt-1 text-[10px] font-medium text-white/90 sm:text-xs">
          Backend systems
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-[23%] right-0 rounded-lg border border-white/10 bg-[#10141b]/90 px-2.5 py-2 shadow-xl backdrop-blur-xl sm:right-[1%] sm:rounded-xl sm:px-3 sm:py-2.5"
        animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#65e6ee] shadow-[0_0_10px_#65e6ee]" />
          <span className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/50 sm:text-[9px] sm:tracking-[0.15em]">
            Building
          </span>
        </div>
        <p className="mt-1.5 text-[10px] font-medium text-white/90 sm:text-xs">
          Software · AI · IoT
        </p>
      </motion.div>

      <div className="absolute bottom-[7%] left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.12em] text-white/30 sm:bottom-[9%] sm:text-[9px] sm:tracking-[0.22em]">
        Curiosity into systems
      </div>
    </div>
  );
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    
<section
  id="top"
  className="relative isolate mx-auto flex min-h-0 max-w-7xl items-start overflow-hidden px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:min-h-[calc(100svh-68px)] lg:items-center lg:px-10 lg:py-24"
>

      {/* Hero-only atmospheric lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-[300px] w-[300px] rounded-full bg-[#2f6bff]/[0.09] blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[130px]" />
        <div className="absolute right-[-100px] top-[15%] h-[320px] w-[320px] rounded-full bg-[#65e6ee]/[0.055] blur-[100px] sm:h-[450px] sm:w-[450px] sm:blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
      </div>

      <div className="grid w-full min-w-0 items-center gap-5 sm:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-2">
        {/* Copy */}
        <div className="relative z-10 min-w-0">
          <motion.div
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={reveal} className="mb-6 sm:mb-8">
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-3 py-2 backdrop-blur-md sm:gap-3 sm:px-3.5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#65e6ee]/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#65e6ee]" />
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.09em] text-[#c1cad7] sm:text-[11px] sm:tracking-[0.15em]">
                  Computer Science · Class of 2027
                </span>
              </div>
            </motion.div>

            {/* Responsive name typography */}
            <motion.h1
              variants={reveal}
              className="max-w-full text-[clamp(3.25rem,15vw,5.5rem)] font-semibold uppercase leading-[0.88] tracking-[-0.085em] text-white sm:text-[clamp(4.5rem,11vw,7rem)] sm:leading-[0.84] lg:max-w-4xl lg:text-[clamp(4rem,8.5vw,9rem)]"
            >
              <span className="block">ASHOK</span>
              <span className="mt-2 block">
                <span className="text-[#65e6ee]">S.</span>{" "}
                <span className="text-white/45">BABU</span>
              </span>
            </motion.h1>

            {/* Engineering statement */}
            <motion.div
              variants={reveal}
              className="mt-6 max-w-xl sm:mt-8"
            >
              <p className="text-base font-medium leading-snug tracking-[-0.035em] text-white sm:text-xl">
                Engineering ideas into{" "}
                <span className="text-[#65e6ee]">working systems.</span>
              </p>

              <p className="mt-3 text-sm leading-6 text-[#aab4c4] sm:mt-4 sm:text-base sm:leading-8">
                I&apos;m{" "}
                <span className="font-medium text-white">
                  {portfolio.name}
                </span>
                . I build software across backend systems, connected devices,
                and applied machine learning — turning complex ideas into
                useful, working products.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={reveal}
              className="mt-7 flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-9"
            >
              <motion.a
                href="#work"
                whileHover={shouldReduceMotion ? undefined : { y: -3, scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-[#65e6ee]/30 bg-[#65e6ee] px-4 py-3 text-sm font-semibold !text-[#071014] shadow-[0_0_28px_rgba(101,230,238,0.12)] transition-all duration-300 hover:bg-[#86f0f4] hover:shadow-[0_0_38px_rgba(101,230,238,0.24)] min-[420px]:w-auto min-[420px]:px-5"
              >
                <span className="!text-[#071014]">Explore my work</span>
                <ArrowDown
                  size={16}
                  className="text-[#071014] transition-transform duration-300 group-hover:translate-y-1"
                />
              </motion.a>

              <motion.a
                href="/resume.pdf"
                download="Ashok_S_Babu_Resume.pdf"
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -3, borderColor: "rgba(101,230,238,0.6)" }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.025] px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-white/[0.06] hover:text-[#65e6ee] min-[420px]:w-auto min-[420px]:px-5"
              >
                <Download size={16} />
                Download résumé
              </motion.a>
            </motion.div>

            {/* Focus areas */}
            <motion.div
              variants={reveal}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 pt-5 sm:mt-12 sm:gap-x-6"
            >
              <span className="w-full font-mono text-[9px] uppercase tracking-[0.12em] text-white/40 sm:w-auto sm:text-[10px] sm:tracking-[0.14em]">
                Currently focused on
              </span>
              {["Backend", "Systems", "Applied AI"].map((item) => (
                <span
                  key={item}
                  className="text-xs text-[#aab4c4] transition-colors hover:text-[#65e6ee]"
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Original orbital visual — responsive sizing */}
        <motion.div
          className="relative mx-auto w-full min-w-0 max-w-[340px] sm:max-w-[420px] lg:max-w-none"
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 24 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 1.2,
            delay: shouldReduceMotion ? 0 : 0.35,
            ease,
          }}
        >
          <OrbitalVisual />
        </motion.div>
      </div>

      {/* Original scroll cue */}
      <motion.a
        href="#work"
        aria-label="Scroll to featured work"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-white/35 transition-colors hover:text-[#65e6ee] md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <motion.span
          animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDownRight size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
