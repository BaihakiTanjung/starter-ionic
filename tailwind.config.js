/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#3880ff",
        secondary: "#3dc2ff",
        tertiary: "#5260ff",
        success: "#2dd36f",
        warning: "#ffc409",
        danger: "#eb445a",
        dark: "#222428",
        medium: "#92949c",
        light: "#f4f5f8",
      },
    },
  },
  plugins: [],
};
