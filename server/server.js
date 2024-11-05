import express from "express";
import mongoose from "mongoose";
import connectDb from "./config/db/db.js";
import { config } from "./config/db/config.js";
import cookieParser from "cookie-parser";
import router from "./Routes/SignUpRoute.js";

const app = express();

connectDb();

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.use(cookieParser());

app.use(express.json());

app.use("/api", router);
