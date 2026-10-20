
"use client";

import { motion } from "motion/react";

const points = Array.from({ length: 100 }, (_, index) => {
  const x = 24 + (index / 99) * 552;

  const transitCenter = 310;
  const transitWidth = 42;
  const distance = Math.abs(x - transitCenter);

  const dip =
    distance < transitWidth
      ? 0.19 * (1 - distance / transitWidth)
      : 0;

  const noise =
    Math.sin(index * 2.3) * 1.8 +
    Math.sin(index * 0.7) * 1.2;

  const y = 72 + noise + dip * 100;

  return { x, y };
});

const path = points
  .map((point, index) =>
    `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`
  )
  .join(" ");

export default function LightCurve() {
  return (
    <div className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border border-white/10 bg-[#0d1118] p-3 sm:p-4 md:p-6">
      <div className="mb-5 flex min-w-0 flex-wrap items-start justify-between gap-3 sm:gap-4">
        <div className="min-w-0">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#65e6ee] sm:text-xs sm:tracking-[0.15em]">
            Signal analysis
          </p>

          <h4 className="mt-2 break-words text-base font-semibold text-[#f2f4f8] sm:text-lg">
            Stellar brightness
          </h4>
        </div>

        <span className="max-w-full rounded-md border border-[#65e6ee]/20 px-2 py-1.5 font-mono text-[9px] text-[#aab4c4] sm:px-2.5 sm:text-[10px]">
          TRANSIT SIGNATURE
        </span>
      </div>

      {/* Responsive chart: never force a wider-than-screen minimum */}
      <div className="w-full min-w-0 max-w-full overflow-hidden">
        <svg
          viewBox="0 0 600 150"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label="Illustrative stellar light curve showing a temporary dip in brightness that resembles a planetary transit"
          className="block h-auto w-full max-w-full"
        >
          {[30, 60, 90, 120].map((y) => (
            <line
              key={y}
              x1="24"
              y1={y}
              x2="576"
              y2={y}
              stroke="#ffffff"
              strokeOpacity="0.08"
              strokeDasharray="3 5"
            />
          ))}

          <line
            x1="24"
            y1="18"
            x2="24"
            y2="126"
            stroke="#ffffff"
            strokeOpacity="0.2"
          />

          <line
            x1="24"
            y1="126"
            x2="576"
            y2="126"
            stroke="#ffffff"
            strokeOpacity="0.2"
          />

          <rect
            x="268"
            y="22"
            width="84"
            height="104"
            rx="4"
            fill="#65e6ee"
            fillOpacity="0.06"
          />

          <motion.path
            d={path}
            fill="none"
            stroke="#65e6ee"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
          />

          <circle
            cx="310"
            cy="89"
            r="4"
            fill="#65e6ee"
          />

          <text
            x="310"
            y="142"
            fill="#aab4c4"
            fontSize="10"
            textAnchor="middle"
          >
            Transit window
          </text>
        </svg>
      </div>

      <div className="mt-4 flex min-w-0 flex-wrap items-start justify-between gap-2 text-xs text-[#7f8999]">
        <span className="shrink-0">Time →</span>
        <span className="min-w-0 break-words sm:text-right">
          Illustrative data · not an observed measurement
        </span>
      </div>
    </div>
  );
}
