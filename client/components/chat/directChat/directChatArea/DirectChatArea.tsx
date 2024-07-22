"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

import { useWebsocketContext } from "@/contexts/WebsocketContext";

import icons from "@/constants/icons";
import Image from "next/image";

import "./DirectChatArea.css";


export const DirectChatArea = ({
  conversationData,
  recipientUser,
  currentUser,
}: any) => {
  const socket = useWebsocketContext()
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for the messages container

 
  

 useEffect(() =>{
  if(!recipientUser) return;
  if(!conversationData) return;
   if (!currentUser) return;
   
   console.log('conversationData', conversationData);
   setMessages(conversationData.directMessages)

   if(socket){
    //! emit means sending data
    socket.emit("joinDirectChat", conversationData.id);

    //! .on is an event listenter
    socket.on("directMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      })

      socket.on("directMessageHistory", (history) =>{
        setMessages(history)
      })

        return () => {
        socket.off("directMessage");
        socket.off("directMessageHistory");
      }
   }
  }, [socket, conversationData,recipientUser])
  

    useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);



   const handleMessageSent = () => {
    if (!newMessage) return;
    if (socket && newMessage.trim() !== "") {
      socket.emit("sendDirectChatMessage", {
        senderUsername: currentUser.username,
        senderEmail: currentUser.email,
        content: newMessage,
        directConversatinoId: conversationData.id,
        recipientId: recipientUser.id,
      });
      setNewMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleMessageSent();
    }
  };

  // if (!Array.isArray(messages)) {
  //   return null;
  // }

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
        
        <Image
          src={recipientUser.picture}
          alt="pic"
          className="w-10 h-10"
          width={50}
          height={50}
        />{" "}
        {recipientUser && (
          <p className="font-semibold text-xl text-white dark:text-white">
            {recipientUser.username}
          </p>
        )}
      </div>

      <div className="messages">
        {messages.map((msg, index) => {
          const isCurrentUser = msg.user?.username === currentUser.username;

          return (
            <div
              key={index}
              className="message"
              // style={{ backgroundColor: isCurrentUser ? "white" : "initial" }}
            >
              <div className="user-profile-pic">
                <Image src={icons.chatUserImage} alt="" className="w-10 h-10" />
              </div>
              <div className="message-content">
                <div className="message-sender">
                  {msg?.user?.username ?? msg.senderUsername}
                </div>
                <div className="message-text">{msg.content}</div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-layout">
        <div className="plus-icon">
          <Image src={icons.plus} alt="" className="plus-image" />
        </div>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onKeyDown={handleKeyDown}
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
