import { startDirectConversation } from "@/services/conversation/conversation.service";
import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext2";
import dynamic from "next/dynamic";
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover"

const DynamicGroupQuickOptionsPopover = dynamic(
  () => import("./GroupQuickOptionsPopover/GroupQuickOptionsPopover"),
  {
    ssr: true,
  }
);


export const Sidebar = ({
  groupId,
  name,
  channels,
  members,
  setSelectedChatChannelId,
  selectedChatChannelId,
  conversationUsers,
}) => {
  const { user } = useAuthContext();
  const router = useRouter();
  // const [isMyGroup, setIsMyGroup] = useState(false);
  // const pathname = usePathname(); // Get the current pathname

  const handleStartConversation = async (memberTwoId: string) => {
    const memberOneEmail = user.email as string;
    const result = await startDirectConversation(memberOneEmail, memberTwoId);
    const conversationId = result.id;
    if (!result) {
      console.log("Error starting a conversation");
    }

    router.push(`/chat/direct/${conversationId}`);
  };


  return (
    <div className="bg-neutral-900">
      <Popover>
        <PopoverTrigger>
          
          <div className="w-full bg-zinc-950 p-2.5 border-b-2 border-black hover:bg-gray-600  cursor-pointer">
            <div className="p-1.5 text-gray-400">
              {name && <p className="select-none">{name}</p>}
              {conversationUsers && (
                <p className="select-none">Conversations</p>
              )}
            </div>
          </div>
        </PopoverTrigger>

        <DynamicGroupQuickOptionsPopover   />
      </Popover>
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
        <>
          {conversationUsers &&
            conversationUsers.map((conversationUser, index) => (
              <div key={index} className="flex items-center mb-2">
                <Image
                  src={conversationUser.picture}
                  alt="pic"
                  className="w-10 h-10"
                  width={50}
                  height={50}
                />

                <div
                  className="p-[5px] text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2"
                  onClick={() => handleStartConversation(conversationUser.id)}
                >
                  {conversationUser.username}
                </div>
                {/* {onlineUsers && (<p>{onlineUsers[0]}</p>)} */}
              </div>
            ))}
        </>
      </div>
    </div>
  );
};
