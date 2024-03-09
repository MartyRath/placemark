import { Province } from "./province.js";
import { ChampionTree } from "./championTree.js";
import { UserTree } from "./userTree.js";

export const provinceMongoStore = {
  async getAllProvinces() {
    const provinces = await Province.find().lean();
    return provinces;
    },

  async getProvinceByTitle(title) {
    if (title) {
      const province = await Province.findOne({ title }).lean();
      return province;
      }
    return null;
  },

  async getProvinceByTitleAndUserId(title, userId) {
    const province = await Province.findOne({ title }).lean();
    province.championTrees = await ChampionTree.find({ province: province.title }).lean();
    province.userTrees = await UserTree.find({ province: province.title, userid: userId }).lean();
    return province;
  },
};