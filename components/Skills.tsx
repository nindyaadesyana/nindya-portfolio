"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Wrench } from "lucide-react";

/* ── Skill bar groups ─────────────────────────────────────── */
const skillGroups = [
  {
    category: "AI & Machine Learning",
    icon: Brain,
    skills: [
      { name: "Python", level: 90 },
      { name: "TensorFlow", level: 80 },
      { name: "OpenCV", level: 82 },
      { name: "YOLOv8", level: 78 },
      { name: "EasyOCR", level: 75 },
      { name: "LangChain", level: 85 },
      { name: "Ollama", level: 80 },
      { name: "ChromaDB", level: 78 },
    ],
  },
  {
    category: "Web Development",
    icon: Globe,
    skills: [
      { name: "Next.js", level: 88 },
      { name: "React", level: 87 },
      { name: "TypeScript", level: 84 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Node.js", level: 78 },
      { name: "Laravel", level: 72 },
    ],
  },
  {
    category: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", level: 88 },
      { name: "Docker", level: 70 },
      { name: "Figma", level: 75 },
      { name: "VS Code", level: 95 },
    ],
  },
];

/* ── Tech stack logos (SVG inline) ────────────────────────── */
type TechItem = { name: string; logo: React.ReactNode };

const techStack: { category: string; items: TechItem[] }[] = [
  {
    category: "AI Frameworks & APIs",
    items: [
      {
        name: "LangChain",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: "Ollama",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M6 20c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            <circle cx="8.5" cy="7.5" r="1" fill="currentColor"/>
            <circle cx="15.5" cy="7.5" r="1" fill="currentColor"/>
          </svg>
        ),
      },
      {
        name: "RAG",
        logo: (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: "Whisper",
        logo: (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: "ElevenLabs",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <rect x="4" y="3" width="3" height="18" rx="1.5"/>
            <rect x="10.5" y="3" width="3" height="18" rx="1.5"/>
            <rect x="17" y="3" width="3" height="18" rx="1.5"/>
          </svg>
        ),
      },
      {
        name: "Prompt Eng.",
        logo: (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M8 9l3 3-3 3M13 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
        ),
      },
      {
        name: "REST API",
        logo: (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "Next.js",
        logo: (
          <svg viewBox="0 0 180 180" fill="currentColor" className="w-7 h-7">
            <path d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0Zm44.3 161.3L74.8 80H60v59.8h13.8V98.3l52.5 68.2a75.7 75.7 0 0 1-26 10.5v-.7Zm17.4-12.6V80h-13.8v68.7ZM60 80h13.8v.3L60 62.6V80Z" />
          </svg>
        ),
      },
      {
        name: "React",
        logo: (
          <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7">
            <circle cx="12" cy="12" r="2.05" fill="currentColor" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="currentColor" strokeWidth="1.2" fill="none" transform="rotate(120 12 12)" />
          </svg>
        ),
      },
      {
        name: "TypeScript",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <rect width="24" height="24" rx="2" fill="currentColor" className="text-[#3178C6] dark:text-[#3178C6]" />
            <path d="M13.47 14.47v1.84c.3.16.65.28 1.04.36.4.08.82.12 1.26.12.43 0 .84-.04 1.23-.13.39-.09.73-.23 1.02-.44.3-.2.53-.48.7-.82.17-.35.26-.77.26-1.27 0-.36-.05-.68-.16-.95a2.2 2.2 0 0 0-.46-.72 3.4 3.4 0 0 0-.72-.56 8.7 8.7 0 0 0-.94-.48 7 7 0 0 1-.56-.27 1.9 1.9 0 0 1-.38-.27.97.97 0 0 1-.22-.3.82.82 0 0 1-.07-.35c0-.12.02-.22.07-.32.05-.1.12-.18.22-.25.1-.07.22-.12.36-.16.14-.04.31-.06.5-.06.13 0 .27.01.42.04.15.03.3.07.45.13.15.06.29.13.42.22.14.09.26.2.36.32v-1.72a4.2 4.2 0 0 0-.91-.26 5.7 5.7 0 0 0-1.1-.1c-.42 0-.82.05-1.2.14-.38.1-.71.25-.99.45-.28.2-.5.46-.66.78-.16.32-.24.7-.24 1.14 0 .57.15 1.06.45 1.46.3.4.77.74 1.4 1.02l.57.25c.18.08.33.16.46.24.13.08.22.17.29.27.07.1.1.22.1.36 0 .12-.02.24-.08.34a.72.72 0 0 1-.23.26c-.1.07-.23.13-.38.17-.16.04-.34.06-.55.06-.35 0-.7-.07-1.04-.21a3.3 3.3 0 0 1-.95-.62ZM9 10.5H6.5V9h7v1.5h-2.5V18H9v-7.5Z" fill="white" />
          </svg>
        ),
      },
      {
        name: "Tailwind CSS",
        logo: (
          <svg viewBox="0 0 54 33" className="w-8 h-5">
            <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8c2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" fill="#06B6D4"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Python",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M11.914.002C5.82.002 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.911S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.034v-2.867s-.11-3.403 3.345-3.403h5.76s3.236.052 3.236-3.126V3.126S18.31.002 11.914.002zM8.708 1.79a1.046 1.046 0 1 1 0 2.09 1.046 1.046 0 0 1 0-2.09z" fill="#3776AB"/>
            <path d="M12.086 23.998c6.096 0 5.716-2.654 5.716-2.654l-.007-2.752h-5.814v-.826h8.11S24 18.21 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.034v2.867s.11 3.403-3.345 3.403H9.46s-3.236-.052-3.236 3.126v5.407s-.491 3.124 5.863 3.124zm3.206-1.789a1.046 1.046 0 1 1 0-2.09 1.046 1.046 0 0 1 0 2.09z" fill="#FFD43B"/>
          </svg>
        ),
      },
      {
        name: "Flask",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M5.52 0C4.227 0 2.824.87 1.94 2.31L.46 4.709C-.42 6.126-.018 7.776 1.358 8.64l3.458 2.177c.7.441 1.551.565 2.355.345l-.007.012a5.94 5.94 0 0 0-.45 1.04 5.03 5.03 0 0 0-.196 1.366c-.002.356.028.712.09 1.064.274 1.6 1.15 2.921 2.344 3.706.583.384 1.243.596 1.925.596.09 0 .18-.003.271-.01a3.73 3.73 0 0 0 1.88-.673c.527-.367 1.02-.917 1.427-1.614 1.06-1.81.9-4.08-.351-5.523l.017-.016c.51-.498.937-1.117 1.262-1.841l3.449-2.174c1.382-.87 1.78-2.517.899-3.93L16.386 2.31C15.507.87 14.1 0 12.808 0h-.643l-1.14 1.948L9.887 0H5.52zm1.636 3.21c.447 0 .878.202 1.178.572L10.02 6.28a1.28 1.28 0 0 1-.13 1.793 1.24 1.24 0 0 1-1.767-.134L6.437 5.441a1.28 1.28 0 0 1 .13-1.793c.173-.147.37-.248.58-.3a1.2 1.2 0 0 1 .009-.138zm5.694 0c.034 0 .068.001.1.004a1.2 1.2 0 0 1 .49.134c.21.102.406.263.549.484l1.686 2.498a1.28 1.28 0 0 1-.356 1.767 1.24 1.24 0 0 1-1.74-.362L11.39 5.237a1.28 1.28 0 0 1 .356-1.767 1.23 1.23 0 0 1 1.104-.26zm-2.844 5.737c.985 0 1.936.422 2.627 1.17a4.21 4.21 0 0 1 .307 4.985c-.267.457-.582.8-.912 1.03a2.23 2.23 0 0 1-1.152.406 2.12 2.12 0 0 1-1.184-.358c-1.174-.772-1.738-2.445-1.4-4.007.172-.804.548-1.503 1.055-1.994a2.8 2.8 0 0 1 .66-.232zm0 1.478c-.32.073-.63.243-.898.513-.367.362-.64.888-.766 1.482-.247 1.152.1 2.327.833 2.81.196.13.395.192.593.192.065 0 .13-.006.194-.018a1.38 1.38 0 0 0 .686-.377c.246-.213.477-.548.673-.968.426-.927.39-2.205-.223-2.979a1.99 1.99 0 0 0-1.09-.655h-.003z"/>
          </svg>
        ),
      },
      {
        name: "Node.js",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M11.998 24a2.35 2.35 0 0 1-1.168-.31L8.4 22.21c-.35-.195-.178-.264-.063-.303.452-.157.543-.192 1.024-.465.05-.028.116-.018.167.012l1.844 1.095c.067.036.16.036.22 0l7.19-4.151c.067-.039.11-.116.11-.195V6.798c0-.082-.043-.158-.112-.197l-7.19-4.146a.224.224 0 0 0-.219 0L4.182 6.6c-.07.039-.114.117-.114.197v8.296c0 .08.044.155.114.192l1.97 1.137c1.07.535 1.727-.095 1.727-.73V7.54c0-.117.094-.208.208-.208h.906c.114 0 .208.091.208.208v8.152c0 1.428-.777 2.248-2.129 2.248-.416 0-.744 0-1.659-.45l-1.888-1.087a2.35 2.35 0 0 1-1.168-2.031V6.798c0-.836.447-1.614 1.168-2.031l7.19-4.15a2.43 2.43 0 0 1 2.34 0l7.19 4.15a2.35 2.35 0 0 1 1.168 2.031v8.296a2.35 2.35 0 0 1-1.168 2.031l-7.19 4.15a2.35 2.35 0 0 1-1.172.309z" fill="#339933"/>
            <path d="M14.26 16.902c-3.146 0-3.805-1.444-3.805-2.655 0-.117.094-.208.21-.208h.924c.104 0 .19.075.207.177.142.955.562 1.437 2.464 1.437 1.516 0 2.162-.343 2.162-1.147 0-.463-.183-.807-2.54-1.038-1.97-.195-3.187-.628-3.187-2.2 0-1.448 1.22-2.31 3.263-2.31 2.295 0 3.432.796 3.572 2.508a.209.209 0 0 1-.053.158.207.207 0 0 1-.153.066h-.928a.208.208 0 0 1-.202-.163c-.223-.992-.77-1.31-2.236-1.31-1.647 0-1.84.574-1.84 1.004 0 .521.226.673 2.462.968 2.213.292 3.26.705 3.26 2.257-.003 1.565-1.306 2.456-3.58 2.456z" fill="#339933"/>
          </svg>
        ),
      },
      {
        name: "Laravel",
        logo: (
          <svg viewBox="0 0 50 52" fill="currentColor" className="w-7 h-7">
            <path d="M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.022.055-.047.088-.065h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.018.059.043.088.065.025.02.055.037.078.06.028.028.048.06.071.093.018.024.04.045.055.071.023.04.036.082.051.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v21.459l8.008-4.611v-10.97c0-.071.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.029-.085.051-.124.016-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.054-.04.079-.06.029-.022.055-.047.088-.065l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533c.034.018.06.043.09.065.025.02.054.037.077.06.028.028.049.06.072.093.018.024.04.045.054.071.023.039.036.082.052.124.007.023.021.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.645 2.675v9.124l8.008-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.53l17.618 10.144v-9.216l-9.204-5.238-.003-.002-.004-.002c-.031-.018-.057-.042-.086-.064-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.002c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.54L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.645 2.675v20.096l3.363-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-7.982-4.593-9.211 5.303-8.395 4.833 7.976 4.511z" fill="#FF2D20"/>
          </svg>
        ),
      },
      {
        name: "FastAPI",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm-.624 21.624v-7.248H6.0L13.08 2.376v7.248h5.304z" fill="#009688"/>
          </svg>
        ),
      },
    ],
  },
  {
    category: "DB & Cloud",
    items: [
      {
        name: "ChromaDB",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="5" fill="currentColor" opacity="0.4"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        ),
      },
      {
        name: "SQLite",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M21.678.521C20.467-.29 19.13-.05 17.95.58L5.549 7.423C3.75 8.37 2.389 10.035 1.87 12.014c-.381 1.468-.26 2.912.314 4.129l.618 1.349-1.24 1.24a2.56 2.56 0 0 0-.562 2.752l.063.148c.271.637.78 1.142 1.419 1.408a2.57 2.57 0 0 0 2.755-.555l.613-.609.498.267c1.084.582 2.377.8 3.732.547 2.13-.398 3.99-1.813 5.002-3.815l6.62-12.855c.776-1.509.677-3.25-.045-4.299zM6.05 22.117a1.37 1.37 0 0 1-1.453.295 1.36 1.36 0 0 1-.752-.746 1.36 1.36 0 0 1 .297-1.458l1.023-1.023.92 2.008-.035.924zm5.45-.553c-1.172.218-2.292.016-3.22-.496l-1.038-2.268 4.316-4.31a.6.6 0 0 0 0-.847.599.599 0 0 0-.847 0L6.4 17.956l-.62-1.353a5.04 5.04 0 0 1-.253-3.283c.41-1.58 1.519-2.93 2.972-3.705l12.4-6.844c.667-.368 1.358-.461 1.913-.06.8.573.886 1.832.306 2.944z" fill="#003B57"/>
          </svg>
        ),
      },
      {
        name: "PostgreSQL",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.449.344 6.601c.023 1.256.281 2.514.754 3.48.474.967 1.2 1.759 2.116 1.806.422.022.915-.045 1.422-.282a4.935 4.935 0 0 0 .534-.298v.048c.013.78.048 1.33.138 1.73a2.5 2.5 0 0 0-.24-.032c-.638-.046-1.208.168-1.539.678-.362.553-.41 1.37-.118 2.28.113.346.283.953.59 1.44.306.487.77.94 1.418.94h.003c.316 0 .602-.117.826-.311.22.24.483.396.745.497.587.22 1.17.216 1.542.212h.012c.46.003 1.05-.026 1.622-.272.378.299.84.465 1.358.465h.015c.718-.005 1.327-.314 1.76-.786.435.47 1.044.778 1.755.782h.012c.726 0 1.348-.35 1.784-.9.437-.552.69-1.33.697-2.214.013-1.364-.374-2.25-.764-2.915.145-.112.264-.217.356-.316.8-.856 1.06-1.703 1.07-2.485.009-.782-.24-1.498-.6-2.097.154-.077.3-.162.437-.252a6.01 6.01 0 0 0 1.856-2.012c.453-.79.696-1.69.696-2.508 0-.816-.238-1.545-.666-2.07C20.186.37 18.787 0 17.127 0zM5.351 9.548c-.14.01-.362-.018-.591-.28-.23-.262-.47-.739-.614-1.268-.144-.53-.15-1.025-.033-1.248.066-.125.157-.175.267-.176.132-.001.31.06.5.21a2.58 2.58 0 0 1 .547.754c.136.3.22.647.213 1.005-.007.358-.1.723-.29.988zm11.43.326c-.188.16-.472.21-.781.195-.2-.01-.413-.051-.622-.12.226-.16.467-.327.724-.513l.294-.214c.093.15.19.28.228.406.05.174.037.266-.03.328-.007.01-.014.019-.022.027a.25.25 0 0 1 .21-.11zm-2.72 9.78c-.327-.006-.546-.148-.714-.428-.168-.28-.272-.702-.277-1.203-.004-.501.093-.908.254-1.175a.7.7 0 0 1 .63-.385c.315.005.54.144.71.424.17.28.277.699.284 1.202.006.504-.086.913-.245 1.183a.735.735 0 0 1-.643.382zm3.511.018c-.37-.007-.596-.16-.747-.45-.15-.29-.215-.714-.19-1.194.025-.48.139-.871.32-1.122.18-.25.407-.362.693-.356.37.007.594.157.744.448.15.29.218.715.193 1.196-.025.48-.14.874-.32 1.126-.18.252-.407.36-.693.352z" fill="#336791"/>
          </svg>
        ),
      },
      {
        name: "Docker",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.186.185v1.888c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.084-.148-1.003-1.005-1.495-1.046-1.52l-.207-.12-.113.203a4.302 4.302 0 0 0-.417 1.218c-.152.595-.088 1.243.182 1.73-.27.17-.75.37-1.498.37H.195a.195.195 0 0 0-.195.195 10.24 10.24 0 0 0 .556 3.33 6.92 6.92 0 0 0 2.29 3.388c1.178.882 3.088 1.366 5.253 1.366a15.05 15.05 0 0 0 2.73-.248 11.2 11.2 0 0 0 3.585-1.535 10.045 10.045 0 0 0 2.47-2.537c1.181-1.668 1.886-3.53 2.315-5.213.038.002.076.003.113.003 1.318 0 2.13-.53 2.577-1 .296-.295.51-.627.636-.939l.088-.25-.256-.193z" fill="#2496ED"/>
          </svg>
        ),
      },
      {
        name: "Git",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6-2.058L13.2 8.981v6.268a1.837 1.837 0 0 1 .484 3.582 1.836 1.836 0 0 1-2.264-1.852 1.836 1.836 0 0 1 1.234-1.718V8.995a1.836 1.836 0 0 1-.997-2.41L8.953 3.828 .45 12.332a1.55 1.55 0 0 0 0 2.187l10.48 10.478a1.549 1.549 0 0 0 2.186 0l10.43-10.428a1.548 1.548 0 0 0 0-2.187" fill="#F05032"/>
          </svg>
        ),
      },
      {
        name: "Vercel",
        logo: (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M24 22.525H0l12-21.05 12 21.05z"/>
          </svg>
        ),
      },
    ],
  },
];

