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
import { AnimatedCircleIcon } from "@/utils/svgIcons";
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import type { User } from "@/utils/interfaces";
import Link from "next/link";


const JoinGroupModal:React.FC<{groupName:string, user:User, id:string}> = ({groupName, user, id}) => {
  const router = useRouter();
    const [loading, setLoading] = useState(false);
     const { toast } = useToast()
const dialogClose = () => {
  document.getElementById('closeDialog')?.click();
};
  const showToast = () => {
      toast({
        variant: "bg-red-700",
        title: "You must have an account to join a group",
        // description: "There was a problem with your request.",
        action: <ToastAction className="border-black bg-black text-white hover:bg-zinc-800" altText="Sign Up!">
          <Link href="/signup">Sign Up!</Link>
          </ToastAction>,
      });
  };
  const handleUserJoinGroup = async () => {
        if (user.email === undefined) {
         dialogClose()
          showToast();

      return;
    }
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