import { useState } from "react";
import Image from "next/image";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/contexts/AuthContext2";
import { startDirectConversation } from "@/services/conversation/conversation.service";
import type { Member } from "@/utils/interfaces";
import { ArrowDownIcon, ArrowRightIcon, InviteIcon } from "@/utils/svgIcons";

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

  const handleCopy = () => {
    const link = document.getElementById("link") as HTMLInputElement;
    if (link) {
      navigator.clipboard.writeText(link.value);
    }
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
        <DialogContent className="sm:max-w-md bg-[#393a3f] border-none">
          <DialogHeader>
            <DialogTitle className="text-[#ebedf0]">Invite Link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to join this group
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="flex-1 grid gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                className="bg-[#2c2d30] border-none text-[#ebedf0] outline-none"
                id="link"
                defaultValue="https://ui.shadcn.com/docs/installation"
                readOnly
              />
            </div>
            <Button
              type="submit"
              size="sm"
              className="px-3"
              onClick={handleCopy}
            >
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="bg-[#2f2f2f] border-none text-[#ebedf0] outline-none"
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
