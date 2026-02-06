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
        industrial: {
          page: "#0C0C0C",
          sidebar: "#080808",
          card: "#0A0A0A",
          elevated: "#141414",
          subtle: "#1A1A1A",
          green: "#00FF88",
          orange: "#FF8800",
          red: "#FF4444",
          border: "#2f2f2f",
        }
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
