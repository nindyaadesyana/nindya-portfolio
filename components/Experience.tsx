"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Users, Star } from "lucide-react";

type ExperienceItem = {
  period: string;
  role: string;
  org: string;
  type: "work" | "education" | "org" | "service";
  description: string;
  highlights?: string[];
};

const experiences: ExperienceItem[] = [
  {
    period: "2025 – 2026",
    role: "AI Development Intern",
    org: "TVKU – Televisi Kampus UDINUS",
    type: "work",
    description: "Developed AI-powered applications for a campus broadcasting station, including an LLM-based chatbot with RAG and an automated voice cloning system for dubbing.",
    highlights: [
      "Built TVKU AI Chatbot using Llama 3 + LangChain + ChromaDB",
      "Developed VoiceClone dubbing platform with ElevenLabs API",
      "Integrated Next.js frontend with Python Flask backend",
    ],
  },
  {
    period: "2022 – 2024",
    role: "Expert Staff – Entrepreneurship Division",
    org: "BEM FIK UDINUS",
    type: "org",
    description: "Served in the student executive body for the Faculty of Computer Science, organizing entrepreneurship programs and community initiatives.",
    highlights: [
      "Organized faculty-level entrepreneurship workshops",
      "Led cross-division collaboration projects",
      "Developed leadership and event management skills",
    ],
  },
  {
    period: "2022 – 2026",
    role: "S1 Teknik Informatika",
    org: "Universitas Dian Nuswantoro (UDINUS)",
    type: "education",
    description: "Bachelor's degree in Informatics Engineering with specialization in Artificial Intelligence. Final project focused on AI-based applications.",
    highlights: [
      "Specialization: Artificial Intelligence",
      "Final project: AI application development",
      "Relevant coursework: ML, Computer Vision, NLP",
    ],
  },
  {
    period: "May 2023 – Jan 2025",
    role: "Cook Helper",
    org: "Serambi Eatery",
    type: "service",
    description: "Gained professional experience in the hospitality industry by supporting food preparation, maintaining kitchen operations, and ensuring service quality in a fast-paced environment.",
    highlights: [
      "Supported daily food preparation and kitchen operations",
      "Maintained service quality and kitchen cleanliness standards",
      "Developed teamwork and time management in high-pressure settings",
    ],
  },
  {
    period: "2025",
    role: "Cashier",
    org: "Hospitality Industry",
    type: "service",
    description: "Continued in the hospitality industry handling customer transactions, managing orders, maintaining accuracy in financial records, and delivering consistent customer service.",
    highlights: [
      "Handled customer transactions and order management accurately",
      "Maintained precision in financial records and daily reports",
      "Provided friendly customer service in a fast-paced setting",
    ],
  },
];

const iconMap = { work: Briefcase, education: GraduationCap, org: Users, service: Star };

const softSkills = [
  "Communication", "Teamwork", "Time Management",
  "Problem Solving", "Adaptability", "Customer Service",
  "Leadership", "Fast Learner",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-3">My journey</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Experience &amp; Background</h2>
        </motion.div>

        <div className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800 space-y-8">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.type];
            return (
              <motion.div
                key={exp.role + exp.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-8 h-8 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex items-center justify-center text-neutral-500 dark:text-neutral-400">
                  <Icon size={14} />
                </div>
                <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-neutral-900 dark:text-neutral-100 font-semibold">{exp.role}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 text-sm">{exp.org}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 text-xs font-mono">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                  {exp.highlights && (
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-neutral-500 dark:text-neutral-400 text-sm">
                          <span className="mt-2 w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600 shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950"
        >
          <h3 className="text-neutral-700 dark:text-neutral-300 font-semibold mb-5 text-sm uppercase tracking-widest">Soft Skills</h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
