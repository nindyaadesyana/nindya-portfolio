"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Cpu, Globe, Code2, Briefcase, Users, Target } from "lucide-react";

function RevealText({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.35, delay: delay + i * 0.025 }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-neutral-900 dark:text-neutral-100 border-b border-neutral-300 dark:border-neutral-600">
      {children}
    </span>
  );
}

function Divider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      style={{ originX: 0 }}
      className="h-px bg-neutral-200 dark:bg-neutral-800 my-10"
    />
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition"
    >
      <p className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">{value}</p>
      <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">{label}</p>
    </motion.div>
  );
}

function Chip({ icon: Icon, label, sub, delay }: { icon: React.ElementType; label: string; sub: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -2 }}
      className="flex flex-col items-center gap-1.5 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition cursor-default"
    >
      <Icon size={18} className="text-neutral-400 dark:text-neutral-500" />
      <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold">{label}</p>
      <p className="text-neutral-400 dark:text-neutral-500 text-[11px] text-center leading-snug">{sub}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-3">Who I am</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* LEFT */}
          <div className="md:col-span-7 space-y-8">
            {/* Para 1 */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="text-neutral-700 dark:text-neutral-300 text-[1.0rem] leading-[1.85] font-light"
            >
              I am{" "}
              <span className="font-bold text-neutral-900 dark:text-neutral-100">Nindya Desyana</span>,
              an Informatics Engineering graduate specializing in{" "}
              <span className="font-bold text-neutral-900 dark:text-neutral-100">Artificial Intelligence</span>.
              Throughout my journey, I have explored the intersection between AI,
              software development, and real-world problem solving by building
              various digital solutions.
            </motion.p>

            {/* Para 2 */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="pl-4 border-l-2 border-neutral-900 dark:border-neutral-100"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-[0.95rem] leading-[1.85]">
                My projects include an <Highlight>AI chatbot powered by RAG</Highlight>,
                a <Highlight>voice cloning platform</Highlight>,
                an <Highlight>AI-based CV screening system</Highlight>,
                and <Highlight>computer vision applications</Highlight>.{" "}
                I enjoy developing end-to-end solutions by combining Artificial Intelligence,
                Full Stack Development, and modern web technologies to create impactful products.
              </p>
            </motion.div>

            <Divider />

            <RevealText
              delay={0.05}
              className="text-neutral-600 dark:text-neutral-400 text-[0.95rem] leading-[1.85]"
              text="Beyond technology, I have gained valuable experience through organizational activities and professional work in customer-facing roles."
            />

            {/* Experience cards */}
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  icon: Users,
                  title: "BEM FIK UDINUS",
                  role: "Expert Staff — Entrepreneurship Division",
                  detail: "Contributed to business initiatives, event management, and collaborative projects.",
                },
                {
                  icon: Briefcase,
                  title: "Hospitality Industry",
                  role: "Cashier & Cook Helper",
                  detail: "Developed communication, adaptability, and problem-solving through customer-facing roles.",
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <card.icon size={14} className="text-neutral-400 dark:text-neutral-500 shrink-0" />
                    <p className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm">{card.title}</p>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-xs font-medium mb-1.5">{card.role}</p>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs leading-relaxed">{card.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Closing quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed italic"
            >
              "These experiences shaped my ability to understand users, work effectively
              in teams, and bring a balance between technical expertise and
              human-centered thinking."
            </motion.p>

            {/* Career objective */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-3 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
            >
              <Target size={15} className="text-neutral-900 dark:text-neutral-100 mt-0.5 shrink-0" />
              <div>
                <p className="text-neutral-900 dark:text-neutral-100 text-xs font-semibold uppercase tracking-widest mb-1.5">Career Objective</p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                  Seeking a role as an AI Engineer or Full Stack Developer where I can
                  contribute to impactful products — combining intelligent systems with
                  exceptional user experiences.
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="md:col-span-5 space-y-8">
            {/* Education */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neutral-400 dark:text-neutral-500 text-xs uppercase tracking-widest mb-5"
              >
                Education
              </motion.p>
              <div className="relative pl-6 border-l border-neutral-200 dark:border-neutral-800 space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 border-neutral-900 dark:border-neutral-100 bg-white dark:bg-neutral-950 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100" />
                  </div>
                  <span className="text-neutral-400 dark:text-neutral-500 text-xs font-mono">2022 – 2026</span>
                  <div className="flex items-center gap-1.5 mt-1">
                    <GraduationCap size={14} className="text-neutral-500 dark:text-neutral-400" />
                    <h3 className="text-neutral-900 dark:text-neutral-100 font-semibold text-base">S1 Teknik Informatika</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-0.5">Universitas Dian Nuswantoro (UDINUS)</p>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-1">Specialization: Artificial Intelligence</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="relative opacity-40"
                >
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 border-dashed border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950" />
                  <span className="text-neutral-400 dark:text-neutral-500 text-xs font-mono">Next Chapter</span>
                  <h3 className="text-neutral-500 dark:text-neutral-400 font-semibold mt-1 text-sm">AI Engineer Role</h3>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs">Open to opportunities</p>
                </motion.div>
              </div>
            </div>

            {/* Core expertise */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neutral-400 dark:text-neutral-500 text-xs uppercase tracking-widest mb-4"
              >
                Core Expertise
              </motion.p>
              <div className="grid grid-cols-3 gap-2">
                <Chip icon={Cpu}   label="AI / ML"    sub="LLMs · RAG · CV"        delay={0.05} />
                <Chip icon={Globe} label="Full Stack" sub="Next.js · React · Node" delay={0.12} />
                <Chip icon={Code2} label="Python"     sub="TF · OpenCV · LangChain" delay={0.19} />
              </div>
            </div>

            {/* Stats */}
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-neutral-400 dark:text-neutral-500 text-xs uppercase tracking-widest mb-4"
              >
                At a Glance
              </motion.p>
              <div className="grid grid-cols-3 gap-2">
                <StatCard value="4+" label="AI Projects" />
                <StatCard value="3+" label="Tech Stacks" />
                <StatCard value="1"  label="Internship"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
