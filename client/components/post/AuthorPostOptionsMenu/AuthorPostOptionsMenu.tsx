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
    <DropdownMenuContent className="bg-zinc-800 drop-shadow-xl">
      <Dialog>
        <DialogTrigger className="w-full">
          <DropdownMenuLabel className="text-red-600 hover:cursor-pointer hover:rounded-md hover:bg-red-700 hover:text-neutral-900">
            <div className="flex items-center">
              <DeleteIcon className="mr-2 inline-block h-5 w-5" />
              Delete
            </div>
          </DropdownMenuLabel>
        </DialogTrigger>
        <DialogContent className="border-none bg-zinc-800 text-neutral-200 outline-none">
          <DialogHeader>
            <DialogTitle>
              Are you sure you want to delete this post?
            </DialogTitle>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                className="bg-red-700 text-neutral-800 hover:bg-red-900"
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
          <DropdownMenuLabel className="mb-1 text-neutral-200 hover:cursor-pointer hover:rounded-md hover:bg-neutral-700">
            <div className="flex items-center">
              <EditGroupProfileIcon className="mr-2 inline-block h-5 w-5" />
              Edit
            </div>
          </DropdownMenuLabel>
        </DialogTrigger>

        <DynamicAuthorEditPostModal
          textContent={post.textContent}
          postId={post.id}
        />
      </Dialog>

      <DropdownMenuItem className="mb-1 text-neutral-200 hover:cursor-pointer hover:rounded-md hover:bg-neutral-700">
        <div className="flex items-center">
          <PinIcon className="mr-2 inline-block h-5 w-5" />
          Pin to your profile
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

export default AuthorPostOptionsMenu;
