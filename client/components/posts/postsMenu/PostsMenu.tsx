// "use client";

// import icons from "@/constants/icons";
// import "./PostsMenu.css";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Separator } from "@/components/ui/separator";
// import { Textarea } from "@/components/ui/textarea";
// import { useAuthContext } from "@/contexts/AuthContext2";
// import React, { useRef, useState, useCallback } from "react";
// import { useDropzone } from "react-dropzone";

// export const PostsMenu = () => {
// const onDrop = useCallback((acceptedFiles) => {
//   // Do something with the files
// }, []);
// const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

//   const { user } = useAuthContext();
//   const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
//   const [postText, setPostText] = useState<string>("");
//   const fileInputRef = useRef<HTMLInputElement>(null);

//    const handleButtonClick = () => {
//      if (fileInputRef.current) {
//        fileInputRef.current.click();
//      }
//    };

//    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//      if (event.target.files) {
//        const filesArray = Array.from(event.target.files);
//        setSelectedFiles(filesArray);
//        for (let i = 0; i < filesArray.length; i++) {
//          console.log("Selected file:", filesArray[i].name);
//        }
//      }
//    };

//    const handlePostTextChange = (
//      event: React.ChangeEvent<HTMLTextAreaElement>
//    ) => {
//      setPostText(event.target.value);
//    };

//    const handlePostCreation = () => {
    
//      console.log("Post text:", postText);
//      console.log("Selected files:", selectedFiles);
//    };

//   return (
//     <div className="post-menu-layout remove-selecting-text">
//       <Dialog>
//         <div className="create-post">
//           <DialogTrigger asChild>
//             <Image src={icons.writePost} alt="" />
//           </DialogTrigger>
//         </div>
//         <div className="select-feed">
//           <div className="flex h-5 items-center space-x-4 text-sm">
//             <div className="menu-feed-option">Friends</div>
//             <Separator orientation="vertical" />
//             <div className="menu-feed-option">For You</div>
//             <Separator orientation="vertical" />
//             <div className="menu-feed-option">Following</div>
//           </div>
//         </div>

//         <div className="search-posts">
//           <div className="flex items-center w-full max-w-md mx-auto">
//             <div className="relative w-full">
//               <Input
//                 type="text"
//                 placeholder="Search Twitter"
//                 className="bg-[#f5f8fa] border-none rounded-full pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary w-full"
//               />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:bg-muted"
//               >
//                 <Image src={icons.searchWhite} alt="" className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         <DialogContent
//           className="sm:max-w-[425px] remove-selecting-text"
//           style={{ backgroundColor: "#393a3f", border: "none" }}
//         >
//           <DialogHeader>
//             <div className="profile">
//               <Image src={icons.profile} alt="" />
//               <div>
//                 <DialogTitle style={{ color: "#ebedf0" }} className="username">
//                   {user.username}
//                 </DialogTitle>
//               </div>
//             </div>
//           </DialogHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid w-full gap-1.5">
//               <Label style={{ color: "#ebedf0" }} htmlFor="message">
//                 Share yout thoughts...
//               </Label>
//               <Textarea
//                 className="remove-selecting-text"
//                 placeholder="Type your message here."
//                 id="message"
//                 style={{
//                   backgroundColor: "#2f2f2f",
//                   border: "none",
//                   color: "#ebedf0",
//                 }}
//                 value={postText}
//                 onChange={handlePostTextChange}
//               />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <div className="createPostActions">
//                 <div className="icons">
//                   <div>
//                     <button onClick={handleButtonClick}>
//                        <Image src={icons.image} alt="Add file" />
//                     </button>
//                     <input
//                 type="file"
//                 ref={fileInputRef}
//                 style={{ display: 'none' }}
//                 onChange={handleFileChange}
//                 multiple
//             />
//                   </div>
                 
//                   <Image src={icons.gif} alt="Add GIF" />
//                   <Image src={icons.poll} alt="Add poll" />
//                   <Image src={icons.emoji} alt="Add emoji" />
//                   <Image src={icons.schedule} alt="Schedule" />
//                 </div>
//               </div>
//             </div>
//           </div>
//           <DialogFooter>
//             <Button type="submit" onClick={handlePostCreation} >Post</Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };







//! chatGPT way of uploading and showing upload
"use client";

import icons from "@/constants/icons";
import "./PostsMenu.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useAuthContext } from "@/contexts/AuthContext2";
import React, { useRef, useState } from "react";

export const PostsMenu = () => {
  const { user } = useAuthContext();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [postText, setPostText] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handlePostTextChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setPostText(event.target.value);
  };

  const handlePostCreation = () => {
    console.log("Post text:", postText);
    console.log("Selected files:", selectedFiles);
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

  return (
    <div className="post-menu-layout remove-selecting-text">
      <Dialog>
        <div className="create-post">
          <DialogTrigger asChild>
            <Image src={icons.writePost} alt="Write Post" />
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
              >
                <Image
                  src={icons.searchWhite}
                  alt="Search"
                  className="w-5 h-5"
                />
              </Button>
            </div>
          </div>
        </div>
        <DialogContent
          className="sm:max-w-[425px] remove-selecting-text"
          style={{ backgroundColor: "#393a3f", border: "none" }}
        >
          <DialogHeader>
            <div className="profile">
              <Image src={icons.profile} alt="Profile" />
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
              <Textarea
                className="remove-selecting-text"
                placeholder="Type your message here."
                id="message"
                style={{
                  backgroundColor: "#2f2f2f",
                  border: "none",
                  color: "#ebedf0",
                }}
                value={postText}
                onChange={handlePostTextChange}
              />
            </div>
            <div className="file-preview-container">{renderFilePreview()}</div>
            <div className="grid grid-cols-4 items-center gap-4">
              <div className="createPostActions">
                <div className="icons">
                  <div>
                    <button onClick={handleButtonClick}>
                      <Image src={icons.image} alt="Add file" />
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
                      multiple
                    />
                  </div>
                  <Image src={icons.gif} alt="Add GIF" />
                  <Image src={icons.poll} alt="Add poll" />
                  <Image src={icons.emoji} alt="Add emoji" />
                  <Image src={icons.schedule} alt="Schedule" />
                </div>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handlePostCreation}>
              Post
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
