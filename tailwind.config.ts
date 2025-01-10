const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0556A7",
        secondary: "#74AD19",
        primaryLight: "#F0F7FF",
        secondaryLight: "#f7fde8",
        logoBlue: "#0479fb",
        textcolor: "#1A202C",
        textcolorDark: "#111111",
        bgLogoBlue: "#edfaff",
        complementary: "#fb8604",
        'blueb': {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#bbddfc',
          300: '#7ec0fb',
          400: '#3aa1f6',
          500: '#1085e7',
          600: '#0467c5',
          700: '#0556a7',
          800: '#084784',
          900: '#0d3c6d',
          950: '#092648',
        },
        greeng: {
          50: '#f7fde8',
          100: '#edf9ce',
          200: '#daf3a3',
          300: '#c1e96d',
          400: '#a6db40',
          500: '#88c121',
          600: '#75ac19',
          700: '#507516',
          800: '#415d17',
          900: '#384f18',
          950: '#1b2b08',
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'blueb-gradient': 'linear-gradient(to right, #0556a7, #1085e7, #0556a7)',
        'blueb-gradient-opacity-50': 'linear-gradient(to right, rgba(5, 86, 167, 0.9), rgba(16, 133, 231, 0.9), rgba(5, 86, 167, 0.9))',
      },

    },
  },
  plugins: [],
});