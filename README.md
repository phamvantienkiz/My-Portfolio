# Pham Van Tien - Professional Portfolio Website

A premium, interactive, and highly optimized developer portfolio website built using **Next.js 16 (App Router)**, **React 19**, **Three.js (React Three Fiber)**, and **Tailwind CSS 4**.

---

## 🚀 Live Demo & Deployment

This project is fully ready and optimized for seamless deployment on **Vercel** with static HTML generation, cached assets, and zero serverless invocation overhead.

---

## 🛠️ Technology Stack

* **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack for lightning-fast builds)
* **Core**: [React 19](https://react.dev/)
* **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) & PostCSS
* **3D Graphics**: [Three.js](https://threejs.org/) via `@react-three/fiber` & `@react-three/drei` (runs client-side on GPU)
* **Type System**: [TypeScript](https://www.typescriptlang.org/)
* **Analytics**: [@vercel/analytics](https://vercel.com/analytics) (pre-integrated)
* **Linting & Code Quality**: ESLint 9 & TypeScript strict type checking

---

## ✨ Key Features

1. **3D Particle Background**: A smooth, hardware-accelerated starfield canvas rendered using GPU-accelerated WebGL.
2. **Typewriter Effect**: An optimized, error-free typewriter effect for titles in the hero section.
3. **Interactive Project Showcase**: A custom media viewer that supports both high-res image carousels and embedded YouTube video walkthroughs.
4. **Performance & Cost Optimization**: 
   * Fully static page generation (`○ Static` route) for maximum CDN caching and $0 Vercel execution cost.
   * Auto-optimized images (`next/image`) converting large assets (like avatars and diagrams) to WebP format on the fly.
5. **SEO Optimized**: Complete metadata configuration including Twitter cards, OpenGraph, canonical URLs, robots instructions, and responsive viewport settings.

---

## 💻 Local Development

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Commands

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. **Run Code Quality Check (ESLint)**:
   ```bash
   npm run lint
   ```

4. **Build Production Version**:
   ```bash
   npm run build
   ```
   This compiles the project, performs TypeScript validation, and generates optimized static files.

---

## 🎨 Design References & Inspiration

This portfolio derives visual, layout, and structural inspiration from the following open-source projects:
* **Ibrahim Memon's Figma Portfolio**: [ibrahimmemonn/Figma-Portfolio](https://github.com/ibrahimmemonn/Figma-Portfolio)
* **Sanidhyy's Space Portfolio**: [sanidhyy/space-portfolio](https://github.com/sanidhyy/space-portfolio)

We highly appreciate and thank the creators for their outstanding design concepts.

---

## 📄 License

This project is licensed under a **Custom License with Visual Identity Restrictions**.
* **You are allowed** to use, study, adapt, and modify the source code for your personal or commercial projects.
* **You are strictly prohibited** from copying, cloning, or reproducing the visual layout, color scheme, assets, and branding exactly. If you use this code for your own portfolio, please customize the layout and visual identity to reflect your own unique profile.

For more details, please read the full [LICENSE](file:///E:/MyProject/My-Portfolio/LICENSE) file.
