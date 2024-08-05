"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicAccountSettings = dynamic(
  () => import("../../../components/settings/AccountSettings/AccountSettings"),
  {
    ssr: false,
  },
);

const DynamicPrivacySafetySettings = dynamic(
  () => import("../../../components/settings/PrivacySafety/PrivacySafety"),
  {
    ssr: false,
  },
);
const DynamicNotificationSettings = dynamic(
  () =>
    import(
      "../../../components/settings/NotificationsSettings/NotificationsSettings"
    ),
  {
    ssr: false,
  },
);

import { useAuthContext } from "@/contexts/AuthContext2";

const Settings = () => {
  const [selectedSettingMenu, setSelectedSettingMenu] = useState("account");
  const { user } = useAuthContext();

  return (
    <>
      <div className="layout flex remove-selecting-text ">
        <div className="flex flex-col flex-1 h-screen settings bg-zinc-800 p-8 settings">
          <div className="flex w-full min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4  overflow-y-auto no-scrollbar">
            {selectedSettingMenu === "account" && (
              <DynamicAccountSettings user={user} />
            )}
            {selectedSettingMenu === "privacySafety" && (
              <DynamicPrivacySafetySettings user={user} />
            )}
            {selectedSettingMenu === "notification" && (
              <DynamicNotificationSettings user={user} />
            )}
          </div>
        </div>

        <div className="flex bg-neutral-800">
          <div className="flex flex-col	content-center text-neutral-200">
            <div className="font-semibold p-2 my-2">User Settings </div>
            <div
              className=" p-2 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2 {}"
              onClick={() => setSelectedSettingMenu("account")}
            >
              Account
            </div>
            <div
              className=" p-2 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2"
              onClick={() => setSelectedSettingMenu("privacySafety")}
            >
              Privacy & Safety
            </div>

            <div className=" p-2 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2">
              Chat
            </div>
            <div className="p-2 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2">
              Vice & Video
            </div>
            <div
              className=" p-2 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2"
              onClick={() => setSelectedSettingMenu("notification")}
            >
              Notifications
            </div>
            <div className=" p-2 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2">
              Language
            </div>
            <div className=" p-2 text-[#b9bbbe] cursor-pointer hover:bg-[#3a3c43] hover:rounded-[5px] ml-2">
              Activity Privacy
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
