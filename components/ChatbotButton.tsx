"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Sparkles, Send } from "lucide-react";
import { useState } from "react";

export default function ChatbotButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        onClick={() => setOpen(!open)}
        aria-label="Ask Nindya AI"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-neutral-900 dark:bg-neutral-100 hover:bg-neutral-700 dark:hover:bg-neutral-300 transition-all duration-200 text-white dark:text-neutral-900 shadow-lg shadow-neutral-900/20 dark:shadow-black/30"
      >
        <motion.div animate={{ rotate: open ? 90 : 0 }} transition={{ duration: 0.2 }}>
          {open ? <X size={16} /> : <Bot size={16} />}
        </motion.div>
        <span className="text-sm font-medium">Ask Nindya AI</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-50 w-80 md:w-96 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-xl shadow-neutral-200/60 dark:shadow-black/40 overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center">
                <Sparkles size={14} className="text-white dark:text-neutral-900" />
              </div>
              <div>
                <p className="text-neutral-800 dark:text-neutral-200 font-semibold text-sm">Nindya AI</p>
                <p className="text-neutral-400 dark:text-neutral-500 text-xs">Powered by portfolio data</p>
              </div>
              <span className="ml-auto flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-xs">
                <span className="w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full" />
                Online
              </span>
            </div>

            <div className="px-5 py-5 space-y-3 min-h-[180px] bg-white dark:bg-neutral-900">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Bot size={13} className="text-neutral-500 dark:text-neutral-400" />
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-2xl rounded-tl-sm px-4 py-3 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed max-w-[85%]">
                  Hi! I'm Nindya's AI assistant. Ask me anything about her skills, projects, or experience.
                </div>
              </div>
              <div className="pl-10 flex flex-wrap gap-2 pt-1">
                {["Tell me about your projects", "What's your tech stack?", "Are you available?"].map((q) => (
                  <button
                    key={q}
                    className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-500 dark:text-neutral-400 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="px-4 pb-4 border-t border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
              <div className="flex items-center gap-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl px-4 py-2.5 focus-within:border-neutral-400 dark:focus-within:border-neutral-600 transition mt-3">
                <input
                  type="text"
                  placeholder="Ask something…"
                  className="flex-1 bg-transparent text-neutral-700 dark:text-neutral-300 text-sm placeholder-neutral-300 dark:placeholder-neutral-600 focus:outline-none"
                />
                <button className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition">
                  <Send size={14} />
                </button>
              </div>
              <p className="text-center text-neutral-300 dark:text-neutral-600 text-xs mt-2">AI integration coming soon</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
