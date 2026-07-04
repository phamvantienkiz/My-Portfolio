import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  company: string;
  role: string;
  date: string;
  description: string;
  icon: string;
  link?: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    company: "AIOS (Start-up / Co-founder)",
    role: "Co-founder & AI Fullstack",
    date: "May 2026 - Present",
    description: "Co-founded AIOS, providing high-efficiency AI systems. Built PODFlow (Top 10 AI Hackathon 2026) for cross-border e-commerce automation and designed secure high-concurrency document OCR & metadata extraction platforms.",
    icon: "/cards/card-1.png",
    link: "https://github.com/phamvantienkiz",
  },
  {
    id: 2,
    company: "MEBISOFT",
    role: "AI Development Lead",
    date: "Nov 2025 - April 2026",
    description: "Led AI developments. Integrated custom LLM-powered workflow automation agents (Wiki AI) inside MS Teams. Built aquaculture computer vision models (shrimp counting, biomass estimation) and drones/IP camera farm auditing tools.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    company: "ACACY",
    role: "AI Engineer",
    date: "Aug 2025 - Oct 2025",
    description: "Architected data post-labeling pipelines for 100+ SKUs. Fine-tuned YOLOX, YOLO-NAS, and Mask R-CNN models to achieve 94.27% accuracy in monitoring Unilever store shelves, executing extensive accuracy-latency analysis.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    company: "BITTO SOLUTIONS",
    role: "AI Engineer Intern",
    date: "April 2025 - July 2025",
    description: "Architected Bedrock-powered RAG systems. Researched and optimized semantic vs. fixed-size document chunking strategies and prompt instructions to deliver highly accurate context-aware responses.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center">
          Work Experience
        </h2>
        
        <div className="relative">
          {/* Timeline Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-2 bottom-2 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-[#1f9acf] via-[#55d5f0]/50 to-[#011a39]/10 rounded-full" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {experienceCards.map((card, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={card.id}
                  className={`relative flex flex-col md:flex-row items-stretch md:justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 top-6">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border-2 border-[#1f9acf] shadow-[0_0_15px_rgba(31,154,207,0.3)] flex items-center justify-center hover:scale-110 hover:shadow-[#1f9acf]/60 hover:border-[#55d5f0] transition-all duration-300">
                      <Image
                        src={card.icon}
                        alt={card.company}
                        width={28}
                        height={28}
                        className="object-contain rounded"
                        style={{ width: "auto", height: "auto", maxWidth: "24px", maxHeight: "24px" }}
                      />
                    </div>
                  </div>

                  {/* Empty Space for Desktop Alignment */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />

                  {/* Experience Content Card */}
                  <div
                    className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[calc(50%-2rem)] bg-gradient-to-r from-[#011a39]/60 via-slate-950/80 to-slate-950 border-l-3 border-[#1f9acf] backdrop-blur-sm rounded-xl p-6 hover:shadow-2xl hover:shadow-[#1f9acf]/20 transition-all duration-300 ${
                      isEven
                        ? "md:bg-gradient-to-l md:border-l-0 md:border-r-3"
                        : ""
                    }`}
                  >
                    <div className="flex-1">
                      <span className="text-xs text-[#55d5f0] font-semibold tracking-wider block mb-1">
                        {card.date}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-0.5">
                        {card.company}
                      </h3>
                      <h4 className="text-sm font-medium text-white/80 mb-3">
                        {card.role}
                      </h4>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">
                        {card.description}
                      </p>
                      {card.link && (
                        <Link
                          href={card.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#55d5f0] hover:text-[#c7e7f4] font-semibold text-xs tracking-wider transition-colors inline-block"
                        >
                          LEARN MORE →
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

