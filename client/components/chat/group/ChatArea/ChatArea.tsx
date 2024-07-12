import { Input } from "@/components/ui/input";
import './ChatArea.css'
import Image from "next/image";
import icons from "@/constants/icons";
export const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="other-groups">
        <p>Your Other Groups:</p>
        <div className="group-logo">
          <span>Group 1</span>
        </div>
        <div className="group-logo">
          <span>Group 2</span>
        </div>
        {/* Add more groups as needed */}
      </div>
      <div className="messages">{/* Messages will go here */}</div>

      <div className="chat-input-layout">
        <div className="plus-icon">
          <Image src={icons.plus} alt="" className="plus-image" />
        </div>
        <Input
          placeholder="Type your message..."
          style={{ backgroundColor: "#1e1f22", borderColor:"#1e1f22"  , outline: "none", color:"white"}}
        />
      </div>
    </div>
  );
};