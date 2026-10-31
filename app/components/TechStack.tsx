import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
  colSpan?: string;
  dotColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++", "Java", "C#", "SQL"],
    dotColor: "bg-cyan-400 shadow-[0_0_8px_#22d3ee]",
  },
  {
    title: "Computer Vision",
    skills: [
      "PyTorch",
      "YOLO",
      "MMDetection",
      "ResNet",
      "BiLSTM",
      "U-Net",
      "OpenCV",
      "OCR",
    ],
    dotColor: "bg-emerald-400 shadow-[0_0_8px_#34d399]",
  },
  {
    title: "LLM",
    skills: [
      "LangChain",
      "LangGraph",
      "vLLM",
      "Llama.cpp",
      "Hugging Face",
      "AWS Bedrock",
      "Hybrid Search",
      "Reranking",
    ],
    dotColor: "bg-purple-400 shadow-[0_0_8px_#c084fc]",
  },
  {
    title: "Vector DB",
    skills: ["Qdrant", "FAISS", "ChromaDB", "Pinecone"],
    dotColor: "bg-amber-400 shadow-[0_0_8px_#fbbf24]",
  },
  {
    title: "Inference & Optimization",
    skills: [
      "ONNX Runtime",
      "CPU/NPU",
      "TensorRT",
      "TinyML (ARM Cortex-M/STM32, ESP32)",
    ],
    dotColor: "bg-rose-500 shadow-[0_0_8px_#f43f5e]",
  },
  {
    title: "Backend",
    skills: [
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Firebase",
      "Flutter",
      "Spring Boot",
      ".NET Core",
    ],
    dotColor: "bg-blue-400 shadow-[0_0_8px_#60a5fa]",
  },
  {
    title: "Infra & Tools",
    skills: [
      "Linux",
      "Docker",
      "MLOps",
      "MLflow",
      "AWS",
      "Git",
      "Raspberry Pi",
      "Antigravity",
      "Claude Code",
    ],
    colSpan: "md:col-span-2 lg:col-span-3",
    dotColor: "bg-orange-400 shadow-[0_0_8px_#fb923c]",
  },
];

export default function TechStack(): React.JSX.Element {
  return (
    <section id="tech" className="py-20 px-6 bg-transparent relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className={`bg-slate-950/20 p-6 rounded-2xl border border-white/5 hover:border-[#1f9acf]/30 transition-all duration-300 shadow-lg ${category.colSpan || ""}`}
            >
              <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center justify-between">
                <span>{category.title}</span>
                <span
                  className={`w-2 h-2 rounded-full animate-pulse ${category.dotColor}`}
                ></span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="bg-white/5 hover:bg-[#1f9acf]/20 text-white/90 hover:text-white px-3 py-1 rounded-lg text-sm border border-white/10 hover:border-[#1f9acf]/30 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
