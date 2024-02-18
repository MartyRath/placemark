import { v4 } from "uuid";
import { treeMemStore } from "./tree-mem-store.js";

const provinces = [];

// Function to add a province
function addProvince(province) {
  province._id = v4();
  provinces.push(province);
}

// Function to initialize provinces
function populateProvinces() {
  // Add the four provinces to db
  addProvince({ title: "Leinster" });
  addProvince({ title: "Munster" });
  addProvince({ title: "Ulster" });
  addProvince({ title: "Connacht" });
}

populateProvinces();

export const provinceMemStore = {
  async getAllProvinces() {
    return provinces;
  },

  async getProvinceById(id) {
    const list = provinces.find((province) => province._id === id);
    list.trees = await treeMemStore.getTreesByProvinceId(list._id);
    return list;
  },
};