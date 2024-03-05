import { db } from "../models/db.js";

export const provinceController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const province = await db.provinceStore.getProvinceByTitle(request.params.title, loggedInUser._id);
      const viewData = {
        title: "Province",
        province: province,
        user: loggedInUser,
      };
      return h.view("province-view", viewData);
    },
  },

  addTree: {
    handler: async function (request, h) {
      const province = await db.provinceStore.getProvinceByTitle(request.params.title);
      const newTree = {
        species: request.payload.species,
        height: request.payload.height,
        girth: request.payload.girth,
        county: request.payload.county,
      };
      const userId = request.payload.userid;
      await db.userTreeStore.addTree(province.title, userId, newTree);
      return h.redirect(`/province/${province.title}`);
    },
  },

  deleteTree: {
    handler: async function(request, h) {
      const province = await db.provinceStore.getProvinceByTitle(request.params.title);
      await db.userTreeStore.deleteTree(request.params.treeid);
      return h.redirect(`/province/${province.title}`);
    },
  },
};