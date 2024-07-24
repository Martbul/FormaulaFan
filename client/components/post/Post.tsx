import Image from "next/image";
import "./Post.css";
import {
  Heart,
  HeartFilled,
  CommentIcon,
  ShareIcon,
  SaveIcon,
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
  }

  return (
    <div className="post bg-white p-4 rounded-lg shadow-md remove-selecting-text">
      <div onClick={handleRedirectToSinglePost}>
        <div className="postHeader flex items-center mb-4">
        <Image
          src={post.author.picture}
          alt="pic"
          className="w-10 h-10 rounded-full"
          width={40}
          height={40}
        />
        <div className="postInfo ml-4">
          <div className="userData font-semibold text-lg">
            <span className="username">{post.author.username}</span>
          </div>
          <div className="time text-gray-500 text-sm">
            <span className="timestamp">· 2h</span>
          </div>
        </div>
      </div>
      <div className="postContent mb-4 text-gray-800">
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
      </div></div>
      
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
                <p className="text-sm">{post.comments.length}</p>
              </div>
            </DialogTrigger>
            <DynamicCreateCommentModal postId={post.id}/>
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
  );
};

export default Post;


// import './Post.css'
// import {
//   Heart,
//   HeartFilled,
//   CommentIcon,
//   ShareIcon,
//   SaveIcon,
// } from "@/utils/svgIcons";
// import { clickOnLike } from "@/services/post/post.service";
// import { useState } from "react";
// import dynamic from "next/dynamic";
// import { Dialog, DialogTrigger } from "../ui/dialog";


// const DynamicCreateCommentModal = dynamic(
//   () => import("../../components/posts/CreateCommentModal/CreateCommentModal"),
//   {
//     ssr: false,
//   }
// );

// const Post = ({ post, userId }) => {
  

//   const [isLiked, setIsLiked] = useState<boolean>(
//     post.likedBy.some(user => user.id === userId),
//   );
//   const [likeCount, setLikeCount] = useState<number>(post.likedBy.length);

//   const handleLike = async () => {
//     const result = await clickOnLike(post.id, userId, isLiked);
//     if (result.data.likeDislike == "Post was liked") {
//       setIsLiked(true);
//          setLikeCount(likeCount + 1);
//     } else if (result.data.likeDislike == "Post was disliked") {
//       setIsLiked(false)
//       setLikeCount(likeCount - 1);
//     }
//       console.log(result.data.likeDislike);
    
//   };

//   const handleComment = async () => {
    
//   }
//   return (
//     <div className="post remove-selecting-text">
//       <div className="postHeader">
//         <Image
//           src={post.author.picture}
//           alt="pic"
//           className="w-12 h-12"
//           width={50}
//           height={50}
//         />{" "}
//         <div className="postInfo">
//           <div className="userData">
//             <span className="username">{post.author.username}</span>
//           </div>
//           <div className="time">
//             <span className="timestamp">· 2h</span>
//           </div>
//         </div>
//       </div>
//       <div className="postContent">
//         {post.textContent}
//         {post.imageContentUrl && (
//           <Image
//             src={post.imageContentUrl}
//             alt="pic"
//             className="w-36 h-36"
//             width={50}
//             height={50}
//           />
//         )}
//       </div>
//       <div className="postActions">
//         <div className="data flex ">
//           <div className="likes">
//             {isLiked && (
//               <HeartFilled className="w-6 h-6" onClick={handleLike} />
//             )}
//             {!isLiked && <Heart className="w-6 h-6" onClick={handleLike} />}

//             <p>{likeCount}</p>
//           </div>
//           <Dialog>
//             <DialogTrigger asChild>
//               <div className="comments">
//                 <CommentIcon className="w-5 h-5" onClick={handleComment} />
//                 <p>{post.comments.length}</p>
//               </div>
//             </DialogTrigger>
//             <DynamicCreateCommentModal />
//           </Dialog>
//           <div className="shares">
//             <ShareIcon className="w-6 h-6" onClick={handleComment} />
//             <p>{post.shares}</p>
//           </div>
//           <div className="saved">
//             <SaveIcon className="w-6 h-6" onClick={handleComment} />
//             <p>{post.saves}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default Post;