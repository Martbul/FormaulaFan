"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import "../background.css";
import type { SvgProps } from "@/utils/interfaces";
import images from "@/constants/images";
import Image from "next/image";
import { useEffect, useState , Suspense} from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { F1McLarenModel } from "@/components/3dModels/F1McLarenModel";
import F1McLrean from "@/components/3dHome/F1McLaren";
import Carousel from "@/components/3dHome/Carousel";

export default function Home() {
 const logos = [
   {
     text: "Logo 1",
     svg: (
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className="h-12 w-12"
       >
         <path d="M12 2L1 21h22L12 2z" fill="currentColor" />
       </svg>
     ),
   },
   {
     text: "Logo 2",
     svg: (
       <svg
        
         xmlns="http://www.w3.org/2000/svg"
         width="24"
         height="24"
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth="2"
         strokeLinecap="round"
         strokeLinejoin="round"
       >
         <line x1="4" x2="20" y1="12" y2="12" />
         <line x1="4" x2="20" y1="6" y2="6" />
         <line x1="4" x2="20" y1="18" y2="18" />
       </svg>
     ),
   },
   {
     text: "Logo 3",
     svg: (
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className="h-12 w-12"
       >
         <rect x="4" y="4" width="16" height="16" fill="currentColor" />
       </svg>
     ),
   },
   {
     text: "Logo 4",
     svg: (
       <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         className="h-12 w-12"
       >
         <path d="M12 2L2 12l10 10 10-10L12 2z" fill="currentColor" />
       </svg>
     ),
   },
 ];
  return (
    <div className="no-scrollbar relative flex h-screen flex-col overflow-y-auto">
      {/* <header className="flex h-14 items-center bg-[#23272a] px-4 text-white shadow-md lg:px-36">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4 py-6">
              <Link
                href="#"
                className="flex items-center justify-center"
                prefetch={false}
              >
                <PoduimLogoIcon className="h-8 w-8" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                  prefetch={false}
                >
                  Discover
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                  prefetch={false}
                >
                  Nitro
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                  prefetch={false}
                >
                  Safety
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium underline-offset-4 hover:underline"
                  prefetch={false}
                >
                  Support
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-center lg:justify-between">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <PoduimLogoIcon className="h-8 w-8" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden items-center gap-4 lg:flex">
            <Link
              href="#"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Discover
            </Link>
            <Link
              href="#"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Nitro
            </Link>
            <Link
              href="#"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Safety
            </Link>
            <Link
              href="#"
              className="text-sm font-medium underline-offset-4 hover:underline"
              prefetch={false}
            >
              Support
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex gap-4 sm:gap-6">
          <Button className="hidden w-full min-[400px]:flex min-[400px]:w-auto">
            Download for Windows
          </Button>
          <Button variant="outline" className="min-[400px]:hidden">
            Download
          </Button>
        </div>
      </header> */}

      <main className="bg-image relative flex-1 bg-gradient-to-b from-[#36393f] to-[#23272a] text-white">
        {/* First Section */}
        <section className="relative flex h-screen w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="flex flex-row items-center lg:px-10">
            <div className="container px-4 md:px-6 lg:max-w-[650px]">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                    BEST PLACE FOR FORMULA 1 FANS
                  </h1>
                  <p className="animate-fade-in mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                    FormulaFans is great for sharing race thoughts, emotions,
                    and having good time with friends.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* <Button className="w-full min-[400px]:w-auto">
                    FormulaFans for Windows
                  </Button> */}
                  <Link href="/posts">
                    <Button className="grad gradHover w-full animate-pulse min-[400px]:w-auto">
                      Open FormulaFans in your browser
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:max-w-[700px]">
              <Image src={images.racingFans} alt="landing-image" />
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <h2>Explore endles opportunies</h2>
          </div>
        </section>

        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="flex justify-evenly rounded-2xl border-4 border-white border-opacity-30 bg-neutral-200 bg-opacity-30 lg:px-36 lg:py-36">
            {/* Car section with flex-basis and fixed height */}
            <div className="flex flex-1 basis-2/3 transform rounded-xl bg-orange-300 lg:h-[500px]">
              {" "}
              <F1McLrean scale={8} />
            </div>

            <div className="container flex basis-1/3 flex-col items-center justify-center px-4 md:px-6 lg:gap-2">
              <h1 className="text-bold text-2xl md:text-xl lg:text-5xl">
                Dive into the 3D world
              </h1>
              <p className="lg:text-md">
                Push the boundaries of what is possible
              </p>
            </div>
          </div>
        </section>

        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <Carousel items={logos} />
        </section>
        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <p>Some text</p>
          </div>
        </section>
        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <p>Some text</p>
          </div>
        </section>
        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <p>Some text</p>
          </div>
        </section>
        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <p>Some text</p>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#23272a] py-8 text-white md:py-12">
        <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-3 lg:grid-cols-5">
          {/* Company Section */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-lg font-semibold">Company</h3>
            <Link href="#" className="hover:underline">
              About
            </Link>
            <Link href="#" className="hover:underline">
              Careers
            </Link>
            <Link href="#" className="hover:underline">
              Branding
            </Link>
            <Link href="#" className="hover:underline">
              Newsroom
            </Link>
          </div>

          {/* Products Section */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-lg font-semibold">Products</h3>
            <Link href="#" className="hover:underline">
              Discovery
            </Link>
            <Link href="#" className="hover:underline">
              Nitro
            </Link>
            <Link href="#" className="hover:underline">
              Safety
            </Link>
            <Link href="#" className="hover:underline">
              Support
            </Link>
          </div>

          {/* Resources Section */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-lg font-semibold">Resources</h3>
            <Link href="#" className="hover:underline">
              Docs
            </Link>
            <Link href="#" className="hover:underline">
              Community
            </Link>
            <Link href="#" className="hover:underline">
              Blog
            </Link>
            <Link href="#" className="hover:underline">
              Help Center
            </Link>
          </div>

          {/* Policies Section */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-lg font-semibold">Policies</h3>
            <Link href="#" className="hover:underline">
              Privacy
            </Link>
            <Link href="#" className="hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:underline">
              Compliance
            </Link>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col gap-4">
            <h3 className="mb-2 text-lg font-semibold">Follow Us</h3>
            <Link href="#" className="hover:underline">
              Twitter
            </Link>
            <Link href="#" className="hover:underline">
              Facebook
            </Link>
            <Link href="#" className="hover:underline">
              Instagram
            </Link>
            <Link href="#" className="hover:underline">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center text-sm">
          <p>&copy; 2024 Formula Fan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

// MenuIcon component
function MenuIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

// PoduimLogoIcon component
function PoduimLogoIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      fill="#000000"
      viewBox="0 0 24 24"
      id="podium"
      data-name="Flat Color"
      xmlns="http://www.w3.org/2000/svg"
      className="icon flat-color"
      stroke="#000000"
      strokeWidth="0.00024"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          id="secondary"
          d="M12.93,6.81a1,1,0,0,1-.47-.12L12,6.45l-.46.24a1,1,0,0,1-1.45-1.05l.09-.52L9.8,4.76a1,1,0,0,1,.56-1.7L10.87,3l.23-.47a1,1,0,0,1,1.8,0l.23.47.51.08a1,1,0,0,1,.56,1.7l-.38.36.09.52a1,1,0,0,1-.39,1A1.09,1.09,0,0,1,12.93,6.81Z"
          style={{ fill: "#ff0000" }}
        />
        <path
          id="primary"
          d="M8,16v5a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V16a1,1,0,0,1,1-1H7A1,1,0,0,1,8,16Zm6-7H10a1,1,0,0,0-1,1V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V10A1,1,0,0,0,14,9Zm7,4H17a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Z"
          style={{ fill: "#000000" }}
        />
      </g>
    </svg>
  );
}
