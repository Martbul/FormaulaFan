"use client"

import { useEffect,useState} from "react"; 
import { useAuthContext } from "@/contexts/AuthContext2";

import MyGroupCard from "@/components/chat/myGroups/MyGroupsCard";

import { getGroupByUserEmail } from "@/services/group/group.service";

import type { Group } from "@/utils/interfaces";
import { getConversationsByUserEmail } from "@/services/conversation/conversation.service";

 const MyGroups = () =>{
 const FAKEONLINEMEMBERS = 69
   const { user } = useAuthContext();
   const [userGroups, setUserGroups] = useState<Group[]>([]);
   const [loading, setLoading] = useState(true); 

   useEffect(() => {
       //! явно компонента зарежда няколко пъти и първия път user е undefined  и затова не бацаше
       const getUserGroupsAndConversations = async () => {
         try {
           if (!user || !user.email) {
             console.error("User or user email is not defined");
             return;
           }

           const groups = await getGroupByUserEmail(user.email);
           if (!groups) {
             console.log("The user is not a member of any group");
           } else {
             setUserGroups(groups);
           }

         
         } catch (error) {
           console.error("Error fetching user groups:", error);
         } finally {
           setLoading(false);
         }
     };
     
    
     getUserGroupsAndConversations();
     //! компонента се рендърва като user-a е зареден
     }, [user]);


     if (loading) {
       return <div>Loading...</div>;
     }


   return (
     
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

      
     
   );
 }


export default MyGroups;