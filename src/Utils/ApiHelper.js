import socketIOClient from "socket.io-client";

const apiUrl = "http://forecast.borie.cl:8000/";
const socket = socketIOClient(apiUrl);

export const startUpdateChannel = (callback) => {
    socket.on("update", data => {
        callback(data);
    });
}

