"use client";

import "./Group.css";
import React, { useEffect, useState } from "react";
import { getGroupById } from "@/services/group/group.service";
import { ChatArea } from "@/components/chat/group/ChatArea/ChatArea";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import type { GroupProps } from "@/utils/interfaces";
import { useQuery } from "@tanstack/react-query";

const Group: React.FC<GroupProps> = ({ params }) => {
  const [selectedChatChannelId, setSelectedChatChannelId] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["myGroup", params.groupId],
    queryFn: () => getGroupById(params.groupId),
  });

  useEffect(() => {
    if (data) {
      setSelectedChatChannelId(data.channels[0].id);
    }
  }, [data]);

  if (isError) {
    return <div>Error loading data.</div>;
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-zinc-800">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="discord-server">
      <ChatArea
        selectedChatChannelId={selectedChatChannelId || ""}
        groupId={data?.id || ""}
      />
      <Sidebar
        groupId={data?.id}
        name={data?.name}
        channels={data?.channels}
        members={data?.members}
        setSelectedChatChannelId={setSelectedChatChannelId}
        selectedChatChannelId={selectedChatChannelId || ""}
      />
    </div>
  );
};

export default Group;
