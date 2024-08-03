"use client";

import { getUserSettings, updateUserSettings } from "@/services/settings/settings.service";
import React, { createContext, useContext, useEffect, useState } from "react";

const UserSettingsContext = createContext({});

export function UserSettingsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if(!user){
      return
    }

    const getSettings = async () => {
      try {
        const result = await getUserSettings(JSON.parse(user.email));
        setSettings(result);
      } catch (error) {
        console.error("Failed to fetch settings:", error);
      }
    };
    getSettings();
  }, []);

  const updateSettings = async (userEmail:string, newSettings) => {
    try {
      const updatedSettings = await updateUserSettings(userEmail, newSettings);
      setSettings(updatedSettings);
    } catch (error) {
      console.error("Failed to save settings:", error);
    }
  };

  const contextValue = {
    settings,
    updateSettings,
  };

  return (
    <UserSettingsContext.Provider value={contextValue}>
      {children}
    </UserSettingsContext.Provider>
  );
}

export function useUserSettingsContext() {
  return useContext(UserSettingsContext);
}
