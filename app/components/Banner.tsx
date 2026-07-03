"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = ["AI Engineer", "AI Fullstack Developer", "Co-founder of AIOS"];
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
      className="min-h-screen flex items-center justify-center pt-32 pb-12 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto order-1 lg:order-2">
            <div className="relative">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden mb-6 flex justify-center">
                <div className="relative inline-block bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Hello! I Am{" "}
                      <span className="text-purple-400 font-semibold">Pham Van Tien</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full overflow-hidden border-4 border-purple-500/30 shadow-[0_0_50px_rgba(168,85,247,0.4)] hover:border-purple-500/60 hover:shadow-[0_0_60px_rgba(168,85,247,0.6)] transition-all duration-500">
                <Image
                  src="/assets/avata.png"
                  alt="Pham Van Tien - AI Engineer & Co-founder of AIOS"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute"
                style={{ left: "-100px", top: "-50px", width: "auto", height: "auto" }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Hello! I Am{" "}
                  <span className="text-purple-400 font-semibold">Pham Van Tien</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div>
              <p className="text-2xl text-white/80"> An AI Engineer who </p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Breathes life
                <br /> into{" "}
                <span className="relative inline-block">
                  <Image src="/assets/circle.png" alt="Circle" width={200} height={200} className="absolute mt-2" style={{ width: "auto", height: "auto" }} />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    data
                  </span>
                </span>
                ...
              </h1>
              <p className="text-md text-white/60 mt-4">
                Because intelligence is not just about prediction, it is about building value.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-16 text-center lg:text-left">
          <p className="text-4xl sm:text-5xl text-white font-bold min-h-[60px]">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <div className="text-lg lg:text-xl text-white/90 tracking-wide flex flex-wrap items-center justify-center lg:justify-start gap-2">
            <span>Currently, I&apos;m a Co-founder &amp; AI Engineer at</span>
            <span className="flex items-center gap-2">
              <span className="text-purple-400 font-bold bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/30">AIOS</span>
            </span>
            <span>based in Ho Chi Minh City, Vietnam 🇻🇳</span>
          </div>
          <p className="text-lg text-white/80 max-w-2xl mt-6 mx-auto lg:mx-0 leading-relaxed">
            AI Engineer with hands-on experience in delivering production-ready Computer Vision, AIoT, and AI Agent products.
            Skilled in end-to-end machine learning engineering, performance optimization, and integrating diverse AI technologies into scalable systems to solve complex real-world challenges.
          </p>
        </div>
      </div>
    </section>
  );
}
