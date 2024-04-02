import { Button, LargeText } from "@betaman/shadcn";
import Link from "next/link";
import { ToggleThemeButton } from "./toggle-theme-button";

export default function Home() {
  return (
    <>
      <header className="container sticky top-0 flex h-14 items-center justify-between border-b border-border bg-background px-4">
        <Link href="/portfolio">
          <LargeText>BETAMAN의 포트폴리오</LargeText>
        </Link>
        <div className="flex items-center justify-end gap-2">
          <ToggleThemeButton />
          <Button>이력서 다운로드</Button>
        </div>
      </header>
      <div className="flex items-start justify-between">
        <div className="sticky top-14 h-[calc(100vh-56px)] w-[300px] bg-red-500"></div>
        <div className="h-[100vh] w-[calc(100vw-300px)]"></div>
      </div>
    </>
  );
}
