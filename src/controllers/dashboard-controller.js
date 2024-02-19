import { db } from "../models/db.js";

export const dashboardController = {
  index: {
    handler: async function (request, h) {
      const loggedInUser = request.auth.credentials;
      const provinces = await db.provinceStore.getAllProvinces();
      const viewData = {
        title: "Tree Dashboard",
        user: loggedInUser,
        provinces: provinces,
      };
      return h.view("dashboard-view", viewData);
    },
  },
};