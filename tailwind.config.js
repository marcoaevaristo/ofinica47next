/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F5EEE1",
        espresso: "#241611",
        copper: "#C1591A",
        brass: "#B8873B",
        ember: "#A22C1F",
        ink: "#2B1C13",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"],
        gauge: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
