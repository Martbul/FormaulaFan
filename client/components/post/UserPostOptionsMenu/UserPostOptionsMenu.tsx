import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  DeleteIcon,
  EditGroupProfileIcon,
  PinIcon,
  NotInterestedIcon,
  FollowIcon,
  BlockIcon,
  AnalyticsIcon,
} from "@/utils/svgIcons";

const UserPostOptionsMenu = (post) => {
  return (
    <DropdownMenuContent className="bg-zinc-800 drop-shadow-xl">
      <DropdownMenuItem className="mb-1 text-neutral-200 hover:cursor-pointer hover:rounded-md hover:bg-neutral-700">
        <div className="flex items-center">
          <PinIcon className="mr-2 inline-block h-5 w-5" />
          Add to favorites
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="mb-1 text-neutral-200 hover:cursor-pointer hover:rounded-md hover:bg-neutral-700">
        <div className="flex items-center">
          <NotInterestedIcon className="mr-2 inline-block h-5 w-5" />
          Not interested in this post
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="mb-1 text-neutral-200 hover:cursor-pointer hover:rounded-md hover:bg-neutral-700">
        <div className="flex items-center">
          <FollowIcon className="mr-2 inline-block h-5 w-5" />
          Follow @USER
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="mb-1 text-neutral-200 hover:cursor-pointer hover:rounded-md hover:bg-neutral-700">
        <div className="flex items-center">
          <BlockIcon className="mr-2 inline-block h-5 w-5" />
          Block @USER
        </div>
      </DropdownMenuItem>
      <DropdownMenuItem className="text-neutral-200 hover:cursor-pointer hover:rounded-md hover:bg-neutral-700">
        <div className="flex items-center">
          <AnalyticsIcon className="mr-2 inline-block h-5 w-5" />
          Post analytics
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};

export default UserPostOptionsMenu;
