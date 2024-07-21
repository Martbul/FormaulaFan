import Image from "next/image";
import icons from "../../constants/icons";
import './Post.css'


const Post = ({ post }) => {
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
            <Image src={icons.heart} alt="heart" />
            <p>{post.likes}</p>
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