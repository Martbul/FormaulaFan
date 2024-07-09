import './Group.css'


const ChatArea = () => {
  return (
    <div className="chat-area">
      <div className="other-groups">
        <p>Your Other Groups:</p>
        <div className="group-logo">
          <span>Group 1</span>
        </div>
        <div className="group-logo">
          <span>Group 2</span>
        </div>
        {/* Add more groups as needed */}
      </div>
      <div className="messages">{/* Messages will go here */}</div>
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
      />
    </div>
  );
};



const MembersList = () => {
  return (
    <>
      <div className="rigthSide">
        <div className="chatName">
          <p>ChatName</p>
        </div>
        <div className="text-channels">
          <div className="textChannel">
            <p>TextChannel1</p>
          </div>
          <div className="textChannel">
            <p>TextChannel2</p>
          </div>
          <div className="textChannel">
            <p>TextChannel3</p>
          </div>
        </div>
        <div className="voice-channels">
          <div className="voiceChannel">
            <p>voiceChannel1</p>
          </div>
          <div className="voiceChannel">
            <p>voiceChannel2</p>
          </div>
          <div className="voiceChannel">
            <p>voiceChannel3</p>
          </div>
        </div>
        <div className="members-list">
          <div className="member">User1</div>
          <div className="member">User2</div>
          <div className="member">User3</div>
          {/* Add more members as needed */}
        </div>
      </div>
    </>
  );
};

const Group = () => {
  return (
    <div className="discord-server">
      <div className="left">
        <Navigation />
      </div>

     
      <ChatArea />
      <MembersList />
    </div>
  );
};

export default Group;
// import './Group.css'
// import "./Group.css";
import Navigation from '../../components/navigation/Navigation';

// const ServerList = () => {
//   return (
//     <div className="server-list">
//       <div className="server">S1</div>
//       <div className="server">S2</div>
//       <div className="server">S3</div>
//       {/* Add more servers as needed */}
//     </div>
//   );
// };

// const ChannelList = () => {
//   return (
//     <div className="channel-list">
//       <div className="channel">General</div>
//       <div className="channel">Random</div>
//       <div className="channel">Music</div>
//       {/* Add more channels as needed */}
//     </div>
//   );
// };

// const ChatArea = () => {
//   return (
//     <div className="chat-area">
//       <div className="messages">{/* Messages will go here */}</div>
//       <input
//         type="text"
//         className="message-input"
//         placeholder="Type a message..."
//       />
//     </div>
//   );
// };

// const MembersList = () => {
//   return (
//     <div className="members-list">
//       <div className="member">User1</div>
//       <div className="member">User2</div>
//       <div className="member">User3</div>
//       {/* Add more members as needed */}
//     </div>
//   );
// };

// const Group = () => {
//   return (
//     <div className="discord-server">
//       <ServerList />
//       <ChannelList />
//       <ChatArea />
//       <MembersList />
//     </div>
//   );
// };

// export default Group;
