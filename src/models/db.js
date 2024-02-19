import { userMemStore } from "./mem/user-mem-store.js";
import { provinceMemStore } from "./mem/province-mem-store.js";
import { treeMemStore } from "./mem/tree-mem-store.js";

export const db = {
  userStore: null,
  provinceStore: null,
  treeStore: null,
  
  // userProvinceStore: null, Create user specific province id?

  init() {
    this.userStore = userMemStore;
    this.provinceStore = provinceMemStore;
    this.treeStore = treeMemStore;
  },
};