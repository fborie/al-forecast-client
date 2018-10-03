import socketIOClient from "socket.io-client";

const apiUrl = "http://localhost:8000/";
const socket = socketIOClient(apiUrl);

export const startChannel = () => {
    console.log('emitting...');
    socket.on("update", data => {
        console.log(data);
    });
    //socket.on("FromAPI", data => this.setState({ response: data }));
}

