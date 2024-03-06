import { userTree } from "./userTree.js";

export const userTreeMongoStore = {
  async userTreesByProvinceId(id) {
    const userTrees = await userTree.find({ provinceid: title }).lean();
    return userTrees;
  },
};