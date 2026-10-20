
import Navbar from "@/components/portfolio/navbar";
import Hero from "@/components/portfolio/Hero";
import Featured from "@/components/portfolio/Featured";
import Exoplanet from "@/components/portfolio/Exoplanet";
import StudyTracker from "@/components/portfolio/StudyTracker";
import Toolkit from "@/components/portfolio/Toolkit";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const atmosphere = [
  {
    position: "left-[-24rem] top-[12%]",
    size: "h-[34rem] w-[34rem]",
    color: "bg-blue-600/[0.075]",
  },
  {
    position: "right-[-25rem] top-[38%]",
    size: "h-[38rem] w-[38rem]",
    color: "bg-cyan-400/[0.045]",
  },
  {
    position: "left-[-22rem] top-[69%]",
    size: "h-[36rem] w-[36rem]",
    color: "bg-indigo-500/[0.045]",
  },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-[#090a0c] text-[#f2f4f8] selection:bg-cyan-300/25 selection:text-white">
      {/* Persistent visual atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {atmosphere.map((glow) => (
          <div
            key={glow.position}
            className={`absolute ${glow.position} ${glow.size} ${glow.color} rounded-full blur-[120px]`}
          />
        ))}

        {/* Fine architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "linear-gradient(to bottom, black, transparent 78%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />

        {/* Subtle centerline texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.8) 0.65px, transparent 0.65px)",
            backgroundSize: "5px 5px",
          }}
        />

        {/* Quiet vignette for cinematic depth */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#090a0c_100%)] opacity-70" />

        {/* Keep the top edge visually anchored */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
      </div>

      <Navbar />

      <main className="relative">
        {/* Introduction */}
        <section id="home" className="relative">
          <Hero />
        </section>

        {/* Signature engineering work */}
        <section id="work" className="relative">
          <Featured />
        </section>

        {/* Experiments and products */}
        <section id="projects" className="relative">
          <Exoplanet />
          <StudyTracker />
        </section>

        {/* Technical depth and recognition */}
        <section id="toolkit" className="relative">
          <Toolkit />
          <Achievements />
        </section>

        {/* Open to meaningful engineering opportunities */}
        <section id="contact" className="relative">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}
