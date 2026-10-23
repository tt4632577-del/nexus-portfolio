# NEXUS — Personal Developer Portfolio

> **Tarun Gupta**  
> *Software Developer | Java Developer | AI & Machine Learning Enthusiast*  
> Master of Computer Applications (MCA), Presidency University, Bengaluru (2025–2027)  
> [GitHub](https://github.com/tt4632577-del) • [LinkedIn](https://linkedin.com/in/tarun-rock-a8a748422/) • Bengaluru, India

---

## 1. Project Overview

**NEXUS** is an interactive, cinematic developer portfolio designed and engineered for Tarun Gupta. It combines high-performance 3D graphics, sophisticated micro-animations, an editorial layout, and in-depth engineering case studies suitable for internship applications, Java backend engineering opportunities, and applied AI/ML roles.

### Creative & Visual Direction
- **Atmosphere:** Dark, cinematic, minimalist, technical sophistication.
- **Palette:**
  - Background: Near-black Charcoal (`#08090b`)
  - Elevated Surfaces: `#0e1015` / `#13161d`
  - Primary Accent: Electric Lime (`#ccff00`)
  - Secondary Accent: Cyber Cyan (`#00f0ff`)
  - Typography: Space Grotesk (display), Plus Jakarta Sans (body), JetBrains Mono (metrics & code)
- **3D Hero Scene:** Interactive gyroscopic multi-ring core with a dual-layer wireframe icosahedron and orbiting telemetry nodes built in Three.js and React Three Fiber.
- **Strict Image Fidelity:** Tarun's genuine high-resolution portrait is preserved bit-for-bit at `public/images/tarun-profile.png` with zero AI modification, no facial filters, and natural responsive framing.

---

## 2. Technology Stack

- **Core Framework:** React 18 & Vite
- **Language:** TypeScript (Strict mode enabled)
- **Styling:** Tailwind CSS with custom NEXUS tokens
- **3D Graphics:** Three.js, `@react-three/fiber`, `@react-three/drei`
- **Animation & Transitions:** Framer Motion
- **Iconography:** Lucide React
- **Build Optimization:** Vite Rollup manual vendor chunk splitting

---

## 3. Project Architecture

```
e:/My Portfolio/
├── public/
│   ├── images/
│   │   └── tarun-profile.png       # Authentic portrait of Tarun Gupta
│   └── favicon.svg                 # Custom NEXUS geometric SVG icon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Responsive navigation & mobile drawer
│   │   │   ├── Footer.tsx          # Verified footer links & scroll-to-top
│   │   │   ├── NoiseOverlay.tsx    # Cinematic subtle grain overlay
│   │   │   └── SectionHeader.tsx   # Editorial section headers
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx     # Fullscreen hero presentation
│   │   │   ├── HeroCanvas.tsx      # Three.js interactive gyroscopic core
│   │   │   └── WebGLFallback.tsx   # Accessible SVG fallback
│   │   ├── profile/
│   │   │   ├── AboutSection.tsx    # Engineering narrative & pillars
│   │   │   └── ProfileCard.tsx     # Clean rectangular frame featuring photo
│   │   ├── skills/
│   │   │   └── SkillsSection.tsx   # Filterable technical capabilities grid
│   │   ├── projects/
│   │   │   ├── ProjectsSection.tsx # Top 3 featured + 3 specialized grid
│   │   │   ├── FeaturedProjectCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectDetailModal.tsx # Interactive deep-dive case study modal
│   │   ├── education/
│   │   │   └── EducationSection.tsx# Verified Presidency Univ & VSKU timeline
│   │   ├── philosophy/
│   │   │   └── PhilosophySection.tsx # 4 pragmatic development tenets
│   │   ├── contact/
│   │   │   └── ContactSection.tsx  # Direct channels & email copy action
│   │   └── ui/
│   │       ├── Button.tsx
│   │       └── Badge.tsx
│   ├── data/
│   │   ├── profile.ts              # Verified personal & academic metadata
│   │   ├── projects.ts             # 6 detailed engineering case studies
│   │   ├── skills.ts               # Categorized technical skills
│   │   └── education.ts            # MCA and BCA degree milestones
│   ├── lib/
│   │   └── utils.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

---

## 4. Prerequisites

- **Node.js:** v18.0.0 or higher (v24.x tested)
- **npm:** v9.x or higher (v11.x tested)
- *Note for Windows users:* If PowerShell execution policy restricts scripts, execute commands via `npm.cmd` and `npx.cmd`.

---

## 5. Getting Started

### Installation
```bash
npm install
```
*(On Windows PowerShell if scripts are restricted, use `npm.cmd install`)*

### Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Validate Types & Build Production Bundle
```bash
npm run build
```

### Preview Compiled Production Bundle
```bash
npm run preview
```
Runs a local static preview on [http://localhost:4173](http://localhost:4173).

---

## 6. How to Customize & Maintain

### A. Updating Your Profile Details
Open [`src/data/profile.ts`](src/data/profile.ts) to update:
- Headline or biography introduction
- University or degree enrollment dates
- Location or verified social links
- Real email address (replaces `tarun.gupta.dev[at]email[dot]com`)

### B. Updating or Replacing Your Photograph Safely
1. Save your photograph as a high-resolution PNG file.
2. Name it `tarun-profile.png`.
3. Place it in `public/images/tarun-profile.png`.
4. The website will automatically render the new photo across the Hero capsule badge, About Section, and Profile Card with no distortion (`object-fit: cover; object-position: center 20%`).

### C. Adding or Editing Projects
Open [`src/data/projects.ts`](src/data/projects.ts). Each project follows this typed schema:
```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  subtitle: 'Subtitle / Architecture Focus',
  tagline: 'High-level value proposition',
  description: 'Detailed 2-3 sentence overview',
  featured: true, // true places it in Top 3 Showcase; false in Extended Grid
  status: 'Completed Prototype' | 'In Active Development' | 'Research & Prototype',
  category: 'AI & Systems' | 'Computer Vision' | 'Full Stack' | 'Security',
  technologies: ['Java', 'Spring Boot', 'Python', 'OpenCV'],
  problemStatement: 'What bottleneck does this solve?',
  architectureDetails: 'Detailed technical description',
  keyFeatures: ['Feature 1', 'Feature 2'],
  implementationHighlights: ['Technical achievement 1'],
  challengesAndSolutions: ['Challenge faced & resolved'],
  githubUrl: 'https://github.com/...', // Optional verified link
  liveDemoUrl: 'https://...',         // Optional verified link
}
```

### D. Adding or Modifying Technical Skills
Open [`src/data/skills.ts`](src/data/skills.ts). You can add items to `skillsData`:
```typescript
{ name: 'Docker', category: 'Tools & Platforms', highlight: true }
```

---

## 7. Deployment Instructions

### Deploying to Vercel (Recommended)
This repository includes a pre-configured [`vercel.json`](vercel.json) file with client-side SPA routing and static asset caching.

#### Option 1: Via Vercel Web Dashboard
1. Push your repository to your GitHub account (`https://github.com/tt4632577-del/nexus-portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **"Deploy"**. Your portfolio will be live with full SSL and global CDN distribution within 60 seconds.

#### Option 2: Via Vercel CLI
```bash
npx vercel
```
Follow the interactive prompts to deploy directly from your terminal.

---

## 8. License & Verification Notice

- **Author:** Tarun Gupta
- **Academic Affiliation:** Presidency University, Bengaluru
- **Authenticity Statement:** All skills, degrees, and project architectures represent genuine work and verified educational milestones.
