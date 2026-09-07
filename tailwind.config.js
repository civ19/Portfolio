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
        space: {
          950: '#02040a',
          900: '#04070f',
          850: '#070b14',
          800: '#0b1020',
          700: '#172238',
          600: '#23324d',
        },
        cyanGlow: {
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
        },
        tealAccent: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        }
      },
      boxShadow: {
        'glow-teal': '0 0 35px -5px rgba(20, 184, 166, 0.45)',
        'glow-cyan': '0 0 45px -8px rgba(6, 182, 212, 0.55)',
        'glow-dock': '0 0 25px -4px rgba(20, 184, 166, 0.35)',
        'glow-card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 20px -5px rgba(20, 184, 166, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
