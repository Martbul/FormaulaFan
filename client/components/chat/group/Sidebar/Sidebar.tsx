import FriendsList from "../../myGroups/FriendsList/FriendsList";
import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";
import './Sidebar.css'
export const Sidebar = ({groupId, name,channels,members, friends  }: any) => {
   return (
     <div className="sidebar-layout">
       <div className="chatName-layout">
         <div className="chatName">
          {name && (<p className="remove-selecting-text">{name}</p>)}
          {friends && (<p className="remove-selecting-text">Friends</p>)}
           
         </div>
       </div>
       <div className="rigthSide">
        {channels && (        <ChannelsList channels={channels} groupId={groupId} />)}
      {members && (<MembersList members={members} />)}
      {friends && (<FriendsList friends={friends}/>)}
         
       </div>
     </div>
   );
  
};
