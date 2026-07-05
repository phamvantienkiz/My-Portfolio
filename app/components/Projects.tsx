"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";

import faceCheckinHome from "@/public/projects/face-checkin-home.png";
import faceCheckinRegister from "@/public/projects/face-checkin-register.png";

interface ProjectMedia {
  type: "image" | "video";
  src: string | StaticImageData; // File path for image, or YouTube embed video ID
  caption: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  media: ProjectMedia[];
  githubLink?: string;
  liveLink?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Intelligent Document Processing (IDP)",
    description:
      "A production-ready system deployed for enterprises to automate document processing workflows. The core functionality includes automatically extracting metadata from scanned Vietnamese PDF documents, classifying records based on extraction results, and validating digital signatures as well as red stamp seals. The system achieves high accuracy and is optimized for parallel processing across diverse hardware configurations.",
    technologies: [
      "FastAPI",
      "Next.js",
      "OCR Pipeline",
      "SLM",
      "YOLO",
      "PostgreSQL",
      "Sglang",
      "llamacpp",
      "Docker",
    ],
    // GitHub source code is private for this corporate project
    media: [
      {
        type: "image",
        src: "/projects/idp-extract-info.png",
        caption:
          "Workspace - Interface for uploading files, running metadata extraction, and visual auditing.",
      },
      {
        type: "image",
        src: "/projects/idp-dashboard.png",
        caption:
          "Management Dashboard - Statistics of processed documents, search filters, and data export.",
      },
      {
        type: "image",
        src: "/projects/idp-setting-config.png",
        caption:
          "Hardware Settings - Configurable device selection (CPU/GPU) for running AI inference on the fly.",
      },
    ],
  },
  {
    id: 2,
    title: "AI Module for Shrimp Hatchery",
    description:
      "A specialized AI module developed for the aquaculture industry, integrating advanced computer vision technologies to automate shrimp larvae counting, body length measurement, total biomass estimation, and early diagnosis of common shrimp diseases. The system is specifically optimized to achieve high frame-rate processing directly on standard CPU hardware.",
    technologies: ["FastAPI", "OpenMMlab - YOLO", "OpenCV", "ONNX"],
    // GitHub source code is private for this project
    media: [
      {
        type: "image",
        src: "/projects/shrimp-counting.jpg",
        caption:
          "Real-time shrimp larvae counting interface with high accuracy.",
      },
      {
        type: "image",
        src: "/projects/shrimp-sizing.jpg",
        caption:
          "Measurement feature for body sizing and automatic shrimp biomass estimation.",
      },
      {
        type: "image",
        src: "/projects/shrimp-diagnosis.jpg",
        caption:
          "Disease diagnosis module for early detection and region localization of common shrimp illnesses.",
      },
    ],
  },
  {
    id: 3,
    title: "Module Face Check-in System",
    description:
      "An independent project focused on developing a face-recognition-based check-in module. Designed to be lightweight and flexible, it supports quick employee registration via 5 face angles, real-time recognition with low latency, and minimal hardware resource usage. Easily integrable into Mebisoft's internal HR management systems.",
    technologies: ["React", "Vite", "FastAPI", "OpenCV", "ONNX", "SQLite"],
    githubLink: "https://github.com/phamvantienkiz",
    media: [
      {
        type: "image",
        src: faceCheckinHome,
        caption: "Main check-in screen for automatic face recognition.",
      },
      {
        type: "image",
        src: faceCheckinRegister,
        caption:
          "Quick registration interface capturing employee face profiles from 5 angles.",
      },
      {
        type: "image",
        src: "/projects/face-checkin-log.png",
        caption:
          "Real-time dashboard monitoring and displaying live check-in logs.",
      },
      {
        type: "image",
        src: "/projects/face-checkin-database.png",
        caption:
          "Management view showing successfully registered employee list and face data.",
      },
      {
        type: "image",
        src: "/projects/face-checkin-system.png",
        caption:
          "System monitoring page showing performance metrics and technical execution logs.",
      },
    ],
  },
  {
    id: 4,
    title: "End-to-End Fall Detection System",
    description:
      "Graduation project in 2025. A comprehensive end-to-end IoT and AI-driven fall detection system spanning hardware and software. At its core, a Deep Learning model analyzes data from a 3-axis accelerometer to detect elderly fall behaviors. Upon detection, an Orange Pi edge device triggers a buzzer alarm while instantly sending push notifications and emergency emails to family members.",
    technologies: [
      "FastAPI",
      "AWS",
      "Orange Pi",
      "Accelerometer Sensor",
      "Deep Learning",
      "Flutter",
      "Firebase",
      "Tensorflow lite",
    ],
    githubLink: "https://github.com/phamvantienkiz",
    media: [
      {
        type: "video",
        src: "lNwxOQlmI-U",
        caption:
          "Video Demonstration - Real-world deployment and operation of the Fall Detection system.",
      },
      {
        type: "image",
        src: "/projects/fall-detection-overview.png",
        caption:
          "System overview showing connectivity and workflow between all integrated components.",
      },
      {
        type: "image",
        src: "/projects/fall-detection-architect.jpg",
        caption:
          "System architecture diagram illustrating IoT hardware, server backend, and mobile client interaction.",
      },
      {
        type: "image",
        src: "/projects/fall-detection-orangepi.png",
        caption:
          "Physical edge device setup showing the Orange Pi connected to the 3-axis accelerometer sensor.",
      },
      {
        type: "image",
        src: "/projects/fall-detection-home-screen.jpg",
        caption:
          "Main dashboard on the mobile application displaying current vital status.",
      },
      {
        type: "image",
        src: "/projects/fall-detection-alert-screen.jpg",
        caption:
          "Emergency alert screen displaying a high-contrast danger state immediately upon fall detection.",
      },
      {
        type: "image",
        src: "/projects/fall-detection-push-noti-screen.jpg",
        caption:
          "Push notification alert displayed instantly on the relative's lock screen.",
      },
      {
        type: "image",
        src: "/projects/fall-detection-log-alert.jpg",
        caption: "Historical logs tracking past fall events and system alerts.",
      },
    ],
  },
];

