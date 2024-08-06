import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState, ChangeEvent } from "react";
import { PadlockIcon } from "@/utils/svgIcons";

import { createChannel } from "@/services/channel/channel.service";
const CreateChannelModal = ({ groupId, setTextChannels, setVoiceChannels }) => {
  const [selectedChannel, setSelectedChannel] = useState<"TEXT" | "VOICE">(
    "TEXT",
  );
  const [newChannelName, setNewChannelName] = useState({
    name: "",
  });
  const [isPrivateChannel, setIsPrivateChannel] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSelection = (event) => {
    setSelectedChannel(event.target.value);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      groupId,
    );
    if (newChannel) {
      if (newChannel.type == "TEXT") {
        setTextChannels((prevTextChannels) => [
          ...prevTextChannels,
          newChannel,
        ]);
      } else if (newChannel.type == "VOICE") {
        setVoiceChannels((prevVoiceChannels) => [
          ...prevVoiceChannels,
          newChannel,
        ]);
      }
    }
  };

  return (
    <DialogContent style={{ backgroundColor: "#323338", border: "#323338" }}>
      <DialogHeader>
        <DialogTitle className="white-title-color remove-selecting-text">
          Create Channel
        </DialogTitle>
        <DialogDescription className="remove-selecting-text">
          Channel Type
        </DialogDescription>
      </DialogHeader>

      <div className="flex flex-col space-y-2">
        <div
          onClick={() => setSelectedChannel("TEXT")}
          className={`p-4 rounded-lg`}
          style={{
            backgroundColor: selectedChannel === "TEXT" ? "#43434b" : "#2c2d30",
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

      <div className=" flex items-center">
        <div className="">
          <div className="flex items-center gap-1">
            <div className="p-r-image remove-selecting-text">
              <PadlockIcon className="w-4 h-4" />
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
            className="bg-red-500"
          />
        </div>
      </div>

      <DialogFooter>
        <DialogClose asChild>
          <Button
            className="remove-selecting-text"
            onClick={handleChannelCreation}
          >
            Create Channel
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default CreateChannelModal;
