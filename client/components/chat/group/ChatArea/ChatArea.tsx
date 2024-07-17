'use client'

import { Input } from "@/components/ui/input";
import './ChatArea.css'
import Image from "next/image";
import icons from "@/constants/icons";
import { useWebsocketContext } from "@/contexts/WebsocketContext";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/contexts/AuthContext2";

export const ChatArea = ({selectedChatChannelId,groupId}) => {
     const { user } = useAuthContext();

   const socket = useWebsocketContext()
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    const getAllChannelMessages = async() =>{
 const allTextChannelPastMessages = await getAllTextChannelMessagesByChannelId(selectedChatChannelId)
 setMessages(allTextChannelPastMessages)
    }
    getAllChannelMessages()
   
    socket.on("connect", () => {
      console.log("Connected!!")
    });

    socket.on("getGroupMessage", (data) =>{
      console.log("onMessage data recieved!!!")
      console.log(data)
    });

    return () => {
      console.log("Unregistering events")
      socket.off("connect")
      socket.off("onMessage")
    }
  },[])

  const handleMessageSent = () =>{
   
    const createMessageDto = {
      senderUsername: user.username,
      senderEmail: user.email,
      content: newMessage,
      chatChannelId: selectedChatChannelId,
      groupId,
    };
    socket.emit("createGroupMessage", createMessageDto);
   setMessages((prevMessages) => [...prevMessages, newMessage]);
    setNewMessage("")
  }


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
       <div className="messages">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>

      <div className="chat-input-layout">
        <div className="plus-icon">
          <Image src={icons.plus} alt="" className="plus-image" />
        </div>
        <Input
        value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}

          placeholder="Type your message..."
          style={{ backgroundColor: "#1e1f22", borderColor:"#1e1f22"  , outline: "none", color:"white"}}
        />
        <button onClick={handleMessageSent}>Send</button>
      </div>
    </div>
  );
};