"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    accent: "violet",
    skills: [
      { name: "TypeScript", icon: "🔷" },
      { name: "JavaScript", icon: "⚡" },
      { name: "C#", icon: "🟦" },
      { name: "Java", icon: "☕" },
      { name: "HTML & CSS", icon: "🎨" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    accent: "sky",
    skills: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛️" },
      { name: "ASP.NET", icon: "🔵" },
      { name: "Tailwind CSS", icon: "🌊" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Node.js", icon: "🌿" },
    ],
  },
  {
    category: "Tools & Platforms",
    accent: "indigo",
    skills: [
      { name: "Git & GitHub", icon: "🐙" },
      { name: "Azure", icon: "☁️" },
      { name: "Figma", icon: "🎯" },
      { name: "Postman", icon: "📮" },
      { name: "VS Code", icon: "💻" },
      { name: "Vercel", icon: "🚀" },
    ],
  },
];

const accentBorder: Record<string, string> = {
  violet:
    "border-violet-500/25 hover:border-violet-400/60 hover:bg-violet-500/8",
  sky: "border-sky-500/25 hover:border-sky-400/60 hover:bg-sky-500/8",
  indigo:
    "border-indigo-500/25 hover:border-indigo-400/60 hover:bg-indigo-500/8",
};

const accentText: Record<string, string> = {
  violet: "text-violet-400",
  sky: "text-sky-400",
  indigo: "text-indigo-400",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { y: 24, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-100 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-900/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-xs tracking-[0.35em] text-violet-400 uppercase">
            What I Work With
          </span>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            My <span className="shimmer-text">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-14">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: groupIdx * 0.08 }}
            >
              <h3
                className={`mb-5 font-mono text-xs tracking-[0.25em] uppercase ${accentText[group.accent]}`}
              >
                {group.category}
              </h3>
              <motion.div
                className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
              >
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={card}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className={`rounded-xl border bg-white/3 p-4 ${accentBorder[group.accent]} cursor-default text-center transition-all duration-200 select-none`}
                  >
                    <div className="mb-2 text-2xl">{skill.icon}</div>
                    <p className="text-xs leading-snug font-medium text-slate-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
