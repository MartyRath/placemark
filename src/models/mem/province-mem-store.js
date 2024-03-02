import { championTreeMemStore } from "./champion-tree-mem-store.js";
import { userTreeMemStore } from "./user-tree-mem-store.js";

const provinces = [
  { title: "Leinster" }, 
  { title: "Munster" },
  { title: "Ulster" },
  { title: "Connacht" }
];

export const provinceMemStore = {
  async getAllProvinces() {
    return provinces;
  },

  async getProvinceByTitle(title, userId) {
    const list = provinces.find((province) => province.title === title);
    list.championTrees = await championTreeMemStore.getChampionTreesByProvinceTitle(list.title);
    list.userTrees = await userTreeMemStore.getTreesByUserIdAndProvince(list.title, userId);
    return list;
  },
};