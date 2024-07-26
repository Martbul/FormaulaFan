
"use client";

import "./Group.css";

import { useState, useEffect } from "react";
import { getGroupById } from "@/services/group/group.service";
import { ChatArea } from "@/components/chat/group/ChatArea/ChatArea";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import type { Group } from "@/utils/interfaces";
import type { GroupProps } from "@/utils/interfaces";

const Group: React.FC<GroupProps> = ({ params }) => {
  const [groupData, setGroupData] = useState<Group | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedChatChannelId, setSelectedChatChannelId] = useState(null); //! change useState to group > channels > [0].id
   const [loading, setLoading] = useState(true); 

  const getGroupData = async () => {
    try {
      const group = await getGroupById(params.groupId);
      console.log("GROUP", group);
      setGroupData(group);
      setSelectedChatChannelId(group?.channels[0].id);
    } catch (error) {
      console.log(error);
      setError("some error");
     } finally {
         setLoading(false);
       }
  };

  useEffect(() => {
    getGroupData();
  }, []);


      if (loading) {
       return <div className="flex items-center justify-center h-screen bg-zinc-800">
        <div className="loader"></div>
      </div>
     }
  return (
    <div className="discord-server">
      <ChatArea
        selectedChatChannelId={selectedChatChannelId || ""}
        groupId={groupData?.id || ""}
      />

      <Sidebar
        groupId={groupData?.id}
        name={groupData?.name}
        channels={groupData?.channels}
        members={groupData?.members}
        setSelectedChatChannelId={setSelectedChatChannelId}
        selectedChatChannelId={selectedChatChannelId || ""}
      />
    </div>
  );
};


export default Group;