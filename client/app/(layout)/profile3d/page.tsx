"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { getUserPofileUtil } from "@/utils/getUserId";
import { useAuthContext } from "@/contexts/AuthContext2";
import { useQuery, useMutation } from "@tanstack/react-query";
import Image from "next/image";
import F1PilotAvatar from "@/components/profile3d/F1PilotAvatar";
import { useForm, Controller } from "react-hook-form";
import {
  update3DAvatar,
  get3dAvatarData,
} from "@/services/profile/profile.service";
import { useTransition, useState } from "react";

type AvatarColorData = {
  suitColor: string;
  helmetColor: string;
  glovesColor: string;
};

export default function Profile() {
  const { user } = useAuthContext();
  const [isPending, startTransition] = useTransition();

  const {
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm<AvatarColorData>({
    defaultValues: {
      suitColor: "",
      helmetColor: "",
      glovesColor: "Red",
    },
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ["profile", user.email],
    queryFn: async () => {
      if (!user || !user.email) {
        throw new Error("User or user email is not here...");
      }
      const userProfile = await getUserPofileUtil(user.email as string);
      const user3dAvatarData = await get3dAvatarData(user.email as string);
      reset({
        suitColor: user3dAvatarData.suitColor,
        helmetColor: user3dAvatarData.helmetColor,
        glovesColor: user3dAvatarData.glovesColor,
      });
      return { userProfile };
    },
  });


  const { userProfile } = data || {};

  const { mutate, error } = useMutation({
    mutationFn: async (data: AvatarColorData) => {
      const { suitColor, helmetColor, glovesColor } = data;
      const response = await update3DAvatar(
        suitColor,
        helmetColor,
        glovesColor,
        user.email,
      );
      return response;
    },
    onSuccess: (response) => {
      reset({
        suitColor: response.suitColor,
        helmetColor: response.helmetColor,
        glovesColor: response.glovesColor,
      });
    },
  });

  const watchedSuitColor = watch("suitColor");
  const watchedHelmetColor = watch("helmetColor");
  const watchedGlovesColor = watch("glovesColor");

  const onSubmit = (data: AvatarColorData) => {
    mutate(data);
  };

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
    <div className="no-scrollbar flex h-screen w-full flex-col bg-neutral-800 text-white sm:overflow-y-auto md:overflow-y-auto lg:flex-row">
      <aside className="mb-4 flex flex-col items-center rounded-xl bg-neutral-800 p-6 lg:mb-0 lg:mr-4 lg:w-1/4">
        <Avatar className="h-24 w-24">
          <Image
            src={userProfile?.picture}
            alt="Profile"
            className="profile-pic mx-auto h-24 w-24 rounded-full bg-[#2c2c2c]"
            width={50}
            height={50}
          />
          <AvatarFallback>AC</AvatarFallback>
        </Avatar>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold">{userProfile?.username}</h3>
          <p className="text-muted-foreground">{userProfile?.bio}</p>
          <div className="mt-4 flex flex-col gap-2">
            <div className="text-2xl font-bold">
              {userProfile?.followedBy.length}{" "}
              <span className="text-sm text-muted-foreground">Followers</span>
            </div>
            <div className="text-2xl font-bold">
              {userProfile?.following.length}{" "}
              <span className="text-sm text-muted-foreground">Following</span>
            </div>
            <div className="text-2xl font-bold">
              3.4K <span className="text-sm text-muted-foreground">Likes</span>
            </div>
            <div className="text-2xl font-bold">
              {userProfile?.posts.length}{" "}
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

      <main className="flex-1 lg:flex lg:flex-col">
        <F1PilotAvatar
          avatarColors={{
            suitColor: watchedSuitColor,
            helmetColor: watchedHelmetColor,
            glovesColor: watchedGlovesColor,
          }}
        />
      </main>

      <div className="h-screen w-64 border-l bg-card p-8">
        <h2 className="mb-6 text-xl font-semibold">Avatar Customization</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6">
            <div>
              <Label htmlFor="suitColor">Suit</Label>

              <Controller
                name="suitColor"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full bg-neutral-600">
                      <SelectValue placeholder="Select Suit" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 text-neutral-200">
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Pink">Pink</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label htmlFor="helmetColor">Helmet</Label>
              <Controller
                name="helmetColor"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full bg-neutral-600">
                      <SelectValue placeholder="Select Helmet Color" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 text-neutral-200">
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Pink">Pink</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
            <div>
              <Label htmlFor="glovesColor">Gloves</Label>
              <Controller
                name="glovesColor"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select value={value} onValueChange={onChange}>
                    <SelectTrigger className="w-full bg-neutral-600">
                      <SelectValue placeholder="Select Gloves Type" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 text-neutral-200">
                      <SelectItem value="Red">Red</SelectItem>
                      <SelectItem value="Green">Green</SelectItem>
                      <SelectItem value="Blue">Blue</SelectItem>
                      <SelectItem value="White">White</SelectItem>
                      <SelectItem value="Black">Black</SelectItem>
                      <SelectItem value="Pink">Pink</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
            </div>
          </div>
          <Button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600">
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
