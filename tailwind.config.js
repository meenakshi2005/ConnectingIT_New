/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Intuit Blue
        primary: "#365EBF", // Intuit Cerulean Blue
        // Accent Colors
        secondary: "#F59E0B", // Warm accent (yellow)
        neutralLight: "#F3F4F6", // Light background gray
        neutralDark: "#111827", // Dark card background

        // Status Colors
        success: "#10B981", // Success state
        successLight: "#6EE7B7", // Light success state
        error: "#EF4444", // Error state
        info: "#3B82F6", // Info state

        // Additional Colors
        cardDark: "#111827", // Dark card background
        green: "#22C55E", // Green accent
      },
      backgroundImage: {
        gradient1: "linear-gradient(90deg, #365EBF, #9333EA)", // Professional blue gradient
        gradient2: "linear-gradient(90deg, #F59E0B, #FBBF24)", // Warm accent gradient
        primaryGradient: "linear-gradient(90deg, #365EBF, #9333EA)", // Corporate/premium feel
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"], // Modern sans-serif font
        serif: ["Merriweather", "serif"], // Serif font for contrast
      },
    },
  },
  plugins: [],
};
