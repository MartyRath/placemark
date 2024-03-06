import { JSONFilePreset } from "lowdb/node";
import championTreeData from "./champion-tree-data.js";
import provinceData from "./province-data.js";

export const db = await JSONFilePreset("src/models/json/db.json", {
  users: [],
  provinces: provinceData,
  userTrees: [],
  championTrees: championTreeData,
});