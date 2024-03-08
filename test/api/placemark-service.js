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
    const res = await axios.get(`${this.placemarkUrl}/api/provinces/${title}`);
    console.log("placemark service error")
    return res.data;
  },
};