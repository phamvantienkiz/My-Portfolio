"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "AI Engineer",
    "AI Fullstack Developer",
    "AI Solutions Architect",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-12 px-6"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ filter: "hue-rotate(-75deg) saturate(1.3) brightness(1.1)" }}
        className="rotate-180 absolute top-[-340px] left-0 w-full h-[820px] object-cover -z-20 pointer-events-none"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto order-1 lg:order-2">
            <div className="relative">
              <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] rounded-full overflow-hidden border-4 border-[#1f9acf]/30 shadow-[0_0_50px_rgba(85,213,240,0.4)] hover:border-[#55d5f0]/60 hover:shadow-[0_0_60px_rgba(85,213,240,0.6)] transition-all duration-500">
                <Image
                  src="/assets/avata.png"
                  alt="Pham Van Tien - AI Engineer & Co-founder of AIOS"
                  fill
                  sizes="(max-width: 640px) 220px, 260px"
                  className="object-cover"
                  priority
                />
              </div>
              {/* Mobile: Hello text positioned below the avatar image */}
              <div className="lg:hidden mt-6 flex justify-center">
                <div className="relative inline-block bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm">
                  <div className="relative">
                    <p className="text-white text-base md:text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-[#55d5f0] font-semibold">
                        Pham Van Tien
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <div className="relative inline-block bg-white/5 border border-white/10 px-5 py-2.5 rounded-xl backdrop-blur-sm">
                <p className="text-white text-base md:text-lg whitespace-nowrap">
                  Hello! I Am{" "}
                  <span className="text-[#55d5f0] font-semibold">
                    Pham Van Tien
                  </span>
                </p>
              </div>
            </div>
            <div>
              <p className="text-lg text-white/80"> An AI Engineer who </p>
              <h1 className="text-3xl tracking-tight lg:text-5xl font-semibold text-white leading-tight">
                Breathes life
                <br /> into{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle"
                    width={150}
                    height={150}
                    className="absolute mt-2"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <span className="bg-gradient-to-r from-[#1f9acf] via-[#55d5f0] to-[#1f9acf] bg-clip-text text-transparent">
                    data
                  </span>
                </span>
                ...
              </h1>
              <p className="text-xs text-white/60 mt-2">
                Because intelligence is not just about prediction, it is about
                building value.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-2xl sm:text-3xl text-white font-bold min-h-[40px]">
                I&apos;m a {displayedText}
                <span className="animate-pulse">|</span>
              </p>
              <div className="text-sm lg:text-base text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <span>Currently, I&apos;m a Co-founder &amp; AI Engineer at</span>
                <span className="flex items-center gap-2">
                  <span className="text-[#55d5f0] font-bold bg-[#55d5f0]/10 px-2 py-0.5 rounded border border-[#55d5f0]/30">
                    AIOS
                  </span>
                </span>
                <span>based in Ho Chi Minh City, Vietnam 🇻🇳</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
