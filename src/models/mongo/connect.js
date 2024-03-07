import * as dotenv from "dotenv";
import Mongoose from "mongoose";
import { Province } from "./province.js";
import provinceData from "../json/province-data.js";
import championTreeData from "../json/champion-tree-data.js";
import { ChampionTree } from "./championTree.js";

export function connectMongo() {
  dotenv.config();

  Mongoose.set("strictQuery", true);
  Mongoose.connect(process.env.db);
  const db = Mongoose.connection;

  db.on("error", (err) => {
    console.log(`database connection error: ${err}`);
  });

  db.on("disconnected", () => {
    console.log("database disconnected");
  });

  async function insertProvinceData() {
    await Province.insertMany(provinceData);
  }

  async function insertChampionData() {
    await ChampionTree.insertMany(championTreeData);
  }

  db.once("open", async () => {
    console.log(`database connected to ${db.name} on ${db.host}`);

    try {
      const provinceCount = await Province.countDocuments();
      const championTreeCount = await ChampionTree.countDocuments();

      if (provinceCount === 0) {
        await insertProvinceData();
        console.log("Province added successfully.");
      }
      if (championTreeCount === 0) {
        await insertChampionData();
        console.log("Champion Tree data added successfully.");
      }
    } catch (error) {
      console.error("Error adding province and champion tree data:", error);
    }
  });
  
}