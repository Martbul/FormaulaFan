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


const AuthorPostOptionsMenu = () =>{
   return (
     <DropdownMenuContent className="bg-zinc-800 drop-shadow-xl ">
       <DropdownMenuLabel className="text-red-600 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <DeleteIcon className="w-5 h-5 inline-block mr-2" />
           Delete
         </div>
       </DropdownMenuLabel>
       <DropdownMenuSeparator className="bg-white" />
       <DropdownMenuItem className="text-neutral-200 mb-1 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <EditGroupProfileIcon className="w-5 h-5 inline-block mr-2" />
           Edit
         </div>
       </DropdownMenuItem>
       <DropdownMenuItem className="text-neutral-200 mb-1 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
         <div className="flex items-center">
           <PinIcon className="w-5 h-5 inline-block mr-2" />
           Pin to your profile
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

export default AuthorPostOptionsMenu