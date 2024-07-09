import Image from "next/image";
import icons from "../../constants/icons";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="createPostContainer">
      <div className="createPostLayout">
        <div className="profilePic">
          <Image src={icons.postCreator} alt="Current User" />
        </div>
        <div className="createPostMain">
          <textarea
            className="createPostText"
            placeholder="What's happening?"
          ></textarea>
          <div className="createPostActions">
            <div className="icons">
              <Image src={icons.image} alt="Add image" />
              <Image src={icons.gif} alt="Add GIF" />
              <Image src={icons.poll} alt="Add poll" />
              <Image src={icons.emoji} alt="Add emoji" />
              <Image src={icons.schedule} alt="Schedule" />
            </div>
            <button className="postButton">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
