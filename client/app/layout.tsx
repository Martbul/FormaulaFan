import type { Metadata } from "next";
import React from "react";
import { Inter } from "next/font/google";
import { AppWrapper } from "@/contexts/AuthContext2";
import { AppWebsocketWrapper } from "@/contexts/WebsocketContext";
// import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import "../app/main.css";
import "../global.css";
import { UserSettingsWrapper } from "@/contexts/UserSettingsContex";

const inter = Inter({ subsets: ["latin"] });

// const queryClient = new QueryClient();

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
    // <QueryClientProvider client={queryClient}>
    <AppWrapper>
      <UserSettingsWrapper>
         <AppWebsocketWrapper>
        <html lang="en">
          <body className={`${inter.className} remove-selecting-text`}>{children}</body>
        </html>
      </AppWebsocketWrapper>
      </UserSettingsWrapper>
     
    </AppWrapper>
    // </QueryClientProvider>
  );
}
