import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CalendarIconActive } from "@/utils/svgIcons";
import dynamic from "next/dynamic";

const DynamicF1LightsGame = dynamic(
  () => import("@/components/challenges/F1LightsGame/F1LightsGame"),
  {
    ssr: false,
  },
);

const DynamicCalendarComponent = dynamic(
  () => import("@/components/challenges/calendar/Calendar"),
  {
    ssr: false,
  },
);

const Challenges = () => {
  return (
    <div className="flex min-h-screen items-center bg-zinc-900">
      <div className="flex flex-1 justify-center">
        <DynamicF1LightsGame />
      </div>

      <div className="relative">
        <div className="absolute right-0 translate-y-1/2 transform">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="w-min bg-neutral-700 hover:bg-neutral-800">
                <CalendarIconActive className="h-8 w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="mb-6">
                <SheetTitle className="text-neutral-200">Schedule</SheetTitle>
                <SheetDescription className="text-neutral-300">
                  Play daily challenges and win points for the chamionship.
                </SheetDescription>
              </SheetHeader>
              <DynamicCalendarComponent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
