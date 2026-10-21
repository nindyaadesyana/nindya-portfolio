"use client";

import { motion } from "framer-motion";
import { Mail, Link2, GitFork, Send, MapPin } from "lucide-react";
import { useState } from "react";

const contactLinks = [
  { icon: Mail,    label: "Email",    value: "nindyaDesyana@email.com",          href: "mailto:nindyaDesyana@email.com" },
  { icon: Link2,   label: "LinkedIn", value: "linkedin.com/in/nindya-desyana",   href: "https://linkedin.com/in/nindya-desyana" },
  { icon: GitFork, label: "GitHub",   value: "github.com/nindyaadesyana",         href: "https://github.com/nindyaadesyana" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950 border-t border-neutral-100 dark:border-neutral-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-3">Get in touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">
            Let's Build Something<br />Intelligent Together
          </h2>
          <p className="mt-4 text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed">
            Whether you have a project in mind, a role to fill, or just want to talk about AI — my inbox is always open.
          </p>
          <div className="mt-3 flex items-center gap-2 text-neutral-400 dark:text-neutral-500 text-sm">
            <MapPin size={13} />
            Semarang, Indonesia · Open to remote
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Links */}
          <motion.div initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-3">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700 transition">
                  <link.icon size={16} />
                </div>
                <div>
                  <p className="text-neutral-800 dark:text-neutral-200 font-medium text-sm">{link.label}</p>
                  <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-0.5">{link.value}</p>
                </div>
              </a>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-start gap-3"
            >
              <span className="relative flex h-2.5 w-2.5 mt-1 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 dark:bg-neutral-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neutral-900 dark:bg-neutral-100" />
              </span>
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 font-medium text-sm">Available for opportunities</p>
                <p className="text-neutral-400 dark:text-neutral-500 text-xs mt-0.5">Open to full-time roles, freelance projects, and collaborations.</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {[
              { id: "name", label: "Your Name", type: "text", placeholder: "John Doe" },
              { id: "email", label: "Email Address", type: "email", placeholder: "john@example.com" },
            ].map((field) => (
              <div key={field.id}>
                <label className="block text-neutral-600 dark:text-neutral-400 text-xs font-medium mb-1.5 uppercase tracking-wide">{field.label}</label>
                <input
                  type={field.type}
                  required
                  value={form[field.id as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                  placeholder={field.placeholder}
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 placeholder-neutral-300 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition text-sm"
                />
              </div>
            ))}
            <div>
              <label className="block text-neutral-600 dark:text-neutral-400 text-xs font-medium mb-1.5 uppercase tracking-wide">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 placeholder-neutral-300 dark:placeholder-neutral-600 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition text-sm resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition text-white dark:text-neutral-900 font-medium text-sm"
            >
              {sent ? <>Sent ✓</> : <><Send size={14} /> Send Message</>}
            </button>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-3 text-neutral-400 dark:text-neutral-500 text-xs"
        >
          <span>Nindya Desyana</span>
          <span>AI Engineer · Full Stack Developer · Semarang, Indonesia</span>
          <span>© 2024</span>
        </motion.div>
      </div>
    </section>
  );
}
