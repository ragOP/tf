module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        teal: { 100: "#9bd3dd", 700: "#00677f", "100_4c": "#9bd3dd4c", "100_3a": "#9bd3dd3a" },
        gray: {
          100: "#f7f7f7",
          200: "#ebebec",
          400: "#b8babc",
          500: "#97999c",
          600: "#797a7d",
          800: "#4a4a4a",
          900: "#222222",
          "100_01": "#f5f5f5",
          "900_cc": "#222222cc",
          "900_b2": "#222222b2",
          "900_7f": "#2222227f",
          "200_66": "#ebebec66",
          "800_7f": "#4a4a4a7f",
          "700_cc": "#54585acc",
          "200_7f": "#ebebec7f",
          "400_33": "#c4c4c433",
          "700_01": "#54585a",
        },
        white: {
          A700: "#ffffff",
          A700_b2: "#ffffffb2",
          A700_19: "#ffffff19",
          A700_33: "#ffffff33",
          A700_87: "#ffffff87",
        },
        indigo: {
          900: "#262262",
          "900_cc": "#262262cc",
          "900_7f": "#2622627f",
          "900_b2": "#262262b2",
          "900_e5": "#262262e5",
        },
        deep_purple: { 500: "#664fa3" },
        red: { 900: "#a6192e", A700: "#e71316" },
        blue_gray: { 100: "#c9cacc" },
        orange: { 800: "#ea7600" },
        black: { 900: "#00081b", "900_01": "#000000", "900_4c": "#0000004c" },
        light_blue: { 500: "#00a3ff" },
        lime: { 700: "#b5bd00", "700_87": "#b5bd0087" },
        yellow: { 700: "#f1b434" },
        gray_800_75: "#4a4a4a75",
        gray_600_4c: "#797a7d4c",
        gray_600_75: "#797a7d75",
      },
      boxShadow: {},
      fontFamily: { helveticaneueltwg: "Helvetica Neue LT W1G" },
      backgroundImage: { gradient: "linear-gradient(to right #5b59594f,#cccccc00)" },
      opacity: { 0.5: 0.5 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
