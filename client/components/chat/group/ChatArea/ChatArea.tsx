// 'use client'

// import { Input } from "@/components/ui/input";
// import './ChatArea.css'
// import Image from "next/image";
// import icons from "@/constants/icons";
// import { useWebsocketContext } from "@/contexts/WebsocketContext";
// import React, { useEffect, useState } from "react";
// import { useAuthContext } from "@/contexts/AuthContext2";
// import { getAllTextChannelMessagesByChannelId } from "@/services/channel/channel.service";

// export const ChatArea = ({selectedChatChannelId,groupId}:any) => {
//      const { user } = useAuthContext();

//    const socket = useWebsocketContext()
//   const [messages, setMessages] = useState<string[]>([]);
//   const [newMessage, setNewMessage] = useState<string>("");

//   useEffect(() => {
//     if (!selectedChatChannelId) return

//     const getAllChannelMessages = async () => {
//       console.log(selectedChatChannelId);

//       const allTextChannelPastMessages =
//         await getAllTextChannelMessagesByChannelId(selectedChatChannelId);
//       setMessages(allTextChannelPastMessages.messages);
//     };
//     getAllChannelMessages();

//     socket.on("connect", () => {
//       console.log("Connected!!");
//     });

//     socket.on("getGroupMessage", (data) => {
//       console.log("onMessage data recieved!!!");
//       console.log(data);
//     });

//     return () => {
//       console.log("Unregistering events");
//       socket.off("connect");
//       socket.off("onMessage");
//     };
//   }, [selectedChatChannelId]);

//   const handleMessageSent = () =>{
   
//     const createMessageDto = {
//       senderUsername: user.username,
//       senderEmail: user.email,
//       content: newMessage,
//       chatChannelId: selectedChatChannelId,
//       groupId,
//     };
//     socket.emit("createGroupMessage", createMessageDto);
//    setMessages((prevMessages) => [...prevMessages, newMessage]);
//     setNewMessage("")
//   }


//   return (
//     <div className="chat-area">
//       <div className="other-groups">
//         <p>Your Other Groups:</p>
//         <div className="group-logo">
//           <span>Group 1</span>
//         </div>
//         <div className="group-logo">
//           <span>Group 2</span>
//         </div>
//         {/* Add more groups as needed */}
//       </div>
//       <div className="messages">
//         {messages.map((msg, index) => (
//           <div key={index} className="flex gap-2">
//             {msg.member?.user.username ? (
//               <div>{msg.member.user.username}</div>
//             ) : (
//               <div>{user.username}</div>
//             )}

//             {msg.content ? <div>{msg.content}</div> : <div>{msg}</div>}
//           </div>
//         ))}
//       </div>

//       <div className="chat-input-layout">
//         <div className="plus-icon">
//           <Image src={icons.plus} alt="" className="plus-image" />
//         </div>
//         <Input
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)}
//           placeholder="Type your message..."
//           style={{
//             backgroundColor: "#1e1f22",
//             borderColor: "#1e1f22",
//             outline: "none",
//             color: "white",
//           }}
//         />
//         <button onClick={handleMessageSent}>Send</button>
//       </div>
//     </div>
//   );
// };



// ChatArea.tsx

import { Input } from "@/components/ui/input";
import './ChatArea.css';
import Image from "next/image";
import icons from "@/constants/icons";
import React, { useEffect, useState } from "react";
import { useWebsocketContext } from "@/contexts/WebsocketContext";
import { useAuthContext } from "@/contexts/AuthContext2";
import { getAllTextChannelMessagesByChannelId } from "@/services/channel/channel.service";

interface Message {
  id: string;
  content: string;
  member?: {
    user: {
      id: string; // Ensure user id is available to uniquely identify senders
      username: string;
    }
  };
}

interface ChatAreaProps {
  selectedChatChannelId: string;
  groupId: string;
}

export const ChatArea = ({ selectedChatChannelId, groupId }) => {
  const socket = useWebsocketContext();
  const { user } = useAuthContext();
  const [messages, setMessages] = useState<Message[]>([]); // Initialize messages as an empty array

  useEffect(() => {
    if(!selectedChatChannelId) return
    const fetchInitialMessages = async () => {
      try {
          const channel = await getAllTextChannelMessagesByChannelId(selectedChatChannelId);
    const messages = channel.messages;
     setMessages(messages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      }
    };

    fetchInitialMessages();

    if (socket) {
      socket.emit('joinChannel', selectedChatChannelId);

      socket.on('message', (message: Message) => {
        setMessages(prevMessages => [...prevMessages, message]);
      });

      socket.on('messageHistory', (history: Message[]) => {
        setMessages(history);
      });

      return () => {
        socket.off('message');
        socket.off('messageHistory');
      };
    }
  }, [socket, selectedChatChannelId]);

  const [newMessage, setNewMessage] = useState<string>('');

  const handleMessageSent = () => {
    if (socket && newMessage.trim() !== '') {
      socket.emit('sendMessage', {  senderUsername: user.username, senderEmail: user.email, content: newMessage, channelId: selectedChatChannelId,groupId });
      setNewMessage('');
    }
  };

  // Ensure messages is an array before mapping
  if (!Array.isArray(messages)) {
    return null; // Or handle the case where messages is not an array
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
          <div key={index} className={`message ${msg.member?.user.id === user.id ? 'sent' : 'received'}`}>
            <div className="message-content">
              <div className="message-sender">{msg.member?.user.username ?? 'Unknown User'}</div>
              <div className="message-text">{msg.content}</div>
            </div>
          </div>
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
