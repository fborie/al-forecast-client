import socketIOClient from "socket.io-client";

const apiUrl = "http://localhost:8000/";
const socket = socketIOClient(apiUrl);

export const startUpdateChannel = (callback) => {
    socket.on("update", data => {
        callback(data);
    });
}

