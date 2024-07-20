

import { useState } from "react";
import "./MembersList.css";
import Image from "next/image";
import icons from "@/constants/icons";

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
import { useRouter } from 'next/navigation';
import { useWebsocketContext } from "@/contexts/WebsocketContext";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthContext } from "@/contexts/AuthContext2";
import { startDirectConversation } from "@/services/conversation/conversation.service";
export const MembersList = ({ members }: any) => {
    const socket = useWebsocketContext()

  const { user } = useAuthContext();
    const router = useRouter();
  const [membersListVisible, setMembersListVisible] = useState(true);

  const handleStartConversation = async (memberTwoId: string) => {
    const memberOneEmail = user.email;
    const result = await startDirectConversation(memberOneEmail, memberTwoId);
    const conversationId = result.id;
    // const userOne = result.userOne;
    // const userTwo = result.userTwo;
    if (!result) {
      console.log("Error starting a conversation");
    }
   
       
      // const queryString = `?userOne=${encodeURIComponent(
      //   JSON.stringify(userOne)
      // )}&userTwo=${encodeURIComponent(JSON.stringify(userTwo))}`;
      // router.push(`/chat/direct/${conversationId}${queryString}`);
      router.push(`/chat/direct/${conversationId}`);
  };

  const handleCopy = () => {
    const link = document.getElementById("link");
    if (link) {
      navigator.clipboard.writeText(link.value);
    }
  };
  return (
    <>
      <Dialog>
        <div className="members-list remove-selecting-text">
          <div className="text-channels-header">
            <div className="channel-header-leftSide">
              <div className="arrows">
                <div
                  className="next-arrow"
                  onClick={() => setMembersListVisible(!membersListVisible)}
                >
                  {membersListVisible === false && (
                    <Image
                      src={icons.nextArrow}
                      alt=""
                      className="channel-arrow-down remove-selecting-text"
                    />
                  )}
                </div>
                <div
                  className="down-arrow"
                  onClick={() => setMembersListVisible(!membersListVisible)}
                >
                  {membersListVisible === true && (
                    <Image
                      src={icons.arrowDown}
                      alt=""
                      className="channel-image remove-selecting-text"
                    />
                  )}
                </div>
              </div>

              <p
                className="remove-selecting-text"
                onClick={() => setMembersListVisible(!membersListVisible)}
              >
                MEMBERS
              </p>
            </div>

            <DialogTrigger asChild>
              <div className="channel-header-rightSide">
                <Image
                  src={icons.invitation}
                  alt=""
                  className="channel-plus remove-selecting-text"
                />
              </div>
            </DialogTrigger>
          </div>

          {membersListVisible === true && (
            <>
              {members &&
                members.map((member, index) => (
                  <div  key={index} className="flex  items-center">
                 <Image
                
                  src={user.picture}
                  alt="pic"
                  className="w-10 h-10"
                  width={50} 
                  height={50} 
                />           

                    <div
                     
                      className="member"
                      onClick={() => handleStartConversation(member.user.id)}
                    >
                      {member.user.username}
                    </div>
                    {/* {onlineUsers && (<p>{onlineUsers[0]}</p>)} */}
                  </div>
                ))}
            </>
          )}
        </div>
        <DialogContent
          className="sm:max-w-md"
          style={{ backgroundColor: "#393a3f", border: "none" }}
        >
          <DialogHeader>
            <DialogTitle style={{ color: "#ebedf0" }}>Invite Link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to join this group
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                style={{
                  backgroundColor: "#2c2d30",
                  border: "none",
                  color: "#ebedf0",
                  outline: "none",
                }}
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
                style={{
                  backgroundColor: "#2f2f2f",
                  border: "none",
                  color: "#ebedf0",
                  outline: "none",
                }}
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
