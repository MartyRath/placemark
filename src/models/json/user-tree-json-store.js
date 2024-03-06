import { v4 } from "uuid";
import { db } from "./store-utils.js";

export const userTreeJsonStore = {
  async getAllUserTrees() {
    await db.read();
    return db.data.userTrees;
  },

  async addUserTree(provinceTitle, userId, userTree) {
    await db.read();
    userTree._id = v4();
    userTree.provinceTitle = provinceTitle;
    userTree.userid = userId;
    db.data.userTrees.push(userTree);
    await db.write();
    return userTree;
  },

  async getUserTreesByUserIdAndProvince(province, userId) {
    await db.read();
    let foundTrees = db.data.userTrees.filter((userTree) => userTree.userid === userId && userTree.provinceTitle === province);
    if (!foundTrees) {
      foundTrees = null;
    }
    return foundTrees;
  },

  async getUserTreeById(id) {
    await db.read();
    let foundTree = db.data.userTrees.find((userTree) => userTree._id === id);
    if (!foundTree) {
      foundTree = null;
    }
    return foundTree;
  },

  async deleteUserTree(id) {
    await db.read();
    const index = db.data.userTrees.findIndex((userTree) => userTree._id === id);
    if (index !== -1) db.data.userTrees.splice(index, 1);
    await db.write();
  },

  async deleteAllUserTrees() {
    db.data.userTrees = [];
    await db.write();
  },

  async updateUserTree(userTree, updatedUserTree) {
    userTree.species = updatedUserTree.species;
    userTree.location = updatedUserTree.location;    
    userTree.height = updatedUserTree.height;
    userTree.girth = updatedUserTree.girth;
    userTree.description = updatedUserTree.description;  
    db.write();
  },
};