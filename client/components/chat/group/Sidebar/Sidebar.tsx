import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";
import './Sidebar.css'
export const Sidebar = ({groupId, name,channels,members  }: any) => {
   return (
     <div className="sidebar-layout">
       <div className="chatName-layout">
         <div className="chatName">
           <p className="remove-selecting-text">{name}</p>
         </div>
       </div>
       <div className="rigthSide">
         <ChannelsList channels={channels} groupId={groupId} />
         <MembersList members={members} />
       </div>
     </div>
   );
  
};
