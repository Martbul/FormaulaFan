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
      <div className="layout remove-selecting-text flex">
        <div className="settings settings flex h-screen flex-1 flex-col bg-zinc-800 p-8">
          <div className="no-scrollbar flex min-h-[calc(100vh_-_theme(spacing.16))] w-full flex-1 flex-col gap-4 overflow-y-auto">
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
          <div className="flex flex-col content-center text-neutral-200">
            <div className="my-2 p-2 font-semibold">User Settings </div>
            <div
              className="{} ml-2 cursor-pointer p-2 text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]"
              onClick={() => setSelectedSettingMenu("account")}
            >
              Account
            </div>
            <div
              className="ml-2 cursor-pointer p-2 text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]"
              onClick={() => setSelectedSettingMenu("privacySafety")}
            >
              Privacy & Safety
            </div>

            <div className="ml-2 cursor-pointer p-2 text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]">
              Chat
            </div>
            <div className="ml-2 cursor-pointer p-2 text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]">
              Vice & Video
            </div>
            <div
              className="ml-2 cursor-pointer p-2 text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]"
              onClick={() => setSelectedSettingMenu("notification")}
            >
              Notifications
            </div>
            <div className="ml-2 cursor-pointer p-2 text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]">
              Language
            </div>
            <div className="ml-2 cursor-pointer p-2 text-[#b9bbbe] hover:rounded-[5px] hover:bg-[#3a3c43]">
              Activity Privacy
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
