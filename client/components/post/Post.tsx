import Image from "next/image";
import icons from "../../constants/icons";
import './Post.css'
const Post = () => {
   return (
     <div className="post">
       <div className="postHeader">
         <Image src={icons.postCreator} alt="Profile" className="profilePic" />
         <div className="postInfo">
           <div className="userData">
             <span className="username">Username</span>
             <span className="handle">@handle</span>
           </div>
           <div className="time">
             <span className="timestamp">· 2h</span>
           </div>
         </div>
       </div>
       <div className="postContent">
         This is an example of a Twitter-like post.
       </div>
       <div className="postActions">
         <div className="data">
           <div className="comments">
             <Image src={icons.comment} alt="comments" />
             <p>184</p>
           </div>
           <div className="shares">
             <Image src={icons.share} alt="shares" />
             <p>13</p>
           </div>
           <div className="likes">
             <Image src={icons.heart} alt="heart" />
             <p>2k</p>
           </div>
           <div className="impressions">
             <Image src={icons.eye} alt="eye" />
             <p>111k</p>
           </div>
         </div>
         <div className="sharings">
           <div className="postShareings">
             <div className="saved">
               <Image src={icons.save} alt="save" />
             </div>
             <div className="share">
               <Image src={icons.share2} alt="" />
             </div>
           </div>
         </div>
       </div>
     </div>
   );
}
 
export default Post;