import { UserTree } from "./userTree.js";

export const userTreeMongoStore = {
  async getUserTreesByProvinceTitle(title) {
    const userTrees = await UserTree.find({ province: title }).lean();
    return userTrees;
  },

  async getUserTreesByUserIdAndProvince(userId, province) {
    try {
      const foundTrees = await UserTree.find({ province: province, userid: userId }).lean();
      return foundTrees;
    } catch (error) {
      console.error("Error fetching user trees:", error);
      return null;
    }
  },

  async getUserTreeById(id) {
    if (id) {
      const userTree = await UserTree.findOne({ _id: id }).lean();
      return userTree;
    }
    return null;
  },

  async addUserTree(provinceTitle, userId, userTree) {
    userTree.provinceTitle = provinceTitle;
    userTree.userid = userId;
    const newUserTree = new UserTree(userTree);
    await newUserTree.save();
    return newUserTree.toObject();
  },

};