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
import {  useState } from "react";
import { AnimatedCircleIcon } from "@/app/utils/svgIcons";


const JoinGroupModal = ({groupName, user,id}) => {
  const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleUserJoinGroup = async() => {
      setLoading(true)
     const result = await addUserAsAMember(user.email, id);
   
       router.push(`/chat/mygroup/${id}`);
         setLoading(false);
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

            
            

              
              <Button
             type="submit"
                style={{ backgroundColor: "#43434b" }}
                className=" bg-zinc-950 text-white hover:bg-zinc-700 border border-black"
                onClick={handleUserJoinGroup}
              >
                {loading === false ? "Join":  <AnimatedCircleIcon className="h-9 w-9" />}
              </Button>
           
            </DialogFooter>
          </DialogContent>
      )
}

export default JoinGroupModal