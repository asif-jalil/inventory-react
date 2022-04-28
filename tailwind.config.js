module.exports = {
  content: ["./src/**/*.js", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          "": "#00C614",
          100: "#EFFBF0",
        },
        success: {
          "": "#44C776",
          100: "#F1FDF6",
          200: "#E8F7EE",
          300: "#82DDA5",
        },
        warning: {
          "": "#F58A28",
          100: "#FDF4ED",
          600: "#F58829",
          700: "#E3920F",
        },
        error: {
          "": "#F52828",
          100: "#FBEFF0",
        },
        neutral: {
          "": "#6B6C72",
          100: "#F9F9FA",
          200: "#F2F2F3",
          300: "#D2D2D5",
          400: "#E5E5E6",
          500: "#B2B2B6",
          700: "#6B6C72",
          800: "#88898E",
          900: "#3E3F48",
        },
      },
    },
  },
  plugins: [],
};
