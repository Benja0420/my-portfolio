/** @type {import('tailwindcss').Config} */
import plugin from "@catppuccin/tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Tipografía fluida: 320px -> escritorio sin saltos bruscos
        "fluid-hero": ["clamp(2.25rem, 1rem + 6vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "fluid-title": ["clamp(2rem, 1rem + 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "fluid-lead": ["clamp(1rem, 0.9rem + 0.5vw, 1.125rem)", { lineHeight: "1.75" }],
      },
    },
  },
  plugins: [
    plugin({
      defaultFlavour: "mocha",
    }),
  ],
};
