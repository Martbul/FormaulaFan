"use client";

import { useState } from "react";
import Navigation from "@/components/navigation/Navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="flex min-h-screen flex-col md:flex-row">
      <div className="w-full md:w-auto">
        <button className="p-4 md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
          <Navigation />
        </div>
      </div>

      <div className="flex-grow">{children}</div>
    </section>
  );
}
