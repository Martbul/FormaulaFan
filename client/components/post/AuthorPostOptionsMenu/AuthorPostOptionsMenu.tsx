import {
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import {
  DeleteIcon,
  EditGroupProfileIcon,
  PinIcon,
  AnalyticsIcon,
} from "@/utils/svgIcons";
import { Button } from "@/components/ui/button";

import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuthContext } from "@/contexts/AuthContext2";
import { deletePost } from "@/services/post/post.service";
import dynamic from "next/dynamic";

const DynamicAuthorEditPostModal = dynamic(
  () => import("./AuthorPostEdit/AuthorPostEdit"),
  {
    ssr: false,
  },
);

const AuthorPostOptionsMenu = ({ post }) => {
  const { user } = useAuthContext();

  const handleDeletePost = async () => {
    await deletePost(user.email, post.id);
  };

  return (
    <DropdownMenuContent className="bg-zinc-800 drop-shadow-xl ">
      <Dialog>
        <DialogTrigger className="w-full">
          <DropdownMenuLabel className="text-red-600 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
            <div className="flex items-center">
              <DeleteIcon className="w-5 h-5 inline-block mr-2" />
              Delete
            </div>
          </DropdownMenuLabel>
        </DialogTrigger>
        <DialogContent className="bg-zinc-800 outline-none border-none text-neutral-200">
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this post?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="bg-red-700 text-neutral-800 hover:bg-red-900 "
                onClick={handleDeletePost}
              >
                Delete
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <DropdownMenuSeparator className="bg-white" />

      <Dialog>
        <DialogTrigger className="w-full">
          <DropdownMenuLabel className="text-neutral-200 mb-1 hover:bg-neutral-700 hover:rounded-md hover:cursor-pointer">
            <div className="flex items-center">
              <EditGroupProfileIcon className="w-5 h-5 inline-block mr-2" />
              Edit
            </div>
          </DropdownMenuLabel>
        </DialogTrigger>

        <DynamicAuthorEditPostModal
          textContent={post.textContent}
          postId={post.id}
        />
      </Dialog>

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
};

export default AuthorPostOptionsMenu;
