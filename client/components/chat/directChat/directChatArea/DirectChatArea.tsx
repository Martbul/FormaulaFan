"use client"

import { Input } from "@/components/ui/input";
import './DirectChatArea.css'
import Image from "next/image";
import icons from "@/constants/icons";
import {
  initiateSocket,
  getSocket,
  disconnectSocket,
} from "@/services/socket/socket";

import React, { useEffect, useState } from 'react';

export const DirectChatArea = ({ conversationData ,conversationUser,currentUser}:any) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");


   useEffect(() => {
    initiateSocket();

    const socket = getSocket();
    socket.on('message', (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      disconnectSocket();
    };
  }, []);

  const sendMessage = () => {
    const socket = getSocket();
    socket.emit('message', input);
    setInput('');
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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{
            backgroundColor: "#1e1f22",
            borderColor: "#1e1f22",
            outline: "none",
            color: "white",
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};