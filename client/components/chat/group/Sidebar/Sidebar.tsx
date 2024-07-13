import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";
import './Sidebar.css'
export const Sidebar = ({ name }: any) => {
   return (
     <div className="sidebar-layout" >
       <div className="chatName-layout">
         <div className="chatName">
           <p>{name}</p>
         </div>
       </div>
         <div className="rigthSide">
        <ChannelsList/>
       <MembersList />
       </div>
     </div>
   );
  
};
