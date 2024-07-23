'use client'

import './Group.css'

import { useEffect } from "react";
import { ChatArea } from '@/components/chat/group/ChatArea/ChatArea';
import type { Group } from '@/utils/interfaces';
import type { GroupProps } from "@/utils/interfaces";
import { useGroupDataContext } from '@/contexts/GroupDataContext';


const Group: React.FC<GroupProps> = ({ params }) => {  
    const { getGroupData, selectedChatChannelId } = useGroupDataContext();

 useEffect(() => {
   getGroupData(params);
 }, [selectedChatChannelId]);


  return (
 
      <ChatArea
        selectedChatChannelId={selectedChatChannelId || ""}
        groupId={params?.groupId || ""}
      />

   
  );
};


export default Group;