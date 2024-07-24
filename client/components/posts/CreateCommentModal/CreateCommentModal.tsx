"use client";

import React, { useRef, useState } from "react";
import { DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createComment } from "@/services/post/post.service";

import { uploadFileToCloud } from "@/utils/uplaodToFirebase";
import { useAuthContext } from "@/contexts/AuthContext2";

import EmojiPicker from "emoji-picker-react";
import GifPicker from "gif-picker-react";
import Image from "next/image";
import { AddEmojiIcon, AddGifIcon, AddImageIcon } from "@/utils/svgIcons";

const CreatePostModal = ({ postId }) => {
  const { user } = useAuthContext();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [textContent, setTextContent] = useState<string>("");
  const [isEmojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const [isGifPickerOper, setGifPickerOpen] = useState(false);
  const [selectedGifs, setSelectedGifs] = useState([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCommentTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTextContent(event.target.value);
  };

  const handleEmojiPick = (emojiObject) => {
    setTextContent((prevInput) => prevInput + emojiObject.emoji);
    setEmojiPickerOpen(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const renderGifPreview = () => {
    return selectedGifs.map((gif, index) => (
      <div key={index} className="gif-preview">
        <img src={gif.preview.url} alt={gif.description} />
      </div>
    ));
  };

  const handleGifClick = (gif) => {
    console.log("GIF selected:", gif);
    setSelectedGifs((prevGifs) => [...prevGifs, gif]);
    setGifPickerOpen(false);
  };

  const renderFilePreview = () => {
    return selectedFiles.map((file, index) => {
      const url = URL.createObjectURL(file);
      if (file.type.startsWith("image/")) {
        return (
          <img key={index} src={url} alt={file.name} className="file-preview" />
        );
      } else if (file.type.startsWith("video/")) {
        return (
          <video key={index} src={url} controls className="file-preview" />
        );
      } else {
        return (
          <div key={index} className="file-preview">
            {file.name}
          </div>
        );
      }
    });
  };

  const handleCommentCreation = async () => {
    try {
      console.log(selectedFiles);

      const imageContentUrl = await uploadFileToCloud(selectedFiles[0]);

      const newComment = await createComment(
        textContent,
        user.email as string,
        postId,
        imageContentUrl,
        
      );
      if (!newComment) return;

      setSelectedFiles([]);
      setTextContent("");
      setSelectedGifs([]);
    } catch (error) {
      console.error("Error during post creation:", error);
    }
  };

  return (
    <DialogContent
      className="sm:max-w-[425px] remove-selecting-text"
      style={{ backgroundColor: "#393a3f", border: "none" }}
    >
      <DialogHeader>
        <div className="profile">
          <Image
            src={user.picture}
            alt="profilePic"
            className="w-14 h-14"
            width={50}
            height={50}
          />
          <div>
            <DialogTitle style={{ color: "#ebedf0" }} className="username">
              {user.username}
            </DialogTitle>
          </div>
        </div>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid w-full gap-1.5">
          <Label style={{ color: "#ebedf0" }} htmlFor="message">
            Share your thoughts...
          </Label>
          <div
            className=" w-full bg-zinc-800 outline-none text-gray-300 "
            style={{ height: "150px" }}
          >
            <Textarea
              className="remove-selecting-text bg-zinc-800"
              placeholder="Type your message here."
              id="message"
              style={{
                resize: "none",
                border: "none",
                color: "#ebedf0",
              }}
              value={textContent}
              onChange={handleCommentTextChange}
            />

            <div
              className="flex gap-x-6 w-48 h-48 render-giv "
              onClick={() => setSelectedGifs([])}
            >
              {renderGifPreview()}
            </div>
          </div>
        </div>
        <div className="file-preview-container">{renderFilePreview()}</div>

        <div className="grid grid-cols-4 items-center gap-4">
          <div className="createPostActions">
            <div className="icons">
              <div>
                <button onClick={handleButtonClick}>
                  <AddImageIcon className="w-5 h-5" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                  multiple
                />
              </div>
              <AddGifIcon
                className="w-6 h-6"
                onClick={() => {
                  setGifPickerOpen(!isGifPickerOper);
                  setEmojiPickerOpen(false);
                }}
              />
              <AddEmojiIcon
                className="w-8 h-8"
                onClick={() => {
                  setEmojiPickerOpen(!isEmojiPickerOpen);
                  setGifPickerOpen(false);
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <EmojiPicker
            open={isEmojiPickerOpen}
            onEmojiClick={handleEmojiPick}
          />
        </div>

        {isGifPickerOper && (
          <div>
            {/* //! use .env */}
            <GifPicker
              tenorApiKey={"AIzaSyC3m2mH_nYK8C7fWRT9qfXWGPyMPCPYyfE"}
              onGifClick={handleGifClick}
            />
          </div>
        )}
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button
            onClick={handleCommentCreation}
            type="submit"
            variant="secondary"
            style={{
              backgroundColor: "#2f2f2f",
              border: "none",
              color: "#ebedf0",
              outline: "none",
            }}
          >
            Post
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default CreatePostModal;
