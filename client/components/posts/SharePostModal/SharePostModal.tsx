"use client";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
  TwitterShareButton,
  TwitterIcon,
  ViberIcon,
  ViberShareButton,
} from "react-share";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from "react";

const SharePostModal = ({ postId }) => {
  //! CHANGE IN PRODUCTION
  const url = `http://localhost:3000/posts/${postId}`;

  const handleCopy = () => {
    const link = document.getElementById("link") as HTMLInputElement;
    if (link) {
      navigator.clipboard.writeText(link.value);
    }
  };
  return (
    <DialogContent className="remove-selecting-text border-none bg-[#393a3f] sm:max-w-[425px]">
      <DialogHeader className="mb-4">
        <div>
          <DialogTitle className="bg-[ebedf0] text-neutral-200">
            Share Post
          </DialogTitle>
        </div>
      </DialogHeader>
      <div className="flex w-full flex-col gap-6">
        <div className="flex w-full flex-row justify-between gap-1 rounded-xl">
          <FacebookShareButton url={url} title="Facebook">
            <FacebookIcon className="rounded-full" size={40} />
          </FacebookShareButton>
          <RedditShareButton url={url}>
            <RedditIcon className="rounded-full" size={40} />
          </RedditShareButton>
          <EmailShareButton url={url}>
            <EmailIcon className="rounded-full" size={40} />
          </EmailShareButton>
          <FacebookShareButton url={url}>
            <FacebookIcon className="rounded-full" size={40} />
          </FacebookShareButton>
          <TwitterShareButton url={url}>
            <TwitterIcon className="rounded-full" size={40} />
          </TwitterShareButton>
          <ViberShareButton url={url}>
            <ViberIcon className="rounded-full" size={40} />
          </ViberShareButton>
        </div>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input
              className="border-none bg-[#2c2d30] text-[#ebedf0] outline-none"
              id="link"
              defaultValue={url}
              readOnly
            />
          </div>
          <Button type="submit" size="sm" className="px-3" onClick={handleCopy}>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </DialogContent>
  );
};

export default SharePostModal;
