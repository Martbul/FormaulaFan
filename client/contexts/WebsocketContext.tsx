"use client";

import { createContext, useContext } from "react";
import { io, Socket } from "socket.io-client";

export const socket = io("http://localhost:5000");
const WebsocketContext = createContext<Socket>(socket);

export function AppWebsocketWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WebsocketContext.Provider value={socket}>
      {children}
    </WebsocketContext.Provider>
  );
}

export function useWebsocketContext() {
  return useContext(WebsocketContext);
}
