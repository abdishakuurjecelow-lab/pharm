// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       keyframes: {
//         slideIn: {
//           "0%": { opacity: 0, transform: "translateY(8px)" },
//           "100%": { opacity: 1, transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         slideIn: "slideIn .45s ease both",
//       },
//     },
//   },
//   plugins: [],
// };



/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // 🔥 muhiim
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};