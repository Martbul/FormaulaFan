import Image from "next/image";
import icons from "../../constants/icons";
import './Post.css'
import { Heart, HeartFilled } from "@/utils/svgIcons";
import { clickOnLike } from "@/services/post/post.service";
import { useState, useEffect } from "react";


const Post = ({ post, userId }) => {
  

  const [isLiked, setIsLiked] = useState<boolean>(
    post.likedBy.some(user => user.id === userId),
  );
  const [likeCount, setLikeCount] = useState<number>(post.likedBy.length);

  const handleLike = async () => {
    const result = await clickOnLike(post.id, userId, isLiked);
    if (result.data.likeDislike == "Post was liked") {
      setIsLiked(true);
         setLikeCount(likeCount + 1);
    } else if (result.data.likeDislike == "Post was disliked") {
      setIsLiked(false)
      setLikeCount(likeCount - 1);
    }
      console.log(result.data.likeDislike);
    
  };
  return (
    <div className="post remove-selecting-text">
      <div className="postHeader">
        <Image
          src={post.author.picture}
          alt="pic"
          className="w-12 h-12"
          width={50}
          height={50}
        />{" "}
        <div className="postInfo">
          <div className="userData">
            <span className="username">{post.author.username}</span>
          </div>
          <div className="time">
            <span className="timestamp">· 2h</span>
          </div>
        </div>
      </div>
      <div className="postContent">
        {post.textContent}
        {post.imageContentUrl && (
          <Image
            src={post.imageContentUrl}
            alt="pic"
            className="w-36 h-36"
            width={50}
            height={50}
          />
        )}
      </div>
      <div className="postActions">
        <div className="data">
          <div className="likes">
            {isLiked && (
              <HeartFilled className="w-6 h-6" onClick={handleLike} />
            )}
            {!isLiked && <Heart className="w-6 h-6" onClick={handleLike} />}

            <p>{likeCount}</p>
          </div>

          <div className="comments">
            <Image src={icons.comment} alt="comments" />
            <p>{post.comments.length}</p>
          </div>
          <div className="shares">
            <Image src={icons.share} alt="shares" />
            <p>{post.shares}</p>
          </div>

          <div className="saved">
            <Image src={icons.save} alt="save" />
            <p>{post.saves}</p>
          </div>
          <div className="impressions">
            <Image src={icons.eye} alt="eye" />
            <p>{post.views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Post;