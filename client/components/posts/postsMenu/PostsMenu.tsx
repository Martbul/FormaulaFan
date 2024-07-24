import React from "react";
import { Dialog, DialogTrigger,} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import dynamic from 'next/dynamic'
import { WriteIcon } from "@/utils/svgIcons";


import "./PostsMenu.css";

const DynamicCreatePostModal = dynamic(() => import("../../posts/CreatePostModal/CreatePostModal"), {
  ssr:false
})


export const PostsMenu = () => {
  return (
    <div className="post-menu-layout remove-selecting-text">
      <Dialog>
        <div className="create-post">
          <DialogTrigger asChild>
            <WriteIcon className="w-8 h-8" />
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
          <div className="flex items-center w-full max-w-md mx-auto">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search Twitter"
                className="bg-[#f5f8fa] border-none rounded-full pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:bg-muted"
              ></Button>
            </div>
          </div>
        </div>
        <DynamicCreatePostModal />
      </Dialog>
    </div>
  );
};
