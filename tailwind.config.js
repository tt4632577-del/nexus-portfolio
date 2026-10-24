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
        // Semantic Design System Tokens (Recruiter-Ready)
        canvas: '#09090B',
        surface: {
          DEFAULT: '#111114',
          elevated: '#18181C',
          subtle: '#1F1F24',
          hover: '#1D1D22',
        },
        border: {
          DEFAULT: '#27272A',
          subtle: 'rgba(255, 255, 255, 0.07)',
          active: '#3F3F46',
          accent: 'rgba(220, 38, 38, 0.35)',
        },
        accent: {
          DEFAULT: '#DC2626',
          hover: '#EF4444',
          subtle: 'rgba(220, 38, 38, 0.12)',
          border: 'rgba(220, 38, 38, 0.3)',
          text: '#F87171', // High contrast WCAG AA compliant on #09090B
        },
        content: {
          primary: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#71717A',
        },
        // Backwards compatibility mappings for smooth phase migration
        nexus: {
          bg: '#09090B',
          surface: '#111114',
          elevated: '#18181C',
          hover: '#1D1D22',
          card: '#111114',
          cardHover: '#18181C',
          border: '#27272A',
          borderSubtle: 'rgba(255, 255, 255, 0.07)',
          borderHover: '#3F3F46',
          borderAccent: 'rgba(220, 38, 38, 0.35)',
          crimson: '#DC2626',
          crimsonHover: '#EF4444',
          crimsonBright: '#F87171',
          crimsonMuted: 'rgba(220, 38, 38, 0.12)',
          text: '#FAFAFA',
          secondary: '#A1A1AA',
          muted: '#8E8E93',
          dim: '#71717A',
          lime: '#DC2626',
          limeHover: '#EF4444',
          limeMuted: 'rgba(220, 38, 38, 0.12)',
          cyan: '#A1A1AA',
          cyanMuted: 'rgba(255, 255, 255, 0.08)',
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        card: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
        elevated: '0 10px 30px -4px rgba(0, 0, 0, 0.6)',
        'glow-crimson': '0 0 25px -5px rgba(220, 38, 38, 0.25)',
        'card-hover': '0 12px 30px -10px rgba(0, 0, 0, 0.8), 0 0 24px -4px rgba(220, 38, 38, 0.16)',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { opacity: '0.12', transform: 'scale(1)' },
          '50%': { opacity: '0.22', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 8s ease-in-out infinite',
      },
      transitionTimingFunction: {
        subtle: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
