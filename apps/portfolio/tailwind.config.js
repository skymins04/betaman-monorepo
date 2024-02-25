const monorepoDefaultConfig = require("@betaman/tailwind/config");
const shadcnTailwindCofnig = require("@betaman/shadcn/tailwind-config");

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [monorepoDefaultConfig, shadcnTailwindCofnig],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/shadcn/src/**/*.{js,ts,jsx,tsx}",
  ],
};
export default config;
