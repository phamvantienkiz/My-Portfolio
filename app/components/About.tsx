import Image from "next/image";

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
      "Computer Vision (Detection & Segmentation)",
      "Generative AI",
      "LLMs & RAG",
      "AI Agents",
    ],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "PyTorch",
      "Tensorflow",
      "LangChain",
      "Hugging Face",
      "YOLO",
      "MMDetection",
      "ONNX Runtime",
      "FastAPI",
      "OpenCV",
      "vLLM",
      "llama.cpp",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "AWS / Azure",
      "FAISS",
      "Pinecone",
      "Raspberry Pi",
      "Postman",
    ],
  },
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6 bg-transparent relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          About &amp; Tech Stack
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Bio & Awards Column */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-cosmic-neon">Who I Am</h3>
              <p className="text-white/80 leading-relaxed text-base">
                I am an AI Engineer driven by the ambition to bridge cutting-edge research with production-grade software solutions. I specialize in end-to-end Machine Learning pipelines, real-time Computer Vision, and highly interactive AI Agent architectures.
              </p>
              <p className="text-white/80 leading-relaxed text-base">
                Currently co-founding <strong className="text-white">AIOS</strong>, a start-up dedicated to automating complex business and e-commerce workflows with next-gen AI.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xl font-semibold text-cosmic-neon">Awards &amp; Recognition</h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">🏆</span>
                  <div>
                    <strong className="text-white">Encouragement Prize</strong> – HDBank Hackathon 2023
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">🏆</span>
                  <div>
                    <strong className="text-white">Third Prize</strong> – Expert Challenge Season 4 (2022)
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/10">
              <h3 className="text-xl font-semibold text-cosmic-neon">Languages</h3>
              <div className="flex gap-3 flex-wrap text-sm text-white/90">
                <span className="bg-cosmic-dark/40 border border-cosmic-blue/20 px-3 py-1 rounded-full">
                  🇻🇳 Vietnamese (Native)
                </span>
                <span className="bg-cosmic-dark/40 border border-cosmic-blue/20 px-3 py-1 rounded-full">
                  🇬🇧 English (B1 Level - VSTEP)
                </span>
              </div>
            </div>
          </div>

          {/* Technical Skills Categories */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => (
              <div 
                key={idx}
                className="bg-slate-950/50 backdrop-blur-sm p-6 rounded-2xl border border-white/5 hover:border-cosmic-blue/30 transition-all duration-300 shadow-lg"
              >
                <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2 flex items-center justify-between">
                  <span>{category.title}</span>
                  <span className="w-2 h-2 rounded-full bg-cosmic-neon animate-pulse"></span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="bg-white/5 hover:bg-cosmic-blue/20 text-white/90 hover:text-white px-3 py-1 rounded-lg text-sm border border-white/10 hover:border-cosmic-blue/30 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

