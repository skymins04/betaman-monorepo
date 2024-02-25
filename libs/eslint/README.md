# eslint-config-betaman

betaman-monorepo를 위한 표준 eslint config를 제공하는 패키지입니다.

## 설치

```sh
pnpm add -D eslint eslint-config-betaman
```

## 사용법

패키지에서 사용중인 UI 프레임워크에 따라 미리 준비된 config를 이용할 수 있습니다.

### React

```json
// .eslintrc
{
  "extends": ["betaman/react"]
}
```

### Next.js

```json
// .eslintrc
{
  "extends": ["betaman/next"]
}
```

### 그 외

React, Next.js를 사용하지 않는 패키지의 경우, 하위 경로 없이 betaman만 기입하여 사용하면 됩니다.  
필요에 따라 옵션을 더 추가하여 사용합니다.

```json
// .eslintrc
{
  "extends": ["betaman"]
  // ...
}
```
