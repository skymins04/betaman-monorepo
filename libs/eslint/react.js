module.exports = {
  extends: ["./index.js", "plugin:react-hooks/recommended"],
  plugins: ["react-refresh"],
  rules: {
    "react/display-name": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
