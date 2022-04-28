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
      backgroundImage: {
        check: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")`,
        select: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
      },
    },
  },
  plugins: [],
};
