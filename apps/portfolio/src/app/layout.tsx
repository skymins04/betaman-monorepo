import "../common/styles/global.css";
import "@betaman/shadcn/theme-base.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BETAMAN의 대시보드",
  description: "안녕하세요, 강민수 BETAMAN입니다!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