/* ── Component ─────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-neutral-900 border-t border-neutral-100 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-3">What I work with</p>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100">Skills &amp; Technologies</h2>
        </motion.div>

        {/* Skill bar cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.12 }}
              className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 p-6 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400">
                  <group.icon size={16} />
                </div>
                <h3 className="font-semibold text-neutral-700 dark:text-neutral-300 text-sm">{group.category}</h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: gi * 0.12 + si * 0.05 }}
                  >
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-neutral-700 dark:text-neutral-300">{skill.name}</span>
                      <span className="text-neutral-400 dark:text-neutral-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: gi * 0.12 + si * 0.05 + 0.2 }}
                        className="h-full rounded-full bg-neutral-900 dark:bg-neutral-100"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>



        {/* ── Tech Stack Used ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-20"
        >
          <p className="text-neutral-400 dark:text-neutral-500 text-xs tracking-widest uppercase mb-3">Technologies</p>
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-10">Tech Stack Used</h3>

          <div className="space-y-8">
            {techStack.map((group, gi) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.1 }}
              >
                {/* Category label */}
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                    {group.category}
                  </p>
                  <div className="flex-1 h-px bg-neutral-100 dark:bg-neutral-800" />
                </div>

                {/* Logo grid */}
                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, ii) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + ii * 0.05 }}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:border-neutral-400 dark:hover:border-neutral-600 transition-all duration-200 cursor-default"
                    >
                      <span className="text-neutral-700 dark:text-neutral-300 shrink-0">
                        {item.logo}
                      </span>
                      <span className="text-neutral-700 dark:text-neutral-300 text-sm font-medium whitespace-nowrap">
                        {item.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
