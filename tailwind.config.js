/** @type {import('tailwindcss').Config} */
import plugin from "@catppuccin/tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin({
      defaultFlavour: "mocha",
    }),
  ],
};
