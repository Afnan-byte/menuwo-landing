/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          dark: '#010F1E', // Very Dark Blue
          green: '#196F01', // Updated Green Theme
          navy: '#0E2E50', // New Navy for Cards
          light: '#F8FAFC', // Very light gray for subtle backgrounds
          muted: '#64748B' // Slate for secondary text
        }
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      animation: {
        'scan': 'scan 2.5s ease-in-out infinite alternate',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(150px)' },
        }
      }
    },
  },
  plugins: [],
}
