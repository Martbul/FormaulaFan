import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { logout } from "@/services/auth/auth.service";
import { useRouter } from "next/navigation";
import React from "react";

const UserOptionsPopover: React.FC<{
  user: any;
  setUser: any;
}> = ({ setUser }) => {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/posts");
    logout(setUser);
  };


  return (
    <DropdownMenuContent className="bg-zinc-900">
      <DropdownMenuLabel className="text-neutral-200">
        My Account
      </DropdownMenuLabel>
      <DropdownMenuSeparator className="bg-neutral-200" />

      <DropdownMenuItem className="text-neutral-200 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
        <Link href="/profile">Profile</Link>
      </DropdownMenuItem>

      <DropdownMenuItem className="text-neutral-200 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
        Team
      </DropdownMenuItem>
      <DropdownMenuItem className="text-neutral-200 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
        <Link href="/settings">Settings</Link>
      </DropdownMenuItem>
      <DropdownMenuItem  className="text-red-600 hover:bg-red-700 hover:rounded-md hover:cursor-pointer hover:text-neutral-900" onClick={handleLogout}>
        Log Out
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
export default UserOptionsPopover;
