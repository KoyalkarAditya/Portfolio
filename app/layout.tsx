import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className=" w-full min-h-screen">
      <body className={`${inter.className} dark:bg-dark`}>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <NavBar />
          <div>{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
