import { useState, useEffect } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
import {
  ArrowDownIcon,
  ArrowRightIcon,
  PlusIcon,
  PadlockIcon,
} from "@/utils/svgIcons";

const DynamicCreateChannelModal = dynamic(
  () => import("./CreateChannelModal/CreateChannelModal"),
  {
    ssr: false,
  }
);

export const ChannelsList = ({
  channels,
  groupId,
  setSelectedChatChannelId,
  selectedChatChannelId,
}) => {
  const [textChannels, setTextChannels] = useState([]);
  const [voiceChannels, setVoiceChannels] = useState([]);

  const [textChannelsVisible, setTextChannelsVisible] = useState(true);
  const [voiceChannelsVisible, setVoiceChannelsVisible] = useState(true);

  useEffect(() => {
    if (channels && channels.length > 0) {
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
    <Dialog>
      <div className="wrapper select-none">
        <div className="w-full bg-[#212121] p-2.5">
          <div className="flex p-1.5 text-[#87898b] cursor-pointer text-xs items-center">
            <div className="flex flex-1">
              <div className="flex items-center">
                <div
                  className="next-arrow"
                  onClick={() => setTextChannelsVisible(!textChannelsVisible)}
                >
                  {textChannelsVisible === false && (
                    <ArrowRightIcon className="w-3 h-3" />
                  )}
                </div>
                <div
                  className="down-arrow"
                  onClick={() => setTextChannelsVisible(!textChannelsVisible)}
                >
                  {textChannelsVisible === true && (
                    <ArrowDownIcon className="w-3 h-3" />
                  )}
                </div>
              </div>
              <p
                className="select-none"
                onClick={() => setTextChannelsVisible(!textChannelsVisible)}
              >
                CHAT
              </p>
            </div>
            <DialogTrigger>
              <div className="channel-header-rightSide">
                <PlusIcon className="w-5 h-5" />
              </div>
            </DialogTrigger>
          </div>
          {textChannelsVisible === true && (
            <>
              {textChannels.map((channel, index) => (
                <div
                  className={`flex justify-between p-1.5 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-md ${
                    channel.id === selectedChatChannelId
                      ? "bg-[#3a3c43] rounded-md"
                      : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedChatChannelId(channel.id)}
                >
                  <p>{channel.name}</p>
                  {channel.isPrivate && <PadlockIcon className="w-5 h-5" />}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="w-full bg-[#212121] p-2.5">
          <div className="flex p-1.5 text-[#87898b] cursor-pointer text-xs items-center">
            <div className="flex flex-1">
              <div className="flex items-center">
                <div
                  className="next-arrow"
                  onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
                >
                  {voiceChannelsVisible === false && (
                    <ArrowRightIcon className="w-3 h-3" />
                  )}
                </div>
                <div
                  className="down-arrow"
                  onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
                >
                  {voiceChannelsVisible === true && (
                    <ArrowDownIcon className="w-3 h-3" />
                  )}
                </div>
              </div>
              <p
                className="select-none"
                onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
              >
                VOICE
              </p>
            </div>
            <DialogTrigger>
              <div className="channel-header-rightSide">
                <PlusIcon className="w-5 h-5" />
              </div>
            </DialogTrigger>
          </div>

          {voiceChannelsVisible === true && (
            <>
              {voiceChannels.map((channel, index) => (
                <div
                  className="flex justify-between p-1.5 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-md"
                  key={index}
                >
                  <p>{channel.name}</p>
                  {channel.isPrivate && <PadlockIcon className="w-5 h-5" />}
                </div>
              ))}
            </>
          )}
        </div>
      </div>

      <DynamicCreateChannelModal
        groupId={groupId}
        setTextChannels={setTextChannels}
        setVoiceChannels={setVoiceChannels}
      />
    </Dialog>
  );
};
      