import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/AuthContext2";
import { startDirectConversation } from "@/services/conversation/conversation.service";
import type { Member } from "@/utils/interfaces";
import { ArrowDownIcon, ArrowRightIcon, InviteIcon } from "@/utils/svgIcons";
import dynamic from "next/dynamic";
const DynamicInvitePopover = dynamic(
  () => import("../popovers/InvitePopover/InvitePopover"),
  {
    ssr: true,
  }
);
export const MembersList: React.FC<{ members: Member[] }> = ({ members }) => {
  const { user } = useAuthContext();
  const router = useRouter();
  const [membersListVisible, setMembersListVisible] = useState(true);

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
    <>
      <Dialog>
        <div className="flex flex-col gap-[1em] w-[200px] bg-[#212121] p-2.5 remove-selecting-text">
          <div className="flex justify-between items-center text-[#87898b] text-xs">
            <div className="flex items-center">
              <div className="flex items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => setMembersListVisible(!membersListVisible)}
                >
                  {membersListVisible === false && (
                    <ArrowRightIcon className="w-3 h-3" />
                  )}
                  {membersListVisible === true && (
                    <ArrowDownIcon className="w-3 h-3" />
                  )}
                </div>
              </div>
              <p
                className="cursor-pointer ml-2"
                onClick={() => setMembersListVisible(!membersListVisible)}
              >
                MEMBERS
              </p>
            </div>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <InviteIcon className="w-5 h-5" />
              </div>
            </DialogTrigger>
          </div>

          {membersListVisible && (
            <div>
              {members &&
                members.map((member, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <Image
                      src={user.picture}
                      alt="pic"
                      className="w-10 h-10"
                      width={50}
                      height={50}
                    />
                    <div
                      className="p-[5px] text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2"
                      onClick={() => handleStartConversation(member.user.id)}
                    >
                      {member.user.username}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
        <DynamicInvitePopover />
      </Dialog>
    </>
  );
};
