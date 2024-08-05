"use client";

import React from "react";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import {
  getConversationsByUserEmail,
  getConversationUsersByConvIdAndEmail,
} from "@/services/conversation/conversation.service";
import { useAuthContext } from "@/contexts/AuthContext2";
import { DirectChatArea } from "@/components/chat/directChat/directChatArea/DirectChatArea";
import type { ChatPageProps } from "@/utils/interfaces";
import { useQuery } from "@tanstack/react-query";

const ChatPage: React.FC<ChatPageProps> = ({ params }) => {
  const { user } = useAuthContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["direct", user?.email],
    queryFn: async () => {
      if (!user || !user.email) {
        throw new Error("User or user email is not here...");
      }
      const { conversation, conversationUser, currentUser } =
        await getConversationUsersByConvIdAndEmail(
          params.conversationId,
          user.email,
        );
      const conversations = await getConversationsByUserEmail(user.email);
      return { conversation, conversationUser, currentUser, conversations };
    },
    enabled: !!user?.email,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-zinc-800">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return <div>Error loading data.</div>;
  }

  const { conversation, conversationUser, currentUser, conversations } =
    data || {};

  return (
    <div className="flex h-screen">
      <DirectChatArea
        conversationData={conversation}
        recipientUser={conversationUser}
        currentUser={currentUser}
      />

      <Sidebar conversationUsers={conversations} />
    </div>
  );
};

export default ChatPage;
