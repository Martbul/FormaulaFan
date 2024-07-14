import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";
import './Sidebar.css'
export const Sidebar = ({groupId, name,channels,  }: any) => {
   return (
     <div className="sidebar-layout">
       <div className="chatName-layout">
         <div className="chatName">
           <p className="remove-selecting-text">{name}</p>
         </div>
       </div>
       <div className="rigthSide">
         <ChannelsList channels={channels} groupId={groupId} />
         {/* //! za da vzemesh channel list na daden grupa ti trqbva neinoto id
         //! ili vmesto da vzima id-to na grupata movesh ot grphql-a da vzemesh direktno servarite na grupata(spestqva[ 1 zaqvka kym bazata danni]) */}
         <MembersList />
       </div>
     </div>
   );
  
};
