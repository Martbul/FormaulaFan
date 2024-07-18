import { Input } from "@/components/ui/input";
import "./ChatArea.css";
import Image from "next/image";
import icons from "@/constants/icons";
import React, { useEffect, useRef, useState } from "react";
import { useWebsocketContext } from "@/contexts/WebsocketContext";
import { useAuthContext } from "@/contexts/AuthContext2";
import { getAllTextChannelMessagesByChannelId } from "@/services/channel/channel.service";

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

interface ChatAreaProps {
  selectedChatChannelId: string;
  groupId: string;
}

export const ChatArea = ({ selectedChatChannelId, groupId }: ChatAreaProps) => {
  const socket = useWebsocketContext();
  const { user } = useAuthContext();
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null); // Ref for the messages container

  useEffect(() => {
    if (!selectedChatChannelId) return;
    const fetchInitialMessages = async () => {
      try {
        const channel = await getAllTextChannelMessagesByChannelId(
          selectedChatChannelId
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
        {messages.map((msg, index) => {
          const isCurrentUser =
            msg.member?.user.username === user.username ||
            msg.senderUsername === user.username;

          return (
            <div
              key={index}
              className={`message`}
              // style={{ backgroundColor: isCurrentUser ? "white" : "initial" }}
            >
              <div className="user-profile-pic">
                <Image src={icons.chatUserImage} alt="" className="w-10 h-10" />
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
      </div>
    </div>
  );
};
