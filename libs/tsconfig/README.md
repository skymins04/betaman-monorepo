# @betaman/tsconfig

betaman-monorepo를 위한 표준 typescript config와 유틸리티를 제공하는 패키지입니다.

## 설치

```sh
pnpm add -D typescript @betaman/tsconfig
```

## 사용법

패키지 루트 경로에 tsconfig.json 파일을 생성하고, 패키지 환경에 따라 extends에 적절한 표준 config를 넣어줍니다.  
필요에 따라 적절히 include, exclude, compilerOptions을 수정

### Common Typescript

```json
{
  "extends": "@betaman/tsconfig/common.json"
}
```

### React

```json
{
  "extends": "@betaman/tsconfig/react.json"
}
```

### Next.js

```json
{
  "extends": "@betaman/tsconfig/nextjs.json"
}
```
