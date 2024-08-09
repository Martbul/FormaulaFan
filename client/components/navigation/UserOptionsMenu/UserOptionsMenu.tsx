import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import dynamic from "next/dynamic";

import React, { Dispatch, SetStateAction } from "react";
import type { User } from "@/services/auth/auth.interface";

const DynamicUserOptionsPopover = dynamic(
  () => import("./UserOptionsPopover/UserOptionsPopover"),
  {
    ssr: false,
  },
);

const UserOptionsMenu: React.FC<{
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
}> = ({ user, setUser }) => {
  return (
    <div className="remove-selecting-text mt-auto flex w-full justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center p-4">
            <Image
              src={user.picture}
              alt="pic"
              className="h-12 w-12"
              width={50}
              height={50}
            />{" "}
            <div className="ml-3">
              <div className="text-lg text-gray-500">{user.username}</div>
            </div>
          </div>
        </DropdownMenuTrigger>

        <DynamicUserOptionsPopover user={user} setUser={setUser} />
      </DropdownMenu>
    </div>
  );
};

export default UserOptionsMenu;
