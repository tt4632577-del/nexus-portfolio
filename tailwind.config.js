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
          bg: '#080808',
          surface: '#111111',
          elevated: '#181818',
          hover: '#202020',
          card: '#111111',
          cardHover: '#181818',
          border: '#292929',
          borderSubtle: 'rgba(255, 255, 255, 0.05)',
          borderHover: 'rgba(215, 25, 32, 0.45)',
          borderAccent: 'rgba(215, 25, 32, 0.45)',
          crimson: '#D71920',
          crimsonHover: '#F12730',
          crimsonBright: '#FF343B',
          crimsonMuted: 'rgba(215, 25, 32, 0.15)',
          text: '#F5F5F5',
          secondary: '#A3A3A3',
          muted: '#707070',
          dim: '#525252',
          // Backwards compatibility aliases mapped to Crimson palette
          lime: '#D71920',
          limeHover: '#F12730',
          limeMuted: 'rgba(215, 25, 32, 0.15)',
          cyan: '#A3A3A3',
          cyanMuted: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-crimson': '0 0 25px -5px rgba(215, 25, 32, 0.35)',
        'glow-crimson-lg': '0 0 35px -5px rgba(215, 25, 32, 0.5)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
}
