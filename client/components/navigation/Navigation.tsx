"use client";

import { usePathname } from "next/navigation";
import {
  HomeIcon,
  HomeIconActive,
  GroupsIcon,
  GroupsIconActive,
  AlertIcon,
  AlertIconActive,
  ChatIcon,
  ChatIconActive,
  BookmarksIcon,
  BookmarksIconActive,
  FanZoneIcon,
  FanZoneIconActive,
  GuestProfileIcon,
  CalendarIcon,
  CalendarIconActive,
} from "@/utils/svgIcons";
import Link from "next/link";
import Image from "next/image";
import UserOptionsMenu from "./UserOptionsMenu/UserOptionsMenu";

import { useAuthContext } from "@/contexts/AuthContext2";

import images from "../../constants/images";

const Navigation = () => {
  const { user, setUser } = useAuthContext();
  const pathname = usePathname();

  const getMenuItemClass = (path: string) => {
    if (pathname.includes(path)) {
      return "font-bold text-white";
    } else {
      return "font-bold text-gray-400";
    }
  };

  const getMenuItemActiveImage = (path: string) => pathname.includes(path);

  return (
    <div className="flex h-screen w-60 flex-col items-center bg-zinc-950">
      <div className="flex w-full flex-col items-center">
        <div className="mb-5 flex cursor-pointer items-center py-3">
          <Link href="/">
            <Image src={images.logo} alt="logo" className="mr-2 h-16 w-24" />
          </Link>
        </div>

        <Link
          className="mb-5 flex cursor-pointer items-center p-4 transition-colors duration-300"
          href="/posts"
        >
          <div className="mr-5">
            {getMenuItemActiveImage("/posts") ? (
              <HomeIconActive className="h-10 w-10" />
            ) : (
              <HomeIcon className="h-10 w-10" />
            )}
          </div>
          <div className={getMenuItemClass("/posts")}>
            <p className="text-lg">Home</p>
          </div>
        </Link>

        <Link
          className="mb-5 flex cursor-pointer items-center p-3 transition-colors duration-300"
          href="/groups"
        >
          <div className="mr-4">
            {getMenuItemActiveImage("/groups") ? (
              <GroupsIconActive className="h-10 w-10" />
            ) : (
              <GroupsIcon className="h-10 w-10" />
            )}
          </div>
          <div className={getMenuItemClass("/groups")}>
            <p className="text-lg">Groups</p>
          </div>
        </Link>

        <Link
          className="mb-5 flex cursor-pointer items-center p-3 transition-colors duration-300"
          href="/alerts"
        >
          <div className="mr-4">
            {getMenuItemActiveImage("/alerts") ? (
              <AlertIconActive className="h-8 w-8" />
            ) : (
              <AlertIcon className="h-8 w-8" />
            )}
          </div>
          <div className={getMenuItemClass("/alerts")}>
            <p className="text-lg">Alerts</p>
          </div>
        </Link>

        <Link
          className="mb-5 flex cursor-pointer items-center p-3"
          href="/chat/mygroups"
        >
          <div className="mr-4">
            {getMenuItemActiveImage("/chat/mygroups") ? (
              <ChatIconActive className="h-10 w-10" />
            ) : (
              <ChatIcon className="h-10 w-10" />
            )}
          </div>
          <div className={getMenuItemClass("/chat/mygroups")}>
            <p className="text-lg">Chat</p>
          </div>
        </Link>

        <Link
          className="mb-5 flex cursor-pointer items-center p-3 transition-colors duration-300"
          href="/saves"
        >
          <div className="mr-4">
            {getMenuItemActiveImage("/saves") ? (
              <BookmarksIconActive className="h-10 w-10" />
            ) : (
              <BookmarksIcon className="h-10 w-10" />
            )}
          </div>
          <div className={getMenuItemClass("/saves")}>
            <p className="text-lg">Saves</p>
          </div>
        </Link>

        <Link
          className="mb-5 flex cursor-pointer items-center p-3 transition-colors duration-300"
          href="/fanzone"
        >
          <div className="mr-4">
            {getMenuItemActiveImage("/fanzone") ? (
              <FanZoneIconActive className="h-10 w-10" />
            ) : (
              <FanZoneIcon className="h-9 w-9" />
            )}
          </div>
          <div className={getMenuItemClass("/fanzone")}>
            <p className="text-lg">Fan Zone</p>
          </div>
        </Link>
        <Link
          className="mb-5 flex cursor-pointer items-center p-3 transition-colors duration-300"
          href="/challenges"
        >
          <div className="mr-4">
            {getMenuItemActiveImage("/challenges") ? (
              <CalendarIconActive className="h-10 w-10" />
            ) : (
              <CalendarIcon className="h-9 w-9" />
            )}
          </div>
          <div className={getMenuItemClass("/challenges")}>
            <p className="text-lg">Challenges</p>
          </div>
        </Link>

        <Link
          className="mb-5 flex cursor-pointer items-center p-3 transition-colors duration-300"
          href="/achievements"
        >
          <div className="mr-4">
            {getMenuItemActiveImage("/achievements") ? (
              <CalendarIconActive className="h-10 w-10" />
            ) : (
              <CalendarIcon className="h-9 w-9" />
            )}
          </div>
          <div className={getMenuItemClass("/achievements")}>
            <p className="text-lg">Achievements</p>
          </div>
        </Link>
      </div>

      {user && user.username === "Guest" && (
        <div className="mt-auto flex w-full justify-center">
          <Link href="/signin">
            <div className="flex items-center p-4">
              <GuestProfileIcon className="h-12 w-12" />
              <div className="ml-3">
                <div className="text-lg text-gray-500">Guest</div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {user && user.username !== "Guest" && (
        <UserOptionsMenu user={user} setUser={setUser} />
      )}
    </div>
  );
};

export default Navigation;
