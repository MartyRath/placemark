import { userMemStore } from "./mem/user-mem-store.js";
import { provinceMemStore } from "./mem/province-mem-store.js";
import { userTreeMemStore } from "./mem/user-tree-mem-store.js";
import { championTreeMemStore } from "./mem/champion-tree-mem-store.js";
import { userJsonStore } from "./json/user-json-store.js";
import { userTreeJsonStore } from "./json/user-tree-json-store.js";
import { championTreeJsonStore } from "./json/champion-tree-json-store.js";
import { provinceJsonStore } from "./json/province-json-store.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";
import { provinceMongoStore } from "./mongo/province-mongo-store.js";
import { connectMongo } from "./mongo/connect.js";
import { userTreeMongoStore } from "./mongo/user-tree-mongo-store.js";
import { championTreeMongoStore } from "./mongo/champion-tree-mongo-store.js";

export const db = {
  userStore: null,
  provinceStore: null,
  userTreeStore: null,
  championTreeStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.provinceStore = provinceJsonStore;
        this.userTreeStore = userTreeJsonStore;
        this.championTreeStore = championTreeJsonStore;
      break;
      case "mongo" :
        this.userStore = userMongoStore;
        this.provinceStore = provinceMongoStore;
        this.userTreeStore = userTreeMongoStore;
        this.championTreeStore = championTreeMongoStore;
        connectMongo();
      break;
      default:
        this.userStore = userMemStore;
        this.provinceStore = provinceMemStore;
        this.userTreeStore = userTreeMemStore;
        this.championTreeStore = championTreeMemStore;
    }
  },
};