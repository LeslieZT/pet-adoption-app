const flowbite = require("flowbite-react/tailwind");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        "royal-purple": "#3F2D7E", // royal-purple Púrpura profundo, tono real 
        "lavender-purple": "#A374CC", // Lavanda claro
        "pastel-lilac": "#C7C7FD", // Lila pastel, tono real
        "pastel-lilac-light": "#F4F4FF", // Lila pastel claro
        "vibrant-pink": "#DA74CC", // Rosa vibrante, tono real
        "aqua-blue": "#45A1CC", // Azul acuático, tono real
        // TEXT COLORS
        "soft-gray-blue": "#8C8CC0", // Azul gris claro
        "cool-blue": "#6F7BB6", // Azul frío, tono real
        "deep-charcoal": "#141415", // Carbón oscuro
        "slate-gray": "#313957", // Gris ardoso
      },
      textShadow: {
        DEFAULT: "0px 4px 4px var(--tw-shadow-color)",
        sm: "0 2px 4px var(--tw-shadow-color)",
        md: "0 4px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    flowbite.content(),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
};
