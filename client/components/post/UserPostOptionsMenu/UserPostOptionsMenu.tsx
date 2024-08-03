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


const UserPostOptionsMenu = () =>{
   return (
     <DropdownMenuContent className="bg-zinc-800 drop-shadow-xl ">
      
     
      
       <DropdownMenuItem className="text-neutral-200 mb-1 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <PinIcon className="w-5 h-5 inline-block mr-2" />
           Add  to favorites
         </div>
       </DropdownMenuItem>
       <DropdownMenuItem className="text-neutral-200 mb-1 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <NotInterestedIcon className="w-5 h-5 inline-block mr-2" />
           Not interested in this post
         </div>
       </DropdownMenuItem>
       <DropdownMenuItem className="text-neutral-200 mb-1  hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <FollowIcon className="w-5 h-5 inline-block mr-2" />
           Follow @USER
         </div>
       </DropdownMenuItem>
       <DropdownMenuItem className="text-neutral-200 mb-1  hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <BlockIcon className="w-5 h-5 inline-block mr-2" />
           Block @USER
         </div>
       </DropdownMenuItem>
       <DropdownMenuItem className="text-neutral-200  hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <AnalyticsIcon className="w-5 h-5 inline-block mr-2" />
            Post analytics
         </div>
        
        
       </DropdownMenuItem>
     </DropdownMenuContent>
   );
}

export default UserPostOptionsMenu