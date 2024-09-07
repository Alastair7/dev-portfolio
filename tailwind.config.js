/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        raising_black: "#1E1E24",
        jet: "#444140",
        seashell: "#F7EBE8",
        atomic_tangerine: "#FFA987",
        imperial_red: "#E54B4B",
      },
    },
  },
  plugins: [],
};
