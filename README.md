# NEXUS — CRIMSON EDITION
### Premium Automotive-Inspired Personal Developer Portfolio

> **Tarun Gupta**  
> *Software Developer | Java Developer | AI & Machine Learning Enthusiast*  
> Master of Computer Applications (MCA), Presidency University, Bengaluru (2025–2027)  
> Bachelor of Computer Applications (BCA), Vijayanagara Sri Krishnadevaraya University, Ballari (2022–2025)  
> 📧 [tt4632577@gmail.com](mailto:tt4632577@gmail.com) • 🌐 [LinkedIn](https://linkedin.com/in/tarun-rock-a8a748422/) • 💻 [GitHub](https://github.com/tt4632577-del) • 📍 Bengaluru, India

---

## 1. Project Overview

**NEXUS — Crimson Edition** is an interactive, cinematic developer portfolio engineered for Tarun Gupta. It merges a premium automotive visual identity inspired by the classic **Hindustan Contessa** with modern software engineering principles, featuring deep-charcoal surfaces, restrained crimson accents, verified credentials, and deep-dive technical case studies.

The application is tailored for software development opportunities, Java backend engineering roles, applied artificial intelligence / machine learning positions, and professional networking.

### Creative & Visual Direction
- **Theme:** Automotive-inspired technical sophistication, deep black and charcoal surfaces, restrained crimson telemetry.
- **Palette:**
  - Background: `#080808`
  - Surface: `#111111`
  - Elevated Surface: `#181818`
  - Hover Surface: `#202020`
  - Primary Crimson: `#D71920`
  - Hover Crimson: `#F12730`
  - Bright Crimson: `#FF343B`
  - Primary Text: `#F5F5F5`
  - Secondary Text: `#A3A3A3`
  - Border: `#292929`
  - Accent Border: `rgba(215, 25, 32, 0.45)`
- **Cinematic Homepage:** Asymmetric desktop composition pairing an editorial typographic presentation with a framed showcase card of the classic Hindustan Contessa.
- **Authentic Photograph Preservation:** Tarun's genuine high-resolution portrait is preserved unmodified at `public/images/tarun-profile.png` (SHA256: `B1AA0C7F0C02F13AB18A01C3779A799B11039150B974A39318B94140D4DB976F`), presented in natural responsive aspect ratios.
- **Micro-Animations & Parallax:** Damped spring 3D perspective mouse tilt, diagonal crimson light sweep, subtle entrance sequencing, and full `prefers-reduced-motion` accessibility compliance.

---

## 2. Technology Stack

- **Core Framework:** React 18 & Vite
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Vanilla Tailwind CSS with custom NEXUS Crimson design tokens
- **Animations & Micro-interactions:** Framer Motion (with `useReducedMotion`, `useSpring`, `useMotionValue`)
- **3D & Graphics Capabilities:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Iconography:** Lucide React
- **Build Optimization:** Vite Rollup manual vendor chunk splitting (`vendor-react`, `vendor-motion`, `vendor-icons`, `vendor-three`)

---

## 3. Project Architecture

```
e:/My Portfolio/
├── public/
│   ├── images/
│   │   ├── tarun-profile.png              # Authentic portrait of Tarun Gupta
│   │   ├── hindustan-contessa-hero.webp   # Dedicated Contessa hero asset
│   │   └── hindustan-contessa-hero.svg    # Vector fallback asset
│   └── favicon.svg                        # Custom Crimson NEXUS SVG icon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx                 # Dark glass navbar with mobile drawer
│   │   │   ├── Footer.tsx                 # Crimson branding, direct email & socials
│   │   │   ├── NoiseOverlay.tsx           # Subtle cinematic grain overlay
│   │   │   └── SectionHeader.tsx          # Viewport-triggered animated headers
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx            # Asymmetric Contessa cinematic presentation
│   │   │   ├── HeroCanvas.tsx             # Preserved 3D interactive infrastructure
│   │   │   └── WebGLFallback.tsx          # Accessible orbital rings fallback
│   │   ├── profile/
│   │   │   ├── AboutSection.tsx           # Engineering narrative & core pillars
│   │   │   └── ProfileCard.tsx            # Frame showcasing unmodified portrait
│   │   ├── skills/
│   │   │   └── SkillsSection.tsx          # Categorized technical capabilities grid
│   │   ├── projects/
│   │   │   ├── ProjectsSection.tsx        # Top 3 featured showcase + extended grid
│   │   │   ├── FeaturedProjectCard.tsx    # Prominent featured project card
│   │   │   ├── ProjectCard.tsx            # Compact project card
│   │   │   └── ProjectDetailModal.tsx     # In-depth architectural case study modal
│   │   ├── education/
│   │   │   └── EducationSection.tsx       # Timeline of verified degree milestones
│   │   ├── philosophy/
│   │   │   └── PhilosophySection.tsx      # 4 pragmatic development tenets
│   │   ├── contact/
│   │   │   └── ContactSection.tsx         # Working Gmail mailto & copy experience
│   │   └── ui/
│   │       ├── Button.tsx                 # Reusable accessible button component
│   │       └── Badge.tsx                  # Status and technology pills
│   ├── data/
│   │   ├── profile.ts                     # Verified credentials & contact info
│   │   ├── projects.ts                    # 6 verified engineering case studies
│   │   ├── skills.ts                      # Categorized technical skills
│   │   └── education.ts                   # MCA & BCA degree milestones
│   ├── lib/
│   │   └── utils.ts                       # ClassName merge utilities
│   ├── types/
│   │   └── index.ts                       # Strict TypeScript type definitions
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                          # Global tokens, scrollbar, keyframes
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json                            # Vercel SPA routing and caching rules
```

---

## 4. Featured Engineering Projects

All 6 projects represent verified architectures and practical implementations:

1. **AURA — AI Desktop Voice Assistant**
   - *Stack:* Python, Faster-Whisper, Ollama (Local LLaMA 3), OpenCV, NumPy, Edge-TTS
   - *Focus:* Offline speech processing, local neural inference, camera vision control, and low-latency interaction.
2. **IBVAP — AI Video Analytics Platform for Border Surveillance**
   - *Stack:* Python, YOLOv8, ByteTrack, PaddleOCR, OpenCV, Torch
   - *Focus:* Perimeter monitoring, real-time intrusion detection, optical character recognition for vehicle checkpoints.
3. **Sahayak AI — Voice-First Public Service Assistant**
   - *Stack:* Java, Spring Boot, React, Vite, Tailwind CSS, Local LLM/STT
   - *Focus:* Multilingual voice-driven citizen assistant simplifying access to government welfare schemes and citizen documentation.
4. **SURAKSHA — Women's Safety & Emergency Response Platform**
   - *Stack:* Dart, Flutter, Firebase, Google Maps API
   - *Focus:* Real-time SOS triggers, rapid location broadcast, SMS alerts to emergency contacts and emergency services.
5. **Cloud-Native Intrusion Detection System**
   - *Stack:* Java, Spring Boot, ONNX Runtime, Vaadin, H2, Spring Security
   - *Focus:* Lightweight enterprise anomaly detection evaluating network packet telemetry with embedded ONNX neural models.
6. **Image-to-Sketch Converter**
   - *Stack:* Python, OpenCV, NumPy, Matplotlib
   - *Focus:* Edge detection algorithms, Gaussian blur filtering, color inversion, and artistic sketch transformation.

---

## 5. Prerequisites & Environment

- **Node.js:** v18.0.0 or higher (v24.x tested and supported)
- **npm:** v9.x or higher (v11.x tested and supported)
- *Windows Note:* If PowerShell script execution policies restrict scripts, invoke commands using `npm.cmd` and `npx.cmd`.

---

## 6. Installation & Local Development

### 1. Clone the repository
```bash
git clone https://github.com/tt4632577-del/nexus-portfolio.git
cd nexus-portfolio
```

### 2. Install dependencies
```bash
npm install
```
*(On Windows PowerShell: `npm.cmd install`)*

### 3. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
```
Compiles TypeScript and outputs the production bundle to `dist/`.

### 5. Preview production build locally
```bash
npm run preview
```
Serves the `dist/` directory at [http://localhost:4173](http://localhost:4173).

---

## 7. How to Update Content & Assets

### A. Updating Contact Information
Open [`src/data/profile.ts`](src/data/profile.ts). Update `email`, `linkedinUrl`, `githubUrl`, or location.

### B. Updating Profile Photograph
1. Save your photograph as a high-resolution PNG file.
2. Place it at `public/images/tarun-profile.png`.
3. The application will render it across the Hero capsule badge, About Section, and Profile Card with natural aspect ratio preservation.

### C. Updating the Hindustan Contessa Photograph
1. Save an authentic, dark-colored Hindustan Contessa photo in WebP format.
2. Place it at `public/images/hindustan-contessa-hero.webp`.
3. The Hero showcase card will render the new photograph immediately.

---

## 8. Deployment to Vercel (Free Hobby Plan)

This repository is pre-configured for free zero-configuration hosting on **Vercel** with client-side SPA routing via [`vercel.json`](vercel.json).

### Method A: Via Vercel Web Dashboard (Recommended)
1. Push this repository to your GitHub account (`https://github.com/tt4632577-del/nexus-portfolio`).
2. Visit [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New..."** > **"Project"**.
4. Select your `nexus-portfolio` repository and click **"Import"**.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**. The site will be live with a free `*.vercel.app` domain and automatic HTTPS SSL certificate.

### Method B: Via Vercel CLI
```bash
npx vercel
```
Follow the CLI prompts to deploy directly from your local terminal.

---

## 9. License & Verification Notice

- **Author:** Tarun Gupta
- **Academic Affiliation:** Presidency University, Bengaluru (MCA) & VSKU Ballari (BCA)
- **Authenticity Statement:** All skills, academic milestones, and engineering architectures represent verified implementations.
