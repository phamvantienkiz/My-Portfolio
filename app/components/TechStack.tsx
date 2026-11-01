import React from "react";

const techCosmicMap: Record<
  string,
  { dotColor: string; hoverBorder: string; hoverGlow: string }
> = {
  // DATA & VECTOR KNOWLEDGE
  Datasets: {
    dotColor: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]",
    hoverBorder: "hover:border-cyan-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]",
  },
  "AWS S3": {
    dotColor: "bg-amber-400 shadow-[0_0_6px_#fbbf24]",
    hoverBorder: "hover:border-amber-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(251,191,36,0.25)]",
  },
  Qdrant: {
    dotColor: "bg-rose-500 shadow-[0_0_6px_#f43f5e]",
    hoverBorder: "hover:border-rose-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(244,63,94,0.25)]",
  },
  FAISS: {
    dotColor: "bg-sky-400 shadow-[0_0_6px_#38bdf8]",
    hoverBorder: "hover:border-sky-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]",
  },
  ChromaDB: {
    dotColor: "bg-orange-400 shadow-[0_0_6px_#fb923c]",
    hoverBorder: "hover:border-orange-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(251,146,60,0.25)]",
  },
  Pinecone: {
    dotColor: "bg-teal-400 shadow-[0_0_6px_#2dd4bf]",
    hoverBorder: "hover:border-teal-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(45,212,191,0.25)]",
  },

  // COMPUTER VISION ENGINEERING
  PyTorch: {
    dotColor: "bg-orange-500 shadow-[0_0_6px_#f97316]",
    hoverBorder: "hover:border-orange-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(249,115,22,0.25)]",
  },
  YOLO: {
    dotColor: "bg-blue-400 shadow-[0_0_6px_#60a5fa]",
    hoverBorder: "hover:border-blue-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(96,165,250,0.25)]",
  },
  MMDetection: {
    dotColor: "bg-violet-400 shadow-[0_0_6px_#a78bfa]",
    hoverBorder: "hover:border-violet-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(167,139,250,0.25)]",
  },
  ResNet: {
    dotColor: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]",
    hoverBorder: "hover:border-cyan-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]",
  },
  BiLSTM: {
    dotColor: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
    hoverBorder: "hover:border-emerald-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(52,211,153,0.25)]",
  },
  "U-Net": {
    dotColor: "bg-indigo-400 shadow-[0_0_6px_#818cf8]",
    hoverBorder: "hover:border-indigo-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(129,140,248,0.25)]",
  },
  OpenCV: {
    dotColor: "bg-emerald-500 shadow-[0_0_6px_#10b981]",
    hoverBorder: "hover:border-emerald-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]",
  },
  OCR: {
    dotColor: "bg-fuchsia-400 shadow-[0_0_6px_#e879f9]",
    hoverBorder: "hover:border-fuchsia-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(232,121,249,0.25)]",
  },

  // LLM ENGINEERING
  "Hugging Face": {
    dotColor: "bg-amber-300 shadow-[0_0_6px_#fde047]",
    hoverBorder: "hover:border-amber-300/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(253,224,71,0.25)]",
  },
  "AWS Bedrock": {
    dotColor: "bg-amber-500 shadow-[0_0_6px_#f59e0b]",
    hoverBorder: "hover:border-amber-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]",
  },
  LangChain: {
    dotColor: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
    hoverBorder: "hover:border-emerald-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(52,211,153,0.25)]",
  },
  LangGraph: {
    dotColor: "bg-teal-300 shadow-[0_0_6px_#5eead4]",
    hoverBorder: "hover:border-teal-300/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(94,234,212,0.25)]",
  },
  "Llama.cpp": {
    dotColor: "bg-purple-400 shadow-[0_0_6px_#c084fc]",
    hoverBorder: "hover:border-purple-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(192,132,252,0.25)]",
  },
  RAG: {
    dotColor: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]",
    hoverBorder: "hover:border-cyan-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]",
  },
  "Hybrid Search": {
    dotColor: "bg-sky-400 shadow-[0_0_6px_#38bdf8]",
    hoverBorder: "hover:border-sky-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]",
  },
  Reranking: {
    dotColor: "bg-pink-400 shadow-[0_0_6px_#f472b6]",
    hoverBorder: "hover:border-pink-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(244,114,182,0.25)]",
  },

  // INFERENCE & OPTIMIZATION
  "ONNX Runtime": {
    dotColor: "bg-sky-500 shadow-[0_0_6px_#0ea5e9]",
    hoverBorder: "hover:border-sky-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(14,165,233,0.25)]",
  },
  "CPU/GPU/NPU": {
    dotColor: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
    hoverBorder: "hover:border-emerald-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(52,211,153,0.25)]",
  },
  TensorRT: {
    dotColor: "bg-lime-400 shadow-[0_0_6px_#a3e635]",
    hoverBorder: "hover:border-lime-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(163,230,53,0.25)]",
  },
  "TinyML (ARM Cortex-M/STM32/ESP32)": {
    dotColor: "bg-rose-400 shadow-[0_0_6px_#fb7185]",
    hoverBorder: "hover:border-rose-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(251,113,133,0.25)]",
  },

  // MODEL SERVING & BACKEND RUNTIME
  FastAPI: {
    dotColor: "bg-teal-400 shadow-[0_0_6px_#2dd4bf]",
    hoverBorder: "hover:border-teal-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(45,212,191,0.25)]",
  },
  vLLM: {
    dotColor: "bg-purple-500 shadow-[0_0_6px_#a855f7]",
    hoverBorder: "hover:border-purple-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(168,85,247,0.25)]",
  },
  "Spring Boot": {
    dotColor: "bg-green-400 shadow-[0_0_6px_#4ade80]",
    hoverBorder: "hover:border-green-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(74,222,128,0.25)]",
  },
  ".NET Core": {
    dotColor: "bg-indigo-400 shadow-[0_0_6px_#818cf8]",
    hoverBorder: "hover:border-indigo-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(129,140,248,0.25)]",
  },

  // APPLICATION & DATA INTEGRATION
  "Next.js": {
    dotColor: "bg-slate-200 shadow-[0_0_6px_#e2e8f0]",
    hoverBorder: "hover:border-slate-300/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(226,232,240,0.25)]",
  },
  Flutter: {
    dotColor: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]",
    hoverBorder: "hover:border-cyan-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]",
  },
  PostgreSQL: {
    dotColor: "bg-sky-400 shadow-[0_0_6px_#38bdf8]",
    hoverBorder: "hover:border-sky-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]",
  },
  SQLite: {
    dotColor: "bg-blue-400 shadow-[0_0_6px_#60a5fa]",
    hoverBorder: "hover:border-blue-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(96,165,250,0.25)]",
  },
  MySQL: {
    dotColor: "bg-orange-400 shadow-[0_0_6px_#fb923c]",
    hoverBorder: "hover:border-orange-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(251,146,60,0.25)]",
  },
  Redis: {
    dotColor: "bg-red-500 shadow-[0_0_6px_#ef4444]",
    hoverBorder: "hover:border-red-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(239,68,68,0.25)]",
  },
  MongoDB: {
    dotColor: "bg-emerald-500 shadow-[0_0_6px_#10b981]",
    hoverBorder: "hover:border-emerald-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(16,185,129,0.25)]",
  },
  Firebase: {
    dotColor: "bg-amber-400 shadow-[0_0_6px_#fbbf24]",
    hoverBorder: "hover:border-amber-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(251,191,36,0.25)]",
  },

  // INFRA & PRODUCTION DEPLOYMENT
  Docker: {
    dotColor: "bg-sky-400 shadow-[0_0_6px_#38bdf8]",
    hoverBorder: "hover:border-sky-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(56,189,248,0.25)]",
  },
  Nginx: {
    dotColor: "bg-emerald-400 shadow-[0_0_6px_#34d399]",
    hoverBorder: "hover:border-emerald-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(52,211,153,0.25)]",
  },
  Cloudflare: {
    dotColor: "bg-amber-500 shadow-[0_0_6px_#f59e0b]",
    hoverBorder: "hover:border-amber-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(245,158,11,0.25)]",
  },
  MLOps: {
    dotColor: "bg-purple-400 shadow-[0_0_6px_#c084fc]",
    hoverBorder: "hover:border-purple-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(192,132,252,0.25)]",
  },
  MLflow: {
    dotColor: "bg-blue-400 shadow-[0_0_6px_#60a5fa]",
    hoverBorder: "hover:border-blue-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(96,165,250,0.25)]",
  },
  "Raspberry Pi": {
    dotColor: "bg-rose-500 shadow-[0_0_6px_#f43f5e]",
    hoverBorder: "hover:border-rose-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(244,63,94,0.25)]",
  },

  // SHARED ENGINEERING FOUNDATION
  Python: {
    dotColor: "bg-yellow-300 shadow-[0_0_6px_#fde047]",
    hoverBorder: "hover:border-yellow-300/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(253,224,71,0.25)]",
  },
  "C++": {
    dotColor: "bg-blue-500 shadow-[0_0_6px_#3b82f6]",
    hoverBorder: "hover:border-blue-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(59,130,246,0.25)]",
  },
  Java: {
    dotColor: "bg-orange-500 shadow-[0_0_6px_#f97316]",
    hoverBorder: "hover:border-orange-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(249,115,22,0.25)]",
  },
  "C#": {
    dotColor: "bg-violet-500 shadow-[0_0_6px_#8b5cf6]",
    hoverBorder: "hover:border-violet-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(139,92,246,0.25)]",
  },
  SQL: {
    dotColor: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]",
    hoverBorder: "hover:border-cyan-400/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]",
  },
  Linux: {
    dotColor: "bg-amber-300 shadow-[0_0_6px_#fde047]",
    hoverBorder: "hover:border-amber-300/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(253,224,71,0.25)]",
  },
  Git: {
    dotColor: "bg-red-500 shadow-[0_0_6px_#ef4444]",
    hoverBorder: "hover:border-red-500/40",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(239,68,68,0.25)]",
  },
};

