import CalendarComponent from "@/components/challenges/calendar/Calendar";
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

const Challenges = () => {
  return (
    <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
      <div className="relative w-full">
        <div className="absolute right-0 transform translate-y-1/2">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="bg-neutral-700 w-min hover:bg-neutral-800">
                <CalendarIconActive className="w-8 h-8" />
              </Button>
            </SheetTrigger>
            <SheetContent >
              <SheetHeader className="mb-6">
                <SheetTitle className="text-neutral-200">Schedule</SheetTitle>
                <SheetDescription className="text-neutral-300">
                  Play daily challenges and win points for the chamionship.
                </SheetDescription>
              </SheetHeader>
              <CalendarComponent />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
