import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import icons from "@/constants/icons";
import Image  from 'next/image';

const MyGroupCard = ({groupImage, groupName, groupMembers, groupOnlineMembers}) =>{
   return (
      <Card
            className="w-full max-w-md m-5"
            style={{ backgroundColor: "#1e1f22" }}
          >
            <CardHeader className="flex items-center gap-4">
              <Image src={icons.groupImage} alt="" className="w-20 h-20" />
              <div className="space-y-1">
                <CardTitle style={{ color: "#ebedf0" }}>
                  {groupName}
                </CardTitle>
                {/* <CardDescription className="flex justify-center text-muted-foreground">
                  Gaming community
                </CardDescription> */}
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={icons.groupMembers} alt="" className="w-5 h-5" />
                  <span className="text-muted-foreground">{groupMembers} members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src={icons.greenOnlineCircle}
                    alt=""
                    className="w-5 h-5"
                  />
                  <span className="text-muted-foreground">4 online</span>
                </div>
              </div>
            </CardContent>
          </Card>
   )
}

export default MyGroupCard