import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logout } from "@/services/auth/auth.service";
import Image from "next/image";
import Link from "next/link";

const UserOptionsMenu = ({ user , setUser}) => {
  return (
    <div className="profile-bottom">
      <DropdownMenu >
        <DropdownMenuTrigger>
          <div className="profile">
            <Image
              src={user.picture}
              alt="pic"
              className="w-12 h-12"
              width={50}
              height={50}
            />{" "}
            <div>
              <div className="username">{user.username}</div>
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