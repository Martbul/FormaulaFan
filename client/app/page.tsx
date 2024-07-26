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

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#23272a] text-white shadow-md">
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
                <MountainIcon className="h-6 w-6 text-primary" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <nav className="flex flex-col gap-2">
                {["Discover", "Nitro", "Safety", "Support"].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-sm font-medium hover:underline underline-offset-4"
                    prefetch={false}
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex-1 flex justify-center">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6 text-primary" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
        <nav className="hidden lg:flex items-center gap-4">
          {["Discover", "Nitro", "Safety", "Support"].map((item) => (
            <Link
              key={item}
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              {item}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex gap-4 sm:gap-6">
          <Button className="hidden min-[400px]:flex w-full min-[400px]:w-auto">
            Download for Windows
          </Button>
          <Button variant="outline" className="min-[400px]:hidden">
            Download
          </Button>
        </div>
      </header>
      <main className="flex-1 bg-gradient-to-b from-[#36393f] to-[#23272a] text-white relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/assets/images/backgroundImage.webp')",
          }}
        ></div>
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center text-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  BEST PLACE FOR FORMULA 1 FANS
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in">
                  FormulaFans is great for sharing race thoughts, emotions and
                  having good time with friends
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full min-[400px]:w-auto animate-bounce">
                  FormulaFans for Windows
                </Button>
                <Link href="/posts">
                  <Button
                    variant="outline"
                    className="w-full min-[400px]:w-auto"
                  >
                    Open FormulaFans in your browser
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {[
          "from-[#23272a] to-[#36393f]",
          "from-[#2e3136] to-[#23272a]",
          "from-[#292b2f] to-[#2e3136]",
          "from-[#25272b] to-[#292b2f]",
          "from-[#23262a] to-[#25272b]",
        ].map((gradient, index) => (
          <section
            key={index}
            className={`relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center text-center bg-gradient-to-b ${gradient}`}
          >
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
                    Section Heading {index + 1}
                  </h2>
                  <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in">
                    Section content for section {index + 1}. Discover the
                    endless possibilities and features of this platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="w-full min-[400px]:w-auto">
                    Button {index + 1}A
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full min-[400px]:w-auto"
                  >
                    Button {index + 1}B
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center text-center bg-gradient-to-b from-[#36393f] to-[#23272a]">
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
                      className="aspect-video object-cover rounded-md shadow-md transition-opacity duration-500 hover:opacity-80"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center text-center bg-gradient-to-b from-[#23272a] to-[#36393f]">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["Discord Image 1", "Discord Image 2"].map((alt, index) => (
                <div key={index}>
                  <img
                    src={`/placeholder${index + 1}.svg`}
                    width={600}
                    height={400}
                    alt={alt}
                    className="rounded-lg object-cover shadow-lg transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#23272a] p-6 md:py-12 w-full text-white">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          {["Company", "Products", "Resources", "Policies", "Follow Us"].map(
            (heading, index) => (
              <div key={index} className="grid gap-1">
                <h3 className="font-semibold">{heading}</h3>
                {["About", "Careers", "Branding", "Newsroom"].map(
                  (link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href="#"
                      className="hover:underline"
                      prefetch={false}
                    >
                      {link}
                    </Link>
                  )
                )}
              </div>
            )
          )}
        </div>
      </footer>
    </div>



  );
}

function MenuIcon(props) {
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

function MountainIcon(props) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
