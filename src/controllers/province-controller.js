import { db } from "../models/db.js";
import { UserTreeSpec } from "../models/joi-schemas.js";

export const provinceController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const province = await db.provinceStore.getProvinceByTitleAndUserId(request.params.title, loggedInUser._id);
      const viewData = {
        title: "Province",
        province: province,
        user: loggedInUser,
      };
      return h.view("province-view", viewData);
    },
  },

  addUserTree: {
    validate: {
      payload: UserTreeSpec,
      options: { abortEarly: false },
      failAction: async function (request, h, error) {
        const loggedInUser = request.auth.credentials;
        const province = await db.provinceStore.getProvinceByTitle(request.params.title, loggedInUser._id);
        const viewData = {
          title: "Add tree error",
          province: province,
          user: loggedInUser,
          errors: error.details
        };
        return h.view("province-view", viewData).takeover().code(400);
      },
    },
    handler: async function (request, h) {
      const userId = request.payload.userid;
      const province = await db.provinceStore.getProvinceByTitle(request.params.title);
      console.log(province.title)
      const newUserTree = {
        title: request.payload.title,
        location: request.payload.location,
        height: request.payload.height,
        girth: request.payload.girth,
        description: request.payload.description,
      };
      await db.userTreeStore.addUserTree(province.title, userId, newUserTree);
      return h.redirect(`/province/${province.title}`);
    },
  },

  deleteUserTree: {
    handler: async function(request, h) {
      const province = await db.provinceStore.getProvinceByTitle(request.params.title);
      await db.userTreeStore.deleteUserTree(request.params.treeid);
      return h.redirect(`/province/${province.title}`);
    },
  },
};