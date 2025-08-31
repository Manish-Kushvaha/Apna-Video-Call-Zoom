import dotenv from "dotenv";
dotenv.config();

import { Server } from "socket.io";
import express from "express";
import { createServer } from "node:http";


import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js"

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({ limit: "40kb", extended: true }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);
// app.use("/api/v2/users", newUserRoutes);

const start = async () => {
    app.set("mongo_user");
    const connectionDb = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log(`MONGO Connected DB Host : ${connectionDb.connection.host}`);
    server.listen(app.get("port"), () => {
        console.log("Listen on port 8000")
    });
}

start();