function ProjectCard({
  project,
  isEven,
}: {
  project: Project;
  isEven: boolean;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMedia = project.media[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? project.media.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === project.media.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <div className="mb-24 last:mb-0">
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <div
          className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}
        >
          <p className="text-[#55d5f0] text-lg lg:text-xl mb-2 font-medium">
            Featured Project
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description Card */}
          <div className="relative z-10 mb-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/10 shadow-lg">
              <p className="text-white/90 text-base lg:text-lg leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Links */}
          {project.githubLink && (
            <div className="flex gap-4">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:text-[#55d5f0] hover:bg-white/10 transition-all duration-200"
                aria-label="Visit GitHub repository"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span className="text-sm font-medium">Source Code</span>
              </a>
            </div>
          )}
        </div>

        {/* Media Content */}
        <div
          className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}
        >
          {/* Main Media Viewport */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950/80 border border-white/10 shadow-2xl flex items-center justify-center group">
            {/* Blurred background for premium look */}
            {activeMedia.type === "image" && (
              <div
                className="absolute inset-0 bg-cover bg-center blur-2xl opacity-15 pointer-events-none scale-110 transition-all duration-500"
                style={{
                  backgroundImage: `url(${
                    typeof activeMedia.src === "string"
                      ? activeMedia.src
                      : activeMedia.src.src
                  })`,
                }}
              />
            )}

            {/* Actual Content View */}
            <div className="relative w-full h-full flex items-center justify-center z-10">
              {activeMedia.type === "video" ? (
                <div className="w-full h-full relative">
                  <iframe
                    src={`https://www.youtube.com/embed/${activeMedia.src}?autoplay=0&rel=0`}
                    title={project.title}
                    className="w-full h-full border-0 absolute inset-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={activeMedia.src}
                    alt={activeMedia.caption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-1.5 transition-all duration-300"
                    priority={project.id === 1}
                  />
                </div>
              )}
            </div>

            {/* Navigation Arrows */}
            {project.media.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 text-white hover:text-[#55d5f0] opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 z-20 shadow-lg cursor-pointer"
                  aria-label="Previous media"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/50 hover:bg-black/80 border border-white/15 text-white hover:text-[#55d5f0] opacity-0 group-hover:opacity-100 focus:opacity-100 transition-all duration-300 z-20 shadow-lg cursor-pointer"
                  aria-label="Next media"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Active Media Caption */}
          <p className="text-white/60 text-xs sm:text-sm mt-3 text-center min-h-[36px] font-medium leading-relaxed italic max-w-xl mx-auto px-4">
            {activeMedia.caption}
          </p>

          {/* Thumbnail Navigation Row */}
          {project.media.length > 1 && (
            <div
              className="flex gap-2.5 mt-3 justify-center items-center overflow-x-auto py-1 max-w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {project.media.map((media, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative flex-shrink-0 w-16 h-10 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "border-[#55d5f0] scale-105 shadow-md shadow-[#55d5f0]/30"
                        : "border-white/10 hover:border-white/30 hover:scale-102 scale-100"
                    }`}
                    aria-label={`Switch to media ${idx + 1}`}
                  >
                    {media.type === "video" ? (
                      <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center relative">
                        <div className="absolute inset-0 bg-red-600/10 flex items-center justify-center">
                          <svg
                            className="w-5 h-5 text-red-500 fill-current"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                        <span className="text-[8px] text-white/90 font-bold z-10 mt-4 tracking-wider">
                          VIDEO
                        </span>
                      </div>
                    ) : (
                      <Image
                        src={media.src}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects(): React.JSX.Element {
  return (
    <section id="lab" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <ProjectCard key={project.id} project={project} isEven={isEven} />
          );
        })}
      </div>
    </section>
  );
}
