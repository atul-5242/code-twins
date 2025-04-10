import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const server= new WebSocketServer({
    port: 3003,
});

server.on("connection",async (socket)=>{
    const data = await client.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString(),
        }
    })
    socket.send("Welcome to the world of websocket server.");
})