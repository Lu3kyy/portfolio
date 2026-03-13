"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description?: string;
  tags: string[];
  liveUrl: string;
  githubUrl?: string;
  gradient: string;
  borderHover: string;
  accent: string;
  emoji: string;
  comingSoon: boolean;
};

const projects: Project[] = [
  {
    title: "10 Mini Challenge API + Frontend",
    description:
      "A full-stack mini challenge build with API integration and frontend implementation.",
    tags: ["API", "Frontend", "Vercel"],
    liveUrl: "https://afojsx.vercel.app",
    gradient: "from-cyan-500/20 via-sky-500/10 to-blue-500/10",
    borderHover: "hover:border-sky-500/40",
    accent: "text-sky-400",
    emoji: "🚀",
    comingSoon: false,
  },
  {
    title: "Weather App",
    description:
      "Weather app with search and favorites functionality for quickly tracking locations.",
    tags: ["Weather", "Search", "Favorites"],
    liveUrl: "https://day1-weather-sprint.vercel.app",
    gradient: "from-violet-500/20 via-purple-500/10 to-indigo-500/10",
    borderHover: "hover:border-violet-500/40",
    accent: "text-violet-400",
    emoji: "🌧️",
    comingSoon: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="font-mono text-xs tracking-[0.35em] text-violet-400 uppercase">
            What I&apos;ve Built
          </span>
          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            My <span className="shimmer-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className={`group relative rounded-2xl border border-white/7 ${project.borderHover} overflow-hidden transition-all duration-300`}
            >
              {/* Hover gradient wash */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${project.gradient} opacity-0 transition-opacity duration-400 group-hover:opacity-100`}
              />

              <div className="relative p-8">
                {/* Top row */}
                <div className="mb-5 flex items-start justify-between">
                  <motion.span
                    className="text-5xl"
                    animate={{ rotate: [0, -5, 5, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: idx * 0.5,
                    }}
                  >
                    {project.emoji}
                  </motion.span>

                  {!project.comingSoon &&
                    (project.githubUrl || project.liveUrl) && (
                      <div className="flex gap-2">
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View source on GitHub"
                            className="rounded-lg bg-white/5 p-2 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.92 }}
                          >
                            <Github size={18} />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Open live project"
                          className="rounded-lg bg-white/5 p-2 text-slate-400 transition-all hover:bg-white/10 hover:text-white"
                          whileHover={{ scale: 1.12 }}
                          whileTap={{ scale: 0.92 }}
                        >
                          <ExternalLink size={18} />
                        </motion.a>
                      </div>
                    )}
                </div>

                <h3 className={`text-xl font-bold ${project.accent} mb-3`}>
                  {project.title}
                </h3>

                <p className="mb-7 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/6 bg-white/5 px-3 py-1 font-mono text-xs text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
