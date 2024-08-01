import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import { AppWrapper } from "@/contexts/AuthContext2";
import { AppWebsocketWrapper } from "@/contexts/WebsocketContext";
import { UserSettingsWrapper } from "@/contexts/UserSettingsContex";
import Provider from "@/utils/Providers";

import "../app/main.css";
import "../global.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FormulaFan",
  description: "New place for F1 Fans",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AppWrapper>
      <UserSettingsWrapper>
        <AppWebsocketWrapper>
          <html lang="en">
            <body className={`${inter.className} remove-selecting-text`}>
              {" "}
              <Provider>{children}</Provider>
            </body>
          </html>
        </AppWebsocketWrapper>
      </UserSettingsWrapper>
    </AppWrapper>
  );
}
