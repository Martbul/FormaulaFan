import { Input } from "@/components/ui/input";
import "./ChatArea.css";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useWebsocketContext } from "@/contexts/WebsocketContext";
import { useAuthContext } from "@/contexts/AuthContext2";
import { getAllTextChannelMessagesByChannelId } from "@/services/channel/channel.service";
import { Popover, PopoverTrigger } from "@/components/ui/popover";

import dynamic from "next/dynamic";
import { PlusCircleIcon } from "@/utils/svgIcons";
interface Message {
  id: string;
  content: string;
  senderUsername?: string;
  member?: {
    user: {
      id: string;
      username: string;
    };
  };
}

const DynamicUserInfoPopover = dynamic(
  () => import("./UserPopover/UserPopover"),
  {
    ssr: false,
  },
);

export const ChatArea: React.FC<{
  selectedChatChannelId: string;
  groupId: string;
}> = ({ selectedChatChannelId, groupId }) => {
  const socket = useWebsocketContext();
  const { user } = useAuthContext();
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedChatChannelId) return;
    const fetchInitialMessages = async () => {
      try {
        const channel = await getAllTextChannelMessagesByChannelId(
          selectedChatChannelId,
        );
        const messages = channel.messages;
        setMessages(messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchInitialMessages();

    if (socket) {
      socket.emit("joinChannel", selectedChatChannelId);

      socket.on("message", (message: Message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      socket.on("messageHistory", (history: Message[]) => {
        setMessages(history);
      });

      return () => {
        socket.off("message");
        socket.off("messageHistory");
      };
    }
  }, [socket, selectedChatChannelId]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const [newMessage, setNewMessage] = useState<string>("");

  const handleMessageSent = () => {
    if (!newMessage) return;
    if (socket && newMessage.trim() !== "") {
      socket.emit("sendMessage", {
        senderUsername: user.username,
        senderEmail: user.email,
        content: newMessage,
        channelId: selectedChatChannelId,
        groupId,
      });
      setNewMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleMessageSent();
    }
  };

  if (!Array.isArray(messages)) {
    return null;
  }

  return (
    <div className="chat-area remove-selecting-text">
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
        {messages.map((msg, index) => {
          const isCurrentUser =
            msg.member?.user.username === user.username ||
            msg.senderUsername === user.username;

          return (
            <div key={index} className="message">
              <div className="user-profile-pic align-items flex rounded-full bg-gray-600 p-1">
                <Popover>
                  <PopoverTrigger>
                    <Image
                      src={user.picture}
                      alt="pic"
                      className="h-10 w-10"
                      width={40} // specify the width in pixels
                      height={40} // specify the height in pixels
                    />
                  </PopoverTrigger>

                  <DynamicUserInfoPopover chatUser={msg.member?.user || user} />
                </Popover>
              </div>
              <div className="message-content">
                <div className="message-sender">
                  {msg.member?.user.username ?? msg.senderUsername}
                </div>
                <div className="message-text">{msg.content}</div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      <div className="chat-input-layout align-center flex">
        <div className="plus-icon align-center flex">
          <PlusCircleIcon className="h-7 w-7" />
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
      </div>
    </div>
  );
};
