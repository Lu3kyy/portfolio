"use client";

import { motion } from "framer-motion";

const fadeInLeft = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const fadeInRight = {
  initial: { x: 60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
};

const stats = [
  { label: "Focus", value: "Full Stack" },
  { label: "Level", value: "Junior Dev" },
  { label: "Available", value: "For Hire" },
  { label: "Location", value: "Stockton, CA" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      {/* Section label + heading */}
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-xs tracking-[0.35em] text-violet-400 uppercase">
            Who I Am
          </span>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            About <span className="shimmer-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* ── Profile picture ── */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                className="absolute -inset-4 rounded-3xl bg-linear-to-br from-violet-600/30 to-sky-600/20 blur-2xl"
                animate={{ scale: [1, 1.06, 1], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              {/* Photo frame */}
              <div className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-violet-950/60 to-indigo-950/60 md:h-80 md:w-80">
                <video
                  className="h-full w-full object-cover"
                  src="/IMG_2154.mov"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                />
              </div>
              {/* Decorative corner badges */}
              <div className="absolute -right-3 -bottom-3 rounded-full border border-violet-500/40 bg-violet-600/80 px-3 py-1 font-mono text-xs text-white backdrop-blur-sm">
                Available for hire
              </div>
            </div>
          </motion.div>

          {/* ── About text ── */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="mb-5 text-2xl font-bold text-white">
              Junior Full Stack Developer
            </h3>
            <p className="mb-5 leading-relaxed text-slate-400">
              I&apos;m a junior developer who loves building things for the web
              - from polished front-end experiences to reliable back-end
              services. I grew up in Modesto and have lived in the Central
              Valley most of my life.
            </p>
            <p className="mb-10 leading-relaxed text-slate-400">
              My core stack spans{" "}
              <span className="font-medium text-violet-400">C#</span>,{" "}
              <span className="font-medium text-sky-400">Java</span>,{" "}
              <span className="font-medium text-violet-400">Next.js</span>,{" "}
              <span className="font-medium text-sky-400">React</span>, and{" "}
              <span className="font-medium text-violet-400">TypeScript</span>.
              I&apos;m actively growing those skills and looking for
              opportunities to contribute to exciting projects.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-xl border border-white/5 bg-white/4 p-4 transition-colors hover:border-violet-500/20"
                >
                  <p className="mb-1 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                    {label}
                  </p>
                  <p className="font-semibold text-white">{value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
