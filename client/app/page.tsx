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
// import {PoduimLogoIcon } from "@/utils/svgIcons";

export default function Home() {
  return (
    <div className="flex  h-screen  flex-col overflow-y-auto no-scrollbar ">
      <Background />
      <header className="px-4 lg:px-36 h-14 flex items-center bg-[#23272a] text-white shadow-md">
        <Background />
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
                <PoduimLogoIcon className="h-8 w-8 " />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <nav className="flex flex-col gap-2">
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Discover
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Nitro
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Safety
                </Link>
                <Link
                  href="#"
                  className="text-sm font-medium hover:underline underline-offset-4"
                  prefetch={false}
                >
                  Support
                </Link>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex-1 flex justify-center lg:justify-between items-center">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <PoduimLogoIcon className="h-8 w-8 " />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-4">
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Discover
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Nitro
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Safety
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
              prefetch={false}
            >
              Support
            </Link>
          </nav>
        </div>
        <div className="ml-auto flex gap-4 sm:gap-6">
          <Button className="hidden min-[400px]:flex w-full min-[400px]:w-auto">
            Download for Windows
          </Button>
          <Button variant="outline" className="min-[400px]:hidden">
            Download
          </Button>
        </div>
      </header>

      <main className="flex-1  bg-gradient-to-b from-[#36393f] to-[#23272a] text-white relative ">
        <Background />

        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center text-center h-screen">
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

        <section
          className={`relative w-full py-12 md:py-24 lg:py-32 xl:py-48 flex items-center justify-center text-center bg-gradient-to-b`}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl animate-fade-in-up">
                  Section Heading
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl animate-fade-in">
                  Section content for section . Discover the endless
                  possibilities and features of this platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full min-[400px]:w-auto">Button A</Button>
                <Button variant="outline" className="w-full min-[400px]:w-auto">
                  Button B
                </Button>
              </div>
            </div>
          </div>
        </section>

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
      <footer className="bg-[#23272a] text-white py-8 md:py-12 w-full">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 px-4">
          {/* Company Section */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
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
            <h3 className="text-lg font-semibold mb-2">Products</h3>
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
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
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
            <h3 className="text-lg font-semibold mb-2">Policies</h3>
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
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
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
const Background = () => {
  return (
    <div className="background">
      {Array.from({ length: 30 }, (_, index) => (
        <span key={index}></span>
      ))}
    </div>
  );
};
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
