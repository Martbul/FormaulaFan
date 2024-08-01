"use client";

import { useAuthContext } from "@/contexts/AuthContext2";
import MyGroupCard from "@/components/chat/myGroups/MyGroupsCard";
import { getGroupByUserEmail } from "@/services/group/group.service";
import { getConversationsByUserEmail } from "@/services/conversation/conversation.service";
import { useQuery } from "@tanstack/react-query";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";

const MyGroups = () => {
  const FAKEONLINEMEMBERS = 69;
  const { user } = useAuthContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["myGroups", user?.email],
    queryFn: async () => {
      if (!user || !user.email) {
        throw new Error("User or user email is not defined");
      }
      const userGroups = await getGroupByUserEmail(user.email);
      const userConversations = await getConversationsByUserEmail(user.email);
      return { userGroups, userConversations };
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

 
  const { userGroups, userConversations } = data || {};

  return (
    <div className="flex h-screen remove-selecting-text">
      <div className="flex flex-col flex-1 bg-zinc-800">
        {userGroups && (
          <div className="flex justify-center flex-wrap">
            {userGroups.map((group, index) => (
              <MyGroupCard
                key={index}
                groupId={group.id}
                groupName={group.name}
                groupImage={group.imageUrl}
                groupMembersCount={group.members.length}
                groupOnlineMembers={FAKEONLINEMEMBERS}
              />
            ))}
          </div>
        )}
      </div>

      <Sidebar conversationUsers={userConversations} />
    </div>
  );
};

export default MyGroups;
