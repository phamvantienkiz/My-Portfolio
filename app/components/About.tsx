import React from "react";

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
            <h3 className="text-2xl font-semibold text-[#55d5f0]">Who I Am</h3>
            <p className="text-white/80 leading-relaxed text-base">
              I am an AI Engineer driven by the ambition to bridge cutting-edge
              research with production-grade software solutions. I specialize in
              end-to-end Machine Learning pipelines, real-time Computer Vision,
              and highly interactive AI Agent architectures.
            </p>
            <p className="text-white/80 leading-relaxed text-base">
              Currently co-founding <strong className="text-white">AIOS</strong>
              , a start-up dedicated to automating complex business and
              e-commerce workflows with next-gen AI.
            </p>
          </div>

          {/* Info Column (Awards & Languages) */}
          <div className="lg:col-span-1 space-y-8 bg-slate-950/40 backdrop-blur-sm p-6 rounded-2xl border border-white/5 shadow-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#55d5f0]">
                Awards &amp; Recognition
              </h3>
              <ul className="space-y-3 text-sm text-white/80">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">🏆</span>
                  <div>
                    <strong className="text-white">Encouragement Prize</strong>{" "}
                    – HDBank Hackathon 2023
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-500">🏆</span>
                  <div>
                    <strong className="text-white">Third Prize</strong> – Expert
                    Challenge Season 4 (2022)
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold text-[#55d5f0]">
                Languages
              </h3>
              <div className="flex gap-2 flex-wrap text-sm text-white/90">
                <span className="bg-[#011a39]/40 border border-[#1f9acf]/20 px-3 py-1 rounded-full">
                  Vietnamese (Native)
                </span>
                <span className="bg-[#011a39]/40 border border-[#1f9acf]/20 px-3 py-1 rounded-full">
                  English (B1 Level)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
