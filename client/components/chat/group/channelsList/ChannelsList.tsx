import icons from "@/constants/icons";
import Image from "next/image";
import "./ChannelsList.css";
import { ChangeEvent, useState, useEffect } from "react";
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

import { Switch } from "@/components/ui/switch";
import { createChannel } from "@/services/channel/channel.service";

export const ChannelsList = ({ channels, groupId }: any) => {
  const [textChannels, setTextChannels] = useState([]);
  const [voiceChannels, setVoiceChannels] = useState([]);

  const [textChannelsVisible, setTextChannelsVisible] = useState(true);
  const [voiceChannelsVisible, setVoiceChannelsVisible] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState("TEXT");
  const [newChannelName, setNewChannelName] = useState({
    name: "",
  });
  const [isPrivateChannel, setIsPrivateChannel] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelection = (event: any) => {
    setSelectedChannel(event.target.value);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setNewChannelName((prevForm) => ({
      ...prevForm,
      name: value,
    }));
  };

  //! implement better error handling and validation
  //! also validation in the server is needed
  const handleChannelCreation = async () => {
    if (!newChannelName) {
      setError("Give your new channel a name");
      console.log("Give your new channel a name");
      return;
    }
    const newChannel = await createChannel(
      selectedChannel,
      newChannelName.name,
      isPrivateChannel,
      groupId
    );
if(newChannel){
if(newChannel.type =="TEXT"){
      setTextChannels(prevTextChannels => [...prevTextChannels, newChannel]);
    }
      else if(newChannel.type =="VOICE"){
          setVoiceChannels(prevVoiceChannels => [...prevVoiceChannels, newChannel]);
      }
    }
}
    
   
 
  useEffect(() => {
    if (channels && channels.length > 0) {
      console.log(channels);
      
      const newTextChannels = channels.filter(
        (channel) => channel.type === "TEXT"
      );
      const newVoiceChannels = channels.filter(
        (channel) => channel.type === "VOICE"
      );
      setTextChannels(newTextChannels);
      setVoiceChannels(newVoiceChannels);
    }
  }, [channels]); 

  return (
    <AlertDialog>
      <div className="wrapper remove-selecting-text">
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
                      className="channel-arrow-down remove-selecting-text"
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
                      className="channel-image remove-selecting-text"
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
                <Image
                  src={icons.plusSmall}
                  alt=""
                  className="channel-plus remove-selecting-text"
                />
              </div>
            </AlertDialogTrigger>
          </div>
          {textChannelsVisible === true && (
            <>
              {textChannels.map((channel, index) => (
                <div className="textChannel" key={index}>
                  <p>{channel.name}</p>
                </div>
              ))}
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
                      className="channel-arrow-down remove-selecting-text"
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
                      className="channel-image remove-selecting-text"
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
                <Image
                  src={icons.plusSmall}
                  alt=""
                  className="channel-plus remove-selecting-text"
                />
              </div>
            </AlertDialogTrigger>
          </div>

          {voiceChannelsVisible === true && (
            <>
              {voiceChannels.map((channel, index) => (
                <div className="voiceChannel" key={index}>
                  <p>{channel.name}</p>
                </div>
              ))}
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
            onClick={() => setSelectedChannel("TEXT")}
            className={`p-4 rounded-lg`}
            style={{
              backgroundColor:
                selectedChannel === "TEXT" ? "#43434b" : "#2c2d30",
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
                checked={selectedChannel === "TEXT"}
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
            onClick={() => setSelectedChannel("VOICE")}
            className={`p-4 rounded-lg`}
            style={{
              backgroundColor:
                selectedChannel === "VOICE" ? "#43434b" : "#2c2d30",
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
                checked={selectedChannel === "VOICE"}
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
            value={newChannelName.name}
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
            <Switch
              checked={isPrivateChannel}
              onCheckedChange={() => setIsPrivateChannel(!isPrivateChannel)}
              aria-readonly
            />
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
