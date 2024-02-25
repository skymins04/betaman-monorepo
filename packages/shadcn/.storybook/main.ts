import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  docs: {
    autodocs: "tag",
  },
};

export default config;
