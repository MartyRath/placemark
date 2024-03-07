import { UserTree } from "./userTree.js";

export const userTreeMongoStore = {
  async getAllUserTrees(){
    const userTrees = await UserTree.find().lean();
    return userTrees;
  },

  async addUserTree(provinceTitle, userId, userTree) {
    userTree.province = provinceTitle;
    userTree.userid = userId;
    const newUserTree = new UserTree(userTree);
    const userTreeObj = await newUserTree.save();
    return this.getUserTreeById(userTreeObj._id);
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

  async getUserTreesByProvinceTitle(title) {
    const userTrees = await UserTree.find({ province: title }).lean();
    return userTrees;
  },

  async getUserTreeById(id) {
    if (id) {
      const userTree = await UserTree.findOne({ _id: id }).lean();
      return userTree;
    }
    return null;
  },

  async deleteUserTree(id) {
    try {
      await UserTree.deleteOne({ _id: id });
    } catch (error) {
      console.log("bad id");
    }
  },

  async deleteAllUserTrees() {
    await UserTree.deleteMany({});
  },

  async updateUserTree(userTree, updatedUserTree) {
    const userTreeDoc = await UserTree.findOne({ _id: userTree._id });
    userTreeDoc.title = updatedUserTree.title;
    userTreeDoc.artist = updatedUserTree.artist;
    userTreeDoc.duration = updatedUserTree.duration;
    await userTreeDoc.save();
  },

};