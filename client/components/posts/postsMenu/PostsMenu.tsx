import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { WriteIcon } from "@/utils/svgIcons";

import "./PostsMenu.css";

const DynamicCreatePostModal = dynamic(
  () => import("../../posts/CreatePostModal/CreatePostModal"),
  {
    ssr: false,
  },
);

export const PostsMenu = () => {
  return (
    <div className="post-menu-layout remove-selecting-text">
      <Dialog>
        <div className="create-post">
          <DialogTrigger asChild>
            <WriteIcon className="h-8 w-8" />
          </DialogTrigger>
        </div>
        <div className="select-feed">
          <div className="flex h-5 items-center space-x-4 text-sm">
            <div className="menu-feed-option">Friends</div>
            <Separator orientation="vertical" />
            <div className="menu-feed-option">For You</div>
            <Separator orientation="vertical" />
            <div className="menu-feed-option">Following</div>
          </div>
        </div>
        <div className="search-posts">
          <div className="mx-auto flex w-full max-w-md items-center">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search"
                className="w-full rounded-full border-none bg-[#f5f8fa] py-2 pl-4 pr-10 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:bg-muted"
              ></Button>
            </div>
          </div>
        </div>
        <DynamicCreatePostModal />
      </Dialog>
    </div>
  );
};
