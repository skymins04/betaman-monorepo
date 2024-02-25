const { ignorePatterns } = require(".");

module.exports = {
  extends: ["./index.js", "next/core-web-vitals"],
  ignorePatterns: [".next"],
  rules: {
    "react/display-name": "off",
  },
};
