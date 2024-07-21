import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { addUserAsAMember } from "@/services/group/group.service";
import { useRouter } from "next/navigation";






const JoinGroupModal = ({groupName, user,id}) => {
  const router = useRouter();
  
    const handleUserJoinGroup = async() => {
     const result = await addUserAsAMember(user.email, id);
       router.push(`/chat/mygroup/${id}`);
   };
   

   return (

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
              {/* <Button type="button" onClick={handleCancel}>
                Cancel
              </Button> */}
            
              <Button
                type="submit"
                style={{ backgroundColor: "#43434b" }}
                onClick={handleUserJoinGroup}
              >
                Join
              </Button>
            </DialogFooter>
          </DialogContent>
      )
}

export default JoinGroupModal