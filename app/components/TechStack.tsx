import React from "react";

interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["Python (Expert)", "C++", "SQL", "Java", "C#"],
  },
  {
    title: "AI & Machine Learning",
    skills: [
      "LLM",
      "VLM",
      "RAG",
      "AI Agents",
      "Detection",
      "Segmentation",
      "Tracking",
      "OCR",
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "PyTorch",
      "Tensorflow",
      "Hugging Face",
      "LangChain",
      "LangGraph",
      "vLLM",
      "llama.cpp",
      "ONNX",
      "YOLO",
      "OpenCV",
      "OpenMMLab",
      "FastAPI",
      "Spring Boot",
      ".Net Core",
      "Next.js",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Linux",
      "Docker",
      "AWS",
      "MLflow",
      "FAISS",
      "ChromaDB",
      "Pinecone",
      "PostgreSQL",
      "SQLite",
      "MySQL",
      "Redis",
      "Firebase",
      "Raspberry Pi",
      "Postman",
    ],
  },
];

export default function TechStack(): React.JSX.Element {
  return (
    <section id="tech" className="py-20 px-6 bg-transparent relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-slate-950/20 p-6 rounded-2xl border border-white/5 hover:border-[#1f9acf]/30 transition-all duration-300 shadow-lg"
            >
              <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="w-2 h-2 rounded-full bg-[#55d5f0] animate-pulse"></span>
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
