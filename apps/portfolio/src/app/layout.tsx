import "../common/styles/global.css";
import "@betaman/shadcn/theme-base.css";

import type { Metadata } from "next";
import { clsx } from "clsx/lite";
import { ThemeProvider } from "@betaman/tailwind";
import { fontNotoSansKR } from "@betaman/font/next";

export const metadata: Metadata = {
  title: "BETAMAN의 대시보드",
  description: "안녕하세요, 강민수 BETAMAN입니다!",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ko"
      className={clsx(
        " bg-background text-foreground",
        fontNotoSansKR.className,
        fontNotoSansKR.variable,
      )}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
