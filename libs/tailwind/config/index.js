const scollbarPlugin = require("tailwind-scrollbar");
const animatePlugin = require("tailwindcss-animate");
const screens = require("./screens");
const background = require("./background");
const effects = require("./effects");
const animation = require("./animation");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  prefix: "",
  theme: {
    extend: {
      screens,
      ...animation,
      ...background,
      ...effects,
      container: {},
    },
  },
  plugins: [scollbarPlugin, animatePlugin],
};
