import { ChampionTree } from "./championTree.js";

export const championTreeMongoStore = {
    async getChampionTreesByProvinceTitle(title) {
        const championTrees = await ChampionTree.find({ province: title }).lean();
        return championTrees;
      },
};