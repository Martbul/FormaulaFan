import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { logout } from "@/services/auth/auth.service";

const UserOptionsPopover = ({setUser}) =>{
   return (
     <DropdownMenuContent className="bg-zinc-900">
       <DropdownMenuLabel className="text-neutral-200">
         My Account
       </DropdownMenuLabel>
       <DropdownMenuSeparator />

       <DropdownMenuItem className="text-neutral-200 hover:cursor-pointer hover:text-white">
         <Link href="/profile">Profile</Link>
       </DropdownMenuItem>

       <DropdownMenuItem className="text-neutral-200 hover:cursor-pointer hover:text-white">Team</DropdownMenuItem>
       <DropdownMenuItem className="text-neutral-200 hover:cursor-pointer hover:text-white">
         Subscription
       </DropdownMenuItem>
       <DropdownMenuItem
         className="text-red-700"
         onClick={() => logout(setUser)}
       >
         Log Out
       </DropdownMenuItem>
     </DropdownMenuContent>
   );
}
export default UserOptionsPopover