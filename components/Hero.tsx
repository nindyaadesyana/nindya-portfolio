"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, FileText, Send, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5, delay },
});

function TrafficLights() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
      <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
      <span className="w-3 h-3 rounded-full bg-[#28C840]" />
    </div>
  );
}

function AIChatWidget() {
  return (
    <motion.div
      {...fadeUp(0.5)}
      className="w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-2xl shadow-neutral-200/40 dark:shadow-black/40 bg-white/90 dark:bg-neutral-900/90 backdrop-blur overflow-hidden"
    >
      {/* macOS window bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-800/60">
        <TrafficLights />
        <span className="text-neutral-400 dark:text-neutral-500 text-xs font-medium tracking-wide">
          nindya-ai — assistant
        </span>
        <div className="w-[52px]" />
      </div>

      {/* Chat body */}
      <div className="px-5 pt-5 pb-4 space-y-4">
        {/* User message */}
        <motion.div {...fadeIn(0.75)} className="flex justify-end">
          <div className="max-w-[78%] bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm rounded-2xl rounded-tr-sm px-4 py-2.5 leading-relaxed">
            Hi, tell me about Nindya's expertise 🤖
          </div>
        </motion.div>

        {/* AI response */}
        <motion.div {...fadeIn(1.0)} className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles size={12} className="text-white dark:text-neutral-900" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl rounded-tl-sm px-4 py-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
              Nindya is an AI Engineer &amp; Full Stack Developer with hands-on
              experience in LLMs, RAG pipelines, Computer Vision, and modern web
              development. Here's a quick overview:
            </div>
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {["🧠 LLM / RAG", "👁 Computer Vision", "⚡ Next.js", "🐍 Python", "🔗 LangChain"].map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CV download card */}
        <motion.div {...fadeIn(1.3)}>
          <a
            href="/cv-nindya-desyana.pdf"
            download
            className="group flex items-center gap-3 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-white dark:hover:bg-neutral-750 transition-all duration-200"
          >
            <div className="w-9 h-9 rounded-lg bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center shrink-0">
              <FileText size={16} className="text-white dark:text-neutral-900" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-neutral-800 dark:text-neutral-200 text-xs font-semibold truncate">CV_Nindya_Desyana.pdf</p>
              <p className="text-neutral-400 dark:text-neutral-500 text-[11px] mt-0.5">Click to download · PDF</p>
            </div>
            <Download size={14} className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition shrink-0" />
          </a>
        </motion.div>

        {/* Second AI turn */}
        <motion.div {...fadeIn(1.55)} className="flex items-start gap-2.5">
          <div className="w-7 h-7 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles size={12} className="text-white dark:text-neutral-900" />
          </div>
          <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl rounded-tl-sm px-4 py-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
            Want to know about a specific project or skill? Just ask! 💡
          </div>
        </motion.div>
      </div>

      {/* Input bar */}
      <motion.div {...fadeIn(1.7)} className="px-4 pb-4">
        <div className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 px-4 py-2.5">
          <input
            type="text"
            placeholder="Ask AI about Nindya..."
            className="flex-1 bg-transparent text-neutral-600 dark:text-neutral-300 text-sm placeholder-neutral-300 dark:placeholder-neutral-600 focus:outline-none"
            readOnly
          />
          <button className="w-7 h-7 rounded-lg bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center shrink-0 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition">
            <Send size={12} className="text-white dark:text-neutral-900" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-neutral-950 overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none dark:hidden"
        style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, white 100%)" }}
      />
      <div
        className="absolute inset-0 pointer-events-none hidden dark:block"
        style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #0a0a0a 100%)" }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto px-6 py-20 w-full">

        {/* LEFT */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div {...fadeUp(0.05)}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 text-xs tracking-wide font-medium">
              ✨ AI Engineer &amp; Full Stack Developer
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-6 text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.08] text-neutral-900 dark:text-neutral-100"
          >
            Nindya's
            <br />
            <span className="text-neutral-400 dark:text-neutral-500"> Creative </span>
            <span className="text-neutral-900 dark:text-neutral-100"> J<span style={{ fontSize: "0.75em", verticalAlign: "middle" }}>🌎</span>urney</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.28)}
            className="mt-6 text-neutral-500 dark:text-neutral-400 text-base leading-relaxed max-w-lg"
          >
            Fresh Graduate Informatics Engineering specializing in Artificial Intelligence.
            Building end-to-end digital solutions by combining AI, Full Stack Development,
            and creative technology.
          </motion.p>

          <motion.div {...fadeUp(0.38)} className="mt-5 flex flex-wrap gap-2">
            {["LLMs", "RAG", "Computer Vision", "Next.js", "Python"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-400 dark:text-neutral-500 text-xs hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.48)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-all duration-200"
            >
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="/cv-nindya-desyana.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200"
            >
              <Download size={14} />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200"
            >
              <Mail size={14} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            {...fadeIn(0.75)}
            className="mt-10 flex items-center gap-4 pt-8 border-t border-neutral-100 dark:border-neutral-800"
          >
            <div className="flex -space-x-2">
              {["ND", "AI", "ML"].map((initials) => (
                <div
                  key={initials}
                  className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 border-2 border-white dark:border-neutral-950 flex items-center justify-center text-[10px] font-semibold text-neutral-500 dark:text-neutral-400"
                >
                  {initials}
                </div>
              ))}
            </div>
            <p className="text-neutral-400 dark:text-neutral-500 text-xs leading-snug">
              4+ AI Projects · 1 Internship · Open to opportunities
            </p>
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5">
          <AIChatWidget />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeIn(2.0)}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-300 dark:text-neutral-600"
      >
        <span className="tracking-widest uppercase text-[10px]">scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="w-px h-7 bg-gradient-to-b from-neutral-300 dark:from-neutral-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}
