import { userMemStore } from "./mem/user-mem-store.js";
import { provinceMemStore } from "./mem/province-mem-store.js";
import { userTreeMemStore } from "./mem/user-tree-mem-store.js";
import { championTreeMemStore } from "./mem/champion-tree-mem-store.js";

export const db = {
  userStore: null,
  provinceStore: null,
  userTreeStore: null,
  championTreeStore: null,

  init() {
    this.userStore = userMemStore;
    this.provinceStore = provinceMemStore;
    this.userTreeStore = userTreeMemStore;
    this.championTreeStore = championTreeMemStore;
  },
};