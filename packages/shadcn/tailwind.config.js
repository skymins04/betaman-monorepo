const monorepoDefaultConfig = require("@betaman/tailwind/config");
const shadcnTailwindConfig = require("./tailwind-config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [monorepoDefaultConfig, shadcnTailwindConfig],
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
};
