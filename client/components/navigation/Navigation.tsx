"use client";

import "./Navigation.css";
import icons from "../../constants/icons";
import images from "../../constants/images";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthContext } from "@/contexts/AuthContext2";
import { logout } from "@/services/auth/auth.service";
const Navigation = () => {
  const { user, setUser } = useAuthContext();
  const pathname = usePathname();

  const getMenuItemClass = (path) => {
    if (pathname.includes(path)) {
      return "menuItemText isMenuItemActive";
    } else {
      return "menuItemText";
    }
  };

  const getMenuItemActiveImage = (path) => pathname.includes(path);

  return (
    <div className="menu remove-selecting-text">
      <div className="menuAllItems">
        <div className="menuItem">
          <Link className="media" href="/">
            <Image src={images.logo} alt="logo" className="logoImage" />
          </Link>
        </div>

        <Link className="menuItem" href="/posts">
          <div className="menuItemImage ">
            <Image
              src={
                getMenuItemActiveImage("/posts") ? icons.homeActive : icons.home
              }
              alt=""
            />
          </div>
          <div className={getMenuItemClass("/posts")}>
            <p>Home</p>
          </div>
        </Link>

        <Link className="menuItem" href="/groups">
          <div className="menuItemImage">
            <Image
              src={
                getMenuItemActiveImage("/groups")
                  ? icons.searchActive
                  : icons.search
              }
              alt=""
            />
          </div>
          <div className={getMenuItemClass("/groups")}>
            <p>Groups</p>
          </div>
        </Link>

        <Link className="menuItem" href="/alerts">
          <div className="menuItemImage">
            <Image
              src={
                getMenuItemActiveImage("/alerts")
                  ? icons.bellActive
                  : icons.bell
              }
              alt=""
            />
          </div>
          <div className={getMenuItemClass("/alerts")}>
            <p>Alerts</p>
          </div>
        </Link>

        <Link className="menuItem" href="/chat/mygroups">
          <div className="menuItemImage">
            <Image
              src={
                getMenuItemActiveImage("/chat/mygroups")
                  ? icons.groupActive
                  : icons.group
              }
              alt=""
            />
          </div>
          <div className={getMenuItemClass("/chat/mygroup")}>
            <p>Chat</p>
          </div>
        </Link>

        <Link className="menuItem" href="/group1">
          <div className="menuItemImage">
            <Image
              src={
                getMenuItemActiveImage("/group1")
                  ? icons.bookmarkActive
                  : icons.bookmark
              }
              alt=""
            />
          </div>
          <div className={getMenuItemClass("/group1")}>
            <p>Bookmarks</p>
          </div>
        </Link>

        <Link className="menuItem" href="/settings">
          <div className="menuItemImage">
            <Image
              src={
                getMenuItemActiveImage("/settings")
                  ? icons.settingsActive
                  : icons.settings
              }
              alt=""
            />
          </div>
          <div className={getMenuItemClass("/settings")}>
            <p>Settings</p>
          </div>
        </Link>
      </div>

      {user && user.username === "Guest" && (
        <div className="profile-bottom">
          <Link href="/signin">
            <div className="profile">
              <Image src={icons.profile} alt="" />
              <div>
                <div className="username">Guest</div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {user && user.username !== "Guest" && (
        <div className="profile-bottom">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="profile">
                <Image
                  src={user.picture}
                  alt="pic"
                  className="w-12 h-12"
                  width={50}
                  height={50}
                />{" "}
                <div>
                  <div className="username">{user.username}</div>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>

              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuItem onClick={() => logout(setUser)}>
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Navigation;
