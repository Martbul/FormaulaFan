"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";
import "./SearchGroupCard.css";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { addUserAsAMember } from "@/services/group/group.service";

export default function SearchGroupCard({ id, imageUrl, groupName, members }) {
  const { user } = useAuthContext();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGroupClick = () => {
    const isCurrentUserMemberOfClickdGroupBoolArr = members.map(
      (member) => member.user.email === user.email
    );
    
    

    //chack if user is member of the group, if not show modal and ask o join if join -> user is member
    if (isCurrentUserMemberOfClickdGroupBoolArr.includes(true)) {
      router.push(`/chat/mygroup/${id}`);
    } else {
      setIsDialogOpen(true);
    }
  };


    const handleCancel = () => {
      setIsDialogOpen(false);
    };

    const handleUserJoinGroup = async() => {
     const result = await addUserAsAMember(user.email, id);
      setIsDialogOpen(false);
       router.push(`/chat/mygroup/${id}`);
    };

  return (
    <>
      <div className="chatView" onClick={handleGroupClick}>
        <div className="media">
          {/* <Image
            src={imageUrl}
            alt=""
            width={100} 
            height={100}
          /> */}
        </div>
        <div className="text">
          <div className="chatName">
            <p>{groupName}</p>
          </div>
          <div className="participats">
            <p>{members.length}</p>
          </div>
        </div>
      </div>

      {isDialogOpen && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent
            className="sm:max-w-[425px] remove-selecting-text"
            style={{ backgroundColor: "#1e1f22", border: "none" }}
          >
            <DialogHeader>
              <DialogTitle style={{ color: "#ebedf0" }}>
                Are you sure you want to join "{groupName}"
              </DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button type="button" onClick={handleCancel}>
                Cancel
              </Button>
              <Button
                type="submit"
                style={{ backgroundColor: "#43434b" }}
                onClick={handleUserJoinGroup}
              >
                Join
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}  