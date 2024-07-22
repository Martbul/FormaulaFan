"use client";

import Navigation from "@/components/navigation/Navigation";
import { useEffect, useState } from "react";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import "./DirectConversation.css";
import { getConversationUsersByConvIdAndEmail } from "@/services/conversation/conversation.service";
import { useAuthContext } from "@/contexts/AuthContext2";
import { DirectChatArea } from "@/components/chat/directChat/directChatArea/DirectChatArea";

const ChatPage = ({ params }: any) => {
  const { user } = useAuthContext();
  const [conversationData, setConversationData] = useState(null);
  const [conversationUser, setConversationUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
      } catch (error) {
        console.error("Error fetching user groups:", error);
      } finally {
        setLoading(false);
      }
    };
    getConversationUsers();
  }, [user]);

  return (
    <div className="discord-server">
      <DirectChatArea
        conversationData={conversationData}
        recipientUser={conversationUser}
        currentUser={currentUser}
      />

      {/* <Sidebar
      // groupId={groupData?.id}
      // name={groupData?.name} 
      // channels={groupData?.channels} 
      // members={groupData?.members} 
      /> */}
      <Sidebar />
    </div>
  );
};

export default ChatPage;
