import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-[#23272a] text-white">
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
                <MountainIcon className="h-6 w-6" />
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
        <div className="flex-1 flex justify-center">
          <Link
            href="#"
            className="flex items-center justify-center"
            prefetch={false}
          >
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
        </div>
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
        <div className="ml-auto flex gap-4 sm:gap-6">
          <Button className="hidden min-[400px]:flex w-full min-[400px]:w-auto">
            Download for Windows
          </Button>
          <Button variant="outline" className="min-[400px]:hidden">
            Download
          </Button>
        </div>
      </header>
      <main
        className="flex-1 bg-gradient-to-b from-[#36393f] to-[#23272a] text-white"
        style={{
          backgroundImage:
            "url('../../../src/public/assets/images/backgroundImage.webp')",
        }}
      >
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  BEST PLACE FOR FORMULA 1 FANS
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  FormulaFans is great for sharing race thoughts, emotions and
                  having good time with friends
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full min-[400px]:w-auto">
                  FormulaFans for Windows
                </Button>
                <Link href="/posts">
                  <Button
                    variant="outline"
                    style={{ backgroundColor: "grey" }}
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
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#23272a] to-[#36393f] aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover the Power of Discord
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discord is more than just a chat app. It's a place where
                  communities come together to connect, collaborate, and create.
                  Explore the endless possibilities of Discord and unlock a new
                  world of communication.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#36393f] to-[#23272a] aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Discord Image 1"
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Discord Image 2"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#23272a] to-[#36393f] aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="container px-4 md:px-6">
            <Carousel className="w-full max-w-md">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width={448}
                    height={252}
                    alt="Carousel Image 1"
                    className="aspect-video object-cover rounded-md"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width={448}
                    height={252}
                    alt="Carousel Image 2"
                    className="aspect-video object-cover rounded-md"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width={448}
                    height={252}
                    alt="Carousel Image 3"
                    className="aspect-video object-cover rounded-md"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#36393f] to-[#23272a] aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Connect with Your Community
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discord is the perfect platform to bring your community
                  together. Whether it's a gaming group, a hobby club, or a
                  professional network, Discord offers the tools and features to
                  help your community thrive.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full min-[400px]:w-auto">
                  Join a Server
                </Button>
                <Button variant="outline" className="w-full min-[400px]:w-auto">
                  Create a Server
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-[#23272a] to-[#36393f] aos-init aos-animate"
          data-aos="fade-up"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Unleash Your Creativity
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Discord is more than just a chat app. It's a platform that
                  empowers you to express your creativity and share your
                  passions with the world. From custom bots to server
                  customization, the possibilities are endless.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="w-full min-[400px]:w-auto">
                  Explore Bots
                </Button>
                <Button variant="outline" className="w-full min-[400px]:w-auto">
                  Customize Your Server
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#23272a] p-6 md:py-12 w-full text-white">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              About
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Careers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Branding
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Newsroom
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Discord Nitro
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Discord Servers
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Discord Apps
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Discord Bots
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Support
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Safety
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Blog
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Developers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Policies</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Cookie Settings
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Guidelines
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Follow Us</h3>
            <Link href="#" className="hover:underline" prefetch={false}>
              Twitter
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Instagram
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Facebook
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              YouTube
            </Link>
          </div>
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

function MountainIcon(props:any) {
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
  )
}


