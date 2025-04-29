/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        tropical: {
          "primary": "#FF6B6B",        // Coral pink
          "secondary": "#4ECDC4",      // Turquoise
          "accent": "#FFE66D",         // Sunny yellow
          "neutral": "#2B4162",        // Deep ocean blue
          "base-100": "#FFFFFF",       // White sand
          "base-200": "#F7F9FC",       // Light sand
          "base-300": "#E8ECF2",       // Wet sand
          "info": "#7CC6FE",           // Sky blue
          "success": "#96E6B3",        // Palm green
          "warning": "#FFB347",        // Mango orange
          "error": "#FF6B6B",          // Coral red

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-text-case": "uppercase",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",
        },
      },
      "light",
    ],
  },
} 