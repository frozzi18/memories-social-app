// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");;
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import postMessageRouter from "./routes/postmessage.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("DB connected successfully");
});

// const usersRouter = require("./routes/users");

app.use("/memories", postMessageRouter);
// app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Memories app server running at http://localhost:${port}`);
});

mongoose.set("useFindAndModify", false);
