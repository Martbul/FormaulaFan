"use client"

import { useEffect,useState} from "react"; 
import { useAuthContext } from "@/contexts/AuthContext2";
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import MyGroupCard from "@/components/chat/myGroups/MyGroupsCard";

import { getGroupByUserEmail } from "@/services/group/group.service";

import "./MyGroups.css"


 const MyGroups = () =>{
 const FAKEONLINEMEMBERS = 69
   const { user } = useAuthContext();
   const [userGroups, setUserGroups] = useState([]);
   const [loading, setLoading] = useState(true); 

   useEffect(() => {
       //! явно компонента зарежда няколко пъти и първия път user е undefined  и затова не бацаше
       const getUserGroups = async () => {
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

     getUserGroups();
     //! компонента се рендърва като user-a е зареден
     }, [user]);

     useEffect(()=>{
        console.log(userGroups);
     }, [userGroups])

     if (loading) {
       return <div>Loading...</div>;
     }


   return (
     <div className="discord-server">
    

      

<div className="my-groups-area">
  {userGroups && (
    <div className="group-cards-layout">
      {userGroups.map((group, index) => (
        <MyGroupCard 
          key={index} 
          groupId={group.id}
          groupName={group.name} 
          groupImage={group.imageUrl} 
          groupMembers={group.members.length} 
          groupOnlineMembers={FAKEONLINEMEMBERS} 
        />
      ))}
    </div>
  )}
</div>

       <Sidebar />
     </div>
   );
 }


export default MyGroups;