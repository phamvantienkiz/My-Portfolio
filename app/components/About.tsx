import React from "react";
import Link from "next/link";

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6 bg-transparent relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Bio Column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-semibold text-[#55d5f0]">
              Who I Am
            </h3>
            <p className="text-white/80 leading-relaxed text-base">
              I am an AI Engineer driven by the ambition to bridge
              cutting-edge research with production-grade software solutions.
              I specialize in end-to-end Machine Learning pipelines, real-time
              Computer Vision, and highly interactive AI Agent architectures.
            </p>
            <p className="text-white/80 leading-relaxed text-base">
              Currently co-founding{" "}
              <strong className="text-white">AIOS</strong>, a start-up
              dedicated to automating complex business and e-commerce
              workflows with next-gen AI.
            </p>

            {/* Opportunities & Target Roles */}
            <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#55d5f0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#55d5f0]"></span>
                </span>
                <h4 className="text-lg font-semibold text-white">
                  Open for Opportunities
                </h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Link
                  href="#contact"
                  className="group bg-[#011a39]/20 border border-[#1f9acf]/20 hover:border-[#55d5f0] rounded-xl p-4 hover:shadow-2xl hover:shadow-[#1f9acf]/20 transition-all duration-300 shadow-md cursor-pointer select-none"
                >
                  <h5 className="font-bold text-white text-sm mb-1 group-hover:text-[#55d5f0] transition-colors duration-300">
                    AI Engineer
                  </h5>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Core ML/DL &amp; CV Development
                  </p>
                </Link>
                <Link
                  href="#contact"
                  className="group bg-[#011a39]/20 border border-[#1f9acf]/20 hover:border-[#55d5f0] rounded-xl p-4 hover:shadow-2xl hover:shadow-[#1f9acf]/20 transition-all duration-300 shadow-md cursor-pointer select-none"
                >
                  <h5 className="font-bold text-white text-sm mb-1 group-hover:text-[#55d5f0] transition-colors duration-300">
                    AI Fullstack Engineer
                  </h5>
                  <p className="text-white/60 text-xs leading-relaxed">
                    End-to-end AI Product Delivery
                  </p>
                </Link>
                <Link
                  href="#contact"
                  className="group bg-[#011a39]/20 border border-[#1f9acf]/20 hover:border-[#55d5f0] rounded-xl p-4 hover:shadow-2xl hover:shadow-[#1f9acf]/20 transition-all duration-300 shadow-md cursor-pointer select-none"
                >
                  <h5 className="font-bold text-white text-sm mb-1 group-hover:text-[#55d5f0] transition-colors duration-300">
                    AI Solution Architect
                  </h5>
                  <p className="text-white/60 text-xs leading-relaxed">
                    System Design &amp; Digital Transformation
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Info Column (Education & Awards) */}
          <div className="lg:col-span-1 bg-slate-950/15 p-6 rounded-2xl border border-white/5 shadow-lg space-y-8">
            {/* Education */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#55d5f0]">
                Education
              </h3>
              <div className="flex items-start gap-2.5 text-sm text-white/80">
                <span className="text-lg">🎓</span>
                <div>
                  <strong className="text-white block font-semibold text-[14px]">
                    Ho Chi Minh City University of Technology
                  </strong>
                  <span className="text-white/60 text-xs block mt-0.5">
                    2021 – 2025
                  </span>
                  <span className="text-white/80 block mt-1">
                    Engineer of Information Technology
                  </span>
                  <span className="text-white/60 text-xs block">
                    Major: Software Engineering
                  </span>
                  <span className="text-[#55d5f0] text-xs font-semibold block mt-1">
                    GPA: 3.43 / 4.0
                  </span>
                </div>
              </div>
            </div>

            {/* Awards & Recognition */}
            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold text-[#55d5f0]">
                Awards &amp; Recognition
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">🏆</span>
                  <div>
                    <strong className="text-white">Top 10</strong> – AI Cross-border Hackathon 2026
                  </div>
                </li>
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
          </div>
        </div>
      </div>
    </section>
  );
}
