import { ChampionTree } from "./championTree.js";

export const championTreeMongoStore = {
  async getAllChampionTrees() {
    const championTrees = await ChampionTree.find().lean();  // Lean gives JSON representation of object
    return championTrees;
  },

  async getChampionTreesByProvinceTitle(title) {
    const championTrees = await ChampionTree.find({ province: title }).lean();
    return championTrees;
  },
};