/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Add custom colors here if needed
      },
      fontFamily: {
        sans: ["Nunito", "system-ui", "sans-serif"],
        serif: ["Lora", "serif"],
        accent: ["Trirong", "serif"],
        ui: ["Montserrat", "sans-serif"],
      },
      spacing: {
        // Add custom spacing values here if needed
      },
    },
  },
  plugins: [],
};
