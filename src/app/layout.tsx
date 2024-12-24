import Navbar from "@/components/sections/navbar/navbar";
import ArrowDown from "@/components/ui/arrow-down";
import ThemeToggler from "@/components/ui/theme-toogler";
import NeonCursor from "@/provider/neon-curson";
import { ThemeProvider } from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kanit.className} antialiased overflow-x-hidden dark:bg-[#181414] `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NeonCursor />
          <div className="sticky top-1/2 z-30">
            <ThemeToggler />
          </div>
          <Navbar />
          {children}
          <ArrowDown />
        </ThemeProvider>
      </body>
    </html>
  );
}
