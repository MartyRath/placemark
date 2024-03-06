import { db } from "./store-utils.js";
import { championTreeJsonStore } from "./champion-tree-json-store.js";
import { userTreeJsonStore } from "./user-tree-json-store.js";

export const provinceJsonStore = {
  async getAllProvinces() {
    await db.read();
    return db.data.provinces;
  },

  async getProvinceByTitle(title, userId) {
    await db.read();
    const list = db.data.provinces.find((province) => province.title === title);
    list.championTrees = await championTreeJsonStore.getChampionTreesByProvinceTitle(list.title);
    list.userTrees = await userTreeJsonStore.getUserTreesByUserIdAndProvince(list.title, userId);
    return list;
  },
};