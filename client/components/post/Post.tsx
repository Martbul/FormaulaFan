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
  SaveIconFill,
} from "@/utils/svgIcons";
import { clickOnLike, clickOnSave } from "@/services/post/post.service";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext2";

const DynamicCreateCommentModal = dynamic(
  () => import("../../components/posts/CreateCommentModal/CreateCommentModal"),
  {
    ssr: false,
  },
);

const DynamicAuthorPostOptionsMenu = dynamic(
  () => import("./AuthorPostOptionsMenu/AuthorPostOptionsMenu"),
  {
    ssr: false,
  },
);
const DynamicUserPostOptionsMenu = dynamic(
  () => import("./UserPostOptionsMenu/UserPostOptionsMenu"),
  {
    ssr: false,
  },
);

const DynamicSharePostModal = dynamic(
  () => import("../posts/SharePostModal/SharePostModal"),
  {
    ssr: false,
  },
);

const Post = ({ post, userId }) => {
  const { user } = useAuthContext();

  const router = useRouter();
  const [isLiked, setIsLiked] = useState<boolean>(
    post.likedBy.some((user) => user.id === userId),
  );
  const [isAuthor, setIsAuthor] = useState<boolean>(
    post.author.email === user.email,
  );

  const [isSaved, setIsSaved] = useState<boolean>(
    post.savedBy.some((user) => user.id === userId),
  );
  const [likeCount, setLikeCount] = useState<number>(post.likedBy.length);
  const [commentCount, setCommentCount] = useState<number>(
    post.comments.length,
  );
  const [savesCount, setSavesCount] = useState<number>(post.savedBy.length);

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

  const handleSave = async () => {
    const result = await clickOnSave(post.id, userId, isSaved);
    if (result.data.saveUnsave == "Post was saved") {
      setIsSaved(true);
      setSavesCount(savesCount + 1);
    } else if (result.data.saveUnsave == "Post was unsaved") {
      setIsSaved(false);
      setSavesCount(savesCount - 1);
    }
    console.log(result.data.saveUnsave);
  };

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
                  <p className="text-sm">{commentCount}</p>
                </div>
              </DialogTrigger>
              <DynamicCreateCommentModal
                postId={post.id}
                setCommentCount={setCommentCount}
              />
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="shares flex items-center space-x-1 cursor-pointer">
                  <ShareIcon className="w-6 h-6" />
                  <p className="text-sm">{post.shares}</p>
                </div>
              </DialogTrigger>
              <DynamicSharePostModal postId={post.id} />
            </Dialog>

            <div
              className="likes flex items-center space-x-1 cursor-pointer"
              onClick={handleSave}
            >
              {isSaved ? (
                <SaveIconFill className="w-6 h-6 text-red-500" />
              ) : (
                <SaveIcon className="w-6 h-6" />
              )}
              <p className="text-sm">{savesCount}</p>
            </div>
          </div>
        </div>
      </div>
      {isAuthor === true && (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex-col h-full">
            <OptionsIcon className="w-5 h-5 hover:opacity-70" />
          </DropdownMenuTrigger>
          <DynamicAuthorPostOptionsMenu />
        </DropdownMenu>
      )}

      {isAuthor === false && (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex-col h-full">
            <OptionsIcon className="w-5 h-5 hover:opacity-70" />
          </DropdownMenuTrigger>
          <DynamicUserPostOptionsMenu />
        </DropdownMenu>
      )}
    </div>
  );
};

export default Post;
