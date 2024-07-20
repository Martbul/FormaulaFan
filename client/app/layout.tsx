import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/main.css";
import React from "react";
import "../global.css";
import { AppWrapper } from "@/contexts/AuthContext2";
import { AppWebsocketWrapper } from "@/contexts/WebsocketContext";
import Navigation from "@/components/navigation/Navigation"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FormulaFan",
  description: "New place for F1 Fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppWrapper>
      <AppWebsocketWrapper>
        <html lang="en">
          <body className={inter.className}>
            {/* <Navigation className="nav-layout"> </Navigation> */}
            {children}
          </body>
        </html>
      </AppWebsocketWrapper>
    </AppWrapper>
  );
}
