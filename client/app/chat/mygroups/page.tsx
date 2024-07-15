"use client" 
import { Sidebar } from "@/components/chat/group/Sidebar/Sidebar";
import Navigation from "@/components/navigation/Navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import icons from "@/constants/icons";
import Image  from 'next/image';
import "./MyGroups.css"

 const MyGroups = () =>{

    return (
      <div className="discord-server">
        <div className="left">
          <Navigation />
        </div>

        <div className="my-groups-area">
          <Card
            className="w-full max-w-md m-5"
            style={{ backgroundColor: "#1e1f22" }}
          >
            <CardHeader className="flex items-center gap-4">
              <Image src={icons.groupImage} alt="" className="w-20 h-20" />
              <div className="space-y-1">
                <CardTitle style={{ color: "#ebedf0" }}>
                  Gamer's Nexus
                </CardTitle>
                <CardDescription className="flex justify-center text-muted-foreground">
                  Gaming community
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Image src={icons.groupMembers} alt="" className="w-5 h-5" />
                  <span className="text-muted-foreground">12 members</span>
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
        </div>

        <Sidebar />
      </div>
      //      <div className="discord-server">

      //    <div className="left">
      //      <Navigation/>
      //    </div>

      //    <ChatArea />

      //    <Sidebar
      //    // groupId={groupData?.id}
      //    // name={groupData?.name}
      //    // channels={groupData?.channels}
      //    // members={groupData?.members}
      //    />

      //  </div>
    );
}


export default MyGroups;