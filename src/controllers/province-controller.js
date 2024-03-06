import { db } from "../models/db.js";
import { TreeSpec } from "../models/joi-schemas.js";

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
    validate: {
      payload: TreeSpec,
      options: { abortEarly: false },
      failAction: function (request, h, error) {
        return h.view("province-view", { title: "Add tree error", errors: error.details }).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const province = await db.provinceStore.getProvinceByTitle(request.params.title);
      const newTree = {
        title: request.payload.title,
        location: request.payload.location,
        height: request.payload.height,
        girth: request.payload.girth,
        description: request.payload.description,
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