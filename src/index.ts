import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import inProgress from "./routes/progress";

dotenv.config({ path: __dirname + "/.env" });

const app = express();
app.use(express.urlencoded({ extended: true }));
const port = 7000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI!;
const uri = 'mongodb://mongo:27017/ts-node-docker'
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Atlas connection established");
});

app.use("/progress", inProgress);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
  console.log(uri);
});
