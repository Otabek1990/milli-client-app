/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          Default: "#000",
          topBlack: "#171515",
        },
        white: {
          Default: "#FFFFFF",
          whites: "#FAFAFA",
        },
        gray: {
          lightGray: "#999999",
          lightlyGray: "#ECECEC",
          borderGray: "#CCCCCC",
          backgroundBox: "#D9D9D9",
        },
        orange: {
          oranges: "#F0A719",
        },
        red: {
          300: "#00B709",
          400: "#1CC427",
          danger: "#F81D1D",
        },
        blue: {
          labtopBack: "#93B9D2",
          darkBlue: "#0F58E5",
        },
        green: {
          Default: "#00B709",
          lightGreen: "#6EFF75",
        },
      },
      fontSize: {
        xs: ["12px", { lineHeight: "120%" }],
        sm: ["14px", { lineHeight: "120%" }],
        base: ["16px", { lineHeight: "150%" }],
        lg: ["18px", { lineHeight: "120%" }],
        "2xl": ["24px", { lineHeight: "120%" }],
        "4xl": ["36px", { lineHeight: "120%" }],
        "5xl": ["48px", { lineHeight: "120%" }],
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      boxShadow: {
        shadowBox: "0px 0px 20px 3px rgba(0, 0, 0, 0.15)",
        shadowBoxTwo: "0px 4px 14px 3px rgba(0, 0, 0, 0.08)",
      },

      backgroundImage: {
        banner: "url('/src/Assets/Images/bannerbackground.png')",
      },
      borderRadius: {
        square: "3rem",
      },
    },
  },
  plugins: [],
};
