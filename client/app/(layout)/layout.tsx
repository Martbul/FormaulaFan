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
    <section className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-auto">
        <button className="md:hidden p-4" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
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
