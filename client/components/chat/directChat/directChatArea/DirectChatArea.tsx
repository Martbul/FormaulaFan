"use client";

import { Input } from "@/components/ui/input";
import "./DirectChatArea.css";
import Image from "next/image";
import icons from "@/constants/icons";
import { useWebsocketContext } from "@/contexts/WebsocketContext";

import React, { useEffect, useState } from "react";

export const DirectChatArea = ({
  conversationData,
  conversationUser,
  currentUser,
}: any) => {
  const socket = useWebsocketContext()
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  //! useeffect to get messages from db to pupulate messages on component mount
  

  useEffect(() =>{
    socket.on("connect", () => {
      console.log("Connected!!")
    });

    socket.on("onMessage", (data) =>{
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
    socket.emit("newMessage", newMessage)
   setMessages((prevMessages) => [...prevMessages, newMessage]);
    setNewMessage("")
  }

  return (
    <div className="chat-area">
      <div
        className="text-md font-semibold px-3 items-center h-14 border-zinc-800 border-b-2"
        style={{
          display: "flex",
          gap: "1em",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* {conversationUser && (<Image src={conversationUser.imageUrl} alt="profileImage"/>)} */}
        <Image className="w-10 h-10" src={icons.chatUserImage} alt="" />
        {conversationUser && (
          <p className="font-semibold text-xl text-white dark:text-white">
            {conversationUser.username}
          </p>
        )}
        
      </div>
      <div className="messages">{/* Messages will go here */}</div>

      <div>
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
          style={{
            backgroundColor: "#1e1f22",
            borderColor: "#1e1f22",
            outline: "none",
            color: "white",
          }}
        />
        <button onClick={handleMessageSent}>Send</button>
      </div>
    </div>
  );
};

//! chatGPT
// "use client";

// import { Input } from "@/components/ui/input";
// import "./DirectChatArea.css";
// import Image from "next/image";
// import icons from "@/constants/icons";
// import {
//   initiateSocket,
//   getSocket,
//   disconnectSocket,
// } from "@/services/socket/socket";

// import React, { useEffect, useState } from "react";

// export const DirectChatArea = ({ conversationUser, currentUser }: any) => {
//   const [messages, setMessages] = useState<
//     { sender: string; content: string }[]
//   >([]);
//   const [input, setInput] = useState<string>("");

//   useEffect(() => {
//     initiateSocket();

//     const socket = getSocket();
//     socket.on("message", (message: { sender: string; content: string }) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });

//     return () => {
//       disconnectSocket();
//     };
//   }, []);

//   const sendMessage = () => {
//     const socket = getSocket();
//     if (input.trim() !== "") {
//       const message = {
//         sender: currentUser.id,
//         content: input,
//         recipient: conversationUser.id,
//       };
//       console.log(message);

//       socket.emit("directMessage", message);
//       setMessages((prevMessages) => [...prevMessages, message]);
//       setInput("");
//     }
//   };

//   return (
//     <div className="chat-area">
//       <div
//         className="text-md font-semibold px-3 items-center h-14 border-zinc-800 border-b-2"
//         style={{
//           display: "flex",
//           gap: "1em",
//           flexDirection: "row",
//           alignItems: "center",
//         }}
//       >
//         <Image className="w-10 h-10" src={icons.chatUserImage} alt="" />
//         {conversationUser && (
//           <p className="font-semibold text-xl text-white dark:text-white">
//             {conversationUser.username}
//           </p>
//         )}
//       </div>
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`message ${
//               msg.sender === currentUser.id ? "sent" : "received"
//             }`}
//           >
//             <p>{msg.content}</p>
//           </div>
//         ))}
//       </div>
//       <div className="chat-input-layout">
//         <div className="plus-icon">
//           <Image src={icons.plus} alt="" className="plus-image" />
//         </div>
//         <Input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//           style={{
//             backgroundColor: "#1e1f22",
//             borderColor: "#1e1f22",
//             outline: "none",
//             color: "white",
//           }}
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }; 
