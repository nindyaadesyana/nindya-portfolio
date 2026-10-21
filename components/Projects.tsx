"use client";

import { projects } from "@/data/Projects";
import { motion } from "framer-motion";
import { GitFork, ExternalLink, BookOpen, Check } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Featured Projects</h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-xl">
            Real-world intelligent applications combining AI, machine learning, and full-stack development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300 flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="relative h-40 bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center border-b border-neutral-200 dark:border-neutral-700">
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 rounded-xl bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 flex items-center justify-center mx-auto mb-2">
                    <span className="text-xl font-bold text-neutral-300 dark:text-neutral-500">{project.title.charAt(0)}</span>
                  </div>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs">Preview</p>
                </div>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 text-xs">
                  {project.type}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-2 group-hover:text-neutral-600 dark:group-hover:text-neutral-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed mb-4">{project.description}</p>

                {project.features && (
                  <ul className="space-y-1.5 mb-5">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-neutral-500 dark:text-neutral-400 text-sm">
                        <Check size={13} className="text-neutral-400 dark:text-neutral-500 mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-xs border border-neutral-200 dark:border-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 flex-wrap pt-1 border-t border-neutral-100 dark:border-neutral-800">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 transition mt-3">
                      <GitFork size={12} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs hover:bg-neutral-700 dark:hover:bg-neutral-300 transition mt-3">
                      <ExternalLink size={12} /> Live Demo
                    </a>
                  )}
                  {project.caseStudy && (
                    <Link
                      href={project.caseStudy}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800 transition mt-3"
                    >
                      <BookOpen size={12} /> Case Study
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
