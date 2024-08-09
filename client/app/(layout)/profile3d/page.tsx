"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { getUserPofileUtil } from "@/utils/getUserId";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useQuery } from "@tanstack/react-query";
import type { PostInterface } from "@/utils/interfaces";
import Image from "next/image";
import Post from "@/components/post/Post";
import F1PilotAvatar from "@/components/profile3d/F1PilotAvatar";

export default function Profile() {
  const { user } = useAuthContext();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile", user.email],
    queryFn: () => getUserPofileUtil(user.email as string),
  });
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-zinc-800">
        <div className="loader"></div>
      </div>
    );
  }
  if (isError) {
    return <div>Error loading data.</div>;
  }
  return (
    <div className="no-scrollbar flex h-screen w-full flex-col bg-[#1e1f22] text-white sm:overflow-y-auto md:overflow-y-auto lg:flex-row">
      <aside className="mb-4 flex flex-col items-center rounded-xl bg-neutral-800 p-6 lg:mb-0 lg:mr-4 lg:w-1/4">
        <Avatar className="h-24 w-24">
          {/* <AvatarImage src="/placeholder-user.jpg" alt="@user" /> */}
          <Image
            src={data?.picture}
            alt="Profile"
            className="profile-pic mx-auto h-24 w-24 rounded-full bg-[#2c2c2c]"
            width={50}
            height={50}
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">{data?.username}</h3>
          <p className="text-muted-foreground">{data?.bio}</p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="text-2xl font-bold">
              {data?.followedBy.length}{" "}
              <span className="text-sm text-muted-foreground">Followers</span>
            </div>
            <div className="text-2xl font-bold">
              {data?.following.length}{" "}
              <span className="text-sm text-muted-foreground">Following</span>
            </div>
            <div className="text-2xl font-bold">
              3.4K <span className="text-sm text-muted-foreground">Likes</span>
            </div>
            <div className="text-2xl font-bold">
              {data?.posts.length}{" "}
              <span className="text-sm text-muted-foreground">Posts</span>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Button className="flex-1 bg-zinc-900 hover:bg-zinc-800">
              Follow
            </Button>
            <Button className="flex-1 bg-zinc-900 hover:bg-zinc-800">
              Send Message
            </Button>
          </div>
        </div>
      </aside>

      <main className="flex-1 p-4 lg:flex lg:flex-col lg:gap-4 lg:p-6">
   <F1PilotAvatar />
      </main>

      <aside className="no-scrollbar mb-4 h-[600px] overflow-auto rounded-lg bg-neutral-900 p-6 lg:mb-0 lg:ml-4 lg:h-screen lg:w-1/4">
        <h3 className="mb-4 text-xl font-bold">Groups</h3>
        <div className="mb-4 grid gap-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Design Collective</h4>
                <p className="text-sm text-muted-foreground">120 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A group for designers to share ideas and collaborate on
                projects.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Tech Enthusiasts</h4>
                <p className="text-sm text-muted-foreground">350 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A community for tech lovers to discuss the latest trends and
                innovations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Book Club</h4>
                <p className="text-sm text-muted-foreground">80 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A group for book enthusiasts to discuss and share their favorite
                reads.
              </p>
            </CardContent>
          </Card>
        </div>
        <h3 className="mb-4 mt-8 text-xl font-bold">Chats</h3>
        <div className="grid gap-4">
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Design Team</h4>
                <p className="text-sm text-muted-foreground">12 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A chat for the design team to discuss projects and share ideas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" alt="@user" />
                <AvatarFallback>AC</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold">Marketing Team</h4>
                <p className="text-sm text-muted-foreground">20 members</p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A chat for the marketing team to discuss campaigns and
                strategies.
              </p>
            </CardContent>
          </Card>
        </div>
      </aside>
    </div>
  );
}
