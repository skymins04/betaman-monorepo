import { Noto_Sans_KR } from "next/font/google";

export const fontNotoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "600", "800"],
  display: "swap",
  preload: true,
  subsets: ["latin"],
});
