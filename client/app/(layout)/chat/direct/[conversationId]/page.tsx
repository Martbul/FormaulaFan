"use client";

import { useEffect, useState } from "react";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import { getConversationsByUserEmail, getConversationUsersByConvIdAndEmail } from "@/services/conversation/conversation.service";
import { useAuthContext } from "@/contexts/AuthContext2";
import { DirectChatArea } from "@/components/chat/directChat/directChatArea/DirectChatArea";
import type { ChatPageProps, User } from "@/utils/interfaces";

const ChatPage:React.FC<ChatPageProps> = ({ params }) => {
  const { user } = useAuthContext();
  const [conversationData, setConversationData] = useState(null);
  const [conversationUser, setConversationUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
   const [userConversatinos, setUserConversations] = useState<User[]>([]);

useEffect(() => {
    const getConversationUsers = async () => {
      try {
        if (!user || !user.email) {
          console.log("User or user email is not defined");
          return;
        }
        const { conversation, conversationUser, currentUser } =
          await getConversationUsersByConvIdAndEmail(
            params.conversationId,
            user.email
          );
        if (!conversation || !conversationUser || !currentUser) {
          console.error("Something went wrong with conversation details");
          return;
        }
        setConversationData(conversation);
        setConversationUser(conversationUser);
        setCurrentUser(currentUser);

         const conversations = await getConversationsByUserEmail(user.email);
         if (!conversations) {
           console.log("The user has not started any conversations");
         } else {
           setUserConversations(conversations);
         }
      } catch (error) {
        console.error("Error fetching user groups:", error);
      } finally {
        setLoading(false);
      }
    };
    getConversationUsers();
  }, [user]);
  
    if (loading) {
       return <div>Loading...</div>;
     }
  return (
    <div className="flex h-screen">
      <DirectChatArea
        conversationData={conversationData}
        recipientUser={conversationUser}
        currentUser={currentUser}
      />

      <Sidebar conversationUsers={userConversatinos} />
    </div>
  );
};

export default ChatPage;
