"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
  });

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#03040a]/80 shadow-xl shadow-black/40 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <motion.a
          href="#hero"
          className="shimmer-text text-xl font-black"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          LG.dev
        </motion.a>

        {/* Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.4, duration: 0.4 }}
            >
              <a
                href={link.href}
                className="group relative text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-violet-500 to-sky-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </motion.li>
          ))}
          <motion.li
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <motion.a
              href="/LucasGuptill_Resume.pdf"
              download="LucasGuptill_Resume.pdf"
              className="rounded-lg border border-violet-500/40 px-4 py-2 text-sm font-medium text-violet-400 transition-all hover:border-violet-500/70 hover:bg-violet-500/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download Resume
            </motion.a>
          </motion.li>
        </ul>

        {/* Mobile: just show resume button */}
        <motion.a
          href="/LucasGuptill_Resume.pdf"
          download="LucasGuptill_Resume.pdf"
          className="rounded-lg border border-violet-500/40 px-4 py-2 text-sm font-medium text-violet-400 md:hidden"
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>
    </motion.nav>
  );
}
