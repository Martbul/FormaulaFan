import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";

export const Sidebar = ({
  groupId,
  name,
  channels,
  members,
  setSelectedChatChannelId,
  selectedChatChannelId,
}) => {
  return (
    <div className="bg-neutral-900">
      <div className="w-52 bg-zinc-950 p-2.5 border-b-2 border-black hover:bg-gray-600">
        <div className="p-1.5 text-gray-400 cursor-pointer">
          {name && <p className="select-none">{name}</p>}
          {/* {friends && <p className="select-none">Friends</p>} */}
        </div>
      </div>
      <div className="rigthSide">
        {channels && (
          <ChannelsList
            channels={channels}
            groupId={groupId}
            setSelectedChatChannelId={setSelectedChatChannelId}
            selectedChatChannelId={selectedChatChannelId}
          />
        )}
        {members && <MembersList members={members} />}
        {/* {friends && <FriendsList friends={friends} />} */}
      </div>
    </div>
  );
};
