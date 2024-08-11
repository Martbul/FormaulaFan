import { useState, useEffect, memo } from "react";
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
  },
);

const ChannelsListMemo = ({
  channels,
  groupId,
  setSelectedChatChannelId,
  selectedChatChannelId,
}) => {
  console.log("RENDER CHANNELLIST");
  const [textChannels, setTextChannels] = useState([]);
  const [voiceChannels, setVoiceChannels] = useState([]);

  const [textChannelsVisible, setTextChannelsVisible] = useState(true);
  const [voiceChannelsVisible, setVoiceChannelsVisible] = useState(true);

  useEffect(() => {
    if (channels && channels.length > 0) {
      const newTextChannels = channels.filter(
        (channel) => channel.type === "TEXT",
      );
      const newVoiceChannels = channels.filter(
        (channel) => channel.type === "VOICE",
      );
      setTextChannels(newTextChannels);
      setVoiceChannels(newVoiceChannels);
    }
  }, [channels]);

  return (
    <Dialog>
      <div className="wrapper select-none">
        <div className="w-full bg-[#212121] p-2.5">
          <div className="flex cursor-pointer items-center p-1.5 text-xs text-[#87898b]">
            <div className="flex flex-1">
              <div className="flex items-center">
                <div
                  className="next-arrow"
                  onClick={() => setTextChannelsVisible(!textChannelsVisible)}
                >
                  {textChannelsVisible === false && (
                    <ArrowRightIcon className="h-3 w-3" />
                  )}
                </div>
                <div
                  className="down-arrow"
                  onClick={() => setTextChannelsVisible(!textChannelsVisible)}
                >
                  {textChannelsVisible === true && (
                    <ArrowDownIcon className="h-3 w-3" />
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
                <PlusIcon className="h-5 w-5" />
              </div>
            </DialogTrigger>
          </div>
          {textChannelsVisible === true && (
            <>
              {textChannels.map((channel, index) => (
                <div
                  className={`flex cursor-pointer justify-between p-1.5 text-[#b9bbbe] hover:rounded-md hover:bg-[#3a3c43] ${
                    channel.id === selectedChatChannelId
                      ? "rounded-md bg-[#3a3c43]"
                      : ""
                  }`}
                  key={index}
                  onClick={() => setSelectedChatChannelId(channel.id)}
                >
                  <p>{channel.name}</p>
                  {channel.isPrivate && <PadlockIcon className="h-5 w-5" />}
                </div>
              ))}
            </>
          )}
        </div>

        <div className="w-full bg-[#212121] p-2.5">
          <div className="flex cursor-pointer items-center p-1.5 text-xs text-[#87898b]">
            <div className="flex flex-1">
              <div className="flex items-center">
                <div
                  className="next-arrow"
                  onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
                >
                  {voiceChannelsVisible === false && (
                    <ArrowRightIcon className="h-3 w-3" />
                  )}
                </div>
                <div
                  className="down-arrow"
                  onClick={() => setVoiceChannelsVisible(!voiceChannelsVisible)}
                >
                  {voiceChannelsVisible === true && (
                    <ArrowDownIcon className="h-3 w-3" />
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
                <PlusIcon className="h-5 w-5" />
              </div>
            </DialogTrigger>
          </div>

          {voiceChannelsVisible === true && (
            <>
              {voiceChannels.map((channel, index) => (
                <div
                  className="flex cursor-pointer justify-between p-1.5 text-[#b9bbbe] hover:rounded-md hover:bg-[#3a3c43]"
                  key={index}
                >
                  <p>{channel.name}</p>
                  {channel.isPrivate && <PadlockIcon className="h-5 w-5" />}
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
export const ChannelsList = memo(ChannelsListMemo);
