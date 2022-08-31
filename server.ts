import express, { json, Router } from "express";
import dotenv from "dotenv";
import cors from "cors";
import {router} from "./src/routers/index";

dotenv.config();

const server = express();

server.use(cors());
server.use(json());

server.use(router);

server.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});