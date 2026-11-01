"use client";

import React, { useState, useEffect } from "react";

interface CosmicColorConfig {
  activeText: string;
  activeBorder: string;
  activeGlow: string;
  defaultTextGlow: string;
  hoverText: string;
  hoverBorder: string;
  hoverGlow: string;
}

const techCosmicMap: Record<string, CosmicColorConfig> = {
  // DATA & VECTOR KNOWLEDGE
  Datasets: {
    activeText: "text-cyan-400",
    activeBorder: "border-cyan-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(34,211,238,0.35)]",
    defaultTextGlow: "rgba(34,211,238,0.45)",
    hoverText: "group-hover/badge:text-cyan-300",
    hoverBorder: "hover:border-cyan-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]",
  },
  "AWS S3": {
    activeText: "text-amber-400",
    activeBorder: "border-amber-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(251,191,36,0.35)]",
    defaultTextGlow: "rgba(251,191,36,0.45)",
    hoverText: "group-hover/badge:text-amber-300",
    hoverBorder: "hover:border-amber-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(251,191,36,0.4)]",
  },
  Qdrant: {
    activeText: "text-rose-400",
    activeBorder: "border-rose-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(244,63,94,0.35)]",
    defaultTextGlow: "rgba(244,63,94,0.45)",
    hoverText: "group-hover/badge:text-rose-300",
    hoverBorder: "hover:border-rose-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(244,63,94,0.4)]",
  },
  FAISS: {
    activeText: "text-sky-400",
    activeBorder: "border-sky-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(56,189,248,0.35)]",
    defaultTextGlow: "rgba(56,189,248,0.45)",
    hoverText: "group-hover/badge:text-sky-300",
    hoverBorder: "hover:border-sky-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(56,189,248,0.4)]",
  },
  ChromaDB: {
    activeText: "text-orange-400",
    activeBorder: "border-orange-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(251,146,60,0.35)]",
    defaultTextGlow: "rgba(251,146,60,0.45)",
    hoverText: "group-hover/badge:text-orange-300",
    hoverBorder: "hover:border-orange-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(251,146,60,0.4)]",
  },
  Pinecone: {
    activeText: "text-teal-400",
    activeBorder: "border-teal-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(45,212,191,0.35)]",
    defaultTextGlow: "rgba(45,212,191,0.45)",
    hoverText: "group-hover/badge:text-teal-300",
    hoverBorder: "hover:border-teal-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(45,212,191,0.4)]",
  },

  // COMPUTER VISION ENGINEERING
  PyTorch: {
    activeText: "text-orange-400",
    activeBorder: "border-orange-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(249,115,22,0.35)]",
    defaultTextGlow: "rgba(249,115,22,0.45)",
    hoverText: "group-hover/badge:text-orange-300",
    hoverBorder: "hover:border-orange-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(249,115,22,0.4)]",
  },
  YOLO: {
    activeText: "text-blue-400",
    activeBorder: "border-blue-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(96,165,250,0.35)]",
    defaultTextGlow: "rgba(96,165,250,0.45)",
    hoverText: "group-hover/badge:text-blue-300",
    hoverBorder: "hover:border-blue-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(96,165,250,0.4)]",
  },
  MMDetection: {
    activeText: "text-violet-400",
    activeBorder: "border-violet-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(167,139,250,0.35)]",
    defaultTextGlow: "rgba(167,139,250,0.45)",
    hoverText: "group-hover/badge:text-violet-300",
    hoverBorder: "hover:border-violet-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(167,139,250,0.4)]",
  },
  ResNet: {
    activeText: "text-cyan-400",
    activeBorder: "border-cyan-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(34,211,238,0.35)]",
    defaultTextGlow: "rgba(34,211,238,0.45)",
    hoverText: "group-hover/badge:text-cyan-300",
    hoverBorder: "hover:border-cyan-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]",
  },
  BiLSTM: {
    activeText: "text-emerald-400",
    activeBorder: "border-emerald-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(52,211,153,0.35)]",
    defaultTextGlow: "rgba(52,211,153,0.45)",
    hoverText: "group-hover/badge:text-emerald-300",
    hoverBorder: "hover:border-emerald-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(52,211,153,0.4)]",
  },
  "U-Net": {
    activeText: "text-indigo-400",
    activeBorder: "border-indigo-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(129,140,248,0.35)]",
    defaultTextGlow: "rgba(129,140,248,0.45)",
    hoverText: "group-hover/badge:text-indigo-300",
    hoverBorder: "hover:border-indigo-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(129,140,248,0.4)]",
  },
  OpenCV: {
    activeText: "text-emerald-400",
    activeBorder: "border-emerald-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(16,185,129,0.35)]",
    defaultTextGlow: "rgba(16,185,129,0.45)",
    hoverText: "group-hover/badge:text-emerald-300",
    hoverBorder: "hover:border-emerald-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(16,185,129,0.4)]",
  },
  OCR: {
    activeText: "text-fuchsia-400",
    activeBorder: "border-fuchsia-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(232,121,249,0.35)]",
    defaultTextGlow: "rgba(232,121,249,0.45)",
    hoverText: "group-hover/badge:text-fuchsia-300",
    hoverBorder: "hover:border-fuchsia-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(232,121,249,0.4)]",
  },

  // LLM ENGINEERING
  "Hugging Face": {
    activeText: "text-amber-300",
    activeBorder: "border-amber-300/50",
    activeGlow: "shadow-[0_0_14px_rgba(253,224,71,0.35)]",
    defaultTextGlow: "rgba(253,224,71,0.45)",
    hoverText: "group-hover/badge:text-amber-200",
    hoverBorder: "hover:border-amber-300/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(253,224,71,0.4)]",
  },
  "AWS Bedrock": {
    activeText: "text-amber-400",
    activeBorder: "border-amber-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(245,158,11,0.35)]",
    defaultTextGlow: "rgba(245,158,11,0.45)",
    hoverText: "group-hover/badge:text-amber-300",
    hoverBorder: "hover:border-amber-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(245,158,11,0.4)]",
  },
  LangChain: {
    activeText: "text-emerald-400",
    activeBorder: "border-emerald-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(52,211,153,0.35)]",
    defaultTextGlow: "rgba(52,211,153,0.45)",
    hoverText: "group-hover/badge:text-emerald-300",
    hoverBorder: "hover:border-emerald-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(52,211,153,0.4)]",
  },
  LangGraph: {
    activeText: "text-teal-300",
    activeBorder: "border-teal-300/50",
    activeGlow: "shadow-[0_0_14px_rgba(94,234,212,0.35)]",
    defaultTextGlow: "rgba(94,234,212,0.45)",
    hoverText: "group-hover/badge:text-teal-200",
    hoverBorder: "hover:border-teal-300/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(94,234,212,0.4)]",
  },
  "Llama.cpp": {
    activeText: "text-purple-400",
    activeBorder: "border-purple-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(192,132,252,0.35)]",
    defaultTextGlow: "rgba(192,132,252,0.45)",
    hoverText: "group-hover/badge:text-purple-300",
    hoverBorder: "hover:border-purple-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(192,132,252,0.4)]",
  },
  RAG: {
    activeText: "text-cyan-400",
    activeBorder: "border-cyan-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(34,211,238,0.35)]",
    defaultTextGlow: "rgba(34,211,238,0.45)",
    hoverText: "group-hover/badge:text-cyan-300",
    hoverBorder: "hover:border-cyan-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]",
  },
  "Hybrid Search": {
    activeText: "text-sky-400",
    activeBorder: "border-sky-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(56,189,248,0.35)]",
    defaultTextGlow: "rgba(56,189,248,0.45)",
    hoverText: "group-hover/badge:text-sky-300",
    hoverBorder: "hover:border-sky-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(56,189,248,0.4)]",
  },
  Reranking: {
    activeText: "text-pink-400",
    activeBorder: "border-pink-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(244,114,182,0.35)]",
    defaultTextGlow: "rgba(244,114,182,0.45)",
    hoverText: "group-hover/badge:text-pink-300",
    hoverBorder: "hover:border-pink-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(244,114,182,0.4)]",
  },

  // INFERENCE & OPTIMIZATION
  "ONNX Runtime": {
    activeText: "text-sky-400",
    activeBorder: "border-sky-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(14,165,233,0.35)]",
    defaultTextGlow: "rgba(14,165,233,0.45)",
    hoverText: "group-hover/badge:text-sky-300",
    hoverBorder: "hover:border-sky-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(14,165,233,0.4)]",
  },
  "CPU/GPU/NPU": {
    activeText: "text-emerald-400",
    activeBorder: "border-emerald-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(52,211,153,0.35)]",
    defaultTextGlow: "rgba(52,211,153,0.45)",
    hoverText: "group-hover/badge:text-emerald-300",
    hoverBorder: "hover:border-emerald-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(52,211,153,0.4)]",
  },
  TensorRT: {
    activeText: "text-lime-400",
    activeBorder: "border-lime-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(163,230,53,0.35)]",
    defaultTextGlow: "rgba(163,230,53,0.45)",
    hoverText: "group-hover/badge:text-lime-300",
    hoverBorder: "hover:border-lime-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(163,230,53,0.4)]",
  },
  "TinyML (ARM Cortex-M/STM32/ESP32)": {
    activeText: "text-rose-400",
    activeBorder: "border-rose-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(251,113,133,0.35)]",
    defaultTextGlow: "rgba(251,113,133,0.45)",
    hoverText: "group-hover/badge:text-rose-300",
    hoverBorder: "hover:border-rose-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(251,113,133,0.4)]",
  },

  // MODEL SERVING & BACKEND RUNTIME
  FastAPI: {
    activeText: "text-teal-400",
    activeBorder: "border-teal-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(45,212,191,0.35)]",
    defaultTextGlow: "rgba(45,212,191,0.45)",
    hoverText: "group-hover/badge:text-teal-300",
    hoverBorder: "hover:border-teal-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(45,212,191,0.4)]",
  },
  vLLM: {
    activeText: "text-purple-400",
    activeBorder: "border-purple-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(168,85,247,0.35)]",
    defaultTextGlow: "rgba(168,85,247,0.45)",
    hoverText: "group-hover/badge:text-purple-300",
    hoverBorder: "hover:border-purple-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(168,85,247,0.4)]",
  },
  "Spring Boot": {
    activeText: "text-green-400",
    activeBorder: "border-green-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(74,222,128,0.35)]",
    defaultTextGlow: "rgba(74,222,128,0.45)",
    hoverText: "group-hover/badge:text-green-300",
    hoverBorder: "hover:border-green-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(74,222,128,0.4)]",
  },
  ".NET Core": {
    activeText: "text-indigo-400",
    activeBorder: "border-indigo-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(129,140,248,0.35)]",
    defaultTextGlow: "rgba(129,140,248,0.45)",
    hoverText: "group-hover/badge:text-indigo-300",
    hoverBorder: "hover:border-indigo-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(129,140,248,0.4)]",
  },

  // APPLICATION & DATA INTEGRATION
  "Next.js": {
    activeText: "text-slate-100",
    activeBorder: "border-slate-300/50",
    activeGlow: "shadow-[0_0_14px_rgba(226,232,240,0.35)]",
    defaultTextGlow: "rgba(226,232,240,0.45)",
    hoverText: "group-hover/badge:text-white",
    hoverBorder: "hover:border-slate-300/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(226,232,240,0.4)]",
  },
  Flutter: {
    activeText: "text-cyan-400",
    activeBorder: "border-cyan-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(34,211,238,0.35)]",
    defaultTextGlow: "rgba(34,211,238,0.45)",
    hoverText: "group-hover/badge:text-cyan-300",
    hoverBorder: "hover:border-cyan-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]",
  },
  PostgreSQL: {
    activeText: "text-sky-400",
    activeBorder: "border-sky-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(56,189,248,0.35)]",
    defaultTextGlow: "rgba(56,189,248,0.45)",
    hoverText: "group-hover/badge:text-sky-300",
    hoverBorder: "hover:border-sky-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(56,189,248,0.4)]",
  },
  SQLite: {
    activeText: "text-blue-400",
    activeBorder: "border-blue-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(96,165,250,0.35)]",
    defaultTextGlow: "rgba(96,165,250,0.45)",
    hoverText: "group-hover/badge:text-blue-300",
    hoverBorder: "hover:border-blue-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(96,165,250,0.4)]",
  },
  MySQL: {
    activeText: "text-orange-400",
    activeBorder: "border-orange-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(251,146,60,0.35)]",
    defaultTextGlow: "rgba(251,146,60,0.45)",
    hoverText: "group-hover/badge:text-orange-300",
    hoverBorder: "hover:border-orange-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(251,146,60,0.4)]",
  },
  Redis: {
    activeText: "text-red-400",
    activeBorder: "border-red-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(239,68,68,0.35)]",
    defaultTextGlow: "rgba(239,68,68,0.45)",
    hoverText: "group-hover/badge:text-red-300",
    hoverBorder: "hover:border-red-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(239,68,68,0.4)]",
  },
  MongoDB: {
    activeText: "text-emerald-400",
    activeBorder: "border-emerald-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(16,185,129,0.35)]",
    defaultTextGlow: "rgba(16,185,129,0.45)",
    hoverText: "group-hover/badge:text-emerald-300",
    hoverBorder: "hover:border-emerald-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(16,185,129,0.4)]",
  },
  Firebase: {
    activeText: "text-amber-400",
    activeBorder: "border-amber-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(251,191,36,0.35)]",
    defaultTextGlow: "rgba(251,191,36,0.45)",
    hoverText: "group-hover/badge:text-amber-300",
    hoverBorder: "hover:border-amber-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(251,191,36,0.4)]",
  },

  // INFRA & PRODUCTION DEPLOYMENT
  Docker: {
    activeText: "text-sky-400",
    activeBorder: "border-sky-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(56,189,248,0.35)]",
    defaultTextGlow: "rgba(56,189,248,0.45)",
    hoverText: "group-hover/badge:text-sky-300",
    hoverBorder: "hover:border-sky-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(56,189,248,0.4)]",
  },
  Nginx: {
    activeText: "text-emerald-400",
    activeBorder: "border-emerald-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(52,211,153,0.35)]",
    defaultTextGlow: "rgba(52,211,153,0.45)",
    hoverText: "group-hover/badge:text-emerald-300",
    hoverBorder: "hover:border-emerald-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(52,211,153,0.4)]",
  },
  Cloudflare: {
    activeText: "text-amber-400",
    activeBorder: "border-amber-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(245,158,11,0.35)]",
    defaultTextGlow: "rgba(245,158,11,0.45)",
    hoverText: "group-hover/badge:text-amber-300",
    hoverBorder: "hover:border-amber-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(245,158,11,0.4)]",
  },
  MLOps: {
    activeText: "text-purple-400",
    activeBorder: "border-purple-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(192,132,252,0.35)]",
    defaultTextGlow: "rgba(192,132,252,0.45)",
    hoverText: "group-hover/badge:text-purple-300",
    hoverBorder: "hover:border-purple-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(192,132,252,0.4)]",
  },
  MLflow: {
    activeText: "text-blue-400",
    activeBorder: "border-blue-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(96,165,250,0.35)]",
    defaultTextGlow: "rgba(96,165,250,0.45)",
    hoverText: "group-hover/badge:text-blue-300",
    hoverBorder: "hover:border-blue-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(96,165,250,0.4)]",
  },
  "Raspberry Pi": {
    activeText: "text-rose-400",
    activeBorder: "border-rose-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(244,63,94,0.35)]",
    defaultTextGlow: "rgba(244,63,94,0.45)",
    hoverText: "group-hover/badge:text-rose-300",
    hoverBorder: "hover:border-rose-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(244,63,94,0.4)]",
  },

  // SHARED ENGINEERING FOUNDATION
  Python: {
    activeText: "text-yellow-300",
    activeBorder: "border-yellow-300/50",
    activeGlow: "shadow-[0_0_14px_rgba(253,224,71,0.35)]",
    defaultTextGlow: "rgba(253,224,71,0.45)",
    hoverText: "group-hover/badge:text-yellow-200",
    hoverBorder: "hover:border-yellow-300/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(253,224,71,0.4)]",
  },
  "C++": {
    activeText: "text-blue-400",
    activeBorder: "border-blue-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(59,130,246,0.35)]",
    defaultTextGlow: "rgba(59,130,246,0.45)",
    hoverText: "group-hover/badge:text-blue-300",
    hoverBorder: "hover:border-blue-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(59,130,246,0.4)]",
  },
  Java: {
    activeText: "text-orange-400",
    activeBorder: "border-orange-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(249,115,22,0.35)]",
    defaultTextGlow: "rgba(249,115,22,0.45)",
    hoverText: "group-hover/badge:text-orange-300",
    hoverBorder: "hover:border-orange-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(249,115,22,0.4)]",
  },
  "C#": {
    activeText: "text-violet-400",
    activeBorder: "border-violet-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(139,92,246,0.35)]",
    defaultTextGlow: "rgba(139,92,246,0.45)",
    hoverText: "group-hover/badge:text-violet-300",
    hoverBorder: "hover:border-violet-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(139,92,246,0.4)]",
  },
  SQL: {
    activeText: "text-cyan-400",
    activeBorder: "border-cyan-400/50",
    activeGlow: "shadow-[0_0_14px_rgba(34,211,238,0.35)]",
    defaultTextGlow: "rgba(34,211,238,0.45)",
    hoverText: "group-hover/badge:text-cyan-300",
    hoverBorder: "hover:border-cyan-400/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]",
  },
  Linux: {
    activeText: "text-amber-300",
    activeBorder: "border-amber-300/50",
    activeGlow: "shadow-[0_0_14px_rgba(253,224,71,0.35)]",
    defaultTextGlow: "rgba(253,224,71,0.45)",
    hoverText: "group-hover/badge:text-amber-200",
    hoverBorder: "hover:border-amber-300/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(253,224,71,0.4)]",
  },
  Git: {
    activeText: "text-red-400",
    activeBorder: "border-red-500/50",
    activeGlow: "shadow-[0_0_14px_rgba(239,68,68,0.35)]",
    defaultTextGlow: "rgba(239,68,68,0.45)",
    hoverText: "group-hover/badge:text-red-300",
    hoverBorder: "hover:border-red-500/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(239,68,68,0.4)]",
  },
};

