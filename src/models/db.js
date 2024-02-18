import { connectMongo } from "./mongo/connect.js";
import { userMongoStore } from "./mongo/user-mongo-store.js";

export const db = {
  userStore: null,
  provinceStore: null,
  treeStore: null,

  init(storeType) {
    switch (storeType) {
      case "json":
        this.userStore = userJsonStore;
        this.provinceStore = provinceJsonStore;
        this.treeStore = treeJsonStore;
        break;
      case "mongo":
        this.userStore = userMongoStore;
        connectMongo();
        break;
      default:
        this.userStore = userMemStore;
        this.provinceStore = provinceMemStore;
        this.treeStore = treeMemStore;
    }
  },
};