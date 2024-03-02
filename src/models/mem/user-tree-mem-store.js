import { v4 } from "uuid";

let trees = [];

export const userTreeMemStore = {
  async getAllTrees() {
    return trees;
  },

  async addTree(provinceTitle, userId, tree) {
    tree._id = v4();
    tree.provinceTitle = provinceTitle;
    tree.userid = userId;
    trees.push(tree);
    return tree;
  },

  async getTreesByUserId(userid) {
    return trees.filter((tree) => tree.userid === userid);
  },

  async getTreesByProvinceTitle(title) {
    return trees.filter((tree) => tree.provinceTitle === title);
  },

  async getTreeById(id) {
    return trees.find((tree) => tree._id === id);
  },

  async getProvinceTrees(provinceTitle) {
    return trees.filter((tree) => tree.provinceTitle === provinceTitle);
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