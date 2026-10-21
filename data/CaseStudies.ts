export type FeatureCard = {
  name: string;
  description: string;
  implementation: string;
};

export type Challenge = {
  challenge: string;
  solution: string;
  lesson: string;
};

export type ProcessStep = {
  phase: string;
  label: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  role: string;
  timeline: string;
  category: string;
  tech: string[];
  background: {
    context: string;
    problem: string;
    challenges: string[];
  };
  solution: {
    overview: string;
    approach: string;
    rationale: string;
  };
  architecture: {
    description: string;
    components: { name: string; detail: string }[];
    dataFlow: string[];
    decisions: { title: string; reason: string }[];
  };
  features: FeatureCard[];
  process: ProcessStep[];
  challenges: Challenge[];
  results: {
    summary: string;
    outcomes: string[];
    benefits: string[];
  };
  future: { title: string; detail: string }[];
};

export const caseStudies: CaseStudy[] = [
  /* ──────────────────────────────────────────────────────────
     PROJECT 1 — TVKU AI Chatbot
  ────────────────────────────────────────────────────────── */
  {
    slug: "tvku-ai-chatbot",
    title: "TVKU AI Chatbot",
    tagline:
      "A production-grade RAG-powered chatbot that grounds every answer in TVKU's institutional knowledge base — eliminating hallucinations and giving viewers accurate, real-time information.",
    role: "Full-Stack AI Engineer",
    timeline: "2023 – 2024",
    category: "AI Chatbot · RAG · LLM",
    tech: ["Llama 3", "Ollama", "LangChain", "ChromaDB", "Next.js", "TypeScript", "Tailwind CSS", "Python", "FastAPI"],

    background: {
      context:
        "TVKU (Televisi Kampus UDINUS) is a campus broadcasting station that constantly receives audience questions — about programs, schedules, anchors, and events. These were handled manually by staff, creating bottlenecks and inconsistent answers.",
      problem:
        "There was no automated system capable of answering questions about TVKU's internal knowledge. General-purpose LLMs would hallucinate details about a niche institution. The station needed an AI assistant that only answered from verified internal data sources.",
      challenges: [
        "LLMs lack knowledge of TVKU-specific information and hallucinate when asked",
        "Real-time retrieval from unstructured institutional documents (PDFs, articles, FAQs)",
        "Voice interaction required low-latency speech-to-text and text-to-speech pipelines",
        "Deploying a local LLM (Ollama) on campus infrastructure with limited GPU resources",
      ],
    },

    solution: {
      overview:
        "Built a Retrieval-Augmented Generation (RAG) system that vectorizes TVKU's internal documents, retrieves the most semantically relevant chunks at query time, and feeds them as context to Llama 3 — ensuring every answer is grounded in real institutional data.",
      approach:
        "Documents are chunked, embedded via sentence-transformers, and stored in ChromaDB. On each query, the top-k most relevant chunks are retrieved and injected into the LLM prompt. The frontend is a Next.js chat UI with real-time streaming responses and optional voice I/O.",
      rationale:
        "RAG was chosen over fine-tuning because TVKU's knowledge base updates frequently. RAG allows near-instant knowledge updates without retraining — just re-index the documents. Running Llama 3 locally via Ollama eliminated API costs and kept data on-premise.",
    },

    architecture: {
      description:
        "A three-layer architecture: a Next.js frontend chat interface, a FastAPI backend orchestration layer, and a vector store + LLM inference layer.",
      components: [
        { name: "Next.js Frontend", detail: "Streaming chat UI, voice recorder, and response renderer with markdown support" },
        { name: "FastAPI Backend", detail: "Handles query routing, retrieval orchestration, and streaming LLM responses via Server-Sent Events" },
        { name: "LangChain RAG Chain", detail: "Manages document retrieval, prompt construction, and LLM call orchestration" },
        { name: "ChromaDB", detail: "Persistent vector store for document embeddings with cosine similarity search" },
        { name: "Ollama / Llama 3", detail: "Local LLM inference — no external API calls, full data privacy" },
        { name: "Whisper", detail: "Speech-to-text for voice queries" },
      ],
      dataFlow: [
        "User submits text or voice query via Next.js UI",
        "Voice input transcribed by Whisper → text query sent to FastAPI",
        "LangChain embeds query → ChromaDB returns top-k relevant document chunks",
        "Chunks + query injected into Llama 3 prompt via LangChain",
        "LLM streams response back through FastAPI → SSE → rendered in chat UI",
        "Response optionally converted to speech for voice interaction",
      ],
      decisions: [
        { title: "Llama 3 over GPT-4", reason: "On-premise deployment keeps institutional data private and eliminates per-token API costs at scale" },
        { title: "ChromaDB over Pinecone", reason: "Lightweight, self-hosted, and integrates natively with LangChain — ideal for campus infrastructure" },
        { title: "Streaming responses", reason: "Reduces perceived latency significantly; users see partial answers immediately instead of waiting for full generation" },
      ],
    },

    features: [
      {
        name: "Knowledge-Grounded Chat",
        description: "Every answer is retrieved from TVKU's verified document corpus — no hallucinations about institutional data.",
        implementation: "LangChain RetrievalQA chain with ChromaDB vector store, cosine similarity top-k retrieval, and custom prompt template with source citation",
      },
      {
        name: "Voice Interaction",
        description: "Users can ask questions by voice and receive spoken responses, enabling hands-free interaction.",
        implementation: "OpenAI Whisper for STT → LLM response → text-to-speech synthesis; streamed back to the browser",
      },
      {
        name: "Real-Time Streaming",
        description: "Responses stream token-by-token for a natural, low-latency chat experience.",
        implementation: "FastAPI Server-Sent Events (SSE) + LangChain streaming callbacks + React ReadableStream consumer",
      },
      {
        name: "Document Indexing Pipeline",
        description: "Admin interface to upload and re-index new TVKU documents without system downtime.",
        implementation: "PDFs and Markdown ingested via LangChain document loaders, split with RecursiveCharacterTextSplitter, embedded and upserted into ChromaDB",
      },
    ],

    process: [
      { phase: "01", label: "Research", detail: "Evaluated RAG vs fine-tuning; audited TVKU's existing documents; benchmarked Llama 3 vs Mistral on institutional Q&A tasks" },
      { phase: "02", label: "Design", detail: "Designed RAG pipeline architecture; defined chunk size strategy (512 tokens, 50 overlap) and retrieval top-k=5 based on experiments" },
      { phase: "03", label: "Development", detail: "Built ingestion pipeline → vector store → LangChain chain → FastAPI backend → Next.js streaming UI; integrated Whisper voice pipeline" },
      { phase: "04", label: "Testing", detail: "Evaluated retrieval quality with precision@k metrics; user-tested with TVKU staff for answer accuracy and latency" },
      { phase: "05", label: "Deployment", detail: "Deployed Ollama on campus server; containerized backend with Docker; configured CORS and SSE for production environment" },
    ],

    challenges: [
      {
        challenge: "LLM hallucinating TVKU-specific details not in training data",
        solution: "Implemented strict RAG with explicit instructions in the system prompt: 'Only answer based on the retrieved context. If the context does not contain the answer, say you don't know.'",
        lesson: "Prompt engineering is as critical as retrieval quality. Constraining the LLM's behavior explicitly prevents confident hallucinations.",
      },
      {
        challenge: "Slow response latency with local Llama 3 on CPU",
        solution: "Enabled GPU offloading via Ollama's CUDA layers parameter, reduced context window size, and implemented streaming to mask generation latency perceptually",
        lesson: "Perceived performance matters as much as actual performance. Streaming makes even a 10-second generation feel fast.",
      },
      {
        challenge: "Inconsistent retrieval quality for short or ambiguous queries",
        solution: "Implemented query expansion — the LLM first rewrites the user's question into a more descriptive search query before hitting ChromaDB",
        lesson: "Retrieval quality is the ceiling of RAG quality. Investing in query preprocessing yields more reliable answers than scaling the LLM.",
      },
    ],

    results: {
      summary:
        "Deployed successfully to TVKU with measurable reduction in staff time spent answering repetitive audience questions. The system handles the majority of FAQ queries autonomously.",
      outcomes: [
        "Handles institutional Q&A with high factual accuracy grounded in real documents",
        "Voice interaction reduces friction for mobile users asking questions on-the-go",
        "Zero external API costs — fully on-premise using Ollama",
        "Admin can update the knowledge base in under 5 minutes without code changes",
      ],
      benefits: [
        "TVKU staff freed from repetitive FAQ answering",
        "Viewers get instant, accurate answers 24/7",
        "Institutional knowledge is preserved and searchable",
        "Foundation for future TVKU intelligent systems",
      ],
    },

    future: [
      { title: "Multi-turn Memory", detail: "Add conversation history management so the chatbot remembers context within a session, enabling follow-up questions without repetition" },
      { title: "Analytics Dashboard", detail: "Log unanswered or low-confidence queries to identify knowledge gaps and improve document coverage" },
      { title: "Multilingual Support", detail: "Extend to Bahasa Indonesia as the primary language, with English as secondary" },
      { title: "LLM Evaluation Pipeline", detail: "Implement automated RAGAS evaluation (faithfulness, answer relevance, context precision) for continuous quality monitoring" },
    ],
  },

  /* ──────────────────────────────────────────────────────────
     PROJECT 2 — VoiceClone TVKU
  ────────────────────────────────────────────────────────── */
  {
    slug: "voiceclone-tvku",
    title: "VoiceClone TVKU",
    tagline:
      "An AI dubbing platform that clones a broadcaster's voice from a 30-second sample and synthesizes broadcast-quality audio from any text — automating the dubbing workflow entirely.",
    role: "AI/Backend Engineer",
    timeline: "2023 – 2024",
    category: "AI Voice · Speech Synthesis · Broadcasting",
    tech: ["Python", "Flask", "ElevenLabs API", "Whisper", "FFmpeg", "SQLite", "HTML/CSS/JS"],

    background: {
      context:
        "TVKU produces video content that occasionally requires dubbing — narrations, announcements, and program voice-overs. This process traditionally required booking studio time and coordinating with voice talent, creating scheduling delays and production costs.",
      problem:
        "The dubbing workflow was a production bottleneck: a 2-minute voice-over could take hours to schedule and record. There was no way to generate broadcast-quality audio on demand. The station needed a system that could synthesize a specific broadcaster's voice from text instantly.",
      challenges: [
        "Cloning a specific broadcaster's voice identity from a short audio sample",
        "Generating natural-sounding speech that matches broadcast audio quality standards",
        "Building an accessible web interface for non-technical broadcasting staff",
        "Managing audio file storage and retrieval efficiently",
      ],
    },

    solution: {
      overview:
        "A Flask web application that integrates ElevenLabs' voice cloning API and Whisper STT. Staff upload a voice sample (30–60 seconds), the system clones the voice profile via ElevenLabs, and then synthesizes any submitted text as broadcast-quality audio in that cloned voice.",
      approach:
        "ElevenLabs' Instant Voice Cloning API handles the voice synthesis pipeline. Whisper is used for transcription workflows (audio-to-text when needed). Flask serves as the lightweight backend orchestrating API calls, file management, and a simple SQLite job tracking database.",
      rationale:
        "ElevenLabs was selected after evaluating Coqui TTS, XTTS, and Bark for voice quality and cloning capability. ElevenLabs produces significantly more natural, broadcast-grade output from short samples. Flask was chosen for rapid prototyping and deployment simplicity.",
    },

    architecture: {
      description:
        "A Flask monolith with a simple HTML/JS frontend, ElevenLabs API integration layer, and SQLite database for job and voice profile management.",
      components: [
        { name: "Flask Web Server", detail: "Handles HTTP routes for voice upload, text submission, synthesis triggering, and audio download" },
        { name: "ElevenLabs Integration", detail: "Manages voice clone creation, voice ID persistence, and TTS synthesis API calls" },
        { name: "Whisper STT Module", detail: "Transcribes uploaded audio files to text for review or script generation workflows" },
        { name: "FFmpeg Audio Pipeline", detail: "Post-processes synthesized audio — normalization, format conversion, broadcast export" },
        { name: "SQLite Database", detail: "Tracks voice profiles, synthesis jobs, and generated audio files with metadata" },
      ],
      dataFlow: [
        "Staff uploads 30–60s voice sample via web UI → Flask receives and validates audio",
        "Audio sent to ElevenLabs Add Voice API → voice_id stored in SQLite",
        "Staff submits script text + selects voice profile → Flask calls ElevenLabs TTS API",
        "Synthesized audio returned as PCM stream → FFmpeg normalizes → saved as MP3/WAV",
        "Staff downloads broadcast-ready audio file from dashboard",
      ],
      decisions: [
        { title: "ElevenLabs over open-source TTS", reason: "Voice naturalness and cloning quality from short samples dramatically outperforms open-source alternatives for broadcast use" },
        { title: "SQLite over PostgreSQL", reason: "Single-server deployment with low concurrency requirements; SQLite eliminates infrastructure complexity for a campus-scale system" },
        { title: "FFmpeg post-processing", reason: "Ensures broadcast-standard loudness normalization (LUFS) and consistent audio format regardless of ElevenLabs output variation" },
      ],
    },

    features: [
      {
        name: "Voice Sample Upload & Cloning",
        description: "Upload a 30–60 second audio sample; the system creates a persistent cloned voice profile ready for synthesis.",
        implementation: "Multipart form upload → Flask validates audio format → ElevenLabs Add Voice API → voice_id persisted in SQLite voices table",
      },
      {
        name: "Text-to-Speech Synthesis",
        description: "Submit any script text and select a cloned voice profile to synthesize broadcast-quality audio on demand.",
        implementation: "ElevenLabs TTS API with voice_id and configurable stability/similarity_boost parameters; streamed response piped to FFmpeg",
      },
      {
        name: "Whisper Transcription",
        description: "Upload existing audio to automatically transcribe it to text — useful for generating scripts from existing recordings.",
        implementation: "Whisper base/medium model inference via Python subprocess; result returned as editable text in the UI",
      },
      {
        name: "Audio Export & Download",
        description: "Download synthesized audio in broadcast-ready format with proper loudness normalization.",
        implementation: "FFmpeg -af loudnorm filter to EBU R128 standard; exported as WAV 48kHz/24bit or MP3 320kbps based on use case",
      },
    ],

    process: [
      { phase: "01", label: "Research", detail: "Evaluated 4 voice synthesis APIs and 3 open-source models; recorded benchmark audio samples with a TVKU broadcaster for quality comparison testing" },
      { phase: "02", label: "Design", detail: "Wireframed the 3-screen workflow: voice library → script input → audio output; designed SQLite schema for voice profiles and job queue" },
      { phase: "03", label: "Development", detail: "Built Flask routes → ElevenLabs integration → Whisper module → FFmpeg pipeline → HTML/JS frontend with progress feedback" },
      { phase: "04", label: "Testing", detail: "Conducted listening tests with TVKU broadcasting staff; iterated on ElevenLabs stability and similarity_boost parameters for optimal naturalness" },
      { phase: "05", label: "Improvement", detail: "Added audio quality post-processing with FFmpeg; implemented error handling for API rate limits and network failures" },
    ],

    challenges: [
      {
        challenge: "Synthesized audio sounded robotic with default ElevenLabs parameters",
        solution: "Systematically tuned stability (0.4) and similarity_boost (0.75) parameters through 20+ listening tests with broadcast staff to find the sweet spot for natural-sounding output",
        lesson: "AI voice quality is highly parameter-sensitive. Domain-specific quality evaluation (actual broadcasters listening) is essential — PESQ scores alone are insufficient.",
      },
      {
        challenge: "ElevenLabs API rate limits disrupting batch synthesis workflows",
        solution: "Implemented an exponential backoff retry mechanism and a simple job queue using SQLite to serialize synthesis requests and retry failed jobs automatically",
        lesson: "Always design for third-party API unreliability. A job queue with retry logic makes integrations resilient with minimal overhead.",
      },
      {
        challenge: "Uploaded audio samples with background noise degraded voice clone quality",
        solution: "Added a pre-processing step using FFmpeg's highpass filter and noise gate to clean input samples before submission to ElevenLabs",
        lesson: "Input quality is the ceiling of output quality in voice AI. Preprocessing is non-negotiable for real-world audio.",
      },
    ],

    results: {
      summary:
        "Successfully deployed to TVKU, enabling on-demand voice-over generation for announcements and short-form content. Reduced the voice-over production cycle from hours to minutes.",
      outcomes: [
        "Voice-over generation time reduced from hours to under 2 minutes",
        "Broadcaster's voice identity preserved with high naturalness",
        "Non-technical staff can generate broadcast audio independently",
        "Whisper transcription adds a useful reverse-workflow for archival content",
      ],
      benefits: [
        "Broadcasting team gains production velocity for time-sensitive content",
        "Consistent voice quality regardless of recording conditions",
        "Institutional voice profiles preserved for long-term use",
        "Foundation for fully automated video content pipeline",
      ],
    },

    future: [
      { title: "Batch Script Processing", detail: "Accept a full script document and generate a segmented audio series with chapter markers for long-form programs" },
      { title: "Emotion & Tone Control", detail: "Expose ElevenLabs' emotion parameters through the UI to let staff control delivery style (informative, energetic, calm)" },
      { title: "Video Integration", detail: "Automatically sync synthesized audio with video timecodes using FFmpeg for a complete automated dubbing pipeline" },
      { title: "On-Premise TTS", detail: "Evaluate XTTS-v2 or Bark as a fallback when ElevenLabs API is unavailable, to eliminate single-vendor dependency" },
    ],
  },

  /* ──────────────────────────────────────────────────────────
     PROJECT 3 — AI CV Screening System
  ────────────────────────────────────────────────────────── */
  {
    slug: "ai-cv-screening",
    title: "AI CV Screening System",
    tagline:
      "An NLP-powered recruitment assistant that parses unstructured CVs, extracts structured candidate profiles, and ranks applicants by semantic relevance to job requirements — replacing manual screening.",
    role: "Full-Stack AI Engineer",
    timeline: "2024",
    category: "AI Recruitment · NLP · Full-Stack",
    tech: ["Next.js", "TypeScript", "PDF.js", "NLP", "Semantic Matching", "Tailwind CSS"],

    background: {
      context:
        "Recruitment teams in small-to-medium organizations spend a disproportionate amount of time on the initial CV screening phase — manually reading through tens or hundreds of applications to identify the most qualified candidates for each role.",
      problem:
        "Manual CV screening is slow, inconsistent, and prone to unconscious bias. A recruiter screening 50 CVs for a technical role spends 2–4 hours on a task that should take minutes. There was no tool that could automatically parse the specific structure of local CV formats and rank candidates objectively.",
      challenges: [
        "CVs come in unstructured PDF formats with inconsistent layouts — no two CVs look the same",
        "Extracting structured data (skills, education, experience) from free-form text",
        "Ranking candidates by relevance requires semantic understanding, not just keyword matching",
        "Building a recruiter-friendly dashboard that shows reasoning, not just scores",
      ],
    },

    solution: {
      overview:
        "A Next.js web application where recruiters upload a job description and multiple CVs. The system extracts structured profiles from each CV using PDF.js and NLP, computes semantic similarity between candidate profiles and the job description, and presents a ranked dashboard with per-candidate breakdown.",
      approach:
        "PDF.js handles text extraction from uploaded PDFs. A custom NLP pipeline segments extracted text into structured sections (education, skills, experience). Semantic matching computes relevance scores between candidate profiles and job requirements. The output is a ranked table with drill-down candidate cards.",
      rationale:
        "A custom NLP pipeline was built rather than using a pre-trained CV parser because local CV formats differ significantly from Western formats that commercial parsers are trained on. Semantic matching was chosen over keyword matching to handle synonyms and skill variations (e.g., 'machine learning' vs 'ML' vs 'deep learning').",
    },

    architecture: {
      description:
        "A Next.js full-stack application with API routes handling CV processing, NLP extraction, and scoring logic — all server-side with no external AI API dependency.",
      components: [
        { name: "Next.js Frontend", detail: "Drag-and-drop CV upload, job description input, ranking dashboard, and per-candidate detail drawer" },
        { name: "PDF.js Extraction Layer", detail: "Extracts raw text from uploaded PDF CVs with layout-aware parsing to preserve section structure" },
        { name: "NLP Segmentation Engine", detail: "Custom regex + heuristic pipeline to identify and extract skills, education, work experience, and contact info sections" },
        { name: "Semantic Scoring Module", detail: "Computes TF-IDF weighted cosine similarity between candidate skill vectors and job description requirements" },
        { name: "Ranking & Reporting Engine", detail: "Sorts candidates by composite score; generates per-candidate breakdown with matched and missing skills" },
      ],
      dataFlow: [
        "Recruiter uploads job description text + one or more CV PDFs via drag-and-drop",
        "PDF.js extracts raw text from each CV → sent to NLP segmentation pipeline",
        "NLP pipeline extracts structured fields: skills list, education timeline, experience summary",
        "Semantic scoring computes similarity between each candidate's profile and job requirements",
        "All candidates sorted by composite score → displayed in ranking dashboard",
        "Recruiter clicks candidate card to see detailed match breakdown (matched skills, gaps, summary)",
      ],
      decisions: [
        { title: "Client-side PDF processing with PDF.js", reason: "Eliminates server storage of sensitive CV data; all parsing happens in-browser and on Next.js API routes without persisting documents" },
        { title: "Custom NLP over spaCy/commercial parsers", reason: "Indonesian/local CV formats required custom section detection heuristics that pre-trained parsers failed on in testing" },
        { title: "TF-IDF semantic matching over exact keyword", reason: "Handles skill synonyms and variations naturally; a candidate listing 'deep learning' still matches a JD requiring 'machine learning expertise'" },
      ],
    },

    features: [
      {
        name: "PDF CV Parsing",
        description: "Upload multiple CVs in PDF format; the system extracts and structures all relevant information automatically.",
        implementation: "PDF.js text extraction → custom regex segmentation pipeline → structured JSON profile with fields: name, email, skills[], education[], experience[], summary",
      },
      {
        name: "Semantic Candidate Ranking",
        description: "Candidates ranked by semantic relevance to the job description — not just keyword matches.",
        implementation: "TF-IDF vectorization of skill lists + job requirements → cosine similarity matrix → composite score = (skill_match * 0.5) + (experience_relevance * 0.3) + (education_fit * 0.2)",
      },
      {
        name: "Match Breakdown Dashboard",
        description: "Per-candidate detail view showing matched skills, skill gaps, experience summary, and overall fit score.",
        implementation: "Set intersection/difference between candidate.skills and JD.required_skills; visual tag display with matched (green) / missing (red) / bonus (blue) classification",
      },
      {
        name: "Batch Processing",
        description: "Upload and process multiple CVs simultaneously with progress feedback.",
        implementation: "Promise.allSettled() for parallel PDF processing; streaming progress updates via React state; graceful handling of parsing failures per-CV",
      },
    ],

    process: [
      { phase: "01", label: "Research", detail: "Collected 20 sample CVs from UDINUS students; analyzed section patterns and layout variations; evaluated PDF parsing libraries (PDF.js vs pdfmake vs pdf-parse)" },
      { phase: "02", label: "Design", detail: "Designed NLP pipeline with fallback strategies for missing sections; wireframed recruiter dashboard with ranking table + candidate drawer UX pattern" },
      { phase: "03", label: "Development", detail: "Built PDF extraction → NLP segmentation → scoring module → Next.js API routes → React frontend with ranking dashboard and match visualization" },
      { phase: "04", label: "Testing", detail: "Tested with 20+ real CVs across different formats; measured extraction accuracy for skills (92%) and education (88%); iterated on segmentation heuristics" },
      { phase: "05", label: "Improvement", detail: "Added fallback extraction for non-standard section headers; implemented confidence scores to flag low-confidence extractions for manual review" },
    ],

    challenges: [
      {
        challenge: "CVs with multi-column layouts or tables caused PDF.js to extract text in wrong reading order",
        solution: "Implemented a text block sorting algorithm that re-orders extracted text items by Y-coordinate (top-to-bottom) then X-coordinate (left-to-right), reconstructing the logical reading flow",
        lesson: "PDF text extraction is fundamentally a layout problem, not just a text problem. Positional metadata is essential for multi-column documents.",
      },
      {
        challenge: "Section header detection failing on CVs using non-standard labels (e.g. 'Pengalaman Kerja' vs 'Work Experience')",
        solution: "Built a bilingual (English/Indonesian) section header dictionary with 40+ variations per section type; combined with positional heuristics (all-caps, larger font, standalone line) for robust detection",
        lesson: "Domain-specific NLP requires domain-specific labeled data. A pre-trained English parser would have missed ~60% of section boundaries in local CV formats.",
      },
      {
        challenge: "Recruiters found the raw scores (0.73, 0.85) difficult to interpret",
        solution: "Converted scores to percentile ranks and plain-language labels ('Strong Match', 'Good Fit', 'Potential Gap') with color coding; added natural language summary: 'Candidate has 8/10 required skills, missing Docker and Kubernetes'",
        lesson: "AI output interpretability is a product problem as much as a technical one. Numbers alone don't drive decisions — explanations do.",
      },
    ],

    results: {
      summary:
        "The system successfully processes batches of CVs and produces accurate candidate rankings with detailed match explanations, demonstrably reducing initial screening time.",
      outcomes: [
        "Reduced initial CV screening time by ~80% in user testing with recruiters",
        "92% skill extraction accuracy on tested CV corpus",
        "Processes 20 CVs in under 30 seconds",
        "Match breakdown explanations rated as 'clear and actionable' by test recruiters",
      ],
      benefits: [
        "Recruiters focus time on qualified candidates rather than reading every CV",
        "Consistent, objective scoring eliminates unconscious bias in first-pass filtering",
        "Skills gap visibility helps recruiters craft targeted interview questions",
        "System runs entirely in-browser — no candidate data leaves the user's machine",
      ],
    },

    future: [
      { title: "LLM-Powered Extraction", detail: "Replace the heuristic NLP pipeline with a fine-tuned extraction model for more robust handling of unusual CV formats and richer field extraction" },
      { title: "Job Description Parser", detail: "Auto-parse job postings from URLs rather than requiring manual text input, enabling one-click JD import from job boards" },
      { title: "Interview Question Generator", detail: "Based on identified skill gaps per candidate, auto-generate relevant technical interview questions to probe those areas" },
      { title: "Bias Detection Module", detail: "Flag potentially biased language in job descriptions (gender-coded words, exclusionary requirements) before the screening process begins" },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
