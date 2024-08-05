"use client";

import Image from "next/image";
import "./Post.css";
import {
  Heart,
  HeartFilled,
  CommentIcon,
  ShareIcon,
  SaveIcon,
  OptionsIcon,
} from "@/utils/svgIcons";
import { clickOnLike, getSinglePost } from "@/services/post/post.service";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import dynamic from "next/dynamic";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { useEffect, useState } from "react";
import type { PostInterface } from "@/utils/interfaces";

const DynamicCreateCommentModal = dynamic(
  () => import("../posts/CreateCommentModal/CreateCommentModal"),
  {
    ssr: false,
  },
);

const DynamicPostOptionsMenu = dynamic(
  () => import("../post/AuthorPostOptionsMenu/AuthorPostOptionsMenu"),
  {
    ssr: false,
  },
);

const SinglePost = ({ postId, userId }) => {
  const [post, setPost] = useState<PostInterface | null>(null);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [likeCount, setLikeCount] = useState<number>(0);

  useEffect(() => {
    if (!postId) return;
    const getSinglePostDetails = async () => {
      try {
        const singlePost = await getSinglePost(postId);
        console.log(singlePost);
        setPost(singlePost);
        console.log(userId);
        const isPostLiked = singlePost.likedBy.some(
          (user) => user.id === userId,
        );
        setIsLiked(isPostLiked);
        setLikeCount(singlePost.likedBy?.length);
      } catch (error) {
        console.error("Error fetching singe post:", error);
      } finally {
        setLoading(false);
      }
    };
    getSinglePostDetails();
  }, [postId]);

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

  return (
    <div className="post flex bg-white p-4 rounded-lg shadow-md remove-selecting-text">
      <div className="flex flex-1 flex-col">
        <div className="postHeader flex items-center mb-4">
          <Image
            src={post?.author?.picture}
            alt="pic"
            className="w-10 h-10 rounded-full"
            width={40}
            height={40}
          />
          <div className="postInfo ml-4">
            <div className="userData font-semibold text-lg">
              <span className="username">{post?.author?.username}</span>
            </div>
            <div className="time text-gray-500 text-sm">
              <span className="timestamp">· 2h</span>
            </div>
          </div>
        </div>
        <div className="postContent mb-4 text-gray-800">
          {post?.textContent}
          {post?.imageContentUrl && (
            <Image
              src={post?.imageContentUrl}
              alt="pic"
              className="w-36 h-36 mt-2 rounded-lg"
              width={144}
              height={144}
            />
          )}
        </div>
        <div className="postActions flex justify-between items-center border-t pt-2 mt-2 text-gray-600">
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
                  <p className="text-sm">{post?.comments?.length}</p>
                </div>
              </DialogTrigger>
              <DynamicCreateCommentModal postId={postId} />
            </Dialog>
            <div className="shares flex items-center space-x-1 cursor-pointer">
              <ShareIcon className="w-6 h-6" />
              <p className="text-sm">{post?.shares}</p>
            </div>
            <div className="saved flex items-center space-x-1 cursor-pointer">
              <SaveIcon className="w-6 h-6" />
              <p className="text-sm">{post?.saves}</p>
            </div>
          </div>
        </div>

        <div className="comments mt-4">
          {post?.comments?.map((comment) => (
            <div
              key={comment.id}
              className="comment bg-gray-100 p-2 rounded-lg mb-2"
            >
              <div className="commentHeader flex items-center mb-2">
                <Image
                  src={comment.author.picture}
                  alt="commenter-pic"
                  className="w-8 h-8 rounded-full"
                  width={32}
                  height={32}
                />
                <div className="commentInfo ml-2">
                  <div className="commenterData font-semibold text-sm">
                    <span className="commenterName">
                      {comment.author.username}
                    </span>
                  </div>
                  <div className="commentTime text-gray-500 text-xs">
                    {new Date(comment.createdAt).toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="commentContent text-gray-700">
                {comment.textContent}
                {comment.imageContentUrl && (
                  <Image
                    src={comment.imageContentUrl}
                    alt="comment-pic"
                    className="w-20 h-20 mt-2 rounded-lg"
                    width={80}
                    height={80}
                  />
                )}
              </div>
            </div>
          ))}
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

export default SinglePost;
