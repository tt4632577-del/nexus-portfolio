import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Terminal,
  Shield,
  Sparkles,
  Gauge,
  Play,
  Pause,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';

export const HeroSection: React.FC = () => {
  const [carAngle, setCarAngle] = useState<'perspective' | 'frontal'>('perspective');
  const [isCruising, setIsCruising] = useState<boolean>(true);
  const [headlightsOn, setHeadlightsOn] = useState<boolean>(true);
  const shouldReduceMotion = useReducedMotion();

  // Mouse coordinate values for gentle parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Damped spring physics for smooth, luxurious response
  const springConfig = { damping: 24, stiffness: 100, mass: 0.8 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3.5, -3.5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4.5, 4.5]), springConfig);
  const ambientGlowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);
  const ambientGlowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Staggered motion variants for typographic entrance
  const itemVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.7,
        delay: shouldReduceMotion ? 0 : customDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-nexus-bg overflow-hidden scroll-mt-24"
      aria-label="Tarun Gupta - Automotive Inspired Hero Presentation"
    >
      {/* Background Ambient Crimson Glows with subtle interactive parallax */}
      <motion.div
        style={{
          x: shouldReduceMotion ? 0 : ambientGlowX,
          y: shouldReduceMotion ? 0 : ambientGlowY,
        }}
        className="absolute top-1/4 right-0 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full bg-nexus-crimson/10 blur-[130px] pointer-events-none transition-transform duration-300"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-1/4 w-[350px] h-[350px] rounded-full bg-nexus-crimsonMuted blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Hero Container with Asymmetric Desktop Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        
        {/* Left Column: Typographic Developer Identity (Desktop: 7 cols) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Top Decorative Label & Identity Capsule */}
          <motion.div
            custom={0.1}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-3 mb-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-surface border border-nexus-border text-xs font-mono text-nexus-secondary shadow-card">
              <span className="w-2 h-2 rounded-full bg-nexus-crimson animate-pulse" />
              <span className="text-nexus-crimsonBright font-semibold tracking-wider uppercase">
                ENGINEERED WITH PRECISION.
              </span>
            </div>

            {/* Profile Thumbnail Capsule (Original verified photo) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nexus-surface border border-nexus-border text-xs font-mono text-nexus-muted">
              <div className="w-5 h-5 rounded-full overflow-hidden border border-nexus-crimson/60 shrink-0">
                <img
                  src={profileData.avatarPath}
                  alt="Portrait of Tarun Gupta"
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <span className="text-nexus-text font-medium">Tarun Gupta</span>
              <span className="text-nexus-dim">|</span>
              <span className="hidden sm:inline">Presidency Univ MCA</span>
            </div>
          </motion.div>

          {/* Role Header */}
          <motion.div
            custom={0.2}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-nexus-crimson uppercase mb-2 flex items-center gap-2"
          >
            <Terminal className="w-4 h-4 text-nexus-crimson" />
            <span>SOFTWARE DEVELOPER</span>
          </motion.div>

          {/* Primary Name Display */}
          <motion.h1
            custom={0.3}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="font-display font-extrabold text-3xl min-[400px]:text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white mb-4 leading-[1.05]"
          >
            TARUN <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nexus-crimsonBright via-white to-nexus-secondary">
              GUPTA
            </span>
          </motion.h1>

          {/* Specializations Tagline */}
          <motion.div
            custom={0.4}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-2 text-xs min-[400px]:text-sm sm:text-base md:text-lg font-mono font-medium text-nexus-text/90 mb-4 tracking-wide"
          >
            <span className="text-nexus-crimsonBright font-semibold">JAVA</span>
            <span className="text-nexus-dim">•</span>
            <span className="text-white font-semibold">AI</span>
            <span className="text-nexus-dim">•</span>
            <span className="text-nexus-secondary font-semibold">MACHINE LEARNING</span>
          </motion.div>

          {/* Subtle Decorative Line Animation */}
          <motion.div
            custom={0.45}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="w-full max-w-md h-[1px] bg-gradient-to-r from-nexus-crimson/60 via-nexus-border to-transparent mb-6 relative overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-nexus-crimsonBright to-transparent animate-line-pulse" />
          </motion.div>

          {/* Authentic Developer Introduction */}
          <motion.p
            custom={0.5}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="font-sans text-base sm:text-lg text-nexus-secondary max-w-xl mb-8 leading-relaxed"
          >
            "Building intelligent software and practical applications with precision, creativity, and purpose."
          </motion.p>

          {/* Action Buttons with Micro-interactions */}
          <motion.div
            custom={0.6}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
          >
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto font-mono tracking-wider uppercase text-xs sm:text-sm px-6 py-3.5 transition-transform hover:-translate-y-0.5 active:translate-y-0"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              EXPLORE MY WORK
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto font-mono tracking-wider uppercase text-xs sm:text-sm px-6 py-3.5 transition-transform hover:-translate-y-0.5 active:translate-y-0"
              icon={<ArrowUpRight className="w-4 h-4 text-nexus-crimson" />}
            >
              LET'S CONNECT
            </Button>
          </motion.div>

          {/* Direct Verified Links & Telemetry Footer */}
          <motion.div
            custom={0.7}
            variants={itemVariant}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-4 pt-4 border-t border-nexus-border/80 w-full text-xs font-mono text-nexus-muted"
          >
            <a
              href={profileData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-nexus-crimsonBright transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-nexus-crimson"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <span className="text-nexus-border">•</span>
            <a
              href={profileData.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-nexus-crimsonBright transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-nexus-crimson"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span className="text-nexus-border">•</span>
            <span className="flex items-center gap-1.5 text-nexus-secondary">
              <MapPin className="w-3.5 h-3.5 text-nexus-crimson" />
              Bengaluru, India
            </span>
          </motion.div>
        </div>

        {/* Right Column: Authentic Hindustan Contessa Moving Showcase (Desktop: 5 cols) */}
        <div className="lg:col-span-5 relative flex flex-col items-center justify-center w-full [perspective:1200px]">
          
          {/* Parallax-Enabled Automotive Display Card */}
          <motion.div
            style={{
              rotateX: shouldReduceMotion ? 0 : rotateX,
              rotateY: shouldReduceMotion ? 0 : rotateY,
              transformStyle: 'preserve-3d',
            }}
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.1,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full rounded-3xl bg-nexus-surface border border-nexus-border p-3 sm:p-4 shadow-2xl overflow-hidden group hover:border-nexus-borderAccent transition-colors duration-500"
          >
            {/* Top Frame Telemetry & Interactive Angle Switcher */}
            <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2 text-[11px] font-mono border-b border-nexus-border/60 mb-3">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isCruising ? 'bg-nexus-crimson animate-ping' : 'bg-nexus-dim'}`} />
                <span className="text-white font-semibold uppercase tracking-wider">HINDUSTAN CONTESSA</span>
                <span className="text-nexus-dim hidden sm:inline">•</span>
                <span className="text-nexus-crimsonBright text-[10px] hidden sm:inline font-bold">1984–2002</span>
              </div>

              {/* View Angle Switcher Tabs */}
              <div className="flex items-center gap-1 bg-nexus-elevated/80 p-0.5 rounded-lg border border-nexus-border">
                <button
                  type="button"
                  onClick={() => setCarAngle('perspective')}
                  className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono transition-colors ${
                    carAngle === 'perspective'
                      ? 'bg-nexus-crimson text-white font-bold shadow'
                      : 'text-nexus-muted hover:text-white'
                  }`}
                  aria-label="Show 3/4 perspective view"
                >
                  3/4 Angle
                </button>
                <button
                  type="button"
                  onClick={() => setCarAngle('frontal')}
                  className={`px-2 py-0.5 rounded text-[10px] uppercase font-mono transition-colors ${
                    carAngle === 'frontal'
                      ? 'bg-nexus-crimson text-white font-bold shadow'
                      : 'text-nexus-muted hover:text-white'
                  }`}
                  aria-label="Show frontal view"
                >
                  Front Stance
                </button>
              </div>
            </div>

            {/* Cinematic Image Frame with Suspension Motion & Speed Road Streaks */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
              
              {/* Dynamic Suspension & Idle Drift Container */}
              <div
                className={`relative w-full h-full ${
                  isCruising && !shouldReduceMotion ? 'animate-car-cruise' : ''
                }`}
              >
                <picture>
                  <source
                    srcSet={
                      carAngle === 'perspective'
                        ? '/images/hindustan-contessa-hero.webp'
                        : '/images/hindustan-contessa-front.webp'
                    }
                    type="image/webp"
                  />
                  <img
                    src={
                      carAngle === 'perspective'
                        ? '/images/hindustan-contessa-hero.jpg'
                        : '/images/hindustan-contessa-front.jpg'
                    }
                    alt="Authentic Hindustan Contessa Classic Indian Muscle Sedan"
                    className="w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                </picture>

                {/* Night Cruise Headlight Beams (Active when headlights/cruising on) */}
                {headlightsOn && carAngle === 'perspective' && (
                  <div
                    className="absolute pointer-events-none animate-headlight-pulse"
                    style={{
                      top: '46%',
                      right: '2%',
                      width: '42%',
                      height: '35%',
                      background: 'radial-gradient(ellipse at 15% 30%, rgba(255, 230, 180, 0.45) 0%, rgba(215, 25, 32, 0.25) 35%, transparent 70%)',
                      filter: 'blur(12px)',
                      transform: 'rotate(-4deg)',
                    }}
                    aria-hidden="true"
                  />
                )}

                {headlightsOn && carAngle === 'frontal' && (
                  <div
                    className="absolute pointer-events-none animate-headlight-pulse"
                    style={{
                      bottom: '10%',
                      left: '8%',
                      right: '8%',
                      height: '40%',
                      background: 'radial-gradient(ellipse at 50% 20%, rgba(255, 230, 180, 0.35) 0%, rgba(215, 25, 32, 0.2) 40%, transparent 70%)',
                      filter: 'blur(16px)',
                    }}
                    aria-hidden="true"
                  />
                )}
              </div>

              {/* Dynamic Speed Streaks / Moving Asphalt Horizon */}
              {isCruising && !shouldReduceMotion && (
                <div className="absolute bottom-2 inset-x-0 h-10 pointer-events-none overflow-hidden" aria-hidden="true">
                  <div className="absolute bottom-1 w-24 h-[1.5px] bg-gradient-to-r from-transparent via-nexus-crimsonBright to-transparent animate-road-streak" />
                  <div className="absolute bottom-3 w-36 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-road-streak-fast" style={{ animationDelay: '0.8s' }} />
                  <div className="absolute bottom-5 w-20 h-[1.5px] bg-gradient-to-r from-transparent via-nexus-crimson to-transparent animate-road-streak" style={{ animationDelay: '1.4s' }} />
                </div>
              )}

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-nexus-bg/80 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />

              {/* Crimson Light Sweep Sheen */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl" aria-hidden="true">
                <div className="w-[140%] h-full bg-gradient-to-r from-transparent via-nexus-crimson/20 to-transparent animate-crimson-sweep" />
              </div>

              {/* Moving Status Badge Overlay (Glassmorphism) */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-nexus-text">
                <span className={`w-1.5 h-1.5 rounded-full ${isCruising ? 'bg-emerald-400 animate-pulse' : 'bg-nexus-dim'}`} />
                <span>{isCruising ? 'CRUISE MODE: ACTIVE' : 'IDLE: STANDBY'}</span>
              </div>
            </div>

            {/* Bottom Technical Specifications Tag & Live Cruise Controls */}
            <div className="mt-3 pt-3 border-t border-nexus-border/60 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-nexus-muted px-2">
              <span className="flex items-center gap-1.5 text-nexus-secondary">
                <Shield className="w-3.5 h-3.5 text-nexus-crimson" />
                <span>Payana Heritage • Karnataka KA-04</span>
              </span>

              {/* Interactive Motion / Headlight Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsCruising(!isCruising)}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border transition-all ${
                    isCruising
                      ? 'border-nexus-crimson/60 bg-nexus-crimson/15 text-nexus-crimsonBright font-semibold'
                      : 'border-nexus-border bg-nexus-elevated text-nexus-muted hover:text-white'
                  }`}
                  title="Toggle Cruise Suspension & Road Motion"
                >
                  {isCruising ? <Pause className="w-2.5 h-2.5" /> : <Play className="w-2.5 h-2.5" />}
                  <span>{isCruising ? 'Motion On' : 'Motion Off'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setHeadlightsOn(!headlightsOn)}
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono border transition-all ${
                    headlightsOn
                      ? 'border-amber-500/60 bg-amber-500/10 text-amber-300 font-semibold'
                      : 'border-nexus-border bg-nexus-elevated text-nexus-muted hover:text-white'
                  }`}
                  title="Toggle Headlight Beams"
                >
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>{headlightsOn ? 'Lights On' : 'Lights Off'}</span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Editorial Floating Accent Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.45,
            }}
            className="mt-4 px-4 py-1.5 rounded-full bg-nexus-elevated border border-nexus-border text-[11px] font-mono text-nexus-secondary flex items-center gap-2 shadow-card"
          >
            <Gauge className="w-3.5 h-3.5 text-nexus-crimson" />
            <span>Classic Indian Muscle • Precision Software Architecture</span>
          </motion.div>
        </div>
      </div>

      {/* Minimal Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.9, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer text-nexus-dim hover:text-nexus-crimson transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-nexus-crimson rounded-full p-2"
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-nexus-muted group-hover:text-nexus-crimson transition-colors">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-nexus-border group-hover:border-nexus-crimson flex items-start justify-center p-1 transition-colors">
          <motion.div
            animate={shouldReduceMotion ? { y: 0 } : { y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-nexus-crimson"
          />
        </div>
      </motion.a>
    </section>
  );
};
