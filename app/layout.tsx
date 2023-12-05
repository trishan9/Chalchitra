"use client";

import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
