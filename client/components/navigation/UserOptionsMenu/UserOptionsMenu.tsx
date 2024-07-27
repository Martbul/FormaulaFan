import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicUserOptionsPopover = dynamic(
  () => import("./UserOptionsPopover/UserOptionsPopover"),
  {
    ssr: false,
  }
);

const UserOptionsMenu = ({ user , setUser}) => {
  return (
    <div className="flex w-full justify-center mt-auto">
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
       
<DynamicUserOptionsPopover setUser={setUser}/>


      </DropdownMenu>
    </div>
  );
};

export default UserOptionsMenu