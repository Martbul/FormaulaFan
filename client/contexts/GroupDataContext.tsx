"use client";
import type { Group } from "@/utils/interfaces";
import { getGroupById } from "@/services/group/group.service";


import { createContext, useContext, useState } from "react";

const GroupDataContext = createContext({
groupData:{},
  setSelectedChatChannelId:"",
  selectedChatChannelId:"",
   getGroupData: () => { },
   error: null,
});

export function GroupDataWrapper({ children }: { children: React.ReactNode }) {
   const [groupData, setGroupData] = useState<Group | null>(null);
   const [selectedChatChannelId, setSelectedChatChannelId] = useState(null); 
     const [error, setError] = useState<string | null>(null);

 const getGroupData = async ({ groupId }: { groupId: string }) => {
   try {
     const group = await getGroupById(groupId);
     setGroupData(group);
     setSelectedChatChannelId(group?.channels[0].id ?? null);
   } catch (error) {
     setError("Some error occurred");
   }
 };


   const contextValue = {
    groupData,
    selectedChatChannelId,
    setSelectedChatChannelId,
    getGroupData,
    error,
  };
  return (
    <GroupDataContext.Provider value={contextValue}>{children}</GroupDataContext.Provider>
  );
}


export function useGroupDataContext() {
  return useContext(GroupDataContext);
}