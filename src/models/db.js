import { userMemStore } from "./mem/user-mem-store.js";
import { provinceMemStore } from "./mem/province-mem-store.js";

export const db = {
  userStore: null,
  provinceStore: null,

  init() {
    this.userStore = userMemStore;
    this.provinceStore = provinceMemStore;
  },
};