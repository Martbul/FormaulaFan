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
      <div className="flex h-screen items-center justify-center bg-zinc-800">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data.</div>;
  }

  const { userGroups, userConversations } = data || {};

  return (
    <div className="remove-selecting-text flex h-screen">
      <div className="flex flex-1 flex-col bg-zinc-800">
        {userGroups && (
          <div className="flex flex-wrap justify-center">
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
