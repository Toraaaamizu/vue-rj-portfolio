/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1982C4',
          dark: '#1982C4'
        },
        secondary: {
          light: '#886ab2',
          dark: '#886ab2'
        },
        // ✅ Add this for a softer light background
        'neutral-light': '#f7f9fc',       // soft background
        'primary-light': '#3b82f6',       // soft blue
        'secondary-light': '#9333ea',     // gentle purple
        'text-light': '#1f2937',          // softer black
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        wave: 'wave 2s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      }
    }
  },
  plugins: []
}
