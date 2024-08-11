import { startDirectConversation } from "@/services/conversation/conversation.service";
import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext2";
import dynamic from "next/dynamic";
import { Popover, PopoverTrigger } from "@/components/ui/popover";
import { memo } from "react"; // Import memo

const DynamicGroupQuickOptionsPopover = dynamic(
  () => import("./GroupQuickOptionsPopover/GroupQuickOptionsPopover"),
  {
    ssr: true,
  },
);

//! FIX LATER
type SidebarProps = {
  groupId?: any;
  name?: any;
  channels?: any;
  members?: any;
  setSelectedChatChannelId?: any;
  selectedChatChannelId?: any;
  conversationUsers?: any;
};

const SidebarMemo: React.FC<SidebarProps> = ({
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
          <div className="w-full cursor-pointer border-b-2 border-black bg-zinc-950 p-2.5 hover:bg-gray-600">
            <div className="p-1.5 text-gray-400">
              {name && <p className="select-none">{name}</p>}
              {conversationUsers && (
                <p className="select-none">Conversations</p>
              )}
            </div>
          </div>
        </PopoverTrigger>

        <DynamicGroupQuickOptionsPopover />
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
              <div key={index} className="mb-2 flex items-center">
                <Image
                  src={conversationUser.picture}
                  alt="pic"
                  className="h-10 w-10"
                  width={50}
                  height={50}
                />

                <div
                  className="ml-2 cursor-pointer p-[5px] text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]"
                  onClick={() => handleStartConversation(conversationUser.id)}
                >
                  {conversationUser.username}
                </div>
              </div>
            ))}
        </>
      </div>
    </div>
  );
};

export const Sidebar = memo(SidebarMemo); // Memoize and export the component using the same name
