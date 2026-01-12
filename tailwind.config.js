/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        accent: "#d5416e",

        pink: {
          soft: "#fff7f8",
        },

        gray: {
          light: "#f7f7f7",
          muted: "#737373",
        },

        success: "#0c7c00",
        danger: "#a60003",
        "neutral-warm": {
          50: "#f3eee0",
        },
        emerald: {
          500: "#039869",
        },
      },

      fontFamily: {
        heading: ["Lora", "serif"],
        body: ["Nunito", "sans-serif"],
        accent: ["Trirong", "serif"],
        ui: ["Montserrat", "sans-serif"],
      },

      fontSize: {
        xs: ["12px", { lineHeight: "1.3", letterSpacing: ".6px" }],
        sm: ["14px", { lineHeight: "1.3", letterSpacing: ".6px" }],
        base: ["16px", { lineHeight: "1.3", letterSpacing: ".6px" }],
        lg: ["18px", { lineHeight: "1.3", letterSpacing: ".6px" }],

        h3: [
          "24px",
          { lineHeight: "1.4", fontWeight: "400", letterSpacing: ".6px" },
        ],
        h2: [
          "28px",
          { lineHeight: "1.4", fontWeight: "400", letterSpacing: ".6px" },
        ],
        h1: [
          "32px",
          { lineHeight: "1.3", fontWeight: "400", letterSpacing: ".6px" },
        ],
      },

      borderRadius: {
        lg: "8px",
        xl: "12px",
        pill: "32px",
      },
    },
  },
  plugins: [],
};
