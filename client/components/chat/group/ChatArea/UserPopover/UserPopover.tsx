import { CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import {
  PopoverContent,
} from "@/components/ui/popover"
import { startDirectConversation } from "@/services/conversation/conversation.service";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from 'next/navigation';

const UserPopover = ({ chatUser }) => {
     const { user } = useAuthContext();
    const router = useRouter();

   let idMemberTwo;
   if (chatUser.email !== user.email){
       idMemberTwo = chatUser.id
    }

     const handleStartConversation = async (memberTwoId: string) => {
       const memberOneEmail = user.email as string;
       const result = await startDirectConversation(
         memberOneEmail,
         memberTwoId
       );
       const conversationId = result.id;
       if (!result) {
         console.log("Error starting a conversation");
       }

       router.push(`/chat/direct/${conversationId}`);
   };
   
   
   return (
     <PopoverContent className="max-w-[400px] rounded-2xl w-full overflow-hidden border-0 bg-zinc-900">
       <CardHeader className="bg-[#393a3f] py-0 px-4 h-24 relative">
         <div className="absolute translate-y-[40%]">
           <div
             className="rounded-full w-24 h-24 bg-[#446844] text-6xl border-[6px] flex items-center justify-center hover:cursor-pointer hover:opacity-85	"
             onClick={() => handleStartConversation(idMemberTwo)}
           >
             <Avatar className="h-full w-full">
               <AvatarImage src={chatUser.picture} />
               <AvatarFallback>CN</AvatarFallback>
             </Avatar>
           </div>
           <div className="absolute bottom-0 right-0 flex items-center justify-center rounded-full w-7 h-7 bg-muted">
             <div className="rounded-full w-4 h-4 bg-[#00b894]" />
           </div>
         </div>
       </CardHeader>
       <CardContent className="flex flex-col gap-3 p-4 bg-muted text-muted-foreground">
         <div className="flex items-center gap-2">
           <div className="flex items-center gap-2 ml-auto text-[1.2rem] px-2 py-0.5 rounded-lg bg-[#393a3f]">
             <div>🤖</div>
             <div>🧠</div>
             <div>👻</div>
           </div>
         </div>
         <div className="grid gap-4 px-4 py-3 rounded-lg bg-[#393a3f]">
           <div className="grid gap-0.5">
             <div className="text-xl font-bold text-foreground">
               {chatUser.username}
             </div>
           </div>
           <Separator className="text-muted-foreground" />
           <div className="grid gap-0.5">
             <div className="text-xs font-bold uppercase text-foreground">
               About me
             </div>
             <div className="text-sm">
               I&apos;m a software engineer, and I love to code!
             </div>
           </div>
           <div className="grid gap-0.5">
             <div className="text-xs font-bold uppercase text-foreground">
               Member since
             </div>
             <div className="flex flex-wrap items-center gap-4 text-sm">
               <div>👻 Oct 10, 2021</div>
               <div>🤖 Jun 03, 2023</div>
             </div>
           </div>
           <div className="grid gap-0.5">
             <div className="text-xs font-bold uppercase text-foreground">
               Note
             </div>
             <div className="text-sm">This user is a bot. Be careful!</div>
           </div>
         </div>
       </CardContent>
     </PopoverContent>
   );
}

export default UserPopover