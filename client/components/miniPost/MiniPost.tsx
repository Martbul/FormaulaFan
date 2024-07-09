import Image from "next/image";
import icons from "../../constants/icons";
import "./MiniPost.css";
const MiniPost = () => {
  return (
    <>
      <div className="postContainer">
        <div className="postLayout">
          <div
            className="profilePicture" 
          >
            <Image src={icons.postCreator} alt="" />
          </div>
          <div className="postMain">
            <div className="pstCreatorData">
              <div className="creatorName">Alex Hormozi</div>
              <div className="creatorUsername">@AlexHormozi</div>
              <div className="postTime">17h</div>
            </div>
            <div className="postText">
              <p>
                If you would like to take weekends off. Great. There are no
                rules. You’re welcome to. And I’m excited to compete against
                you.
              </p>
            </div>
            <div className="postPublicityDaya">
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
      </div>
    </>
  );
};
 
export default MiniPost;