'use client'

import Navigation from '@/components/navigation/Navigation';
import '../Group.css'

import { useState, useEffect } from "react";
import { getGroupById } from "@/services/group/group.service";
import { ChatArea } from '@/components/chat/group/ChatArea/ChatArea';
import { Sidebar } from '@/components/chat/group/Sidebar/Sidebar';

interface Group {
  id: any;
  name: any;
  imageUrl: any;
  creator: any;
  members: any;
  channels: any;
}

export default function Group ({ params }:any)  {
  
  
  const [groupData, setGroupData] = useState<Group | null>(null)
  const [error, setError] = useState(null)

  const getGroupData = async () => {
    try {
      const group = await getGroupById(params.groupId);
      console.log('GROUP', group);
      setGroupData(group);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }
  
    
  
  useEffect(()=>{
      getGroupData()
  }, [])


  // useEffect(() => {
  //   console.log("GROUPDATA", groupData);
  // }, [groupData]);

  // if(error){
  //   <p>There was an error: {error}</p>
  // }

  return (
    <div className="discord-server">

      <div className="left">
        <Navigation/>
      </div>
      
      <ChatArea />
      
      <Sidebar 
      name={groupData?.name} 
      />

    </div>
  );
};


