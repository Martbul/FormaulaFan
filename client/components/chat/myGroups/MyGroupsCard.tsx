import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from "next/link";
import './MyGroupsCard.css'
import { OnlineIcon,GroupMembersIcon,GroupDefaultIcon } from "@/utils/svgIcons";
const MyGroupCard: React.FC<{groupId: string, groupName:string, groupImage:string, groupMembersCount:number, groupOnlineMembers:number}> = ({
  groupId,
  groupName,
  groupImage,
  groupMembersCount,
  groupOnlineMembers,
}) => {
  return (
    <Link href={`/chat/mygroup/${groupId}`}>
      <Card
        className="w-full max-w-md m-5 group"
        style={{ backgroundColor: "#1e1f22" }}
      >
        <CardHeader className="flex items-center gap-4">
         <GroupDefaultIcon className="w-24 h-24"/>
          <div className="space-y-1">
            <CardTitle style={{ color: "#ebedf0" }}>{groupName}</CardTitle>
            {/* <CardDescription className="flex justify-center text-muted-foreground">
                  Gaming community
                </CardDescription> */}
          </div>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
           <GroupMembersIcon className="w-4 h-4" />
              <span className="text-muted-foreground">
                {groupMembersCount} members
              </span>
            </div>
            <div className="flex items-center gap-2">
              <OnlineIcon className="w-4 h-4"/>
              <span className="text-muted-foreground">4 online</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default MyGroupCard