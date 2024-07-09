import "./Navigation.css";
import icons from "../../constants/icons";
import images from "../../constants/images";
import Link from "next/link";
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navigation = () => {
  return (
    <div className="menu">
      <div className="menuAllItems">
        <div className="menuItem">
          <Link className="media" href="/">
            <Image src={images.logo} alt="logo" className="logoImage" />
          </Link>
        </div>

        <Link className="menuItem" href="/">
          <div className="menuItemImage">
            <Image src={icons.home} alt="" />
          </div>
          <div className="menuItemText">
            <p>Home</p>
          </div>
        </Link>

        <Link className="menuItem" href="/groups">
          <div className="menuItemImage">
            <Image src={icons.glass} alt="" />
          </div>
          <div className="menuItemText">
            <p>Groups</p>
          </div>
        </Link>

        <Link className="menuItem" href="/posts">
          <div className="menuItemImage">
            <Image src={icons.blog} alt="" />
          </div>
          <div className="menuItemText">
            <p>Posts</p>
          </div>
        </Link>
        <Link className="menuItem" href="/notifications">
          <div className="menuItemImage">
            <Image src={icons.bell} alt="" />
          </div>
          <div className="menuItemText">
            <p>Notifications</p>
          </div>
        </Link>

        <Link className="menuItem" href="/group1">
          <div className="menuItemImage">
            <Image src={icons.group} alt="" />
          </div>
          <div className="menuItemText">
            <p>Chat</p>
          </div>
        </Link>

        <Link className="menuItem" href="/bookmarks">
          <div className="menuItemImage">
            <Image src={icons.bookmark} alt="" />
          </div>
          <div className="menuItemText">
            <p>Bookmarks</p>
          </div>
        </Link>

        <Link className="menuItem" href="/settings">
          <div className="menuItemImage">
            <Image src={icons.settings} alt="" />
          </div>
          <div className="menuItemText">
            <p>Settings</p>
          </div>
        </Link>
      </div>
      <div className="profile-bottom">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="profile">
              <Image src={icons.profile} alt="" />
              <div>
                <div className="name">Martin</div>
                <div className="username">Kovachki</div>
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Link href="/profile">Profile</Link></DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            
            <DropdownMenuItem>Log Out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu></DropdownMenu>
      </div>
    </div>
  );
};

export default Navigation;
