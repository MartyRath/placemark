import { db } from "../models/db.js";

export const provinceController = {
  index: {
    handler: async function (request, h) {
      const province = await db.provinceStore.getProvinceById(request.params.id);
      const loggedInUser = request.auth.credentials;
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
      const province = await db.provinceStore.getProvinceById(request.params.id);
      const newTree = {
        species: request.payload.species,
        height: request.payload.height,
        girth: request.payload.girth,
        county: request.payload.county,
      };
      const userId = request.payload.userid;
      await db.treeStore.addTree(province._id, userId, newTree);
      return h.redirect(`/province/${province._id}`);
    },
  },
};