const TOTAL_LAYERS = 7;

function Arrow(): React.JSX.Element {
  return (
    <div className="flex justify-center my-2.5 select-none pointer-events-none relative" aria-hidden="true">
      {/* Subtle White Dwarf Radial Aura Halo */}
      <div className="absolute w-7 h-7 rounded-full bg-white/20 blur-md animate-pulse -translate-y-0.5" />
      <svg
        className="w-4 h-4 text-white relative z-10 animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.95)] drop-shadow-[0_0_18px_rgba(226,232,240,0.6)] transition-all duration-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  );
}

function TechBadge({
  label,
  isActive,
}: {
  label: string;
  isActive: boolean;
}): React.JSX.Element {
  const cosmic = techCosmicMap[label] || {
    activeText: "text-cyan-400",
    activeBorder: "border-[#1f9acf]/50",
    activeGlow: "shadow-[0_0_14px_rgba(31,154,207,0.35)]",
    defaultTextGlow: "rgba(31,154,207,0.45)",
    hoverText: "group-hover/badge:text-cyan-300",
    hoverBorder: "hover:border-[#1f9acf]/60",
    hoverGlow: "hover:shadow-[0_0_16px_rgba(31,154,207,0.4)]",
  };

  return (
    <span
      style={{
        textShadow: isActive
          ? `0 0 10px ${cosmic.defaultTextGlow}, 0 0 20px ${cosmic.defaultTextGlow}`
          : `0 0 7px ${cosmic.defaultTextGlow}`,
      }}
      className={`group/badge bg-white/5 hover:bg-white/[0.08] px-3 py-1 rounded-lg text-sm font-medium border transition-all duration-500 select-none cursor-default ${
        isActive
          ? `${cosmic.activeText} ${cosmic.activeBorder} ${cosmic.activeGlow} scale-[1.03]`
          : `text-white/90 border-white/10 ${cosmic.hoverText} ${cosmic.hoverBorder} ${cosmic.hoverGlow}`
      }`}
    >
      {label}
    </span>
  );
}

export default function TechStack(): React.JSX.Element {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  useEffect(() => {
    // Cycles through each layer from top to bottom
    const interval = setInterval(() => {
      setActiveLayer((prev) => (prev + 1) % TOTAL_LAYERS);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech" className="py-20 px-4 md:px-6 bg-transparent relative">
      <div className="container mx-auto max-w-4xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">
            Tech Stack
          </h2>
          <p className="text-sm md:text-base text-white/70 max-w-3xl mx-auto px-4">
            Technologies &amp; tools I leverage to build, optimize, and deploy{" "}
            <span className="text-[#55d5f0] font-medium whitespace-nowrap">
              production AI systems
            </span>
          </p>
        </div>

        {/* Main Outer Container */}
        <div className="bg-slate-950/20 border border-white/5 rounded-2xl p-6 md:p-8 shadow-lg">
          {/* Pipeline Stages */}
          <div className="space-y-1">
            {/* LAYER 0: DATA & VECTOR KNOWLEDGE */}
            <div
              className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
                activeLayer === 0 ? "border-cyan-400/25 bg-white/[0.04]" : "border-white/5"
              }`}
            >
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                DATA &amp; VECTOR KNOWLEDGE
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "Datasets",
                  "AWS S3",
                  "Qdrant",
                  "FAISS",
                  "ChromaDB",
                  "Pinecone",
                ].map((tech) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    isActive={activeLayer === 0}
                  />
                ))}
              </div>
            </div>

            <Arrow />

            {/* LAYER 1: PARALLEL MODEL DEVELOPMENT (CV & LLM) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* COMPUTER VISION ENGINEERING */}
              <div
                className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
                  activeLayer === 1 ? "border-orange-500/25 bg-white/[0.04]" : "border-white/5"
                }`}
              >
                <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                  COMPUTER VISION ENGINEERING
                </h3>
                <div className="flex flex-wrap gap-2.5 justify-center items-center">
                  {[
                    "PyTorch",
                    "YOLO",
                    "MMDetection",
                    "ResNet",
                    "BiLSTM",
                    "U-Net",
                    "OpenCV",
                    "OCR",
                  ].map((tech) => (
                    <TechBadge
                      key={tech}
                      label={tech}
                      isActive={activeLayer === 1}
                    />
                  ))}
                </div>
              </div>

              {/* LLM ENGINEERING */}
              <div
                className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
                  activeLayer === 1 ? "border-purple-500/25 bg-white/[0.04]" : "border-white/5"
                }`}
              >
                <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                  LLM ENGINEERING
                </h3>
                <div className="flex flex-wrap gap-2.5 justify-center items-center">
                  {[
                    "Hugging Face",
                    "AWS Bedrock",
                    "LangChain",
                    "LangGraph",
                    "Llama.cpp",
                    "RAG",
                    "Hybrid Search",
                    "Reranking",
                  ].map((tech) => (
                    <TechBadge
                      key={tech}
                      label={tech}
                      isActive={activeLayer === 1}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Arrow />

            {/* LAYER 2: INFERENCE & OPTIMIZATION */}
            <div
              className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
                activeLayer === 2 ? "border-emerald-400/25 bg-white/[0.04]" : "border-white/5"
              }`}
            >
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                INFERENCE &amp; OPTIMIZATION
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "ONNX Runtime",
                  "CPU/GPU/NPU",
                  "TensorRT",
                  "TinyML (ARM Cortex-M/STM32/ESP32)",
                ].map((tech) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    isActive={activeLayer === 2}
                  />
                ))}
              </div>
            </div>

            <Arrow />

            {/* LAYER 3: MODEL SERVING & BACKEND RUNTIME */}
            <div
              className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
                activeLayer === 3 ? "border-teal-400/25 bg-white/[0.04]" : "border-white/5"
              }`}
            >
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                MODEL SERVING &amp; BACKEND RUNTIME
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {["FastAPI", "vLLM", "Spring Boot", ".NET Core"].map((tech) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    isActive={activeLayer === 3}
                  />
                ))}
              </div>
            </div>

            <Arrow />

            {/* LAYER 4: APPLICATION & DATA INTEGRATION */}
            <div
              className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
                activeLayer === 4 ? "border-blue-400/25 bg-white/[0.04]" : "border-white/5"
              }`}
            >
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                APPLICATION &amp; DATA INTEGRATION
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "Next.js",
                  "Flutter",
                  "PostgreSQL",
                  "SQLite",
                  "MySQL",
                  "Redis",
                  "MongoDB",
                  "Firebase",
                ].map((tech) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    isActive={activeLayer === 4}
                  />
                ))}
              </div>
            </div>

            <Arrow />

            {/* LAYER 5: INFRA & PRODUCTION DEPLOYMENT */}
            <div
              className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
                activeLayer === 5 ? "border-sky-400/25 bg-white/[0.04]" : "border-white/5"
              }`}
            >
              <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
                INFRA &amp; PRODUCTION DEPLOYMENT
              </h3>
              <div className="flex flex-wrap gap-2.5 justify-center items-center">
                {[
                  "Docker",
                  "Nginx",
                  "Cloudflare",
                  "MLOps",
                  "MLflow",
                  "Raspberry Pi",
                ].map((tech) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    isActive={activeLayer === 5}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="border-t border-white/10 my-6"></div>

          {/* LAYER 6: SHARED ENGINEERING FOUNDATION */}
          <div
            className={`bg-white/[0.02] border rounded-xl p-4 transition-all duration-500 ${
              activeLayer === 6 ? "border-yellow-400/25 bg-white/[0.04]" : "border-white/5"
            }`}
          >
            <h3 className="text-xs font-mono font-bold text-white/80 uppercase tracking-wider mb-3 text-center">
              SHARED ENGINEERING FOUNDATION
            </h3>
            <div className="flex flex-wrap gap-2.5 justify-center items-center">
              {["Python", "C++", "Java", "C#", "SQL", "Linux", "Git"].map(
                (tech) => (
                  <TechBadge
                    key={tech}
                    label={tech}
                    isActive={activeLayer === 6}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
