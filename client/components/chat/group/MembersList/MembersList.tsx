import { useState, memo } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
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
  },
);
const MembersListMemo: React.FC<{ members: Member[] }> = ({ members }) => {
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
        <div className="remove-selecting-text flex w-[200px] flex-col gap-[1em] bg-[#212121] p-2.5">
          <div className="flex items-center justify-between text-xs text-[#87898b]">
            <div className="flex items-center">
              <div className="flex items-center">
                <div
                  className="cursor-pointer"
                  onClick={() => setMembersListVisible(!membersListVisible)}
                >
                  {membersListVisible === false && (
                    <ArrowRightIcon className="h-3 w-3" />
                  )}
                  {membersListVisible === true && (
                    <ArrowDownIcon className="h-3 w-3" />
                  )}
                </div>
              </div>
              <p
                className="ml-2 cursor-pointer"
                onClick={() => setMembersListVisible(!membersListVisible)}
              >
                MEMBERS
              </p>
            </div>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <InviteIcon className="h-5 w-5" />
              </div>
            </DialogTrigger>
          </div>

          {membersListVisible && (
            <div>
              {members &&
                members.map((member, index) => (
                  <div key={index} className="mb-2 flex items-center">
                    <Image
                      src={user.picture}
                      alt="pic"
                      className="h-10 w-10"
                      width={50}
                      height={50}
                    />
                    <div
                      className="ml-2 cursor-pointer p-[5px] text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]"
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
export const MembersList = memo(MembersListMemo);
