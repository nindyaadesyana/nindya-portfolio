"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Tag, User, Layers, CheckCircle2, ChevronRight } from "lucide-react";
import type { CaseStudy } from "@/data/CaseStudies";

/* ── helpers ─────────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-[0.2em] uppercase mb-3 font-medium">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-8">
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 ${className}`}>
      {children}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 text-xs">
      {children}
    </span>
  );
}

/* ── Image placeholder ───────────────────────────────────────── */
function ImgPlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-52 md:h-64 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 flex flex-col items-center justify-center gap-2">
      <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center">
        <Layers size={18} className="text-neutral-400 dark:text-neutral-600" />
      </div>
      <p className="text-neutral-400 dark:text-neutral-600 text-xs">{label}</p>
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────────── */
export default function CaseStudyClient({ cs }: { cs: CaseStudy }) {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">

      {/* ── Nav ── */}
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 text-sm transition"
          >
            <ArrowLeft size={15} />
            Back to Projects
          </Link>
          <span className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm tracking-tight">
            Nindya<span className="text-neutral-400 dark:text-neutral-600">.</span>
          </span>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">

        {/* ── 1. Hero ── */}
        <motion.section {...fadeUp(0)}>
          <Badge>{cs.category}</Badge>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight tracking-tight">
            {cs.title}
          </h1>
          <p className="mt-5 text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed max-w-2xl">
            {cs.tagline}
          </p>

          {/* Meta row */}
          <div className="mt-8 flex flex-wrap gap-4">
            {[
              { icon: User,  label: "Role",     value: cs.role },
              { icon: Clock, label: "Timeline", value: cs.timeline },
              { icon: Tag,   label: "Category", value: cs.category },
            ].map((m) => (
              <div
                key={m.label}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900"
              >
                <m.icon size={13} className="text-neutral-400 dark:text-neutral-500 shrink-0" />
                <div>
                  <p className="text-neutral-400 dark:text-neutral-500 text-[10px] uppercase tracking-wider">{m.label}</p>
                  <p className="text-neutral-800 dark:text-neutral-200 text-sm font-medium">{m.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tech stack */}
          <div className="mt-6 flex flex-wrap gap-2">
            {cs.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Hero image placeholder */}
          <div className="mt-10">
            <ImgPlaceholder label={`${cs.title} — Project Screenshot`} />
          </div>
        </motion.section>

        {/* ── 2. Background & Problem ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>01 — Background</SectionLabel>
          <SectionHeading>Background &amp; Problem</SectionHeading>

          <div className="space-y-6">
            <Card>
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">Context</p>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{cs.background.context}</p>
            </Card>

            <Card className="border-l-4 border-l-neutral-900 dark:border-l-neutral-100">
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">The Problem</p>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed font-medium">{cs.background.problem}</p>
            </Card>

            <div>
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">Key Challenges</p>
              <div className="space-y-3">
                {cs.background.challenges.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
                  >
                    <span className="font-mono text-neutral-300 dark:text-neutral-700 text-sm shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{c}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 3. Proposed Solution ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>02 — Solution</SectionLabel>
          <SectionHeading>Proposed Solution</SectionHeading>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { label: "Overview",   content: cs.solution.overview },
              { label: "Approach",   content: cs.solution.approach },
              { label: "Rationale",  content: cs.solution.rationale },
            ].map((item, i) => (
              <motion.div key={item.label} {...fadeUp(i * 0.08)}>
                <Card className="h-full">
                  <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-3">{item.label}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{item.content}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 4. Technical Implementation ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>03 — Technical Implementation</SectionLabel>
          <SectionHeading>Architecture &amp; Workflow</SectionHeading>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">{cs.architecture.description}</p>

          {/* Components */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">System Components</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {cs.architecture.components.map((comp, i) => (
                <motion.div
                  key={comp.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Card>
                    <p className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm mb-1.5">{comp.name}</p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">{comp.detail}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Data flow */}
          <div className="mb-8">
            <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">Data Flow</p>
            <div className="space-y-2">
              {cs.architecture.dataFlow.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-6 h-6 rounded-full border border-neutral-900 dark:border-neutral-100 bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center">
                      <span className="text-white dark:text-neutral-900 text-[10px] font-bold">{i + 1}</span>
                    </div>
                    {i < cs.architecture.dataFlow.length - 1 && (
                      <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-800 mt-1" />
                    )}
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture image placeholder */}
          <ImgPlaceholder label="System Architecture Diagram" />

          {/* Key decisions */}
          <div className="mt-8">
            <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">Technical Decisions</p>
            <div className="space-y-3">
              {cs.architecture.decisions.map((d, i) => (
                <Card key={i} className="flex items-start gap-4">
                  <ChevronRight size={14} className="text-neutral-400 dark:text-neutral-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm mb-1">{d.title}</p>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{d.reason}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ── 5. Key Features ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>04 — Features</SectionLabel>
          <SectionHeading>Key Features</SectionHeading>

          <div className="grid md:grid-cols-2 gap-5">
            {cs.features.map((f, i) => (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 size={14} className="text-neutral-900 dark:text-neutral-100 shrink-0" />
                    <p className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm">{f.name}</p>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-4 flex-1">{f.description}</p>
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
                    <p className="text-neutral-400 dark:text-neutral-600 text-[10px] uppercase tracking-wider mb-1.5">Implementation</p>
                    <p className="text-neutral-500 dark:text-neutral-500 text-xs leading-relaxed font-mono">{f.implementation}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 6. Development Process ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>05 — Process</SectionLabel>
          <SectionHeading>Development Process</SectionHeading>

          <div className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-8">
            {cs.process.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                {/* dot */}
                <div className="absolute -left-[41px] top-1 w-8 h-8 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center">
                  <span className="text-white dark:text-neutral-900 text-[10px] font-bold">{step.phase}</span>
                </div>

                <Card>
                  <p className="text-neutral-900 dark:text-neutral-100 font-semibold mb-1.5">{step.label}</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{step.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 7. Challenges & Solutions ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>06 — Problem Solving</SectionLabel>
          <SectionHeading>Challenges &amp; Solutions</SectionHeading>

          <div className="space-y-5">
            {cs.challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-2">Challenge</p>
                      <p className="text-neutral-800 dark:text-neutral-200 text-sm font-medium leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-2">Solution</p>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-2">Lesson Learned</p>
                      <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed italic">&ldquo;{c.lesson}&rdquo;</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── 8. Results & Impact ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>07 — Results</SectionLabel>
          <SectionHeading>Results &amp; Impact</SectionHeading>

          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">{cs.results.summary}</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">Outcomes</p>
              <div className="space-y-3">
                {cs.results.outcomes.map((o, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
                  >
                    <CheckCircle2 size={13} className="text-neutral-900 dark:text-neutral-100 shrink-0 mt-0.5" />
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">{o}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest mb-4">User Benefits</p>
              <div className="space-y-3">
                {cs.results.benefits.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
                  >
                    <ArrowRight size={13} className="text-neutral-400 dark:text-neutral-600 shrink-0 mt-0.5" />
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">{b}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── 9. Future Improvements ── */}
        <motion.section {...fadeUp(0.05)}>
          <SectionLabel>08 — Next Steps</SectionLabel>
          <SectionHeading>Future Improvements</SectionHeading>

          <div className="grid sm:grid-cols-2 gap-4">
            {cs.future.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full">
                  <p className="text-neutral-900 dark:text-neutral-100 font-semibold text-sm mb-2">{f.title}</p>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">{f.detail}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Footer CTA ── */}
        <motion.section {...fadeUp(0.05)}>
          <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-8 text-center">
            <p className="text-neutral-400 dark:text-neutral-500 text-xs uppercase tracking-widest mb-3">Interested in this work?</p>
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Let's build something together</h3>
            <p className="text-neutral-500 dark:text-neutral-400 mb-6 max-w-md mx-auto text-sm">
              I'm open to roles, freelance projects, and collaborations involving AI engineering and full-stack development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition"
              >
                Get in Touch
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </motion.section>

      </main>
    </div>
  );
}
