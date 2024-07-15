"use client" 

import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import Navigation from "@/components/navigation/Navigation";
import { useAuthContext } from "@/contexts/AuthContext2";
import "./MyGroups.css"
import MyGroupCard from "@/components/chat/myGroups/MyGroupsCard";
import { useEffect,useState} from "react";
import { getGroupByUserEmail } from "@/services/group/group.service";


//! working here
//! possible problem with user.email
 const MyGroups = () =>{
     const { user } = useAuthContext();
     const [userGroups, setUserGroups] = useState([])

const getUserGroups = async() =>{
  const groups = await getGroupByUserEmail(user.email)
  if(! groups){
    console.log('The user is not member in any group')
  }
  setUserGroups(groups)
   }
   
   useEffect(() =>{
getUserGroups()
   }, [])
   useEffect(() =>{
console.log(userGroups)
   }, [userGroups])
   
    return (
      <div className="discord-server">
        <div className="left">
          <Navigation />
        </div>

        <div className="my-groups-area">
          <MyGroupCard/>
        </div>

        <Sidebar />
      </div>
    );
}


export default MyGroups;