"use client";
import {  useState ,useEffect} from "react";
import type { User } from "@/utils/interfaces";
import { useAuthContext } from "@/contexts/AuthContext2";
import { getConversationsByUserEmail } from "@/services/conversation/conversation.service";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";


export default function SidebarLayout({children}: {children: React.ReactNode}) {
    const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
 
     const [conversationUsers, setConversationUsers] = useState<User[]>([]);

     useEffect(() => {
    const getUserConversations = async () => {
      try {
        if (!user || !user.email) {
          console.log("User or user email is not defined");
          return;
        }

        const conversations = await getConversationsByUserEmail(user.email)
           if (!conversations) {
             console.log("The user has not started any conversations");
           } else {
             setConversationUsers(conversations);
           }
      } catch (error) {
        console.error("Error fetching user groups:", error);
      } finally {
        setLoading(false);
      }
    };
       getUserConversations();
   
       

    
  }, [user]);

  return (
    <section className="flex h-screen" >
        <div className="flex flex-1">{children}</div>
        <Sidebar conversationUsers={conversationUsers} />
    </section>
  );
}
