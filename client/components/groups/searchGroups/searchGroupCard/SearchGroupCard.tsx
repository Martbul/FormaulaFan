import Image from "next/image";
import "./SearchGroupCard.css";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useRouter } from "next/navigation";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/toaster";

const DynamicJoinGroupModal = dynamic(
  () => import("../JoinGroupModal/JoinGroupModal"),
  {
    ssr: false,
  },
);

export default function SearchGroupCard({ id, imageUrl, groupName, members }) {
  const { user } = useAuthContext();
  const router = useRouter();

  const isCurrentUserMemberOfClickedGroup = members.some(
    (member) => member.user.email === user.email,
  );

  const handleGroupClick = () => {
    if (isCurrentUserMemberOfClickedGroup) {
      router.push(`/chat/mygroup/${id}`);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="chatView" onClick={handleGroupClick}>
          <div className="media">
            <Image src={imageUrl} alt="" width={100} height={100} />
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
      </DialogTrigger>
      {!isCurrentUserMemberOfClickedGroup && (
        <DynamicJoinGroupModal groupName={groupName} user={user} id={id} />
      )}
      <Toaster className="bg-red-700" />
    </Dialog>
  );
}
