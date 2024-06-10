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
        logoBlue: "#0479fb",
        textcolor: "#1A202C",
        bgLogoBlue: "#edfaff",
        complementary: "#fb8604",
        'blueb': {
          '50': '#edfaff',
          '100': '#d6f2ff',
          '200': '#b7e9ff',
          '300': '#85deff',
          '400': '#4bc9ff',
          '500': '#22abff',
          '600': '#0a8dff',
          '700': '#0479fb',
          '800': '#0a5dc3',
          '900': '#0f5099',
          '950': '#0f315c',
        },

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
});