function Arrow(): React.JSX.Element {
  return (
    <div className="flex justify-center my-2 select-none pointer-events-none">
      <svg
        className="w-4 h-4 text-white/30"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}

function TechBadge({ label }: { label: string }): React.JSX.Element {
  const cosmic = techCosmicMap[label] || {
    dotColor: "bg-cyan-400 shadow-[0_0_6px_#22d3ee]",
    hoverBorder: "hover:border-[#1f9acf]/30",
    hoverGlow: "hover:shadow-[0_0_12px_rgba(31,154,207,0.25)]",
  };

  return (
    <span
      className={`group/badge inline-flex items-center gap-2 bg-white/5 hover:bg-white/[0.08] text-white/90 hover:text-white px-3 py-1 rounded-lg text-sm border border-white/10 ${cosmic.hoverBorder} ${cosmic.hoverGlow} transition-all duration-300 select-none cursor-default`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${cosmic.dotColor} group-hover/badge:scale-125 transition-transform duration-300 shrink-0`}
        aria-hidden="true"
      />
      <span>{label}</span>
    </span>
  );
}

export default function TechStack(): React.JSX.Element {
  return (
    <section id="tech" className="py-20 px-4 md:px-6 bg-transparent relative">
      <div className="container mx-auto max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-3xl mx-auto px-4">
            Technologies &amp; tools I leverage to build, optimize, and deploy{" "}
            <span className="text-[#55d5f0] font-medium whitespace-nowrap">
              production AI systems
            </span>
          </p>
        </div>

        {/* Main Outer Container */}
        <div className="bg-slate-950/20 border border-white/5 rounded-2xl p-6 md:p-8 shadow-lg">
          {/* Pipeline Stages */}
          <div className="space-y-1">
            {/* DATA & VECTOR KNOWLEDGE */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                DATA &amp; VECTOR KNOWLEDGE
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "Datasets",
                  "AWS S3",
                  "Qdrant",
                  "FAISS",
                  "ChromaDB",
                  "Pinecone",
                ].map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            <Arrow />

            {/* PARALLEL MODEL DEVELOPMENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* COMPUTER VISION ENGINEERING */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                  COMPUTER VISION ENGINEERING
                </h3>
                <div className="flex flex-wrap gap-2.5 justify-center items-center">
                  {[
                    "PyTorch",
                    "YOLO",
                    "MMDetection",
                    "ResNet",
                    "BiLSTM",
                    "U-Net",
                    "OpenCV",
                    "OCR",
                  ].map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </div>

              {/* LLM ENGINEERING */}
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
                <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                  LLM ENGINEERING
                </h3>
                <div className="flex flex-wrap gap-2.5 justify-center items-center">
                  {[
                    "Hugging Face",
                    "AWS Bedrock",
                    "LangChain",
                    "LangGraph",
                    "Llama.cpp",
                    "RAG",
                    "Hybrid Search",
                    "Reranking",
                  ].map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>
              </div>
            </div>

            <Arrow />

            {/* INFERENCE & OPTIMIZATION */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                INFERENCE &amp; OPTIMIZATION
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "ONNX Runtime",
                  "CPU/GPU/NPU",
                  "TensorRT",
                  "TinyML (ARM Cortex-M/STM32/ESP32)",
                ].map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            <Arrow />

            {/* MODEL SERVING & BACKEND RUNTIME */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                MODEL SERVING &amp; BACKEND RUNTIME
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {["FastAPI", "vLLM", "Spring Boot", ".NET Core"].map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            <Arrow />

            {/* APPLICATION & DATA INTEGRATION */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                APPLICATION &amp; DATA INTEGRATION
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "Next.js",
                  "Flutter",
                  "PostgreSQL",
                  "SQLite",
                  "MySQL",
                  "Redis",
                  "MongoDB",
                  "Firebase",
                ].map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>

            <Arrow />

            {/* INFRA & PRODUCTION DEPLOYMENT */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                INFRA &amp; PRODUCTION DEPLOYMENT
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "Docker",
                  "Nginx",
                  "Cloudflare",
                  "MLOps",
                  "MLflow",
                  "Raspberry Pi",
                ].map((tech) => (
                  <TechBadge key={tech} label={tech} />
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="border-t border-white/10 my-6"></div>

          {/* SHARED ENGINEERING FOUNDATION */}
          <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4">
            <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
              SHARED ENGINEERING FOUNDATION
            </h3>
            <div className="flex flex-wrap gap-2.5 justify-center items-center">
              {["Python", "C++", "Java", "C#", "SQL", "Linux", "Git"].map(
                (tech) => (
                  <TechBadge key={tech} label={tech} />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
