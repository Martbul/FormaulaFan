import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import {
  Heart,
  HeartFilled,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  OptionsIcon,
} from "@/utils/svgIcons";
import { clickOnLike } from "@/services/post/post.service";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { useRouter } from "next/navigation";

const DynamicCreateCommentModal = dynamic(
  () => import("../../components/posts/CreateCommentModal/CreateCommentModal"),
  {
    ssr: false,
  }
);

const DynamicPostOptionsMenu = dynamic(
  () => import("./PostOptionsMenu/PostOptionsMenu"),
  {
    ssr: false,
  }
);

const Post = ({ post, userId }) => {
  const router = useRouter();
  const [isLiked, setIsLiked] = useState<boolean>(
    post.likedBy.some((user) => user.id === userId)
  );
  const [likeCount, setLikeCount] = useState<number>(post.likedBy.length);

  const handleLike = async () => {
    const result = await clickOnLike(post.id, userId, isLiked);
    if (result.data.likeDislike == "Post was liked") {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else if (result.data.likeDislike == "Post was disliked") {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }
    console.log(result.data.likeDislike);
  };

  const handleComment = async () => {};
  const handleRedirectToSinglePost = () => {
    router.push(`/posts/${post.id}`);
  };

  return (
    <div className="bg-[#1c1c1c] border border-[#3a3a3a] rounded-lg p-4 mb-4 text-gray-300 flex">
      <div className="flex flex-col flex-1">
        <div onClick={handleRedirectToSinglePost}>
          <div className="postHeader flex items-center mb-4">
            <Image
              src={post.author.picture}
              alt="pic"
              className="profilePic w-12 h-12"
              width={40}
              height={40}
            />
            <div className="postInfo ml-4 flex flex-col gap-2">
              <div className="userData flex flex-col">
                <span className="username font-bold">
                  {post.author.username}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                <span className="timestamp">· 2h</span>
              </div>
            </div>
          </div>
          <div className="postContent mb-4 text-gray-300">
            {post.textContent}
            {post.imageContentUrl && (
              <Image
                src={post.imageContentUrl}
                alt="pic"
                className="w-36 h-36 mt-2 rounded-lg"
                width={144}
                height={144}
              />
            )}
          </div>
        </div>

        <div className="postActions flex justify-between items-center border-t border-gray-600 pt-2 mt-2 text-gray-400">
          <div className="flex items-center space-x-4">
            <div
              className="likes flex items-center space-x-1 cursor-pointer"
              onClick={handleLike}
            >
              {isLiked ? (
                <HeartFilled className="w-6 h-6 text-red-500" />
              ) : (
                <Heart className="w-6 h-6" />
              )}
              <p className="text-sm">{likeCount}</p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="comments flex items-center space-x-1 cursor-pointer">
                  <CommentIcon className="w-5 h-5" />
                  <p className="text-sm">{post.comments.length}</p>
                </div>
              </DialogTrigger>
              <DynamicCreateCommentModal postId={post.id} />
            </Dialog>
            <div
              className="shares flex items-center space-x-1 cursor-pointer"
              onClick={handleComment}
            >
              <ShareIcon className="w-6 h-6" />
              <p className="text-sm">{post.shares}</p>
            </div>
            <div
              className="saved flex items-center space-x-1 cursor-pointer"
              onClick={handleComment}
            >
              <SaveIcon className="w-6 h-6" />
              <p className="text-sm">{post.saves}</p>
            </div>
          </div>
        </div>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex-col h-full">
          <OptionsIcon className="w-5 h-5 hover:opacity-70" />
        </DropdownMenuTrigger>
        <DynamicPostOptionsMenu />
      </DropdownMenu>
    </div>
  );
};

export default Post;
