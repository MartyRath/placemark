import { v4 } from "uuid";

let trees = [];

export const treeMemStore = {
  async getAllTrees() {
    return trees;
  },

  async addTree(provinceId, tree) {
    tree._id = v4();
    tree.provinceid = provinceId;
    trees.push(tree);
    return tree;
  },

  // Needs work. Makes sense though, get trees by user id rather than province id, as same 4 provinces for each user.
  async getTreesByUserId(userid) {
    return trees.filter((tree) => tree.userid === userid);
  },

  async getTreesByProvinceId(id) {
    return trees.filter((tree) => tree.provinceid === id);
  },

  async getTreeById(id) {
    return trees.find((tree) => tree._id === id);
  },

  async getProvinceTrees(provinceId) {
    return trees.filter((tree) => tree.provinceid === provinceId);
  },

  async deleteTree(id) {
    const index = trees.findIndex((tree) => tree._id === id);
    trees.splice(index, 1);
  },

  async deleteAllTrees() {
    trees = [];
  },

  async updateTree(tree, updatedTree) {
    tree.species = updatedTree.species;
    tree.height = updatedTree.height;
    tree.girth = updatedTree.girth;
    tree.county = updatedTree.county;
  },
};