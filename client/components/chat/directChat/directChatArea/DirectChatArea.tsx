"use client";

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";

import { useWebsocketContext } from "@/contexts/WebsocketContext";

import icons from "@/constants/icons";
import Image from "next/image";

import "./DirectChatArea.css";

import { DirectChatAreaProps, DirectMessage } from "@/utils/interfaces";


export const DirectChatArea: React.FC<DirectChatAreaProps> = ({
  conversationData,
  recipientUser,
  currentUser,
}) => {
  const socket = useWebsocketContext();
  const [messages, setMessages] = useState<DirectMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!recipientUser) return;
    if (!conversationData) return;
    if (!currentUser) return;

    console.log("conversationData", conversationData);
    setMessages(conversationData.directMessages);

    if (socket) {
      //! emit means sending data
      socket.emit("joinDirectChat", conversationData.id);

      //! .on is an event listenter
      socket.on("directMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on("directMessageHistory", (history) => {
        setMessages(history);
      });

      return () => {
        socket.off("directMessage");
        socket.off("directMessageHistory");
      };
    }
  }, [socket, conversationData, recipientUser]);

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
        {/* <Image
          src={recipientUser.picture}
          alt="pic"
          className="w-10 h-10"
          width={50}
          height={50}
        />{" "} */}
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
            <div key={index} className="message">
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