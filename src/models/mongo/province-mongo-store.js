import { championTreeMongoStore } from "./champion-tree-mongo-store.js";
import { userTreeMongoStore } from "./user-tree-mongo-store.js";
import { Province } from "./province.js";

export const provinceMongoStore = {
  async getAllProvinces() {
    const provinces = await Province.find().lean();
    return provinces;
    },

  async getProvinceByTitle(title, userId) {
    if (title && userId) {
      const province = await Province.findOne({ title }).lean();
      if (province) {
        province.championTrees = await championTreeMongoStore.getChampionTreesByProvinceTitle(province.title);
        province.userTrees = await userTreeMongoStore.getUserTreesByUserIdAndProvince(province.title, userId);
        return province;
        }
      }
      return null;
    },
};