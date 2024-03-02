import { championTreeMemStore } from "./champion-tree-mem-store.js";

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

  async getProvinceByTitle(title) {
    const list = provinces.find((province) => province.title === title);
    list.championTrees = await championTreeMemStore.getChampionTreesByProvinceTitle(list.title)
    return list;
  },
};