import React from "react";

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
  return (
    <span className="bg-white/5 hover:bg-[#1f9acf]/20 text-white/90 hover:text-white px-3 py-1 rounded-lg text-sm border border-white/10 hover:border-[#1f9acf]/30 transition-all duration-200">
      {label}
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