"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown, Github, Mail, Phone } from "lucide-react";
import { useRef, useState } from "react";

const ORBITS = [
  { rx: 330, ry: 95, speed: 0.5, color: "#818cf8", size: 7, offset: 0.0 },
  { rx: 265, ry: 78, speed: -0.38, color: "#38bdf8", size: 5, offset: 1.5 },
  { rx: 375, ry: 112, speed: 0.28, color: "#c084fc", size: 6, offset: 3.0 },
  { rx: 295, ry: 88, speed: -0.55, color: "#34d399", size: 4, offset: 0.8 },
];

function OrbitDot({
  rx,
  ry,
  speed,
  color,
  size,
  offset,
}: {
  rx: number;
  ry: number;
  speed: number;
  color: string;
  size: number;
  offset: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [zIdx, setZIdx] = useState(0);

  useAnimationFrame((t) => {
    const angle = (t / 1000) * speed + offset;
    x.set(Math.cos(angle) * rx);
    y.set(Math.sin(angle) * ry);
    setZIdx(Math.sin(angle) > 0 ? 20 : 0);
  });

  return (
    <motion.div
      style={{
        x,
        y,
        position: "absolute",
        zIndex: zIdx,
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color,
        top: "50%",
        left: "50%",
        marginTop: -size / 2,
        marginLeft: -size / 2,
        pointerEvents: "none",
        boxShadow: `0 0 6px 2px ${color}88`,
      }}
    />
  );
}

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  initial: { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax: the content slowly drifts up as you scroll away
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* ── Animated gradient blobs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-48 -left-48 h-162.5 w-162.5 rounded-full bg-violet-700/25 blur-[130px]" />
        <div className="animate-blob animation-delay-2000 absolute top-1/2 left-1/2 h-137.5 w-137.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-600/15 blur-[130px]" />
        <div className="animate-blob animation-delay-4000 absolute -right-48 -bottom-48 h-162.5 w-162.5 rounded-full bg-indigo-700/20 blur-[130px]" />
      </div>

      {/* ── Subtle grid overlay ── */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-size-[64px_64px]" />

      {/* ── Bottom blend to smooth section transition ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-36 bg-linear-to-b from-transparent via-[#03040a]/70 to-[#03040a] backdrop-blur-[2px]" />

      {/* ── Content ── */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.div variants={stagger} initial="initial" animate="animate">
          {/* Orbit wrapper around Hello / name */}
          <div className="relative mx-auto w-fit overflow-visible">
            {ORBITS.map((o, i) => (
              <OrbitDot key={i} {...o} />
            ))}

            <motion.p
              variants={fadeUp}
              className="relative z-10 mb-5 font-mono text-sm tracking-[0.35em] text-violet-400 uppercase"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="relative z-10 mb-5 text-6xl leading-none font-black tracking-tight sm:text-7xl md:text-9xl"
            >
              <span className="shimmer-text">Lucas Guptill</span>
            </motion.h1>
          </div>

          <motion.h2
            variants={fadeUp}
            className="mb-7 text-xl font-light text-slate-300 sm:text-2xl md:text-3xl"
          >
            Full Stack Junior Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I build modern web applications and APIs with a passion for clean,
            maintainable code. Comfortable across the
            <span className="font-medium text-violet-400"> full stack</span>,
            from{" "}
            <span className="font-medium text-sky-400">React & Next.js</span>{" "}
            frontends to{" "}
            <span className="font-medium text-violet-400">C# & Java</span>{" "}
            backends.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="mb-16 flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              href="#projects"
              className="rounded-full bg-linear-to-r from-violet-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-lg shadow-violet-500/30 transition-shadow hover:shadow-violet-500/50"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="rounded-full border border-white/10 px-8 py-3 font-semibold text-slate-300 transition-all hover:border-white/30 hover:bg-white/5"
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-5"
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Lu3kyy",
                label: "GitHub",
              },
              {
                icon: Mail,
                href: "mailto:fabledparadox@gmail.com",
                label: "Email",
              },
              { icon: Phone, href: "tel:2092220822", label: "Phone" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={
                  href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                aria-label={label}
                className="rounded-full border border-white/10 p-3 text-slate-400 transition-all hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-white"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-slate-600 select-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
          scroll
        </span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
