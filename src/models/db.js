// import { userMemStore } from "./mem/user-mem-store.js";
// import { provinceMemStore } from "./mem/province-mem-store.js";
// import { userTreeMemStore } from "./mem/user-tree-mem-store.js";
// import { championTreeMemStore } from "./mem/champion-tree-mem-store.js";

import { userJsonStore } from "./json/user-json-store.js";
import { userTreeJsonStore } from "./json/user-tree-json-store.js";
import { championTreeJsonStore } from "./json/champion-tree-json-store.js";
import { provinceJsonStore } from "./json/province-json-store.js";

export const db = {
  userStore: null,
  provinceStore: null,
  userTreeStore: null,
  championTreeStore: null,

  init() {
    this.userStore = userJsonStore;
    this.provinceStore = provinceJsonStore;
    this.userTreeStore = userTreeJsonStore;
    this.championTreeStore = championTreeJsonStore;
  },
};