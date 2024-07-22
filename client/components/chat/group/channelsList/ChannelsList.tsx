import icons from "@/constants/icons";
import Image from "next/image";
import "./ChannelsList.css";
import { useState, useEffect } from "react";

import {
  Dialog,
  DialogTrigger
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";

const DynamicCreateChannelModal = dynamic(
  () => import("./CreateChannelModal/CreateChannelModal"),
  {
    ssr: false,
  }
);


export const ChannelsList = ({ channels, groupId, setSelectedChatChannelId,selectedChatChannelId }) => {
  const [textChannels, setTextChannels] = useState([]);
  const [voiceChannels, setVoiceChannels] = useState([]);

  const [textChannelsVisible, setTextChannelsVisible] = useState(true);
  const [voiceChannelsVisible, setVoiceChannelsVisible] = useState(true);
 


  useEffect(() => {
    if (channels && channels.length > 0) {
      // console.log(channels);

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

            <DialogTrigger>
              <div className="channel-header-rightSide">
                <Image
                  src={icons.plusSmall}
                  alt=""
                  className="channel-plus remove-selecting-text"
                />
              </div>
            </DialogTrigger>
          </div>
          {textChannelsVisible === true && (
            <>
              {textChannels.map((channel, index) => (
                <div
                  className={
                    channel.id === selectedChatChannelId
                      ? "textChannel textChannelSelected"
                      : "textChannel"
                  }
                  key={index}
                  onClick={() => setSelectedChatChannelId(channel.id)}
                >
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

            <DialogTrigger>
              <div className="channel-header-rightSide">
                <Image
                  src={icons.plusSmall}
                  alt=""
                  className="channel-plus remove-selecting-text"
                />
              </div>
            </DialogTrigger>
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

      <DynamicCreateChannelModal
        groupId={groupId}
        setTextChannels={setTextChannels}
        setVoiceChannels={setVoiceChannels}
      />
    </Dialog>
  );
};
