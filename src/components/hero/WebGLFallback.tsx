import React from 'react';

export const WebGLFallback: React.FC = () => {
  return (
    <div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Subtle radial ambient glow */}
      <div className="absolute w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full bg-gradient-to-tr from-nexus-lime/10 via-nexus-cyan/5 to-transparent blur-3xl opacity-60" />

      {/* Geometric concentric orbital rings */}
      <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-nexus-lime/20 border-dashed animate-spin-slow" />
        <div className="absolute inset-8 rounded-full border border-nexus-cyan/20 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
        <div className="absolute inset-20 rounded-full border border-white/10" />
        
        {/* Core geometric nodes */}
        <div className="w-12 h-12 rounded-lg bg-nexus-surface/80 border border-nexus-lime/40 rotate-45 flex items-center justify-center shadow-glow-lime">
          <div className="w-4 h-4 rounded-full bg-nexus-lime animate-pulse" />
        </div>
      </div>
    </div>
  );
};
