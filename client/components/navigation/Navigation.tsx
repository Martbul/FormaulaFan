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
  SettingsIcon,
  SettingsIconActive,
  GuestProfileIcon,
} from "@/utils/svgIcons";
import Link from "next/link";
import Image from "next/image";
import UserOptionsMenu from "./UserOptionsMenu/UserOptionsMenu";

import { useAuthContext } from "@/contexts/AuthContext2";

import images from "../../constants/images";


const Navigation = () => {
  const { user, setUser } = useAuthContext();
  const pathname = usePathname();

  const getMenuItemClass = (path:string) => {
    if (pathname.includes(path)) {
      return "font-bold text-white";
    } else {
      return "font-bold text-gray-400";
    }
  };

  const getMenuItemActiveImage = (path:string) => pathname.includes(path);

  return (
   
    <div className="flex flex-col items-center h-screen bg-zinc-950 w-60">
      <div className="flex flex-col items-center w-full">
        <div className="flex items-center py-3 mb-5 cursor-pointer">
          <Link href="/">
            <Image src={images.logo} alt="logo" className="w-24 h-16 mr-2" />
          </Link>
        </div>

        <Link className="flex items-center p-4 mb-5 cursor-pointer transition-colors duration-300" href="/posts">
          <div className="mr-5">
            {getMenuItemActiveImage("/posts") ? (
              <HomeIconActive className="w-10 h-10" />
            ) : (
              <HomeIcon className="w-10 h-10" />
            )}
          </div>
          <div className={getMenuItemClass("/posts")}>
            <p className="text-lg">Home</p>
          </div>
        </Link>

        <Link className="flex items-center p-3 mb-5 cursor-pointer transition-colors duration-300" href="/groups">
          <div className="mr-4">
            {getMenuItemActiveImage("/groups") ? (
              <GroupsIconActive className="w-10 h-10" />
            ) : (
              <GroupsIcon className="w-10 h-10" />
            )}
          </div>
          <div className={getMenuItemClass("/groups")}>
            <p className="text-lg">Groups</p>
          </div>
        </Link>

        <Link className="flex items-center p-3 mb-5 cursor-pointer transition-colors duration-300" href="/alerts">
          <div className="mr-4">
            {getMenuItemActiveImage("/alerts") ? (
              <AlertIconActive className="w-10 h-10" />
            ) : (
              <AlertIcon className="w-10 h-10" />
            )}
          </div>
          <div className={getMenuItemClass("/alerts")}>
            <p className="text-lg">Alerts</p>
          </div>
        </Link>

        <Link className="flex items-center p-3 mb-5 cursor-pointer transition-colors duration-300" href="/chat/mygroups">
          <div className="mr-4">
            {getMenuItemActiveImage("/chat/mygroups") ? (
              <ChatIconActive className="w-10 h-10" />
            ) : (
              <ChatIcon className="w-10 h-10" />
            )}
          </div>
          <div className={getMenuItemClass("/chat/mygroups")}>
            <p className="text-lg">Chat</p>
          </div>
        </Link>

        <Link className="flex items-center p-3 mb-5 cursor-pointer transition-colors duration-300" href="/group1">
          <div className="mr-4">
            {getMenuItemActiveImage("/group1") ? (
              <BookmarksIconActive className="w-10 h-10" />
            ) : (
              <BookmarksIcon className="w-10 h-10" />
            )}
          </div>
          <div className={getMenuItemClass("/group1")}>
            <p className="text-lg">Bookmarks</p>
          </div>
        </Link>

        <Link className="flex items-center p-3 mb-5 cursor-pointer transition-colors duration-300" href="/settings">
          <div className="mr-4">
            {getMenuItemActiveImage("/settings") ? (
              <SettingsIconActive className="w-10 h-10" />
            ) : (
              <SettingsIcon className="w-10 h-10" />
            )}
          </div>
          <div className={getMenuItemClass("/settings")}>
            <p className="text-lg">Settings</p>
          </div>
        </Link>
      </div>

      {user && user.username === "Guest" && (
        <div className="w-full mt-auto">
          <Link href="/signin">
            <div className="flex items-center p-4">
              <GuestProfileIcon className="w-12 h-12" />
              <div className="ml-3">
                <div className="text-gray-500 text-lg">Guest</div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {user && user.username !== "Guest" && <UserOptionsMenu user={user} setUser={setUser} />}
    </div>
  );
};


export default Navigation;

