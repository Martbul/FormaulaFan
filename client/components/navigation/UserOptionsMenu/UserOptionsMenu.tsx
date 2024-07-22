import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

import { logout } from "@/services/auth/auth.service";


const UserOptionsMenu = ({ user , setUser}) => {
  return (
    <div className="w-full mt-auto">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center p-4">
            <Image
              src={user.picture}
              alt="pic"
              className="w-12 h-12"
              width={50}
              height={50}
            />{" "}
            <div className="ml-3">
              <div className="text-gray-500 text-lg">{user.username}</div>
            </div>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-700">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>

          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuItem onClick={() => logout(setUser)}>
            Log Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserOptionsMenu