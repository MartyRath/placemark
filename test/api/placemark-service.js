import axios from "axios"; // Allows to make http requests
import { serviceUrl } from "../fixtures.js";

export const placemarkService = {
  placemarkUrl: serviceUrl,

  async createUser(user) {
    const res = await axios.post(`${this.placemarkUrl}/api/users`, user);
    return res.data;
  },

  async getUser(id) {
    const res = await axios.get(`${this.placemarkUrl}/api/users/${id}`);
    return res.data;
  },

  async getAllUsers() {
    const res = await axios.get(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async deleteAllUsers() {
    const res = await axios.delete(`${this.placemarkUrl}/api/users`);
    return res.data;
  },

  async getAllProvinces() {
    const res = await axios.get(`${this.placemarkUrl}/api/provinces`);
    return res.data;
  },

  async getProvinceByTitle(title) {
    const res = await axios.get(`${this.placemarkUrl}/api/provinces?title=${title}`);
    return res.data;
  },

  async addUserTree(province, userId, userTree) {
    const res = await axios.post(`${this.placemarkUrl}/api/provinces/${province}/addusertree`, {
      userId,
      userTree
    });
    return res.data;
  },

  async getUserTreesByUserIdAndProvince(userId, province) {
    const res = await axios.get(`${this.placemarkUrl}/api/usertrees?userId=${userId}&province=${province}`);
    return res.data;
  },

  async deleteAllUserTrees() {
    const res = await axios.delete(`${this.placemarkUrl}/api/usertrees`);
    return res.data;
  },

  async getAllUserTrees() {
    const res = await axios.get(`${this.placemarkUrl}/api/usertrees`);
    return res.data;
  },

  async getUserTreeById(userTreeId) {
    const res = await axios.get(`${this.placemarkUrl}/api/usertrees/find/${userTreeId}`);
    return res.data;
  },

  async deleteUserTree(userTreeId) {
    const res = await axios.delete(`${this.placemarkUrl}/api/usertrees/del/${treeid}`);
    return res.data;
  }
};