import { Separator } from "@/components/ui/separator";
import { PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  InviteIcon,
  LeaveroupIconIcon,
  EditGroupProfileIcon,
  GroupSettingsIcon,
  PlusIcon,
  GroupAddEventIcon,
} from "@/utils/svgIcons";
import dynamic from "next/dynamic";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
const DynamicInvitePopover = dynamic(
  () => import("../../popovers/InvitePopover/InvitePopover"),
  {
    ssr: true,
  },
);
const DynamicGroupSettingsPopover = dynamic(
  () => import("../../popovers/GroupSettingsPopover/GroupSettingsPopover"),
  {
    ssr: true,
  },
);

const GroupQuickOptionsPopover = () => {
  return (
    <PopoverContent className="w-[180px] rounded-md bg-neutral-800 p-1 shadow-lg">
      <div className="grid gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
            >
              <InviteIcon className="mr-2 h-5 w-5" />
              Invite People
            </Button>
          </DialogTrigger>
          <DynamicInvitePopover />
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
            >
              <GroupSettingsIcon className="mr-2 h-5 w-5" />
              Group Settings
            </Button>
          </DialogTrigger>
          <DynamicGroupSettingsPopover />
        </Dialog>

        <Button
          variant="ghost"
          className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
        >
          <GroupAddEventIcon className="mr-2 h-5 w-5" />
          Create Event
        </Button>

        <Button
          variant="ghost"
          className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
        >
          <EditGroupProfileIcon className="mr-2 h-5 w-5" />
          Edit Group Profile
        </Button>
        <Separator className="bg-[#ebedf0]" />
        <Button variant="ghost" className="justify-start text-red-600">
          <LeaveroupIconIcon className="mr-2 h-6 w-6" />
          Leave Server
        </Button>
      </div>
    </PopoverContent>
  );
};

export default GroupQuickOptionsPopover;
