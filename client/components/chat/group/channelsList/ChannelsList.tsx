import icons from "@/constants/icons";
import Image from "next/image";
import "./ChannelsList.css";
import { ChangeEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { Switch } from "@/components/ui/switch"
import { createChannel } from "@/services/channel/channel.service";

export const ChannelsList = () => {
  const [textChannelsVisible, setTextChannelsVisible] = useState(true);
   const [voiceChannelsVisible, setVoiceChannelsVisible] = useState(true);
   const [selectedChannel, setSelectedChannel] = useState("text");
   const [newChannelName, setNewChannelName] = useState("");
   const [isPrivateChannel, setIsPrivateChannel] = useState(false);
    const [error, setError] = useState(null);
   
      const handleSelection = (event:any) => {
        setSelectedChannel(event.target.value);
   };
   

   const handleChange = (
     e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
     const { id, value } = e.target;
     setNewChannelName(() => ({
       [id]: value,
     }));
   };


      //! implement better error handling and validation
      //! also validation in the server is needed
      const handleChannelCreation = async() =>{
         if(!selectedChannel || !newChannelName || !isPrivateChannel) {
            setError("Error while creating a channel!!!")
            console.log("Error while creating a channel!!!")
            return
         } 
         const newChannel = await createChannel(selectedChannel, newChannelName,isPrivateChannel)

      }

  return (
    <AlertDialog>
      <div className="wrapper">
        <div className="text-channels">
          <div className="text-channels-header">
            <div className="channel-header-leftSide">
              <div className="arrows">
                <div
                  className="next-arrow"
                  onClick={() => setTextChannelsVisible(!textChannelsVisible)}
                >
                  {textChannelsVisible === false && (
                    <Image
                      src={icons.nextArrow}
                      alt=""
                      className="channel-arrow-down"
                    />
                  )}
                </div>
                <div
                  className="down-arrow"
                  onClick={() => setTextChannelsVisible(!textChannelsVisible)}
                >
                  {textChannelsVisible === true && (
                    <Image
                      src={icons.arrowDown}
                      alt=""
                      className="channel-image"
                    />
                  )}
                </div>
              </div>

              <p
                className="remove-selecting-text"
                onClick={() => setTextChannelsVisible(!textChannelsVisible)}
              >
                CHAT
              </p>
            </div>

            <AlertDialogTrigger>
              <div className="channel-header-rightSide">
                <Image src={icons.plusSmall} alt="" className="channel-plus" />
              </div>
            </AlertDialogTrigger>
          </div>
          {textChannelsVisible === true && (
            <>
              <div className="textChannel">
                <p>TextChannel1</p>
              </div>
              <div className="textChannel">
                <p>TextChannel2</p>
              </div>
              <div className="textChannel">
                <p>TextChannel3</p>
              </div>
            </>
          )}
        </div>

        <div className="voice-channels">
          <div className="voice-channels-header">
            <div className="channel-header-leftSide">
              <div className="arrows">
                <div
                  className="next-arrow"
                  onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
                >
                  {voiceChannelsVisible === false && (
                    <Image
                      src={icons.nextArrow}
                      alt=""
                      className="channel-arrow-down"
                    />
                  )}
                </div>
                <div
                  className="down-arrow"
                  onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
                >
                  {voiceChannelsVisible === true && (
                    <Image
                      src={icons.arrowDown}
                      alt=""
                      className="channel-image"
                    />
                  )}
                </div>
              </div>

              <p
                className="remove-selecting-text"
                onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
              >
                VOICE
              </p>
            </div>

            <AlertDialogTrigger>
              <div className="channel-header-rightSide">
                <Image src={icons.plusSmall} alt="" className="channel-plus" />
              </div>
            </AlertDialogTrigger>
          </div>

          {voiceChannelsVisible === true && (
            <>
              <div className="voiceChannel">
                <p>voiceChannel1</p>
              </div>
              <div className="voiceChannel">
                <p>voiceChannel2</p>
              </div>
              <div className="voiceChannel">
                <p>voiceChannel3</p>
              </div>
            </>
          )}
        </div>
      </div>

      <AlertDialogContent
        style={{ backgroundColor: "#323338", border: "#323338" }}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className="white-title-color remove-selecting-text">
            Create Channel
          </AlertDialogTitle>
          <AlertDialogDescription className="remove-selecting-text">
            Channel Type
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="flex flex-col space-y-2">
          <div
            onClick={() => setSelectedChannel("text")}
            className={`p-4 rounded-lg`}
            style={{
              backgroundColor:
                selectedChannel === "text" ? "#43434b" : "#2c2d30",
            }}
          >
            <label
              htmlFor="text"
              className="flex items-center space-x-2 text-white cursor-pointer"
            >
              <input
                type="radio"
                id="text"
                name="channel"
                value="text"
                checked={selectedChannel === "text"}
                onChange={handleSelection}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-lg remove-selecting-text">#</span>
              <span className="remove-selecting-text">Text</span>
            </label>
            <p className="text-gray-400 mt-1 remove-selecting-text">
              Send messages, images, GIFs, emoji, opinions, and puns
            </p>
          </div>
          <div
            onClick={() => setSelectedChannel("voice")}
            className={`p-4 rounded-lg`}
            style={{
              backgroundColor:
                selectedChannel === "voice" ? "#43434b" : "#2c2d30",
            }}
          >
            <label
              htmlFor="voice"
              className="flex items-center space-x-2 text-white cursor-pointer"
            >
              <input
                type="radio"
                id="voice"
                name="channel"
                value="voice"
                checked={selectedChannel === "voice"}
                onChange={handleSelection}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="text-lg remove-selecting-text">🔊</span>
              <span className="remove-selecting-text">Voice</span>
            </label>
            <p className="text-gray-400 mt-1 remove-selecting-text">
              Hang out together with voice, video, and screen share
            </p>
          </div>
        </div>

        <div
          className="grid w-full max-w-sm items-center gap-1.5"
          style={{ marginTop: "1em", border: "none" }}
        >
          <Label
            htmlFor="email"
            className="white-title-color remove-selecting-text"
          >
            CHANNEL NAME
          </Label>
          <Input
            className="remove-selecting-text"
            type="text"
            id="newChannelName"
            placeholder="new-channel"
            style={{
              outline: "#1e1f22",
              backgroundColor: "#1e1f22",
              color: "#ebedf0",
            }}
            value={newChannelName}
            onChange={handleChange}
          />
        </div>

        <div className="private-channel-layout">
          <div className="private-channel-text">
            <div className="private-channel-header">
              <div className="p-r-image remove-selecting-text">
                <Image src={icons.padlock} alt="" />
              </div>
              <div className="p-r-title white-title-color remove-selecting-text">
                <p>Private Channel</p>
              </div>
            </div>
            <div>
              <p className="remove-selecting-text">
                Only selected memners and roles will be able to see this channel
              </p>
            </div>
          </div>
          <div className="private-channel-switch">
            <Switch />
          </div>
        </div>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleChannelCreation}>
            Create Channel
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
