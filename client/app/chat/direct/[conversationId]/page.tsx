'use client'

import Navigation from '@/components/navigation/Navigation';
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ChatArea } from '@/components/chat/group/ChatArea/ChatArea';
import { Sidebar } from '@/components/chat/group/Sidebar/Sidebar'
import "./DirectConversation.css";
const ChatPage = () => {

   const searchParams = useSearchParams()
 
  const userOne = searchParams.get('userOne')
  const userTwo = searchParams.get('userTwo')
  const [userOneObject, setUserOneObject] = useState(null);
  const [userTwoObject, setUserTwoObject] = useState(null);

   useEffect(() => {
    
      try {
        const parsedUserOne = JSON.parse(decodeURIComponent(userOne));
        const parsedUserTwo = JSON.parse(decodeURIComponent(userTwo));
        setUserOneObject(parsedUserOne);
        setUserTwoObject(parsedUserTwo);
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    
  },[]);

  if ( !userOneObject || !userTwoObject) {
    return <div>Loading...</div>;
  }

  return (

    <div className="discord-server">

      <div className="left">
        <Navigation/>
      </div>
      
      <ChatArea />
      
      {/* <Sidebar
      // groupId={groupData?.id}
      // name={groupData?.name} 
      // channels={groupData?.channels} 
      // members={groupData?.members} 
      /> */}
      <Sidebar/>

    </div>

    
   //  <div>
     
   //    <p>User One: {userOneObject.username}</p>
   //    <p>User Two: {userTwoObject.username}</p>
   //  </div>
  );
};

export default ChatPage;
