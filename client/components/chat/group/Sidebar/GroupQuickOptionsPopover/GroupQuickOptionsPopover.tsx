import { Separator } from "@/components/ui/separator"
import {
  PopoverContent,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import {
  InviteIcon,
  LeaveroupIconIcon,
  EditGroupProfileIcon,
  GroupSettingsIcon,
  PlusIcon,
GroupAddEventIcon
} from "@/utils/svgIcons";

const GroupQuickOptionsPopover = () => { 
   
   return (
     <PopoverContent className="w-[180px] p-1 rounded-md bg-neutral-800  shadow-lg">
       <div className="grid gap-2">
         <Button
           variant="ghost"
           className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
         >
           <InviteIcon className="h-5 w-5 mr-2 " />
           Invite People
         </Button>
         <Button
           variant="ghost"
           className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
         >
           <GroupSettingsIcon className="h-5 w-5 mr-2" />
           Group Settings
         </Button>
         <Button
           variant="ghost"
           className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
         >
           <PlusIcon className="h-5 w-5 mr-2" />
           Create Channel
         </Button>

         <Button
           variant="ghost"
           className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
         >
           <GroupAddEventIcon className="h-5 w-5 mr-2" />
           Create Event
         </Button>
         

         <Button
           variant="ghost"
           className="justify-start text-zinc-300 hover:bg-stone-900 hover:text-white"
         >
           <EditGroupProfileIcon className="h-5 w-5 mr-2" />
           Edit Group Profile
         </Button>
         <Separator className="bg-[#ebedf0]" />
         <Button variant="ghost" className="justify-start text-destructive">
           <LeaveroupIconIcon className="h-6 w-6 mr-2" />
           Leave Server
         </Button>
       </div>
     </PopoverContent>
   );
}

export default GroupQuickOptionsPopover