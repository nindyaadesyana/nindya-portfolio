export type Project = {
  title: string;
  description: string;
  tech: string[];
  type: string;
  features?: string[];
  github?: string;
  demo?: string;
  caseStudy?: string;
};

export const projects: Project[] = [
  {
    title: "TVKU AI Chatbot",
    description:
      "AI chatbot system for Televisi Kampus UDINUS built with LLM and Retrieval Augmented Generation, delivering accurate, real-time knowledge-base answers.",
    tech: ["Llama 3", "RAG", "LangChain", "ChromaDB", "Next.js", "TypeScript"],
    type: "AI Chatbot",
    features: [
      "Knowledge-based chatbot with RAG pipeline",
      "Voice interaction support",
      "Real-time information retrieval",
    ],
    github: "https://github.com/nindyaadesyana/chatbot",
    demo: "#",
    caseStudy: "/case-study/tvku-ai-chatbot",
  },
  {
    title: "VoiceClone TVKU",
    description:
      "AI voice cloning and automated dubbing platform for broadcasting — synthesizes natural-sounding voices from text with speaker identity preservation.",
    tech: ["Python", "Flask", "ElevenLabs API", "Whisper", "SQLite"],
    type: "AI Voice",
    features: [
      "Voice cloning from reference audio",
      "Automated speech-to-text transcription",
      "Broadcasting-grade audio export",
    ],
    github: "#",
    demo: "#",
    caseStudy: "/case-study/voiceclone-tvku",
  },
  {
    title: "AI CV Screening System",
    description:
      "Intelligent recruitment assistant that extracts, analyzes, and ranks candidate CVs automatically — saving HR teams hours of manual review.",
    tech: ["Next.js", "TypeScript", "NLP", "PDF Processing"],
    type: "AI Recruitment",
    features: [
      "Automated CV parsing with NLP",
      "Candidate ranking algorithm",
      "Exportable screening reports",
    ],
    github: "#",
    demo: "#",
    caseStudy: "/case-study/ai-cv-screening",
  },
  {
    title: "Computer Vision System",
    description:
      "Deep learning based object detection and image recognition system built with YOLOv8 for high-accuracy real-time visual analysis.",
    tech: ["Python", "TensorFlow", "OpenCV", "YOLOv8"],
    type: "Computer Vision",
    features: [
      "Real-time object detection",
      "Custom model training pipeline",
      "High-accuracy image classification",
    ],
    github: "#",
    demo: "#",
  },
];
