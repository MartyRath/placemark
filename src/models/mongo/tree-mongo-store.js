import { Tree } from "./tree.js";

export const treeMongoStore = {
  async getTreesByProvinceId(id) {
    const trees = await Tree.find({ provinceid: id }).lean();
    return trees;
  },
};