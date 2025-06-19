/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-cyan': 'hsl(180, 100%, 50%)',
        'neon-magenta': 'hsl(300, 100%, 50%)',
        'neon-green': 'hsl(120, 100%, 50%)',
        'neon-orange': 'hsl(30, 100%, 50%)',
        'terminal-bg': 'hsl(240, 50%, 3%)',
        'terminal-dark': 'hsl(0, 0%, 0%)',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursor-blink 1s infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
        'typing': 'typing 2s steps(30, end), cursor-blink 0.5s step-end infinite',
      },
      keyframes: {
        'cursor-blink': {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        },
        'glow-pulse': {
          '0%': { 
            textShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            transform: 'scale(1)',
          },
          '100%': { 
            textShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
            transform: 'scale(1.02)',
          },
        },
        'typing': {
          from: { width: '0' },
          to: { width: '100%' },
        },
      },
    },
  },
  plugins: [],
} 