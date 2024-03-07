import { UserTree } from "./userTree.js"; 

export const userTreeMongoStore = {
  async getUserTreesByProvinceTitle(title) {
    const userTrees = await userTree.find({ province: title }).lean();
    return userTrees;
  },

  async getUserTreesByUserIdAndProvince(province, userId) {
    try {
      const foundTrees = await UserTree.find({ province: province, userid: userId }).lean();
      return foundTrees;
    } catch (error) {
      console.error("Error fetching user trees:", error);
      return null;
    }
  },
};