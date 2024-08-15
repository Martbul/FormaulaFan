"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import "../background.css";
import type { SvgProps } from "@/utils/interfaces";
import images from "@/constants/images";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [comets, setComets] = useState<number[]>([]);

  useEffect(() => {
    const addComet = () => {
      setComets(prevComets => [...prevComets, Date.now()]); // Use timestamp as unique key
    };

    // Add a comet every 500ms
    const intervalId = setInterval(addComet, 500);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);


  return (
    <div className="no-scrollbar relative flex h-screen flex-col overflow-y-auto">
      {/* Background Comets */}

      <header className="flex h-14 items-center bg-[#23272a] px-4 text-white shadow-md lg:px-36">
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
      </header>

      <main className="relative flex-1 bg-gradient-to-b from-[#36393f] to-[#23272a] text-white">
        <section className="relative flex h-screen w-full">
          <div className="pointer-events-none left-0 top-0 flex h-full w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
            {/* Comets will be dynamically created here */}
            {comets.map((key) => (
              <div
                key={key}
                className="comet"
                style={{
                  left: `${Math.random() * 100}vw`,
                  top: `${Math.random() * 100}vh`,
                  height: `${Math.random() * 10 + 5}px`, // Randomize height for more variation
                }}
              />
            ))}
            <div className="flex flex-row items-center lg:px-10">
              <div className="container px-4 md:px-6 lg:max-w-[650px]">
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                      BEST PLACE FOR FORMULA 1 FANS
                    </h1>
                    <p className="animate-fade-in mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                      FormulaFans is great for sharing race thoughts, emotions
                      and having good time with friends
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="w-full min-[400px]:w-auto">
                      FormulaFans for Windows
                    </Button>
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
          </div>
        </section>

        <section className="relative flex w-full items-center justify-center bg-gradient-to-b from-[#36393f] to-[#23272a] py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                {[...Array(3)].map((_, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={`/placeholder${index + 1}.svg`}
                      width={448}
                      height={252}
                      alt={`Carousel Image ${index + 1}`}
                      className="aspect-video rounded-md object-cover shadow-md transition-opacity duration-500 hover:opacity-80"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        <section className="relative flex w-full items-center justify-center py-12 text-center md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Check Our Discord
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Join the conversation and stay updated with our community on
                  Discord.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <img
                      src={`/discord-placeholder${index + 1}.svg`}
                      alt={`Discord Placeholder ${index + 1}`}
                      className="aspect-video rounded-md object-cover shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full bg-[#23272a] py-8 text-white md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} FormulaFans. All rights
              reserved.
            </p>
          </div>
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
