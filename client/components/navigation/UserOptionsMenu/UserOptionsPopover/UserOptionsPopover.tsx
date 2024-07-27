import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { logout } from "@/services/auth/auth.service";
import { useRouter } from 'next/navigation'



const UserOptionsPopover = ({setUser}) =>{
  const router = useRouter()

  const handleLogout = () => {
   router.replace('/posts')
  logout(setUser)
}
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
         onClick={handleLogout}
       >
         Log Out
       </DropdownMenuItem>
     </DropdownMenuContent>
   );
}
export default UserOptionsPopover