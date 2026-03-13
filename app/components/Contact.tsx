"use client";

import { motion } from "framer-motion";
import { ExternalLink, FileText, Github, Mail, Phone } from "lucide-react";

const links = [
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Lu3kyy",
    href: "https://github.com/Lu3kyy",
    hover: "hover:border-slate-400/50 hover:bg-slate-500/5",
    iconColor: "text-slate-300",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "fabledparadox@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=fabledparadox@gmail.com",
    hover: "hover:border-violet-400/50 hover:bg-violet-500/5",
    iconColor: "text-violet-400",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "209-222-0822",
    href: "tel:2092220822",
    hover: "hover:border-green-400/50 hover:bg-green-500/5",
    iconColor: "text-green-400",
    external: false,
  },
  {
    icon: FileText,
    label: "Resume",
    value: "View my CV / Resume",
    href: "/LucasGuptill_Resume.pdf",
    hover: "hover:border-sky-400/50 hover:bg-sky-500/5",
    iconColor: "text-sky-400",
    external: false,
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32">
      {/* Bottom glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/4 h-75 w-125 rounded-full bg-violet-900/20 blur-[110px]" />
        <div className="absolute right-1/4 bottom-0 h-75 w-125 rounded-full bg-sky-900/15 blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-xs tracking-[0.35em] text-violet-400 uppercase">
            Let&apos;s Talk
          </span>
          <h2 className="mt-3 mb-5 text-4xl font-black md:text-5xl">
            Get In <span className="shimmer-text">Touch</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-400">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat about tech. Don&apos;t hesitate to reach out!
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {links.map(
            (
              {
                icon: Icon,
                label,
                value,
                href,
                hover,
                iconColor,
                external,
                download,
              },
              idx,
            ) => (
              <motion.a
                key={label}
                href={href}
                target={external && !download ? "_blank" : undefined}
                rel={external && !download ? "noopener noreferrer" : undefined}
                download={download ? "LucasGuptill_Resume.pdf" : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ scale: 1.03, y: -4 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-4 rounded-xl border border-white/6 bg-white/3 p-5 ${hover} group transition-all duration-200`}
              >
                <div
                  className={`rounded-lg bg-white/5 p-3 ${iconColor} shrink-0`}
                >
                  <Icon size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="mb-0.5 font-mono text-[10px] tracking-widest text-slate-500 uppercase">
                    {label}
                  </p>
                  <p className="truncate font-medium text-white">{value}</p>
                </div>
                <ExternalLink
                  size={14}
                  className="shrink-0 text-slate-700 transition-colors group-hover:text-slate-400"
                />
              </motion.a>
            ),
          )}
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center font-mono text-xs tracking-wider text-slate-700"
        >
          Designed &amp; Built by Lucas Guptill &bull;{" "}
          {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
}
