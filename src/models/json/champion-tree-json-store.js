import { db } from "./store-utils.js";

export const championTreeJsonStore = {
    async getAllChampionTrees() {
      await db.read();
      return db.data.championTrees;
    },

    async getChampionTreesByProvinceTitle(title) {
      await db.read();
      return db.data.championTrees.filter((tree) => tree.province === title);
    }
};