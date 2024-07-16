import { io, Socket } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000"; // Replace with your Nest.js server URL

let socket: Socket;

export const initiateSocket = () => {
  socket = io(SOCKET_URL);

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("disconnect", () => {
    console.log("Disconnected from server");
  });
};

export const getSocket = () => {
  if (!socket) {
    throw new Error("Socket not initialized");
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
  }
};
