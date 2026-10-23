/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nexus: {
          bg: '#08090b',
          surface: '#0e1015',
          card: '#13161d',
          cardHover: '#181c25',
          border: 'rgba(255, 255, 255, 0.08)',
          borderSubtle: 'rgba(255, 255, 255, 0.04)',
          borderHover: 'rgba(204, 255, 0, 0.35)',
          lime: '#ccff00',
          limeHover: '#bbf438',
          limeMuted: 'rgba(204, 255, 0, 0.12)',
          cyan: '#00f0ff',
          cyanMuted: 'rgba(0, 240, 255, 0.12)',
          text: '#f5f6f8',
          muted: '#94a3b8',
          dim: '#64748b',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-lime': '0 0 30px -5px rgba(204, 255, 0, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(0, 240, 255, 0.25)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
