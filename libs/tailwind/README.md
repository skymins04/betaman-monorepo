# @betaman/tailwind

betaman-monorepo를 위한 표준 tailwind config와 유틸리티를 제공하는 패키지입니다.

## 설치

```sh
pnpm add -D tailwind postcss autoprefixer @betaman/prettier
```

## 사용법

패키지 루트 경로에 tailwind.config.js 파일을 생성하고, 아래 코드를 붙여 넣습니다.  
content 내 경로는 적절히 수정하여 사용합니다.

```js
// tailwind.config.js

const monorepoDefaultConfig = require("@betaman/tailwind/config");

/** @type {import('tailwindcss').Config} */
const config = {
  presets: [monorepoDefaultConfig],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};
export default config;
```
