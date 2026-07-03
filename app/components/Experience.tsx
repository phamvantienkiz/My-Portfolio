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
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 flex items-start gap-4"
            >
              <div className="mb-4 flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.company}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div className="flex-1">
                <span className="text-xs text-purple-400 font-semibold tracking-wider block mb-1">
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
                    className="text-purple-400 hover:text-purple-300 font-semibold text-xs tracking-wider transition-colors inline-block"
                  >
                    LEARN MORE →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

