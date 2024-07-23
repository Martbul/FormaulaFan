import { startDirectConversation } from "@/services/conversation/conversation.service";
import { ChannelsList } from "../channelsList/ChannelsList";
import { MembersList } from "../MembersList/MembersList";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useGroupDataContext } from "@/contexts/GroupDataContext";
import { useEffect , useState} from "react";


export const Sidebar = ({
  setSelectedChatChannelId,
  selectedChatChannelId,
  conversationUsers
}) => {
  const { groupData } = useGroupDataContext();
  const { user } = useAuthContext();
  const router = useRouter();
  const [isMyGroup, setIsMyGroup] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const handleStartConversation = async (memberTwoId: string) => {
    const memberOneEmail = user.email as string;
    const result = await startDirectConversation(memberOneEmail, memberTwoId);
    const conversationId = result.id;
    if (!result) {
      console.log("Error starting a conversation");
    }

    router.push(`/chat/direct/${conversationId}`);
  };
  useEffect(() => {
    if (pathname) {
      // Check if the pathname starts with "/chat/mygroup/"
      const urlBool = pathname.startsWith("/chat/mygroup/");
      setIsMyGroup(urlBool);

      // Optionally, you can log the pathname to debug
      console.log("Current Pathname:", pathname);
    }
  }, [pathname]); // Dependency array includes pathname

  useEffect(() => {
    console.log("groupData", groupData);
  }, [groupData]);

  return (
    <div className="bg-neutral-900">
      <div className="w-52 bg-zinc-950 p-2.5 border-b-2 border-black hover:bg-gray-600">
        <div className="p-1.5 text-gray-400 cursor-pointer">
          {isMyGroup && groupData && (
            <p className="select-none">{groupData.name}</p>
          )}
          {conversationUsers && <p className="select-none">Conversations</p>}
        </div>
      </div>
      <div className="rigthSide">
        {isMyGroup && groupData?.channels && (
          <ChannelsList
            channels={groupData.channels}
            groupId={groupData.groupId}
            setSelectedChatChannelId={setSelectedChatChannelId}
            selectedChatChannelId={selectedChatChannelId}
          />
        )}
        {isMyGroup && groupData?.members && (
          <MembersList members={groupData.members} />
        )}
        <>
          {conversationUsers &&
            conversationUsers.map((conversationUser, index) => (
              <div key={index} className="flex items-center">
                <Image
                  src={conversationUser.picture}
                  alt="pic"
                  className="w-10 h-10"
                  width={50}
                  height={50}
                />

                <div
                  className="member"
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
